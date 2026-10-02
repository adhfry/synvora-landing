#!/usr/bin/env bash
# Synvora CI deploy gate. Installed as /usr/local/bin/synvora-deploy and bound to
# the GitHub Actions key via a forced command in authorized_keys:
#   command="/usr/local/bin/synvora-deploy",restrict ssh-ed25519 AAAA... synvora-ci
# The CI key can therefore ONLY run these two commands, never a shell:
#   ssh <host> deploy <commit-sha>   -> deploy that commit (must be on origin/main)
#   ssh <host> check  <commit-sha>   -> preflight + build only, nothing live changes
set -euo pipefail

read -r action sha extra <<<"${SSH_ORIGINAL_COMMAND:-}"
[ -z "${extra:-}" ] || { echo "too many arguments" >&2; exit 2; }
[[ "${sha:-}" =~ ^[0-9a-f]{40}$ ]] || { echo "a full 40-char commit sha is required" >&2; exit 2; }

case "${action:-}" in
  deploy) exec sudo -n /usr/local/sbin/synvora-deploy-run "$sha" ;;
  check)  exec sudo -n /usr/local/sbin/synvora-deploy-run "$sha" --check ;;
  *)      echo "usage: deploy|check <commit-sha>" >&2; exit 2 ;;
esac
