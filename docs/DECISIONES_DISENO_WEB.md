# Decisiones de diseño web

## Objetivo

Combinar lectura científica, cartografía de alta resolución y trazabilidad sin convertir la página en un dashboard ni en una sucesión de tarjetas.

## Principios

1. **Artículo antes que tablero:** la narrativa conduce la lectura.
2. **Resultados comparables:** una tabla editorial común resume ANM, ANLA y ANH; los capítulos conservan su especificidad institucional.
3. **Cartografía jerárquica:** A3 visible en página; A0 bajo demanda.
4. **SVG para figuras:** nitidez con bajo peso.
5. **Carga contenida:** la página usa previsualizaciones A3 de 2.200 px; los A3 completos se reservan para el visor y la descarga.
6. **Accesibilidad:** HTML semántico, `alt`, skip link, contraste, soporte `prefers-reduced-motion`.
7. **Tema claro/oscuro:** persistente mediante `localStorage`, con etiqueta textual y estado accesible.
8. **Referencias enlazadas:** las fuentes institucionales abren en nueva pestaña.
9. **Cautela causal visible:** no queda relegada a una nota al pie.
10. **Reproducibilidad:** datos y documentos forman parte del mismo repositorio.

## Visor

OpenSeadragon se conserva porque permite:
- zoom profundo;
- pan;
- home;
- pantalla completa;
- navegador/minimapa;
- cargar JPEG A3 simples y pirámides Deep Zoom para A0.

Los A0 de 19.866 × 28.087 px no se abren como JPEG simples. `tools/generate_dzi.sh` usa libvips para producir descriptores DZI y teselas JPEG de 1.024 px durante el despliegue. Así se conserva la resolución y el navegador solicita solo la porción visible.

## GitHub Pages

Se usa un workflow de GitHub Actions:
- checkout e instalación de libvips;
- generación automática de DZI;
- validación de rutas, cifras y teselas;
- carga y despliegue del artefacto de Pages.

No hay build de Node ni Jekyll.

## Dirección editorial

- tipografía serif para titulares y lectura larga, sans serif para navegación y metadatos;
- reglas, columnas y espacios en blanco en lugar de contenedores redondeados repetidos;
- mapas en ancho completo como piezas centrales de cada capítulo;
- cifras en bandas y tablas editoriales, no como KPI empresariales;
- pies de figura numerados y límites institucionales visibles;
- índice sticky, progreso de lectura y menú móvil funcional;
- contenido principal editable directamente en `index.html`.
