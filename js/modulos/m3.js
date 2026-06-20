/* ══════════════════════════════════════════════════════════
   M3 — Las 7 Competencias Ciudadanas (CC)
   Fuente: Capítulo 3 del documento MEN 2026
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm3',
  num: 'Módulo 3',
  icon: '🏛',
  color: '#1A4FA0',
  bg: '#E8EFFE',
  titulo: 'Las 7 Competencias Ciudadanas',
  subtitulo: 'Marco conceptual, aprendizajes esenciales e indicadores de desempeño',
  duracion: '7 sesiones · 10.5 horas',
  descripcion: 'Estudiamos en profundidad cada una de las 7 Competencias Ciudadanas definidas por el MEN 2026: su definición, sus dimensiones, sus aprendizajes esenciales por nivel educativo y sus indicadores de desempeño.',
  sesiones: [
    {
      id: 's3_0',
      num: 'Sesión 1',
      titulo: 'CC1 · Convivencia pacífica, reconciliación y construcción de paz',
      duracion: '90 min',
      tipo: 'CC-1',
      objetivo: 'Comprender la CC1 en su triple dimensión —paz positiva, reconciliación y cultura de paz— y diseñar estrategias pedagógicas contextualizadas para cada nivel educativo.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Definición desde el documento MEN 2026',
          texto: `La primera competencia ciudadana es la más demandante y la más urgente en el contexto colombiano. El documento la define así:

<p>La convivencia pacífica es la capacidad de relacionarse con los demás desde el reconocimiento mutuo, el diálogo y la construcción colaborativa de normas y acuerdos que permitan resolver los conflictos de manera no violenta. Implica el desarrollo de habilidades para el diálogo, la empatía, la cooperación y la gestión pacífica de los conflictos.</p>

Esta definición tiene tres dimensiones inseparables:
<ul>
<li><strong>Paz positiva:</strong> No es solo ausencia de violencia. Es presencia de justicia, dignidad y bienestar.</li>
<li><strong>Reconciliación:</strong> En el contexto del posconflicto colombiano, implica reconocer el daño, reparar y reconstruir vínculos.</li>
<li><strong>Cultura de paz:</strong> Transformación estructural de actitudes, valores y comportamientos que sustentan la violencia.</li>
</ul>`
        },
        {
          tipo: 'tabla',
          titulo: '2. Aprendizajes esenciales por nivel educativo',
          tabla: {
            cabeceras: ['Nivel', 'Aprendizaje esencial', 'Indicadores de desempeño'],
            filas: [
              ['Educación Inicial', 'Reconoce y expresa sus emociones de forma apropiada, y comienza a comprender las emociones de los demás en situaciones cotidianas.', '• Identifica cómo se siente usando palabras o gestos\n• Acepta la mediación del adulto en conflictos\n• Participa en acuerdos simples de convivencia'],
              ['Básica Primaria', 'Dialoga y coopera para resolver conflictos cotidianos, reconociendo que existen diferentes perspectivas válidas.', '• Usa el diálogo antes de reaccionar impulsivamente\n• Escucha sin interrumpir al otro\n• Propone soluciones que consideran las necesidades de ambas partes'],
              ['Básica Secundaria', 'Analiza críticamente situaciones de conflicto, identifica sus causas estructurales y aplica estrategias de mediación y transformación.', '• Distingue entre conflicto, violencia y agresión\n• Facilita procesos de mediación entre pares\n• Conecta conflictos cotidianos con estructuras sociales más amplias'],
              ['Educación Media', 'Diseña y lidera iniciativas de construcción de paz en su contexto, articulando memoria histórica, reconciliación y participación.', '• Implementa proyectos de convivencia con impacto comunitario\n• Conecta la historia del conflicto con su realidad actual\n• Actúa como agente de reconciliación en su entorno'],
            ]
          }
        },
        {
          tipo: 'grafico',
          titulo: '3. Del conflicto a la paz: el continuum formativo',
          tipo_grafico: 'escala',
          datos: [
            { label: 'Violencia directa', desc: 'Agresión física, verbal, simbólica. Eliminar o dañar al otro.', color: '#DC2626' },
            { label: 'Conflicto no gestionado', desc: 'Tensión latente que no se reconoce ni aborda. Silencio, evitación.', color: '#F97316' },
            { label: 'Gestión del conflicto', desc: 'Reconocer el conflicto, dialogar, buscar soluciones. Mediación.', color: '#F59E0B' },
            { label: 'Paz negativa', desc: 'Ausencia de violencia directa. Convivencia sin hostilidades abiertas.', color: '#84CC16' },
            { label: 'Paz positiva', desc: 'Justicia, reconocimiento, dignidad, vínculos genuinos. El horizonte formativo.', color: '#0C7A4A' },
          ],
          nota: 'La escuela que solo busca "paz negativa" (no peleas) no está formando ciudadanos para la paz. La meta es construir paz positiva.'
        },
        {
          tipo: 'lectura',
          titulo: '4. La CC1 en el contexto del posconflicto colombiano',
          texto: `Colombia ocupa un lugar único en el mundo: es un país que está construyendo paz después de más de 50 años de conflicto armado. Esto le da a la CC1 un peso específico que ningún otro país tiene igual.

El Acuerdo de Paz de 2016, en su punto 6 sobre "Implementación, verificación y refrendación", reconoció explícitamente el papel de la educación en la construcción de paz. No como agregado externo, sino como condición estructural.

<p>Las instituciones educativas son el primer escenario donde Colombia practica o no practica la paz. Cada conflicto entre estudiantes es una oportunidad pedagógica real.</p>

Esto implica que la gestión de conflictos en la escuela <strong>no es un problema disciplinario</strong>. Es una oportunidad de formación ciudadana de primer orden. El docente que castiga sin dialogar, que silencia sin escuchar, que expulsa sin incluir, está formando ciudadanos para la exclusión y la violencia.`
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Mapeo de conflictos institucionales',
          icono: '🗺️',
          instruccion: 'En grupos de 3: identifiquen 3 conflictos recurrentes en su institución. Para cada uno: ¿En qué punto del continuum paz-violencia están? ¿Cómo se gestionan actualmente? ¿Qué aprendizaje ciudadano podría surgir si se gestionaran pedagógicamente?',
          tiempo: '25 min'
        },
        {
          tipo: 'diseno',
          titulo: 'Protocolo de mediación escolar',
          icono: '✏️',
          instruccion: 'Diseña un protocolo de mediación de 5 pasos adaptado al nivel que enseñas. Debe ser realizable en 15 minutos durante una clase. Incluye qué dice el docente, qué hacen los estudiantes y cómo se cierra el proceso.',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi relación personal con el conflicto',
          icono: '🪞',
          instruccion: 'Escribe: "Mi reacción habitual cuando hay un conflicto en mi aula es... Esto enseña a mis estudiantes que el conflicto es... Lo que quiero que aprendan en cambio es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CC1: Convivencia pacífica (pp. 43-55)', url: '#', meta: 'Documento oficial' },
        { tipo: 'doc', titulo: 'Ley 1620/2013 — Sistema Nacional de Convivencia Escolar', url: 'https://www.mineducacion.gov.co', meta: 'Marco normativo vigente' },
        { tipo: 'video', titulo: 'Justicia restaurativa en la escuela colombiana', url: '#', meta: 'Serie MEN · 20 min' },
        { tipo: 'libro', titulo: 'Galtung, J. — Paz por medios pacíficos', url: '#', meta: 'Paz positiva vs negativa' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál es la diferencia entre "paz negativa" y "paz positiva"?',
            opciones: [
              'La paz negativa es falsa; la paz positiva es verdadera',
              'La paz negativa es la ausencia de violencia directa; la paz positiva es la presencia de justicia, dignidad y bienestar',
              'La paz negativa ocurre en el aula; la paz positiva ocurre en la sociedad',
              'La paz negativa es para primaria; la paz positiva es para secundaria'
            ],
            correcta: 1,
            explicacion: 'Galtung estableció esta distinción fundamental: la paz negativa es solo la ausencia de guerra o violencia. La paz positiva implica la presencia activa de condiciones de justicia, reconocimiento y bienestar. La escuela que solo evita peleas pero no construye vínculos genuinos produce paz negativa, no formación ciudadana.'
          },
          {
            pregunta: '¿Por qué el MEN 2026 dice que la gestión de conflictos escolares NO es un problema disciplinario?',
            opciones: [
              'Porque los conflictos no son importantes en el ambiente escolar',
              'Porque la disciplina es responsabilidad de los padres, no de la escuela',
              'Porque cada conflicto es una oportunidad de formación ciudadana real, donde se aprenden o no se aprenden las competencias de convivencia',
              'Porque el castigo disciplinario siempre resuelve los conflictos eficientemente'
            ],
            correcta: 2,
            explicacion: 'Los conflictos son situaciones auténticas donde las competencias ciudadanas se aprenden o se deforman. Un conflicto gestionado con mediación enseña diálogo, empatía y acuerdo. Un conflicto resuelto con castigo enseña que el poder impone y que quien tiene autoridad no necesita escuchar.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Recuerdas un conflicto escolar que se transformó en una experiencia formativa real? ¿Qué lo hizo posible?',
          '¿Tu institución tiene cultura de "paz negativa" o trabaja hacia la "paz positiva"? ¿Cómo lo sabes?',
          '¿Qué necesitarías para implementar un protocolo de mediación genuino en tu institución?'
        ]
      }
    },
    {
      id: 's3_1',
      num: 'Sesión 2',
      titulo: 'CC2 · Justicia social, equidad y reconocimiento de la diversidad',
      duracion: '90 min',
      tipo: 'CC-2',
      objetivo: 'Comprender la CC2 en sus dimensiones distributiva, reconocitiva y participativa, y analizar cómo opera la justicia e injusticia en los currículos y prácticas institucionales.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Definición y dimensiones',
          texto: `<p>La justicia social implica el reconocimiento de la dignidad de todas las personas, la redistribución equitativa de recursos y oportunidades, y la participación de todos en las decisiones que afectan su vida.</p>

El documento MEN adopta un concepto <strong>tridimensional de justicia</strong>, inspirado en Fraser (2009):
<ul>
<li><strong>Distributiva:</strong> Distribución equitativa de recursos materiales: acceso a la educación, la salud, la tecnología.</li>
<li><strong>Reconocitiva:</strong> Reconocimiento de identidades culturales, étnicas, de género y lingüísticas. Lucha contra el menosprecio cultural.</li>
<li><strong>Participativa:</strong> Acceso real a los espacios de decisión. No basta el derecho formal a participar; se necesita capacidad real de hacerlo.</li>
</ul>

En Colombia, las tres dimensiones tienen expresiones concretas: la brecha entre educación urbana y rural (distributiva), el racismo y la discriminación étnica (reconocitiva), y la exclusión de comunidades indígenas y afro de las decisiones educativas que las afectan (participativa).`
        },
        {
          tipo: 'tabla',
          titulo: '2. Aprendizajes esenciales por nivel educativo',
          tabla: {
            cabeceras: ['Nivel', 'Aprendizaje esencial', 'Indicadores de desempeño'],
            filas: [
              ['Educación Inicial', 'Reconoce que todas las personas merecen ser tratadas con respeto y que las diferencias enriquecen la vida en comunidad.', '• Incluye a compañeros diferentes en el juego\n• Rechaza el trato injusto con palabras simples\n• Celebra las diferencias como algo positivo'],
              ['Básica Primaria', 'Identifica situaciones de injusticia en su entorno cercano y propone acciones para transformarlas.', '• Distingue trato justo de trato injusto\n• Argumenta por qué las desigualdades dañan a todos\n• Propone acciones concretas de equidad en el aula'],
              ['Básica Secundaria', 'Analiza las causas estructurales de la desigualdad en Colombia y participa en acciones de justicia escolar y comunitaria.', '• Relaciona desigualdades personales con estructuras sociales\n• Cuestiona críticamente normas y prácticas que generan exclusión\n• Lidera iniciativas de equidad en la institución'],
              ['Educación Media', 'Diseña proyectos de transformación social que aborden desigualdades estructurales desde una perspectiva de justicia integral.', '• Analiza políticas públicas educativas con lente de equidad\n• Conecta justicia local con justicia global\n• Propone estrategias sistémicas de inclusión'],
            ]
          }
        },
        {
          tipo: 'grafico',
          titulo: '3. Las tres dimensiones de la justicia social',
          tipo_grafico: 'tres_circulos',
          datos: [
            { label: 'Distributiva', desc: 'Recursos, acceso, oportunidades iguales para todos', color: '#3B82F6' },
            { label: 'Reconocitiva', desc: 'Respeto e inclusión de todas las identidades y culturas', color: '#8B5CF6' },
            { label: 'Participativa', desc: 'Capacidad real de influir en las decisiones colectivas', color: '#EC4899' },
          ],
          nota: 'La justicia social plena requiere las tres dimensiones. Trabajar solo una es insuficiente.'
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Auditoría de justicia en mi institución',
          icono: '⚖️',
          instruccion: 'En grupos analicen su institución en las tres dimensiones: ¿Tienen todos los estudiantes igual acceso a materiales y espacios? ¿Están representadas todas las culturas e identidades? ¿Participan todos en las decisiones? ¿Dónde están las brechas más grandes?',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi currículo y la justicia',
          icono: '🪞',
          instruccion: 'Escribe: "En mi currículo, las culturas que están representadas son... Las que están ausentes son... Esto tiene el efecto de enseñar a mis estudiantes que... Lo que haré diferente es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CC2: Justicia social (pp. 56-68)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Fraser, N. (2009) — Escalas de justicia', url: '#', meta: 'Fundamento teórico de la CC2' },
        { tipo: 'doc', titulo: 'Decreto 1421/2017 — Educación inclusiva en Colombia', url: '#', meta: 'Marco normativo' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué es la dimensión "reconocitiva" de la justicia social?',
            opciones: [
              'El reconocimiento económico a los docentes por su trabajo',
              'El respeto e inclusión de todas las identidades culturales, étnicas y de género, luchando contra el menosprecio',
              'El reconocimiento académico a los mejores estudiantes',
              'Los premios y certificaciones que el Estado da a las instituciones'
            ],
            correcta: 1,
            explicacion: 'La justicia reconocitiva (Fraser, 2009) se refiere al reconocimiento de la dignidad e identidad de todos los grupos culturales. En Colombia, esto implica incluir activamente las perspectivas indígenas, afrodescendientes, campesinas y LGBTIQ+ en los currículos y prácticas institucionales.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Cuál de las tres dimensiones de justicia es más visible en tu trabajo cotidiano? ¿Cuál más invisible?',
          '¿Hubo algún momento en tu carrera docente en que reproduciste una injusticia sin darte cuenta?'
        ]
      }
    },
    {
      id: 's3_2',
      num: 'Sesión 3',
      titulo: 'CC3 · Participación democrática y ciudadanía activa',
      duracion: '90 min',
      tipo: 'CC-3',
      objetivo: 'Comprender la CC3 como práctica ética y política que va más allá del voto, y diseñar espacios reales de participación estudiantil en la institución.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Definición: participar es más que votar',
          texto: `<p>La participación democrática es la capacidad de involucrarse activa, crítica y responsablemente en los procesos de toma de decisiones que afectan la vida colectiva, desde los espacios cotidianos hasta las instituciones nacionales.</p>

Westheimer y Kahne (2004) identifican tres tipos de ciudadanos que la escuela puede formar:
<ul>
<li><strong>Ciudadano obediente:</strong> Cumple las normas, paga impuestos, vota. Participación mínima y formal.</li>
<li><strong>Ciudadano participativo:</strong> Se involucra activamente en organizaciones comunitarias y procesos colectivos.</li>
<li><strong>Ciudadano orientado a la justicia:</strong> Cuestiona las causas estructurales de los problemas, actúa para transformar el sistema.</li>
</ul>

Los Lineamientos MEN 2026 apuntan al tercer tipo: no basta participar; hay que hacerlo con conciencia crítica y orientación hacia la justicia.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Aprendizajes esenciales por nivel educativo',
          tabla: {
            cabeceras: ['Nivel', 'Aprendizaje esencial', 'Indicadores de desempeño'],
            filas: [
              ['Educación Inicial', 'Participa en la construcción de normas del grupo y expresa sus opiniones cuando se le invita a hacerlo.', '• Propone ideas en asambleas de aula\n• Vota y respeta resultados\n• Cumple los acuerdos que ayudó a construir'],
              ['Básica Primaria', 'Participa en espacios democráticos de la escuela (gobierno escolar) y argumenta sus posiciones con razones.', '• Vota en procesos reales con argumentos\n• Propone candidatos y programas concretos\n• Evalúa el cumplimiento de compromisos de los representantes'],
              ['Básica Secundaria', 'Lidera procesos participativos en la institución, analiza críticamente las decisiones que le afectan y propone alternativas fundamentadas.', '• Organiza asambleas para discutir problemas reales\n• Presenta propuestas ante directivos con argumentos\n• Evalúa participativamente políticas institucionales'],
              ['Educación Media', 'Diseña y lidera proyectos de participación comunitaria, articulando la escuela con su territorio y los mecanismos de participación ciudadana formales.', '• Usa mecanismos como derechos de petición y acciones populares\n• Vincula el gobierno escolar a procesos comunitarios\n• Conecta participación local con nacional y global'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: '¿Qué tipo de ciudadanos estamos formando?',
          icono: '🗳️',
          instruccion: 'Analicen su gobierno escolar: ¿Es real o decorativo? ¿Los estudiantes tienen poder de decisión real sobre algo? ¿Qué cambiaría si el gobierno escolar pudiera decidir sobre el presupuesto, el horario o el manual de convivencia? Propone 3 reformas concretas.',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi práctica participativa',
          icono: '🪞',
          instruccion: 'Escribe: "En mi aula, los estudiantes tienen poder real sobre... Lo que nunca pueden decidir es... El efecto que esto tiene en su formación ciudadana es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CC3: Participación democrática (pp. 69-80)', url: '#', meta: 'Documento oficial' },
        { tipo: 'lectura', titulo: 'Westheimer & Kahne (2004) — What kind of citizen?', url: '#', meta: 'Los 3 tipos de ciudadanos que forma la escuela' },
        { tipo: 'doc', titulo: 'Decreto 1860/1994 — Gobierno escolar en Colombia', url: '#', meta: 'Marco normativo' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál de los tres tipos de ciudadano de Westheimer y Kahne apuntan a formar los Lineamientos MEN 2026?',
            opciones: [
              'El ciudadano obediente que cumple las normas',
              'El ciudadano participativo en organizaciones',
              'El ciudadano orientado a la justicia que cuestiona causas estructurales y actúa para transformar',
              'Los tres por igual, sin distinción'
            ],
            correcta: 2,
            explicacion: 'Los lineamientos apuntan al ciudadano orientado a la justicia: no solo participa, sino que cuestiona críticamente las causas de los problemas y actúa para transformar estructuras injustas. Esto no excluye las otras dimensiones, pero las supera.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Qué tipo de ciudadano estás formando mayoritariamente en tu aula? ¿Cómo lo sabes?',
          '¿Qué poder real tienes tú como docente para transformar el gobierno escolar de tu institución?'
        ]
      }
    },
    {
      id: 's3_3',
      num: 'Sesión 4',
      titulo: 'CC4 · Pensamiento histórico y memoria colectiva',
      duracion: '90 min',
      tipo: 'CC-4',
      objetivo: 'Comprender cómo el pensamiento histórico y la memoria colectiva son competencias ciudadanas fundamentales, especialmente en el contexto del posconflicto colombiano.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La historia como competencia ciudadana',
          texto: `<p>La competencia histórica es la capacidad de comprender e interpretar el pasado para analizar críticamente el presente y proyectar futuros posibles, reconociendo la pluralidad de perspectivas y la complejidad de los procesos históricos.</p>

El documento integra dos dimensiones que en Colombia son inseparables:

<strong>Pensamiento histórico:</strong> Causalidad múltiple, perspectiva histórica, significancia, evidencia, continuidad y cambio (Seixas y Morton, 2013).

<strong>Memoria colectiva:</strong> La responsabilidad de preservar y transmitir las experiencias de los que sufrieron, especialmente en el contexto del conflicto armado colombiano. La Ley 1732/2014 (Cátedra de la Paz) es el marco normativo de este componente.

El CNMH (Centro Nacional de Memoria Histórica) ha desarrollado pedagogías específicas: <em>Caja de herramientas pedagógicas</em> (2015), <em>Guía para trabajar la memoria en el aula</em> (2020). Estas son referencias ineludibles para la CC4 en Colombia.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Los 6 conceptos del pensamiento histórico (Seixas y Morton, 2013)',
          tabla: {
            cabeceras: ['Concepto', 'Qué significa', 'Pregunta pedagógica'],
            filas: [
              ['Relevancia histórica', 'Por qué ciertos eventos importan más que otros en la comprensión del presente', '¿Por qué estudiamos esto y no algo más?'],
              ['Evidencia histórica', 'Cómo las fuentes primarias nos permiten reconstruir el pasado críticamente', '¿De dónde viene esta información? ¿Quién la produjo y por qué?'],
              ['Continuidad y cambio', 'Qué ha cambiado y qué permanece a través del tiempo', '¿Qué de este problema ya existía antes? ¿Qué es genuinamente nuevo?'],
              ['Causa y consecuencia', 'Cómo múltiples factores interactúan para producir eventos históricos', '¿Por qué pasó esto? ¿Solo hubo una causa?'],
              ['Perspectiva histórica', 'Comprender que las personas del pasado tenían perspectivas, valores y contextos diferentes', '¿Cómo vivieron este evento quienes lo experimentaron?'],
              ['Dimensión ética', 'La responsabilidad de juzgar el pasado con sensibilidad moral sin anacronismo', '¿Qué responsabilidad tenemos hoy frente a lo que ocurrió?'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Historia oral en mi comunidad',
          icono: '🎙️',
          instruccion: 'Diseñen en grupos un proyecto de historia oral: ¿A qué personas de la comunidad entrevistarían? ¿Qué preguntas harían? ¿Cómo usarían esos testimonios pedagógicamente? ¿Qué desafíos éticos anticipan (dolor, confidencialidad, revictimización)?',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi relación con la historia',
          icono: '🪞',
          instruccion: 'Escribe: "La historia que más evito o que me genera más incomodidad enseñar es... La evito porque... El efecto de esta evasión en mis estudiantes es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CC4: Pensamiento histórico (pp. 81-94)', url: '#', meta: 'Documento oficial' },
        { tipo: 'web', titulo: 'CNMH — Caja de herramientas pedagógicas', url: 'https://centrodememoriahistorica.gov.co', meta: 'Recursos pedagógicos para la memoria' },
        { tipo: 'doc', titulo: 'Ley 1732/2014 — Cátedra de la Paz', url: '#', meta: 'Marco normativo' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué es la "dimensión ética" del pensamiento histórico según Seixas y Morton?',
            opciones: [
              'Enseñar a los estudiantes que todos los actores históricos fueron malos',
              'La responsabilidad de juzgar el pasado con sensibilidad moral sin imponer valores del presente anacrónicamente',
              'Evitar hablar de temas dolorosos para no afectar emocionalmente a los estudiantes',
              'Estudiar solo la historia de los héroes y personajes positivos'
            ],
            correcta: 1,
            explicacion: 'La dimensión ética del pensamiento histórico implica poder hacer juicios morales sobre el pasado reconociendo la complejidad: juzgar sin anacronismo (sin imponer valores de hoy a contextos de ayer), pero sin relativizar las atrocidades ni evadir la responsabilidad presente.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿En tu institución se trabaja la memoria del conflicto colombiano? ¿Cómo y con qué efectos?',
          '¿Qué aspectos de la historia colombiana sientes que tienes que aprender más antes de enseñarlos?'
        ]
      }
    },
    {
      id: 's3_4',
      num: 'Sesión 5',
      titulo: 'CC5 · Diversidad, identidad e interculturalidad',
      duracion: '90 min',
      tipo: 'CC-5',
      objetivo: 'Comprender la CC5 como reconocimiento activo de la diversidad en todas sus formas, y analizar cómo la escuela puede ser un espacio de interculturalidad genuina.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Diversidad como fundamento democrático',
          texto: `<p>La diversidad no es un problema que resolver, sino una riqueza que explorar y un fundamento de la democracia. Aprender a convivir con la diferencia es aprender a ser humano.</p>

Colombia es un país <strong>pluriétnico y multicultural</strong> reconocido así desde la Constitución de 1991. Tiene:
<ul>
<li>115 pueblos indígenas reconocidos con 68 lenguas nativas.</li>
<li>Una significativa población afrocolombiana y raizal.</li>
<li>Diversidad de género, orientación sexual, capacidades, religiones y culturas regionales.</li>
</ul>

Sin embargo, la escuela colombiana históricamente ha funcionado como un dispositivo de <strong>homogeneización cultural</strong>: enseñanza en español únicamente, currículo basado en la cultura mestiza urbana, silenciamiento de saberes indígenas y afro.

Los Lineamientos 2026 proponen un giro: la escuela como espacio de <strong>interculturalidad crítica</strong> (Walsh, 2009), no solo como lugar de "tolerancia" de la diferencia, sino de reconocimiento activo y aprendizaje mutuo.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Tipos de respuesta escolar a la diversidad',
          tabla: {
            cabeceras: ['Respuesta', 'Qué hace la escuela', 'Efecto en los estudiantes'],
            filas: [
              ['Asimilacionismo', 'Ignora la diversidad. Todos deben adaptarse a la norma cultural dominante.', 'Los estudiantes "diferentes" aprenden que su identidad es un déficit.'],
              ['Folclorismo', 'Celebra la diversidad en fechas especiales (Día de la Afrocolombianidad). El resto del año, invisibilidad.', 'La diversidad es exótica, no cotidiana. No transforma el currículo.'],
              ['Multiculturalismo aditivo', 'Agrega contenidos sobre otras culturas sin cambiar la estructura del currículo.', 'La cultura dominante sigue siendo el estándar. Las demás son "añadidos".'],
              ['Interculturalidad crítica', 'Transforma el currículo desde múltiples perspectivas culturales. Cuestiona relaciones de poder.', 'Todos aprenden de todos. La diversidad enriquece a todos los estudiantes.'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'individual',
          titulo: '¿En cuál categoría está mi institución?',
          icono: '🔍',
          instruccion: 'Ubica honestamente tu institución en la tabla de tipos de respuesta a la diversidad. ¿Cuál evidencia tienes? ¿Qué cambio estructural (no cosmético) necesitaría para avanzar al siguiente nivel?',
          tiempo: '15 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi posición frente a la diversidad',
          icono: '🪞',
          instruccion: 'Escribe: "La diversidad que más me cuesta reconocer y trabajar pedagógicamente en mi aula es... Creo que esto se debe a... Una acción concreta que puedo hacer el próximo mes es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CC5: Diversidad e interculturalidad (pp. 95-106)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Walsh, C. (2009) — Interculturalidad crítica y educación', url: '#', meta: 'Referente teórico central' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál es la diferencia entre "folclorismo" e "interculturalidad crítica"?',
            opciones: [
              'El folclorismo es científico; la interculturalidad es artística',
              'El folclorismo celebra la diversidad superficialmente en fechas especiales sin transformar el currículo; la interculturalidad crítica transforma la estructura curricular desde múltiples perspectivas',
              'El folclorismo es para primaria; la interculturalidad es para media',
              'No hay diferencia real entre los dos enfoques'
            ],
            correcta: 1,
            explicacion: 'El folclorismo es la trampa más común: se cree que celebrar el Día de la Afrocolombianidad o hacer presentaciones culturales es suficiente. La interculturalidad crítica implica transformar el currículo, incluir otras epistemologías y cuestionar las relaciones de poder que producen la desigualdad cultural.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Cuántos de tus estudiantes pertenecen a grupos culturales cuyas perspectivas están ausentes de tu currículo?',
          '¿Qué sabes sobre los pueblos y culturas presentes en el territorio donde está tu institución?'
        ]
      }
    },
    {
      id: 's3_5',
      num: 'Sesión 6',
      titulo: 'CC6 · Sostenibilidad, pensamiento sistémico y cuidado ambiental',
      duracion: '90 min',
      tipo: 'CC-6',
      objetivo: 'Comprender la CC6 desde el pensamiento sistémico y la ética ambiental, articulándola con los ODS y con las realidades ambientales del territorio colombiano.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La tierra como sujeto de derechos',
          texto: `<p>La sostenibilidad no es una opción: es la condición de posibilidad de toda vida humana futura. La escuela que no forma para el cuidado del planeta forma ciudadanos para la autodestrucción.</p>

Colombia es el <strong>segundo país más biodiverso del mundo</strong>. Es también uno de los países más amenazados por el cambio climático y la deforestación. Esta paradoja pone a la educación ambiental en el centro de la formación ciudadana.

Los Lineamientos adoptan el <strong>pensamiento sistémico</strong> (Meadows, 2008) como enfoque: comprender que los sistemas ecológicos, sociales y económicos están interconectados y que las acciones tienen consecuencias no lineales.

También incorporan la perspectiva indígena del <strong>Buen Vivir</strong> (Sumak Kawsay): la tierra no es solo un recurso, sino un sujeto de derechos con quien los humanos tienen relaciones de reciprocidad y cuidado.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Aprendizajes esenciales por nivel educativo',
          tabla: {
            cabeceras: ['Nivel', 'Aprendizaje esencial', 'Indicadores de desempeño'],
            filas: [
              ['Educación Inicial', 'Muestra amor y cuidado por los seres vivos y el entorno natural cercano.', '• Cuida plantas y animales en el aula\n• Diferencia entre cuidar y dañar el medio\n• Participa en actividades de limpieza del entorno'],
              ['Básica Primaria', 'Comprende las relaciones entre acciones humanas y consecuencias ambientales, y adopta hábitos de cuidado ambiental.', '• Identifica cadenas de causa-efecto ambientales simples\n• Reduce, reutiliza y recicla con conciencia\n• Explica por qué las acciones individuales importan'],
              ['Básica Secundaria', 'Analiza problemáticas ambientales locales desde el pensamiento sistémico y participa en proyectos de transformación.', '• Mapea problemas ambientales del territorio\n• Propone soluciones sistémicas, no solo paliativas\n• Articula justicia ambiental con justicia social'],
              ['Educación Media', 'Diseña proyectos de sostenibilidad territorial integrando perspectivas indígenas, científicas y comunitarias.', '• Articula saberes ancestrales con conocimiento científico\n• Conecta ODS con realidades locales\n• Lidera iniciativas de transformación ambiental'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Mapa ambiental de mi territorio escolar',
          icono: '🗺️',
          instruccion: 'Identifiquen los 3 principales problemas ambientales del territorio donde está su institución. Para cada uno: ¿Cuáles son sus causas sistémicas? ¿Quiénes son los actores responsables? ¿Qué puede hacer la escuela? Recuerden: no solo el reciclaje.',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi relación personal con la naturaleza',
          icono: '🪞',
          instruccion: 'Escribe: "Mi relación personal con la naturaleza es... La forma en que vivo esto (o no lo vivo) se transmite a mis estudiantes cuando... El cambio más urgente que puedo hacer es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CC6: Sostenibilidad (pp. 107-119)', url: '#', meta: 'Documento oficial' },
        { tipo: 'web', titulo: 'ODS 4.7 — Educación para el desarrollo sostenible', url: 'https://sdgs.un.org', meta: 'Marco internacional' },
        { tipo: 'libro', titulo: 'Meadows, D. (2008) — Thinking in systems', url: '#', meta: 'Pensamiento sistémico aplicado' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué aporta el concepto del Buen Vivir (Sumak Kawsay) a la educación ambiental?',
            opciones: [
              'Que la naturaleza es un recurso que debe administrarse eficientemente',
              'Que la tierra es un sujeto de derechos con quien los humanos tienen relaciones de reciprocidad y cuidado, no de explotación',
              'Que los estudiantes indígenas aprenden más fácilmente los temas ambientales',
              'Que la tecnología verde es la solución a todos los problemas ambientales'
            ],
            correcta: 1,
            explicacion: 'El Buen Vivir o Sumak Kawsay es una perspectiva epistemológica indígena que ve a la tierra como un ser vivo con quien los humanos tienen una relación de reciprocidad, no de dominación. Esta perspectiva transforma radicalmente la educación ambiental: de "cuidar los recursos" a "vivir bien con la tierra".'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Tu PRAE (Proyecto Ambiental Escolar) aborda causas sistémicas o solo síntomas?',
          '¿Hay saberes ambientales de comunidades locales que podrías integrar en tu práctica?'
        ]
      }
    },
    {
      id: 's3_6',
      num: 'Sesión 7',
      titulo: 'CC7 · Ciudadanía digital y alfabetización mediática crítica',
      duracion: '90 min',
      tipo: 'CC-7',
      objetivo: 'Comprender la CC7 como dimensión inseparable de la ciudadanía contemporánea, y desarrollar estrategias pedagógicas para la alfabetización mediática crítica.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La ciudadanía en el mundo digital',
          texto: `<p>La ciudadanía digital no es una opción pedagógica: es una necesidad ineludible en un mundo donde las identidades, las relaciones y el poder se configuran también en entornos virtuales.</p>

Colombia tiene hoy <strong>más de 38 millones de usuarios de internet</strong>. Los jóvenes colombianos pasan en promedio 7 horas diarias frente a pantallas. Sin embargo, menos del 30% tiene habilidades básicas de verificación de información.

El documento MEN adopta el marco de <strong>alfabetización mediática e informacional</strong> (UNESCO, 2011) que incluye:
<ul>
<li><strong>Acceso:</strong> Capacidad técnica de navegar y usar plataformas digitales.</li>
<li><strong>Comprensión:</strong> Entender cómo funcionan los algoritmos y qué intereses tienen.</li>
<li><strong>Evaluación:</strong> Capacidad de verificar información, identificar desinformación y sesgos.</li>
<li><strong>Creación:</strong> Producir contenido responsable, ético y transformador.</li>
<li><strong>Participación:</strong> Usar lo digital para organizarse, deliberar y actuar ciudadanamente.</li>
</ul>`
        },
        {
          tipo: 'tabla',
          titulo: '2. Aprendizajes esenciales por nivel educativo',
          tabla: {
            cabeceras: ['Nivel', 'Aprendizaje esencial', 'Indicadores de desempeño'],
            filas: [
              ['Educación Inicial', 'Reconoce que las pantallas y dispositivos son herramientas y aprende a usarlos de forma segura con acompañamiento adulto.', '• Diferencia tipos de contenidos (juego, información, publicidad)\n• Pide ayuda cuando algo le parece extraño o perturbador'],
              ['Básica Primaria', 'Usa la tecnología de forma segura y responsable, identificando información confiable de la no confiable.', '• Verifica información en al menos 2 fuentes\n• Identifica publicidad disfrazada de contenido\n• Practica la netiqueta básica'],
              ['Básica Secundaria', 'Analiza críticamente los medios y las redes sociales, identifica estrategias de desinformación y ejerce ciudadanía digital activa.', '• Descompone noticias falsas identificando sus estrategias\n• Analiza algoritmos y cámaras de eco\n• Participa constructivamente en espacios digitales'],
              ['Educación Media', 'Usa las plataformas digitales como espacios de participación ciudadana y organización colectiva, con responsabilidad ética.', '• Usa herramientas digitales para incidencia política\n• Lidera campañas de verificación de información\n• Diseña contenidos que promuevan justicia social'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Verificación de una noticia falsa reciente',
          icono: '🔎',
          instruccion: 'En grupos, elijan una noticia falsa reciente que haya circulado en Colombia. Descompónganla: ¿Qué estrategia usa para engañar? ¿A qué emociones apela? ¿Quién la produjo y con qué objetivo? Diseñen una actividad de 20 minutos para enseñar esto en el grado que enseñan.',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi ciudadanía digital personal',
          icono: '🪞',
          instruccion: 'Escribe honestamente: "Mis hábitos digitales (qué consumo, qué comparto, cómo interactúo en redes) muestran que soy un ciudadano digital que... Lo que quiero cambiar es... Y lo primero que haré es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CC7: Ciudadanía digital (pp. 120-132)', url: '#', meta: 'Documento oficial' },
        { tipo: 'web', titulo: 'UNESCO — Media and Information Literacy', url: 'https://en.unesco.org/themes/media-and-information-literacy', meta: 'Marco internacional AMI' },
        { tipo: 'web', titulo: 'Colombia Check — Verificación de noticias', url: 'https://colombiacheck.com', meta: 'Recurso práctico para el aula' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Por qué la ciudadanía digital es inseparable de la formación ciudadana general según los Lineamientos 2026?',
            opciones: [
              'Porque los jóvenes de hoy prefieren aprender en pantallas',
              'Porque las identidades, relaciones y el poder se configuran también en entornos digitales, y quien no navega críticamente no puede ejercer ciudadanía plena',
              'Porque el MEN quiere modernizar el currículo con tecnología',
              'Porque los empleadores exigen habilidades digitales'
            ],
            correcta: 1,
            explicacion: 'La ciudadanía digital es inseparable porque hoy los espacios de participación, organización y construcción de identidad son también digitales. Quien no puede navegar críticamente los medios digitales es vulnerable a la manipulación y no puede participar plenamente en la vida democrática contemporánea.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Cuál de las 5 dimensiones de la alfabetización mediática (acceso, comprensión, evaluación, creación, participación) está más ausente en tu práctica?',
          '¿Cómo cambiaría tu uso de redes sociales si aplicaras los criterios de ciudadanía digital que enseñas?'
        ]
      }
    }
  ]
});
