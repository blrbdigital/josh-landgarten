#!/usr/bin/env bash
# Pinned release: one main push, then wait for this site's existing CI workflow.
set -euo pipefail
cd "$(dirname "$0")/.."
REPO="blrbdigital/josh-landgarten"
URL="https://josh-landgarten.blrbdigital.com"
[[ $# == 0 ]] || { echo 'This script takes no arguments.' >&2; exit 2; }
[[ "$(git branch --show-current)" == main ]] || { echo 'Release requires main.' >&2; exit 2; }
[[ -z "$(git status --porcelain)" ]] || { echo 'Commit and review the working tree first.' >&2; exit 2; }
remote=$(git remote get-url origin)
case "$remote" in
  "git@github.com:$REPO.git"|"https://github.com/$REPO.git") ;;
  *) echo "Unexpected origin; release stopped." >&2; exit 2 ;;
esac
# The 2026-10-26 legal sweep is authorized only after 08:00 Eastern.
if [[ "$(TZ=America/New_York date +%Y-%m-%d)" == 2026-10-26 && "$(TZ=America/New_York date +%H)" < 08 ]]; then
  echo 'The authorized release window begins at 08:00 ET.' >&2; exit 2
fi
legal-guard scan
npm run build
sha=$(git rev-parse HEAD)
[[ -z "$(git status --porcelain)" ]] || { echo 'Build changed tracked files; review before release.' >&2; exit 2; }
git push origin main
run=''
for attempt in {1..30}; do
  run=$(gh run list --repo "$REPO" --workflow deploy.yml --commit "$sha" --limit 1 --json databaseId --jq '.[0].databaseId // empty')
  [[ -z "$run" ]] || break
  sleep 2
done
[[ -n "$run" ]] || { echo "No CI run for $sha; do not start a parallel deploy." >&2; exit 1; }
gh run watch "$run" --repo "$REPO" --exit-status
[[ "$(curl -sS -L -o /dev/null -w '%{http_code}' "$URL")" == 200 ]]
printf 'Deployed %s via CI run %s: %s\n' "$sha" "$run" "$URL"
