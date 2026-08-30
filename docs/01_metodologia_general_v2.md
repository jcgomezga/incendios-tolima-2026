# Capítulo 1. Metodología general: detecciones térmicas, episodios y coincidencias espaciales con zonas de posible intervención extractiva en Tolima

## 1.1. Propósito y alcance

Este estudio analiza la distribución espacial de detecciones térmicas registradas durante agosto de 2026 en el departamento del Tolima y su proximidad o coincidencia con información institucional de la Agencia Nacional de Minería (ANM), la Autoridad Nacional de Licencias Ambientales (ANLA) y la Agencia Nacional de Hidrocarburos (ANH).

El análisis busca identificar **patrones espaciales que merecen verificación posterior**. No busca demostrar que una actividad minera, petrolera o sometida a licenciamiento ambiental haya causado una detección térmica o un incendio. En consecuencia, se utilizan expresiones como *coincidencia*, *proximidad*, *asociación espacial* y *concentración relativa*. Se evita utilizar la superposición cartográfica como prueba de causalidad.

Las figuras institucionales tampoco son equivalentes entre sí. Un título minero no demuestra operación puntual; una solicitud minera representa un trámite y no explotación; un bloque o contrato de hidrocarburos no prueba actividad exactamente en el lugar de una detección; y una licencia, Plan de Manejo Ambiental o expediente de seguimiento documenta una relación administrativa y ambiental, no el origen de una fuente térmica.

## 1.2. Qué es una detección térmica

La unidad inicial es la **detección térmica** o *hotspot*: una observación satelital en la que un sensor identifica una anomalía térmica o señal compatible con fuego activo.

NASA FIRMS distribuye detecciones de fuego activo y anomalías térmicas derivadas, entre otros instrumentos, de MODIS y VIIRS. La propia documentación de FIRMS advierte que una detección puede corresponder a fuego, humo caliente, actividades agrícolas u otras fuentes, y que el píxel o huella del sensor no significa que toda esa superficie esté quemándose.

Por ello, en este estudio un hotspot se interpreta como **evidencia remota de una anomalía térmica**, no como un incendio confirmado. De manera coherente, el producto `scan × track` no se utiliza como área quemada. La delimitación de cicatrices exige un análisis independiente, por ejemplo con imágenes Sentinel-2 o Landsat e índices espectrales como dNBR.

## 1.3. Escenarios de observación

Se conservaron dos escenarios:

| Escenario | Definición | Hotspots |
|---|---|---:|
| A | Todos los sensores disponibles | 2.134 |
| B | Excluye 597 observaciones VIIRS Suomi-NPP | **1.537** |

El **escenario B** es el resultado principal. El escenario A se conserva como análisis de sensibilidad para evaluar si la estructura general de los resultados depende de incluir las observaciones Suomi-NPP.

## 1.4. De hotspots a episodios térmicos

Varias detecciones cercanas pueden corresponder a distintas observaciones de un mismo fenómeno. Para evitar contar cada hotspot como un evento independiente, las detecciones se agruparon en **episodios térmicos**.

Se evaluaron combinaciones de 500, 1.000 y 2.000 m con ventanas de 12, 24 y 48 horas. La configuración seleccionada fue **1.000 m / 12 h**, porque ofrece un equilibrio entre fragmentar excesivamente un mismo fenómeno y fusionar eventos espacial o temporalmente diferentes.

La configuración produce:

| Indicador | A | B |
|---|---:|---:|
| Episodios | 432 | **409** |
| Episodios unitarios | 41,67 % | **50,61 %** |
| Hotspots medios por episodio | 4,94 | **3,76** |
| Mediana | 2 | **1** |
| Máximo de hotspots | 140 | **85** |
| Duración media | 2,36 h | **1,98 h** |

Las tres unidades —hotspot, episodio y sitio recurrente— se mantienen separadas durante todo el análisis.

## 1.5. Regla de coincidencia del episodio

Un episodio conserva todas las detecciones que lo integran. Se clasifica como de **coincidencia directa** cuando al menos uno de sus hotspots intersecta la huella institucional evaluada.

Esta regla evita perder una intersección real porque un centroide representativo del episodio haya quedado fuera del polígono.

Cuando no existe intersección, se utiliza la distancia mínima y se asigna una de cuatro clases mutuamente excluyentes:

| Clase | Interpretación |
|---|---|
| `DIRECTA` | al menos un hotspot del episodio intersecta la huella |
| `PROXIMA_1KM` | sin intersección, distancia mínima de hasta 1 km |
| `PROXIMA_1A5KM` | distancia mayor de 1 km y hasta 5 km |
| `SIN_COINCIDENCIA_5KM` | distancia superior a 5 km |

Cada episodio pertenece a una sola clase para cada institución analizada.

## 1.6. Superficie disponible, valor esperado y enriquecimiento

Los conteos absolutos pueden resultar engañosos si una figura institucional ocupa una superficie extensa. Para controlar descriptivamente este efecto se compara la proporción de episodios observados con la proporción de territorio disponible.

El número esperado se calcula como la cantidad de episodios que correspondería a una huella si los 409 episodios se distribuyeran de manera estrictamente proporcional a la superficie que ocupa.

El índice de enriquecimiento se define como:

**E = porcentaje de episodios observados / porcentaje de superficie disponible**

Su interpretación es descriptiva:

- **E > 1:** concentración relativa;
- **E ≈ 1:** proporcionalidad aproximada;
- **E < 1:** subrepresentación relativa.

El indicador no es una prueba de significancia estadística y no controla por clima, cobertura, pendiente, accesibilidad, prácticas agropecuarias, densidad poblacional u otras variables que también pueden explicar la distribución térmica.

La normalización superficial se aplica únicamente a **geometrías poligonales**. Puntos y líneas —por ejemplo pozos o ductos— se estudian mediante distancia.

## 1.7. Fuentes térmicas recurrentes

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

Los episodios se contextualizan mediante municipios, coberturas IDEAM 2024, vías e hidrografía.

Algunos episodios contienen un empate entre dos municipios. Se conservaron seis etiquetas de este tipo: Alvarado–Anzoátegui, Ambalema–Venadillo, Carmen de Apicalá–Suárez, Coello–Espinal, Guamo–San Luis y Ortega–Rovira. Se denominan **episodios intermunicipales**: no se convierten en municipios adicionales y no se asignan arbitrariamente a una sola jurisdicción.

La misma regla se aplica a empates de cobertura cuando existen: una categoría compuesta se conserva como tal, en lugar de forzar el episodio a una cobertura individual.

## 1.10. Sistema de referencia y trazabilidad

El análisis espacial utiliza **MAGNA-SIRGAS 2018 / Origen-Nacional (EPSG:9377)**.

El flujo quedó documentado en scripts sucesivos para inventario, sensibilidad de agrupación, recurrencia, incorporación ANH, contextualización territorial, cruces extractivos, normalización por superficie y generación del paquete académico institucional.

El paquete auditado contiene 2.134 hotspots A, 1.537 hotspots B, 432 episodios A, 409 B, dos candidatos recurrentes, 1.793 fuentes institucionales y 19.328 relaciones detalladas. Las cuatro clases espaciales cierran con el total y el 100 % en cada grupo; las superficies exclusivas suman 24.128,102 km²; no existen municipios nulos; y los totales municipales coinciden con los conteos de proximidad.

## 1.11. Lectura transversal de las tres instituciones

En B, la coincidencia directa es:

| Agencia | Episodios directos | % observado | % superficie | Esperados | Enriquecimiento |
|---|---:|---:|---:|---:|---:|
| ANM | 127 | 31,05 % | 18,63 % | 76,21 | 1,666 |
| ANLA | 143 | 34,96 % | 15,10 % | 61,76 | 2,315 |
| ANH | 187 | 45,72 % | 21,93 % | 89,69 | 2,085 |

**[Insertar Figura GENERAL-1: `../02_figuras/GENERAL/figura_00_comparacion_institucional_B`]**

Estas cifras **no son aditivas**. Un mismo episodio puede coincidir con huellas de más de una institución. La comparación sirve para describir patrones institucionales diferentes, no para construir un total de episodios “extractivos”.

## 1.12. Límites de interpretación

El diseño permite responder dónde se concentran las anomalías térmicas respecto de determinadas huellas institucionales y si esa concentración es mayor o menor que la proporción territorial disponible.

No permite determinar por sí solo la causa de un episodio. Una investigación causal de casos específicos requeriría combinar fechas y coordenadas con imágenes de mayor resolución, cicatrices espectrales, registros operativos, información de quemas, reportes oficiales de incendios, registros administrativos detallados y, cuando sea posible, verificación de campo.

## Fuentes metodológicas e institucionales

### Fuentes del proyecto

- `00_LEER_PRIMERO_CONTINUIDAD.md`.
- `02_AUDITORIA_PAQUETE_123058.md`.
- `resumen_proximidad_institucion.csv`.
- `resumen_directo_figuras.csv`.
- `distribucion_municipio_cobertura.csv`.
- `candidatos_recurrentes_institucion.csv`.
- `inventario_fuentes_institucionales.csv`.
- `relaciones_detalladas_fuentes.csv`.
- `resumen_fuentes_nombres.csv`.

### Referencias institucionales y técnicas para la versión final

- [NASA FIRMS. *Active Fire Data*](https://firms.modaps.eosdis.nasa.gov/active_fire/) y documentación de detecciones de fuego activo/anomalías térmicas.
- [República de Colombia. Ley 685 de 2001](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9202), artículo 45.
- [Agencia Nacional de Minería. Sector minero colombiano](https://www.anm.gov.co/index.php/sector-minero-colombiano).
- [Autoridad Nacional de Licencias Ambientales. *Control y Seguimiento*](https://www.anla.gov.co/seguimiento-de-licencias-ambientales/que-hacemos).
- [Agencia Nacional de Hidrocarburos. *Mapa de Tierras*](https://www.anh.gov.co/es/hidrocarburos/mapa-de-tierras/), actualización del 6 de agosto de 2026.
- [IDEAM. Coberturas de la Tierra](https://www.ideam.gov.co/nuestra-entidad/ecosistemas-e-informacion-ambiental/coberturas-de-la-tierra).
- [IGAC. Datos abiertos geoespaciales](https://www.igac.gov.co/datos-abiertos/datos-abiertos-geoespaciales).
- [DANE. Marco Geoestadístico Nacional 2025](https://geoportal.dane.gov.co/mparcgis/rest/services/MGN2025/Serv_CapasMGN_2025/FeatureServer).
