# Decisiones de diseño web

## Objetivo

Combinar lectura científica, cartografía de alta resolución y trazabilidad sin convertir la página en un dashboard sobrecargado.

## Principios

1. **Artículo antes que tablero:** la narrativa conduce la lectura.
2. **Resultados comparables:** misma gramática para ANM, ANLA y ANH.
3. **Cartografía jerárquica:** A3 visible en página; A0 bajo demanda.
4. **SVG para figuras:** nitidez con bajo peso.
5. **Carga diferida:** los A3 usan `loading="lazy"`; los A0 no se cargan en el documento principal.
6. **Accesibilidad:** HTML semántico, `alt`, skip link, contraste, soporte `prefers-reduced-motion`.
7. **Tema claro/oscuro:** persistente mediante `localStorage`.
8. **Referencias enlazadas:** las fuentes institucionales abren en nueva pestaña.
9. **Cautela causal visible:** no queda relegada a una nota al pie.
10. **Reproducibilidad:** datos y documentos forman parte del mismo repositorio.

## Visor

OpenSeadragon se eligió porque permite:
- zoom profundo;
- pan;
- home;
- pantalla completa;
- navegador/minimapa;
- carga de imágenes simples.

Para un JPEG muy grande, OpenSeadragon advierte que una pirámide de teselas mejora el rendimiento. El sitio mantiene `type: image` para que el usuario solo tenga que copiar los JPEG.

## GitHub Pages

Se usa un workflow estático de GitHub Actions:
- checkout;
- configure-pages;
- upload-pages-artifact;
- deploy-pages.

No hay build de Node ni Jekyll.
