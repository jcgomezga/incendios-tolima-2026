# Mapas A3, A0 y pirámides DZI

## Archivos fuente

```text
assets/maps/
├── anm_a3.jpg
├── anla_a3.jpg
├── anh_a3.jpg
├── anm_a0_web.jpg
├── anla_a0_web.jpg
├── anh_a0_web.jpg
└── previews/
    ├── anm_a3_preview.jpg
    ├── anla_a3_preview.jpg
    └── anh_a3_preview.jpg
```

Los A3 completos se abren con OpenSeadragon y se ofrecen para descarga. La publicación principal utiliza `previews/` para no transferir tres JPEG de más de 50 MiB durante la lectura normal.

Los A0 web miden 19.866 × 28.087 px. No se sirven como una imagen simple: durante el despliegue, `tools/generate_dzi.sh` crea una pirámide Deep Zoom con teselas JPEG de 1.024 px.

## Salida generada

```text
assets/maps/dzi/
├── anm_a0.dzi
├── anm_a0_files/
├── anla_a0.dzi
├── anla_a0_files/
├── anh_a0.dzi
└── anh_a0_files/
```

Esta salida no se versiona. GitHub Actions la incorpora al artefacto publicado. OpenSeadragon descarga únicamente los niveles y teselas visibles.

## Reemplazar un mapa

1. Conserva el nombre correspondiente.
2. Si cambias un A3, regenera la previsualización a 2.200 px de ancho.
3. Si cambias un A0 web, deja que el siguiente workflow reconstruya DZI.
4. Ejecuta `python tools/check_maps.py`.
5. Verifica título, fuentes, CRS, leyenda, escala, norte y advertencia causal antes de publicar.

## Originales A0

Los originales de máxima calidad se mantienen en GitHub Releases:

- `anm_a0_original.jpg`
- `anla_a0_original.jpg`
- `anh_a0_original.jpg`

Las rutas `releases/latest/download/...` están centralizadas en `assets/js/site-config.js`. No sobrescribas esos originales al actualizar las versiones web.

## Generación local opcional

Con libvips instalado:

```bash
bash tools/generate_dzi.sh assets/maps assets/maps/dzi
```

La generación es automática en producción; no se requiere crear ni subir teselas manualmente.
