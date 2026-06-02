/* ══════════════════════════════════════════════════════════════════════════
   MÓDULO 1: FUNDAMENTOS EPISTÉMICOS Y PEDAGÓGICOS (ESTRUCTURA INTEGRAL MEN 2026)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof MODULOS === 'undefined') { var MODULOS = []; }

MODULOS.push({ 
  id: 'm1', 
  num: 'Módulo 1', 
  color: '#534AB7', 
  bg: '#EEEDFE', 
  icon: 'ti-brain',
  title: 'Fundamentos Epistémicos y Pedagógicos',
  sub: 'Transformar el currículo: de la memorización conceptual a la hospitalidad y la justicia ética en el territorio',
  
  // ── SESIONES / LABORATORIOS DE APRENDIZAJE ──────────────────────────────
  sesiones: [
    { 
      title: 'Sesión 1: Epistemología de la alteridad — El Mapa de la Hospitalidad', 
      tipo: 'Marco Epistémico', 
      dur: '75 min',
      obj: [
        'Interpretar los anclajes sociohistóricos de la ciudadanía crítica en contextos de alta diversidad cultural.',
        'Apropiar el concepto de educación como hospitalidad y acogida ética de los recién llegados (Hannah Arendt).',
        'Diseñar acciones institucionales inmediatas fundamentadas en la ética de la alteridad (Levinas y Mèlich).'
      ],
      contenidos: [
        '<strong>La escuela como espacio de encuentro radical:</strong> Romper con la tradición homogeneizadora que anula las diferencias territoriales.',
        '<strong>Hannah Arendt y la crisis de la educación:</strong> La responsabilidad política intrínseca de los adultos de acoger a las nuevas generaciones en un mundo compartido que les precede.',
        '<strong>La ética de la alteridad (Levinas, Mèlich):</strong> Comprender al Yo pedagógico no como un centro absoluto de transmisión, sino como un sujeto éticamente interpelado y responsable por la presencia, rostro y dignidad del Otro (el estudiante).'
      ],
      actividades: [
        '<strong>Reto de Campo "El Mapa del Recién Llegado":</strong> Realiza una auditoría visual e institucional de tu sede educativa. Ponte de forma empática en los zapatos de un estudiante migrante, una niña en condición de discapacidad o un joven desplazado que ingresa por primera vez. Evalúa qué tan hospitalario ochentero es el lenguaje formal, los pasillos y los rituales del currículo oculto.',
        '<strong>Taller de Deconstrucción Lingüística:</strong> Identifica 3 frases o etiquetas comunes en la sala de profesores que deshumanicen o estigmaticen a los alumnos y redacta sus alternativas basadas en la acogida ética.'
      ],
      recursos: [
        'Documento Técnico: "Glosario de Filosofía del Cuidado y Alteridad para Escuelas"',
        'Lectura de Soporte: Arendt, H. (2016). La crisis de la educación (Compendio de extractos oficiales)'
      ],
      rq: 'Al analizar con honestidad el clima normativo de tu institución, ¿qué dinámicas o discursos cotidianos obligan a los estudiantes "diferentes" a asimilarse y ocultar su identidad para ser aceptados de verdad?',
      aq: '¿Qué tan preparado/a te sientes para argumentar ante el consejo académico que priorizar la alteridad no disminuye el rigor, sino que funda las bases éticas del aprendizaje?'
    },
    { 
      title: 'Sesión 2: La escuela como comunidad ética — La Balanza de la Escuela', 
      tipo: 'Pedagogía Aplicada', 
      dur: '75 min',
      obj: [
        'Operacionalizar las tres dimensiones de la justicia social de Nancy Fraser en la planeación curricular.',
        'Diferenciar con precisión técnica entre aprendizajes esenciales, capacidades humanas, competencias y habilidades.',
        'Estructurar ambientes de aula basados en los tres ejes operativos de la formación integral.'
      ],
      contenidos: [
        '<strong>La justicia tridimensional en la escuela (Nancy Fraser):</strong> 1. Distribución (recursos, apoyos didácticos y tiempos diferenciales), 2. Reconocimiento (valoración e incorporación de saberes e historias de vida) y 3. Representación (participación real en las decisiones pedagógicas).',
        '<strong>El enfoque de capacidades (Martha Nussbaum):</strong> Evaluar el éxito de la escuela no por los puntajes estandarizados, sino por las libertades reales que adquiere el estudiante para decidir y construir una vida digna.',
        '<strong>Ejes operativos del MEN:</strong> Intencionalidad pedagógica transparente, metodologías críticas activas y evaluación formativa dialógica.'
      ],
      actividades: [
        '<strong>Simulador Situacional "La Balanza de la Escuela":</strong> Analiza el caso de un estudiante con bajo rendimiento que sabotea las clases pero descubres que trabaja cuidando a sus hermanos por la noche. Estructura una respuesta institucional dividida en tres acciones concretas: una de Distribución (flexibilidad de tiempos), una de Reconocimiento (validar su resiliencia) y una de Representación (hacerlo partícipe del diseño de sus entregas).',
        '<strong>Auditoría Curricular:</strong> Revisa el último logro de tu plan de área y conviértelo en una Capacidad Humana Esencial conectada al entorno regional.'
      ],
      recursos: [
        'Matriz de Planeación Gráfica: "Las Tres Dimensiones de la Justicia Curricular según Fraser"',
        'Lectura técnica: Perrenoud, P. (2008). Construir competencias desde la escuela (Guía analítica)'
      ],
      rq: 'Piensa en el estudiante que consideras "más difícil" en tus grupos. Si pasaras su caso por el tamiz de la justicia tridimensional de Fraser, ¿en cuál de las tres dimensiones está fallando el andamiaje del colegio?',
      aq: '¿Qué nivel de dominio posees para redactar indicadores de desempeño cualitativos basados en la progresión de capacidades en lugar de notas numéricas directas?'
    },
    { 
      title: 'Sesión 3: Unidad entre ciudadanía y socioemocionalidad — Puentes Conceptuales', 
      tipo: 'Integración Curricular', 
      dur: '60 min',
      obj: [
        'Demostrar la relación indisociable entre los procesos de regulación emocional interna y la deliberación democrática pública.',
        'Mapear con fluidez las confluencias epistemológicas entre los 6 enfoques del DSE y los 4 enfoques de las competencias ciudadanas.',
        'Diseñar proyectos transversales unificados que eviten la saturación de contenidos temáticos en el PEI.'
      ],
      contenidos: [
        '<strong>La infraestructura psíquica del ciudadano:</strong> Las habilidades socioemocionales no son técnicas de autocontrol para silenciar la queja; son la base interna que permite tolerar la frustración, empatizar en el disenso y deliberar responsablemente ante el conflicto público.',
        '<strong>Los 6 Enfoques del DSE:</strong> Procesual-cognitivo, Valorativo-ético, Regulación motivacional, Político-ciudadano, Filosófico-hermenéutico y Decolonial.',
        '<strong>Los 4 Enfoques Ciudadanos:</strong> Socioemocional, Ético-relacional, Sociopolítico crítico y Ciudadanía global e intercultural.'
      ],
      actividades: [
        '<strong>Reto de Diseño "Puentes Conceptuales":</strong> Examina la tabla técnica de confluencias del MEN. Toma un enfoque socioemocional (ej. Decolonial) y crúzalo con uno ciudadano (ej. Sociopolítico crítico). Diseña la campaña central de un proyecto de aula (lema, acción y producto) donde demuestres que el cuidado mutuo es un acto político de resistencia pacífica.',
        '<strong>Mapeo del Currículo Oculto:</strong> Identifica en qué momentos de la jornada de tu colegio (recreos, formaciones, reuniones de padres) las emociones colectivas son ignoradas o reprimidas, y propón una ruta de canalización.'
      ],
      recursos: [
        'Tabla Técnica de Confluencias Oficial: Enfoques Cruzados CC y DSE (MEN 2026)',
        'Video de Análisis: El Enfoque Decolonial en la Educación Integral Latinoamericana'
      ],
      rq: 'Cuando tus estudiantes experimentan emociones políticas intensas en el espacio escolar (como indignación colectiva por el estado de la planta física o apatía ante las propuestas del personero), ¿cómo dialogas con ellas desde tu asignatura tradicional?',
      aq: '¿Qué tan preparado/a te sientes para defender ante tus directivos que el desarrollo socioemocional debe evaluarse de forma transversal y formativa, y no como una hora de clase teórica aislada?'
    }
  ],
  
  // ── EVALUACIÓN FORMATIVA Y CONTROL DE PROGRESO (QUIZ) ──────────────────
  quiz: [
    {
      q: '¿Qué implica operationalizar la dimensión de "Reconocimiento" de Nancy Fraser en el currículo de una institución educativa colombiana?',
      opts: [
        'Garantizar la distribución equitativa de tabletas y computadores a todas las sedes del municipio.',
        'Validar, dignificar e incorporar explícitamente en los contenidos curriculares las historias de vida, saberes tradicionales e identidades étnicas y culturales presentes en el territorio.',
        'Sancionar disciplinariamente el uso de dialectos o modismos regionales dentro del aula de clases para estandarizar el lenguaje.',
        'Permitir que los estudiantes elijan de forma democrática las sanciones económicas del Manual de Convivencia.'
      ],
      c: 1,
      exp: 'Para Nancy Fraser, el Reconocimiento aborda la esfera de la justicia cultural. En la escuela, esto se traduce en sacar los saberes del territorio de la periferia e integrarlos de forma protagónica en el plan de estudios, combatiendo la invisibilización de las identidades.'
    },
    {
      q: '¿Por qué se afirma epistemológicamente en los Lineamientos 2026 que el Desarrollo Socioemocional (DSE) y las Competencias Ciudadanas constituyen una unidad indisoluble?',
      opts: [
        'Porque aprender a controlar las emociones individuales reemplaza la necesidad de conocer las leyes o la Constitución Política.',
        'Porque los procesos de autoconciencia y co-regulación emocional representan la infraestructura interna requerida para sostener el diálogo, tolerar la frustración en el disenso y participar activamente en deliberaciones democráticas críticas.',
        'Porque la educación emocional es un prerrequisito teórico que debe aprobarse cuantitativamente antes de ingresar a las clases de Ciencias Sociales.',
        'Porque el Ministerio de Educación Nacional busca priorizar la terapia psicológica individual por encima de los análisis sociopolíticos del entorno.'
      ],
      c: 1,
      exp: 'El desarrollo socioemocional no es un proceso de aislamiento terapéutico. Es la infraestructura interna que faculta al sujeto para actuar en la esfera pública: sin autorregulación y empatía compasiva, la deliberación ciudadana naufraga ante la polarización o el conflicto relacional.'
    },
    {
      q: 'Al ejecutar la actividad del "Mapa del Recién Llegado" en la Sesión 1, ¿cuál es el foco analítico primordial del docente?',
      opts: [
        'Medir el índice de infraestructura física del colegio para tramitar un presupuesto de mantenimiento ante la secretaría de educación.',
        'Evaluar críticamente el "currículo oculto", identificando cómo el lenguaje cotidiano, las normas no escritas y la arquitectura institucional actúan de forma hospitalaria u hostil ante las diferencias humanas.',
        'Diseñar un examen estandarizado de admisión para nivelar conceptualmente a los estudiantes nuevos antes de iniciar el año escolar.',
        'Elaborar una lista de prohibiciones conductuales estrictas para asegurar que los alumnos recién llegados se asimilen rápidamente.'
      ],
      c: 1,
      exp: 'La educación como hospitalidad de Arendt nos exige auditar el currículo oculto. El Mapa del Recién Llegado fuerza al docente a observar las barreras sutiles, los sesgos en los discursos y los rituales diarios que marginan o acogen verdaderamente la alteridad en la escuela.'
    }
  ]
});