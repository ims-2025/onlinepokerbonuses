#!/bin/bash
# Auto-deploy for OnlinePokerBonuses.com
# Commits any new/changed files (e.g. the daily news articles) and pushes to GitHub,
# which triggers a Vercel deployment. Runs on your Mac (which has network + your
# GitHub credentials), so it works where the in-app scheduled task cannot push.

REPO="/Users/cg/Documents/Claude/Projects/General Websites/onlinepokerbonuses"
LOG="$REPO/scripts/auto-deploy.log"

cd "$REPO" || { echo "$(date) — repo not found" >> "$LOG"; exit 1; }

# Remove any stale git lock from an interrupted operation
[ -f .git/index.lock ] && rm -f .git/index.lock

{
  echo "----- $(date) -----"
  git add -A
  if git diff --cached --quiet; then
    echo "No changes to commit."
  else
    git commit -m "Automated: publish daily poker news ($(date +%F))"
    echo "Committed."
  fi
  # Push whatever is ahead of origin (includes today's commit and any earlier ones)
  git push origin main && echo "Pushed to origin/main." || echo "Push failed — check credentials."
} >> "$LOG" 2>&1
