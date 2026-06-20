/* ══════════════════════════════════════════════════════════
   M5 — Organización y Diseño Curricular
   Fuente: Capítulo 3 del documento MEN 2026 (pp. 92-130)
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm5',
  num: 'Módulo 5',
  icon: '🗂',
  color: '#2E6B22',
  bg: '#EBF5E8',
  titulo: 'Organización y Diseño Curricular',
  subtitulo: 'Del marco de competencias a la práctica pedagógica: progresión, integración y contexto',
  duracion: '3 sesiones · 4.5 horas',
  descripcion: 'Comprendemos la estructura curricular propuesta por el MEN 2026: dimensiones formativas, ejes concéntricos, aprendizajes esenciales e indicadores de desempeño. Diseñamos propuestas curriculares situadas para nuestros contextos institucionales.',
  sesiones: [
    {
      id: 's5_0',
      num: 'Sesión 1',
      titulo: 'La estructura curricular integrada: dimensiones, ejes y aprendizajes esenciales',
      duracion: '90 min',
      tipo: 'Estructura curricular',
      objetivo: 'Comprender los cuatro componentes de la estructura curricular propuesta por el MEN 2026 y su articulación, distinguiendo entre aprendizajes esenciales e indicadores de desempeño.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El problema que resuelve esta estructura',
          texto: `Antes del documento MEN 2026, la formación ciudadana en Colombia tenía un problema estructural: cada institución hacía lo que podía, sin un marco integrador que garantizara coherencia vertical (entre niveles) ni horizontal (entre áreas).

El documento responde con una <strong>estructura curricular integrada</strong> que articula cuatro componentes:

<p>La propuesta curricular no busca añadir contenidos al currículo existente, sino reorganizarlo desde una perspectiva integradora que ponga en el centro el desarrollo humano integral.</p>

Los cuatro componentes son:
<ol>
<li><strong>Dimensiones formativas:</strong> Las grandes áreas del desarrollo humano que la escuela debe cultivar.</li>
<li><strong>Ejes de interacción:</strong> El modelo concéntrico (A, B, C, D) como organizador del sentido.</li>
<li><strong>Aprendizajes esenciales:</strong> Las transformaciones que deben producirse en el sujeto.</li>
<li><strong>Indicadores de desempeño:</strong> Las evidencias observables de que el aprendizaje ocurrió.</li>
</ol>`
        },
        {
          tipo: 'tabla',
          titulo: '2. Las cuatro dimensiones formativas del MEN 2026',
          tabla: {
            cabeceras: ['Dimensión', 'Qué abarca', 'Relación con las CC y CSE'],
            filas: [
              ['Subjetiva', 'El desarrollo interior del sujeto: autoconciencia, regulación emocional, identidad, proyecto de vida.', 'CSE 1, 2, 3 / Eje A del modelo concéntrico'],
              ['Intersubjetiva', 'Las relaciones entre sujetos: diálogo, empatía, reconocimiento, construcción de vínculos.', 'CSE 4, 5 / CC 1, 5 / Eje B del modelo concéntrico'],
              ['Social e histórica', 'La inserción en lo colectivo: participación, justicia, memoria, instituciones democráticas.', 'CC 2, 3, 4 / CSE 6, 7 / Eje C del modelo concéntrico'],
              ['Global y ecológica', 'La responsabilidad planetaria: sostenibilidad, ciudadanía global, interculturalidad.', 'CC 6, 7 / Eje D del modelo concéntrico'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. Aprendizajes esenciales vs. Indicadores de desempeño',
          texto: `La distinción entre aprendizajes esenciales e indicadores es fundamental para el diseño curricular:

<strong>Aprendizaje esencial:</strong> Una transformación real y observable en la capacidad del sujeto para actuar en el mundo. Es holístico, integrador y progresivo. Describe QUÉ debe cambiar en el estudiante.

Ejemplo: <em>"Resuelve conflictos con sus pares usando el diálogo como primera estrategia, reconociendo las perspectivas de todas las partes."</em>

<strong>Indicador de desempeño:</strong> Una evidencia específica y observable de que el aprendizaje esencial está ocurriendo. Es parcial (no captura todo el aprendizaje), contextual y medible. Describe CÓMO SÉ que está cambiando.

Ejemplos para el aprendizaje anterior:
<ul>
<li>Propone soluciones que consideran las necesidades de ambas partes (no solo las propias).</li>
<li>Usa frases de CNV ("cuando tú... yo siento... necesito...") en situaciones reales.</li>
<li>Pide mediación antes de escalar el conflicto.</li>
</ul>

<p>Los indicadores de desempeño son ventanas, no espejos: no reflejan la totalidad del aprendizaje, sino que nos permiten asomarnos a él.</p>`
        },
        {
          tipo: 'grafico',
          titulo: '4. La tabla 18 del MEN 2026: la herramienta de planeación',
          tipo_grafico: 'estructura_curricular',
          datos: [
            { componente: 'Competencia', desc: 'CC1: Convivencia pacífica y reconciliación', color: '#1A4FA0' },
            { componente: 'Dimensión formativa', desc: 'Intersubjetiva', color: '#3B82F6' },
            { componente: 'Eje concéntrico', desc: 'B — Yo con los otros', color: '#0C7A4A' },
            { componente: 'Aprendizaje esencial (Primaria)', desc: 'Dialoga y coopera para resolver conflictos cotidianos reconociendo perspectivas diversas', color: '#F59E0B' },
            { componente: 'Indicadores', desc: '• Usa el diálogo antes de reaccionar\n• Propone soluciones que consideren a ambas partes\n• Pide mediación cuando lo necesita', color: '#8B5CF6' },
          ]
        }
      ],
      actividades: [
        {
          tipo: 'individual',
          titulo: 'De estándar a aprendizaje esencial',
          icono: '✏️',
          instruccion: 'Toma un estándar de competencias ciudadanas de 2004 que uses en tu práctica. Transfórmalo en un aprendizaje esencial usando el formato del MEN 2026: "El estudiante [verbo de acción observable] [en situación auténtica específica] demostrando [evidencia concreta]". Luego escribe 3 indicadores de desempeño.',
          tiempo: '20 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Análisis de la Tabla 18 del MEN 2026',
          icono: '📊',
          instruccion: 'En grupos: revisen la Tabla 18 del documento (pp. 100-115). Elijan una competencia y un nivel. ¿Los indicadores son realmente observables? ¿Son alcanzables? ¿Son suficientes o hay evidencias importantes que no capturan? Propongan mejoras contextualizadas a su institución.',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi planeación actual vs. el nuevo marco',
          icono: '🪞',
          instruccion: 'Compara una planeación que hayas hecho recientemente con la estructura de 4 componentes. ¿Qué tiene? ¿Qué le falta? ¿Qué cambiarías de inmediato y qué requeriría más tiempo o apoyo institucional?',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Capítulo 3: Estructura curricular (pp. 92-115)', url: '#', meta: 'Documento oficial — lectura esencial' },
        { tipo: 'doc', titulo: 'Tabla 18 — Aprendizajes esenciales e indicadores completos', url: '#', meta: 'Herramienta de planeación MEN' },
        { tipo: 'libro', titulo: 'Wiggins, G. & McTighe, J. — Understanding by design', url: '#', meta: 'Diseño curricular por comprensión' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Por qué los indicadores de desempeño son "ventanas, no espejos"?',
            opciones: [
              'Porque son difíciles de ver con claridad',
              'Porque no reflejan la totalidad del aprendizaje sino que permiten asomarse parcialmente a él; el aprendizaje real siempre es mayor y más complejo que sus indicadores',
              'Porque son decorativos y no tienen utilidad real',
              'Porque se usan solo para la evaluación externa'
            ],
            correcta: 1,
            explicacion: 'La metáfora del MEN es precisa: los indicadores son herramientas parciales de visibilización, no capturas completas del aprendizaje. Un estudiante puede demostrar todos los indicadores de un aprendizaje esencial y aun así haber transformado solo una parte de lo que el aprendizaje implica. Por eso la evaluación formativa requiere múltiples evidencias a lo largo del tiempo.'
          },
          {
            pregunta: '¿Cuál de las cuatro dimensiones formativas del MEN 2026 articula la CC3 (Participación democrática)?',
            opciones: [
              'Subjetiva',
              'Intersubjetiva',
              'Social e histórica',
              'Global y ecológica'
            ],
            correcta: 2,
            explicacion: 'La CC3 (Participación democrática) pertenece principalmente a la dimensión Social e histórica, que abarca la inserción del sujeto en lo colectivo: participación, instituciones democráticas y bien común. También tiene elementos de la dimensión Intersubjetiva (el diálogo como práctica democrática).'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Qué diferencia concreta hay entre un "contenido" y un "aprendizaje esencial"? Usa un ejemplo de tu área.',
          '¿Cuántos de los aprendizajes esenciales del MEN están presentes en tu planeación actual?',
          '¿Qué apoyo institucional necesitarías para reorganizar tu planeación según esta estructura?'
        ]
      }
    },
    {
      id: 's5_1',
      num: 'Sesión 2',
      titulo: 'Progresión curricular y transversalidad: del nivel inicial a la media',
      duracion: '90 min',
      tipo: 'Progresión y transversalidad',
      objetivo: 'Comprender el principio de progresión curricular y diseñar una secuencia coherente de aprendizajes para una competencia a lo largo de toda la trayectoria escolar.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El principio de progresión',
          texto: `<p>La progresión curricular implica que los aprendizajes se construyen de manera acumulativa, espiralada y coherente a lo largo de la trayectoria educativa, garantizando que cada nivel profundice y amplíe lo desarrollado en el anterior.</p>

El modelo curricular adoptado es el <strong>currículo espiralado</strong> (Bruner, 1960): los mismos conceptos y competencias se trabajan en todos los niveles, pero con profundidad y complejidad crecientes.

Esto significa que:
<ul>
<li>No hay competencias "solo para secundaria". La empatía se trabaja desde los 3 años.</li>
<li>No hay competencias que se "enseñan una vez". La participación democrática se practica en cada nivel con mayor complejidad.</li>
<li>Cada docente es responsable de conocer lo que viene antes y después del nivel que enseña.</li>
</ul>

El desafío colombiano: la fragmentación curricular. Los docentes de primaria no saben lo que se hace en secundaria; los de secundaria no conocen las bases que puso primaria. El MEN propone comunidades de práctica docente transversales como solución.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Ejemplo de progresión de la CC3 (Participación democrática)',
          tabla: {
            cabeceras: ['Nivel', 'Foco del aprendizaje', 'Complejidad creciente', 'Ejemplo de práctica pedagógica'],
            filas: [
              ['Educación Inicial\n(0-5 años)', 'Participar en acuerdos simples del grupo', 'Bajo: el adulto facilita y guía', 'Asamblea de aula donde cada niño dice cómo le fue. Votación sobre qué canción escuchar.'],
              ['Primaria\n(1°-5°)', 'Argumentar posiciones en espacios escolares', 'Medio: el estudiante propone y argumenta', 'Gobierno escolar con propuestas reales. Debates sobre normas del aula. Votaciones con razones.'],
              ['Secundaria\n(6°-9°)', 'Liderar y evaluar procesos participativos', 'Alto: el estudiante organiza y cuestiona', 'Propuestas al rector fundamentadas. Evaluación participativa del manual de convivencia. Análisis de políticas educativas.'],
              ['Media\n(10°-11°)', 'Articular participación escolar con democracia territorial', 'Muy alto: el estudiante conecta escalas', 'Proyectos de incidencia comunitaria. Uso de mecanismos formales de participación ciudadana. Conexión con movimientos sociales.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. La transversalidad: todos son docentes de ciudadanía',
          texto: `Uno de los principios más retadores del documento es la <strong>transversalidad</strong>: la formación ciudadana y el DSE no son responsabilidad exclusiva del docente de Ética o Sociales. Son responsabilidad de todos.

<p>Un docente de matemáticas que forma en perseverancia, colaboración y valoración del error está desarrollando competencias socioemocionales. Un docente de biología que trabaja la sostenibilidad está desarrollando ciudadanía. La transversalidad no es un ideal abstracto: es una descripción de lo que ya ocurre, consciente o inconscientemente.</p>

Esto tiene implicaciones prácticas:
<ul>
<li>El docente de español puede trabajar empatía a través de la perspectiva narrativa en la literatura.</li>
<li>El docente de educación física puede trabajar convivencia y gestión del conflicto a través del juego.</li>
<li>El docente de matemáticas puede trabajar toma de decisiones éticas y resolución colaborativa de problemas.</li>
</ul>

La clave: hacer visible lo que ya se hace implícitamente y diseñarlo intencionalmente.`
        },
        {
          tipo: 'grafico',
          titulo: '4. La transversalidad curricular: mapa de oportunidades',
          tipo_grafico: 'mapa_transversal',
          datos: [
            { area: 'Español / Literatura', cc_cse: ['CC5: Diversidad (perspectiva narrativa)', 'CSE4: Empatía (literatura empática)', 'CSE1: Conciencia emocional (escritura reflexiva)'], color: '#3B82F6' },
            { area: 'Ciencias Sociales / Ética', cc_cse: ['CC2: Justicia social', 'CC3: Participación', 'CC4: Historia', 'CSE6: Emociones colectivas'], color: '#0C7A4A' },
            { area: 'Ciencias Naturales', cc_cse: ['CC6: Sostenibilidad', 'CSE3: Decisiones éticas (dilemas ambientales)', 'CSE1: Conciencia corporal'], color: '#8B5CF6' },
            { area: 'Matemáticas', cc_cse: ['CSE3: Toma de decisiones', 'CSE5: Colaboración', 'CC2: Justicia (estadística social)'], color: '#F59E0B' },
            { area: 'Educación Física', cc_cse: ['CC1: Convivencia pacífica (deporte)', 'CSE2: Regulación emocional', 'CSE5: Trabajo en equipo'], color: '#EC4899' },
            { area: 'Artes', cc_cse: ['CSE1: Expresión emocional', 'CC5: Diversidad cultural', 'CSE4: Empatía artística'], color: '#A84020' },
          ]
        }
      ],
      actividades: [
        {
          tipo: 'individual',
          titulo: 'Diseño de progresión para mi institución',
          icono: '📈',
          instruccion: 'Elige una competencia (CC o CSE). Diseña su progresión para los 4 niveles de tu institución. Sé específico: ¿Qué práctica pedagógica concreta la trabaja en cada nivel? ¿Cómo se evidencia el avance de un nivel al siguiente? ¿Quién está a cargo en cada nivel?',
          tiempo: '25 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Mapa de transversalidad institucional',
          icono: '🗺️',
          instruccion: 'Con docentes de distintas áreas: construyan un mapa de qué CC y CSE ya se trabajan en cada área aunque no se nombren explícitamente. ¿Dónde hay solapamientos? ¿Dónde hay vacíos? ¿Qué acuerdos mínimos podrían hacer para potenciar la transversalidad?',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi rol en la transversalidad',
          icono: '🪞',
          instruccion: 'Escribe: "Las competencias ciudadanas y socioemocionales que ya trabajo en mi área, aunque no las llame así, son... Lo que haría diferente si fuera intencional y explícito es... El primer acuerdo que haría con un colega de otra área es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 3.1.3: Progresión y transversalidad (pp. 116-125)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Bruner, J. (1960) — El proceso de la educación', url: '#', meta: 'El currículo espiralado — teoría base' },
        { tipo: 'herramienta', titulo: 'Plantilla de progresión curricular por competencia', url: '#', meta: 'Herramienta descargable MEN' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué significa que el currículo de competencias ciudadanas es "espiralado" según Bruner?',
            opciones: [
              'Que los contenidos se enseñan en espiral comenzando siempre por el mismo punto',
              'Que los mismos conceptos y competencias se trabajan en todos los niveles con profundidad y complejidad crecientes, retomando y ampliando lo anterior',
              'Que solo algunos estudiantes tienen acceso al currículo completo',
              'Que el currículo empieza en primaria y termina en media sin revisiones'
            ],
            correcta: 1,
            explicacion: 'Bruner propuso que los niños pueden aprender cualquier concepto desde temprana edad si se presenta de manera apropiada al nivel, y que ese concepto debe retomarse con mayor complejidad en cada nivel posterior. La empatía se trabaja a los 4 años de manera simple y a los 16 con profundidad filosófica: es el mismo concepto, espiral creciente.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Conoces lo que hacen tus colegas del nivel anterior y del siguiente en formación ciudadana? ¿Hay articulación real?',
          '¿Qué barreras institucionales impiden la transversalidad genuina en tu institución?',
          '¿Qué haría diferente el MEN para facilitar la transversalidad desde la política educativa?'
        ]
      }
    },
    {
      id: 's5_2',
      num: 'Sesión 3',
      titulo: 'Diseño curricular situado: adaptar los lineamientos al contexto institucional',
      duracion: '90 min',
      tipo: 'Diseño situado',
      objetivo: 'Aplicar los lineamientos MEN 2026 para diseñar una propuesta curricular contextualizada que responda a las características específicas de la institución y su territorio.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La autonomía curricular como responsabilidad',
          texto: `<p>La autonomía curricular no es la ausencia de referentes comunes, sino la capacidad de las comunidades educativas para construir propuestas propias coherentes con los lineamientos nacionales y profundamente enraizadas en sus contextos.</p>

El documento MEN 2026 es claro: no hay un currículo único que implementar. Hay un marco que cada institución debe interpretar, contextualizar y hacer suyo.

Esto requiere que la institución responda cuatro preguntas fundamentales:
<ol>
<li><strong>¿Quiénes somos?</strong> Contexto sociocultural, histórico y territorial de la institución y su comunidad.</li>
<li><strong>¿Dónde estamos?</strong> Diagnóstico real de las competencias ciudadanas y socioemocionales actuales.</li>
<li><strong>¿A dónde vamos?</strong> Visión de ciudadano que queremos formar en este contexto específico.</li>
<li><strong>¿Cómo llegamos?</strong> Diseño curricular situado: qué enseñar, cuándo, cómo y con qué evidencias.</li>
</ol>`
        },
        {
          tipo: 'tabla',
          titulo: '2. Diagnóstico curricular: preguntas orientadoras del MEN 2026',
          tabla: {
            cabeceras: ['Dimensión del diagnóstico', 'Preguntas clave', 'Fuente de información'],
            filas: [
              ['Contexto territorial', '¿Cuáles son los principales problemas de convivencia, justicia y participación en el territorio? ¿Qué historia de conflicto o resistencia tiene la comunidad?', 'Líderes comunitarios, familias, PNUD, alcaldías'],
              ['Cultura institucional', '¿Cómo se toman las decisiones en la institución? ¿Hay participación real? ¿Cómo se gestionan los conflictos? ¿Qué dice el manual de convivencia sobre los derechos?', 'Observación, encuestas a docentes y estudiantes, revisión de actas'],
              ['Prácticas pedagógicas', '¿Qué competencias ciudadanas y CSE se trabajan explícitamente? ¿Cuáles de manera implícita? ¿Cuáles están ausentes?', 'Revisión de planeaciones, observación de clases, entrevistas'],
              ['Resultados y evidencias', '¿Hay datos sobre clima escolar, conflictos, participación? ¿Qué dicen las Pruebas Saber sobre competencias ciudadanas?', 'SIMAT, Pruebas Saber, registros de convivencia'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. El PEI como documento vivo de ciudadanía',
          texto: `El Proyecto Educativo Institucional (PEI) es el primer documento curricular de una institución. El documento MEN 2026 plantea que el PEI debería ser el primer ejercicio de ciudadanía de la institución: construido colectivamente, revisado periódicamente, coherente con la vida real.

<p>Un PEI que nadie conoce, que nadie cuida y que nadie usa no es un proyecto educativo: es un trámite burocrático. Un PEI vivo es aquel donde cada decisión curricular puede justificarse en relación con el tipo de ciudadano que la institución quiere formar.</p>

Para la formación ciudadana y el DSE, el PEI debe incluir explícitamente:
<ul>
<li>El <strong>perfil ciudadano</strong> que la institución se compromete a formar.</li>
<li>Las <strong>competencias CC y CSE prioritarias</strong> según el diagnóstico territorial.</li>
<li>Los <strong>proyectos transversales</strong> que articulan las áreas alrededor de estas competencias.</li>
<li>Los <strong>mecanismos de evaluación formativa</strong> del desarrollo ciudadano.</li>
</ul>`
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Diagnóstico curricular participativo',
          icono: '🔍',
          instruccion: 'En grupos: respondan las 4 preguntas fundamentales (¿quiénes somos, dónde estamos, a dónde vamos, cómo llegamos) para su institución. Usen datos reales. Identifiquen las 3 competencias CC/CSE más urgentes para su contexto y justifiquen por qué.',
          tiempo: '30 min'
        },
        {
          tipo: 'diseno',
          titulo: 'Propuesta curricular mínima viable',
          icono: '✏️',
          instruccion: 'Basados en el diagnóstico: diseñen una propuesta curricular "mínima viable" para un semestre. No el currículo perfecto: el primer paso posible. ¿Qué competencia? ¿Qué nivel? ¿Qué estrategia? ¿Quién? ¿Con qué evidencia de impacto?',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi capacidad de diseño curricular',
          icono: '🪞',
          instruccion: 'Escribe: "Lo que más me motiva del diseño curricular situado es... Lo que más me genera inseguridad o resistencia es... El apoyo que necesito para avanzar es..."',
          tiempo: '10 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 3.2: Diseño curricular situado (pp. 126-132)', url: '#', meta: 'Documento oficial' },
        { tipo: 'herramienta', titulo: 'Guía de diagnóstico curricular institucional — MEN', url: '#', meta: 'Herramienta práctica' },
        { tipo: 'herramienta', titulo: 'Plantilla de Plan Curricular por Competencia', url: '#', meta: 'Formato descargable' },
        { tipo: 'doc', titulo: 'Decreto 1860/1994 — PEI: componentes y estructura', url: '#', meta: 'Marco normativo' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué significa que el PEI es un "documento vivo" según el MEN 2026?',
            opciones: [
              'Que debe actualizarse cada año obligatoriamente',
              'Que cada decisión curricular puede justificarse en relación con el tipo de ciudadano que la institución se compromete a formar, y que es construido y revisado colectivamente',
              'Que debe incluir tecnología digital e interactiva',
              'Que es propiedad intelectual de los docentes que lo diseñaron'
            ],
            correcta: 1,
            explicacion: 'Un PEI vivo es aquel que orienta decisiones reales: cuando se discute si incluir o no la Cátedra de la Paz, cuando se diseña el horario, cuando se seleccionan los textos escolares. Cada decisión curricular debería poder responderse con: "lo hacemos así porque queremos formar este tipo de ciudadano". Un PEI que nadie consulta no es proyecto: es archivo.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿El PEI de tu institución incluye un perfil ciudadano claro? ¿Lo conoce la comunidad educativa?',
          '¿Qué pasaría si los estudiantes de tu institución participaran en el diseño del próximo currículo de formación ciudadana?',
          '¿Cuál es la primera acción curricular concreta que realizarás en tu institución después de este módulo?'
        ]
      }
    }
  ]
});
