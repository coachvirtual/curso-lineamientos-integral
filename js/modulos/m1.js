/* ══════════════════════════════════════════════════════════
   M1 — Fundamentos Epistémicos y Pedagógicos
   Fuente: Capítulo 2, secciones 2.1–2.5
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm1',
  num: 'Módulo 1',
  icon: '🔬',
  color: '#5A2E8A',
  bg: '#F3EDFB',
  titulo: 'Fundamentos Epistémicos y Pedagógicos',
  subtitulo: 'Las bases teóricas que sustentan una educación transformadora',
  duracion: '3 sesiones · 4.5 horas',
  descripcion: 'Exploramos los referentes filosóficos, psicológicos y pedagógicos que dan sustento al marco conceptual de los Lineamientos 2026: Bronfenbrenner, Gadamer, Freire, la ética del cuidado y los enfoques socioculturales.',
  sesiones: [
    {
      id: 's1_0',
      num: 'Sesión 1',
      titulo: 'Fundamentos epistemológicos: ¿desde dónde se piensa este marco?',
      duracion: '90 min',
      tipo: 'Fundamentación teórica',
      objetivo: 'Identificar los referentes filosóficos y psicológicos que fundamentan el marco de competencias ciudadanas y socioemocionales, reconociendo sus implicaciones para la práctica pedagógica.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La pregunta epistemológica: ¿qué es el conocimiento en este marco?',
          texto: `El documento MEN 2026 parte de una premisa epistemológica clara: el conocimiento que interesa para la formación ciudadana y el desarrollo socioemocional <strong>no es neutral, no es individual y no es transferible de manera directa</strong>.

Según los fundamentos del documento, el conocimiento en este marco es:

<ul>
<li><strong>Situado:</strong> Emerge de contextos históricos, culturales y relacionales concretos. Lo que significa "convivir" en Tumaco es diferente a lo que significa en Bogotá o en La Guajira.</li>
<li><strong>Intersubjetivo:</strong> Se construye en el diálogo, en el encuentro con el otro. No hay aprendizaje ciudadano en soledad.</li>
<li><strong>Transformador:</strong> El conocimiento que no cambia la manera de actuar en el mundo no es verdadero aprendizaje.</li>
</ul>

<p>Comprender implica un movimiento circular entre los horizontes del intérprete y los de la tradición, en el que el sentido se construye en el diálogo y en la apertura al otro.</p>`
        },
        {
          tipo: 'tabla',
          titulo: '2. Los referentes teóricos del marco: quiénes son y qué aportan',
          tabla: {
            cabeceras: ['Autor / Teoría', 'Aporte central al marco', 'Implicación pedagógica'],
            filas: [
              ['Bronfenbrenner (1979)\nEcología del desarrollo', 'El desarrollo humano ocurre en la interacción con múltiples sistemas: familia, escuela, comunidad, sociedad, cultura.', 'La escuela no puede ignorar el contexto familiar, comunitario y territorial del estudiante.'],
              ['Gadamer (2003)\nHermenéutica', 'Comprender es interpretar y resignificar desde el diálogo. La identidad es narrativa y se construye con otros.', 'El aula es un espacio de interpretación colectiva, no de transmisión de verdades.'],
              ['Vygotsky (1978)\nSocioculturalismo', 'Las funciones psicológicas superiores se desarrollan primero en el plano social. La Zona de Desarrollo Próximo.', 'El aprendizaje ciudadano ocurre en la interacción. No hay ciudadanía sin comunidad.'],
              ['Gilligan (1982) / Noddings (2003)\nÉtica del cuidado', 'La responsabilidad hacia el otro y la sensibilidad relacional son el centro de la vida moral.', 'La escuela debe practicar el cuidado, no solo enseñarlo. Las relaciones son pedagógicas.'],
              ['Arendt (1958)\nFilosofía política', 'La subjetividad se configura en el espacio público. Existimos políticamente cuando "aparecemos" ante otros.', 'La participación auténtica forma ciudadanía. Los consejos estudiantiles deben ser reales, no decorativos.'],
              ['Freire (1970)\nPedagogía crítica', 'La educación es siempre política. Libera o domestica. La "educación bancaria" reproduce dominación.', 'El docente que no cuestiona reproduce el statu quo. La pregunta crítica es acto pedagógico fundamental.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. El enfoque de competencias: más allá del "saber hacer"',
          texto: `Los lineamientos adoptan un concepto de competencia que supera la visión instrumental y técnica que dominó la educación en los años 90. Una competencia, en este marco, es:

<ul>
<li>La capacidad de <strong>resolver problemas en situaciones inéditas</strong>, no solo reproducir procedimientos conocidos.</li>
<li>La integración de <strong>conocimiento, habilidades y actitudes</strong> en la acción real.</li>
<li>Una <strong>disposición para actuar éticamente</strong> en el mundo social, no solo para actuar eficientemente.</li>
</ul>

Esta distinción es fundamental: un estudiante puede "saber" los derechos humanos (competencia cognitiva), pero necesita también poder <em>defenderlos</em> cuando alguien los viola (competencia ciudadana) y sentir <em>indignación genuina</em> ante la injusticia (competencia socioemocional).

Las tres dimensiones son inseparables. Trabajar solo una es insuficiente.`
        },
        {
          tipo: 'grafico',
          titulo: '4. La triple dimensión de la competencia ciudadana y socioemocional',
          tipo_grafico: 'triangulo',
          datos: [
            { label: 'SABER (Cognitiva)', desc: 'Comprender, analizar, conceptualizar el mundo social y emocional', color: '#3B82F6' },
            { label: 'SABER HACER (Procedimental)', desc: 'Actuar, participar, gestionar, resolver en situaciones reales', color: '#0C7A4A' },
            { label: 'SABER SER (Actitudinal-Ética)', desc: 'Valorar, comprometerse, sentir responsabilidad, ejercer cuidado', color: '#EC4899' },
          ],
          nota: 'La competencia real exige las tres dimensiones actuando simultáneamente. Ninguna basta sola.'
        }
      ],

      actividades: [
        {
          tipo: 'individual',
          titulo: 'Mi teoría implícita del aprendizaje',
          icono: '🧠',
          instruccion: 'Antes de leer más, responde: ¿Cómo crees que aprenden tus estudiantes mejor? ¿Escuchando? ¿Practicando? ¿Discutiendo? ¿Creando? ¿Tu respuesta implícita se acerca más a Vygotsky, Gadamer o Freire? ¿O a ninguno?',
          tiempo: '10 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Los autores en tu clase',
          icono: '📚',
          instruccion: 'Elige uno de los autores de la tabla. Diseña en 10 minutos una actividad concreta para tu grado y área que aplique SU aporte específico. Comparte y discute: ¿es aplicable? ¿qué resistencias generaría en tu institución?',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mis supuestos sobre el conocimiento',
          icono: '🪞',
          instruccion: '¿Cuál de los autores desafía más profundamente tus supuestos actuales sobre cómo se aprende? Escribe en tu diario: "Este autor me interpela porque... En mi práctica, lo contrario de su propuesta se ve cuando..."',
          tiempo: '15 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 2.1: Fundamentos epistemológicos (pp. 21-24)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Bronfenbrenner, U. (1979). La ecología del desarrollo humano.', url: '#', meta: 'Capítulo 1 — síntesis' },
        { tipo: 'libro', titulo: 'Freire, P. (1970). Pedagogía del oprimido.', url: '#', meta: 'Capítulos 1 y 2' },
        { tipo: 'video', titulo: 'La teoría ecológica de Bronfenbrenner explicada', url: '#', meta: '12 min · subtítulos en español' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: 'Según la teoría sociocultural de Vygotsky, ¿cómo se desarrollan las competencias ciudadanas y socioemocionales?',
            opciones: [
              'En el interior de cada individuo, de manera independiente del contexto',
              'Primero en el plano social (con otros) y luego se interiorizan en el plano psicológico',
              'Solo pueden desarrollarse si el estudiante tiene predisposición genética',
              'Únicamente en el contexto familiar, antes de llegar a la escuela'
            ],
            correcta: 1,
            explicacion: 'Vygotsky planteó que toda función en el desarrollo cultural aparece dos veces: primero en el plano social (interpsicológica) y luego en el interior del individuo (intrapsicológica). Las competencias ciudadanas se aprenden primero en comunidad, después se interiorizan.'
          },
          {
            pregunta: '¿Qué implica la ética del cuidado (Gilligan/Noddings) para la práctica docente?',
            opciones: [
              'Que el docente debe cuidar solo el bienestar físico de los estudiantes',
              'Que la escuela debe practicar el cuidado, no solo enseñarlo, y que las relaciones son pedagógicas',
              'Que los estudiantes deben aprender a cuidar al docente',
              'Que el cuidado es una competencia femenina que las niñas aprenden más fácilmente'
            ],
            correcta: 1,
            explicacion: 'La ética del cuidado plantea que la responsabilidad hacia el otro y la sensibilidad relacional son el centro de la vida moral. Para el aula, esto significa que las relaciones que se construyen EN la escuela son el contenido más importante: no se puede enseñar cuidado sin practicarlo.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Qué teoría del aprendizaje usabas implícitamente antes de esta sesión? ¿Ha cambiado algo?',
          '¿Cuál de los autores estudiados resonó más con tu experiencia de vida (no solo docente)?',
          '¿Qué le preguntarías a Freire si lo tuvieras frente a ti en el contexto de tu institución?'
        ]
      }
    },

    {
      id: 's1_1',
      num: 'Sesión 2',
      titulo: 'Fundamentos pedagógicos: ¿cómo se enseña ciudadanía?',
      duracion: '90 min',
      tipo: 'Pedagogía práctica',
      objetivo: 'Comprender los principios pedagógicos que orientan la enseñanza de las competencias ciudadanas y socioemocionales, distinguiendo entre enfoques transmisivos y enfoques formativos.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La pedagogía como horizonte formativo',
          texto: `Los fundamentos pedagógicos del documento MEN 2026 parten de una distinción fundamental: hay una diferencia entre <strong>instrucción</strong> (transmitir información sobre ciudadanía) y <strong>formación</strong> (constituir sujetos ciudadanos).

La instrucción pregunta: ¿cuánto saben los estudiantes sobre los derechos humanos?
La formación pregunta: ¿cómo actúan los estudiantes cuando alguien viola los derechos de otro?

<p>La pedagogía no es la técnica de la enseñanza, sino el horizonte de comprensión desde el cual el maestro orienta su acción formativa.</p>

Esta distinción tiene consecuencias metodológicas: no basta con enseñar SOBRE democracia. Hay que practicarla EN la escuela.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Principios pedagógicos de los Lineamientos MEN 2026',
          tabla: {
            cabeceras: ['Principio', 'Qué significa', 'Cómo se ve en el aula'],
            filas: [
              ['Pedagogía situada', 'El aprendizaje parte del contexto real del estudiante: su territorio, historia y comunidad.', 'Los ejemplos y problemas son locales. Los textos incluyen voces del contexto propio.'],
              ['Pedagogía dialógica', 'El conocimiento se construye en el diálogo horizontal entre docente y estudiantes.', 'El docente pregunta más de lo que responde. Los estudiantes deliberan, no solo reciben.'],
              ['Pedagogía crítica', 'Se cuestiona el statu quo, se analizan las relaciones de poder, se promueve la transformación.', 'Se analizan injusticias reales. Los estudiantes proponen soluciones, no solo las describen.'],
              ['Pedagogía del cuidado', 'Las relaciones entre personas son el contenido más importante. Se cuida el bienestar de todos.', 'El docente conoce a sus estudiantes. El aula es un espacio seguro para el error y la vulnerabilidad.'],
              ['Coherencia entre medio y fin', 'No se puede enseñar democracia con métodos autoritarios. La forma enseña tanto como el contenido.', 'La gestión del aula es democrática. Los estudiantes participan en las decisiones que los afectan.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. El concepto de aprendizaje esencial',
          texto: `Los lineamientos introducen el concepto de <strong>aprendizajes esenciales</strong>, que son distintos de los "contenidos" o "temas". Un aprendizaje esencial es:

<ul>
<li>Una <strong>transformación real</strong> en la capacidad del sujeto para actuar en el mundo, no solo para responder preguntas.</li>
<li><strong>Progresivo</strong>: se construye a lo largo de toda la trayectoria escolar, desde la educación inicial hasta la media.</li>
<li><strong>Observable</strong>: se puede evidenciar en situaciones auténticas de la vida escolar y comunitaria.</li>
</ul>

Ejemplo: Un aprendizaje esencial no es "conocer los mecanismos de participación ciudadana". Es <em>"participar activamente en los espacios de decisión que lo afectan, argumentando sus posiciones y escuchando las de otros."</em>

La diferencia es la que hay entre saber la definición de democracia y practicarla.`
        },
        {
          tipo: 'grafico',
          titulo: '4. Progresión del aprendizaje a través de los niveles educativos',
          tipo_grafico: 'progresion',
          datos: [
            { nivel: 'Educación Inicial (0-5 años)', competencia: 'Convivencia', aprendizaje: 'Reconocer emociones propias y en los demás. Resolver conflictos simples con guía del adulto. Participar en acuerdos de aula.', color: '#F59E0B' },
            { nivel: 'Básica Primaria (1°-5°)', competencia: 'Convivencia', aprendizaje: 'Diálogo como herramienta de resolución. Mediación entre pares. Reconocimiento de la diversidad en el aula.', color: '#0C7A4A' },
            { nivel: 'Básica Secundaria (6°-9°)', competencia: 'Convivencia', aprendizaje: 'Deliberación ética en situaciones complejas. Liderazgo en procesos de convivencia. Análisis crítico de conflictos.', color: '#3B82F6' },
            { nivel: 'Educación Media (10°-11°)', competencia: 'Convivencia', aprendizaje: 'Diseño de proyectos de paz comunitarios. Mediación formal. Compromiso con la reconciliación territorial.', color: '#5A2E8A' },
          ]
        }
      ],

      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Diagnóstico pedagógico institucional',
          icono: '🏫',
          instruccion: 'En grupos: ¿Cuál de los 5 principios pedagógicos está más presente en tu institución? ¿Cuál está más ausente? ¿Qué barreras estructurales impiden algunos de ellos? Prepara 3 propuestas concretas para fortalecer el principio más débil.',
          tiempo: '25 min'
        },
        {
          tipo: 'individual',
          titulo: 'De contenido a aprendizaje esencial',
          icono: '✏️',
          instruccion: 'Toma un "contenido" de tu planeación actual. Conviértelo en un "aprendizaje esencial" usando la fórmula: "El estudiante será capaz de [acción observable] en [situación auténtica] demostrando [indicador de competencia]".',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: ¿Instrucción o formación?',
          icono: '🪞',
          instruccion: 'Escribe honestamente en tu diario: "En mis clases, ¿hago más instrucción o más formación? ¿Cómo lo sé? ¿Qué evidencias tengo? ¿Qué me lo impide cuando quiero hacer más formación?"',
          tiempo: '15 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 2.2: Fundamentos pedagógicos (pp. 24-32)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Freire, P. (1997). Pedagogía de la autonomía.', url: '#', meta: 'Capítulos 1 y 2 — lectura esencial' },
        { tipo: 'video', titulo: 'Enseñar vs. Formar: la diferencia que cambia todo', url: '#', meta: 'Charla pedagógica · 15 min' },
        { tipo: 'doc', titulo: 'Guía de aprendizajes esenciales por nivel educativo', url: '#', meta: 'Herramienta práctica MEN' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué es un "aprendizaje esencial" según los Lineamientos MEN 2026?',
            opciones: [
              'Un contenido mínimo que todos los estudiantes deben memorizar para pasar el año',
              'Una transformación real en la capacidad del sujeto para actuar en el mundo, observable en situaciones auténticas',
              'El tema más importante de cada área del conocimiento',
              'Un estándar internacional de competencias que Colombia adopta de la OCDE'
            ],
            correcta: 1,
            explicacion: 'Un aprendizaje esencial no es un contenido a memorizar, sino una transformación en la capacidad de acción del sujeto. Es progresivo (se desarrolla a lo largo de la escolaridad), observable (se evidencia en situaciones reales) y auténtico (ocurre en contextos genuinos, no solo en evaluaciones).'
          },
          {
            pregunta: '¿Qué significa el principio de "coherencia entre medio y fin" en la pedagogía ciudadana?',
            opciones: [
              'Que los objetivos deben coincidir con los contenidos del currículo nacional',
              'Que no se puede enseñar democracia con métodos autoritarios: la forma enseña tanto como el contenido',
              'Que los medios audiovisuales son los mejores para enseñar ciudadanía',
              'Que los fines de la educación deben alinearse con las metas económicas del país'
            ],
            correcta: 1,
            explicacion: 'La coherencia entre medio y fin es uno de los principios más desafiantes: la manera en que se gestiona el aula, se toman decisiones y se resuelven conflictos enseña tanto o más que los contenidos explícitos. No se puede hablar de democracia en un aula donde los estudiantes no tienen voz.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿En qué momento de tu vida escolar (como estudiante) viviste una "pedagogía del cuidado" genuina? ¿Qué lo hizo posible?',
          '¿Cuál de los 5 principios pedagógicos te genera más incomodidad? ¿Por qué crees que es así?',
          '¿Qué cambiaría en tu institución si todos los docentes aplicaran consistentemente el principio dialógico?'
        ]
      }
    },

    {
      id: 's1_2',
      num: 'Sesión 3',
      titulo: 'Reflexión curricular: el currículo como proyecto ético',
      duracion: '90 min',
      tipo: 'Reflexión curricular',
      objetivo: 'Comprender la concepción de currículo que adoptan los lineamientos y analizar críticamente cómo el currículo de la propia institución puede transformarse a la luz de este marco.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El currículo no es neutral',
          texto: `Los lineamientos MEN 2026 adoptan una concepción del currículo que va mucho más allá de "el plan de estudios". El currículo es:

<p>El conjunto de criterios, planes de estudio, programas, metodologías, y procesos que contribuyen a la formación integral y a la construcción de la identidad cultural nacional, regional y local.</p>

Pero más aún: el currículo es <strong>selectivo, restrictivo y regulativo</strong>. Cuando una institución decide qué conocimientos son importantes, qué voces se incluyen en los textos, qué preguntas se pueden hacer y cuáles no, está tomando decisiones políticas y éticas.

El currículo que selecciona solo autores europeos, que invisibiliza las culturas indígenas y afrocolombianas, que no incluye la historia del conflicto armado, que nunca pregunta "¿esto es justo?"... ese currículo también forma ciudadanos. Ciudadanos que aprenden a no ver.`
        },
        {
          tipo: 'grafico',
          titulo: '2. El currículo como proceso vivo (Sacristán, 2013)',
          tipo_grafico: 'ciclo',
          datos: [
            { label: 'Currículo prescrito', desc: 'Lo que el Estado y el MEN ordenan: lineamientos, estándares, derechos básicos.', color: '#6366F1' },
            { label: 'Currículo presentado', desc: 'Lo que los libros de texto y materiales muestran a docentes y estudiantes.', color: '#3B82F6' },
            { label: 'Currículo moldeado', desc: 'Lo que el docente interpreta y adapta a su contexto y sus estudiantes.', color: '#0C7A4A' },
            { label: 'Currículo en acción', desc: 'Lo que realmente ocurre en el aula: las interacciones, las preguntas, los silencios.', color: '#F59E0B' },
            { label: 'Currículo realizado', desc: 'Lo que los estudiantes realmente aprenden: no siempre lo que se enseñó.', color: '#EC4899' },
            { label: 'Currículo evaluado', desc: 'Lo que se mide en las pruebas y calificaciones.', color: '#A84020' },
          ],
          nota: 'La brecha entre el currículo prescrito y el currículo realizado es el espacio donde opera la autonomía docente. Y también donde se producen las mayores injusticias educativas.'
        },
        {
          tipo: 'lectura',
          titulo: '3. Autonomía curricular y responsabilidad institucional',
          texto: `La Ley 115 reconoce que, si bien existen referentes comunes que orientan la calidad y garantizan equidad, <strong>corresponde a cada establecimiento</strong> definir cómo organiza los saberes, qué enfoques privilegia y de qué manera responde a las características socioculturales de su comunidad.

Esta autonomía es un derecho y una responsabilidad. Implica que:

<ul>
<li>No hay un "currículo ciudadano" que bajarse del internet e implementar.</li>
<li>Cada institución debe hacer el ejercicio de <em>construir su propio currículo situado</em>.</li>
<li>Ese proceso de construcción es en sí mismo un ejercicio de ciudadanía institucional.</li>
</ul>

<p>Las escuelas, en el marco de su autonomía institucional, deben ser conscientes de las necesidades e intereses de sus estudiantes, al diseñar su propio currículo, considerando la igualdad de oportunidades al implementar apoyos e intervenciones o al realizar ajustes razonables.</p>`
        }
      ],

      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Auditoría curricular crítica',
          icono: '🔍',
          instruccion: 'En grupos: analiza el plan de estudios de tu área o nivel. ¿Qué voces están presentes? ¿Cuáles ausentes? ¿Se incluyen perspectivas étnicas, de género, territoriales? ¿Hay espacio para preguntas incómodas? ¿Qué del conflicto colombiano aparece y cómo aparece?',
          tiempo: '30 min'
        },
        {
          tipo: 'individual',
          titulo: 'Mi currículo oculto: el mapa de mis silencios',
          icono: '🗺️',
          instruccion: 'Piensa en lo que NUNCA dices en clase: ¿Qué temas evitas? ¿Qué preguntas de los estudiantes desvías? ¿Qué perspectivas nunca presentas? Mapea esos silencios. ¿Son silencios pedagógicos o silencios de miedo?',
          tiempo: '15 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi poder curricular',
          icono: '🪞',
          instruccion: 'Escribe: "El poder que tengo como docente sobre lo que se aprende en mi aula es... Lo uso para... Lo podría usar más conscientemente para..."',
          tiempo: '15 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 3.1: Estructura curricular (pp. 92-99)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Apple, M. (2019). Can education change society?', url: '#', meta: 'Capítulo 1: El currículo como política' },
        { tipo: 'libro', titulo: 'Sacristán, J. (2013). El currículo: una reflexión sobre la práctica.', url: '#', meta: 'Síntesis del modelo de currículo como proceso' },
        { tipo: 'video', titulo: 'Paulo Freire y el currículo como acto político', url: '#', meta: 'Documental · 20 min' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué significa que el currículo es "selectivo, restrictivo y regulativo"?',
            opciones: [
              'Que solo algunos estudiantes pueden acceder al currículo de calidad',
              'Que al seleccionar qué se enseña y qué se excluye, el currículo toma decisiones políticas y éticas con consecuencias reales',
              'Que el currículo debe ser restringido a las áreas básicas: matemáticas, lenguaje y ciencias',
              'Que la selección de contenidos debe hacerla solo el MEN, sin participación de docentes'
            ],
            correcta: 1,
            explicacion: 'El currículo nunca es neutro: al elegir qué incluir (y qué excluir), qué voces representar (y cuáles silenciar), qué preguntas hacer (y cuáles evitar), la escuela toma posiciones éticas y políticas que tienen consecuencias sobre qué tipo de ciudadanos se forman.'
          },
          {
            pregunta: '¿Cuál es la diferencia entre el "currículo en acción" y el "currículo realizado"?',
            opciones: [
              'Son sinónimos: ambos se refieren a lo que el docente planea enseñar',
              'El currículo en acción es lo que ocurre en el aula (interacciones reales); el realizado es lo que los estudiantes efectivamente aprenden, que no siempre coincide',
              'El currículo en acción es el prescrito por el MEN; el realizado es el del PEI institucional',
              'Son dos nombres para el mismo documento curricular'
            ],
            correcta: 1,
            explicacion: 'La brecha entre el currículo en acción (lo que ocurre en el aula) y el currículo realizado (lo que los estudiantes realmente aprenden) es enorme. Un docente puede enseñar democracia y que los estudiantes aprendan sumisión, si la forma de gestionar el aula es autoritaria.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Qué aprendiste sobre tu propio currículo al hacer la auditoría crítica?',
          '¿Cuál de los seis tipos de currículo (prescrito, presentado, moldeado, en acción, realizado, evaluado) te resulta más difícil de controlar como docente?',
          '¿Qué haría diferente en tu planeación del próximo periodo a la luz de lo discutido hoy?'
        ]
      }
    }
  ]
});
