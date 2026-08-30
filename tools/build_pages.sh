#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE="$ROOT/_site"

rm -rf "$SITE"
mkdir -p "$SITE"

rsync -a \
  --exclude '.git/' \
  --exclude '.github/' \
  --exclude 'README.md' \
  --exclude 'tools/' \
  --exclude '_site/' \
  --exclude 'assets/maps/*_a0_web.jpg' \
  --exclude 'docs/AUDITORIA_EDITORIAL_CONJUNTA.md' \
  --exclude 'docs/DECISIONES_DISENO_WEB.md' \
  --exclude 'docs/FUENTES_Y_CRITERIO_CITACION.md' \
  --exclude 'docs/MANIFIESTO_FIGURAS_MAPAS.csv' \
  --exclude 'REVISION_CIENTIFICA.md' \
  "$ROOT/" "$SITE/"

# Instala la etiqueta de Google Analytics en todas las páginas HTML publicadas
# y enlaza el seguimiento de eventos de mapas, capítulos y descargas.
python "$ROOT/tools/inject_analytics.py" "$SITE"

bash "$ROOT/tools/generate_dzi.sh" "$ROOT/assets/maps" "$SITE/assets/maps/dzi"
python "$ROOT/tools/check_site.py" "$SITE"

printf 'Sitio preparado en %s\n' "$SITE"
