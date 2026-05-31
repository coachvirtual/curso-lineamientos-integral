/* ══════════════════════════════════════════
   DATOS DEL CURSO REESTRUCTURADO (MEN 2026)
   ══════════════════════════════════════════ */
const MODULOS = [
  { 
    id: 'm0', 
    num: 'Módulo 0', 
    color: '#1D9E75', 
    bg: '#E1F5EE', 
    icon: 'ti-compass',
    title: 'Introducción y Contexto',
    sub: 'El viaje curricular: rutas para la transformación del ser y el saber',
    sesiones: [
      { 
        title: '¿Por qué este curso? — Termómetro Escolar Interactivo', 
        tipo: 'Presentación y Justificación', 
        dur: '60 min',
        obj: [
          'Comprender el propósito transformador de los Lineamientos Curriculares 2026.',
          'Ejecutar un autodiagnóstico de prioridades socioemocionales institucionales.',
          'Reconocer la escuela como el escenario donde la ciudadanía se vive y se aprende.'
        ],
        contenidos: [
          'Retos estructurales urgentes en Colombia: posconflicto, brechas de equidad, desinformación y salud mental pospandemia.',
          'La formación integral como la articulación indisoluble de las dimensiones cognitiva, socioemocional, ética y política.',
          'El paso definitivo: transitar de "enseñar asignaturas de ciudadanía" a "co-construir entornos de ciudadanía viva".'
        ],
        actividades: [
          'Taller interactivo "Termómetro de Urgencias": Evalúa en una escala de 1 a 4 el estado de la salud mental y la convivencia en tu sede educativa.',
          'Análisis de caso: Mapeo de entornos seguros e inseguros dentro de la infraestructura escolar cotidiana.',
          'Reflexión de apertura: ¿Qué dinámicas de mi aula actual reflejan el "currículo oculto" y cómo puedo alinearlas con la formación integral?'
        ],
        recursos: [
          'Presentación Ejecutiva del documento MEN (2026)',
          'Plantilla Guía: "Pautas para activar una Comunidad de Práctica Docente en tu Colegio"'
        ],
        rq: 'Al mirar con honestidad los pasillos y aulas de tu institución, ¿cuál es el síntoma más evidente de que la salud mental y la ciudadanía necesitan una intervención pedagógica urgente?',
        aq: '¿Qué tan claros tienes los desafíos estructurales que justifican la implementación de estos nuevos lineamientos en tu región?'
      },
      { 
        title: 'Marco normativo de tres décadas — El Inspector del PEI', 
        tipo: 'Fundamentos Legales', 
        dur: '60 min',
        obj: [
          'Trazar la evolución normativa desde la Constitución de 1991 hasta la Cátedra de Educación Emocional.',
          'Analizar las implicaciones técnico-pedagógicas de la Ley 2503 de 2025.',
          'Proponer reformas normativas viables para armonizar el PEI y el Manual de Convivencia.'
        ],
        contenidos: [
          'Fundamentos constitucionales: Artículos 41 y 67 como mandatos de educación para la democracia y la paz.',
          'Hitos históricos: Estándares de Competencias Ciudadanas (2004), Ley 1620 de Convivencia Escolar (2013).',
          'La gran actualización: Ley 2503 de 2025 y la obligatoriedad de la Cátedra de Educación Emocional como proceso permanente.'
        ],
        actividades: [
          'Reto "El Inspector del PEI": Lee el caso de una institución educativa estancada en un enfoque punitivo de los años 90 y detecta 3 violaciones a la normativa vigente.',
          'Línea de tiempo comparativa: Mapeo grupal de los deberes y responsabilidades que la Ley 1620 y la Ley 2503 asignan a los docentes.',
          'Diseño de propuesta: Formulación de un artículo de reforma directa para el Manual de Convivencia institucional.'
        ],
        recursos: [
          'Matriz Legal: Comparativo de Leyes Educativas en Colombia (1994 - 2025)',
          'Compendio Técnico: Decreto 1965 de 2013 y Rutas de Atención Integral'
        ],
        rq: '¿Tu Manual de Convivencia escolar actual sigue operando bajo una lógica puramente punitiva (castigos) o ya integra procesos restaurativos y de educación emocional? ¿Qué artículo específico cambiarías mañana?',
        aq: '¿Qué tan preparado/a te sientes para argumentar legalmente la necesidad de transformar las prácticas de convivencia en tu colegio?'
      }
    ],
    quiz: [
      {
        q: '¿Cuál es la innovación principal que introduce la Ley 2503 de 2025 en el sistema educativo colombiano?',
        opts: [
          'La eliminación de las asignaturas tradicionales para reemplazarlas por talleres virtuales.',
          'La obligatoriedad de la Cátedra de Educación Emocional como un proceso transversal, intencional y permanente.',
          'La delegación exclusiva de la convivencia escolar en psicólogos externos a la institución.',
          'La creación de un nuevo sistema de calificaciones cuantitativas para medir la felicidad del estudiante.'
        ],
        c: 1,
        exp: 'La Ley 2503 de 2025 establece la Cátedra de Educación Emocional no como una hora aislada, sino como un proceso pedagógico transversal y permanente en todas las instituciones.'
      },
      {
        q: 'Al realizar el ejercicio del "Inspector del PEI", ¿cuál de las siguientes situaciones escolares contradice directamente los lineamientos del MEN y la normativa vigente?',
        opts: [
          'Decidir la mediación pacífica de un conflicto de aula a través de un círculo restaurativo.',
          'Involucrar al gobierno estudiantil en la deliberación de los presupuestos de proyectos transversales.',
          'Suspender automáticamente a un estudiante desregulado emocionalmente sin activar previamente la ruta de acompañamiento formativo.',
          'Modificar el currículo de Ciencias Sociales para incorporar metodologías de historia oral local.'
        ],
        c: 2,
        exp: 'Los enfoques restaurativos y formativos de la Ley 1620 y los Lineamientos 2026 prohíben las medidas punitivas automáticas que ignoren el acompañamiento, la co-regulación y el análisis del contexto socioemocional.'
      }
    ]
  },
  { 
    id: 'm1', 
    num: 'Módulo 1', 
    color: '#534AB7', 
    bg: '#EEEDFE', 
    icon: 'ti-brain',
    title: 'Fundamentos Epistémicos y Pedagógicos',
    sub: 'Del saber al ser: bases conceptuales para la transformación',
    sesiones: [
      { 
        title: 'Epistemología de la formación ciudadana — Mapa de Hospitalidad', 
        tipo: 'Marco Conceptual', 
        dur: '75 min',
        obj: [
          'Situar los anclajes sociohistóricos de la ciudadanía crítica en contextos de diversidad.',
          'Analizar el concepto de educación como "hospitalidad y acogida de los recién llegados" (Arendt).',
          'Diseñar acciones institucionales basadas en la ética de la alteridad (Levinas).'
        ],
        contenidos: [
          'La escuela contemporánea como el espacio de encuentro con lo radicalmente diferente.',
          'Hannah Arendt y el concepto de la crisis de la educación: la responsabilidad de acoger a quienes llegan a un mundo compartido.',
          'La dualidad ética (Mèlich, Levinas): el Yo como sujeto interpelado por la presencia y la dignidad del Otro.'
        ],
        actividades: [
          'Reto "El Mapa del Recién Llegado": Ponte en los zapatos de un estudiante migrante, rural o en condición de discapacidad. Recorre mentalmente la entrada de tu colegio y evalúa qué tan hostil u hospitalario es el entorno.',
          'Análisis de lectura grupal: Fragmentos seleccionados de "La educación como fuerza transgresora".',
          'Plan de acción: Diseño de una estrategia de bienvenida institucional que rompa las barreras del currículo oculto.'
        ],
        recursos: [
          'Guía conceptual: "Glosario de Filosofía de Bolsillo para Docentes"',
          'Lectura complementaria: Arendt, H. (2016). Entre el pasado y el futuro (Extractos)'
        ],
        rq: 'Si un estudiante que no encaja en la norma cultural de tu colegio llegara mañana a tu aula, ¿qué elementos del lenguaje cotidiano de la institución se convertirían en una barrera para su aceptación auténtica?',
        aq: '¿Qué tan cómodo/a te sientes traduciendo conceptos filosóficos complejos (alteridad, hospitalidad) en acciones prácticas dentro de tu aula?'
      },
      { 
        title: 'La escuela como comunidad ética — La Balanza de la Escuela', 
        tipo: 'Pedagogía y Didáctica', 
        dur: '75 min',
        obj: [
          'Apropiar las tres dimensiones de la justicia social (Fraser) aplicadas al entorno escolar.',
          'Diferenciar con precisión técnica entre aprendizajes, capacidades, competencias y habilidades.',
          'Estructurar secuencias didácticas basadas en los tres ejes operativos de la formación integral.'
        ],
        contenidos: [
          'Justicia tridimensional en educación: Distribución (recursos), Reconocimiento (identidades) y Representación (participación política).',
          'Los ejes operativos de los lineamientos: Intencionalidad curricular clara, metodologías activas y evaluación formativa.',
          'El enfoque de capacidades de Martha Nussbaum: Educar para garantizar una vida digna y autónoma.'
        ],
        actividades: [
          'Simulador "La Balanza de la Escuela": Analiza el caso de un alumno con bajo rendimiento que sabotea la clase pero trabaja por las noches. Diseña tres medidas de apoyo abordando las dimensiones de Fraser (distribución, reconocimiento y representación).',
          'Taller de diseño competencial: Toma un contenido informativo tradicional y conviértelo en el desarrollo de una capacidad ética orientada al contexto.',
          'Debate socrático: ¿Es posible construir una comunidad ética si las decisiones de evaluación siguen siendo unilaterales y autoritarias?'
        ],
        recursos: [
          'Esquema visual: Las Dimensiones de la Justicia Social en la Práctica Pedagógica',
          'Lectura recomendada: Perrenoud, P. (2008). Diez nuevas competencias para enseñar'
        ],
        rq: 'Piensa en el estudiante que consideras "más difícil" en este momento. Si aplicaras la balanza de Fraser, ¿cuál de las tres dimensiones (recursos, reconocimiento de su historia o participación en las decisiones) está fallando en su proceso?',
        aq: '¿Qué nivel de claridad tienes para diseñar actividades que evalúen el desarrollo de una capacidad y no solo la memoria de un contenido?'
      },
      { 
        title: 'Ciudadanía y socioemocionalidad como unidad — Puentes Conceptuales', 
        tipo: 'Integración Conceptual', 
        dur: '60 min',
        obj: [
          'Demostrar la relación indisociable entre el desarrollo socioemocional y el ejercicio ciudadano.',
          'Mapear los 6 enfoques teóricos del DSE y los 4 enfoques de las competencias ciudadanas.',
          'Diseñar propuestas de integración curricular que no saturen los contenidos existentes.'
        ],
        contenidos: [
          'El desarrollo socioemocional como la infraestructura interna que posibilita la participación democrática responsable.',
          'Los 6 enfoques del DSE: Procesual-cognitivo, Valorativo-ético, Regulación motivacional, Político-ciudadano, Filosófico-hermenéutico y Decolonial.',
          'Los 4 enfoques ciudadanos: Socioemocional, Ético-relacional, Sociopolítico crítico y Ciudadanía global e intercultural.'
        ],
        actividades: [
          'Reto "Puentes Conceptuales": Selecciona un enfoque del DSE (ej. Decolonial) y un enfoque ciudadano (ej. Intercultural). Diseña el eslogan y la acción central de una campaña escolar integrada.',
          'Análisis de matrices: Comparación interactiva de la Tabla 1 (enfoques del DSE) y la Tabla 2 (enfoques ciudadanos) del documento oficial.',
          'Mapeo institucional: Clasifica las actividades tradicionales de tu colegio según los enfoques teóricos dominantes.'
        ],
        recursos: [
          'Matriz Integradora Oficial: Cruce de Enfoques CC y CSE (MEN 2026)',
          'Video de referencia: CASEL SEL Framework - Versión en Español'
        ],
        rq: 'Cuando tus estudiantes experimentan emociones intensas en la vida pública escolar (como indignación por una injusticia o apatía ante el gobierno escolar), ¿cómo dialogas con esas emociones desde tu asignatura?',
        aq: '¿Qué tan clara ves la conexión práctica entre los procesos de regulación interna (emociones) y los procesos de deliberación externa (ciudadanía)?'
      }
    ],
    quiz: [
      {
        q: '¿Qué implica aplicar la dimensión de "Reconocimiento" de Nancy Fraser en una institución educativa multiétnica?',
        opts: [
          'Garantizar que todos los estudiantes reciban exactamente los mismos refrigerios y útiles escolares.',
          'Valorar e incorporar explícitamente en el currículo los saberes tradicionales, identidades e historias de las comunidades presentes.',
          'Permitir que solo los estudiantes de grados superiores elijan a los representantes del consejo directivo.',
          'Establecer un examen estandarizado de Ciencias Sociales igual para todo el territorio nacional.'
        ],
        c: 1,
        exp: 'Para Nancy Fraser, el Reconocimiento se centra en el valor de las identidades y la diversidad cultural, combatiendo la marginación o invisibilización de saberes en el currículo.'
      },
      {
        q: '¿Por qué se afirma que el Desarrollo Socioemocional (DSE) es la "infraestructura interna" de las competencias ciudadanas?',
        opts: [
          'Porque tener buenas emociones reemplaza la necesidad de conocer las leyes o la Constitución Política.',
          'Porque los procesos de autoconciencia y regulación emocional son indispensables para tolerar la frustración, deliberar en la diferencia y participar de forma responsable en la vida pública.',
          'Porque la educación emocional es una asignatura teórica que debe enseñarse antes de la clase de democracia.',
          'Porque el Ministerio de Educación Nacional busca priorizar la psicología clínica individual sobre el análisis sociopolítico.'
        ],
        c: 1,
        exp: 'Sin la capacidad interna de reconocer, nombrar y regular estados emocionales (DSE), el ejercicio ciudadano se fractura ante el conflicto, impidiendo el diálogo, la empatía y la construcción de acuerdos pacíficos.'
      }
    ]
  },
  { 
    id: 'm2', 
    num: 'Módulo 2', 
    color: '#D85A30', 
    bg: '#FAECE7', 
    icon: 'ti-circles-relation',
    title: 'El Modelo Concéntrico',
    sub: 'Cuatro ejes: Yo conmigo mismo · Yo con los otros · Yo con la sociedad · Yo con el mundo',
    sesiones: [
      { 
        title: 'La onda expansiva del ser — Mi Ecosistema de Aula (Ejes A y B)', 
        tipo: 'Marco Organizador', 
        dur: '75 min',
        obj: [
          'Apropiar la naturaleza recursiva de los Ejes A (Yo conmigo) y B (Yo con los otros).',
          'Analizar el impacto del bienestar y autocuidado docente en el clima emocional del aula.',
          'Diseñar rutinas de apertura sincrónicas para el desarrollo de la autoconciencia colectiva.'
        ],
        contenidos: [
          'El Modelo Concéntrico como mapa dinámico y recursivo del desarrollo integral, no como una jerarquía lineal.',
          'Eje A – Yo conmigo mismo: Identidad, autoconciencia, salud mental y la infraestructura del bienestar docente.',
          'Eje B – Yo con los otros: Empatía profunda, comunicación asertiva, hospitalidad y la co-regulación como vínculo.'
        ],
        actividades: [
          'Ejercicio de mapeo "Mi Ecosistema de Aula": Traza una línea que conecte tus niveles de estrés y autocuidado semanal (Eje A) con la forma en que reaccionas ante los conflictos cotidianos de tus estudiantes (Eje B).',
          'Codiseño pedagógico: Estructuración de una rutina de "Check-in" de 5 minutos al iniciar la clase para sintonizar los estados emocionales del grupo.',
          'Análisis relacional: Evaluación de las barreras invisibles que impiden una comunicación horizontal entre docentes y alumnos.'
        ],
        recursos: [
          'Infografía Interactiva: Los 4 Ejes Concéntricos de la Formación Integral',
          'Formato: "Matriz de Diagnóstico Concéntrico para la Gestión Escolar"'
        ],
        rq: 'Cuando entras al aula cargado/a de tensiones personales o administrativas, ¿cómo se transforma el clima del salón? ¿Qué estrategia de "pausa previa" podrías activar para proteger el entorno emocional de tus estudiantes?',
        aq: '¿Qué tan evidente encuentras el vínculo directo entre tu autoconciencia personal y la calidad de la convivencia en tu aula?'
      },
      { 
        title: 'De la escuela al territorio planetario — El Radar del Entorno (Ejes C y D)', 
        tipo: 'Marco Organizador', 
        dur: '75 min',
        obj: [
          'Vincular los procesos de aula con el Eje C (Sociedad) y el Eje D (Mundo).',
          'Articular las problemáticas del territorio local con los retos globales de sostenibilidad.',
          'Estructurar proyectos transversales basados en el pensamiento sistémico y la interdependencia.'
        ],
        contenidos: [
          'Eje C – Yo con la sociedad: Construcción del bien común, memoria histórica, participación democrática activa y transformación territorial.',
          'Eje D – Yo con el mundo: Conciencia ecológica radical, ciudadanía global, interdependencia de los sistemas y cuidado planetario.',
          'La dimensión recursiva: Cómo las acciones locales transforman la comprensión global del estudiante.'
        ],
        actividades: [
          'Simulador "El Radar del Entorno": Selecciona una problemática ambiental o social de tu barrio o municipio (Eje C). Diseña una ruta pedagógica que demuestre a los estudiantes cómo ese problema se conecta con un desafío global (Eje D).',
          'Mapeo de actores territoriales: Identificación de aliados clave fuera de la escuela (Juntas de Acción Comunal, sabedores locales, organizaciones ambientales) para expandir el aula.',
          'Análisis crítico: Evaluación de cómo el currículo de tu asignatura aborda o ignora los retos del cambio climático y la justicia social regional.'
        ],
        recursos: [
          'Esquema Técnico: El Modelo Concéntrico como Brújula de Proyectos Transversales',
          'Lectura complementaria: Bronfenbrenner, U. (1979). La ecología del desarrollo humano (Síntesis Aplicada)'
        ],
        rq: '¿Tu escuela le da la espalda al territorio que la rodea o lo integra como material de aprendizaje? ¿Qué problema real de la comunidad cercana podría convertirse en el eje de tu próxima unidad didáctica?',
        aq: '¿Qué tan preparado/a te sientes para liderar proyectos escolares que conecten la realidad local con desafíos planetarios?'
      }
    ],
    quiz: [
      {
        q: '¿Qué significa el principio de "naturaleza recursiva e interdependiente" en el Modelo Concéntrico?',
        opts: [
          'Que el docente debe enseñar los ejes uno por uno en orden estricto, empezando en grado primero y terminando en once.',
          'Que las dimensiones no son aisladas: la forma en que un sujeto se reconoce y cuida a sí mismo (Yo) determina cómo se vincula con los demás (Otros), incide en su participación comunitaria (Sociedad) y moldea su responsabilidad con el planeta (Mundo), transformándose mutuamente.',
          'Que el eje del Mundo es el único importante y los procesos individuales del Yo deben ignorarse.',
          'Que el modelo es una estructura rígida de contenidos que reemplaza las asignaturas tradicionales.'
        ],
        c: 1,
        exp: 'El modelo es recursivo porque los círculos se expanden e interactúan constantemente; los cambios en la interioridad impactan el entorno social y global, y la realidad del territorio transforma la autoconciencia del sujeto.'
      }
    ]
  },
  { 
    id: 'm3', 
    num: 'Módulo 3', 
    color: '#185FA5', 
    bg: '#E6F1FB', 
    icon: 'ti-flag',
    title: 'Competencias Ciudadanas',
    sub: 'Siete competencias para habitar la democracia',
    sesiones: [
      { 
        title: 'CC-1: Convivencia pacífica y reconciliación — Guión de Mediación', 
        tipo: 'Competencia Ciudadana 1', 
        dur: '90 min',
        obj: [
          'Apropiar el enfoque de justicia restaurativa frente a la gestión punitiva tradicional.',
          'Implementar círculos de palabra y mediación de pares en entornos escolares.',
          'Diseñar un protocolo de resolución pacífica utilizando herramientas de Comunicación No Violenta.'
        ],
        contenidos: [
          'Convivencia pacífica como el reconocimiento incondicional de la dignidad de la alteridad.',
          'Pedagogías de la memoria (CNMH): El aula como espacio de sanación, dignificación y reconstrucción de los tejidos sociales.',
          'La justicia restaurativa en la escuela: Reparar el daño colectivo, reconstruir los vínculos y restablecer la confianza comunitaria.'
        ],
        actividades: [
          'Laboratorio Interactiva "Script de Mediación de Crisis": Practica un guión de frases exactas basadas en CNV diseñadas para desactivar tensiones y guiar círculos restaurativos en el aula en tiempo real.',
          'Simulación de roles: Roles cruzados entre docentes para mediar un conflicto grave de convivencia escolar.',
          'Auditoría institucional: Evaluación de la efectividad real de las instancias de mediación del Manual de Convivencia.'
        ],
        recursos: [
          'Herramienta Práctica: Guión de Mediación de Crisis para Docentes y Círculos Restaurativos',
          'Documento Técnico: CNMH (2018). Pedagogías de la memoria para la paz'
        ],
        rq: 'Cuando ocurre un conflicto grave en tu salón, ¿cuál es tu primera reacción instintiva: aplicar una sanción del reglamento (punitivo) o abrir un espacio para entender el daño y repararlo (restaurativo)? ¿Qué te frena a usar más el segundo camino?',
        aq: '¿Qué tan seguro/a te sientes moderando un círculo de palabra restaurativo con estudiantes desregulados o en conflicto?'
      },
      { 
        title: 'CC-2: Justicia social y equidad — ¿Quién falta en el libro?', 
        tipo: 'Competencia Ciudadana 2', 
        dur: '90 min',
        obj: [
          'Identificar y cuestionar las desigualdades estructurales invisibilizadas en la escuela.',
          'Aplicar la interseccionalidad como herramienta de lectura del contexto de los estudiantes.',
          'Ejecutar una auditoría de justicia curricular sobre las planeaciones de asignatura.'
        ],
        contenidos: [
          'La justicia curricular (Apple): El currículo como una selección política de saberes que valida a ciertos grupos y silencia a otros.',
          'Interseccionalidad (Crenshaw): La articulación de las variables de género, etnia, clase social y territorio en las brechas de aprendizaje.',
          'Estrategias de equidad: Ajustes razonables y flexibilización curricular auténtica.'
        ],
        actividades: [
          'Reto "¿Quién falta en el libro?": Toma una guía de aprendizaje o texto escolar que utilices actualmente. Analiza qué voces, culturas o realidades están ausentes o estereotipadas, y diseña un anexo de inclusión inmediata.',
          'Mapeo de privilegios y desventajas: Ejercicio analítico sobre las realidades socioeconómicas y geográficas de tu grupo de estudiantes.',
          'Diseño pedagógico: Reestructuración de criterios de evaluación bajo un enfoque de equidad y ritmos de aprendizaje flexibles.'
        ],
        recursos: [
          'Guía Metodológica: Pasos para Realizar una Auditoría de Justicia Curricular en el Aula',
          'Lectura complementaria: Apple, M. (2019). Can education change society?'
        ],
        rq: 'Revisa tus materiales didácticos habituales. ¿Aparecen en ellos las realidades de la Colombia rural, los saberes afro e indígenas, o las múltiples configuraciones familiares de tus propios estudiantes de forma digna y protagónica?',
        aq: '¿Qué nivel de dominio tienes para aplicar el enfoque de interseccionalidad al evaluar las barreras de aprendizaje de tu grupo?'
      },
      { 
        title: 'CC-3: Participación democrática — Presupuestos Participativos', 
        tipo: 'Competencia Ciudadana 3', 
        dur: '90 min',
        obj: [
          'Diferenciar entre participación decorativa y participación democrática auténtica.',
          'Estructurar espacios auténticos de deliberación colectiva en los diferentes niveles educativos.',
          'Rediseñar los micro-escenarios de poder dentro del funcionamiento diario del aula.'
        ],
        contenidos: [
          'Modelos de ciudadanía (Westheimer & Kahne): El ciudadano obediente, el ciudadano participativo y el ciudadano orientado a la justicia.',
          'La deliberación pública como herramienta pedagógica: Aprender a argumentar, escuchar activamente y construir consensos en la disidencia.',
          'El Gobierno Escolar como un microcosmos democrático real, transformando los liderazgos tradicionales.'
        ],
        actividades: [
          'Reto de Aula "Presupuestos Participativos": Diseña una secuencia metodológica donde tus estudiantes deliberen, argumenten y decidan democráticamente el destino de un recurso real del aula (distribución del espacio, uso del tiempo libre, o enfoque de un proyecto integrado).',
          'Análisis crítico del Gobierno Escolar: Evaluación de los canales de comunicación entre los representantes estudiantiles y las decisiones del consejo directivo.',
          'Simulación de debate socrático sobre un dilema de interés público de la institución.'
        ],
        recursos: [
          'Plantilla Guía: Paso a Paso para Implementar Asambleas de Aula Deliberativas',
          'Artículo de análisis: Westheimer & Kahne (2004). What kind of citizen?'
        ],
        rq: '¿Los líderes estudiantiles de tu colegio tienen voz real en las decisiones de la institución o sus cargos son puramente organizativos y de protocolo? ¿Qué decisión real de tu aula podrías delegar en ellos esta semana?',
        aq: '¿Qué tan preparado/a te sientes para guiar un debate donde los estudiantes tomen decisiones vinculantes para el grupo?'
      },
      { 
        title: 'CC-4: Competencia histórica — Dinámica "A dos voces"', 
        tipo: 'Competencia Ciudadana 4', 
        dur: '90 min',
        obj: [
          'Desarrollar el pensamiento histórico crítico como herramienta para interpretar el presente.',
          'Apropiar los 6 conceptos clave del pensamiento histórico (Seixas & Morton).',
          'Integrar la historia local y las narrativas del territorio en el currículo de la asignatura.'
        ],
        contenidos: [
          'Pensamiento histórico crítico: Relevancia histórica, uso de evidencia de fuentes primarias, continuidad y cambio, causas y consecuencias, toma de perspectiva histórica y dimensión ética.',
          'El conflicto armado colombiano como un eje de memoria histórica necesario para promover garantías de no repetición.',
          'La desmitificación del relato histórico único: Dar voz a las memorias subalternas e invisibilizadas.'
        ],
        actividades: [
          'Dinámica "A dos voces": Diseña un ejercicio de aula donde un acontecimiento histórico local o un conflicto de la comunidad se analice contrastando dos fuentes opuestas (ej. el relato oficial de un medio vs. el testimonio oral de un líder comunitario), enseñando a los estudiantes a contrastar evidencias.',
          'Taller de historia oral: Estructuración de una guía de entrevista para que los estudiantes recopilen la memoria de los adultos mayores de su territorio.',
          'Mapeo de la memoria del barrio: Identificación de lugares sagrados, de conflicto o de resistencia en el entorno escolar.'
        ],
        recursos: [
          'Guía Técnica: Los 6 Conceptos Fundamentales del Pensamiento Histórico',
          'Banco de Recursos: Archivos y Testimonios de la Comisión de la Verdad y el CNMH'
        ],
        rq: 'Cuando abordas la historia o las Ciencias Sociales en el aula, ¿presentas el pasado como un relato cerrado que se memoriza o como un campo de batalla de perspectivas en el que tus estudiantes deben investigar la verdad con evidencias?',
        aq: '¿Qué tan capacitado/a estás para guiar procesos de investigación escolar utilizando fuentes primarias e historia oral local?'
      },
      { 
        title: 'CC-5: Diversidad cultural y de género — Radar de Microagresiones', 
        tipo: 'Competencia Ciudadana 5', 
        dur: '75 min',
        obj: [
          'Reconocer la diversidad humana como el fundamento ético indispensable de la democracia.',
          'Desarrollar una alfabetización crítica para identificar y desmontar prejuicios estructurales.',
          'Estructurar protocolos de respuesta pedagógica frente a dinámicas de discriminación en el entorno escolar.'
        ],
        contenidos: [
          'El racismo estructural, el machismo y la discriminación por identidad u orientación como fenómenos que erosionan el derecho fundamental a la educación.',
          'El reconocimiento recíproco (Honneth) como la base del tejido social de la escuela.',
          'Justicia curricular inclusiva: Más allá de la celebración folclórica de fechas especiales; transformación estructural del saber.'
        ],
        actividades: [
          'Ejercicio "Radar de Microagresiones": Realiza un diagnóstico de los chistes, comentarios o dinámicas de exclusión que ocurren de forma naturalizada en los pasillos o redes sociales de tu institución, y diseña una respuesta institucional pedagógica contundente.',
          'Taller de diseño de proyectos interculturales integrados: Incorporar un saber ancestral, campesino o afrodescendiente en una unidad de ciencias, matemáticas o lenguaje.',
          'Estudio de casos de acoso (bullying) por identidad de género u orientación: Evaluación de los protocolos de la Ley 1620.'
        ],
        recursos: [
          'Protocolo de Intervención Pedagógica Frente a la Discriminación en la Escuela',
          'Lectura recomendada: Crenshaw, K. (1991). Mapping the margins (Extractos sobre Interseccionalidad)'
        ],
        rq: '¿Qué identidades o formas de ser de tus estudiantes se sienten plenamente seguras y celebradas en tu salón de clases, y cuáles se ven obligadas a ocultarse o asimilarse para evitar el rechazo de la comunidad educativa?',
        aq: '¿Qué tan seguro/a te sientes interviniendo pedagógicamente en el momento exacto en que un estudiante realiza un comentario discriminatorio?'
      },
      { 
        title: 'CC-6: Sostenibilidad ambiental — Eco-auditoría del Aula', 
        tipo: 'Competencia Ciudadana 6', 
        dur: '75 min',
        obj: [
          'Apropiar el pensamiento sistémico para analizar la interdependencia socioecológica.',
          'Vincular el derecho constitucional a un ambiente sano con la justicia ambiental del territorio.',
          'Diseñar laboratorios vivos de sostenibilidad contextualizados en la escuela.'
        ],
        contenidos: [
          'Educación ambiental sistémica: Superar el enfoque limitado del reciclaje para comprender los ciclos de consumo, los impactos globales y la biodiversidad regional.',
          'Colombia como país megadiverso: Retos urgentes de deforestación, crisis climática, contaminación de fuentes hídricas y protección del territorio.',
          'La institución educativa como un modelo vivo de transición y cuidado ecológico.'
        ],
        actividades: [
          'Reto Colectivo "Eco-auditoría del Aula": Diseña una guía para que tus estudiantes realicen una medición del consumo real de agua, energía y generación de desperdicios en su propio salón de clases, traduciendo los hallazgos en un plan de choque sistémico.',
          'Diseño de Laboratorio Vivo: Estructuración de proyectos pedagógicos productivos en torno a huertas escolares, compostaje o protección de fauna local.',
          'Diálogo de saberes ambientales: Planificación de un encuentro entre estudiantes y campesinos, recicladores de oficio o líderes ambientales del municipio.'
        ],
        recursos: [
          'Formato de Campo: Plantilla para la Eco-auditoría de Aula y Gestión de Recursos',
          'Documento Oficial: Política Nacional de Educación Ambiental en Colombia'
        ],
        rq: 'Si el aula de clases fuera un reflejo del planeta Tierra, ¿qué hábitos de consumo diario de recursos materiales y tecnológicos de tu grupo demuestran que estamos ignorando la interdependencia ecológica?',
        aq: '¿Qué tan capacitado/a estás para integrar el pensamiento sistémico ambiental en asignaturas que tradicionalmente no se consideran ecológicas?'
      },
      { 
        title: 'CC-7: Ciudadanía digital y mediática — Caza-Fake News', 
        tipo: 'Competencia Ciudadana 7', 
        dur: '90 min',
        obj: [
          'Desarrollar habilidades de alfabetización mediática crítica para analizar entornos digitales.',
          'Comprender el impacto de los algoritmos, las cámaras de eco y la desinformación en la democracia.',
          'Diseñar estrategias de producción ética y participación segura en el ciberespacio.'
        ],
        contenidos: [
          'Ciudadanía digital crítica: El ciberespacio como un territorio político donde operan derechos, deberes, riesgos y oportunidades de participación.',
          'Fenómenos de la era digital: Desinformación programada (fake news), ciberbullying, privacidad de datos (Ley 1581) e identidad digital.',
          'El docente como mediador de la cultura digital: Orientar el consumo reflexivo y la creación responsable de contenidos.'
        ],
        actividades: [
          'Taller Práctico "Caza-Fake News": Implementa un protocolo de 3 pasos (verificación de fuentes, análisis de intencionalidad y rastreo de imágenes) para que tus estudiantes evalúen críticamente una noticia viral o cadena de redes sociales antes de interactuar.',
          'Diseño de Política de Aula Digital: Co-construcción con los estudiantes de un acuerdo de derechos y deberes para el uso de tecnologías y teléfonos en clase.',
          'Producción de contenido ético: Planificación de un podcast, blog o campaña digital escolar orientada a un problema real del territorio.'
        ],
        recursos: [
          'Protocolo de 3 Pasos para la Verificación de Contenidos y Alfabetización Mediática',
          'Lectura complementaria: Hobbs, R. (2024). Media literacy education in a digital age'
        ],
        rq: 'Tus estudiantes consumen horas de contenido digital diariamente. ¿Tu escuela los está preparando para ser analistas críticos de los algoritmos que moldean sus ideas políticas o los está dejando a merced de la desinformación?',
        aq: '¿Qué tan al día y preparado/a te sientes para orientar a tus estudiantes en el uso seguro, ético y crítico de inteligencias artificiales y redes sociales?'
      }
    ],
    quiz: [
      {
        q: 'Al implementar la dinámica "A dos voces" en la competencia histórica (CC-4), ¿cuál es el objetivo fundamental que se busca desarrollar en los estudiantes?',
        opts: [
          'Aprender de memoria las fechas exactas y los nombres de los próceres de la patria para los exámenes oficiales.',
          'Comprender que la historia no es un relato monolítico, desarrollando la capacidad de contrastar fuentes primarias, analizar intencionalidades e interpretar el pasado críticamente.',
          'Demostrar que una de las dos fuentes analizadas es completamente falsa para cancelar esa perspectiva de la discusión.',
          'Reemplazar los textos del Ministerio de Educación por las opiniones personales e individuales del docente.'
        ],
        c: 1,
        exp: 'El pensamiento histórico busca que los estudiantes contrasten evidencias de múltiples fuentes para analizar la complejidad social, en lugar de memorizar un único relato oficial incuestionable.'
      },
      {
        q: '¿Cuál es la diferencia crítica entre la participación decorativa y la participación democrática auténtica a través de los presupuestos participativos (CC-3) en el aula?',
        opts: [
          'La participación decorativa se realiza con votaciones reales; la democrática auténtica solo usa debates informativos.',
          'La participación decorativa utiliza a los estudiantes para validar decisiones que los adultos ya tomaron de antemano; la democrática auténtica les delega poder real, autonomía y responsabilidad de deliberación y decisión vinculante sobre un asunto del grupo.',
          'La participación democrática auténtica solo se puede aplicar con estudiantes universitarios de Ciencias Políticas.',
          'No existe diferencia real, ya que en ambos modelos los estudiantes eligen representantes mediante el voto.'
        ],
        c: 1,
        exp: 'La participación auténtica requiere la delegación real de poder de decisión y responsabilidad sobre asuntos que afecten colectivamente al grupo, rompiendo con los modelos donde los estudiantes solo cumplen funciones de protocolo diseñadas por adultos.'
      }
    ]
  },
  { 
    id: 'm4', 
    num: 'Módulo 4', 
    color: '#993556', 
    bg: '#FBEAF0', 
    icon: 'ti-heart',
    title: 'Competencias Socioemocionales',
    sub: 'Siete competencias para habitar la interioridad y la relación',
    sesiones: [
      { 
        title: 'CSE-1: Conciencia emocional — El Diccionario Fisiológico', 
        tipo: 'Competencia Socioemocional 1', 
        dur: '75 min',
        obj: [
          'Identificar, nombrar y mapear las expresiones corporales de las emociones propias y ajenas.',
          'Apropiar el concepto de las emociones como juicios evaluativos de valor (Nussbaum).',
          'Desarrollar la granularidad emocional de los estudiantes para optimizar la comunicación.'
        ],
        contenidos: [
          'La conciencia emocional como la base indispensable de la infraestructura de todo el Desarrollo Socioemocional.',
          'Las emociones como juicios de valor que revelan lo que consideramos importante para nuestro bienestar (Nussbaum).',
          'La granularidad emocional (Barrett): Ampliar el vocabulario de emociones similares permite respuestas conductuales más adaptativas y precisas.'
        ],
        actividades: [
          'Dinámica de Aula "El Diccionario Fisiológico": Guía un ejercicio de escaneo corporal donde tus estudiantes identifiquen y registren cartográficamente en qué partes del cuerpo experimentan físicamente la rabia, el miedo, la indignación o la tristeza antes de que estas se desborden de forma conductual.',
          'Bitácora emocional: Implementación de un diario reflexivo semanal que registre el detonador, la sensación corporal, el pensamiento y la emoción precisa.',
          'Taller de vocabulario: Pasar de estados genéricos ("estoy mal") a estados de precisión semántica ("me siento frustrado, ignorado o decepcionado").'
        ],
        recursos: [
          'Herramienta visual: Rueda Expandida de las Emociones y Ficha de Registro Corporal',
          'Lectura técnica: Nussbaum, M. (2001). Upheavals of thought: The intelligence of emotions'
        ],
        rq: 'Cuando un estudiante reacciona con agresividad o apatía, ¿intentas castigar la conducta externa directamente o eres capaz de descifrar la emoción y el juicio de valor oculto que están detonando esa respuesta?',
        aq: '¿Qué nivel de desarrollo consideras que tienes para identificar de forma clara tus propias señales corporales de estrés o frustración en medio de una jornada escolar intensa?'
      },
      { 
        title: 'CSE-2: Regulación emocional — Primeros Auxilios Emocionales', 
        tipo: 'Competencia Socioemocional 2', 
        dur: '75 min',
        obj: [
          'Comprender la regulación emocional como un proceso activo de reevaluación cognitiva.',
          'Diferenciar técnicamente entre regulación adaptativa, supresión e inundación emocional.',
          'Implementar la co-regulación docente como estrategia primordial para estabilizar crisis de aula.'
        ],
        contenidos: [
          'El modelo procesual de regulación emocional (Gross): Selección de la situación, modificación, despliegue atencional, cambio cognitivo y modulación de la respuesta.',
          'El peligro de la supresión emocional crónica: Consecuencias psicosomáticas y afectación severa de las relaciones interpersonales.',
          'El docente como modelo de co-regulación: La calma se transmite a través del sistema nervioso, el tono de voz y la postura física corporal.'
        ],
        actividades: [
          'Simulador de Emergencia "Primeros Auxilios Emocionales": Enfréntate a una situación interactiva de desregulación masiva en el aula. Diseña un protocolo de intervención física y verbal basado en el uso intencional del tono de voz, la postura y técnicas de respiración consciente (ej. estrategia 4-7-8) antes de emitir palabras.',
          'Diseño del Rincón de la Calma: Estructuración de un espacio físico pedagógico en el salón que cuente con recursos sensoriales autorreguladores, normalizando su uso no como castigo, sino como derecho de autocuidado.',
          'Análisis de detonadores docentes: Ejercicio de reevaluación cognitiva aplicado a los propios disparadores de frustración del educador.'
        ],
        recursos: [
          'Protocolo de Choque: Guía de Co-regulación y Primeros Auxilios Emocionales en el Aula',
          'Lectura complementaria: Gross, J.J. (2014). Handbook of emotion regulation'
        ],
        rq: '¿Cuál es tu detonador emocional más recurrente en el aula de clases? Cuando ese disparador se activa, ¿qué estrategia real de reevaluación o pausa utilizas para evitar engancharte en una lucha de poder con el estudiante?',
        aq: '¿Qué tan preparado/a te sientes para mantener la calma profunda y modelar la co-regulación cuando un salón se encuentra desbordado emocionalmente?'
      },
      { 
        title: 'CSE-3: Toma de decisiones responsables y éticas — Matriz de Impacto', 
        tipo: 'Competencia Socioemocional 3', 
        dur: '75 min',
        obj: [
          'Articular las emociones, los valores éticos y el pensamiento analítico en la toma de decisiones.',
          'Desarrollar la autonomía deliberativa frente a la obediencia heterónoma por miedo al castigo.',
          'Diseñar e implementar dilemas morales complejos contextualizados en el entorno de los estudiantes.'
        ],
        contenidos: [
          'Las emociones como marcadores somáticos fundamentales para la toma de decisiones racionales y éticas (Damasio).',
          'El tránsito del desarrollo moral (Kohlberg): De la orientación premoral (castigo-recompensa) hacia los principios éticos universales autónomos.',
          'La secuencia de la decisión ética: Identificación, análisis de perspectivas, evaluación de impacto y responsabilidad sistémica.'
        ],
        actividades: [
          'Taller Práctico "Matriz de Impacto Cruzado": Toma un dilema ético real y actual de la comunidad educativa (ej. el uso de inteligencias artificiales para cometer fraude o la presión de grupo para consumir sustancias). Utiliza una matriz visual interactiva para proyectar los impactos de las decisiones a corto y largo plazo sobre múltiples actores.',
          'Análisis de reglamentos institucionales: Evaluación de si las normas del colegio promueven que el estudiante piense éticamente o que obedezca ciegamente por miedo a la sanción.',
          'Diseño de un banco de dilemas morales situado en el contexto geográfico de tu institución.'
        ],
        recursos: [
          'Matriz Gráfica: Plantilla de Impacto Cruzado para la Deliberación Ética en el Aula',
          'Lectura técnica: Damasio, A. (2010). Self comes to mind: Constructing the conscious brain'
        ],
        rq: 'Cuando tus estudiantes cumplen las normas, ¿lo hacen porque entienden el valor ético del respeto mutuo y el bien común, o simplemente lo hacen para evitar que los reporten o los sancionen? ¿Cómo transformarías esa dinámica?',
        aq: '¿Qué nivel de habilidad consideras que tienes para estructurar dilemas morales abiertos que fuercen la deliberación crítica del grupo?'
      },
      { 
        title: 'CSE-4: Empatía y reconocimiento del otro — Círculos de Historias', 
        tipo: 'Competencia Socioemocional 4', 
        dur: '75 min',
        obj: [
          'Diferenciar conceptualmente entre empatía cognitiva, empatía afectiva y respuesta compasiva.',
          'Implementar dinámicas de escucha radical y validación de la alteridad en el aula.',
          'Evitar los riesgos de la fatiga empática y de la representación estereotipada del dolor del otro.'
        ],
        contenidos: [
          'Los tres componentes de la empatía: Tomar la perspectiva del otro (cognitiva), experimentar resonancia (afectiva) y activarse hacia la solidaridad (compasiva).',
          'La empatía como base de la justicia democrática (Nussbaum): La imaginación literaria y la capacidad de concebir los mundos internos de los marginados.',
          'Diferencia crítica entre empatía (conectar con el otro) y simpatía (evaluar con distancia condescendiente).'
        ],
        actividades: [
          'Estrategia de Aula "Círculos de Historias No Contadas": Implementa un protocolo estructurado de escucha radical en parejas donde los estudiantes se vean obligados a parafrasear y validar el relato de vida de compañeros con los que casi no interactúan, suspendiendo por completo el juicio.',
          'Análisis narrativo crítico: Análisis de testimonios del conflicto armado colombiano orientados al desarrollo de la empatía histórica compasiva.',
          'Taller de prevención de fatiga empática: Estrategias de límites emocionales y autocuidado para profesionales del cuidado (docentes).'
        ],
        recursos: [
          'Guía de Aula: Protocolo para la Implementación de Círculos de Historias No Contadas',
          'Video Educativo: Animación de Brené Brown sobre la Diferencia entre Empatía y Simpatía'
        ],
        rq: '¿Hay algún perfil específico de estudiante o familia de tu colegio con el que te cueste profundamente empatizar? Al mirar tus propios sesgos, ¿qué barrera te impide comprender su perspectiva de vida?',
        aq: '¿Qué tan preparado/a te sientes para sostener y contener las emociones intensas que emergen en el aula cuando se abordan relatos de dolor o conflicto real?'
      },
      { 
        title: 'CSE-5: Habilidades de relación y resolución de conflictos — Guión CNV', 
        tipo: 'Competencia Socioemocional 5', 
        dur: '90 min',
        obj: [
          'Apropiar las herramientas de la Comunicación No Violenta (CNV) para la gestión relacional.',
          'Estructurar sistemas de convivencia basados en la transformación restaurativa y el diálogo de saberes.',
          'Ejecutar procesos de mediación escolar empoderando a los estudiantes como agentes activos de paz.'
        ],
        contenidos: [
          'El conflicto como un fenómeno natural de los sistemas vivos: Una oportunidad pedagógica para identificar necesidades insatisfechas en el tejido comunitario.',
          'Los 4 pasos de la Comunicación No Violenta (Rosenberg): Observación objetiva, identificación del sentimiento, expresión de la necesidad central y formulación de una petición concreta.',
          'La autoridad legítima y democrática basada en el respeto, la coherencia y la construcción de confianza versus el autoritarismo vertical.'
        ],
        actividades: [
          'Laboratorio Relacional "Plantillas de Oraciones CNV": Practica el uso de plantillas interactivas listas para rellenar con situaciones reales de conflicto docente-estudiante o docente-colega: *"Cuando observo [X], me siento [Y] porque necesito [Z]. Por lo tanto, te pido [W]"* de forma limpia y asertiva.',
          'Simulación de mediación escolar restaurativa: Ejercicio práctico en tríos interpretando roles de partes en conflicto y mediador formativo.',
          'Diseño de rutinas de convivencia: Co-creación de un acuerdo de aula basado en compromisos de cuidado mutuo en lugar de prohibiciones.'
        ],
        recursos: [
          'Ficha Práctica: Estructura de Oraciones de Comunicación No Violenta para Situaciones de Tensión',
          'Lectura de referencia: Rosenberg, M. (2003). Comunicación no violenta: un lenguaje de vida'
        ],
        rq: 'Cuando te comunicas con un estudiante desobediente, ¿le hablas describiendo de forma objetiva lo que observas o inicias tu intervención lanzando juicios, etiquetas y sermones morales que bloquean su disposición al diálogo?',
        aq: '¿Qué nivel de fluidez consideras que tienes para estructurar peticiones concretas, viables y respetuosas utilizando el modelo de la CNV?'
      },
      { 
        title: 'CSE-6: Emociones políticas en acción ciudadana — Canvas de Esperanza Activa', 
        tipo: 'Competencia Socioemocional 6', 
        dur: '90 min',
        obj: [
          'Analizar cómo las emociones públicas (indignación, miedo, solidaridad) moldean las dinámicas colectivas.',
          'Canalizar el malestar o la indignación social hacia procesos democráticos deliberativos.',
          'Diseñar proyectos integrados de Aprendizaje-Servicio anclados en realidades del territorio.'
        ],
        contenidos: [
          'La política cultural de las emociones (Ahmed): Las emociones no son solo individuales; viajan entre discursos y cuerpos, configurando comunidades afectivas y barreras sociales.',
          'Educar las emociones políticas (Nussbaum): Cómo el cultivo del amor, la compasión y la indignación ética frente a la injusticia sustentan instituciones democráticas estables.',
          'La transformación democrática: Superar la catarsis inútil de la queja destructiva para transitar hacia la deliberación colectiva y la propuesta ciudadana.'
        ],
        actividades: [
          'Taller con el Canvas "Diseñador de Esperanza Activa": Selecciona una noticia local o una problemática comunitaria que genere indignación o apatía en tus estudiantes. Utiliza el canvas para guiar un proceso de 4 pasos que transforme ese malestar en una iniciativa pacífica de aprendizaje-servicio.',
          'Análisis de movimientos sociales juveniles colombianos: Evaluación de cómo canalizan las emociones colectivas en el arte, la música y la movilización.',
          'Simulacro de deliberación en el aula frente a temas altamente polarizados: Estrategias para evitar la confrontación personal y fomentar el rigor argumentativo.'
        ],
        recursos: [
          'Canvas de Trabajo: Plantilla del Diseñador de Esperanza Activa para Proyectos Ciudadanos',
          'Lectura técnica: Nussbaum, M. (2014). Emociones políticas: ¿Por qué el amor es importante para la justicia?'
        ],
        rq: '¿Tus estudiantes muestran apatía y desesperanza frente al futuro del país o logras ofrecerles herramientas para que sientan que sus voces e iniciativas pueden transformar la realidad de su entorno inmediato de forma pacífica?',
        aq: '¿Qué tan preparado/a te sientes para mediar una discusión en el aula sobre un tema político álgido y polarizante sin perder la neutralidad pedagógica?'
      },
      { 
        title: 'CSE-7: Resiliencia comunitaria orientada a la paz — El Cofre del Territorio', 
        tipo: 'Competencia Socioemocional 7', 
        dur: '90 min',
        obj: [
          'Comprender la resiliencia no como un atributo individual, sino como una capacidad ecosistémica colectiva.',
          'Estructurar pedagogías de la memoria histórica territorial sin revictimizar ni saturar de dolor.',
          'Diseñar e implementar rituales comunitarios de reparación simbólica dentro de la escuela.'
        ],
        contenidos: [
          'La resiliencia comunitaria (Cyrulnik): La capacidad colectiva de tejer andamiajes afectivos y sistemas de apoyo para transformar los traumas históricos en fuerzas activas de cambio social.',
          'La imaginación moral orientada a la construcción de paz (Lederach): La capacidad de concebir el nacimiento de una realidad diferente arraigada en los propios contextos de violencia.',
          'Los rituales y las expresiones culturales colectivas como herramientas de sanación, cierre de ciclos pedagógicos y reconstrucción de la confianza comunitaria.'
        ],
        actividades: [
          'Ejercicio "El Cofre del Territorio": Diseña un taller para guiar al grupo en la documentación y celebración de los recursos de resiliencia ocultos en su comunidad (historias de resistencia, saberes productivos, redes de solidaridad barrial), creando un mapa de fortalezas colectivas.',
          'Diseño de un ritual pedagógico de reparación simbólica: Planificación de un acto colectivo escolar (ej. siembra de un jardín de la memoria, mural colectivo, o cápsula del tiempo del curso) para sanar una herida de convivencia o pérdida en la comunidad.',
          'Narrativas de esperanza activa: Escritura creativa de cartas al futuro de la institución educativa para consolidar el compromiso permanente con la paz.'
        ],
        recursos: [
          'Guía Metodológica: Diseño de Rituales Escolares para la Sanación y Reparación Simbólica',
          'Lectura técnica: Lederach, J.P. (2005). La imaginación moral: el arte y el alma de la construcción de la paz'
        ],
        rq: 'Al mirar la historia de adversidad de la comunidad que rodea tu escuela (pobreza, violencia, desplazamiento), ¿qué fortalezas invisibles y saberes de las familias has ignorado y podrías empezar a honrar públicamente en tu práctica pedagógica?',
        aq: '¿Qué nivel de preparación emocional y técnica consideras que posees para liderar actos escolares solemnes de memoria histórica y reconciliación comunitaria?'
      }
    ],
    quiz: [
      {
        q: '¿Cuál es el enfoque central que diferencia a la "resiliencia comunitaria" (CSE-7) de la visión psicológica tradicional de la resiliencia?',
        opts: [
          'La resiliencia comunitaria sostiene que las personas deben aguantar el sufrimiento individualmente sin pedir ayuda externa.',
          'Plantea que la resiliencia no es una característica genética o individual, sino una capacidad colectiva que se construye tejiendo redes de apoyo, andamiajes afectivos comunitarios y espacios culturales comunes para transformar el trauma social en fuerza de cambio.',
          'Afirma que las comunidades afectadas por la violencia no pueden desarrollar resiliencia y requieren intervención clínica permanente.',
          'Establece que la resiliencia solo se puede desarrollar en asignaturas teóricas de psicología evolutiva.'
        ],
        c: 1,
        exp: 'Para Cyrulnik y los enfoques comunitarios, la resiliencia es un proceso social ecosistémico; surge de la calidad de los vínculos, las redes de apoyo mutuo y la capacidad de la comunidad de dar un nuevo sentido colectivo a sus historias de adversidad.'
      },
      {
        q: 'Al aplicar el modelo procesual de regulación emocional (CSE-2) en el aula a través de los "Primeros Auxilios Emocionales", ¿qué acción define a la co-regulación docente adaptativa?',
        opts: [
          'Gritar más fuerte que el estudiante desregulado para imponer la autoridad legítima en el salón de clases de forma inmediata.',
          'Utilizar de forma consciente el sistema nervioso del propio educador (manteniendo un tono de voz pausado, una postura física corporal no amenazante y una respiración profunda) para estabilizar el entorno antes de intervenir verbalmente.',
          'Ignorar por completo la conducta del estudiante desregulado hasta que se calme de forma autónoma en el pasillo.',
          'Enviar inmediatamente al estudiante a la coordinación de convivencia sin entablar ningún tipo de diálogo o contención.'
        ],
        c: 1,
        exp: 'La co-regulación parte del principio de que el sistema nervioso del docente actúa como un ancla para el estudiante en crisis. Al modelar y proyectar calma física, corporal y tonal, se reduce la reactividad cerebral del alumno, permitiendo una intervención formativa posterior.'
      }
    ]
  },
  { 
    id: 'm5', 
    num: 'Módulo 5', 
    color: '#3B6D11', 
    bg: '#EAF3DE', 
    icon: 'ti-layout-grid',
    title: 'Organización y Diseño Curricular',
    sub: 'Del marco de competencias a la práctica pedagógica cotidiana',
    sesiones: [
      { 
        title: 'Estructura curricular — El Canvas de la Unidad Integrada', 
        tipo: 'Diseño Curricular', 
        dur: '90 min',
        obj: [
          'Apropiar la articulación técnica de los cuatro componentes de la estructura curricular de los lineamientos.',
          'Interpretar con solvencia la Tabla 18 del documento oficial del MEN como modelo de planeación.',
          'Formular con precisión técnica aprendizajes esenciales e indicadores de desempeño descriptivos.'
        ],
        contenidos: [
          'La arquitectura curricular propuesta por el MEN 2026: Dimensiones formativas, Ejes concéntricos (A-D), Aprendizajes esenciales e Indicadores de desempeño.',
          'Los aprendizajes esenciales como núcleos temáticos integrales que definen la fusión del saber con el ser en comunidad.',
          'Romper la saturación del currículo: La integración transversal implica transformar la forma en que se enseña la asignatura existente, no añadir más temas teóricos al plan de estudios.'
        ],
        actividades: [
          'Reto Práctico "El Canvas de la Unidad Integrada": Utiliza una matriz interactiva guiada para seleccionar un eje concéntrico, cruzarlo con una competencia ciudadana o socioemocional y redactar un Aprendizaje Esencial articulado directamente con los contenidos temáticos de tu propia asignatura.',
          'Análisis técnico de la Tabla 18: Decodificación guiada de un modelo de planeación oficial del Ministerio de Educación Nacional.',
          'Revisión analítica del plan de área institucional actual: Detección de vacíos en el desarrollo de capacidades éticas.'
        ],
        recursos: [
          'Plantilla de Trabajo: Canvas para el Diseño de Unidades Curriculares Integradas',
          'Documento Técnico de Referencia: Tablas 17 y 18 Completas - Lineamientos MEN 2026'
        ],
        rq: 'Al mirar tu plan de área de asignatura para el próximo período, ¿los contenidos están diseñados para memorizar información o estructuran de forma explícita el desarrollo de una capacidad ciudadana o socioemocional medible?',
        aq: '¿Qué tan seguro/a te sientes utilizando la estructura de dimensiones, ejes y aprendizajes esenciales para armar tus planeaciones semanales?'
      },
      { 
        title: 'Progresión de aprendizajes — El Viaje del Estudiante', 
        tipo: 'Planeación Pedagógica', 
        dur: '90 min',
        obj: [
          'Apropiar el principio de progresión como eje de continuidad y equidad de la trayectoria educativa.',
          'Garantizar la coherencia vertical (entre niveles) y horizontal (entre áreas) en el diseño didáctico.',
          'Ejercer la autonomía escolar para contextualizar la progresión curricular según el territorio.'
        ],
        contenidos: [
          'La progresión de aprendizajes: La organización gradual, intencional y secuencial de la complejidad del desarrollo de las competencias a lo largo de la vida escolar.',
          'Trayectorias educativas flexibles: El reconocimiento de que el desarrollo socioemocional no es lineal y requiere andamiajes didácticos diferenciados.',
          'Autonomía curricular y flexibilización (Decreto 1421 de 2017): La libertad y responsabilidad de la institución para ajustar las progresiones a las realidades socioculturales locales.'
        ],
        actividades: [
          'Reto "El Viaje del Estudiante": Toma una única competencia socioemocional específica (ej. *Regulación emocional*) y diseña una misma actividad adaptando su complejidad didáctica para tres momentos distintos: Transición (Educación Inicial), Quinto Grado (Primaria) y Once Grado (Media), demostrando coherencia vertical práctica.',
          'Diagnóstico institucional de trayectorias: Evaluación de los puntos de ruptura curricular donde la formación ciudadana se debilita entre la primaria y la secundaria.',
          'Ajuste con el PEI: Planificación de una propuesta para flexibilizar las planeaciones curriculares institucionales del próximo semestre laboral.'
        ],
        recursos: [
          'Guía Metodológica Oficial: Marcos Técnicos de Progresión de Aprendizajes (MEN 2026)',
          'Formato de Trabajo: Matriz Lego para el Diseño de Coherencia Vertical Curricular'
        ],
        rq: '¿En tu institución educativa existe comunicación técnica entre los docentes de primaria y secundaria para garantizar que las competencias ciudadanas se desarrollen de forma gradual, o cada profesor opera de forma aislada sin conocer la trayectoria completa del alumno?',
        aq: '¿Qué nivel de dominio posees para adaptar la complejidad de una misma capacidad ética según las edades y el nivel educativo de tus grupos?'
      },
      { 
        title: 'Estrategias metodológicas — Metodología en Acción', 
        tipo: 'Metodología', 
        dur: '90 min',
        obj: [
          'Dominar las metodologías activas idóneas para la formación ciudadana y socioemocional.',
          'Articular las secuencias didácticas integradas con los cuatro contextos institucionales de aplicación.',
          'Diseñar proyectos viables que cumplan los mandatos de la Cátedra de Educación Emocional (Ley 2503).'
        ],
        contenidos: [
          'Pedagogías activas y críticas: El Aprendizaje-Servicio solidario, el Aprendizaje Basado en Proyectos integrados, los debates de opinión crítica y la investigación-acción pedagógica.',
          'Los 4 contextos reales de aplicación del currículo integrado: El Aula de clases, la Escuela institucional, la Comunidad educativa (familias) y el Territorio físico y virtual.',
          'La coherencia metodológica: El CÓMO enseña el docente (clima demócrata, respeto, co-regulación) impacta más en la formación del estudiante que el QUÉ enseña (contenidos conceptuales teóricos).'
        ],
        actividades: [
          'Juego de Estrategia "Metodología en Acción": Selecciona una problemática real de tu entorno escolar (ej. apatía comunitaria o dinámicas de exclusión digital) y estructura un proyecto de Aprendizaje-Servicio articulando acciones específicas para cada uno de los 4 contextos de aplicación, calculando la viabilidad operativa.',
          'Taller de diseño de secuencias para la Cátedra de Educación Emocional: Creación de un proyecto integrado transversal que cumpla con el mandato permanente de la Ley 2503 de 2025.',
          'Evaluación cruzada de propuestas didácticas entre pares utilizando un protocolo de retroalimentación estructurado.'
        ],
        recursos: [
          'Guía de Metodologías Activas: Manual para Diseñar Proyectos de Aprendizaje-Servicio Solidario',
          'Lectura complementaria: Freire, P. (1997). La educación como práctica de libertad (Extractos)'
        ],
        rq: 'Al revisar las metodologías que empleas con más frecuencia en tus clases, ¿tus estudiantes asumen un rol pasivo de recepción o implementas metodologías activas donde investigan problemas, deliberan opciones y ejecutan acciones con impacto social real?',
        aq: '¿Qué tan preparado/a te sientes para liderar proyectos transversales de Aprendizaje-Servicio articulados con actores externos de tu comunidad?'
      }
    ],
    quiz: [
      {
        q: 'Al diseñar la estructura curricular bajo los nuevos lineamientos del MEN (Tabla 18), ¿cuál es la forma correcta de integrar la Cátedra de Educación Emocional (Ley 2503 de 2025)?',
        opts: [
          'Crear una nueva asignatura teórica aislada con exámenes tradicionales memorísticos sobre las definiciones de las emociones.',
          'Transformar e integrar transversalmente las dimensiones socioemocionales en el diseño de los Aprendizajes Esenciales de las áreas existentes, modificando las metodologías y evaluando formativamente en los 4 contextos.',
          'Delegar el cumplimiento de la ley de forma exclusiva en actividades extracurriculares de los días festivos de la institución.',
          'Comprar un paquete de guías impresas comerciales importadas ajenas al contexto territorial y cultural de la escuela.'
        ],
        c: 1,
        exp: 'La Cátedra de Educación Emocional bajo la Ley 2503 y la estructura del MEN no busca saturar el currículo con más asignaturas aisladas, sino transformar las prácticas pedagógicas existentes mediante la integración transversal de aprendizajes esenciales socioemocionales y metodologías activas.'
      }
    ]
  },
  { 
    id: 'm6', 
    num: 'Módulo 6', 
    color: '#854F0B', 
    bg: '#FAEEDA', 
    icon: 'ti-chart-arrows-vertical',
    title: 'Evaluación para los Aprendizajes',
    sub: 'De la medición al acompañamiento: evaluar para transformar',
    sesiones: [
      { 
        title: 'Evaluación de competencias — El Semáforo de la Nota', 
        tipo: 'Evaluación Formativa', 
        dur: '90 min',
        obj: [
          'Comprender la evaluación formativa como un proceso dialógico, ético, situado y continuo.',
          'Diseñar rúbricas analíticas descriptivas que visibilicen la progresión real del ser.',
          'Evitar los riesgos éticos de la calificación cuantitativa en el desarrollo socioemocional.'
        ],
        contenidos: [
          'La evaluación formativa auténtica como herramienta de retroalimentación constructiva que empodera al estudiante, alejándose del enfoque del control punitivo.',
          'Los 8 componentes clave de la evaluación formativa (Salinas, 2025): Sentido ético, objetos claros, criterios públicos, actividades auténticas, instrumentos diversos, retroalimentación dialógica, toma de decisiones oportunas y seguimiento.',
          'El peligro de la nota cuantitativa en el DSE: Calificar numéricamente la empatía o la resiliencia puede provocar simulaciones conductuales (performance) destructivas de la autenticidad moral.'
        ],
        actividades: [
          'Taller de Dilemas Evaluativos "El Semáforo de la Nota": Analiza el caso crítico de un estudiante con un excelente desempeño conceptual y autorregulación en sus trabajos, pero que agrede verbalmente a un compañero en el recreo. Diseña una estrategia de evaluación formativa integral utilizando rúbricas descriptivas de progresión.',
          'Diseño técnico de instrumentos: Estructuración de una rúbrica analítica basada en los niveles de progresión descriptiva (*Explorando, Comprendiendo, Aplicando, Liderando*) para una competencia específica.',
          'Planificación de Portafolios: Diseño de una bitácora estudiantil de auto-monitoreo de aprendizajes ciudadanos.'
        ],
        recursos: [
          'Guía Metodológica: Diseño de Rúbricas Descriptivas de Progresión para Competencias Ciudadanas y CSE',
          'Lectura técnica: Black & Wiliam (1998). Assessment and classroom learning (Síntesis y Aplicación)'
        ],
        rq: 'Si en tu institución educativa se califica el desarrollo socioemocional con notas numéricas del 1 al 5 en el boletín de fin de período, ¿cómo garantizas que los estudiantes no estén simplemente simulando conductas empáticas para salvar la nota en lugar de desarrollarlas de forma genuina?',
        aq: '¿Qué nivel de destreza consideras que posees para estructurar rúbricas puramente descriptivas centrándote en los procesos y progresiones del estudiante?'
      },
      { 
        title: 'Integración, cierre y proyección — Mi Manifiesto', 
        tipo: 'Cierre y Proyección', 
        dur: '120 min',
        obj: [
          'Sintetizar los aprendizajes de los módulos del curso y proyectarlos a la práctica pedagógica real.',
          'Construir un Plan de Implementación Institucional contextualizado técnica y legalmente.',
          'Asumir compromisos concretos y públicos de transformación de la práctica docente.'
        ],
        contenidos: [
          'Revisión sistémica integrada: La articulación del modelo concéntrico, las 14 competencias básicas, el diseño curricular flexible y la evaluación dialógica.',
          'La coherencia institucional: La alineación necesaria entre el PEI de la institución, el Sistema Institucional de Evaluación de los Estudiantes (SIEE) y el Manual de Convivencia escolar.',
          'El rol protagónico del maestro: El docente como un agente de transformación cultural y creador de escenarios de democracia y co-regulación viva.'
        ],
        actividades: [
          'Lienzo Interactivo "Mi Manifiesto de Aula Transformadora": Completa un cuestionario ágil que recopile de forma automática los objetivos curriculares diseñados en el Módulo 5, tus enfoques metodológicos preferidos y tus compromisos éticos personales.',
          'El Botón de Oro: Utiliza la función de la plataforma para exportar de forma instantánea tu documento unificado en formato editable de "Plan de Implementación de Cátedra Emocional e Integral", técnicamente justificado bajo la Ley 2503/2025 para presentar ante la rectoría de tu colegio.',
          'Cierre y Metacognición: Apertura, lectura y balance de la "Carta al yo futuro" redactada en la sesión inicial del Módulo 0.'
        ],
        recursos: [
          'Documento Maestro Completo: Lineamientos Curriculares para la Formación Integral (MEN 2026)',
          'Formato Ejecutivo Descargable: Plantilla Oficial del Plan de Implementación Institucional'
        ],
        rq: 'Al finalizar este viaje de autoformación y cirugía curricular profunda, ¿en qué cambió exactamente tu forma de concebirte a ti mismo/a como docente ciudadano y modelo de co-regulación emocional para el territorio colombiano?',
        aq: '¿Qué tan listo/a y empoderado/a te sientes para liderar la transformación curricular y metodológica de la Cátedra Emocional en tu institución educativa?'
      }
    ],
    quiz: [
      {
        q: 'Al evaluar formativamente las competencias socioemocionales (Módulo 6), ¿cuál es el enfoque evaluativo éticamente coherente con los lineamientos del MEN y el marco de Salinas (2025)?',
        opts: [
          'Realizar un examen escrito acumulativo al final del período donde el estudiante deba memorizar los 6 enfoques del DSE.',
          'Asignar una calificación numérica del 1.0 al 5.0 en el boletín oficial basándose en el comportamiento pasivo y la obediencia del alumno.',
          'Utilizar instrumentos descriptivos (como portafolios, rúbricas de progresión y diarios de clase) orientados a retroalimentar los procesos individuales del estudiante, identificar andamiajes didácticos y evitar etiquetar las emociones con notas punitivas.',
          'Eliminar por completo cualquier proceso de evaluación o seguimiento, bajo el argumento de que el ser y las emociones son imposibles de observar o retroalimentar.'
        ],
        c: 2,
        exp: 'La evaluación formativa auténtica en el DSE huye del control numérico punitivo; busca visibilizar de forma cualitativa y descriptiva el avance del estudiante mediante rúbricas de progresión, portafolios y autoevaluaciones sinceras, sirviendo como insumo para ajustar los andamiajes didácticos del docente.'
      }
    ]
  }
];

const CSE = [
  { 
    id: 'cse1', 
    num: 'CSE-1', 
    color: '#534AB7', 
    bg: '#EEEDFE', 
    tc: '#3C3489', 
    icon: 'ti-eye',
    title: 'Conciencia emocional', 
    eje: 'Yo conmigo mismo',
    def: 'Capacidad de identificar, nombrar y comprender las propias emociones y las de los demás, reconociendo las señales corporales, cognitivas y contextuales que las generan.',
    secuencia: [
      { fase: 'Apertura (Termómetro de Granularidad)', tiempo: '15 min', desc: 'Rutina de conciencia corporal profunda: los participantes cierran los ojos, respiran pausadamente y ejecutan un escaneo de su cuerpo de pies a cabeza. Deben registrar cartográficamente en qué órganos o músculos se aloja físicamente su estado emocional actual, asignándole un color y una textura metafórica sin emitir juicios.', rol: 'El facilitador guía con voz suave y pausas largas, modelando el ejercicio compartiendo primero su propio estado corporal interno. Protege la seguridad psicológica del grupo.' },
      { fase: 'Exploración conceptual', tiempo: '20 min', desc: 'Análisis del continuum de granularidad emocional: Diferenciación técnica entre la emoción de respuesta biológica automática, el sentimiento como elaboración cognitiva y el estado de ánimo sostenido. Uso de la analogía de Nussbaum: las emociones como juicios de valor que revelan lo que consideramos valioso para nuestra subsistencia.', rol: 'Docente presenta marcos conceptuales con ejemplos reales extraídos de las crisis escolares cotidianas, promoviendo la expansión del vocabulario emocional del grupo.' },
      { fase: 'Práctica activa (El Diccionario Fisiológico)', tiempo: '25 min', desc: 'Construcción del mapa de sensizaciones: En una silueta humana impresa, cada participante mapea con marcadores la ubicación exacta de las emociones primarias y complejas (indignación, vergüenza, orgullo, frustración). Posteriormente, inician el diseño de su libreta personal de bitácora emocional de aula.', rol: 'El facilitador circula por los subgrupos realizando preguntas reflexivas abiertas: ¿Qué pensamientos precedieron a esa opresión en el pecho? ¿Qué conducta automática desató?' },
      { fase: 'Transferencia pedagógica', tiempo: '20 min', desc: 'Grupos por niveles educativos co-diseñan una rutina de sintonía emocional de 5 minutos para implementar al inicio de sus clases tradicionales. Definen el vocabulario matizado adecuado para las edades y estructuran cómo el docente modelará la rutina exponiendo su propia interioridad de forma regulada.', rol: 'Acompaña el diseño metodológico. Recuerda a los grupos que la rutina de conciencia debe ser un recurso protector, nunca una obligación invasiva para el estudiante.' },
      { fase: 'Cierre y metacognición', tiempo: '10 min', desc: 'Ronda de salida: Cada participante comparte en una única palabra precisa el estado emocional con el que se retira del espacio y un hallazgo de autoconciencia relevante de la sesión. Se da espacio al silencio reflexivo.', rol: 'Recoge las palabras de salida en un mural visual para evaluar el clima final del ecosistema del grupo.' }
    ],
    actividades: [
      { nivel: 'Educación Inicial (0–5 años)', bg: '#E1F5EE', tc: '#085041', items: ['Dado de Granularidad: Cubo grande de espuma con expresiones faciales complejas. Los niños lo lanzan, imitan el gesto y narran una historia de un juguete que experimentó esa misma emoción.', 'El monstruo de los colores (Lectura Dialógica): Lectura guiada en voz alta utilizando frascos reales de vidrio donde los niños clasifican lanas de colores según la emoción diaria.', 'Espejo de la Alteridad: En parejas frente a frente, un niño gesticula sutilmente una emoción corporal y su compañero actúa como un espejo exacto, intentando adivinar el estado emocional reflejado.'] },
      { nivel: 'Básica Primaria (1°–5°)', bg: '#E6F1FB', tc: '#0C447C', items: ['Semáforo Corporal Diario: Registro en una mini-tarjeta de escritorio antes de iniciar la jornada (Rojo = Inundado/Tenso, Amarillo = Inquieto, Verde = En calma), ayudando al maestro a regular los andamiajes didácticos.', 'Línea de Tiempo de los Picos Emocionales: Dibujo de una gráfica semanal de montañas y valles que registre los eventos del colegio que detonaron estados de alegría, frustración o exclusión.', 'Auditoría Emocional de Cuentos: Lectura crítica de un relato identificando los mensajes corporales ocultos de los personajes y cómo el contexto influyó en sus sentimientos.'] },
      { nivel: 'Básica Secundaria (6°–9°)', bg: '#FBEAF0', tc: '#72243E', items: ['Bitácora de Granularidad Emocional: Registro escrito individual que analice de forma precisa: Detonador objetivo de aula + Señal fisiológica corporal + Pensamiento automático + Emoción semántica exacta.', 'Análisis del Lenguaje Juvenil: Debate grupal sobre las implicaciones de reducir todo el vocabulario emocional a expresiones genéricas o jergas locales, expandiendo el glosario semántico del curso.', 'Lectura de emociones públicas en la historia local: Análisis de los testimonios de memoria oral comunitaria del barrio identificando las emociones subyacentes de los relatos.'] },
      { nivel: 'Media (10°–11°)', bg: '#FAECE7', tc: '#712B13', items: ['Ensayo Argumentativo Crítico: "Las emociones como juicios evaluativos de valor en la teoría de Martha Nussbaum aplicada a la justicia escolar colombiana".', 'Investigación de Campo Intercultural: Entrevistas estudiantiles a miembros de la comunidad con diversas raíces culturales o generacionales sobre cómo identifican y nombran sus emociones, presentando los hallazgos al grupo.', 'Producción Audiovisual: Creación de un micro-podcast de 3 minutos diseñado para visibilizar la importancia de la salud mental y la granularidad emocional en la adolescencia contemporánea.'] }
    ],
    rubrica: [
      { criterio: 'Identificación emocional precisa', d: ['Incapaz de reconocer o nombrar estados emocionales propios o del entorno.', 'Identifica emociones básicas únicamente cuando se le interroga con preguntas cerradas directas.', 'Identifica y nombra de forma autónoma una gama variada de emociones primarias utilizando vocabulario matizado.', 'Analiza con fluidez semántica la complejidad de múltiples emociones simultáneas en sí mismo y en los otros en diversos contextos de tensión.'] },
      { criterio: 'Reconocimiento de señales corporales', d: ['Ignora las señales físicas y fisiológicas asociadas a sus estados emocionales.', 'Identifica algunas reacciones corporales básicas (ej. sudoración, llanto) con acompañamiento del docente.', 'Describe con precisión las señales corporales internas asociadas a sus emociones de forma regular.', 'Integra de forma autónoma la lectura de sus señales corporales, cognitivas y contextuales para prevenir desbordamientos emocionales conductuales.'] },
      { criterio: 'Vocabulario y granularidad semántica', d: ['Reduce toda su expresión emocional a términos genéricos vagos como "bien" o "mal".', 'Utiliza un glosario limitado de emociones básicas (alegría, tristeza, rabia, miedo) de manera repetitiva.', 'Posee un repertorio amplio y diferenciado de términos emocionales (30+ palabras), aplicándolos con precisión.', 'Apropia un vocabulario emocional matizado, culturalmente situado, y es capaz de desglosar variaciones sutiles de estados de ánimo complejos.'] }
    ],
    guia: { 
      prop: 'Garantizar que los docentes desarrollen una alta granularidad emocional y una lectura corporal fina de sus propios estados internos, estructurando de forma técnica andamiajes didácticos viables para transferir esta competencia protectora a las aulas de clase colombianas.',
      adv: [
        'Bajo ninguna circunstancia obligue a un estudiante o participante a exponer públicamente una experiencia emocional traumática o dolorosa.',
        'El facilitador debe modelar el ejercicio exponiendo primero su propia interioridad de forma vulnerable pero regulada.',
        'Evite catalogar las emociones como "positivas" o "negativas"; todas las emociones son legítimas y contienen información cognitiva valiosa sobre lo que el sujeto valora.',
        'Tenga estructurado un canal de derivación institucional discreto si durante los ejercicios de autoconciencia emerge un caso crítico de afectación de salud mental.'
      ],
      mat: [
        'Siluetas impresas del mapa corporal humano',
        'Crayones, marcadores o lápices de colores variados',
        'Tarjetas didácticas de granularidad y vocabulario emocional',
        'Libretas de bitácora personal de autoformación'
      ],
      cierre: 'Concluya la sesión implementando la rutina de la "Palabra de Salida". Este ejercicio estabiliza el cierre del grupo, valida la experiencia individual de forma horizontal y ofrece datos de control clave sobre el clima emocional del taller para el facilitador.'
    } 
  }
];