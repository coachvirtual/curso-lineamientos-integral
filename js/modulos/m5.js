/* ══════════════════════════════════════════════════════════════════════════
   MÓDULO 5: ORGANIZACIÓN Y DISEÑO CURRICULAR (ESTRUCTURA INTEGRAL - MEN 2026)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof MODULOS === 'undefined') { var MODULOS = []; }

MODULOS.push({ 
  id: 'm5', 
  num: 'Módulo 5', 
  color: '#3B6D11', 
  bg: '#EAF3DE', 
  icon: 'ti-layout-grid',
  title: 'Organización y Diseño Curricular',
  sub: 'De los marcos técnicos del MEN a la planeación didáctica integrada en el aula escolar',
  
  // ── SESIONES / LABORATORIOS DE APRENDIZAJE ──────────────────────────────
  sesiones: [
    { 
      title: 'Sesión 1: Estructura Curricular — El Canvas de la Unidad Integrada', 
      tipo: 'Diseño Curricular', 
      dur: '90 min',
      obj: [
        'Apropiar la articulación técnica de los cuatro componentes de la estructura curricular de los lineamientos.',
        'Interpretar con solvencia la Tabla 18 del documento oficial del MEN como modelo de planeación transversal.',
        'Formular con precisión técnica aprendizajes esenciales e indicadores de desempeño descriptivos.'
      ],
      contenidos: [
        '<strong>La arquitectura curricular propuesta por el MEN 2026:</strong> Dimensiones formativas, Ejes concéntricos (A-D), Aprendizajes esenciales e Indicadores de desempeño.',
        '<strong>Los Aprendizajes Esenciales como núcleos:</strong> Unidades conceptuales que definen la fusión orgánica del saber con el ser en comunidad, evitando la parcelación del conocimiento.',
        '<strong>Romper la saturación del currículo:</strong> La integración transversal implica transformar el CÓMO se enseña la asignatura existente, no añadir más materias teóricas aisladas al plan de estudios institucional.',
        '<strong>Tabla 18 Adaptada - Componentes de Planeación Técnica:</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#EAF3DE; color:#3B6D11"><th style="padding:6px; border:1px solid var(--border)">Componente Curricular</th><th style="padding:6px; border:1px solid var(--border)">Función Pedagógica</th><th style="padding:6px; border:1px solid var(--border)">Ejemplo de Aplicación de Aula</th></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Eje Concéntrico</td><td style="padding:6px; border:1px solid var(--border)">Mapea el plano relacional.</td><td style="padding:6px; border:1px solid var(--border)">Eje C: Yo con la sociedad.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Aprendizaje Esencial</td><td style="padding:6px; border:1px solid var(--border)">Fusión entre el saber y el ser.</td><td style="padding:6px; border:1px solid var(--border)">Construcción de acuerdos colectivos fundamentados en la equidad.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Indicador Descriptivo</td><td style="padding:6px; border:1px solid var(--border)">Evidencia la progresión cualitativa.</td><td style="padding:6px; border:1px solid var(--border)">Ajusta de manera autónoma las pautas de interacción ante disensos.</td></tr></table>'
      ],
      actividades: [
        '<strong>Reto Práctico "El Canvas de la Unidad Integrada":</strong> Utiliza una matriz interactiva guiada. Selecciona un eje concéntrico del Módulo 2, crúzalo con una competencia socioemocional del Módulo 4 y redacta un Aprendizaje Esencial articulado directamente con los temas curriculares obligatorios de tu propia asignatura.',
        '<strong>Auditoría de Saturación:</strong> Examina tu plan de área tradicional e identifica 2 logros hiper-teóricos que puedan fusionarse bajo una sola capacidad ciudadana orientada a la resolución de problemas reales.'
      ],
      recursos: [
        'Lienzo de Diseño: Canvas para la Estructuración de Unidades Curriculares Integradas',
        'Documento Técnico: Guía Completa de Desglose de las Tablas 17 y 18 del MEN 2026'
      ],
      rq: 'Al mirar tu plan de área tradicional para el próximo período académico, ¿los logros están diseñados para memorizar contenidos abstractos o estructuran explícitamente el desarrollo de una capacidad humana medible?',
      aq: '¿Qué tan seguro/a te sientes utilizando la estructura de dimensiones, ejes y aprendizajes esenciales para armar tus planeaciones didácticas sin sobrecargar tu tiempo de diseño?'
    },
    { 
      title: 'Sesión 2: Progresión de Aprendizajes — El Viaje del Estudiante', 
      tipo: 'Planeación Pedagógica', 
      dur: '90 min',
      obj: [
        'Apropiar el principio de progresión como eje de continuidad y equidad a lo largo de la trayectoria escolar.',
        'Garantizar la coherencia vertical (entre niveles) y horizontal (entre áreas concurrentes) en el diseño didáctico.',
        'Ejercer la autonomía escolar para contextualizar las matrices de progresión curricular según las necesidades del territorio.'
      ],
      contenidos: [
        '<strong>La progresión de aprendizajes:</strong> La organización gradual, intencional y secuencial de la complejidad didáctica a lo largo de los ciclos educativos (Inicial, Primaria, Secundaria y Media).',
        '<strong>Trayectorias educativas flexibles:</strong> El reconocimiento de que el desarrollo socioemocional no sigue líneas rectas y homogéneas, exigiendo andamiajes diferenciados y soportes alternos.',
        '<strong>Autonomía curricular y flexibilización (Decreto 1421):</strong> La facultad de la institución para realizar ajustes razonables, garantizando que el entorno cultural y territorial reconfigure las metas estandarizadas.',
        '<strong>Tabla de Coherencia Vertical - Progresión de la Regulación (Ejemplo):</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#EAF3DE; color:#3B6D11"><th style="padding:6px; border:1px solid var(--border)">Nivel Escolar</th><th style="padding:6px; border:1px solid var(--border)">Complejidad del Andamiaje</th><th style="padding:6px; border:1px solid var(--border)">Acción Pedagógica de Aula</th></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Inicial (0-5 años)</td><td style="padding:6px; border:1px solid var(--border)">Co-regulación e imitación guiada.</td><td style="padding:6px; border:1px solid var(--border)">Dado de expresiones faciales y uso de rincones sensoriales.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Primaria (1°-5°)</td><td style="padding:6px; border:1px solid var(--border)">Identificación y pausas autónomas.</td><td style="padding:6px; border:1px solid var(--border)">Semáforo de control interno escrito en el pupitre.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Secundaria / Media</td><td style="padding:6px; border:1px solid var(--border)">Reevaluación cognitiva sistémica.</td><td style="padding:6px; border:1px solid var(--border)">Bitácora de granularidad fina ante disparadores relacionales.</td></tr></table>'
      ],
      actividades: [
        '<strong>Reto de Diseño "El Viaje del Estudiante":</strong> Elige una competencia socioemocional específica (ej. <i>Empatía y reconocimiento del otro</i>). Modifica y adapta una misma propuesta de actividad alterando su complejidad didáctica para tres niveles diferentes de tu institución, garantizando coherencia vertical.',
        '<strong>Mapeo de Rupturas Curriculares:</strong> Diagnostica en comité o subgrupo los puntos de transición crítica (ej. el paso de 5° de primaria a 6° de bachillerato) donde la formación ciudadana tradicional se debilita por la atomización de asignaturas.'
      ],
      recursos: [
        'Marcos Técnicos: Fichas Oficiales de Progresión de Competencias Ciudadanas y CSE',
        'Formato editable: "Matriz Lego para el Diseño de Coherencia Vertical en Planes de Área"'
      ],
      rq: '¿En tu institución educativa existe comunicación técnica real entre los docentes de primaria y secundaria para proteger la progresión de las capacidades ciudadanas, o cada maestro opera de forma aislada?',
      aq: '¿Qué nivel de dominio posees para flexibilizar los indicadores de un logro y adaptarlos a un estudiante con un ritmo heterogéneo de aprendizaje o barreras de acceso?'
    },
    { 
      title: 'Sesión 3: Estrategias Metodológicas — Metodología en Acción', 
      tipo: 'Enfoque Metodológico', 
      dur: '90 min',
      obj: [
        'Dominar las metodologías activas y críticas idóneas para operativizar la formación ciudadana y socioemocional.',
        'Articular secuencias didácticas integradas dentro de los cuatro contextos institucionales de aplicación.',
        'Diseñar proyectos viables que den cumplimiento orgánico y permanente a la Cátedra de Educación Emocional (Ley 2503).'
      ],
      contenidos: [
        '<strong>Pedagogías activas y críticas:</strong> El Aprendizaje-Servicio solidario (AySS), el Aprendizaje Basado en Proyectos integrados (ABPi), la investigación-acción pedagógica y los dilemas morales abiertos.',
        '<strong>Los 4 contextos reales de aplicación del currículo integrado:</strong> El Aula de clases, la Escuela institucional (gobierno escolar, manual), la Comunidad educativa (vínculo con familias) y el Territorio físico y virtual.',
        '<strong>Coherencia Metodológica Radical:</strong> El CÓMO enseña el educador (clima democrático, respeto, co-regulación asertiva) impacta con mayor fuerza en la fibra ética del estudiante que el QUÉ enseña (conceptos teóricos memorizados).'
      ],
      actividades: [
        '<strong>Juego de Estrategia "Metodología en Acción":</strong> Selecciona una problemática latente de tu entorno escolar (ej. dinámicas de exclusión en entornos digitales o acoso escolar). Diseña un boceto de proyecto de Aprendizaje-Servicio articulando acciones concretas y viables para cada uno de los 4 contextos institucionales.',
        '<strong>Secuencia de Choque Cátedra Emocional:</strong> Estructura una secuencia didáctica integrada para tu materia tradicional que cumpla de forma permanente y transversal con la Ley 2503 de 2025.'
      ],
      recursos: [
        'Manual de Campo: "Guía de Orientaciones Metodológicas para el Diseño de Proyectos de Aprendizaje-Servicio"',
        'Texto complementario: Freire, P. (1997). Pedagogía de la autonomía (Extractos de principios didácticos)'
      ],
      rq: 'Al revisar las metodologías que utilizas con mayor regularidad en tus clases, ¿tus estudiantes asumen un rol pasivo de recepción de datos o asumen la agencia activa de investigar, deliberar y ejecutar transformaciones sociales?',
      aq: '¿Qué tan preparado/a te sientes para liderar proyectos transversales de Aprendizaje-Servicio que involucren e interpelen a las familias de tu comunidad educativa?'
    }
  ],
  
  // ── EVALUACIÓN FORMATIVA Y CONTROL DE PROGRESO (QUIZ) ──────────────────
  quiz: [
    {
      q: 'Al estructurar la planeación técnica bajo la Tabla 18 de los Lineamientos 2026, ¿cuál es la ruta metodológica correcta para cumplir con la Cátedra de Educación Emocional (Ley 2503 de 2025)?',
      opts: [
        'Diseñar una nueva materia teórica aislada con exámenes cuantitativos basados en las definiciones conceptuales de las emociones.',
        'Integrar de forma transversal las dimensiones socioemocionales en el diseño de los Aprendizajes Esenciales de las asignaturas existentes, modificando las metodologías y evaluando en los 4 contextos.',
        'Delegar el cumplimiento legal exclusivamente en la realización de carteleras durante las jornadas de izadas de bandera.',
        'Adquirir cartillas comerciales estandarizadas ajenas a los contextos culturales y territoriales de la sede escolar.'
      ],
      c: 1,
      exp: 'La Ley 2503 y la estructura del MEN huyen de la atomización del currículo. No buscan saturar el plan de estudios con más materias aisladas de una hora. Exigen transformar la matriz de enseñanza existente: fusionar de forma transversal capacidades emocionales intencionales con los contenidos obligatorios, modificando la didáctica del aula.'
    },
    {
      q: '¿Por qué se afirma en la Sesión 3 que el CÓMO enseña el docente posee un impacto superior en la formación integral que el QUÉ enseña?',
      opts: [
        'Porque los contenidos temáticos informativos carecen de validez científica y deben ser eliminados de la escuela.',
        'Porque el clima relacional del aula, el modelado de co-regulación del maestro y las estructuras democráticas de participación constituyen el "currículo vivo" que los alumnos interiorizan éticamente a través de la experiencia.',
        'Porque las metodologías tradicionales magistrales son más eficientes para memorizar las leyes de la Constitución.',
        'Porque el Ministerio busca que el educador abandone su rol pedagógico para asumir funciones exclusivas de terapeuta clínico.'
      ],
      c: 1,
      exp: 'La ciudadanía y las emociones no se aprenden memorizando un tablero. Se aprenden habitando el espacio. Si un docente dicta una clase magistral autoritaria sobre la democracia, el estudiante aprende a obedecer al poder vertical (currículo oculto) por encima del concepto teórico dictado. La coherencia metodológica es un imperativo ético.'
    }
  ]
});