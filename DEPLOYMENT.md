# Deployment: Synvora landing

Production: **https://synvorateknologiindonesia.web.id** on the shared VPS (alias `produli-server`).

| Item | Value |
|---|---|
| Checkout | `/var/www/synvorateknologiindonesia.web.id` (owner `claude-deploy`, branch `main`) |
| Process | root PM2 app **`synvora`** → `dist/server/entry.mjs`, `127.0.0.1:3050` (PORT/HOST stored in PM2 env) |
| Proxy | host nginx vhost `synvorateknologiindonesia.web.id` (TLS by Certbot) |
| Secrets | `.env` in the checkout (mode 600, never committed) |
| Runtime data | `data/` (comments, view counts, consultation log), untracked, **never delete** |

## Shared VPS rules

The server also hosts Synctappy, AIRA, AgriVita, Produli, Silakes and others. Deploys touch **only** the
checkout above and the PM2 app `synvora`. Never `pm2 restart all`, `pm2 save`, reload/restart nginx or
change other vhosts/apps as part of a deploy.

## CI/CD (`.github/workflows/ci-cd.yml`)

* Every push / PR: `npm ci` + `npm run build` (no secrets in CI) and a gitleaks secret scan.
* Push to `main`, when both pass **and** repo variable `DEPLOY_ENABLED=true`: the `production`
  environment job SSHes with a CI-only key that has a **forced command** (`/usr/local/bin/synvora-deploy`),
  so it can only run `deploy <sha>` / `check <sha>`. Add required reviewers to the `production`
  environment in GitHub if every deploy should need a click.
* On the VPS, `/usr/local/sbin/synvora-deploy-run` (root-owned copy of `scripts/server/deploy.sh`):
  preflight (clean tree, commit on `origin/main`, no downgrade) → build in `/var/tmp/synvora-build` as
  `claude-deploy` → swap `dist/` + `node_modules/` → `pm2 restart synvora` (no `--update-env`) →
  health check local + public → **automatic rollback** on failure → report neighbour sites.
  The previous release stays in `/var/tmp/synvora-prev` until the next deploy.

Editing `scripts/server/*.sh` in git does **not** change what runs on the server; an admin must review
and reinstall them (root-owned, 755) to `/usr/local/sbin/synvora-deploy-run` and `/usr/local/bin/synvora-deploy`.

### One-time setup (admin)

1. Install the two scripts on the VPS as above.
2. Generate a dedicated key locally: `ssh-keygen -t ed25519 -N "" -C synvora-ci -f synvora-ci`.
3. Authorize **only** the public key for user `ahda` with
   `command="/usr/local/bin/synvora-deploy",restrict ` in front of it (back up `authorized_keys` first).
4. GitHub → repo → Settings → Environments → `production`: secrets `DEPLOY_HOST`, `DEPLOY_USER`
   (`ahda`), `DEPLOY_SSH_KEY` (private key), `DEPLOY_KNOWN_HOSTS` (`ssh-keyscan -t ed25519 <host>`).
   Delete the local private key afterwards.
5. Test: `ssh -i synvora-ci ahda@<host> check $(git rev-parse origin/main)` (builds only).
6. Set repo variable `DEPLOY_ENABLED=true`.

### Manual deploy / dry run

```bash
ssh produli-server 'sudo synvora-deploy-run main --check'   # build only, nothing live changes
ssh produli-server 'sudo synvora-deploy-run main'           # deploy
```
