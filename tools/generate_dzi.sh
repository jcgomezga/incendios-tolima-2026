#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${1:-assets/maps}"
OUTPUT_DIR="${2:-assets/maps/dzi}"

if ! command -v vips >/dev/null 2>&1; then
  echo "Falta libvips. Instala libvips-tools antes de generar las pirámides DZI." >&2
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

# Se generan pirámides para las dos escalas publicadas:
# - A3: mapa mediano, para visualización fluida también en móviles.
# - A0: mapa completo de alta resolución.
for agency in anm anla anh; do
  for variant in a3 a0; do
    if [[ "$variant" == "a3" ]]; then
      source_file="$SOURCE_DIR/${agency}_a3.jpg"
    else
      source_file="$SOURCE_DIR/${agency}_a0_web.jpg"
    fi

    output_base="$OUTPUT_DIR/${agency}_${variant}"

    if [[ ! -f "$source_file" ]]; then
      echo "No se encontró $source_file" >&2
      exit 1
    fi

    rm -rf "${output_base}.dzi" "${output_base}_files"
    echo "Generando DZI: ${agency^^} ${variant^^}"
    vips dzsave "$source_file" "$output_base" \
      --layout dz \
      --tile-size 1024 \
      --overlap 1 \
      --depth onepixel \
      --suffix '.jpg[Q=82,optimize_coding,strip]'
  done
done
