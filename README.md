# Detecciones térmicas y territorio — Tolima, agosto de 2026

Publicación científica, editorial y cartográfica sobre detecciones térmicas y su relación espacial con información institucional de ANM, ANLA y ANH.

- Sitio: <https://jcgomezga.github.io/incendios-tolima-2026/>
- Mapas A0 originales: <https://github.com/jcgomezga/incendios-tolima-2026/releases/latest>
- Escenario principal: B, con 1.537 hotspots y 409 episodios.

## Arquitectura

El sitio es HTML, CSS y JavaScript sin framework ni proceso de Node. El contenido editorial principal vive en `index.html`, lo que permite corregir textos directamente.

```text
.
├── index.html                 publicación principal
├── viewer.html                visor OpenSeadragon A3 / A0
├── documento.html             lector de documentos Markdown
├── assets/
│   ├── css/styles.css         sistema editorial y responsive
│   ├── js/
│   │   ├── app.js             navegación, tema, mapas y copiar cita
│   │   ├── site-config.js     rutas centralizadas de los mapas
│   │   └── viewer.js          visor JPEG y DZI
│   ├── figures/               figuras SVG y PNG
│   └── maps/
│       ├── *_a3.jpg           mapas A3 de alta resolución
│       ├── *_a0_web.jpg       fuentes A0 para generar teselas
│       └── previews/          vistas A3 ligeras para la página
├── data/tables/               32 tablas CSV
├── docs/                      metodología y capítulos analíticos
├── tools/                     validación y construcción
└── .github/workflows/pages.yml
```

Las pirámides `assets/maps/dzi/` no se guardan en Git. Se generan automáticamente con libvips durante el despliegue y se incorporan al artefacto de GitHub Pages.

## Editar texto

1. Abre `index.html`.
2. Busca el título o la frase que deseas cambiar.
3. Conserva las etiquetas HTML que rodean el texto.
4. No cambies resultados numéricos sin verificarlos en `data/tables/GENERAL/tabla_00_comparacion_institucional_B.csv` y en las tablas institucionales.

Los documentos largos están en `docs/*.md`. `documento.html` los convierte a HTML al abrirlos.

## Actualizar un mapa

Los nombres estables son:

```text
assets/maps/anm_a3.jpg
assets/maps/anla_a3.jpg
assets/maps/anh_a3.jpg
assets/maps/anm_a0_web.jpg
assets/maps/anla_a0_web.jpg
assets/maps/anh_a0_web.jpg
```

Después de reemplazar un A3, actualiza su previsualización:

```bash
convert assets/maps/anm_a3.jpg \
  -resize '2200x2200>' -strip -interlace Plane -quality 84 \
  assets/maps/previews/anm_a3_preview.jpg
```

Cambia `anm` por `anla` o `anh`. El A3 completo permanece disponible en el visor y para descarga; la página principal carga únicamente la previsualización de aproximadamente 1 MiB.

Después de reemplazar un A0 web no es necesario crear teselas manualmente. El siguiente despliegue regenera su pirámide DZI. Los originales de máxima calidad permanecen en GitHub Releases y sus rutas se controlan en `assets/js/site-config.js`.

## Generar DZI localmente

Requiere `libvips-tools`:

```bash
bash tools/generate_dzi.sh assets/maps assets/maps/dzi
```

Cada A0 produce un descriptor `.dzi` y una carpeta de teselas JPEG de 1.024 px. OpenSeadragon solicita solo las teselas necesarias para el nivel de zoom visible, evitando decodificar 558 millones de píxeles como una sola imagen.

## Verificar

Comprobación de mapas fuente y previsualizaciones:

```bash
python tools/check_maps.py
```

Prueba local básica:

```bash
python -m http.server 8000
```

Abre <http://localhost:8000/>. Para probar los A0 localmente debes generar primero `assets/maps/dzi/`.

La construcción de producción ejecuta además:

```bash
python tools/check_site.py _site
```

Este control verifica rutas internas, cifras principales y presencia de las tres pirámides DZI.

## Publicar

GitHub Pages debe usar **GitHub Actions** como fuente de publicación. Cada cambio en `main` ejecuta `.github/workflows/pages.yml`, que:

1. instala libvips;
2. prepara una carpeta `_site` limpia;
3. excluye los JPEG A0 web del artefacto final;
4. genera las tres pirámides DZI;
5. verifica rutas y cifras;
6. publica el resultado.

Los A0 web se conservan en el repositorio únicamente como fuentes de construcción. Los A0 originales no se sobrescriben: continúan alojados en el Release.

## Agregar una referencia

1. Añade el enlace en la sección `#fuentes` de `index.html`.
2. Si sustenta una afirmación del texto, agrega el número correspondiente junto a esa afirmación.
3. Prefiere la URL oficial y evita referencias que no se utilicen en la publicación.

## Criterio científico

La publicación usa deliberadamente lenguaje de coincidencia, proximidad, asociación espacial y concentración relativa. Mantiene explícitos estos límites:

- hotspot ≠ incendio confirmado;
- episodio ≠ hotspot;
- `scan × track` ≠ área quemada;
- coincidencia espacial ≠ causalidad;
- título o solicitud ANM ≠ operación puntual;
- licencia o seguimiento ANLA ≠ origen térmico;
- bloque o contrato ANH ≠ actividad puntual;
- yacimiento ≠ pozo.

No se ha asignado automáticamente una licencia al contenido o a los datos.
