#!/bin/bash
set -e

BACKUP_DIR="$(dirname "$0")/../backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DEST="$BACKUP_DIR/backup_$TIMESTAMP"

mkdir -p "$DEST"
docker compose cp app:/app/server/data/. "$DEST/"

FILE_COUNT=$(ls -1 "$DEST" | wc -l)
echo "Backed up $FILE_COUNT files to $DEST"

# Keep only last 10 backups
cd "$BACKUP_DIR"
ls -dt backup_* 2>/dev/null | tail -n +11 | xargs rm -rf 2>/dev/null || true
