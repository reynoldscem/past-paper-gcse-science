#!/bin/sh
# Fix ownership of data files (docker cp creates them as root)
chown -R app:app /app/server/data 2>/dev/null || true
exec su-exec app node server/index.js
