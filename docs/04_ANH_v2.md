# Capítulo 4. ANH: detecciones térmicas frente a tierras contractuales, yacimientos y pozos de hidrocarburos en Tolima

## 4.1. Qué representa la información de la ANH

Aplicando el diseño metodológico del Capítulo 1, la Agencia Nacional de Hidrocarburos (ANH) publica periódicamente el **Mapa de Tierras**, una representación de la distribución, delimitación y clasificación de áreas hidrocarburíferas destinadas al desarrollo de actividades de exploración y producción de hidrocarburos. La actualización utilizada por este proyecto corresponde al **6 de agosto de 2026**, fecha que coincide con la fuente espacial incorporada al paquete académico.

La página oficial de la ANH describe las áreas en exploración como aquellas sobre las cuales se realizan trabajos de exploración y las áreas en explotación como aquellas en las que se adelantan labores de explotación de hidrocarburos. El paquete descargado conserva la terminología de sus atributos: `EXPLORACION`, `PRODUCCION`, `ASIGNADA`, `AREA EN EXPLORACION` y `AREA EN PRODUCCION`. En este capítulo se respeta esa terminología.

A diferencia de una solicitud de área, estas geometrías corresponden a tierras asignadas y a contratos o convenios identificados por la ANH. Aun así, **un bloque, área contractual o estado de producción/exploración no demuestra que una actividad concreta estuviera ocurriendo exactamente en el punto y momento de una detección térmica**. El análisis continúa siendo espacial y no causal.

> **Cómo leer los términos de este capítulo.** Una **tierra o área contractual** es una zona delimitada por la ANH y asociada con un contrato o convenio de hidrocarburos; no significa que toda su superficie tenga infraestructura u operación. Un **yacimiento** es una acumulación geológica identificada de hidrocarburos y no equivale a un pozo. Un **pozo** es una localización puntual. La **huella ANH** o **huella contractual** es el conjunto de áreas contractuales usado para la comparación espacial. **Hotspot** significa detección térmica satelital. **Coincidencia directa** significa que una detección cae dentro de esas áreas, no que exista actividad petrolera exactamente en ese punto.


## 4.2. Fuentes utilizadas: tierras, yacimientos y pozos

El inventario publicable contiene **32 tierras contractuales**, **26 registros de yacimientos** y **700 pozos**.

Las tierras y los yacimientos se representan como áreas o polígonos y, por tanto, puede compararse cuánto territorio ocupan con cuántos episodios contienen. Los pozos son puntos: se estudian por distancia y no se les asigna un porcentaje del territorio.

Entre las 32 tierras contractuales inventariadas, 14 están clasificadas en exploración y 18 en producción. En el escenario B, **20 contratos diferentes** tienen al menos un episodio en coincidencia directa: 10 en exploración y 10 en producción.

## 4.3. Cuántos episodios están dentro de las áreas y qué tan cerca están los demás

De los 409 episodios del escenario B, **187 presentan coincidencia directa con las áreas contractuales ANH**, equivalentes al **45,72 %**. Otros 24 episodios (5,87 %) se encuentran hasta un kilómetro de esas áreas, 63 (15,40 %) entre uno y cinco kilómetros y 135 (33,01 %) a más de cinco kilómetros.

El escenario A registra 43,75 % de coincidencia directa y B 45,72 %, una diferencia de **1,97 puntos porcentuales**. El patrón general se mantiene: en ambos escenarios la coincidencia directa es la categoría más numerosa.

![Distribución de episodios según proximidad a la huella ANH.](assets/figures/svg/ANH/anh_01_proximidad_episodios_publicacion.svg)

*Figura ANH-1. Distribución de episodios según proximidad a la huella ANH. B es el escenario principal y A funciona como sensibilidad.*

## 4.4. Comparación entre episodios observados y tamaño del área

El conjunto de tierras contractuales analizado —la **huella contractual ANH**— ocupa **5.290,89 km²**, equivalente al **21,93 %** del territorio. Si los 409 episodios se repartieran únicamente en proporción al tamaño de esas áreas, la referencia sería **89,69 episodios**; se observaron 187. El **índice de enriquecimiento** es **2,085**: el 45,72 % de los episodios está dentro de áreas que ocupan 21,93 % del territorio, de modo que la proporción observada es aproximadamente 2,09 veces la proporción territorial.

La desagregación interna muestra diferencias:

| Figura | Episodios dentro del área | % de episodios | % del territorio | Referencia esperada por tamaño | Índice de concentración (enriquecimiento) |
|---|---:|---:|---:|---:|---:|
| Exploración | 103 | 25,18 % | 14,24 % | 58,25 | **1,768** |
| Producción | 93 | 22,74 % | 7,69 % | 31,43 | **2,959** |
| Yacimientos | 5 | 1,22 % | 0,25 % | 1,04 | **4,828** |
| Conjunto de áreas contractuales | 187 | 45,72 % | 21,93 % | 89,69 | **2,085** |

Los yacimientos presentan el índice más alto, **4,828**, pero sobre una superficie muy pequeña y con únicamente cinco episodios. Por ello, ese valor debe interpretarse con especial cautela: un cociente elevado construido sobre pocos casos no tiene el mismo peso descriptivo que el resultado del conjunto completo de áreas contractuales.

![Episodios observados frente a superficie disponible para ANH.](assets/figures/svg/ANH/anh_02_observado_vs_superficie_publicacion.svg)

*Figura ANH-2. Porcentaje de superficie y porcentaje de episodios observados para las principales figuras poligonales ANH.*

## 4.5. Áreas que se superponen: por qué las cifras no se suman

Las categorías ANH pueden ocupar parcialmente el mismo lugar en el mapa; a esto se le llama **solapamiento** o superposición espacial. **103 episodios** quedan dentro de al menos un área de exploración y **93** dentro de al menos un área de producción. Sin embargo, **9 episodios quedan dentro de ambas**. Por eso no se suman 103 + 93 como si fueran casos distintos: el total de episodios únicos es **187**.

Los cinco episodios que quedan dentro de polígonos de yacimientos también están contenidos dentro de las áreas contractuales. Por tanto, tampoco deben sumarse como cinco casos adicionales.

Esta relación puede expresarse así:

- Exploración: 103.
- Producción: 93.
- Exploración y producción simultáneamente: 9.
- Unión contractual: 103 + 93 − 9 = **187**.
- Yacimientos: 5, todos incluidos en esos 187.

Este control evita presentar como fenómenos independientes lo que en realidad son distintas capas institucionales aplicadas sobre las mismas unidades térmicas.

## 4.6. Contratos en exploración

El contrato con mayor número de episodios coincidentes es **0554**, cuyo operador registrado es **MAUREL AND PROM COLOMBIA B.V.**. La fuente lo clasifica en exploración, como contrato de Exploración y Producción (E&P), subtipo `MADURA`, asociado al proceso `RONDA COLOMBIA 2021`. Registra **65 episodios y 310 detecciones** en coincidencia directa.

Los principales contratos de exploración son:

| Contrato | Operador registrado | Tipo contractual | Proceso | Episodios | Detecciones (hotspots) |
|---|---|---|---|---:|---:|
| 0554 | MAUREL AND PROM COLOMBIA B.V. | CONTRATO DE EXPLORACION Y PRODUCCION (E&P) | RONDA COLOMBIA 2021 | 65 | 310 |
| 0115 | VAROSA ENERGY SOCIEDAD POR ACCIONES SIMPLIFICADAS | CONTRATO DE EXPLORACION Y PRODUCCION (E&P) | CONTRATACION DIRECTA | 10 | 41 |
| 0723 | PAREX RESOURCES (COLOMBIA) AG | CONTRATO DE EXPLORACION Y PRODUCCION (E&P) | PPAA 2019 CICLO 1 | 10 | 21 |
| 0224 | MORICHAL SINOCO | CONTRATO DE EXPLORACION Y PRODUCCION (E&P) | MINIRONDA 2008 | 6 | 32 |
| 0254 | TELPICO COLOMBIA LLC | CONTRATO DE EXPLORACION Y PRODUCCION (E&P) | OPEN ROUND 2010 | 5 | 16 |
| 0704 | HOCOL S.A. | CONTRATO DE EXPLORACION Y PRODUCCION (E&P) | PPAA 2019 CICLO 1 | 3 | 5 |

El contrato 0554 concentra una parte importante del subconjunto de exploración: sus 65 episodios equivalen aproximadamente al 63 % de los 103 episodios que quedan dentro de alguna tierra clasificada en exploración. Esa proporción describe la concentración espacial de los episodios dentro de las geometrías contractuales; no permite atribuirles un origen operacional.

![Contratos de exploración con mayor número de episodios coincidentes.](assets/figures/svg/ANH/anh_03a_contratos_exploracion_publicacion.svg)

*Figura ANH-3A. Contratos clasificados en exploración con mayor número de episodios B coincidentes.*

## 4.7. Contratos en producción

Entre las áreas clasificadas en producción destaca el **contrato 0039**, registrado a nombre de **FRONTERA ENERGY COLOMBIA CORP.**, con 35 episodios y 113 detecciones. Le siguen el **0038**, de **LAS QUINCHAS RESOURCES CORP**, con 20 episodios y 85 detecciones; el **0042**, de **ECOPETROL S.A.**, con 17 y 83; y el **0034**, también registrado a nombre de Frontera Energy Colombia Corp., con 8 episodios.

| Contrato | Operador registrado | Tipo contractual | Proceso | Episodios | Detecciones (hotspots) |
|---|---|---|---|---:|---:|
| 0039 | FRONTERA ENERGY COLOMBIA CORP. | CONTRATO DE ASOCIACION CON ECOPETROL | NO APLICA | 35 | 113 |
| 0038 | LAS QUINCHAS RESOURCES CORP | CONTRATO DE ASOCIACION CON ECOPETROL | NO APLICA | 20 | 85 |
| 0042 | ECOPETROL S.A. | CONTRATO DE ASOCIACION CON ECOPETROL | NO APLICA | 17 | 83 |
| 0034 | FRONTERA ENERGY COLOMBIA CORP. | CONTRATO DE ASOCIACION CON ECOPETROL | NO APLICA | 8 | 10 |
| 0147 | HOCOL S.A. | CONVENIO DE EXPLOTACION | CONTRATACION DIRECTA | 7 | 52 |
| 0159 | HOCOL S.A. | CONVENIO DE EXPLOTACION | CONTRATACION DIRECTA | 4 | 44 |

El paquete distingue diferentes modalidades: contratos de asociación con Ecopetrol, convenios de explotación y contratos E&P. El campo `PROCESO` incluye, según el contrato, valores como contratación directa, Minironda 2008, Open Round 2010, PPAA 2019 o Ronda Colombia 2021. Esos atributos se conservan como trazabilidad administrativa, no como indicación de una operación observada por el satélite.

![Contratos de producción con mayor número de episodios coincidentes.](assets/figures/svg/ANH/anh_03b_contratos_produccion_publicacion.svg)

*Figura ANH-3B. Contratos clasificados en producción con mayor número de episodios B coincidentes.*

## 4.8. Yacimientos

La capa complementaria de yacimientos identifica tres yacimientos con coincidencia directa y cinco episodios en total:

| Yacimiento | Contrato asociado | Formación | Tipo de hidrocarburo | Estado/vigencia | Episodios | Detecciones (hotspots) |
|---|---|---|---|---|---:|---:|
| TOLDADO | TOLDADO | CABALLOS | PETROLEO-GAS | ACTIVO/VIGENTE | 3 | 8 |
| ORTEGA | ORTEGA | CABALLOS | PETROLEO-GAS | ACTIVO/VIGENTE | 1 | 3 |
| MANA | MANA | DOIMA | PETROLEO-GAS | ACTIVO/VIGENTE | 1 | 1 |

**Toldado** reúne tres de los cinco episodios. Ortega y Mana registran uno cada uno. Los tres aparecen como `ACTIVO` y `VIGENTE` en los atributos incorporados al paquete, y el tipo de hidrocarburo registrado es `PETROLEO-GAS`.

La estructura del servicio oficial de yacimientos de la ANH confirma que la capa utiliza campos diferenciados para estado del yacimiento, vigencia, formación, resolución y tipo de hidrocarburo. Esto permite contextualizar los polígonos sin convertir su estado administrativo en prueba del origen de la detección térmica.

## 4.9. Pozos: qué tan cerca están los episodios

Los **700 pozos** se analizan por distancia. No se registraron coincidencias directas con la geometría puntual de los pozos en el escenario B; las relaciones conservadas corresponden a episodios ubicados hasta cinco kilómetros.

Los pozos con mayor número de episodios B dentro de ese radio son:

| Pozo | Provincia geológica registrada | Episodios hasta 5 km | Distancia mínima (km) |
|---|---|---:|---:|
| CALARMA-1 | VALLE SUPERIOR DEL MAGDALENA | 16 | 1,54 |
| S-4 (STRAT XD-4) | VALLE SUPERIOR DEL MAGDALENA | 10 | 0,58 |
| VENTARRON-1 | VALLE SUPERIOR DEL MAGDALENA | 9 | 0,56 |
| EL SAPO-1ST | VALLE SUPERIOR DEL MAGDALENA | 9 | 0,66 |
| TOMOGO-1 | VALLE SUPERIOR DEL MAGDALENA | 8 | 0,12 |
| CHILAPI-1 | VALLE SUPERIOR DEL MAGDALENA | 8 | 1,01 |
| AMBALEMA-1 | VALLE MEDIO DEL MAGDALENA | 8 | 1,18 |
| LA SIMA-1 | VALLE MEDIO DEL MAGDALENA | 8 | 1,33 |
| MARANON-2 | VALLE SUPERIOR DEL MAGDALENA | 7 | 0,30 |
| ARMERO-1 | VALLE MEDIO DEL MAGDALENA | 7 | 0,57 |

Por número de episodios cercanos destaca **CALARMA-1**, con 16 episodios dentro de cinco kilómetros, aunque su distancia mínima es de aproximadamente 1,54 km. Si se observa estrictamente cercanía mínima, aparecen casos como **TOLDADO-2**, a unos 83 m de una detección relacionada; **ORTEGA-8A**, a unos 86 m; y **TOMOGO-1**, a unos 122 m.

Estos valores no convierten al pozo en fuente térmica. Únicamente describen distancia entre un punto de infraestructura y las detecciones que integran los episodios.

![Pozos con mayor número de episodios situados hasta cinco kilómetros.](assets/figures/svg/ANH/anh_06_pozos_proximidad_publicacion.svg)

*Figura ANH-6. Pozos con mayor número de episodios B situados hasta cinco kilómetros y distancia mínima registrada.*

## 4.10. Distribución municipal

La coincidencia directa ANH se concentra principalmente en **Ortega (40 episodios)**, **San Luis (32)**, **Guamo (23)**, **Coello (20)** e **Ibagué (18)**. Estos cinco municipios reúnen 133 de los 187 episodios directos, aproximadamente el 71 % del subconjunto.

Los principales valores son: Ortega (40); San Luis (32); Guamo (23); Coello (20); Ibagué (18); Armero (10).

Se mantienen fuera del ranking municipal cuatro episodios con empate entre municipios: **Coello– Espinal (2); Guamo– San Luis (1); Ortega– Rovira (1)**. Son episodios intermunicipales, no nuevos municipios.

![Municipios con mayor coincidencia directa con la huella ANH.](assets/figures/svg/ANH/anh_04_municipios_directos_publicacion.svg)

*Figura ANH-4. Municipios individuales con mayor número de episodios B en coincidencia directa con la huella ANH.*

## 4.11. Coberturas de la tierra: qué tipo de superficie aparece

La **cobertura de la tierra** describe qué tipo de superficie predomina en el lugar y se utiliza como contexto territorial; no identifica la causa de las señales. La categoría individual más frecuente es **mosaico de pastos con espacios naturales**, con 25 episodios. Le siguen **arroz**, con 22; **pastos limpios**, con 18; **bosque de galería y ripario**, con 15; **arbustal abierto**, con 12; y tres categorías con 10 episodios cada una: mosaico de pastos y cultivos, herbazal abierto rocoso y mosaico de cultivos, pastos y espacios naturales.

Las ocho categorías individuales principales son: 2.4.4. Mosaico de pastos con espacios naturales (25); 2.1.2.1. Arroz (22); 2.3.1. Pastos limpios (18); 3.1.4. Bosque de galería y ripario (15); 3.2.2.2. Arbustal abierto (12); 2.4.2. Mosaico de pastos y cultivos (10); 3.2.1.2.2. Herbazal abierto rocoso (10); 2.4.3. Mosaico de cultivos, pastos y espacios naturales (10).

Además, **20 episodios** tienen una etiqueta compuesta porque las detecciones que integran el episodio producen empate entre dos o más coberturas. Esos casos no se redistribuyen arbitrariamente entre las coberturas individuales.

![Coberturas del suelo más frecuentes en episodios directos ANH.](assets/figures/svg/ANH/anh_05_coberturas_directas_publicacion.svg)

*Figura ANH-5. Coberturas IDEAM 2024 individuales más frecuentes entre episodios directos ANH.*

## 4.12. Lugares con señales térmicas repetidas (recurrencia)

Los dos sitios recurrentes presentan comportamientos opuestos frente a ANH.

**FT_001**, la fuente de recurrencia alta ubicada en Ibagué sobre una cobertura industrial o comercial, presenta **coincidencia directa** con las áreas contractuales ANH. Esta coincidencia se refiere a una geometría contractual y no permite inferir proximidad a un pozo ni actividad operacional en el punto.

**FT_002**, en Ambalema, se encuentra a **6,58 km** del conjunto de áreas contractuales ANH y por ello se clasifica a más de cinco kilómetros.

El contraste es metodológicamente importante: la recurrencia térmica y la relación con tierras contractuales son dimensiones distintas. La proximidad a pozos se analiza separadamente en la sección 4.9 y no debe deducirse de la coincidencia con una geometría poligonal.

## 4.13. Discusión

ANH presenta la mayor proporción de coincidencia directa entre las tres instituciones evaluadas: 45,72 % de los episodios B. Las áreas contractuales ocupan 21,93 % del territorio analizado y muestran un índice de enriquecimiento de 2,085. Dentro de ese conjunto, las áreas de producción presentan un enriquecimiento mayor —2,959— que las de exploración —1,768—, mientras los yacimientos alcanzan 4,828 sobre un número muy pequeño de casos.

El patrón se concentra en determinados contratos y municipios. El contrato 0554 domina el subconjunto de exploración, mientras 0039, 0038 y 0042 destacan en producción. Ortega, San Luis, Guamo, Coello e Ibagué agrupan la mayor parte de los episodios directos.

Sin embargo, las propias capas muestran por qué no puede pasarse directamente de asociación espacial a causalidad. Hay superposición entre exploración y producción; los yacimientos están contenidos en áreas contractuales; los pozos son puntos que requieren análisis de distancia; y las coberturas del suelo muestran simultáneamente contextos agropecuarios, naturales, urbanos e industriales.

Una investigación causal de episodios concretos requeriría contrastar fechas y coordenadas con información operativa, imágenes de mayor resolución, cicatrices de quema, registros de producción o mantenimiento, reportes de incendios y quemas, y eventualmente verificación de campo.

## 4.14. Síntesis

El capítulo ANH permite resumir siete resultados:

1. **187 de 409 episodios B (45,72 %) presentan coincidencia directa** con las áreas contractuales ANH.
2. Esas áreas representan **21,93 %** de la superficie analizada y producen un índice de enriquecimiento de **2,085**.
3. Exploración reúne 103 episodios y producción 93, pero **9 pertenecen a ambas**, por lo que la unión es 187.
4. Las áreas de producción presentan un enriquecimiento de **2,959**, superior al **1,768** de exploración.
5. Los cinco episodios en yacimientos están contenidos en las áreas contractuales y no constituyen casos adicionales.
6. Los principales contratos por número de episodios son 0554 en exploración y 0039, 0038 y 0042 en producción.
7. FT_001 coincide directamente con una tierra ANH, mientras FT_002 se encuentra a más de cinco kilómetros; ninguna situación prueba el origen del fenómeno térmico.

### Producto cartográfico publicado

El A3 se encuentra en `assets/maps/anh_a3.jpg` y el A0 web en `assets/maps/anh_a0_web.jpg`. La página usa `assets/maps/previews/anh_a3_preview.jpg`; el A0 se sirve mediante una pirámide DZI generada durante el despliegue del sitio.

El mapa diferencia exploración y producción, incorpora yacimientos y pozos cuando la escala permite leerlos, representa episodios B y FT_001/FT_002 y conserva como contexto coberturas IDEAM 2024, vías, hidrografía y límites municipales.

## Referencias institucionales
- [Agencia Nacional de Hidrocarburos. **Mapa de Tierras**, actualización 6 de agosto de 2026](https://www.anh.gov.co/es/hidrocarburos/mapa-de-tierras/).
- [Agencia Nacional de Hidrocarburos. **GeoVisor de Tierras / ANH_TIERRAS_EGDB_ATTACH**, actualización 6 de agosto de 2026](https://geovisor.anh.gov.co/server/rest/services/GEOVISOR_v32/ANH_TIERRAS_EGDB_ATTACH/MapServer).
- [Agencia Nacional de Hidrocarburos. **Relación de Áreas Asignadas**, estado de contratos y convenios al 31 de julio de 2026](https://www.anh.gov.co/es/hidrocarburos/contratos-y-reglamentaci%C3%B3n/contrataci%C3%B3n-ep-y-teas/).
- [Agencia Nacional de Hidrocarburos. **Servicio geográfico de Yacimientos**](https://geovisor.anh.gov.co/server/rest/services/Yacimientos/Yacimientos/MapServer/0).
