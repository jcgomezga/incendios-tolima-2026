# Auditoría editorial conjunta — Metodología, ANM, ANLA y ANH

## Veredicto

Los cuatro capítulos son consistentes con el paquete auditado y pueden consolidarse en una sola publicación. No se detectó una razón para recalcular ArcGIS Pro.

La auditoría editorial se concentró en cinco problemas: redundancia metodológica, diferencias de nomenclatura, unidades no aditivas, calidad de figuras y tratamiento de datos institucionales incompletos.

## 1. Estructura común adoptada

Los capítulos institucionales conservan una secuencia comparable:

1. significado de la fuente institucional;
2. patrón general de proximidad;
3. observado, esperado y enriquecimiento;
4. desagregación institucional pertinente;
5. fuentes administrativas principales;
6. municipios;
7. coberturas;
8. fuentes térmicas recurrentes;
9. mapa pendiente;
10. discusión y síntesis.

No se fuerza una estructura idéntica cuando la naturaleza de la fuente exige algo distinto. ANLA conserva una sección propia de líneas y puntos; ANH conserva secciones específicas de solapamientos, yacimientos y pozos.

## 2. Redundancias eliminadas o reducidas

La definición de hotspot, episodios de 1.000 m/12 h, escenarios A/B, EPSG:9377, clases de proximidad, fórmula de enriquecimiento y advertencia `scan × track ≠ área quemada` quedan desarrolladas una sola vez en el Capítulo 1.

Los capítulos ANM, ANLA y ANH mantienen únicamente recordatorios breves cuando son necesarios para interpretar una tabla o figura.

## 3. Nomenclatura fijada

- **detección térmica / hotspot:** observación individual;
- **episodio térmico:** agrupación espacial-temporal 1.000 m / 12 h;
- **fuente térmica recurrente:** sitio con repetición temporal;
- **coincidencia directa:** al menos un hotspot del episodio intersecta la huella;
- **enriquecimiento:** % observado / % de superficie;
- **episodio intermunicipal:** empate entre dos municipios; no constituye un municipio adicional.

Se evita utilizar “incendio” como sinónimo automático de hotspot o episodio.

## 4. No aditividad

### ANM
40 episodios coinciden con títulos y 99 con solicitudes; 12 están en ambas figuras. La unión es 127.

### ANLA
Los 143 episodios directos se consolidan por 29 expedientes. Un episodio puede intersectar más de un expediente, operador, línea o punto.

### ANH
103 episodios intersectan exploración y 93 producción; 9 pertenecen a ambas. La unión contractual es 187. Los cinco episodios sobre yacimientos ya están contenidos en esos 187.

### Entre instituciones
ANM, ANLA y ANH se evalúan por separado. Sus 127, 143 y 187 episodios directos no deben sumarse.

## 5. Figuras

### Decisiones generales
- B se identifica visualmente como escenario principal y A como sensibilidad.
- Se sustituyeron gráficos abstractos de enriquecimiento por comparaciones de `% observado` frente a `% superficie`.
- Las fuentes administrativas se consolidan por identificador oficial.
- Los episodios intermunicipales se excluyen de rankings municipales.
- Las coberturas con empate se conservan como categorías compuestas cuando corresponde.
- PNG de alta resolución y SVG editable se mantienen en paralelo.

### ANM
Se separaron solicitudes y títulos en dos figuras, porque el gráfico conjunto ocultaba el patrón relativo de los títulos.

### ANLA
Se consolidaron variantes y subáreas bajo el expediente oficial. El gráfico de una sola barra de enriquecimiento se sustituyó por observado frente a superficie.

### ANH
Se separaron contratos de exploración y producción. Los pozos tienen una figura propia de distancia. Los tres yacimientos directos se mantienen mejor en tabla que en una figura adicional.

## 6. Calidad de datos institucionales

- ANLA: `source_status` está vacío en los 192 registros publicables; no se asignan estados actuales.
- ANLA: valores administrativos dudosos como `1899-12-30` no se convierten en cronologías.
- ANH: estado contractual, estado de yacimiento y proximidad a pozo se interpretan como atributos diferentes.
- ANM: etapa y estado administrativo no demuestran operación física puntual.

## 7. Mapas

Los mapas definitivos no se generan automáticamente en este paquete. Se reservan tres rutas:

- `03_mapas/finales/ANM/`
- `03_mapas/finales/ANLA/`
- `03_mapas/finales/ANH/`

Cada carpeta contiene una ficha con nombre base, título y capas obligatorias.

## 8. Estado editorial

**Cerrado para esta fase:**
- arquitectura de cuatro capítulos;
- resultados numéricos;
- tablas derivadas;
- selección y diseño de figuras;
- reglas de interpretación;
- nombres y rutas de mapas.

**Pendiente antes del ZIP definitivo de publicación:**
- insertar los tres mapas finales exportados manualmente;
- decidir el formato bibliográfico final (APA, Chicago u otro);
- aplicar una última corrección tipográfica después de insertar mapas y numeración definitiva.
