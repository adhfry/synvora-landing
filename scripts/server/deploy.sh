#!/usr/bin/env bash
# Synvora landing: production deploy on the shared VPS.
#
# Installed ROOT-OWNED as /usr/local/sbin/synvora-deploy-run by setup-ci-deploy.sh
# (the CI never runs the copy inside the checkout, so a commit cannot change what
# runs as root until an admin reinstalls it).
#
#   sudo synvora-deploy-run <commit-sha|main>            deploy that commit
#   sudo synvora-deploy-run <commit-sha|main> --check    preflight + build only, changes nothing live
#
# Safety model:
#   * touches ONLY /var/www/synvorateknologiindonesia.web.id and the PM2 app "synvora";
#     never nginx, never other PM2 apps, never `pm2 save`/`restart all`.
#   * git, npm ci and the build run as the checkout owner (claude-deploy), not root.
#   * builds in a staging dir first; the live dist/ + node_modules/ are only swapped
#     (same-filesystem rename) after a successful build, so a failed build changes nothing.
#   * only commits already on origin/main, and never older than what is live.
#   * runtime data in data/ (comments, views, submissions) is untracked and never touched.
#   * health check after restart; on failure it rolls back automatically.
set -euo pipefail
umask 022

APP_DIR=/var/www/synvorateknologiindonesia.web.id
OWNER=claude-deploy
PM2_APP=synvora
LOCAL_URL=http://127.0.0.1:3050/
PUBLIC_URL=https://synvorateknologiindonesia.web.id/
PM2_BIN=/root/.nvm/versions/node/v24.13.1/bin   # pm2 CLI of the root PM2 daemon
STAGE=/var/tmp/synvora-build
PREV=/var/tmp/synvora-prev
# Other sites on this VPS: only REPORTED after the deploy (never modified).
NEIGHBOURS=(
  https://synctappy.biz.id/
  https://api.synctappy.biz.id/up
  https://aira.synvorateknologiindonesia.web.id/
  https://agrivita.synvorateknologiindonesia.web.id/
)

log() { printf '▶ %s\n' "$*"; }
die() { printf '✖ %s\n' "$*" >&2; exit 1; }

[ "$(id -u)" = 0 ] || die "run with sudo"
REF="${1:-}"; MODE="${2:-}"
[[ "$REF" =~ ^([0-9a-f]{40}|main)$ ]] || die "usage: synvora-deploy-run <40-char commit sha|main> [--check]"
[[ -z "$MODE" || "$MODE" == --check ]] || die "unknown option: $MODE"

export PATH="$PM2_BIN:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
as_owner() { sudo -u "$OWNER" -H -- "$@"; }
git_o() { as_owner git -c safe.directory="$APP_DIR" -C "$APP_DIR" "$@"; }

exec 9>/run/lock/synvora-deploy.lock
flock -n 9 || die "another Synvora deploy is running"

# ---------------------------------------------------------------- preflight
log "Preflight"
[ -d "$APP_DIR/.git" ] || die "$APP_DIR is not a git checkout"
pm2 describe "$PM2_APP" >/dev/null 2>&1 || die "PM2 app '$PM2_APP' not found (refusing to create it)"
[ "$(git_o rev-parse --abbrev-ref HEAD)" = main ] || die "server checkout is not on main"
git_o diff --quiet && git_o diff --cached --quiet || die "server checkout has local changes to tracked files; resolve by hand first"

git_o fetch --quiet origin main
[ "$REF" = main ] && REF=origin/main
TARGET="$(git_o rev-parse --verify --quiet "$REF^{commit}")" || die "unknown commit $REF"
CURRENT="$(git_o rev-parse HEAD)"
git_o merge-base --is-ancestor "$TARGET" origin/main || die "$TARGET is not on origin/main"
git_o merge-base --is-ancestor "$CURRENT" "$TARGET" || die "$TARGET is older than live ${CURRENT:0:7} (refusing to downgrade; roll back by hand)"
log "live ${CURRENT:0:7} → target ${TARGET:0:7}"

# ------------------------------------------------------------------ build
log "Build in $STAGE (as $OWNER)"
rm -rf "$STAGE"
install -d -o "$OWNER" -g "$OWNER" -m 750 "$STAGE"
git_o archive "$TARGET" | as_owner tar -x -C "$STAGE"
as_owner ln -s "$APP_DIR/.env" "$STAGE/.env"   # same build-time env as before; never copied
as_owner bash -c "cd '$STAGE' && npm ci --no-audit --no-fund --loglevel=error && npm run build"
[ -f "$STAGE/dist/server/entry.mjs" ] && [ -d "$STAGE/dist/client" ] || die "build output incomplete"

if [ "$MODE" = --check ]; then
  rm -rf "$STAGE"
  log "Check OK: ${TARGET:0:7} builds cleanly. Nothing live was changed."
  exit 0
fi

# ------------------------------------------------------------------- swap
log "Swap release"
rm -rf "$PREV"; install -d -m 700 "$PREV"
git_o merge --ff-only --quiet "$TARGET"
mv "$APP_DIR/dist" "$PREV/dist"
mv "$APP_DIR/node_modules" "$PREV/node_modules"
mv "$STAGE/dist" "$APP_DIR/dist"
mv "$STAGE/node_modules" "$APP_DIR/node_modules"
rm -rf "$STAGE"

healthy() {
  local code i
  for i in $(seq 1 15); do
    code="$(curl -s -o /dev/null -m 5 -w '%{http_code}' "$LOCAL_URL" || true)"
    [ "$code" = 200 ] && return 0
    sleep 2
  done
  echo "health check: last code $code" >&2
  return 1
}

rollback() {
  log "ROLLBACK to ${CURRENT:0:7}"
  rm -rf "$APP_DIR/dist" "$APP_DIR/node_modules"
  mv "$PREV/dist" "$APP_DIR/dist"
  mv "$PREV/node_modules" "$APP_DIR/node_modules"
  git_o reset --hard --quiet "$CURRENT"     # tracked files only; data/ is untracked
  pm2 restart "$PM2_APP" >/dev/null
  healthy && log "rolled back, site healthy on ${CURRENT:0:7}" || echo "✖ site still unhealthy after rollback: check by hand" >&2
  exit 1
}

# No --update-env: PORT/HOST live in the PM2 process env and must be kept.
log "Restart PM2 app $PM2_APP"
pm2 restart "$PM2_APP" >/dev/null || rollback
healthy || rollback
code="$(curl -s -o /dev/null -m 10 -w '%{http_code}' "$PUBLIC_URL" || true)"
[ "$code" = 200 ] || { echo "public URL returned $code" >&2; rollback; }

log "Neighbour sites (report only)"
for url in "${NEIGHBOURS[@]}"; do
  printf '  %s %s\n' "$(curl -s -o /dev/null -m 10 -w '%{http_code}' "$url" || echo ERR)" "$url"
done

echo "✔ Synvora deployed ${TARGET:0:7} (previous release kept in $PREV until the next deploy)"
