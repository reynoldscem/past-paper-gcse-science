#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

# Backup existing data if container is running
if docker compose ps --status running 2>/dev/null | grep -q app; then
  echo "Backing up existing data..."
  ./scripts/backup.sh
fi

echo "Building and starting containers..."
docker compose up -d --build

# Find the most recent backup or local data to restore
LATEST_BACKUP=$(ls -dt backups/backup_* 2>/dev/null | head -1)

if [ -n "$LATEST_BACKUP" ] && [ -f "$LATEST_BACKUP/users.json" ]; then
  echo "Restoring data from backup ($LATEST_BACKUP)..."
  docker compose cp "$LATEST_BACKUP/." app:/app/server/data/
  # Restart to fix ownership via entrypoint
  docker compose restart app
  sleep 2
  echo "  restored from backup"
elif [ -f server/data/users.json ]; then
  echo "Copying local data into volume..."
  for f in server/data/*.json; do
    docker compose cp "$f" app:/app/server/data/
    echo "  copied $(basename $f)"
  done
  docker compose restart app
  sleep 2
fi

echo ""
echo "Done! Site is live at https://amyfromleek.duckdns.org"
echo ""
echo "Users:"
docker compose exec app node server/admin.js list-users 2>/dev/null || echo "  (could not list users)"
echo ""
echo "To manage users:"
echo "  docker compose exec app node server/admin.js add-user <name> <password>"
echo ""
echo "To backup:"
echo "  ./scripts/backup.sh"
