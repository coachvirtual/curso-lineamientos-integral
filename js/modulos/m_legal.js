/* ══════════════════════════════════════════════════════════
   M-LEGAL — Esto ES Ley en Colombia
   Módulo de apertura · Marco normativo 1991–2025
   Fuente: Capítulo 1, sección 1.2.1 (pp. 14–20),
           documento MEN 2026
   ══════════════════════════════════════════════════════════ */

MODULOS.unshift({
  id: 'm_legal',
  num: 'Módulo Introductorio',
  icon: '⚖️',
  color: '#1A1917',
  bg: '#F4F3EF',
  titulo: 'Esto ES Ley en Colombia',
  subtitulo: 'Por qué la formación ciudadana y socioemocional es una obligación jurídica, no una opción pedagógica',
  duracion: '1 sesión · 45 min',
  descripcion: 'Antes de hablar de pedagogía, hablamos de obligación. Colombia tiene uno de los marcos normativos más avanzados de América Latina en materia de formación ciudadana y desarrollo socioemocional. Este módulo muestra, artículo por artículo, qué exige la ley a cada institución educativa — y qué significa no cumplirla.',
  sesiones: [
    {
      id: 's_legal_0',
      num: 'Sesión única',
      titulo: '3 décadas de ley: lo que toda institución educativa está obligada a hacer',
      duracion: '45 min',
      tipo: 'Marco normativo',
      objetivo: 'Comprender el marco jurídico colombiano que fundamenta la formación ciudadana y el desarrollo socioemocional como ejes obligatorios y estructurales del currículo, reconociendo las leyes vigentes, sus mandatos concretos y las implicaciones para cada institución educativa.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El dato que muchos docentes no conocen',
          texto: `<div style="padding:1rem 1.25rem;background:#1A1917;border-radius:12px;color:#fff;margin-bottom:1.25rem;line-height:1.7">
<strong style="color:#F4C842;font-size:15px">Colombia tiene el marco legal más avanzado de América Latina en formación socioemocional.</strong><br><br>
No es una afirmación de autoayuda. Es una conclusión del propio documento MEN 2026, después de revisar 34 años de legislación acumulada: desde la Constitución de 1991 hasta las leyes sancionadas en 2025.<br><br>
El problema no es la ausencia de ley. El problema es que la mayoría de docentes e instituciones no saben qué dice esa ley, qué les exige concretamente, y qué significa ignorarla.
</div>

<p>La formación ciudadana y el desarrollo socioemocional constituyen un componente obligatorio y estructural del sistema educativo colombiano. No es posible formar ciudadanos/as activos/as sin desarrollar simultáneamente sus capacidades emocionales, relacionales y éticas.</p>

Este módulo existe para que esa afirmación deje de ser retórica y se convierta en <strong>argumento institucional concreto</strong>.`
        },
        {
          tipo: 'grafico',
          titulo: '2. La línea del tiempo normativa: 34 años construyendo la obligación',
          tipo_grafico: 'linea_tiempo',
          datos: [
            { anio: '1991', color: '#1A1917', label: 'Constitución Política', desc: 'Art. 67: La educación formará en respeto a los DDHH, la paz y la democracia. Art. 41: Instrucción cívica obligatoria en todas las instituciones.' },
            { anio: '1994', color: '#1A4FA0', label: 'Ley 115 — Ley General de Educación', desc: 'Art. 5: La educación atenderá todas las dimensiones del ser: física, psíquica, intelectual, moral, espiritual, social, afectiva, ética, cívica. La formación integral no es opcional.' },
            { anio: '2004', color: '#0C7A4A', label: 'Estándares de Competencias Ciudadanas', desc: 'El MEN define por primera vez las competencias emocionales como eje de la ciudadanía. "La formación ciudadana no es una asignatura aislada: es responsabilidad compartida de toda la institución."' },
            { anio: '2013', color: '#5A2E8A', label: 'Ley 1620 — Sistema Nacional de Convivencia', desc: 'Convivencia escolar = componente central de la formación integral. Obliga a desarrollar competencias ciudadanas y socioemocionales en todos los niveles.' },
            { anio: '2014', color: '#B35900', label: 'Ley 1732 — Cátedra de la Paz', desc: 'Obligatoria en todas las instituciones. Objetivo: crear espacio para el aprendizaje de cultura de paz, valores ciudadanos, DDHH y resolución pacífica de conflictos.' },
            { anio: '2024', color: '#993C1D', label: '🆕 Ley 2383 — Educación Socioemocional', desc: 'Define líneas de intervención para el fortalecimiento de la educación socioemocional en preescolar, básica y media. Establece que es eje formativo obligatorio — no acción complementaria.' },
            { anio: '2024', color: '#993C1D', label: '🆕 Ley 2414 — Convivencia y Habilidades Sociales', desc: 'Fortalece la convivencia escolar a través de habilidades sociales. Transforma la gestión emocional en la base de la paz en las aulas.' },
            { anio: '2025', color: '#C1121F', label: '🆕 Ley 2491 — DSE en el PEI', desc: 'OBLIGA a todas las instituciones a incorporar el DSE en el PEI con enfoque diferencial y territorial. Los programas socioemocionales son estrategia de salud mental en el entorno educativo.' },
            { anio: '2025', color: '#C1121F', label: '🆕 Ley 2503 — Cátedra de Educación Emocional', desc: 'Crea la Cátedra de Educación Emocional como proceso intencional y permanente. Integra salud mental con enfoque territorial. Toda la comunidad educativa (docentes, familias, directivos, personal administrativo) es modelo vivo.' },
          ]
        },
        {
          tipo: 'tabla',
          titulo: '3. Las 4 leyes 2024–2025: qué exige cada una a tu institución HOY',
          tabla: {
            cabeceras: ['Ley', 'Año', 'Qué obliga concretamente a la institución', 'Qué dice sobre los docentes'],
            filas: [
              ['Ley 2383', '2024', 'Implementar estrategias permanentes y articuladas de educación socioemocional desde preescolar hasta media. Promover pedagogía de la confianza, formación en valores, hábitos saludables y relaciones interpersonales respetuosas.', 'Formación permanente de los docentes en educación socioemocional. No es solo responsabilidad del psicólogo escolar.'],
              ['Ley 2414', '2024', 'Fortalecer la convivencia escolar a través de habilidades sociales explícitas. La gestión emocional debe ser la base de la paz en las aulas — no el reglamento disciplinario.', 'Los docentes son los primeros modeladores de habilidades sociales y convivencia. El currículo oculto del aula enseña más que las normas escritas.'],
              ['Ley 2491', '2025', 'Incorporar el componente de competencias socioemocionales en el PEI de forma expresa, con enfoque diferencial y territorial. Integración transversal en los procesos pedagógicos y curriculares. Los programas socioemocionales son estrategia de salud mental escolar.', 'Los docentes deben garantizar el DSE con enfoque territorial — no pueden usar los mismos materiales genéricos para todos los contextos.'],
              ['Ley 2503', '2025', 'Crear e implementar la Cátedra de Educación Emocional como proceso intencional y permanente (no como actividad ocasional). Integrar salud mental con enfoque territorial en el currículo. Involucrar a toda la comunidad educativa.', 'Toda la comunidad educativa — docentes, familias, directivos, personal administrativo — es modelo vivo de las competencias. El docente que gestiona mal sus emociones enseña desregulación, aunque explique perfectamente qué es la regulación.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '4. La pregunta incómoda: ¿qué pasa si no se cumple?',
          texto: `La normatividad colombiana en educación no tiene un mecanismo de sanción directa por no implementar CC y CSE de la misma forma que lo haría una multa de tránsito. Pero las consecuencias son reales y se expresan en tres dimensiones:

<strong>1. Inspección y vigilancia del MEN y las Secretarías de Educación</strong>
Las secretarías de educación tienen la facultad de revisar el PEI, los planes de estudio y las prácticas institucionales en el marco de las visitas de evaluación de la calidad. Una institución que no puede demostrar que tiene las CC y CSE integradas en su currículo está desalineada con los lineamientos obligatorios.

<strong>2. Evaluación de calidad institucional</strong>
Las guías de autoevaluación institucional del MEN (Índice de Inclusión, Evaluación Institucional) incluyen componentes de convivencia, ciudadanía y formación integral. Un colegio que puntúa bajo en estos componentes tiene un argumento débil ante su comunidad y ante el sistema.

<strong>3. Consecuencia ética y pedagógica real</strong>
El costo más alto no es administrativo: es humano. Las instituciones que no trabajan intencionalmente las CC y CSE producen entornos donde la violencia escolar, la exclusión, la apatía ciudadana y el deterioro de la salud mental de estudiantes y docentes son la norma. La investigación educativa colombiana e internacional muestra consistentemente que el clima escolar es el predictor más poderoso del bienestar y el aprendizaje.

<p>La coherencia entre el discurso y la práctica es condición indispensable para una educación transformadora.</p>`
        },
        {
          tipo: 'grafico',
          titulo: '5. Lo que la ley exige vs. lo que ocurre habitualmente: la brecha real',
          tipo_grafico: 'brecha',
          datos: [
            { label: 'Integración en el PEI', ley: 'La Ley 2491/2025 exige que el DSE esté en el PEI con criterios claros y enfoque territorial.', realidad: 'La mayoría de PEI tiene una mención genérica a la "formación integral" sin traducción curricular concreta.' },
            { label: 'Transversalidad curricular', ley: 'Las leyes 2383/2024 y 2503/2025 exigen integración transversal en todo el currículo — no solo en ética o cátedra de la paz.', realidad: 'En la mayoría de instituciones, las CC y CSE viven en proyectos aislados (semana de convivencia, proyecto de paz) sin articulación con las áreas.' },
            { label: 'Formación docente', ley: 'Ley 2383/2024: formación permanente de docentes en educación socioemocional. Ley 2503/2025: toda la comunidad educativa como modelo vivo.', realidad: 'La formación docente en CC y CSE es esporádica, muchas veces externa y sin seguimiento a la práctica.' },
            { label: 'Cátedra Emocional', ley: 'Ley 2503/2025: proceso intencional y permanente de conciencia, regulación y autonomía emocional.', realidad: 'En la mayoría de instituciones no existe una cátedra de educación emocional. El tema se aborda de forma reactiva (cuando hay crisis) no preventiva y sistemática.' },
          ]
        }
      ],

      actividades: [
        {
          tipo: 'individual',
          titulo: 'Diagnóstico legal de mi institución',
          icono: '🔍',
          instruccion: 'Responde estas 5 preguntas sobre tu institución: (1) ¿El PEI menciona explícitamente las CC y CSE con criterios curriculares concretos? (2) ¿Existe un espacio curricular formal y permanente para la educación emocional? (3) ¿Los docentes de todas las áreas trabajan intencionalmente CC y CSE o solo los de ética/cátedra de la paz? (4) ¿Hay formación docente en CC y CSE en el plan de desarrollo profesional? (5) ¿Los directivos conocen las leyes 2383, 2414, 2491 y 2503? Por cada "NO": esa es una brecha legal concreta que debe cerrarse.',
          tiempo: '10 min'
        },
        {
          tipo: 'grupal',
          titulo: 'El argumento legal: cómo usarlo con tu rector',
          icono: '💬',
          instruccion: 'En parejas, simulen la siguiente conversación: Persona A es el rector que quiere reducir el tiempo de ética para más matemáticas. Persona B es el docente que debe defender el espacio curricular de CC y CSE. Persona B solo puede usar argumentos basados en las leyes presentadas en esta sesión. Tienen 5 minutos. Luego invierten roles. ¿Qué argumentos resultaron más contundentes?',
          tiempo: '15 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Mi posición ante la obligación legal',
          icono: '🪞',
          instruccion: 'Escribe: "Antes de este módulo, cuando pensaba en la educación socioemocional, la veía como... Ahora que sé que es un mandato legal concreto, lo que cambia en mi perspectiva es... El primer argumento que usaré la próxima vez que en mi institución se cuestione el valor de este trabajo es..."',
          tiempo: '10 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'Ley 2503 de 2025 — Cátedra de Educación Emocional', url: 'https://www.funcionpublica.gov.co/', meta: 'Ley más reciente · Obligatoria desde 2025' },
        { tipo: 'doc', titulo: 'Ley 2491 de 2025 — DSE en el PEI', url: 'https://www.funcionpublica.gov.co/', meta: 'Integración transversal y enfoque territorial' },
        { tipo: 'doc', titulo: 'Ley 2383 de 2024 — Educación Socioemocional', url: 'https://www.funcionpublica.gov.co/', meta: 'Marco obligatorio desde 2024' },
        { tipo: 'doc', titulo: 'Ley 2414 de 2024 — Convivencia y Habilidades Sociales', url: 'https://www.funcionpublica.gov.co/', meta: 'Habilidades sociales como base de la paz escolar' },
        { tipo: 'doc', titulo: 'Ley 1620 de 2013 — Sistema Nacional de Convivencia Escolar', url: 'https://www.mineducacion.gov.co/', meta: 'Documento base de convivencia escolar' },
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 1.2.1: Fundamentos normativos (pp. 14–20)', url: '#', meta: 'Síntesis del marco legal completo' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión legal',
        preguntas: [
          {
            pregunta: '¿Qué estableció la Ley 2383 de 2024 respecto a la educación socioemocional en Colombia?',
            opciones: [
              'Creó una nueva asignatura opcional de "Educación Emocional" para los colegios que quisieran adoptarla',
              'Estableció que la educación socioemocional es un eje formativo obligatorio — no una acción complementaria — con estrategias permanentes y articuladas al proceso formativo',
              'Obligó a los colegios a contratar psicólogos escolares adicionales',
              'Definió las competencias socioemocionales como responsabilidad exclusiva del área de ética y valores'
            ],
            correcta: 1,
            explicacion: 'La Ley 2383 de 2024 fue un punto de quiebre: establece explícitamente que la educación socioemocional debe implementarse con estrategias permanentes y articuladas al proceso formativo, superando definitivamente la idea de que es una actividad complementaria o un proyecto puntual. Aplica a preescolar, básica y media, e incluye la formación permanente de docentes y familias.'
          },
          {
            pregunta: '¿Qué exige concretamente la Ley 2491 de 2025 a las instituciones educativas?',
            opciones: [
              'Crear un comité escolar de convivencia con representación estudiantil',
              'Incorporar las competencias socioemocionales en el PEI con enfoque diferencial y territorial, e integrarlas transversalmente en los procesos pedagógicos y curriculares',
              'Evaluar las competencias socioemocionales en las Pruebas Saber',
              'Aplicar pruebas de bienestar emocional a todos los estudiantes cada semestre'
            ],
            correcta: 1,
            explicacion: 'La Ley 2491 de 2025 tiene un mandato muy específico para el PEI: no basta con mencionar la formación integral en los principios institucionales — el DSE debe estar incorporado con criterios claros, enfoque diferencial y territorial. Además establece que los programas socioemocionales son una estrategia de promoción de la salud mental en el entorno educativo, articulando educación y salud pública.'
          },
          {
            pregunta: 'Una institución tiene un "Proyecto de Convivencia Sana" que realiza actividades especiales en octubre (mes de la paz). ¿Cumple con las leyes 2383/2024 y 2503/2025?',
            opciones: [
              'Sí, porque tiene un proyecto específico dedicado a la convivencia y la paz',
              'Sí, siempre que el proyecto incluya actividades para todos los grados',
              'No, porque ambas leyes exigen procesos intencionales y permanentes integrados transversalmente en el currículo — no actividades puntuales o proyectos ocasionales',
              'Depende de si el proyecto está aprobado por la Secretaría de Educación'
            ],
            correcta: 2,
            explicacion: 'Esta es la distinción más importante de este módulo: las leyes 2383 y 2503 son explícitas en exigir procesos permanentes e integrados transversalmente — no eventos. La Ley 2503 usa la expresión "proceso intencional y permanente" para la Cátedra de Educación Emocional. Un proyecto mensual puede ser un buen complemento, pero no reemplaza la integración curricular sistemática que exige la ley.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Conocías la existencia de las leyes 2383, 2414, 2491 y 2503 antes de este módulo? ¿Qué dice sobre la divulgación normativa en el sistema educativo colombiano?',
          '¿Cuál de los mandatos legales es el más difícil de implementar en tu institución específica? ¿Por qué?',
          '¿Cómo cambia tu posición en las reuniones de área o consejo académico ahora que tienes argumentos legales concretos para defender el trabajo en CC y CSE?'
        ]
      }
    }
  ]
});
