/* ══════════════════════════════════════════════════════════
   M0 — Introducción y Contexto
   Lineamientos Curriculares MEN 2026
   Fuente: Capítulo 1 del documento oficial
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm0',
  num: 'Módulo 0',
  icon: '🧭',
  color: '#0C7A4A',
  bg: '#E6F6EE',
  titulo: 'Introducción y Contexto',
  subtitulo: 'Las raíces históricas, normativas y conceptuales de los lineamientos MEN 2026',
  duracion: '2 sesiones · 3 horas',
  descripcion: 'Comprendemos por qué Colombia construyó estos lineamientos, cuál es su marco legal y qué significa el concepto de "formación integral" en el siglo XXI.',
  sesiones: [
    {
      id: 's0_0',
      num: 'Sesión 1',
      titulo: '¿Por qué nuevos lineamientos? Historia y contexto',
      duracion: '90 min',
      tipo: 'Contexto histórico',
      objetivo: 'Comprender el proceso participativo y la evolución histórica que dieron origen a los Lineamientos Curriculares MEN 2026, reconociendo su anclaje en tres décadas de desarrollo normativo colombiano.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El punto de partida: 30 años de evolución',
          texto: `Los Lineamientos Curriculares para la Formación Ciudadana y el Desarrollo Socioemocional (MEN, 2026) son el resultado de <strong>tres décadas de evolución</strong> en la comprensión de qué significa educar integralmente en y para una sociedad democrática.

Colombia cuenta con uno de los marcos legales más avanzados de la región: dos décadas de experiencia desde los Estándares básicos de competencias ciudadanas (MEN, 2004) y una perspectiva <em>"glocal"</em> —que articula lo global con lo local— que proporciona doble legitimidad a estos lineamientos, situando al país en posición de liderazgo regional.

<blockquote>"La formación ciudadana no es una asignatura aislada, sino una responsabilidad compartida que atraviesa todas las áreas e instancias de la institución escolar." <cite>— MEN, 2004, p. 10</cite></blockquote>

El documento fue elaborado en 2026 mediante un proceso participativo con docentes, directivos, estudiantes, familias y comunidades en mesas territoriales realizadas en municipios de todo el país. Sus voces, experiencias y reflexiones fueron el corazón de este proceso.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Hitos normativos de la formación ciudadana en Colombia',
          tabla: {
            cabeceras: ['Año', 'Norma / Documento', 'Aporte clave'],
            filas: [
              ['1991', 'Constitución Política', 'Art. 67: educación forma en derechos humanos, paz y democracia. Art. 41: obligatoriedad del estudio constitucional.'],
              ['1994', 'Ley 115 (Ley General de Educación)', 'Define la formación integral en todas las dimensiones del ser. Art. 5: pleno desarrollo de la personalidad.'],
              ['1998', 'Lineamientos de Constitución y Ética', 'Primer marco para transformar hábitos y actitudes, más allá de contenidos institucionales.'],
              ['2004', 'Estándares Básicos de Competencias Ciudadanas', 'Salto cualitativo: competencias cognitivas, emocionales, comunicativas e integradoras. La dimensión emocional se vuelve explícita.'],
              ['2013', 'Ley 1620 (Convivencia Escolar)', 'Crea el Sistema Nacional de Convivencia. La convivencia es componente central de la formación integral.'],
              ['2014', 'Sentido de la Educación Inicial (MEN)', 'Bases socioemocionales desde la primera infancia: identidad, vínculos, participación.'],
              ['2014', 'Ley 1732 (Cátedra de la Paz)', 'Obligatoria en todas las instituciones: cultura de paz, sostenibilidad y bienestar general.'],
              ['2026', 'Lineamientos FC & DSE (este documento)', 'Integra formación ciudadana y desarrollo socioemocional como dimensiones inseparables. Modelo concéntrico: 7 CC + 7 CSE.'],
            ]
          }
        },
        {
          tipo: 'grafico',
          titulo: '3. La perspectiva "glocal": articulando lo global y lo local',
          subtitulo: 'Colombia dialoga con referentes internacionales desde su propia identidad',
          tipo_grafico: 'comparacion',
          datos: [
            { label: 'CASEL (EE.UU.)', valor: 'Marco SEL: identidades saludables, gestión emocional, empatía, decisiones responsables', color: '#4B5563' },
            { label: 'UNESCO', valor: 'Ciudadanía global, sostenibilidad, educación transformadora (ODS 4.7)', color: '#6366F1' },
            { label: 'Colombia MEN 2026', valor: 'Síntesis propia: 7 CC + 7 CSE, modelo concéntrico, enfoque territorial y de paz', color: '#0C7A4A' },
          ],
          nota: 'Colombia no copia modelos externos: los re-significa desde su historia, diversidad y contexto de posconflicto.'
        },
        {
          tipo: 'lectura',
          titulo: '4. ¿Qué son estos lineamientos y qué NO son?',
          texto: `Es fundamental comprender la naturaleza de este documento para usarlo correctamente:

<strong>SÍ son:</strong> Un marco común que orienta la construcción, el desarrollo y la actualización de los currículos en las instituciones educativas. Ofrecen criterios y principios para que las comunidades educativas ejerzan su <strong>autonomía curricular</strong> con responsabilidad.

<strong>NO son:</strong> Una prescripción rígida. No establecen un modelo o camino de construcción único. La escuela no es un implementador de lineamientos: es un <em>co-creador</em> situado en su territorio.

<blockquote>"La formación ciudadana y el desarrollo socioemocional se conciben como procesos vivos, situados y construidos colectivamente." <cite>— MEN, 2026, Presentación</cite></blockquote>

La invitación del MEN es apropiarse críticamente de estos lineamientos, reinterpretarlos desde los contextos propios y convertirlos en herramientas vivas para fortalecer prácticas pedagógicas incluyentes, participativas y humanizadoras.`
        }
      ],

      actividades: [
        {
          tipo: 'individual',
          titulo: 'Línea de tiempo personal',
          icono: '📅',
          instruccion: '¿Cuándo llegaste a la docencia? ¿Qué documentos del MEN conociste en tu formación? Ubica tu trayectoria docente en la línea de tiempo normativa de Colombia. ¿En qué momento histórico empezaste a enseñar? ¿Qué cambios has visto en la educación ciudadana?',
          tiempo: '15 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Análisis comparativo: antes y ahora',
          icono: '🔄',
          instruccion: 'En parejas: compara los Estándares de 2004 con los Lineamientos 2026. ¿Qué continuidades encuentras? ¿Qué es genuinamente nuevo? ¿Qué te genera más preguntas?',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: ¿Qué sabía y qué no sabía?',
          icono: '🪞',
          instruccion: 'Escribe en tu diario pedagógico: "Antes de esta sesión pensaba que los lineamientos eran... Ahora entiendo que... La pregunta que me queda es..."',
          tiempo: '10 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'Lineamientos Curriculares MEN 2026 — Documento completo', url: '#', meta: 'PDF oficial · 130 páginas' },
        { tipo: 'doc', titulo: 'Estándares Básicos de Competencias Ciudadanas (2004)', url: '#', meta: 'MEN · Documento de referencia histórica' },
        { tipo: 'web', titulo: 'Ley 1620 de 2013 — Convivencia Escolar', url: 'https://www.mineducacion.gov.co', meta: 'Marco normativo vigente' },
        { tipo: 'video', titulo: 'Historia de la educación ciudadana en Colombia', url: '#', meta: 'Serie documental MEN · 18 min' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál fue el hito normativo que convirtió las competencias emocionales en objeto explícito de enseñanza y evaluación en Colombia?',
            opciones: [
              'La Constitución Política de 1991',
              'Los Estándares Básicos de Competencias Ciudadanas (2004)',
              'La Ley 1620 de 2013',
              'Los Lineamientos MEN 2026'
            ],
            correcta: 1,
            explicacion: 'Los Estándares de 2004 representaron un salto cualitativo: definieron competencias emocionales como "habilidades para la identificación y respuesta constructiva ante las emociones propias y las de los demás", convirtiéndolas en objeto explícito de enseñanza.'
          },
          {
            pregunta: '¿Qué significa la perspectiva "glocal" de los Lineamientos 2026?',
            opciones: [
              'Que Colombia adoptó el modelo CASEL de EE.UU. para sus escuelas',
              'Que los lineamientos articulan lo global con lo local, ubicando a Colombia en liderazgo regional',
              'Que cada municipio puede construir sus propios lineamientos independientes',
              'Que los lineamientos aplican solo en contextos urbanos globalizados'
            ],
            correcta: 1,
            explicacion: 'La perspectiva "glocal" significa que Colombia dialoga con referentes internacionales (CASEL, UNESCO) pero los re-significa desde su propia historia, diversidad cultural y contexto de posconflicto, sin copiar modelos externos.'
          },
          {
            pregunta: '¿Qué NO son los Lineamientos Curriculares MEN 2026?',
            opciones: [
              'Un marco común que orienta la construcción del currículo institucional',
              'Una prescripción rígida que cada escuela debe implementar de manera uniforme',
              'Criterios y principios para el ejercicio de la autonomía curricular',
              'El resultado de un proceso participativo con comunidades educativas'
            ],
            correcta: 1,
            explicacion: 'Los lineamientos no prescriben un modelo único ni un camino de construcción uniforme. Ofrecen criterios para que cada comunidad educativa ejerza su autonomía con responsabilidad, adaptándose a su contexto territorial.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Qué conocías ya sobre los Lineamientos MEN 2026 antes de esta sesión? ¿Qué fue sorprendente?',
          '¿Cómo sitúas tu práctica docente actual en la línea de tiempo normativa que viste hoy?',
          '¿Cuál de los hitos normativos ha tenido más impacto real en tu práctica cotidiana? ¿Por qué?'
        ]
      }
    },

    {
      id: 's0_1',
      num: 'Sesión 2',
      titulo: 'El enfoque de competencias y la formación integral',
      duracion: '90 min',
      tipo: 'Marco conceptual',
      objetivo: 'Comprender qué son las competencias en el marco de estos lineamientos, cómo se articulan con la formación integral y por qué el enfoque socioemocional es inseparable del ciudadano.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. ¿Qué son las competencias en este marco?',
          texto: `El concepto de competencia en estos lineamientos va mucho más allá de "saber hacer". El documento asume las competencias como:

<blockquote>"La resolución de problemas, dado su uso en situaciones inéditas, la utilización del conocimiento en forma diferente a como fue aprendido, la integración de conocimiento de diferentes dominios y la combinación de conocimiento con habilidades de pensamiento de alto orden." <cite>— MEN, 2026, p. 31</cite></blockquote>

Las competencias en formación ciudadana y DSE tienen tres dimensiones interdependientes:
<ul>
<li><strong>Cognitiva:</strong> Comprender conceptos, analizar contextos, evaluar situaciones complejas.</li>
<li><strong>Socioemocional:</strong> Reconocer y gestionar emociones, empatizar, relacionarse éticamente.</li>
<li><strong>Ética y ciudadana:</strong> Actuar con responsabilidad, participar, transformar la vida colectiva.</li>
</ul>

Un sujeto competente en ciudadanía no solo <em>conoce</em> los derechos: los <em>ejerce</em>, los <em>defiende</em> y trabaja para que otros también los tengan. Eso requiere las tres dimensiones simultáneamente.`
        },
        {
          tipo: 'grafico',
          titulo: '2. Enfoques epistemológicos del Desarrollo Socioemocional',
          subtitulo: 'El DSE se fundamenta en seis perspectivas complementarias (MEN, 2026)',
          tipo_grafico: 'hexagono',
          datos: [
            { label: 'Procesual-Cognitivo', desc: 'El DSE como proceso de aprendizaje que puede enseñarse intencionalmente', color: '#3B82F6' },
            { label: 'Valorativo-Ético', desc: 'Las emociones como expresión de valores y compromisos morales', color: '#8B5CF6' },
            { label: 'Regulación Motivacional', desc: 'La capacidad de gestionar estados internos para alcanzar metas', color: '#EC4899' },
            { label: 'Político-Ciudadano', desc: 'Las emociones como base de la participación y la vida democrática', color: '#0C7A4A' },
            { label: 'Filosófico-Hermenéutico', desc: 'El sujeto que se comprende a sí mismo mediante el diálogo con el mundo', color: '#F59E0B' },
            { label: 'Decolonial', desc: 'Los saberes emocionales de comunidades indígenas, afro y campesinas como conocimiento legítimo', color: '#A84020' },
          ]
        },
        {
          tipo: 'tabla',
          titulo: '3. Enfoques de las Competencias Ciudadanas',
          tabla: {
            cabeceras: ['Enfoque', 'Qué enfatiza', 'Referentes clave'],
            filas: [
              ['Socioemocional', 'Las emociones como base del ejercicio ciudadano. Sin regulación emocional no hay participación responsable.', 'CASEL, Bisquerra, Damasio'],
              ['Ético-relacional', 'La ciudadanía como práctica de cuidado y responsabilidad hacia el otro. Ética del cuidado.', 'Gilligan, Noddings, Cortina'],
              ['Sociopolítico crítico', 'La ciudadanía como acción transformadora frente a las injusticias estructurales.', 'Apple, Fraser, Freire'],
              ['Ciudadanía global e intercultural', 'La responsabilidad planetaria, la diversidad cultural y la conciencia ecológica.', 'UNESCO, Torres, Boff'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '4. ¿Por qué el DSE y la FC son inseparables?',
          texto: `Una de las tesis más importantes del documento MEN 2026 es que la formación ciudadana y el desarrollo socioemocional <strong>no son dos áreas paralelas</strong>, sino dimensiones de un mismo proceso formativo.

<blockquote>"Las emociones constituyen la infraestructura invisible que sostiene o debilita la vida democrática: sin regulación emocional no hay diálogo real; sin empatía no hay reconocimiento del otro; sin resiliencia no hay reconstrucción del tejido social." <cite>— MEN, 2026</cite></blockquote>

Esto tiene implicaciones concretas para la práctica docente:

<strong>1. No se puede "enseñar convivencia" sin trabajar las emociones.</strong> Un estudiante que no puede regular su frustración no puede participar productivamente en un debate.

<strong>2. No se puede "enseñar emociones" en el vacío.</strong> La regulación emocional sin un horizonte ético y ciudadano se queda en psicología individualista.

<strong>3. El docente es el primer modelo.</strong> La manera en que el docente gestiona sus propias emociones, resuelve conflictos y participa democráticamente en la institución es el currículo oculto más poderoso que existe.`
        }
      ],

      actividades: [
        {
          tipo: 'individual',
          titulo: 'Auditoría de mi práctica',
          icono: '🔍',
          instruccion: 'Piensa en una clase que diste la semana pasada. ¿Qué dimensión trabajaste más: cognitiva, socioemocional o ética-ciudadana? ¿Cuál quedó implícita? ¿Cuál fue completamente ausente? No se trata de culpabilizarse, sino de ver con claridad.',
          tiempo: '15 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Los 6 enfoques del DSE en tu institución',
          icono: '🎯',
          instruccion: 'En grupos de 3: ¿Cuál de los 6 enfoques epistemológicos del DSE está más presente en las prácticas de tu institución? ¿Cuál está completamente ausente? ¿Cuál generaría más resistencia si lo propusieras? ¿Por qué?',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi currículo oculto',
          icono: '🪞',
          instruccion: 'Escribe en tu diario: "Las emociones que mis estudiantes aprenden de MÍ (no de lo que digo) son... Esto lo sé porque... Lo que quiero cambiar es..."',
          tiempo: '15 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 2.1: Fundamentos epistemológicos', url: '#', meta: 'Pp. 21–24 del documento' },
        { tipo: 'web', titulo: 'CASEL Framework — What is SEL?', url: 'https://casel.org/fundamentals-of-sel/', meta: 'Marco de referencia internacional' },
        { tipo: 'video', titulo: 'Daniel Goleman: El aprendizaje socioemocional en el aula', url: '#', meta: 'Conferencia · 22 min' },
        { tipo: 'libro', titulo: 'Bisquerra, R. (2009). Psicopedagogía de las emociones.', url: '#', meta: 'Síntesis — Cap. 1' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué plantea el enfoque decolonial del DSE?',
            opciones: [
              'Que los modelos emocionales de EE.UU. son superiores y deben adoptarse en Colombia',
              'Que los saberes emocionales de comunidades indígenas, afro y campesinas son conocimiento legítimo',
              'Que las emociones no deben estudiarse porque son conceptos occidentales',
              'Que cada región debe ignorar los referentes internacionales del DSE'
            ],
            correcta: 1,
            explicacion: 'El enfoque decolonial reconoce que existen saberes emocionales propios de las comunidades indígenas, afrodescendientes y campesinas de Colombia, que constituyen formas legítimas de conocimiento que deben integrarse en la educación.'
          },
          {
            pregunta: '¿Por qué el docente es descrito como "el primer modelo" en la formación ciudadana y socioemocional?',
            opciones: [
              'Porque el docente debe enseñar ciudadanía como una asignatura separada',
              'Porque la forma en que el docente gestiona emociones y participa democráticamente es el currículo oculto más poderoso',
              'Porque los estudiantes ignoran todo lo demás excepto al docente',
              'Porque el docente debe tener competencias ciudadanas perfectas antes de enseñarlas'
            ],
            correcta: 1,
            explicacion: 'El currículo oculto —lo que los estudiantes aprenden de cómo actúa el docente, no de lo que dice— es más potente que cualquier contenido explícito. El docente que regula sus emociones, escucha activamente y participa democráticamente modela estas competencias en cada clase.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Cuál de los 6 enfoques del DSE te resultó más nuevo o desafiante? ¿Por qué?',
          '¿Cómo cambia tu comprensión de "enseñar ciudadanía" después de esta sesión?',
          '¿Qué aspecto de tu "currículo oculto" quieres trabajar más conscientemente?'
        ]
      }
    }
  ]
});
