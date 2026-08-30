#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${1:-assets/maps}"
OUTPUT_DIR="${2:-assets/maps/dzi}"

if ! command -v vips >/dev/null 2>&1; then
  echo "Falta libvips. Instala libvips-tools antes de generar las pirámides DZI." >&2
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

for agency in anm anla anh; do
  source_file="$SOURCE_DIR/${agency}_a0_web.jpg"
  output_base="$OUTPUT_DIR/${agency}_a0"

  if [[ ! -f "$source_file" ]]; then
    echo "No se encontró $source_file" >&2
    exit 1
  fi

  rm -rf "${output_base}.dzi" "${output_base}_files"
  echo "Generando DZI: ${agency^^}"
  vips dzsave "$source_file" "$output_base" \
    --layout dz \
    --tile-size 1024 \
    --overlap 1 \
    --depth onepixel \
    --suffix '.jpg[Q=82,optimize_coding,strip]'
done
