# Detecciones térmicas y zonas de posible intervención extractiva — Tolima, agosto de 2026

Sitio estático listo para GitHub Pages.

## Qué incluye

- publicación científica responsive en `index.html`;
- visor interactivo de JPEG de alta resolución en `viewer.html`;
- navegación, tema claro/oscuro, progreso de lectura y diseño adaptable;
- resultados ANM, ANLA y ANH;
- 19 figuras científicas en SVG y PNG;
- tablas CSV del paquete analítico con índice web en `data/index.html`;
- documentación metodológica y auditoría con visor Markdown en `documento.html`;
- workflow de GitHub Actions para desplegar Pages;
- placeholders para seis mapas JPEG que se incorporan manualmente.

## 1. Incorporar los mapas

Copia tus archivos JPEG a:

```text
assets/maps/
```

con estos nombres exactos:

```text
anm_a3.jpg
anm_a0.jpg
anla_a3.jpg
anla_a0.jpg
anh_a3.jpg
anh_a0.jpg
```

Después ejecuta:

```bash
python tools/check_maps.py
```

Más detalle en [`assets/maps/README_MAPAS.md`](assets/maps/README_MAPAS.md).

## 2. Probar localmente

No abras únicamente `index.html` con doble clic si quieres verificar todas las rutas.
Desde la carpeta del repositorio:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000/
```

## 3. Subir a GitHub

### Repositorio nuevo
1. Crea un repositorio en GitHub.
2. Descomprime este ZIP.
3. Sube **el contenido** de esta carpeta a la raíz del repositorio.
4. Haz commit en la rama `main`.

### Repositorio existente
Copia/combina los archivos respetando las rutas. Haz una copia previa si ya tienes una web activa.

## 4. Activar GitHub Pages

El repositorio ya incluye:

```text
.github/workflows/pages.yml
```

En GitHub:
1. `Settings`
2. `Pages`
3. En **Build and deployment**, selecciona **GitHub Actions**.
4. Haz push a `main`.
5. Revisa la pestaña **Actions**.
6. Al finalizar, GitHub mostrará la URL pública.

## 5. Mapas y zoom

### A3
Cada mapa A3:
- se visualiza dentro de la publicación;
- es clickable;
- abre el visor en una nueva pestaña;
- puede descargarse directamente.

### A0
El A0:
- no se carga en la página principal;
- se abre desde “Explorar A0” en una pestaña nueva;
- usa OpenSeadragon para pan y zoom;
- tiene descarga directa.

Las rutas se controlan en un único archivo:

```text
assets/js/site-config.js
```

Si mantienes los seis nombres previstos, no tienes que editarlo.

## 6. Archivos grandes

GitHub bloquea archivos individuales mayores de 100 MiB y advierte por encima de 50 MiB.
GitHub Pages recomienda que el sitio publicado completo no supere 1 GB.

Si un A0 pesa más de 100 MiB:
- preferible: volver a exportarlo/comprimirlo manteniendo dimensiones;
- alternativa: GitHub Release u otro alojamiento y cambiar la URL en `site-config.js`.

## 7. Estructura

```text
.
├── index.html
├── viewer.html
├── 404.html
├── .nojekyll
├── .github/workflows/pages.yml
├── assets/
│   ├── css/styles.css
│   ├── js/
│   │   ├── app.js
│   │   ├── viewer.js
│   │   └── site-config.js
│   ├── figures/
│   └── maps/
├── data/tables/
├── docs/
└── tools/check_maps.py
```

## Criterio científico

El sitio usa deliberadamente lenguaje de:
- coincidencia;
- proximidad;
- asociación espacial;
- concentración relativa.

No atribuye causalidad a títulos, solicitudes, expedientes, contratos, yacimientos o pozos.

## Dependencia del visor

`viewer.html` carga OpenSeadragon desde jsDelivr. Si deseas un sitio 100% autónomo, puedes descargar la librería y reemplazar el `<script>` por una copia local.

## Licencia

No se asigna automáticamente una licencia al contenido o a los datos. Define una licencia antes de publicación definitiva si corresponde.
