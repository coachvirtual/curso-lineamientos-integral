/* ══════════════════════════════════════════════════════════
   M8 — Implementación en el PEI y en la Institución
   Fuente: Capítulo 3, secciones 3.1 y 3.2 (pp. 90–109) y
           Marco normativo (pp. 13–20) del documento MEN 2026
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm8',
  num: 'Módulo 8',
  icon: '🏫',
  color: '#0C447C',
  bg: '#E6F1FB',
  titulo: 'Implementación en el PEI',
  subtitulo: 'Del diagnóstico curricular a la transformación institucional real',
  duracion: '2 sesiones · 3 horas',
  descripcion: 'El último módulo del curso acompaña la transición del saber al hacer institucional. Aquí respondemos la pregunta más difícil: ¿cómo se traduce todo este marco en decisiones curriculares concretas dentro del PEI de mi institución?',
  sesiones: [
    {
      id: 's8_0',
      num: 'Sesión 1',
      titulo: 'El PEI como escenario de transformación: diagnóstico y punto de partida',
      duracion: '90 min',
      tipo: 'Diagnóstico institucional',
      objetivo: 'Comprender el rol del PEI como marco orientador del currículo en CC y CSE, e identificar con rigor el estado actual de la institución como punto de partida para la transformación.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El PEI y el currículo: quién orienta a quién',
          texto: `El documento MEN 2026 establece una relación clara entre el PEI y el currículo que muchas instituciones tienen invertida:

<p>El PEI constituye el marco orientador del currículo: no es el currículo el que antecede al PEI, sino que el currículo concreta pedagógicamente las definiciones formativas, filosóficas y normativas que el PEI establece.</p>

Esto significa que antes de preguntarse qué actividad hago para trabajar convivencia o qué proyecto de ciudadanía implemento, la institución debe hacerse preguntas de fondo:

<ul>
<li>¿Cómo está conceptualizada la ciudadanía y el desarrollo socioemocional en nuestro PEI?</li>
<li>¿Qué visión del sujeto, del otro, de la sociedad y del mundo orienta nuestro currículo actual?</li>
<li>¿En qué medida el currículo incorpora las 8 dimensiones del ser humano como base del desarrollo ciudadano y socioemocional?</li>
<li>¿Cómo integramos la FC y el DSE más allá del aula, en la vida institucional completa?</li>
</ul>

Sin respuestas explícitas a estas preguntas en el PEI, la implementación de CC y CSE queda reducida a actividades aisladas sin coherencia institucional.`
        },
        {
          tipo: 'lectura',
          titulo: '2. La autonomía escolar: libertad con responsabilidad',
          texto: `El MEN 2026 reafirma la autonomía curricular reconocida en la Ley 115 de 1994, pero la enmarca en una responsabilidad clara:

<p>Estos lineamientos no prescriben un modelo o un camino de construcción único, sino que ofrecen criterios y principios para que las comunidades educativas ejerzan su autonomía curricular con responsabilidad y sentido de pertenencia.</p>

La autonomía no es discrecionalidad absoluta. Significa que cada institución:
<ul>
<li>Puede y debe <strong>contextualizar</strong> el marco nacional en su realidad territorial, cultural e histórica.</li>
<li>Debe garantizar <strong>coherencia</strong> entre PEI, currículo, progresión de aprendizajes e instrumentos de evaluación.</li>
<li>Es responsable de que las CC y CSE no queden solo en proyectos transversales ocasionales sino que <strong>permeen la vida institucional completa</strong>.</li>
</ul>

<p>La formación ciudadana y el desarrollo socioemocional se conciben como procesos vivos, situados y construidos colectivamente.</p>`
        },
        {
          tipo: 'tabla',
          titulo: '3. El ciclo institucional de transformación curricular (MEN 2026)',
          tabla: {
            cabeceras: ['Fase', 'Qué implica', 'Preguntas clave', 'Quiénes participan'],
            filas: [
              ['1. Diagnóstico', 'Reconocer con honestidad el estado actual: qué se hace, qué se dice que se hace, y la brecha entre los dos.', '¿Cómo se trabajan actualmente las CC y CSE? ¿En qué proyectos, áreas o espacios? ¿Con qué coherencia y continuidad?', 'Docentes de todos los niveles, directivos, orientadores, algunos estudiantes y familias.'],
              ['2. Acción', 'Diseñar e implementar cambios curriculares concretos: revisión del PEI, rediseño de planes de estudio, formación docente, nuevas prácticas.', '¿Qué cambios son prioritarios según el diagnóstico? ¿Cuáles son realizables en este semestre? ¿Qué recursos necesitamos?', 'Equipo de gestión curricular, docentes líderes, orientación escolar.'],
              ['3. Análisis', 'Observar y reflexionar sobre los efectos de los cambios implementados. La evaluación formativa como herramienta de revisión institucional.', '¿Qué está funcionando? ¿Qué evidencias tenemos de transformación real? ¿Qué obstáculos persisten?', 'Todos los actores institucionales. Los estudiantes como evaluadores clave.'],
              ['4. Actualización', 'Ajustar el currículo, el PEI y las prácticas con base en los aprendizajes del ciclo. La transformación curricular es continua, no puntual.', '¿Qué ajustes deben incorporarse al PEI? ¿Qué nuevas capacidades necesitan desarrollar los docentes?', 'Consejo Directivo, consejo académico, docentes, familias.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '4. Lo que la Ley 2491/2025 le exige concretamente a cada institución',
          texto: `La Ley 2491 de 2025 es la más reciente y la más exigente en términos de implementación institucional. Establece:

<ul>
<li>Las instituciones educativas deben <strong>garantizar el desarrollo socioemocional con enfoque diferencial y territorial</strong> — no como programa opcional sino como componente del PEI.</li>
<li>Los programas socioemocionales representan una <strong>estrategia de promoción de la salud mental</strong> en el entorno educativo.</li>
<li>La formación en CC y CSE debe ser <strong>transversal a todo el currículo</strong> — vinculando docentes, directivos, familias y personal administrativo como modelos vivos de estas competencias.</li>
</ul>

Esto tiene una implicación concreta: <strong>no cumple la ley</strong> la institución que tiene un "proyecto de convivencia" anual y cree que con eso basta. La ley exige <em>integración sistemática y permanente en el PEI</em>.`
        }
      ],

      actividades: [
        {
          tipo: 'individual',
          titulo: 'Diagnóstico rápido de mi institución',
          icono: '🩺',
          instruccion: 'Responde honestamente estas 5 preguntas sobre tu institución (1=Nunca, 5=Siempre): (1) Las CC y CSE están explícitas en el PEI con criterios claros. (2) Los docentes de distintos grados coordinamos el trabajo en CC y CSE. (3) Los estudiantes tienen espacios reales de participación democrática (no solo nominal). (4) Los conflictos escolares se resuelven con metodologías de justicia restaurativa. (5) Evaluamos CC y CSE con evidencias auténticas (no solo comportamiento). Suma tu puntaje y reflexiona.',
          tiempo: '15 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Mapa de la situación institucional real',
          icono: '🗺️',
          instruccion: 'En grupos de 4-5 (de la misma institución si es posible): Dibujen un mapa de cómo viven actualmente las CC y CSE en su institución. Ubiquen: ¿dónde existen? ¿dónde están ausentes? ¿cuáles son las tensiones? ¿qué actores facilitan y cuáles obstaculizan? Sin filtros ni autocensura — esto es diagnóstico, no informe.',
          tiempo: '30 min'
        },
        {
          tipo: 'diseno',
          titulo: 'Tres preguntas para el PEI',
          icono: '📄',
          instruccion: 'Redacta tres preguntas reflexivas que llevarías a tu consejo directivo o a tu equipo docente sobre cómo el PEI está (o no está) incorporando las CC y CSE. Las preguntas deben ser lo suficientemente incómodas como para generar conversación real, pero lo suficientemente respetuosas como para no generar defensas.',
          tiempo: '20 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 3.2: Diseño curricular (pp. 98–103)', url: '#', meta: 'Documento oficial — fundamento del PEI' },
        { tipo: 'doc', titulo: 'Ley 2491 de 2025 — Integración transversal del DSE en el PEI', url: '#', meta: 'Marco normativo obligatorio' },
        { tipo: 'doc', titulo: 'Ley 115 de 1994 — Art. 73: El Proyecto Educativo Institucional', url: '#', meta: 'Base legal del PEI' },
        { tipo: 'libro', titulo: 'Santos Guerra, M.A. — La escuela que aprende', url: '#', meta: 'La institución educativa como comunidad reflexiva' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: 'Según el MEN 2026, ¿cuál es la relación correcta entre el PEI y el currículo en materia de CC y CSE?',
            opciones: [
              'El currículo define los contenidos y el PEI los aprueba formalmente',
              'Son documentos separados: el PEI describe la misión institucional y el currículo los contenidos académicos, sin relación directa',
              'El PEI es el marco orientador que define la visión de sujeto, sociedad y conocimiento; el currículo concreta pedagógicamente esas definiciones — no al revés',
              'El MEN define el PEI y las instituciones definen el currículo libremente'
            ],
            correcta: 2,
            explicacion: 'El PEI no es un trámite administrativo: es la declaración de sentido de la institución. Define qué ser humano quiere formar, qué visión de sociedad tiene, qué valores priorizará. El currículo es la traducción pedagógica de esas definiciones. Si el PEI dice que forma para la paz y la democracia, el currículo debe tener las CC y CSE como ejes reales, no opcionales.'
          },
          {
            pregunta: 'Una institución tiene un "Proyecto de Convivencia Escolar" que se realiza cada mes de octubre. ¿Cumple con la Ley 2491 de 2025?',
            opciones: [
              'Sí, porque tiene un proyecto específico para la convivencia',
              'Sí, si el proyecto incluye actividades para todos los grados',
              'No, porque la ley exige integración transversal y permanente en el PEI — no proyectos ocasionales',
              'Depende del tamaño de la institución y del municipio'
            ],
            correcta: 2,
            explicacion: 'La Ley 2491 de 2025 establece explícitamente que las CC y CSE deben ser transversales a todo el currículo, permanentes y parte estructural del PEI. Un proyecto mensual de convivencia puede ser un buen elemento complementario, pero no cumple el mandato de integración sistemática que exige la ley.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Cuál es el gap más grande entre lo que el PEI de tu institución dice sobre formación integral y lo que realmente ocurre en el día a día?',
          '¿Cuál es el actor institucional (rector, coordinador, docente ancla, orientadora) que podría ser el mayor aliado para la transformación curricular en CC y CSE?',
          '¿Qué resistencias anticipas cuando propongas cambios reales en el PEI? ¿Cómo las abordarías desde los argumentos del MEN 2026 y las leyes vigentes?'
        ]
      }
    },

    {
      id: 's8_1',
      num: 'Sesión 2',
      titulo: 'Plan de acción institucional: del curso a la práctica',
      duracion: '90 min',
      tipo: 'Planeación estratégica',
      objetivo: 'Construir un plan de acción concreto, contextualizado y viable para implementar las CC y CSE en la institución, articulando el marco normativo, el diagnóstico institucional y las capacidades reales del equipo docente.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Transformación curricular: qué es y qué no es',
          texto: `El MEN 2026 es cuidadoso al definir qué significa realmente transformar el currículo en CC y CSE:

<p>La actualización curricular debe entenderse como un proceso sistemático, progresivo y contextualizado, orientado por criterios de pertinencia y coherencia. Este proceso no se limita a ajustes formales del documento curricular, sino que implica un ciclo institucional que comprende diagnóstico, acción, análisis y actualización permanente.</p>

<strong>NO es transformación curricular:</strong>
<ul>
<li>Agregar "un proyecto de ciudadanía" al plan de estudios sin articularlo con las áreas.</li>
<li>Cambiar el nombre de una asignatura a "Formación ciudadana y socioemocional".</li>
<li>Hacer una jornada institucional anual de convivencia.</li>
<li>Actualizar los formatos del PEI sin cambiar las prácticas pedagógicas reales.</li>
</ul>

<strong>SÍ es transformación curricular:</strong>
<ul>
<li>Revisar los planes de área desde la pregunta: ¿qué dimensiones del ser humano activa esta área?</li>
<li>Crear espacios reales de coordinación docente entre niveles para garantizar progresión de CC y CSE.</li>
<li>Fortalecer el gobierno escolar como espacio de participación democrática genuina.</li>
<li>Formar a los docentes en sus propias competencias ciudadanas y socioemocionales.</li>
</ul>`
        },
        {
          tipo: 'tabla',
          titulo: '2. Las 4 preguntas del diseño curricular contextualizado',
          tabla: {
            cabeceras: ['Pregunta', 'Por qué importa', 'Ejemplo de respuesta transformadora'],
            filas: [
              ['¿Cómo dialoga el currículo con las realidades territoriales, culturales y sociales de la comunidad?', 'Un currículo desconectado del territorio no tiene poder de convocatoria ni de transformación. Los estudiantes no se reconocen en él.', 'Una institución en zona de posconflicto prioriza la competencia de resiliencia comunitaria y la trabajará con testimonios vivos de la comunidad, no con ejemplos de otro país.'],
              ['¿Está el currículo alineado con el Plan de Mejoramiento Institucional, los planes de desarrollo municipales y el enfoque de paz territorial?', 'La institución no existe en el vacío: forma parte de una política educativa territorial que debe conocer y articular.', 'El plan municipal incluye reducción de violencia juvenil. La institución alinea sus proyectos de participación democrática y resolución de conflictos con ese objetivo.'],
              ['¿Existe una cultura de cambio real en la institución?', 'Sin voluntad colectiva y liderazgo directivo comprometido, los cambios curriculares se quedan en documentos.', 'El rector lidera espacios de reflexión pedagógica mensual. Los docentes tienen tiempo protegido para planear colectivamente.'],
              ['¿Participa toda la comunidad en el proceso curricular?', 'El MEN 2026 subraya que estas competencias se construyen en comunidad, no por decreto. Las familias y los estudiantes son actores del currículo.', 'Las familias son consultadas sobre los aprendizajes que más necesitan sus hijos. Los estudiantes co-diseñan los criterios de evaluación de convivencia.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. La formación docente como columna vertebral de la implementación',
          texto: `El MEN 2026 insiste en que la implementación real de CC y CSE depende en gran medida de las competencias de los propios docentes:

<p>Es fundamental reconocer que estas competencias se desarrollan tanto en el currículo explícito como en el currículo oculto que permea toda la vida institucional. Las personas adultas que acompañan los procesos formativos son actoras fundamentales cuyas prácticas, actitudes y formas de relacionarse constituyen el principal referente para los niños, niñas y adolescentes.</p>

Esto no es un reproche al docente — es un reconocimiento de su poder transformador. Significa que:
<ul>
<li>Un docente que <strong>no regula sus propias emociones</strong> enseña desregulación emocional, aunque explique perfectamente qué es la regulación.</li>
<li>Un docente que <strong>toma decisiones unilaterales</strong> en el aula enseña ausencia de participación democrática.</li>
<li>Un docente que <strong>cuida sus vínculos</strong> con los estudiantes y reconoce su dignidad, está enseñando empatía todo el tiempo.</li>
</ul>

La formación docente en CC y CSE no es solo "capacitarse en metodologías" — es un proceso de desarrollo personal y profesional que implica <em>trabajar las propias competencias</em>.`
        }
      ],

      actividades: [
        {
          tipo: 'diseno',
          titulo: 'Mi plan de acción personal: 3 compromisos concretos',
          icono: '📋',
          instruccion: 'Basándote en todo el recorrido del curso, define 3 compromisos concretos para los próximos 3 meses: (1) Un cambio en mi práctica pedagógica personal (metodología, evaluación, relación con estudiantes). (2) Una propuesta que llevaré a mi equipo docente o al consejo académico. (3) Un argumento normativo concreto (ley, artículo, lineamiento) que usaré para defender la importancia de las CC y CSE en mi institución. Sé específico/a: no "trabajar más ciudadanía" sino "diseñar una experiencia de aprendizaje auténtica sobre resolución de conflictos para el grado 7° antes del 30 de mayo".',
          tiempo: '25 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Presentación de planes: escrutinio colaborativo',
          icono: '🤝',
          instruccion: 'En grupos de 3: cada persona presenta su plan de acción. Los otros dos dan retroalimentación usando la pregunta: "¿Qué necesitarías para que este plan sea real y no se quede en intención?" Identifiquen aliados, obstáculos y recursos institucionales disponibles.',
          tiempo: '30 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Cierre del curso: ¿Qué cambió en mí?',
          icono: '🌱',
          instruccion: 'Escribe en tu diario pedagógico: "Cuando empecé este curso, pensaba que las competencias ciudadanas y socioemocionales eran... Ahora comprendo que son... El cambio más importante que quiero hacer en mi práctica es... Lo que me genera más incertidumbre todavía es..."',
          tiempo: '15 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Marco normativo completo (pp. 13–20)', url: '#', meta: 'Leyes 2383/2024, 2414/2024, 2491/2025, 2503/2025' },
        { tipo: 'doc', titulo: 'MEN 2018 — Lineamientos de formación de educadores para la ciudadanía', url: '#', meta: 'Formación docente en CC — documento base' },
        { tipo: 'libro', titulo: 'Freire, P. (1997) — Pedagogía de la autonomía', url: '#', meta: 'Ética del docente transformador' },
        { tipo: 'web', titulo: 'CASEL — Systemic Implementation Guide', url: 'https://casel.org/', meta: 'Implementación sistémica del aprendizaje socioemocional' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión — Cierre del curso',
        preguntas: [
          {
            pregunta: '¿Por qué el MEN 2026 afirma que la formación docente en CC y CSE va más allá de "capacitarse en metodologías"?',
            opciones: [
              'Porque las metodologías activas son muy fáciles de aprender y no necesitan capacitación',
              'Porque la formación docente en estas competencias implica también desarrollar las propias CC y CSE del docente — no solo técnicas de enseñanza',
              'Porque el MEN prefiere que los docentes aprendan solos a través de la práctica',
              'Porque no existen metodologías probadas para enseñar ciudadanía'
            ],
            correcta: 1,
            explicacion: 'El MEN 2026 es claro: el currículo oculto que genera el docente con sus propias actitudes, formas de relacionarse y maneras de gestionar emociones y conflictos es tan o más poderoso que el currículo explícito. Un docente que no ha trabajado sus propias competencias ciudadanas y socioemocionales transmite inconsistencia entre lo que dice y lo que hace — y los estudiantes aprenden de lo que el docente hace, no de lo que dice.'
          },
          {
            pregunta: 'Una institución quiere "implementar las CC y CSE". ¿Cuál de estas acciones tiene mayor impacto estructural según el MEN 2026?',
            opciones: [
              'Comprar materiales didácticos sobre ciudadanía para cada aula',
              'Hacer una semana cultural de convivencia y paz cada semestre',
              'Revisar el PEI para que las CC y CSE estén articuladas con los objetivos formativos, las áreas del currículo, los sistemas de evaluación y la cultura institucional completa',
              'Contratar un psicólogo escolar dedicado a trabajar emociones con los estudiantes'
            ],
            correcta: 2,
            explicacion: 'Las actividades puntuales (semanas culturales, materiales) son complementos valiosos, pero sin anclaje en el PEI no generan transformación estructural. El PEI revisado asegura coherencia entre lo que la institución dice que forma, cómo planea, cómo enseña y cómo evalúa — lo que genera cambio sostenible en la cultura institucional, no solo eventos ocasionales.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Qué fue lo más desafiante de este curso completo para ti como profesional?',
          '¿Qué concepto o herramienta de este curso usarás más frecuentemente en tu práctica pedagógica?',
          '¿Qué le dirías a un colega que aún no ha hecho este curso sobre por qué debería hacerlo?'
        ]
      }
    }
  ]
});
