# Capítulo 3. ANLA: detecciones térmicas frente a áreas de licenciamiento y seguimiento ambiental en Tolima

## 3.1. ¿Qué representa la información de la ANLA?

La Autoridad Nacional de Licencias Ambientales (ANLA) administra información sobre proyectos, obras y actividades sometidos a evaluación, licenciamiento, instrumentos de manejo y control y seguimiento ambiental. En términos sencillos, que un proyecto aparezca en las capas de la ANLA significa que existe una relación administrativa y ambiental documentada con ese proyecto; no significa, por sí sola, que el proyecto estuviera operando en el lugar y momento de una detección térmica.

La propia ANLA señala que el control y seguimiento se aplica a proyectos sujetos a licencia ambiental o Plan de Manejo Ambiental durante etapas que pueden incluir construcción, operación, desmantelamiento o abandono, y que su finalidad es verificar obligaciones y medidas de manejo ambiental. Esta definición es importante porque impide convertir una geometría de seguimiento en una prueba automática de actividad material o de causalidad.

## 3.2. Base institucional utilizada

Aplicando el diseño metodológico del Capítulo 1, el paquete académico contiene 192 registros ANLA publicables: 115 geometrías de área, 42 líneas y 35 puntos. Para el análisis normalizado por superficie se utilizan únicamente las áreas poligonales, de acuerdo con la regla metodológica general de no normalizar puntos o líneas como si ocuparan superficie departamental.

El servicio geográfico oficial de ANLA utiliza códigos sectoriales. La verificación contra el Feature Service público permite traducir los códigos presentes en el paquete: 101 corresponde a **Hidrocarburos** y 103 a **Minería**. Entre los 29 expedientes de área que presentan al menos una coincidencia directa con episodios B, 28 corresponden al sector Hidrocarburos y 1 al sector Minería. El expediente minero es LAM1499, asociado en la fuente a explotación de calizas en Payandé–La Esmeralda.

El campo normalizado `source_status` no contiene valores para los 192 registros ANLA del paquete (0 valores no nulos). Por esa razón, este capítulo **no asigna estados actuales como “activo” o “inactivo”**. Algunos registros originales incluyen descripciones administrativas —por ejemplo, `ARCHIVADO`—, pero esas descripciones no se transforman aquí en un estado general del expediente. Si la versión final requiere afirmar el estado jurídico o administrativo actual de un expediente específico, deberá verificarse individualmente en ANLA.

## 3.3. Patrón general de proximidad

En el escenario B, 143 de los 409 episodios térmicos presentan coincidencia directa con áreas ANLA. Esto equivale al **34,96 %** del total. Otros 56 episodios (13,69 %) se encuentran a una distancia de hasta un kilómetro, 86 (21,03 %) entre uno y cinco kilómetros y 124 (30,32 %) a más de cinco kilómetros.

La comparación con el escenario A muestra una estabilidad notable: A registra 34,95 % de coincidencia directa y B 34,96 %. La diferencia es de aproximadamente **0,01 puntos porcentuales**. En otras palabras, la exclusión de las observaciones Suomi-NPP que define el escenario principal B prácticamente no cambia la proporción de episodios coincidentes con áreas ANLA.

**[Insertar Figura ANLA-1: `figuras/anla_01_proximidad_episodios_publicacion`]**

*Figura ANLA-1. Distribución de episodios según proximidad a áreas ANLA. El escenario B se presenta como principal y A como sensibilidad.*

## 3.4. Observados, esperados y enriquecimiento espacial

Las áreas ANLA consideradas en la huella exclusiva de coincidencia directa ocupan **3.643,62 km²**, equivalentes al **15,10 %** de la superficie departamental utilizada por el análisis. Si los 409 episodios se distribuyeran de manera proporcional a esa superficie, se esperarían aproximadamente **61,76 episodios** dentro de ella. Se observaron 143.

El índice de enriquecimiento es, por tanto, **2,315**. Esto significa que la proporción de episodios observados dentro de las áreas ANLA es aproximadamente 2,3 veces la proporción territorial que esas áreas representan. El resultado describe una **concentración espacial relativa**; no demuestra que los proyectos licenciados o seguidos hayan originado las señales térmicas.

**[Insertar Figura ANLA-2: `figuras/anla_02_observado_vs_superficie_publicacion`]**

*Figura ANLA-2. Comparación entre porcentaje territorial y porcentaje de episodios B en coincidencia directa con áreas ANLA.*

## 3.5. Expedientes y operadores asociados espacialmente

La consolidación por identificador oficial es indispensable. Un mismo expediente puede contener varias geometrías, subáreas o variantes nominales del proyecto. Contarlas por separado produciría una falsa multiplicación de fuentes. Después de consolidar esas variantes, los 143 episodios directos se relacionan con **29 expedientes diferentes**.

Los diez expedientes con mayor número de episodios únicos son:

| Expediente | Sector | Operador(es) registrados | Proyecto resumido a partir de la fuente | Episodios | Hotspots |
|---|---|---|---|---:|---:|
| LAM2537 | Hidrocarburos | PETRODORADO SOUTH AMERICA S.A. SUCURSAL COLOMBIA | Bloque exploratorio Buganviles/Bugaviles y prospectos 01–08 | 54 | 251 |
| LAM4750 | Hidrocarburos | PACIFIC STRATUS ENERGY COLOMBIA CORP | Bloque de desarrollo Buganviles | 33 | 101 |
| LAM3796 | Hidrocarburos | VAROSA ENERGY LTDA | Área de perforación exploratoria Bloque La Pola y subáreas | 13 | 48 |
| LAM0140 | Hidrocarburos | HOCOL S.A. | Pozo de desarrollo Quimbaya 3 y 4 | 12 | 124 |
| LAM2344 | Hidrocarburos | ECOPETROL S.A. | PMA de los campos Ortega–Pacandé, Quimbaya, Toldado y Toy | 12 | 124 |
| LAM3176 | Hidrocarburos | GRAN TIERRA ENERGY COLOMBIA LTD. | Áreas de perforación exploratoria Norte y Sur del Bloque Río Magdalena | 12 | 35 |
| LAM3929 | Hidrocarburos | HOCOL S.A. | Área de perforación exploratoria Doima–Ortega | 10 | 69 |
| LAM2523 | Hidrocarburos | INTEROIL COLOMBIA EXPLORATION AND PRODUCTION | Área de perforación exploratoria Pijao | 8 | 20 |
| LAM2082 | Hidrocarburos | ECOPETROL S.A. | Áreas de interés de perforación exploratoria Calarma/Calamar | 6 | 25 |
| LAM2028 | Hidrocarburos | KAPPA RESOURCES COLOMBIA LTDA | Licencia ambiental global Campo Abanico y modificación | 6 | 14 |

El caso más destacado es **LAM2537**, asociado a PETRODORADO SOUTH AMERICA S.A. SUCURSAL COLOMBIA y al Bloque Exploratorio Buganviles/Bugaviles. El inventario contiene el área general y varios prospectos bajo el mismo expediente; consolidados, se relaciona espacialmente con **54 episodios B y 251 hotspots**. La cifra no significa que existan 54 eventos causados por el proyecto, sino que 54 episodios tienen al menos una detección dentro de alguna geometría de ese expediente.

Le sigue **LAM4750**, Bloque de Desarrollo Buganviles, con 33 episodios y 101 hotspots. **LAM3796**, Área de Perforación Exploratoria Bloque La Pola, reúne 13 episodios y 48 hotspots. Los expedientes **LAM0140**, vinculado al Pozo de Desarrollo Quimbaya 3 y 4, y **LAM2344**, asociado a planes de manejo ambiental de varios campos, reúnen 12 episodios cada uno.

En LAM0140 el paquete contiene distintas geometrías con operadores y contratos diferentes y fechas administrativas que no son completamente homogéneas; algunas filas incluyen `1899-12-30`, una fecha que se trata como posible valor de sistema o dato no confiable y no se utiliza para construir una cronología. Esta decisión evita convertir un atributo dudoso en una afirmación histórica.

**[Insertar Figura ANLA-3: `figuras/anla_03_expedientes_principales_publicacion`]**

*Figura ANLA-3. Expedientes ANLA con mayor número de episodios B en coincidencia directa, consolidados por identificador oficial.*

Los operadores se utilizan como atributo descriptivo de las fuentes y tampoco son aditivos: un mismo episodio puede intersectar geometrías correspondientes a más de un expediente y, por tanto, asociarse con más de un operador.

## 3.6. Procesos y tipos de proyecto que aparecen en las fuentes

Los nombres oficiales de los proyectos permiten reconocer distintos tipos de intervención sin necesidad de inferir una fase operativa actual. Entre los expedientes con mayor asociación espacial aparecen expresiones como **bloque exploratorio**, **bloque de desarrollo**, **área de perforación exploratoria**, **pozo de desarrollo**, **Plan de Manejo Ambiental**, **licencia ambiental global** y **área de interés de perforación exploratoria**.

Esta terminología se conserva porque proviene de los registros ANLA. No se utiliza para afirmar que una perforación, explotación o producción estuviera ejecutándose durante agosto de 2026. Por ejemplo, que el nombre de un expediente contenga “perforación exploratoria” identifica el objeto registrado por la autoridad ambiental, no una observación directa de perforación en la fecha del hotspot.

El único expediente del subconjunto directo clasificado por ANLA en el sector Minería es **LAM1499**, operado en la fuente por CEMEX COLOMBIA S.A. y relacionado con el Plan de Manejo Ambiental y la explotación de calizas en Payandé–La Esmeralda. Presenta 2 episodios B y 12 hotspots en coincidencia directa.

## 3.7. Líneas y puntos: información contextual, no normalización por superficie

La información ANLA también incluye 42 registros lineales y 35 puntuales. Estas geometrías no se incorporan al cálculo de superficie esperada. Se estudian mediante distancia.

Entre las líneas con mayor número de episodios B ubicados a menos de cinco kilómetros se encuentran el **Sistema de Transporte de Hidrocarburos Toldado–Gualanday (LAM0081)**, con 43 episodios y una distancia mínima de aproximadamente 35 m; el **Oleoducto del Valle del Magdalena Tenay–Vasconia–Coveñas (LAM0022)**, con 39 y una distancia mínima aproximada de 88 m; el **Gasoducto Montañuelo–Gualanday (LAM0138)**, con 35; y el **Gasoducto Centro Oriente (LAM0069)**, con 31 y una distancia mínima cercana a 24 m.

Entre los puntos, el **Pozo Productor de Gas Montañuelo 1 (LAM0966)** presenta 24 episodios a menos de cinco kilómetros y una distancia mínima aproximada de 194 m; la **reactivación de cuatro pozos en el Bloque La Pola (LAM3842)**, 10 episodios; y la **Perforación Pozo Don Pedro (LAM3387)**, 8.

Estas cifras son contextuales y no deben sumarse a los 143 episodios directos de áreas: las mismas unidades térmicas pueden aparecer simultáneamente próximas a varias líneas, puntos y polígonos. La tabla suplementaria `ANLA_tabla_07_lineas_puntos_contexto.csv` conserva el detalle.

## 3.8. Distribución municipal

La distribución territorial muestra tres concentraciones principales. **Ortega y San Luis registran 25 episodios directos cada uno**, seguidos por **Coello con 22**, **Armero con 12**, y **Guamo y Espinal con 9 cada uno**. En conjunto, Ortega, San Luis y Coello concentran 72 de los 143 episodios directos, aproximadamente la mitad del subconjunto ANLA.

Los principales municipios son: San Luis (25); Ortega (25); Coello (22); Armero (12); Espinal (9); Guamo (9).

Los episodios con empate municipal se mantienen separados. Para ANLA existen coincidencias directas en Coello– Espinal (2); Ambalema– Venadillo (1); Guamo– San Luis (1). Estas etiquetas no se incorporan al número de municipios ni se asignan arbitrariamente a una sola jurisdicción.

**[Insertar Figura ANLA-4: `figuras/anla_04_municipios_directos_publicacion`]**

*Figura ANLA-4. Municipios individuales con mayor número de episodios B en coincidencia directa con áreas ANLA.*

## 3.9. Coberturas del suelo

La cobertura más frecuente entre los episodios directos ANLA es **arroz**, con 22 episodios. Le siguen **mosaico de pastos con espacios naturales**, con 17; **pastos limpios**, con 15; **arbustal abierto**, con 13; **herbazal abierto rocoso**, con 9; y **vegetación secundaria alta**, también con 9.

Las categorías principales son: 2.1.2.1. Arroz (22); 2.4.4. Mosaico de pastos con espacios naturales (17); 2.3.1. Pastos limpios (15); 3.2.2.2. Arbustal abierto (13); 3.2.1.2.2. Herbazal abierto rocoso (9); 3.2.3.1. Vegetación secundaria alta (9).

La presencia de arroz como categoría más frecuente diferencia el patrón ANLA del observado en ANM. Sin embargo, la cobertura funciona aquí como contexto territorial y no como explicación automática del origen térmico. Un episodio sobre arroz dentro de un área ANLA puede responder a procesos ajenos al expediente ambiental, incluida la dinámica agropecuaria del territorio.

**[Insertar Figura ANLA-5: `figuras/anla_05_coberturas_directas_publicacion`]**

*Figura ANLA-5. Coberturas IDEAM 2024 más frecuentes entre los episodios B con coincidencia directa ANLA.*

## 3.10. Fuentes térmicas recurrentes

Los dos sitios recurrentes ofrecen una comparación útil. **FT_001**, en Ibagué, no presenta coincidencia directa con ANLA y se encuentra a aproximadamente **610,16 m**, por lo que pertenece a la clase de proximidad de hasta un kilómetro. **FT_002**, en Ambalema, sí presenta **coincidencia directa** con la huella ANLA.

Este contraste refuerza la necesidad de separar recurrencia térmica y asociación institucional. Un lugar puede ser recurrente sin intersectar una geometría ANLA, mientras otro puede ser recurrente y, simultáneamente, encontrarse dentro de ella. Ninguna de las dos situaciones identifica por sí sola el origen de la señal.

## 3.11. Discusión

El resultado ANLA presenta una concentración espacial clara: 34,96 % de los episodios B aparecen dentro de una huella que representa 15,10 % de la superficie analizada. La estabilidad entre A y B indica que ese patrón no depende de manera importante de la exclusión de Suomi-NPP.

La distribución no es uniforme entre expedientes. LAM2537 y LAM4750 reúnen los mayores conteos de episodios, y varios de los principales registros corresponden, según los nombres y códigos oficiales de ANLA, al sector de hidrocarburos. Al mismo tiempo, la distribución municipal y de coberturas muestra que las coincidencias se insertan en territorios con actividades agropecuarias, infraestructura, vegetación natural y usos diversos.

Por ello, el enriquecimiento de 2,315 debe entenderse como una señal para profundizar la investigación, no como una prueba de causalidad. Para evaluar un episodio concreto sería necesario contrastar su fecha, localización y evolución con el expediente administrativo, imágenes satelitales de mayor resolución, registros operativos, reportes de incendios o quemas, cicatrices espectrales y, cuando sea posible, verificación de campo.

## 3.12. Síntesis

El capítulo ANLA deja cinco resultados principales:

1. 143 de 409 episodios B presentan coincidencia directa con áreas ANLA.
2. Esos episodios representan 34,96 % del total frente a 15,10 % de superficie disponible, con enriquecimiento 2,315.
3. Las coincidencias directas se distribuyen entre 29 expedientes consolidados; 28 son del sector oficial Hidrocarburos y uno del sector Minería.
4. Ortega, San Luis y Coello reúnen la mayor concentración municipal, mientras que arroz, mosaicos de pastos y pastos limpios encabezan las coberturas.
5. FT_002 coincide directamente con ANLA, mientras FT_001 se encuentra a 610 m; la recurrencia térmica no equivale a causalidad ni a actividad del proyecto.

### Producto cartográfico publicado

El A3 se encuentra en `assets/maps/anla_a3.jpg` y el A0 web en `assets/maps/anla_a0_web.jpg`. La página usa `assets/maps/previews/anla_a3_preview.jpg`; el A0 se sirve mediante una pirámide DZI generada automáticamente.

El mapa muestra áreas de licencia/seguimiento extractivo, episodios B, FT_001 y FT_002, coberturas IDEAM 2024, vías, hidrografía y límites municipales. Las líneas y puntos ANLA se representan como contexto de proximidad cuando la escala permite su lectura sin saturar el mapa.

## Fuentes

**Fuentes analíticas del proyecto**
- `inventario_fuentes_institucionales.csv`
- `relaciones_detalladas_fuentes.csv`
- `resumen_fuentes_nombres.csv`
- `resumen_proximidad_institucion.csv`
- `resumen_directo_figuras.csv`
- `distribucion_municipio_cobertura.csv`
- `candidatos_recurrentes_institucion.csv`
- Paquete académico institucional auditado `paquete_academico_instituciones_20260829_123058.zip`.

**Verificación institucional externa**
- [Autoridad Nacional de Licencias Ambientales. *Control y Seguimiento*](https://www.anla.gov.co/seguimiento-de-licencias-ambientales/que-hacemos). Consulta: 29 de agosto de 2026.
- [Autoridad Nacional de Licencias Ambientales. *Subdirección de Seguimiento de Licencias Ambientales: ¿Qué hacemos?*](https://www.anla.gov.co/seguimiento-de-licencias-ambientales/que-hacemos). Consulta: 29 de agosto de 2026.
- ANLA, servicio geográfico público `PROYECTOS_ANLA`, dominio del campo `sector`: 101 Hidrocarburos, 102 Infraestructura, 103 Minería, 104 Energía y 105 Agroquímicos. Consulta: 29 de agosto de 2026.
