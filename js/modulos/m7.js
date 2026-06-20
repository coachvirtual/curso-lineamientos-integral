/* ══════════════════════════════════════════════════════════
   M7 — Estrategias Metodológicas
   Fuente: Capítulo 3, sección 3.2.2 (pp. 109–115) y
           Capítulo 3, sección 3.2.1 (pp. 103–108) del
           documento MEN 2026
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm7',
  num: 'Módulo 7',
  icon: '🧪',
  color: '#993C1D',
  bg: '#FAECE7',
  titulo: 'Estrategias Metodológicas',
  subtitulo: 'Aprender haciendo: metodologías activas para las competencias ciudadanas y socioemocionales',
  duracion: '3 sesiones · 4.5 horas',
  descripcion: 'Exploramos las estrategias pedagógicas que permiten que las competencias ciudadanas y socioemocionales se construyan en la experiencia, la interacción y la reflexión situada. El documento MEN 2026 es claro: estas competencias no se transmiten, se viven.',
  sesiones: [
    {
      id: 's7_0',
      num: 'Sesión 1',
      titulo: 'Metodologías activas: por qué no basta con "enseñar ciudadanía"',
      duracion: '90 min',
      tipo: 'Marco metodológico',
      objetivo: 'Comprender por qué las competencias ciudadanas y socioemocionales exigen metodologías activas y diversas, y reconocer los fundamentos pedagógicos que sustentan este enfoque en el documento MEN 2026.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El problema de fondo: competencias que no se enseñan, se construyen',
          texto: `El documento MEN 2026 plantea una premisa fundamental que transforma la manera de pensar la didáctica de las CC y las CSE:

<p>El desarrollo de las competencias ciudadanas y socioemocionales requiere trascender enfoques centrados exclusivamente en la transmisión de contenidos o en la prescripción de comportamientos esperados. Desde una perspectiva pedagógica contemporánea, dichas competencias se construyen en la experiencia, en la interacción y en la reflexión situada sobre la vida personal, social y comunitaria.</p>

Esto tiene una implicación directa para el docente: <strong>no es suficiente explicar qué es la empatía, hablar de paz o definir la participación democrática</strong>. Las competencias se movilizan como capacidades en acción, articulando simultáneamente dimensiones cognitivas, emocionales, éticas y relacionales.

El sustento teórico de este enfoque es Vygotsky (1978), quien concibe el aprendizaje como un <em>proceso activo, mediado por el lenguaje, la interacción social y el contexto</em>. Aprender ciudadanía y desarrollo socioemocional es, ante todo, aprender en y con los otros.`
        },
        {
          tipo: 'lectura',
          titulo: '2. Diversidad metodológica: por qué no hay un método único',
          texto: `El MEN 2026 es explícito en rechazar la idea de una metodología única o universal:

<p>Metodológicamente, la diversidad de estrategias responde al reconocimiento de que no existe una única forma válida de enseñar ni de aprender las competencias ciudadanas y socioemocionales. Las realidades territoriales, culturales y comunitarias de las escuelas colombianas son heterogéneas; por tanto, un marco de competencias que aspire a ser pertinente debe ofrecer orientaciones flexibles, abiertas a la adaptación y a la creación pedagógica por parte de las y los docentes.</p>

Esta diversidad no es relativismo pedagógico — es un reconocimiento político y cultural. Una estrategia que funciona en un colegio urbano de Bogotá puede no resonar en una comunidad rural del Chocó o en una institución con población de desplazamiento. <strong>La pertinencia territorial es un principio metodológico, no una opción</strong>.`
        },
        {
          tipo: 'tabla',
          titulo: '3. Las cuatro grandes familias de metodologías activas para CC y CSE',
          tabla: {
            cabeceras: ['Metodología', 'En qué consiste', 'Qué competencias activa principalmente', 'Ejemplo en el aula'],
            filas: [
              ['Aprendizaje situado', 'El aprendizaje ocurre en contextos reales o simulados de la vida del estudiante, no en abstracto. Los problemas del territorio, la escuela o la comunidad son el punto de partida.', 'Todas las CC y CSE, especialmente la participación democrática (CC3) y la justicia social (CC2).', 'Analizar un conflicto real de convivencia escolar y proponer soluciones colectivas basadas en datos reales.'],
              ['Proyectos de aprendizaje-servicio', 'Los estudiantes realizan un servicio concreto a su comunidad mientras aprenden. Articula la reflexión académica con la acción ciudadana real.', 'Resiliencia comunitaria (CSE7), participación democrática (CC3), sostenibilidad (CC6).', 'Un proyecto de huerta escolar que vincule conciencia ambiental, toma de decisiones colectiva y servicio a la comunidad.'],
              ['Simulaciones y juegos de rol', 'Los estudiantes asumen roles, representan perspectivas diversas y negocian soluciones en escenarios ficticios pero realistas.', 'Empatía (CSE4), habilidades de relación (CSE5), competencia histórica (CC4).', 'Simulación de una asamblea escolar donde cada estudiante representa a un grupo en conflicto (adultos mayores, jóvenes, comunidades étnicas).'],
              ['Diálogos deliberativos y debates éticos', 'Espacios estructurados donde los estudiantes argumentan, escuchan y construyen acuerdos sobre dilemas reales o situaciones complejas.', 'Regulación emocional (CSE2), toma de decisiones éticas (CSE3), emociones políticas (CSE6).', 'Debate sobre si la escuela debe tener cámaras de vigilancia: derechos, seguridad, privacidad, comunidad.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '4. La progresión metodológica: cómo cambia el nivel de complejidad',
          texto: `El MEN 2026 propone cuatro niveles de progresión en los aprendizajes que corresponden a estrategias metodológicas de complejidad creciente:

<table style="width:100%; font-size:13px; border-collapse:collapse">
<tr style="background:var(--surface)">
  <th style="padding:8px; text-align:left; border-bottom:1px solid var(--border)">Nivel</th>
  <th style="padding:8px; text-align:left; border-bottom:1px solid var(--border)">Etapa</th>
  <th style="padding:8px; text-align:left; border-bottom:1px solid var(--border)">Estrategias apropiadas</th>
</tr>
<tr>
  <td style="padding:8px; border-bottom:1px solid var(--border); font-weight:600; color:#0F6E56">Exploración</td>
  <td style="padding:8px; border-bottom:1px solid var(--border)">Educación Inicial</td>
  <td style="padding:8px; border-bottom:1px solid var(--border)">Juego simbólico, cuentos, rutinas afectivas, exploración sensorial, imitación, dramatización simple.</td>
</tr>
<tr>
  <td style="padding:8px; border-bottom:1px solid var(--border); font-weight:600; color:#1A4FA0">Comprensión y participación</td>
  <td style="padding:8px; border-bottom:1px solid var(--border)">Básica Primaria</td>
  <td style="padding:8px; border-bottom:1px solid var(--border)">Asamblea de aula, acuerdos colectivos, análisis de cuentos y situaciones, mediación guiada, proyectos de aula.</td>
</tr>
<tr>
  <td style="padding:8px; border-bottom:1px solid var(--border); font-weight:600; color:#993C1D">Análisis y corresponsabilidad</td>
  <td style="padding:8px; border-bottom:1px solid var(--border)">Básica Secundaria</td>
  <td style="padding:8px; border-bottom:1px solid var(--border)">Estudio de casos, investigación comunitaria, mediación entre pares, debates éticos, proyectos de aprendizaje-servicio.</td>
</tr>
<tr>
  <td style="padding:8px; font-weight:600; color:#5A2E8A">Acción y liderazgo</td>
  <td style="padding:8px">Educación Media</td>
  <td style="padding:8px">Liderazgo de proyectos, incidencia comunitaria, gobierno escolar real, producción de contenidos para la comunidad, veedurías.</td>
</tr>
</table>

<p>La progresión no supone que ciertas capacidades no existan en niveles iniciales, sino que se espera mayor profundidad, autonomía y complejidad en niveles superiores.</p>`
        }
      ],

      actividades: [
        {
          tipo: 'reflexion',
          titulo: 'Auditoría metodológica personal',
          icono: '🔍',
          instruccion: 'Piensa en la última semana de clases. ¿Qué porcentaje del tiempo fue transmisión de contenidos? ¿Qué porcentaje fue metodología activa? Sin juzgarte: ¿cuál es la razón real de ese balance? ¿Tiempo, formación, infraestructura, cultura institucional?',
          tiempo: '15 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Diseño rápido: de transmisión a experiencia',
          icono: '🔄',
          instruccion: 'Toma un tema que normalmente enseñas de forma transmisiva (explicación + ejercicio). En grupos, rediseñen la sesión usando UNA metodología activa: aprendizaje situado, simulación, proyecto, o debate deliberativo. ¿Qué cambia? ¿Qué nuevas dificultades aparecen?',
          tiempo: '30 min'
        },
        {
          tipo: 'individual',
          titulo: 'Mapa de restricciones reales',
          icono: '🗺️',
          instruccion: 'Haz una lista honesta de las restricciones reales de tu institución para implementar metodologías activas (tiempo de clase, número de estudiantes, infraestructura, resistencia de colegas, expectativas de familias). Para cada restricción, escribe una estrategia concreta de respuesta.',
          tiempo: '20 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 3.2.2: Estrategias metodológicas (pp. 109–115)', url: '#', meta: 'Documento oficial — lectura esencial' },
        { tipo: 'libro', titulo: 'Vygotsky, L.S. (1978) — Mind in society: The development of higher psychological processes', url: '#', meta: 'Fundamento del aprendizaje activo y situado' },
        { tipo: 'libro', titulo: 'Freire, P. (1970) — Pedagogía del oprimido', url: '#', meta: 'Base del aprendizaje dialógico y transformador' },
        { tipo: 'libro', titulo: 'Johnson, D.W. & Johnson, R.T. (2005) — New developments in social interdependence theory', url: '#', meta: 'Fundamento del aprendizaje cooperativo' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Por qué el MEN 2026 afirma que las CC y CSE "no se transmiten, se construyen"?',
            opciones: [
              'Porque los contenidos de ciudadanía son demasiado abstractos para ser explicados',
              'Porque estas competencias articulan dimensiones cognitivas, emocionales, éticas y relacionales que solo se movilizan en la experiencia y la interacción real',
              'Porque los libros de texto sobre ciudadanía son de mala calidad en Colombia',
              'Porque los docentes no tienen formación suficiente para transmitirlas'
            ],
            correcta: 1,
            explicacion: 'Las CC y CSE son competencias integrales que involucran simultáneamente la dimensión cognitiva (saber), emocional (sentir), ética (valorar) y relacional (hacer con otros). Esta integración solo ocurre en experiencias reales de interacción, reflexión y acción. Una clase expositiva sobre empatía no desarrolla la empatía: la desarrollan las experiencias reales de ponerse en el lugar del otro.'
          },
          {
            pregunta: '¿Qué significa en términos prácticos que la metodología debe ser "territorial"?',
            opciones: [
              'Que hay que enseñar geografía colombiana en todas las clases',
              'Que los problemas, contextos y ejemplos del aprendizaje deben partir de las realidades culturales, sociales e históricas de la comunidad de cada escuela',
              'Que solo se pueden usar metodologías aprobadas por el MEN para cada región',
              'Que cada municipio debe tener su propio lineamiento curricular diferente'
            ],
            correcta: 1,
            explicacion: 'La pertinencia territorial significa que las metodologías y los contenidos deben resonar con la experiencia de vida real de los estudiantes. Una simulación sobre paz no tiene el mismo impacto en un municipio afectado por conflicto armado que en una ciudad sin este contexto. La metodología que ignora el territorio pierde su potencia transformadora.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Cuál de las cuatro metodologías activas (situado, proyectos-servicio, simulaciones, debates) sientes más natural para tu práctica? ¿Cuál te genera más resistencia interna?',
          '¿Qué diría tu rector o rectora si propusieras dedicar el 50% del tiempo de una asignatura a metodologías activas? ¿Cómo responderías?',
          '¿Cómo cambiaría la relación con tus estudiantes si adoptaras más frecuentemente metodologías donde ellos sean protagonistas?'
        ]
      }
    },

    {
      id: 's7_1',
      num: 'Sesión 2',
      titulo: 'Progresión curricular: del diagnóstico a la secuencia de aprendizajes',
      duracion: '90 min',
      tipo: 'Diseño curricular',
      objetivo: 'Comprender cómo se diseña una progresión de aprendizajes coherente para las CC y CSE, y traducir los aprendizajes esenciales del MEN en secuencias didácticas contextualizadas.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. ¿Qué es la progresión de aprendizajes y por qué importa?',
          texto: `<p>La progresión de los aprendizajes constituye un componente estructural del diseño curricular, en tanto permite organizar, de manera intencionada, gradual y coherente, el desarrollo de capacidades, competencias y aprendizajes a lo largo de las distintas etapas del proceso educativo.</p>

Un currículo sin progresión explícita comete dos errores frecuentes:

<ul>
<li><strong>Fragmentación:</strong> Las competencias se trabajan de forma aislada, como actividades sueltas sin continuidad entre grados. "Hicimos un taller de emociones en tercero" no construye competencia si no hay continuidad en cuarto y quinto.</li>
<li><strong>Repetición sin complejización:</strong> El mismo tema se aborda igual en distintos grados sin aumentar la profundidad, la autonomía o la complejidad. No es lo mismo hablar de conflicto en primero que en noveno — si el abordaje es igual, no hay progresión real.</li>
</ul>

La progresión cumple una <em>doble función</em>: orienta la planificación docente (qué se espera en cada momento) y fortalece la evaluación formativa (cómo se observan los avances).`
        },
        {
          tipo: 'tabla',
          titulo: '2. Los cuatro niveles de progresión según el MEN 2026',
          tabla: {
            cabeceras: ['Nivel', 'Palabra clave', 'Qué lo define', 'Señal de avance genuino'],
            filas: [
              ['Educación Inicial', 'Exploración', 'Aprendizaje mediante el descubrimiento, la imitación, la expresión espontánea y la interacción acompañada. Las emociones se reconocen a través de rutinas, vínculos y experiencias básicas.', 'El niño puede nombrar lo que siente con palabras simples o gestos y pedir ayuda ante el desbordamiento.'],
              ['Básica Primaria', 'Comprensión y participación', 'Capacidad de nombrar, explicar, diferenciar y anticipar emociones, normas y acciones. Intervención activa pero guiada en decisiones colectivas.', 'El estudiante puede explicar por qué siente algo y proponer soluciones en conflictos simples con mediación adulta.'],
              ['Básica Secundaria', 'Análisis y corresponsabilidad', 'Capacidad de analizar dilemas, causas, consecuencias y perspectivas múltiples. Los estudiantes asumen compromisos y reconocen su papel en la comunidad.', 'El estudiante puede analizar un conflicto desde varias perspectivas y asumir responsabilidad concreta en su resolución.'],
              ['Educación Media', 'Acción y liderazgo', 'Mayor complejidad en la agencia estudiantil, toma de decisiones y liderazgo ético. Capacidad de ejecutar proyectos y movilizar a otros desde la ética ciudadana.', 'El estudiante lidera iniciativas reales de transformación en su entorno y puede justificarlas desde valores ciudadanos.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. La Tabla 18 del MEN 2026: la herramienta de planeación',
          texto: `El documento MEN propone una estructura curricular articulada en cuatro componentes que todo docente debe conocer para planear con sentido:

<ol>
<li><strong>Dimensiones del ser:</strong> Los ámbitos interdependientes que configuran la formación integral: cognitiva, socioemocional, ética, ciudadana y política, corporal, histórica y de memoria histórica, cultural, ambiental, comunicativa y creativa.</li>
<li><strong>Ejes concéntricos de interacción:</strong> Los cuatro ámbitos A (Yo), B (Otros), C (Sociedad), D (Mundo).</li>
<li><strong>Aprendizajes esenciales:</strong> Los conocimientos, habilidades y actitudes que se esperan en cada nivel. No son contenidos aislados sino <em>núcleos formativos</em>.</li>
<li><strong>Indicadores de desempeño:</strong> Evidencias observables y específicas del nivel de apropiación. No verifican si la competencia "está o no está", sino cómo se está configurando en el estudiante.</li>
</ol>

Un ejemplo concreto del MEN para CSE-1 (Conciencia emocional):
<p><strong>Aprendizaje esencial:</strong> "Analizar y expresar con claridad sus propias emociones y las de los demás, reconociendo cómo estas reflejan valores, significados personales y dinámicas colectivas en el grupo."<br><strong>Indicador:</strong> "Analizar las propias emociones y sentimientos en diferentes situaciones personales, académicas y sociales."<br><strong>Pregunta docente:</strong> "¿Qué emoción experimentas frente a esta situación? ¿Qué te ayuda a darte cuenta de que estás triste, motivado o frustrado?</p>`
        },
        {
          tipo: 'lectura',
          titulo: '4. Tres preguntas que todo docente debe responder antes de planear',
          texto: `El MEN 2026 propone que el diseño curricular parta de preguntas reflexivas concretas:

<strong>Sobre claridad y estructura:</strong>
<ul>
<li>¿Tengo progresiones claras de aprendizaje para CC y CSE desde inicial hasta media?</li>
<li>¿Las progresiones muestran incrementos reales en complejidad cognitiva, emocional y ética?</li>
</ul>

<strong>Sobre coherencia y transversalidad:</strong>
<ul>
<li>¿Las CC y CSE se expresan solo en proyectos aislados o están integradas en las áreas del currículo?</li>
<li>¿Existe coherencia entre lo que espero que aprendan y las oportunidades reales que ofrece mi institución?</li>
</ul>

<strong>Sobre inclusión y accesibilidad:</strong>
<ul>
<li>¿Las progresiones contemplan la diversidad de ritmos e intereses de mis estudiantes?</li>
<li>¿Existen ajustes razonables para estudiantes con necesidades educativas especiales?</li>
</ul>`
        }
      ],

      actividades: [
        {
          tipo: 'individual',
          titulo: 'Diagnóstico de progresión en mi institución',
          icono: '📊',
          instruccion: 'Selecciona UNA competencia (CC o CSE). Responde: ¿cómo se trabaja en inicial? ¿En primaria? ¿En secundaria? ¿En media? Si no sabes qué ocurre en los otros niveles, ese es el primer hallazgo. Dibuja cómo debería verse la progresión ideal de esa competencia.',
          tiempo: '20 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Diseño de una secuencia de aprendizajes',
          icono: '🗂️',
          instruccion: 'En grupos por niveles educativos: tomen UNA competencia y diseñen sus aprendizajes esenciales para ese nivel (máximo 3). Para cada aprendizaje esencial, definan: un indicador de desempeño observable, una pregunta orientadora para el docente, y un ejemplo de evidencia real que el estudiante puede mostrar.',
          tiempo: '35 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Coherencia vertical: ¿hablamos entre grados?',
          icono: '🔗',
          instruccion: 'Escribe: "En mi institución, el/la docente de [grado] sabe lo que yo trabajo en [mi grado] en materia de CC y CSE: ¿VERDADERO o FALSO? Si es falso, ¿qué mecanismo concreto podría generar esa articulación?"',
          tiempo: '15 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 3.2.1: Progresión de los aprendizajes (pp. 103–108)', url: '#', meta: 'Documento oficial' },
        { tipo: 'doc', titulo: 'MEN 2026 — Tabla 18: Organización curricular (pp. 100–103)', url: '#', meta: 'Herramienta de planeación clave' },
        { tipo: 'libro', titulo: 'Wiggins, G. & McTighe, J. — Understanding by design', url: '#', meta: 'Diseño curricular por comprensión y resultados esperados' },
        { tipo: 'libro', titulo: 'Shepard, L.A. (2005) — Linking formative assessment to scaffolding', url: '#', meta: 'Evaluación formativa y progresión de aprendizajes' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál es la diferencia entre un "aprendizaje esencial" y un "indicador de desempeño" según el MEN 2026?',
            opciones: [
              'Son sinónimos: ambos describen lo que el estudiante debe saber al final del año',
              'El aprendizaje esencial es el horizonte formativo general de una competencia; el indicador de desempeño es la evidencia observable y específica de cómo ese aprendizaje se está configurando',
              'El aprendizaje esencial es para docentes y el indicador de desempeño es para estudiantes',
              'Los aprendizajes esenciales son nacionales; los indicadores son locales'
            ],
            correcta: 1,
            explicacion: 'Los aprendizajes esenciales son núcleos formativos amplios que orientan el desarrollo de una competencia a lo largo de un nivel educativo completo. Los indicadores de desempeño son referencias más específicas y observables que permiten ver cómo se está construyendo ese aprendizaje en un momento particular. Son complementarios: el aprendizaje esencial da el horizonte, el indicador da la evidencia de avance.'
          },
          {
            pregunta: 'Según el MEN 2026, ¿qué significa que una progresión de aprendizajes tiene "coherencia vertical"?',
            opciones: [
              'Que los contenidos se organizan de lo más fácil a lo más difícil dentro de una misma sesión de clase',
              'Que los aprendizajes de un nivel educativo conectan y profundizan los del nivel anterior, garantizando continuidad y complejidad creciente a lo largo de toda la trayectoria escolar',
              'Que los docentes de diferentes materias trabajan el mismo tema al mismo tiempo',
              'Que el rector aprueba los planes de clase de cada docente'
            ],
            correcta: 1,
            explicacion: 'La coherencia vertical significa que lo que se aprende en inicial sienta las bases para primaria, primaria para secundaria y secundaria para media. Cada nivel amplía, profundiza y resignifica los aprendizajes previos. Sin coherencia vertical, el trabajo de CC y CSE queda fragmentado en actividades aisladas que no se acumulan en competencias reales.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Cuánto conoces de lo que tu institución trabaja en CC y CSE en los grados que anteceden y siguen al tuyo?',
          '¿Qué necesitarías cambiar en la planeación de tu área para que las CC y CSE sean una progresión articulada y no una actividad eventual?',
          '¿Cómo podría el equipo directivo de tu institución facilitar (o está obstaculizando) la coherencia vertical en CC y CSE?'
        ]
      }
    },

    {
      id: 's7_2',
      num: 'Sesión 3',
      titulo: 'Diseño de experiencias de aprendizaje auténticas',
      duracion: '90 min',
      tipo: 'Taller de diseño',
      objetivo: 'Diseñar una experiencia de aprendizaje auténtica para CC y CSE que integre metodología activa, progresión de aprendizajes y evaluación formativa, contextualizada en la realidad territorial de la institución.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. ¿Qué es una experiencia de aprendizaje auténtica?',
          texto: `Una experiencia de aprendizaje auténtica para CC y CSE cumple al menos tres criterios:

<strong>1. Situada:</strong> Parte de un problema, conflicto o pregunta real del contexto del estudiante — no de un ejemplo genérico de libro. Los estudiantes reconocen su realidad en el punto de partida.

<strong>2. Integrada:</strong> Activa simultáneamente más de una dimensión: cognitiva + emocional, o ética + relacional. No trabaja una competencia aislada sino la interacción entre varias.

<strong>3. Reflexiva:</strong> Incluye un momento de metacognición — los estudiantes se preguntan no solo qué aprendieron sino cómo lo aprendieron y qué cambió en su forma de ver el mundo.

El MEN 2026 lo expresa así: <em>"No se trata de constatar si la competencia 'está' o 'no está', sino de comprender cómo se está configurando en un entramado relacional específico y cómo puede profundizarse."</em> (p. 110).`
        },
        {
          tipo: 'tabla',
          titulo: '2. Tipos de evidencias auténticas para evaluar CC y CSE',
          tabla: {
            cabeceras: ['Tipo de evidencia', 'Cómo se recoge', 'Competencias que evalúa principalmente'],
            filas: [
              ['Rúbricas descriptivas', 'El docente observa y registra el desempeño en situaciones reales: mediación de conflictos, debates, toma de decisiones en equipo.', 'Todas las CC y CSE, especialmente habilidades de relación (CSE5) y participación democrática (CC3).'],
              ['Portafolio de aprendizaje', 'El estudiante acumula evidencias a lo largo del tiempo: escritos reflexivos, mapas emocionales, registros de proyectos, autoevaluaciones.', 'Conciencia emocional (CSE1), toma de decisiones (CSE3), competencia histórica (CC4).'],
              ['Diario de clase', 'Registro semanal donde el estudiante responde preguntas reflexivas sobre sus aprendizajes y sus emociones en el proceso.', 'Regulación emocional (CSE2), resiliencia (CSE7), conciencia emocional (CSE1).'],
              ['Proyectos con impacto real', 'El estudiante ejecuta una iniciativa que afecta positivamente a su entorno: campaña de convivencia, proyecto ambiental, mediación escolar.', 'Emociones políticas (CSE6), resiliencia comunitaria (CSE7), participación democrática (CC3), sostenibilidad (CC6).'],
              ['Autoevaluación y coevaluación', 'Procesos estructurados donde estudiantes se evalúan a sí mismos y evalúan a sus pares con criterios claros y previamente acordados.', 'Conciencia emocional (CSE1), toma de decisiones (CSE3), empatía (CSE4).'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. El docente como mediador ético: el rol que cambia',
          texto: `Con metodologías activas, el rol del docente se transforma radicalmente. El MEN 2026 describe esta transformación en tres dimensiones:

<strong>De transmisor a mediador:</strong> El docente no es quien sabe y dice — es quien crea condiciones para que los estudiantes construyan, reflexionen y actúen. Esto exige soltar el control y tolerar la incertidumbre pedagógica.

<strong>De evaluador a retroalimentador:</strong> La evaluación deja de ser un momento final de verificación para convertirse en conversación continua. Preguntar "¿qué te ayuda a saber que estás en calma?" es más formativo que calificar un comportamiento.

<strong>De modelo implícito a modelo consciente:</strong> El docente que usa metodologías activas de CC y CSE debe ser coherente con lo que enseña. Un docente que gestiona mal su frustración en el aula enseña regulación emocional por su ausencia — aunque explique perfectamente qué es.

<p>La manera en que el docente gestiona sus propias emociones, resuelve conflictos y participa democráticamente en la institución es el currículo oculto más poderoso que existe.</p>`
        }
      ],

      actividades: [
        {
          tipo: 'diseno',
          titulo: 'Taller de diseño: tu experiencia auténtica',
          icono: '✏️',
          instruccion: 'Diseña una experiencia de aprendizaje auténtica de 2 sesiones para tus estudiantes. Debe incluir: (1) Problema o pregunta real del contexto; (2) Competencias CC/CSE que activa (mínimo 2); (3) Metodología activa principal; (4) Momento de reflexión metacognitiva; (5) Evidencia de desempeño que recogerás. Al final, comparte el diseño con un par para retroalimentación.',
          tiempo: '40 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Galería de experiencias: crítica constructiva',
          icono: '🖼️',
          instruccion: 'Cada grupo presenta su diseño de experiencia auténtica en 3 minutos. Los demás grupos dan retroalimentación estructurada: ¿está situada en el contexto real?, ¿qué competencias realmente activa?, ¿la evidencia de desempeño es auténtica o convencional?',
          tiempo: '30 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Capítulo 4: Evaluación para los aprendizajes (pp. 110–115)', url: '#', meta: 'Documento oficial — lectura esencial' },
        { tipo: 'libro', titulo: 'Santos Guerra, M.A. — La evaluación como aprendizaje', url: '#', meta: 'Crítica transformadora de la evaluación' },
        { tipo: 'libro', titulo: 'Black, P. & Wiliam, D. (1998) — Inside the black box', url: '#', meta: 'Impacto de la evaluación formativa' },
        { tipo: 'herramienta', titulo: 'Banco de rúbricas CC/CSE por nivel — MEN 2026', url: '#', meta: 'Herramienta de evaluación formativa' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: 'Una docente evalúa "Participación democrática" registrando en la lista de asistencia si el estudiante levantó la mano en clase. ¿Qué problema tiene esta práctica evaluativa según el MEN 2026?',
            opciones: [
              'No tiene problema: registrar la participación es una evidencia válida',
              'Es una evaluación sumativa no una formativa, por eso está mal',
              'No es una evidencia auténtica de competencia: mide un comportamiento superficial, no la capacidad real de deliberar, argumentar y construir acuerdos — que es lo que define la competencia',
              'El problema es que no usa una rúbrica con criterios escritos'
            ],
            correcta: 2,
            explicacion: 'Levantar la mano no es evidencia de la competencia de participación democrática. La competencia implica capacidad de deliberar, argumentar razonadamente, escuchar perspectivas diversas y construir acuerdos. La evidencia auténtica sería observar al estudiante en un proceso real de debate, mediación o toma de decisiones colectiva, con criterios claros de retroalimentación.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Cuál fue el mayor insight de este módulo sobre tu práctica metodológica actual?',
          '¿Qué cambio concreto (uno solo, pequeño y realista) podrías implementar la próxima semana?',
          '¿Cómo medirías que ese cambio está funcionando — qué evidencia observarías en tus estudiantes?'
        ]
      }
    }
  ]
});
