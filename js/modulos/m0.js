/* ══════════════════════════════════════════════════════════════════════════
   MÓDULO 0: INTRODUCCIÓN Y CONTEXTO (ESTRUCTURA INTEGRAL Y RIGUROSA MEN 2026)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof MODULOS === 'undefined') {
  var MODULOS = [];
}

MODULOS.push({ 
  id: 'm0', 
  num: 'Módulo 0', 
  color: '#1D9E75', 
  bg: '#E1F5EE', 
  icon: 'ti-compass',
  title: 'Introducción y Contexto',
  sub: 'El viaje curricular: rutas estratégicas para la transformación profunda del ser y el saber escolar',
  
  // ── SESIONES / LABORATORIOS DE APRENDIZAJE ──────────────────────────────
  sesiones: [
    { 
      title: 'Sesión 1: ¿Por qué este curso? — Termómetro Escolar Interactivo', 
      tipo: 'Presentación y Justificación', 
      dur: '60 min',
      obj: [
        'Comprender el propósito transformador de los Lineamientos Curriculares para la Formación Integral (MEN 2026).',
        'Ejecutar un autodiagnóstico crítico sobre las prioridades socioemocionales y climas de convivencia institucionales.',
        'Reconocer la institución educativa como el microcosmos donde las competencias ciudadanas se viven, ejercen y aprenden.'
      ],
      contenidos: [
        '<strong>Retos estructurales del contexto colombiano:</strong> Análisis de la urgencia pedagógica frente al posconflicto territorial, la agudización de las brechas de equidad socioeconómica, la saturación por desinformación en entornos digitales y las alertas epidemiológicas de salud mental infanto-juvenil pospandemia.',
        '<strong>La Formación Integral como imperativo ético:</strong> Superar la fragmentación curricular tradicional. La articulación indisoluble de las dimensiones cognitiva, socioemocional, ético-relacional y sociopolítica dentro del aula.',
        '<strong>El giro copernicano en el PEI:</strong> Transitar del modelo pasivo basado en "enseñar asignaturas teóricas de urbanidad o cívica" hacia el codiseño intencional de entornos institucionales de ciudadanía activa y co-regulación emocional compartida.',
        '<strong>Matriz de Urgencias del Entorno Escolar (Autodiagnóstico Técnico):</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#E1F5EE; color:#0F6E56"><th style="padding:6px; border:1px solid var(--border)">Fenómeno Crítico</th><th style="padding:6px; border:1px solid var(--border)">Manifestación en el Aula</th><th style="padding:6px; border:1px solid var(--border)">Enfoque de Intervención (MEN 2026)</th></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Fragilidad Psicosomática</td><td style="padding:6px; border:1px solid var(--border)">Ansiedad, crisis de pánico, repliegue o apatía crónica ante los logros.</td><td style="padding:6px; border:1px solid var(--border)">Eje A: Fortalecimiento de la autoconciencia y granularidad fina.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Ruptura de Vínculos</td><td style="padding:6px; border:1px solid var(--border)">Agresión verbal, microagresiones discriminatorias y exclusión en pasillos.</td><td style="padding:6px; border:1px solid var(--border)">Eje B: Prácticas de hospitalidad radical y círculos restaurativos.</td></tr></table>'
      ],
      actividades: [
        '<strong>Taller de Choque "Termómetro de Urgencias":</strong> Evalúa analíticamente en una escala descriptiva de 1 a 4 el estado actual de la salud mental, la cohesión relacional y los niveles de violencia manifiesta u oculta en tu sede educativa, consolidando un mapa térmico de prioridades institucionales.',
        '<strong>Mapeo de Entornos de Riesgo Relacional:</strong> Recorre críticamente la infraestructura física y los tiempos escolares (recreos, salidas, baños) identificando zonas muertas de mediación donde el currículo oculto valide dinámicas de exclusión.'
      ],
      recursos: [
        'Presentación Ejecutiva Oficial: "Estructura y Dimensiones del Documento Maestro MEN 2026"',
        'Plantilla Metodológica: "Guía de Ruta para la Activación de Comunidades de Práctica Docente en Colegios"'
      ],
      rq: 'Al mirar con honestidad los pasillos, las dinámicas de la sala de profesores y las aulas de tu institución, ¿cuál es el síntoma más evidente y desgarrador de que la salud mental y la ciudadanía activa necesitan una intervención pedagógica de choque?',
      aq: '¿Qué tan claros tienes los diagnósticos y desafíos estructurales de tu territorio que justifican la transformación del plan de estudios tradicional hacia un enfoque de formación integral?'
    },
    { 
      title: 'Sesión 2: Marco normativo de tres décadas — El Inspector del PEI', 
      tipo: 'Fundamentos Legales', 
      dur: '60 min',
      obj: [
        'Trazar la evolución histórico-normativa de la educación ciudadana en Colombia, desde la Carta Política de 1991 hasta los decretos vigentes.',
        'Analizar las implicaciones técnico-pedagógicas de la reciente Ley 2503 de 2025 y la obligatoriedad de la Cátedra de Educación Emocional.',
        'Proponer reformas normativas viables para armonizar el PEI, el SIEE y el Manual de Convivencia bajo enfoques de justicia escolar.'
      ],
      contenidos: [
        '<strong>Anclajes constitucionales:</strong> Los Artículos 41 y 67 de la Constitución de 1991 como mandatos imperativos para la enseñanza de la democracia, los Derechos Humanos y la edificación de una cultura de paz.',
        '<strong>Hitos de la política pública colombiana:</strong> La Ley General de Educación 115 de 1994, los Estándares Básicos de Competencias Ciudadanas (2004) y el despliegue de la Ley 1620 de 2013 (Sistema Nacional de Convivencia Escolar).',
        '<strong>La gran actualización legislativa:</strong> La Ley 2503 de 2025. Implicaciones de la obligatoriedad de la Cátedra de Educación Emocional concebida no como una asignatura de cátedra aislada, sino como un proceso pedagógico transversal, intencional y permanente en los establecimientos educativos.',
        '<strong>Evolución de la Política Pública de Convivencia y Ciudadanía en Colombia:</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#E1F5EE; color:#0F6E56"><th style="padding:6px; border:1px solid var(--border)">Hito Normativo</th><th style="padding:6px; border:1px solid var(--border)">Paradigma Dominante</th><th style="padding:6px; border:1px solid var(--border)">Impacto en la Gestión Curricular</th></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Constitución de 1991 / Ley 115</td><td style="padding:6px; border:1px solid var(--border)">Democracia participativa y derechos</td><td style="padding:6px; border:1px solid var(--border)">Apertura de los Gobiernos Estudiantiles y Manuales de Convivencia.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Ley 1620 de 2013</td><td style="padding:6px; border:1px solid var(--border)">Enfoque de derechos, género y mitigación</td><td style="padding:6px; border:1px solid var(--border)">Creación de Comités de Convivencia y los 4 componentes de la Ruta.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Ley 2503 de 2025</td><td style="padding:6px; border:1px solid var(--border)">Educación Emocional Permanente Transversal</td><td style="padding:6px; border:1px solid var(--border)">Integración obligatoria en Aprendizajes Esenciales de todas las áreas.</td></tr></table>'
      ],
      actividades: [
        '<strong>Reto Estratégico "El Inspector del PEI":</strong> Analiza el caso documental de una institución educativa estancada en un enfoque policivo y punitivo heredado de los años 90. Detecta 3 violaciones flagrantes a los principios de la Ley 1620 y la Ley 2503 de 2025, formulando sus respectivos pliegos de corrección didáctica.',
        '<strong>Diseño de Reforma de Convivencia:</strong> Redacta un artículo de modificación directa para el Manual de Convivencia de tu colegio, sustituyendo una medida suspensiva automática por un protocolo de reparación colectiva o círculo restaurativo.'
      ],
      recursos: [
        'Compendio Normativo Unificado: Ley 115, Ley 1620 y Ley 2503 de 2025 en la Práctica Docente',
        'Decreto 1965 de 2013: Análisis Operativo de los Componentes de la Ruta de Atención Integral (RAI)'
      ],
      rq: '¿El Manual de Convivencia de tu sede actual opera bajo una lógica puramente punitiva y fiscalizadora o integra con éxito procesos de justicia restaurativa y co-regulación emocional? ¿Qué artículo específico reformarás de inmediato?',
      aq: '¿Qué tan preparado/a te sientes legal y pedagóComponentemente para sostener ante una asamblea de padres o consejo directivo la abolición de medidas punitivas automáticas?'
    }
  ],
  
  // ── EVALUACIÓN FORMATIVA Y CONTROL DE PROGRESO (QUIZ) ──────────────────
  quiz: [
    {
      q: '¿Cuál es la innovación y el mandato de transformación principal que introduce la Ley 2503 de 2025 en la arquitectura del sistema educativo colombiano?',
      opts: [
        'La supresión de las asignaturas científicas tradicionales para reemplazarlas por talleres virtuales homogéneos de autoayuda.',
        'La instauración obligatoria de la Cátedra de Educación Emocional, entendida como un proceso pedagógico transversal, intencional, permanente y contextualizado en todas las áreas y niveles del establecimiento.',
        'La delegación exclusiva y obligatoria de la convivencia escolar en agencias de psicología clínica externas a la institución.',
        'La creación de una escala de calificaciones numéricas tradicionales para evaluar el índice de felicidad individual de los alumnos.'
      ],
      c: 1,
      exp: 'La Ley 2503 de 2025 no busca la creación de una hora teórica aislada que sature el currículo de papeleo administrativo. Su mandato exige la transformación de las prácticas pedagógicas vigentes: la integración intencional y transversal de capacidades emocionales en los Aprendizajes Esenciales de todas las áreas del conocimiento.'
    },
    {
      q: 'Al ejecutar la simulación del "Inspector del PEI" en la Sesión 2, ¿cuál de las siguientes realidades institucionales contradice de manera directa los marcos normativos vigentes en Colombia (Ley 1620 y Ley 2503)?',
      opts: [
        'Modificar el SIEE para incorporar rúbricas de progresión descriptivas y cualitativas en la evaluación de proyectos integrados.',
        'Involucrar de forma directa y deliberativa a los representantes del gobierno estudiantil en el diseño de los acuerdos de aula.',
        'Aplicar medidas sancionatorias automáticas de expulsión o suspensión a estudiantes desregulados conductualmente, evadiendo la activación de la Ruta de Atención Integral y los procesos de acompañamiento formativo.',
        'Vincular a sabedores y líderes de la Junta de Acción Comunal dentro de las secuencias didácticas transversales del área de Ciencias Sociales.'
      ],
      c: 2,
      exp: 'Los enfoques formativos, sistémicos y restaurativos de la Ley 1620 y los nuevos Lineamientos Curriculares 2026 prohíben las sanciones de exclusión punitiva automáticas. Toda crisis de convivencia exige el despliegue de la Ruta de Atención Integral (RAI) centrándose en el análisis de contexto, la reparación del daño y la co-regulación emocional.'
    },
    {
      q: '¿Qué se entiende por "currículo oculto" al realizar el autodiagnóstico del "Termómetro de Urgencias" en la primera sesión?',
      opts: [
        'Los contenidos y planes de área impresos que el colegio archiva en la rectoría y no comparte con el Ministerio de Educación.',
        'El conjunto de aprendizajes, sesgos, normas implícitas, discursos diarios y dinámicas de poder que se transmiten de forma no declarada pero vivencial en la cotidianidad escolar, modelando las conductas éticas y afectivas del estudiante.',
        'El listado oficial de asignaturas optativas que los alumnos cursan exclusivamente en los entornos digitales y plataformas virtuales.',
        'El marco legal histórico que regula las asignaciones salariales y las funciones administrativas del estamento docente en Colombia.'
      ],
      c: 1,
      exp: 'El currículo oculto es lo que la escuela enseña a través de su arquitectura y sus relaciones diarias. Si un docente dicta una clase magistral sobre el respeto pero silencia autoritariamente la palabra de los alumnos, el estudiante interioriza la sumisión ante el poder (currículo oculto) por encima del concepto teórico escrito en el tablero.'
    }
  ]
});