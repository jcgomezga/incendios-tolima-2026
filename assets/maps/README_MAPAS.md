# Incorporación manual de mapas JPEG

La web está preparada para seis archivos. Si los copias exactamente con estos nombres, **no debes modificar código**:

```text
assets/maps/
├── anm_a3.jpg
├── anm_a0.jpg
├── anla_a3.jpg
├── anla_a0.jpg
├── anh_a3.jpg
└── anh_a0.jpg
```

## Comportamiento

### A3
El archivo A3 aparece visible dentro del capítulo correspondiente. Al hacer clic sobre él:
- abre `viewer.html` en una nueva pestaña;
- permite zoom, pan, navegador de miniatura, vista inicial y pantalla completa;
- conserva acceso a “Abrir JPG” y “Descargar”.

### A0
El A0 no se incrusta en la publicación principal para evitar cargar una imagen enorme.
Los botones “Explorar A0” y “Descargar A0” utilizan el archivo de máxima resolución.

## Si tus archivos se llaman `.jpeg`
La forma más sencilla es renombrarlos a `.jpg`. Si quieres conservar `.jpeg`, edita únicamente:

`assets/js/site-config.js`

## Límites de GitHub

GitHub advierte al superar 50 MiB y bloquea archivos individuales de más de 100 MiB.
GitHub Pages recomienda mantener el sitio publicado por debajo de 1 GB.

Por ello:

1. Comprueba el tamaño de cada JPEG.
2. Si está por debajo de 100 MiB, puede permanecer en el repositorio.
3. Si supera 100 MiB, **no intentes subirlo directamente**:
   - vuelve a exportar/comprimir el JPEG manteniendo sus dimensiones en píxeles; o
   - publícalo como asset de un GitHub Release / almacenamiento externo y cambia su URL en `site-config.js`.

### Importante sobre visores externos

OpenSeadragon puede mostrar una imagen JPEG simple. Para imágenes extremadamente grandes, una pirámide de teselas (DZI/IIIF) ofrece mejor rendimiento. La versión incluida funciona directamente con JPEG para que la incorporación manual sea sencilla.

## Comprobación automática

Desde la raíz del repositorio:

```bash
python tools/check_maps.py
```

El script indica:
- archivos presentes/ausentes;
- tamaño en MiB;
- advertencia al superar 50 MiB;
- error al superar 100 MiB.
