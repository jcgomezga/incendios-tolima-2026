# Revisión científica, editorial y técnica

**Repositorio:** `jcgomezga/incendios-tolima-2026`  
**Copia de trabajo:** ZIP suministrado por el autor  
**Fecha de revisión:** 29 de agosto de 2026  
**Alcance:** contenido científico publicado, capítulos metodológico e institucionales, página de documentación y proceso de construcción de GitHub Pages.

Este registro documenta cambios sustantivos. No enumera correcciones menores de puntuación, estilo o normalización tipográfica.

## 1. Archivos modificados

- `index.html`
- `docs/01_metodologia_general_v2.md`
- `docs/02_ANM_v2.md`
- `docs/03_ANLA_v2.md`
- `docs/04_ANH_v2.md`
- `docs/index.html`
- `tools/build_pages.sh`
- `tools/generate_dzi.sh`
- `REVISION_CIENTIFICA.md` — archivo nuevo de control editorial; se excluye del artefacto de GitHub Pages.

## 2. Capítulos revisados

Se leyeron integralmente y se contrastaron entre sí:

1. Metodología general.
2. ANM: títulos y solicitudes mineras.
3. ANLA: licenciamiento y seguimiento ambiental.
4. ANH: tierras contractuales, yacimientos y pozos.
5. Página principal de la publicación (`index.html`).
6. Índice público de documentos (`docs/index.html`).

También se revisaron los archivos HTML auxiliares, JavaScript, CSS, tablas CSV necesarias para cotejar cifras, mapas A3/A0 y previsualizaciones, scripts de construcción y validadores existentes.

## 3. Principales problemas detectados

- El capítulo ANM conservaba una sección de producción cartográfica en estado de borrador: “El mapa definitivo se incorporará…”, “Título propuesto”, “Contenido mínimo” y “Archivos publicados”, aunque el mapa ya existía y estaba integrado al sitio.
- Existían formulaciones de proceso o de trabajo futuro incompatibles con una publicación terminada, especialmente en ANM y ANLA.
- La metodología explicaba la exclusión de Suomi-NPP como una decisión del proyecto sin incorporar en el texto principal la advertencia operacional de NASA FIRMS vigente desde el 9 de marzo de 2026.
- La clasificación resumida de proximidad en `index.html` utilizaba una formulación ambigua para la última clase (“sin coincidencia hasta 5 km”); la tabla y los capítulos muestran que corresponde a distancias superiores a 5 km.
- El capítulo ANH incluía dos distancias específicas entre FT_001/FT_002 y pozos (ALFA-1 y AMBALEMA-1) que no pueden reconstruirse a partir de ninguna tabla publicada del repositorio.
- La navegación pública de documentos mezclaba los capítulos científicos con auditorías y decisiones internas de diseño/mantenimiento.
- El proceso de construcción copiaba al artefacto de GitHub Pages documentación técnica e interna que no necesita formar parte de la publicación científica.
- `tools/generate_dzi.sh` tenía finales de línea CRLF y Bash detectaba un error sintáctico en el bucle `for` bajo Linux. `tools/build_pages.sh` presentaba el mismo formato de finales de línea, aunque sin error de sintaxis en la comprobación estática.

## 4. Correcciones editoriales realizadas

- Se incorporó una introducción de portada orientada a público general que explica cómo explorar los mapas y capítulos y resume los hallazgos sin atribuir causalidad.
- Se incorporó una sección pública **“Cómo leer”** con definiciones en lenguaje no especializado de detección térmica/hotspot, episodio térmico, huella institucional, coincidencia directa, proximidad, superficie y valor esperado, índice de enriquecimiento, escenarios A/B, recurrencia, cobertura de la tierra, geometrías cartográficas y solapamientos.
- Se sustituyeron en la portada varias etiquetas técnicas por equivalentes más comprensibles —por ejemplo, “episodios dentro del área”, “parte del territorio” y “concentración relativa”—, conservando el nombre científico del indicador en las explicaciones.
- Se añadieron guías de lectura al inicio de los capítulos ANM, ANLA y ANH para que puedan comprenderse de forma autónoma sin exigir lectura previa de la metodología.
- Se incorporó en la metodología un glosario tabular y un ejemplo numérico completo del índice de enriquecimiento usando ANM (18,63 % del territorio, 31,05 % de episodios, E = 1,666).
- Se simplificaron encabezados como “patrón general de proximidad” y “observados, esperados y enriquecimiento” para formular directamente la pregunta que responde cada sección.
- Se reemplazó el uso innecesario de *hotspot* en la prosa de los capítulos por “detección térmica”, conservando el término técnico entre paréntesis en tablas cuando resulta útil.
- Se convirtió la sección cartográfica de ANM en texto final: título definitivo, descripción del contenido real del mapa, áreas de detalle, interpretación y advertencia de lectura no causal.
- Se eliminaron instrucciones al autor, marcadores de producción, formulaciones de “versión final” y tareas futuras del cuerpo científico cuando la información ya podía presentarse como resultado o limitación.
- Se redujo meta-lenguaje de auditoría y mantenimiento en las páginas visibles al lector.
- `docs/index.html` quedó restringido a metodología y capítulos científicos ANM, ANLA y ANH.
- Se armonizó la redacción de la página principal con los capítulos completos, incluida la formulación de la última clase de proximidad.
- Se actualizó la cita sugerida de la publicación para que sea consistente con los dos autores identificados en la línea de elaboración del sitio.
- Se normalizaron denominaciones, unidades y puntuación decimal en fragmentos del capítulo ANH sin cambiar resultados.
- Se corrigieron rutas internas explícitas hacia tablas cuando estaban incompletas o no correspondían a la estructura real del repositorio.

## 5. Correcciones científicas realizadas

- Se reforzó de forma transversal la distinción entre detección térmica, episodio térmico, incendio confirmado y área quemada.
- Se mantuvo explícito que `scan × track` no representa área quemada.
- Se mantuvo la separación entre coincidencia espacial, proximidad, enriquecimiento descriptivo y causalidad.
- Se precisó que título minero, solicitud minera, licencia/seguimiento ambiental, tierra contractual, yacimiento y pozo son objetos institucionales diferentes y no evidencian por sí mismos una fuente de ignición ni actividad puntual en el momento de una detección.
- Se incorporó a la metodología la advertencia operacional de NASA FIRMS sobre datos Suomi-NPP recibidos desde el 9 de marzo de 2026 y se conservó el escenario A como análisis de sensibilidad. Esto no se presenta como invalidación general del sensor.
- Se retiraron del capítulo ANH las distancias FT_001–ALFA-1 y FT_002–AMBALEMA-1 porque carecen de una tabla o relación reproducible en el repositorio. No se sustituyeron por cifras inferidas de otra población de referencia.
- Se reformularon expresiones que podían sugerir demostración causal o “significado” sustantivo no respaldado por el diseño descriptivo.

## 6. Inconsistencias numéricas encontradas

No se identificó una contradicción que justifique modificar las cifras centrales de resultados.

Se verificó directamente en `data/tables/GENERAL/tabla_00_comparacion_institucional_B.csv`:

- ANM: 127 de 409 episodios; 31,05 % observado; 18,63 % de superficie; enriquecimiento 1,666.
- ANLA: 143 de 409 episodios; 34,96 % observado; 15,10 % de superficie; enriquecimiento 2,315.
- ANH: 187 de 409 episodios; 45,72 % observado; 21,93 % de superficie; enriquecimiento 2,085.

Las cuatro clases de proximidad del escenario B suman 409 episodios para ANM, ANLA y ANH. El denominador superficial reproducido desde las tres huellas institucionales es aproximadamente 24.128,102 km². En ANH también se verificó la identidad de solapamiento: 103 episodios en exploración + 93 en producción − 9 en ambas = 187 episodios en la unión contractual; los cinco episodios asociados con yacimientos están incluidos en esa unión.

La corrección de “a más de 5 km” en la página principal fue una corrección de etiqueta metodológica, no de cifra.

## 7. Referencias problemáticas o verificadas

Se contrastaron en fuentes institucionales oficiales las referencias principales utilizadas por la publicación:

- NASA FIRMS: Active Fire / Thermal Anomalies y advertencia operacional de Suomi-NPP.
- Agencia Nacional de Minería: información sectorial y marco de títulos/solicitudes.
- Función Pública: Ley 685 de 2001, artículo 45. Se actualizó el host de la referencia a `www1.funcionpublica.gov.co`, que corresponde al recurso oficial verificado.
- ANLA: Control y Seguimiento y servicio geográfico `PROYECTOS_ANLA`.
- ANH: Mapa de Tierras actualizado el 6 de agosto de 2026, servicio geográfico de Tierras, relación de áreas asignadas al 31 de julio de 2026 y servicio de Yacimientos.
- IDEAM, IGAC y DANE: enlaces institucionales ya utilizados por la metodología.

No se agregaron DOI, autores, fechas, títulos o referencias no verificadas.

## 8. Recursos faltantes o advertencias técnicas

- Las pirámides DZI no forman parte del árbol fuente y se generan durante el despliegue. El validador `tools/check_site.py` ejecutado sobre la fuente local reporta por ello tres errores esperados: DZI incompleta para ANM, ANLA y ANH.
- El entorno de esta revisión no dispone de `libvips`; por esa razón no fue posible ejecutar localmente la generación completa de DZI. El workflow de GitHub Actions instala `libvips-tools` antes de construir el sitio, por lo que esta validación debe confirmarse en el despliegue posterior al `push`.
- `tools/check_maps.py` confirma la presencia de los seis mapas principales y las tres previsualizaciones. Los seis JPEG A3/A0 superan 50 MiB y producen una advertencia de tamaño, pero no fueron modificados.
- La simulación de la etapa `rsync` del constructor confirmó que `README.md`, `tools/`, auditorías internas, decisiones de diseño, manifiesto técnico y este registro de revisión quedan fuera del artefacto público de Pages, mientras los cuatro capítulos científicos y las páginas necesarias permanecen incluidos.

## 9. Cuestiones que no pudieron resolverse sin nueva información

1. **ANM — reconstrucción completa por fuente.** El capítulo conserva los conteos de 35 títulos y 63 solicitudes con coincidencia directa, así como sus distribuciones por estado/etapa, porque no se encontró evidencia contradictoria. Sin embargo, las tablas publicadas actualmente no contienen el universo completo de esas 98 fuentes: `ANM_tabla_03_fuentes_curadas.csv` contiene un subconjunto curado de 16 registros. Por tanto, esos desgloses no pueden auditarse de forma independiente únicamente con los CSV publicados. Para reproducibilidad completa sería necesario publicar o documentar la tabla fuente completa usada para derivarlos.
2. **ANH — distancias de fuentes recurrentes a pozos.** No existe en las tablas publicadas una relación específica FT_001/FT_002–pozo. Por esta razón se retiraron las dos distancias puntuales que figuraban en el texto. Si existe una tabla de cálculo original, podría reincorporarse el resultado después de verificarla.
3. **DZI — validación de construcción completa.** Debe comprobarse en GitHub Actions después de publicar, debido a la ausencia de `libvips` en el entorno local de revisión.

## Validaciones finales ejecutadas

- Inventario recursivo del ZIP: 105 archivos.
- Lectura integral de los cuatro capítulos científicos.
- Contraste de resultados centrales contra CSV.
- Inspección visual de los tres mapas A3 de previsualización y verificación de la existencia de A3/A0.
- Búsqueda contextual de expresiones provisionales y meta-lenguaje en el contenido científico publicado.
- Comprobación de rutas locales HTML y recursos referenciados: sin faltantes detectados.
- Comprobación de IDs HTML duplicados: ninguno detectado.
- Numeración de figuras: 1–19, continua.
- Numeración de mapas: 1–3, continua.
- `node --check` en los tres JavaScript principales: correcto.
- `bash -n` en los dos scripts de construcción: correcto después de normalizar finales de línea.
- `tools/check_maps.py`: resultado `LISTO`, con advertencias de tamaño >50 MiB para mapas principales.
- `tools/check_site.py` sobre el árbol fuente: únicamente tres errores DZI esperados por tratarse de recursos generados durante el despliegue.

## 10. Reorganización narrativa para lectura web

Se realizó una segunda reorganización de la página principal orientada a lectura rápida y divulgación pública, sin alterar cifras, datos, mapas ni resultados científicos:

- El recorrido principal pasó a ser: **introducción breve → hallazgo comparativo → gráfica general → mapa ANM → mapa ANLA → mapa ANH → explicación conceptual → metodología**.
- Se retiró de la apertura la ficha extensa de indicadores para reducir el tiempo hasta el primer resultado y el primer mapa.
- Los tres mapas institucionales se convirtieron en el núcleo visual de la página; cada uno conserva únicamente un resumen cuantitativo breve y el acceso al capítulo analítico completo.
- Las 18 figuras institucionales complementarias permanecen disponibles, pero ahora están plegadas bajo controles “Ver gráficos complementarios”, para no interrumpir el recorrido cartográfico principal.
- El glosario de conceptos se desplazó después de los mapas y se presenta como material para profundizar, no como requisito previo para comprender los hallazgos.
- Se concentró la cautela causal en una advertencia interpretativa general, evitando repetir la misma salvedad en cada bloque de la página principal. Los capítulos metodológicos conservan las precisiones científicas completas.
- Se simplificaron expresiones visibles como “huella institucional” en favor de “área institucional” cuando el término técnico no era indispensable.
- Se mantuvieron intactas las cifras centrales: ANM 127/409; ANLA 143/409; ANH 187/409, así como sus porcentajes territoriales e índices relativos.

La finalidad de este cambio es que una persona pueda comprender el mensaje central y acceder a los mapas en los primeros momentos de navegación, mientras la explicación metodológica y la trazabilidad permanecen disponibles para quienes deseen profundizar.
