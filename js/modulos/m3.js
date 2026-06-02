/* ══════════════════════════════════════════════════════════════════════════
   MÓDULO 3: COMPETENCIAS CIUDADANAS (ESTRUCTURA INTEGRAL 7 CC - MEN 2026)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof MODULOS === 'undefined') { var MODULOS = []; }

MODULOS.push({ 
  id: 'm3', 
  num: 'Módulo 3', 
  color: '#185FA5', 
  bg: '#E6F1FB', 
  icon: 'ti-flag',
  title: 'Competencias Ciudadanas',
  sub: 'Siete capacidades esenciales para habitar, deliberar y transformar la democracia en el territorio',
  
  // ── SESIONES / LABORATORIOS DE APRENDIZAJE ──────────────────────────────
  sesiones: [
    { 
      title: 'Sesión 1: CC-1 y CC-2 — Convivencia, Reconciliación y Justicia Social', 
      tipo: 'Laboratorio Ciudadano A', 
      dur: '90 min',
      obj: [
        'Diferenciar e implementar enfoques restaurativos frente a la gestión punitiva tradicional de conflictos.',
        'Auditar materiales didácticos institucionales bajo el enfoque de la justicia curricular tridimensional.',
        'Estructurar guiones de comunicación asertiva para mitigar microagresiones o discursos excluyentes.'
      ],
      contenidos: [
        '<strong>Justicia Restaurativa Escolar (CC-1):</strong> Sustituir el paradigma del castigo automático por la reparación del daño al tejido comunitario, la reconstrucción de vínculos y los círculos de palabra basados en la memoria histórica.',
        '<strong>Justicia Curricular e Interseccionalidad (CC-2):</strong> Analizar cómo el plan de estudios explícito y oculto puede invisibilizar o estereotipar las realidades rurales, étnicas, de clase o de género en Colombia.',
        '<strong>Tabla Técnica de Aplicación de Choque en el Aula:</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#E6F1FB; color:#185FA5"><th style="padding:6px; border:1px solid var(--border)">Dimensión</th><th style="padding:6px; border:1px solid var(--border)">Enfoque MEN 2026</th><th style="padding:6px; border:1px solid var(--border)">Herramienta Práctica de Aula</th></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">CC-1: Convivencia</td><td style="padding:6px; border:1px solid var(--border)">Restaurativo y Memoria</td><td style="padding:6px; border:1px solid var(--border)">Script de Mediación de Crisis y círculos simétricos de palabra.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">CC-2: Justicia Social</td><td style="padding:6px; border:1px solid var(--border)">Interseccional y Crítico</td><td style="padding:6px; border:1px solid var(--border)">Reto "¿Quién falta en el libro?" para reescribir guías excluyentes.</td></tr></table>'
      ],
      actividades: [
        '<strong>Reto Curricular "¿Quién falta en el libro?":</strong> Toma una guía de aprendizaje o unidad didáctica que utilices con frecuencia. Aplica la rúbrica de justicia curricular de Apple y detecta qué voces o perspectivas (campesinas, afrodescendientes, liderazgos femeninos) están ausentes, diseñando un anexo de inclusión relámpago.',
        '<strong>Simulación de Círculo Restaurativo:</strong> Práctica de un script de mediación en parejas utilizando técnicas de Comunicación No Violenta para desarmar dinámicas de acoso o exclusión sistemática en el descanso.'
      ],
      recursos: [
        'Guía Metodológica: "Protocolos de Justicia Curricular y Flexibilización con Enfoque de Equidad"',
        'Compendio Pedagógico: Centro Nacional de Memoria Histórica (Extractos para Escuelas)'
      ],
      rq: 'Si revisas con rigor ético tus planeaciones actuales, ¿los contenidos y autores elegidos validan la diversidad de la Colombia profunda o reproducen un modelo centralizado y excluyente? ¿Qué anexo añadirás?',
      aq: '¿Qué tan seguro/a te sientes para moderar una asamblea de aula donde se deba reparar un daño relacional complejo sin recurrir a los reportes punitivos automáticos?'
    },
    { 
      title: 'Sesión 2: CC-3 y CC-4 — Participación Democrática y Competencia Histórica', 
      tipo: 'Laboratorio Ciudadano B', 
      dur: '90 min',
      obj: [
        'Romper con los esquemas de participación escolar decorativa para transitar hacia la deliberación vinculante.',
        'Aplicar los 6 conceptos clave del pensamiento histórico crítico en el análisis de problemáticas locales.',
        'Diseñar secuencias didácticas basadas en el contraste de evidencias y la multiperspectividad.'
      ],
      contenidos: [
        '<strong>Modelos de Ciudadanía Auténtica (CC-3):</strong> Superar al "ciudadano obediente" para formar al "ciudadano participativo y orientado a la justicia social" (Westheimer y Kahne) mediante asambleas reales.',
        '<strong>Pensamiento Histórico Crítico (CC-4):</strong> Utilizar la relevancia histórica, el análisis de fuentes primarias, las causas-consecuencias y la dimensión ética para comprender que el pasado es un campo abierto de interpretación.',
        '<strong>Tabla de Progresión Metodológica de Participación:</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#E6F1FB; color:#185FA5"><th style="padding:6px; border:1px solid var(--border)">Enfoque Tradicional</th><th style="background:#DCFCE7; color:#15803D; padding:6px; border:1px solid var(--border)">Enfoque MEN 2026</th><th style="padding:6px; border:1px solid var(--border)">Laboratorio de Aula</th></tr><tr><td style="padding:6px; border:1px solid var(--border); color:var(--muted)">Participación Decorativa</td><td style="padding:6px; border:1px solid var(--border); font-weight:600; color:#15803D">Deliberación Vinculante</td><td style="padding:6px; border:1px solid var(--border)">Simulador de Presupuestos Participativos del Aula.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); color:var(--muted)">Memorización de Fechas</td><td style="padding:6px; border:1px solid var(--border); font-weight:600; color:#15803D">Multiperspectividad Crítica</td><td style="padding:6px; border:1px solid var(--border)">Dinámica "A dos voces" (Contraste de testimonios opuestos).</td></tr></table>'
      ],
      actividades: [
        '<strong>Reto de Aula "Presupuestos Participativos":</strong> Diseña la estructura de una asamblea de aula real donde tus estudiantes tengan poder vinculante para decidir democráticamente la distribución del espacio físico, el uso de tiempos flexibles o el enfoque temático de un proyecto integrado.',
        '<strong>Ejercicio de Multiperspectividad "A dos voces":</strong> Estructura una actividad donde un conflicto comunitario o hito de la historia regional se investigue contrastando un archivo de prensa hegemónico frente a un testimonio oral de un habitante tradicional.'
      ],
      recursos: [
        'Plantilla de Control: "Estructura y Guía de Moderación para Asambleas Deliberativas Escolares"',
        'Kit de Herramientas: Los 6 Conceptos de Seixas y Morton para la Competencia Histórica'
      ],
      rq: '¿El Gobierno Estudiantil y el personero de tu institución tienen canales de incidencia real en las decisiones académicas del centro, o sus roles se han reducido al protocolo de las izadas de bandera? ¿Cómo los empoderarías?',
      aq: '¿Qué nivel de dominio posees para evaluar la capacidad de análisis de fuentes y evidencias de tus alumnos, más allá de la memoria de datos lineales?'
    },
    { 
      title: 'Sesión 3: CC-5, CC-6 y CC-7 — Diversidad, Eco-Sostenibilidad y Entornos Digitales', 
      tipo: 'Laboratorio Ciudadano C', 
      dur: '90 min',
      obj: [
        'Mapear y desmantelar microagresiones y sesgos culturales dentro del entorno de aprendizaje.',
        'Implementar el pensamiento sistémico para co-diseñar eco-auditorías de aula con impacto territorial.',
        'Estructurar protocolos de alfabetización mediática crítica para neutralizar la desinformación digital.'
      ],
      contenidos: [
        '<strong>Identidad y Reconocimiento Recíproco (CC-5):</strong> El aula concebida como un ecosistema donde todas las formas de ser se sienten plenamente seguras frente al racismo estructural y las violencias de género.',
        '<strong>Pensamiento Sistémico Socioecológico (CC-6):</strong> Superar el enfoque limitado del reciclaje folclórico. Comprender los ciclos extractivos, la megadiversidad regional y la interdependencia sistémica de los recursos.',
        '<strong>Ciudadanía Digital Crítica (CC-7):</strong> El ciberespacio interpretado como territorio político. Análisis de cámaras de eco, algoritmos de polarización, sesgos de confirmación y desinformación dirigida (fake news).'
      ],
      actividades: [
        '<strong>Reto de Choque "Eco-auditoría del Aula":</strong> Co-diseña con tus estudiantes una matriz para medir el desperdicio material, consumo energético o huella hídrica de tu salón de clases, obligándolos a proponer una reforma sistémica aplicable en la escuela.',
        '<strong>Taller de Alfabetización Mediática "Caza-Fake News":</strong> Implementación del protocolo crítico de 3 pasos (Rastreo de metadatos de imágenes, verificación de la cadena de financiación de la fuente y análisis de intencionalidad política) sobre una noticia viral en las redes sociales de los jóvenes.'
      ],
      recursos: [
        'Protocolo de 3 Pasos para la Verificación Mediática y Detección de Desinformación',
        'Ficha de Campo: Formato de Indicadores Sistémicos para la Eco-auditoría Escolar'
      ],
      rq: 'Tus estudiantes están expuestos a miles de impactos algorítmicos al día en sus pantallas. ¿Tu asignatura les ofrece herramientas analíticas para decodificar esos discursos o los está dejando a merced del sesgo y la polarización digital?',
      aq: '¿Qué tan capacitado/a te sientes para activar un protocolo de respuesta pedagógica inmediata ante comentarios excluyentes, racistas o discriminatorios en tus pasillos?'
    }
  ],
  
  // ── EVALUACIÓN FORMATIVA Y CONTROL DE PROGRESO (QUIZ) ──────────────────
  quiz: [
    {
      q: 'Al implementar el simulador de "Presupuestos Participativos" (CC-3) en el aula de clases, ¿cuál es la diferencia radical frente a los esquemas democráticos tradicionales decorativos?',
      opts: [
        'Que las votaciones se ejecutan de manera digital utilizando herramientas tecnológicas de punta.',
        'Que se les delega a los estudiantes autonomía, poder real de decisión vinculante y co-responsabilidad moral sobre un recurso o asunto genuino que impacta directamente la vida del grupo, rompiendo con la validación de agendas pre-diseñadas por adultos.',
        'Que solo se habilita la participación de aquellos alumnos que exhiben promedios académicos excelentes para proteger la coherencia del presupuesto.',
        'Que el docente mantiene el poder de veto absoluto sobre todas las decisiones deliberadas por el grupo para evitar errores organizativos.'
      ],
      c: 1,
      exp: 'La participación democrática auténtica requiere una transferencia real de poder y responsabilidad. Si los estudiantes solo eligen sobre opciones superficiales pre-masticadas por los directivos, se cae en participación decorativa, adiestrando en la sumisión en lugar de educar en la agencia ciudadana.'
    },
    {
      q: 'En el marco de la competencia histórica crítica (CC-4), ¿cuál es el propósito formativo de implementar la dinámica de multiperspectividad "A dos voces"?',
      opts: [
        'Memorizar de forma cronológica exacta las versiones oficiales contenidas en los textos estandarizados del Ministerio.',
        'Demostrar con rigor empírico cuál de las dos fuentes históricas es totalmente falsa para eliminarla del plan de estudios institucional.',
        'Enseñar a los estudiantes a interrogar el pasado mediante el contraste de evidencias de fuentes primarias, analizando las intencionalidades, contextos y sesgos políticos de los narradores para construir un pensamiento crítico presente.',
        'Reemplazar la enseñanza de la historia nacional por debates libres basados puramente en opiniones individuales sin soporte de datos.'
      ],
      c: 2,
      exp: 'El pensamiento histórico crítico concibe el pasado como un territorio en disputa. La multiperspectividad obliga al alumno a actuar como un investigador: analiza la evidencia, sopesa los contextos de producción del discurso y comprende que la historia se construye mediante el rigor crítico de la interpretación.'
    },
    {
      q: 'Si un docente desea aplicar con éxito el enfoque socioecológico sistémico (CC-6) de los Lineamientos 2026 frente a un problema de basura en el colegio, ¿qué acción metodológica representa este enfoque?',
      opts: [
        'Hacer una jornada de limpieza obligatoria los fines de semana donde los alumnos recojan los residuos sin mediación reflexiva.',
        'Estructurar una Eco-auditoría donde el grupo investigue de manera sistémica las cadenas de consumo del colegio, los intereses económicos de las contratas de alimentación, el desperdicio material del aula y su conexión con los vertederos regionales, proponiendo reformas estructurales al PEI.',
        'Poner contenedores de colores para reciclaje en los pasillos y calificar cuantitativamente a los salones que más botellas de plástico acumulen.',
        'Dictar una clase teórica magistral de dos horas sobre las definiciones abstractas del calentamiento global según los tratados internacionales.'
      ],
      c: 1,
      exp: 'El pensamiento sistémico ambiental va más allá de las conductas superficiales (como reciclar de forma aislada). Exige mapear la interdependencia: analizar causas estructurales, flujos de recursos, impactos territoriales e incentivar la intervención crítica sobre las dinámicas institucionales y comunitarias.'
    }
  ]
});