# Capítulo 1. Metodología general: detecciones térmicas, episodios y coincidencias espaciales con zonas de posible intervención extractiva en Tolima

## 1.1. Propósito y alcance

Este estudio analiza la distribución espacial de detecciones térmicas registradas durante agosto de 2026 en el departamento del Tolima y su proximidad o coincidencia con información institucional de la Agencia Nacional de Minería (ANM), la Autoridad Nacional de Licencias Ambientales (ANLA) y la Agencia Nacional de Hidrocarburos (ANH).

El análisis identifica **patrones espaciales susceptibles de verificación mediante evidencia independiente**. No busca demostrar que una actividad minera, petrolera o sometida a licenciamiento ambiental haya causado una detección térmica o un incendio. En consecuencia, se utilizan expresiones como *coincidencia*, *proximidad*, *asociación espacial* y *concentración relativa*. Se evita utilizar la superposición cartográfica como prueba de causalidad.

Las figuras institucionales tampoco son equivalentes entre sí. Un título minero no demuestra operación puntual; una solicitud minera representa un trámite y no explotación; un bloque o contrato de hidrocarburos no prueba actividad exactamente en el lugar de una detección; y una licencia, Plan de Manejo Ambiental o expediente de seguimiento documenta una relación administrativa y ambiental, no el origen de una fuente térmica.

### Guía rápida de términos

Para facilitar la lectura, los principales conceptos se utilizan con el siguiente sentido:

| Término | En lenguaje sencillo | No significa |
|---|---|---|
| **Detección térmica / hotspot** | Un punto donde el satélite registró una señal de calor inusual. | Incendio confirmado ni área quemada. |
| **Episodio térmico** | Una o varias detecciones cercanas que se agrupan para no contar varias observaciones del mismo fenómeno como eventos distintos. | Un incendio confirmado. |
| **Huella institucional** | El conjunto de áreas que aparecen en una capa institucional. Se usa como abreviatura cartográfica para títulos/solicitudes ANM, áreas ANLA o tierras contractuales ANH. | Huella ambiental, impacto, operación efectiva o responsabilidad. |
| **Coincidencia directa** | Al menos una detección del episodio cae dentro de un área institucional en el mapa. | Relación causal. |
| **Proximidad** | Distancia entre un episodio y el objeto institucional más cercano cuando no están superpuestos. | Que ambos fenómenos estén relacionados. |
| **Superficie disponible** | Porcentaje del territorio ocupado por el conjunto de áreas que se está comparando. | Área afectada por fuego. |
| **Valor esperado por superficie** | Cantidad hipotética de episodios que aparecería dentro de esas áreas si la distribución dependiera únicamente de cuánto territorio ocupan. | Predicción física del número de incendios. |
| **Índice de enriquecimiento** | Cociente entre el porcentaje de episodios observado y el porcentaje de territorio ocupado. Resume si los episodios aparecen proporcionalmente más o menos dentro de esas áreas. | Prueba de significancia estadística ni evidencia de causalidad. |
| **Escenario de sensibilidad** | Una versión alternativa del análisis utilizada para comprobar si una decisión metodológica cambia mucho los resultados. | Un resultado adicional que deba sumarse al principal. |
| **Recurrencia** | Repetición de señales térmicas en un mismo sector durante varias fechas. | Incendio recurrente ni fuente de ignición conocida. |
| **Cobertura de la tierra** | Tipo de superficie observado o cartografiado, por ejemplo arroz, bosque, pastos o zona urbana. | Uso exacto de cada predio ni causa de una detección. |

En cartografía, una **geometría** es simplemente la forma con la que un objeto se representa en el mapa: un **punto** para una localización concreta, una **línea** para elementos como ductos y un **polígono** para áreas con superficie.

## 1.2. Qué es una detección térmica

La unidad inicial es la **detección térmica** o *hotspot*: un punto donde un sensor satelital identifica una anomalía térmica, es decir, una señal de calor que sobresale respecto de su entorno y que puede ser compatible con fuego activo.

NASA FIRMS distribuye detecciones de fuego activo y anomalías térmicas derivadas, entre otros instrumentos, de MODIS y VIIRS. La propia documentación de FIRMS advierte que una detección puede corresponder a fuego, humo caliente, actividades agrícolas u otras fuentes, y que el píxel o huella del sensor no significa que toda esa superficie esté quemándose.

Por ello, en este estudio un hotspot se interpreta como **evidencia remota de una anomalía térmica**, no como un incendio confirmado. De manera coherente, el producto `scan × track` no se utiliza como área quemada. La delimitación de cicatrices exige un análisis independiente, por ejemplo con imágenes Sentinel-2 o Landsat e índices espectrales como dNBR.

## 1.3. Escenarios de observación

Se conservaron dos escenarios para comprobar cuánto depende el resultado de la decisión sobre Suomi-NPP. El escenario B es la versión principal y A funciona como control o **análisis de sensibilidad**: una repetición del cálculo con una decisión distinta para observar si las conclusiones cambian sustancialmente.

| Escenario | Definición | Hotspots |
|---|---|---:|
| A | Todos los sensores disponibles | 2.134 |
| B | Excluye 597 observaciones VIIRS Suomi-NPP | **1.537** |

El **escenario B** es el resultado principal. NASA FIRMS advierte que los datos e imágenes de Suomi-NPP recibidos después de las 17:45 UTC del 9 de marzo de 2026 pueden no cumplir las especificaciones de misión debido a una anomalía y recomienda cautela hasta completar su verificación instrumental. Dado que todo el periodo analizado es posterior a esa fecha, B excluye las 597 observaciones Suomi-NPP como control de calidad. El escenario A conserva todos los sensores como análisis de sensibilidad para evaluar cuánto depende la estructura de los resultados de esa exclusión; esta decisión no invalida de forma general el producto VIIRS Suomi-NPP.

## 1.4. Cómo se agrupan las detecciones en episodios térmicos

Varias detecciones cercanas pueden corresponder a distintas observaciones de un mismo fenómeno. Para evitar contar cada hotspot como un evento independiente, las detecciones se agruparon en **episodios térmicos**.

Se evaluaron combinaciones de 500, 1.000 y 2.000 m con ventanas de 12, 24 y 48 horas. La configuración seleccionada fue **1.000 m / 12 h**, porque ofrece un equilibrio entre fragmentar excesivamente un mismo fenómeno y fusionar eventos espacial o temporalmente diferentes.

La configuración produce:

| Indicador | A | B |
|---|---:|---:|
| Episodios | 432 | **409** |
| Episodios de una sola detección | 41,67 % | **50,61 %** |
| Detecciones medias por episodio | 4,94 | **3,76** |
| Mediana | 2 | **1** |
| Máximo de detecciones en un episodio | 140 | **85** |
| Duración media | 2,36 h | **1,98 h** |

Las tres unidades —hotspot, episodio y sitio recurrente— se mantienen separadas durante todo el análisis.

## 1.5. Regla de coincidencia del episodio

Un episodio conserva todas las detecciones que lo integran. Se clasifica como de **coincidencia directa** cuando al menos una de esas detecciones cae dentro de un área de la institución evaluada. En términos cartográficos, esto se denomina *intersección*: dos objetos ocupan el mismo lugar del mapa.

Esta regla evita perder una coincidencia real por usar únicamente el punto central del episodio —su **centroide**— cuando alguna de sus detecciones sí quedó dentro del área.

Cuando no existe intersección, se utiliza la distancia mínima y se asigna una de cuatro clases mutuamente excluyentes:

| Clase | Interpretación |
|---|---|
| `DIRECTA` | al menos una detección del episodio cae dentro del conjunto de áreas institucionales |
| `PROXIMA_1KM` | sin intersección, distancia mínima de hasta 1 km |
| `PROXIMA_1A5KM` | distancia mayor de 1 km y hasta 5 km |
| `SIN_COINCIDENCIA_5KM` | distancia superior a 5 km |

Cada episodio pertenece a una sola clase para cada institución analizada.

## 1.6. Cómo se compara la cantidad de episodios con el tamaño del área

Los conteos absolutos pueden resultar engañosos cuando un conjunto de áreas ocupa mucho territorio: cuanto más grande sea, más oportunidades tiene de contener episodios simplemente por su tamaño. Para evitar esa lectura se compara el porcentaje de episodios que cae dentro con el porcentaje del territorio que esas áreas ocupan.

El **valor esperado por superficie** es una referencia hipotética: pregunta cuántos de los 409 episodios aparecerían dentro de esas áreas si la única diferencia entre lugares fuera cuánto territorio ocupan. No predice incendios ni supone que los episodios se distribuyan realmente al azar.

El índice de enriquecimiento se define como:

**E = porcentaje de episodios observados / porcentaje de superficie disponible**

Su interpretación es descriptiva. Puede leerse como una razón o comparación de proporciones:

- **E = 1:** la proporción de episodios es aproximadamente igual a la proporción del territorio ocupado;
- **E > 1:** los episodios aparecen proporcionalmente más dentro de esas áreas; por ejemplo, E = 2 equivale a una proporción observada aproximadamente dos veces mayor que la proporción territorial;
- **E < 1:** los episodios aparecen proporcionalmente menos dentro de esas áreas.

**Ejemplo con ANM.** Las áreas ANM consolidadas ocupan 18,63 % del territorio analizado. Si los 409 episodios se repartieran únicamente en proporción al tamaño del área, la referencia sería 76,21 episodios. Se observaron 127, equivalentes al 31,05 % del total. El cálculo 31,05 / 18,63 = **1,666** indica que la proporción de episodios dentro de esas áreas fue aproximadamente 1,67 veces su proporción territorial. Esta comparación describe una concentración espacial; no indica quién produjo las señales ni si el patrón sería estadísticamente improbable bajo un modelo causal o aleatorio específico.

El indicador no es una prueba de significancia estadística —es decir, no calcula por sí solo qué tan probable sería observar el patrón por azar bajo una hipótesis estadística— y no controla por clima, cobertura, pendiente, accesibilidad, prácticas agropecuarias, densidad poblacional u otras variables que también pueden explicar la distribución térmica.

Este ajuste por tamaño territorial —denominado **normalización por superficie**— se aplica únicamente a áreas o **polígonos**. Los puntos y las líneas —por ejemplo pozos o ductos— no tienen una superficie comparable de ese modo y se estudian mediante distancia.

## 1.7. Cómo se identifican lugares con señales térmicas repetidas (recurrencia)

Además de episodios individuales, se buscaron lugares donde las señales aparecieron repetidamente durante agosto.

En B se conservaron 394 episodios compactos y se excluyeron 15 episodios espacialmente extensos mediante un radio máximo de 1.500 m. La recurrencia se examinó con radios de 500 y 1.000 m; ambos parámetros identificaron los mismos dos candidatos:

| ID | Patrón | Episodios | Fechas | Periodo | Municipio | Cobertura principal |
|---|---|---:|---:|---:|---|---|
| FT_001 | Recurrente alta | 7 | 7 | 24 días | Ibagué | Zonas industriales o comerciales |
| FT_002 | Recurrente media | 3 | 3 | 10 días | Ambalema | Mosaico de pastos con espacios naturales |

El término **fuente térmica recurrente** describe repetición de señales satelitales; no significa incendio recurrente ni identifica su causa.

## 1.8. Fuentes institucionales

### ANM

Se distinguen títulos y solicitudes. La Ley 685 de 2001 define el contrato de concesión minera y la ANM publica información sobre títulos y trámites. En este estudio, el estado o etapa administrativa se conserva como atributo institucional y no como evidencia observacional de actividad en agosto de 2026.

### ANLA

Se utilizan áreas, líneas y puntos relacionados con proyectos sometidos a licenciamiento, instrumentos de manejo y/o seguimiento. La ANLA define el seguimiento como la verificación de obligaciones y medidas ambientales durante distintas fases del proyecto. Por ello, una geometría ANLA no demuestra por sí sola operación puntual ni causalidad térmica.

### ANH

Se utilizan tierras contractuales, áreas de exploración y producción, y como información complementaria yacimientos y pozos. El Mapa de Tierras de la ANH representa la distribución, delimitación y clasificación de áreas hidrocarburíferas. Bloques, contratos, yacimientos y pozos representan objetos institucionales y espaciales distintos y se analizan separadamente.

## 1.9. Contexto territorial

Los episodios se contextualizan mediante municipios, **coberturas de la tierra IDEAM 2024** —categorías que describen qué tipo de superficie predomina, como arroz, bosque, pastos o zonas urbanas—, vías e hidrografía.

Algunos episodios contienen un empate entre dos municipios. Se conservaron seis etiquetas de este tipo: Alvarado–Anzoátegui, Ambalema–Venadillo, Carmen de Apicalá–Suárez, Coello–Espinal, Guamo–San Luis y Ortega–Rovira. Se denominan **episodios intermunicipales**: no se convierten en municipios adicionales y no se asignan arbitrariamente a una sola jurisdicción.

La misma regla se aplica a empates de cobertura cuando existen: una categoría compuesta se conserva como tal, en lugar de forzar el episodio a una cobertura individual.

## 1.10. Sistema de referencia y trazabilidad

El análisis espacial utiliza **MAGNA-SIRGAS 2018 / Origen-Nacional (EPSG:9377)**, el sistema de coordenadas que permite medir distancias y superficies de forma consistente en Colombia.

La trazabilidad de esta publicación conserva las tablas derivadas por institución, las figuras, los mapas y los criterios de validación utilizados para contrastar los resultados publicados.

Las tablas de resultados verifican 2.134 detecciones en A, 1.537 detecciones en B, 432 episodios en A, 409 en B y dos sitios recurrentes. Para cada institución, las cuatro clases espaciales son mutuamente excluyentes y cierran con el total de episodios de cada escenario. La superficie departamental de referencia es 24.128,102 km², valor que se utiliza como denominador común para ajustar las comparaciones por el tamaño de las áreas institucionales.

## 1.11. Lectura transversal de las tres instituciones

En B, la coincidencia directa es:

| Agencia | Episodios directos | % observado | % superficie | Esperados | Enriquecimiento |
|---|---:|---:|---:|---:|---:|
| ANM | 127 | 31,05 % | 18,63 % | 76,21 | 1,666 |
| ANLA | 143 | 34,96 % | 15,10 % | 61,76 | 2,315 |
| ANH | 187 | 45,72 % | 21,93 % | 89,69 | 2,085 |

![Comparación institucional entre ANM, ANLA y ANH en el escenario B.](assets/figures/svg/GENERAL/figura_00_comparacion_institucional_B.svg)

Estas cifras **no son aditivas**. Un mismo episodio puede quedar dentro de áreas correspondientes a más de una institución. La comparación sirve para describir patrones institucionales diferentes, no para construir un total de episodios “extractivos”.

## 1.12. Límites de interpretación

El diseño permite responder dónde se concentran las anomalías térmicas respecto de determinados conjuntos de áreas institucionales y si esa concentración es mayor o menor que la proporción territorial disponible.

No permite determinar por sí solo la causa de un episodio. Una investigación causal de casos específicos requeriría combinar fechas y coordenadas con imágenes de mayor resolución, cicatrices espectrales, registros operativos, información de quemas, reportes oficiales de incendios, registros administrativos detallados y, cuando sea posible, verificación de campo.

## Referencias institucionales y técnicas

- [NASA FIRMS. *Active Fire Data*](https://firms.modaps.eosdis.nasa.gov/active_fire/) y documentación de detecciones de fuego activo/anomalías térmicas.
- [NASA FIRMS. *Archive Download*](https://firms2.modaps.eosdis.nasa.gov/download/), aviso operativo sobre datos e imágenes Suomi-NPP posteriores al 9 de marzo de 2026. Consulta: 29 de agosto de 2026.
- [República de Colombia. Ley 685 de 2001](https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9202), artículo 45.
- [Agencia Nacional de Minería. Sector minero colombiano](https://www.anm.gov.co/index.php/sector-minero-colombiano).
- [Autoridad Nacional de Licencias Ambientales. *Control y Seguimiento*](https://www.anla.gov.co/seguimiento-de-licencias-ambientales/que-hacemos).
- [Agencia Nacional de Hidrocarburos. *Mapa de Tierras*](https://www.anh.gov.co/es/hidrocarburos/mapa-de-tierras/), actualización del 6 de agosto de 2026.
- [IDEAM. Coberturas de la Tierra](https://www.ideam.gov.co/nuestra-entidad/ecosistemas-e-informacion-ambiental/coberturas-de-la-tierra).
- [IGAC. Datos abiertos geoespaciales](https://www.igac.gov.co/datos-abiertos/datos-abiertos-geoespaciales).
- [DANE. Marco Geoestadístico Nacional 2025](https://geoportal.dane.gov.co/mparcgis/rest/services/MGN2025/Serv_CapasMGN_2025/FeatureServer).
