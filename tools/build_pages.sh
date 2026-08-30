#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE="$ROOT/_site"

rm -rf "$SITE"
mkdir -p "$SITE"

rsync -a \
  --exclude '.git/' \
  --exclude '.github/' \
  --exclude '_site/' \
  --exclude 'assets/maps/*_a0_web.jpg' \
  "$ROOT/" "$SITE/"

bash "$ROOT/tools/generate_dzi.sh" "$ROOT/assets/maps" "$SITE/assets/maps/dzi"
python "$ROOT/tools/check_site.py" "$SITE"

printf 'Sitio preparado en %s\n' "$SITE"

