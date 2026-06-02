/* ══════════════════════════════════════════════════════════════════════════
   MÓDULO 6: EVALUACIÓN PARA LOS APRENDIZAJES (ESTRUCTURA INTEGRAL - MEN 2026)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof MODULOS === 'undefined') { var MODULOS = []; }

MODULOS.push({ 
  id: 'm6', 
  num: 'Módulo 6', 
  color: '#854F0B', 
  bg: '#FAEEDA', 
  icon: 'ti-chart-arrows-vertical',
  title: 'Evaluación para los Aprendizajes',
  sub: 'De la medición punitiva al acompañamiento dialógico: evaluar el ser para transformar las realidades escolares',
  
  // ── SESIONES / LABORATORIOS DE APRENDIZAJE ──────────────────────────────
  sesiones: [
    { 
      title: 'Sesión 1: Evaluación de Competencias — El Semáforo de la Nota', 
      tipo: 'Evaluación Formativa', 
      dur: '90 min',
      obj: [
        'Comprender la evaluación formativa de las capacidades socioemocionales como un proceso dialógico, ético, situado y continuo.',
        'Diseñar rúbricas analíticas descriptivas que visibilicen la progresión real del ser sin etiquetar las emociones.',
        'Identificar y mitigar los riesgos éticos de la asignación de calificaciones cuantitativas en el desarrollo socioemocional.'
      ],
      contenidos: [
        '<strong>La evaluación formativa auténtica:</strong> Un proceso transparente de retroalimentación constructiva que empodera al estudiante para reconocer sus fortalezas y áreas de mejora, alejándose de los esquemas tradicionales de castigo o control conductual.',
        '<strong>Los 8 aspectos clave de la evaluación (Salinas, 2025):</strong> Sentido ético, objetos claros, criterios públicos, actividades auténticas de campo, instrumentos diversos, retroalimentación dialógica horizontal, toma de decisiones oportunas y seguimiento sistémico.',
        '<strong>El peligro de la nota cuantitativa en el DSE:</strong> Calificar numéricamente la empatía, el autorreconocimiento o la resiliencia fomenta la simulación conductual (*performance*) por parte del alumno para salvar la nota, destruyendo la autenticidad del desarrollo moral.',
        '<strong>Tabla de Progresión Descriptiva vs. Calificación Cuantitativa:</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#FAEEDA; color:#854F0B"><th style="padding:6px; border:1px solid var(--border)">Enfoque Tradicional</th><th style="background:#DCFCE7; color:#15803D; padding:6px; border:1px solid var(--border)">Enfoque MEN 2026 (Salinas)</th><th style="padding:6px; border:1px solid var(--border)">Instrumento de Aula</th></tr><tr><td style="padding:6px; border:1px solid var(--border); color:var(--muted)">Nota numérica fija (Ej: "Sacó 3.5 en empatía").</td><td style="padding:6px; border:1px solid var(--border); font-weight:600; color:#15803D">Nivel descriptor de progresión cualitativa.</td><td style="padding:6px; border:1px solid var(--border)">Rúbrica analítica descriptiva (Explorando -> Liderando).</td></tr><tr><td style="padding:6px; border:1px solid var(--border); color:var(--muted)">Examen teórico acumulativo sobre conceptos.</td><td style="padding:6px; border:1px solid var(--border); font-weight:600; color:#15803D">Evaluación de desempeño en contextos auténticos.</td><td style="padding:6px; border:1px solid var(--border)">Portafolios de evidencias de aula, bitácoras y coevaluación de pares.</td></tr></table>'
      ],
      actividades: [
        '<strong>Taller de Dilemas Evaluativos "El Semáforo de la Nota":</strong> Analiza el siguiente caso crítico: <i>Un estudiante exhibe una excelente autorregulación en la entrega de sus trabajos y domina los conceptos ciudadanos teóricos en los exámenes, pero agrede verbalmente de forma reiterada a un compañero durante el recreo.</i> Diseña una estrategia de retroalimentación dialógica para intervenir el caso sin recurrir a la anulación cuantitativa de su nota académica.',
        '<strong>Diseño de Rúbrica de Progresión:</strong> Toma una de las dimensiones analizadas en los módulos 3 o 4 y estructura una rúbrica analítica basada exclusivamente en descriptores de comportamiento observables para el nivel escolar en el que trabajas.'
      ],
      recursos: [
        'Guía Técnica: "Pautas de Salinas (2025) para la Construcción de Instrumentos de Evaluación Dialógica"',
        'Lectura de Soporte: Black & Wiliam (1998). Assessment and classroom learning (Síntesis de hallazgos estructurales)'
      ],
      rq: 'Si en el boletín oficial de tu colegio se exige asignar una nota numérica al comportamiento o a las competencias socioemocionales, ¿qué acciones pedagógicas implementas para evitar que tus estudiantes simulen conductas deseables solo por incentivos externos?',
      aq: '¿Qué nivel de destreza consideras que posees para construir retroalimentaciones dialógicas escritas que motiven la autorreflexión de tus alumnos en lugar de emitir juicios morales?'
    },
    { 
      title: 'Sesión 2: Integración, Cierre y Proyección — Mi Manifiesto de Aula Transformadora', 
      tipo: 'Cierre y Metacognición Global', 
      dur: '120 min',
      obj: [
        'Sintetizar los aprendizajes conceptuales, epistémicos y didácticos abordados a lo largo de los 6 módulos del curso.',
        'Estructurar un Plan de Implementación Institucional y de Aula contextualizado en las normativas técnicas y legales colombianas.',
        'Asumir compromisos éticos públicos y explícitos para transformar la práctica pedagógica y los escenarios del currículo oculto.'
      ],
      contenidos: [
        '<strong>Revisión Sistémica Integrada:</strong> La articulación indisoluble entre el modelo concéntrico (Ejes A-D), las 14 competencias clave, las pedagogías críticas activas (Aprendizaje-Servicio) y la evaluación formativa.',
        '<strong>Coherencia de la Política Institucional:</strong> La necesidad imperativa de alinear las transformaciones curriculares de aula con la actualización del Proyecto Educativo Institucional (PEI), el Manual de Convivencia y el Sistema Institucional de Evaluación de los Estudiantes (SIEE).',
        '<strong>El Educador como Agente de Transformación Cultural:</strong> Comprender que el maestro no es un operario de contenidos centralizados, sino un intelectual de la pedagogía capaz de co-construir escenarios de paz, hospitalidad y co-regulación viva en el territorio.',
        '<strong>Esquema Técnico del Plan de Implementación Institucional:</strong><br><br><table style="width:100%; border-collapse:collapse; background:#fff; font-size:12px; border:1px solid var(--border)"><tr style="background:#FAEEDA; color:#854F0B"><th style="padding:6px; border:1px solid var(--border)">Fase de Proyección</th><th style="padding:6px; border:1px solid var(--border)">Eje Operativo (MEN 2026)</th><th style="padding:6px; border:1px solid var(--border)">Evidencia y Soporte de Gestión</th></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Fase 1: Aula Viva</td><td style="padding:6px; border:1px solid var(--border)">Unidades didácticas integradas con metodologías activas.</td><td style="padding:6px; border:1px solid var(--border)">Canvas de Diseño Curricular aplicados en las planeaciones semanales.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Fase 2: Convivencia Escolar</td><td style="padding:6px; border:1px solid var(--border)">Reformas restaurativas al Manual de Convivencia y el SIEE.</td><td style="padding:6px; border:1px solid var(--border)">Acta de radicado ante el Consejo Directivo y Académico.</td></tr><tr><td style="padding:6px; border:1px solid var(--border); font-weight:600">Fase 3: Alianza Territorial</td><td style="padding:6px; border:1px solid var(--border)">Proyectos transversales vinculados con actores del entorno.</td><td style="padding:6px; border:1px solid var(--border)">Portafolios del Diario Pedagógico como soporte técnico (Ley 2503).</td></tr></table>'
      ],
      actividades: [
        '<strong>Lienzo de Consolidación "Mi Manifiesto de Aula Transformadora":</strong> Revisa el historial de tus reflexiones guardadas en las estaciones del Diario Pedagógico. Compila las propuestas curriculares del Módulo 5 y los resguardos éticos analizados en las competencias socioemocionales para redactar tu documento final de compromisos pedagógicos.',
        '<strong>El Botón de Oro (Exportación):</strong> Utiliza el comando de la interfaz de la plataforma en la sección de Diario para imprimir o exportar tu bitácora integrada en formato PDF. Este insumo consolidará tu soporte técnico de cumplimiento transversal para la Cátedra de Educación Emocional ante las directivas de tu institución.'
      ],
      recursos: [
        'Documento Maestro de Cierre: Lineamientos Curriculares Nacionales para la Formación Integral (MEN 2026)',
        'Formato Ejecutivo de Gestión: Plantilla Oficial para el Plan de Ajuste al Manual de Convivencia y el SIEE'
      ],
      rq: 'Al llegar a la línea de cierre de este viaje de cirugía curricular profunda y autoformación, ¿en qué mutó o se reconfiguró tu comprensión de ti mismo/a como modelo de co-regulación emocional y promotor de la ciudadanía crítica en Colombia?',
      aq: '¿Qué tan listo/a, empoderado/a y respaldado/a técnicamente te sientes para liderar los debates de actualización curricular y los comités de convivencia dentro de tu comunidad educativa?'
    }
  ],
  
  // ── EVALUACIÓN FORMATIVA Y CONTROL DE PROGRESO (QUIZ) ──────────────────
  quiz: [
    {
      q: 'Al evaluar formativamente los aprendizajes en el desarrollo socioemocional y ciudadano (Módulo 6), ¿cuál enfoque metodológico cumple con el sentido ético planteado por Salinas (2025)?',
      opts: [
        'Estructurar una prueba escrita acumulativa de opción múltiple al término de cada período para calificar la memoria de los conceptos teóricos.',
        'Asignar una calificación cuantitativa del 1.0 al 5.0 en el boletín de notas oficial basándose en el nivel de obediencia, silencio y pasividad exhibido por el estudiante.',
        'Emplear de forma articulada instrumentos cualitativos descriptivos (como portafolios de evidencias, rúbricas de progresión, bitácoras y diarios de clase) orientados a retroalimentar los procesos individuales, identificar andamiajes didácticos y evitar etiquetar las emociones con notas de control.',
        'Eliminar por completo toda estrategia de seguimiento o monitoreo, bajo la premisa epistemológica de que las capacidades humanas del ser son imposibles de observar o retroalimentar.'
      ],
      c: 2,
      exp: 'El marco de Salinas (2025) y los Lineamientos del MEN prohíben el uso de la evaluación como un mecanismo punitivo o de control conductual cuantitativo. El DSE requiere una evaluación auténtica y formativa: se utilizan descriptores cualitativos de progresión y portafolios que visibilizan el avance real del alumno, sirviendo al docente para ajustar sus estrategias didácticas.'
    }
  ]
});