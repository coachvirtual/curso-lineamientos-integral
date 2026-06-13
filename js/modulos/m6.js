/* ══════════════════════════════════════════════════════════
   M6 — Evaluación para los Aprendizajes
   Fuente: Capítulo 4 del documento MEN 2026 (pp. 133-160)
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm6',
  num: 'Módulo 6',
  icon: '📊',
  color: '#8B6F00',
  bg: '#FBF7E2',
  titulo: 'Evaluación para los Aprendizajes',
  subtitulo: 'Evaluar competencias ciudadanas y socioemocionales: del juicio al acompañamiento',
  duracion: '2 sesiones · 3 horas',
  descripcion: 'Comprendemos la evaluación como proceso formativo y ético, no como medición. Diseñamos instrumentos auténticos para evidenciar el desarrollo ciudadano y socioemocional, y aprendemos a usar la retroalimentación como herramienta de transformación.',
  sesiones: [
    {
      id: 's6_0',
      num: 'Sesión 1',
      titulo: 'La evaluación formativa de competencias ciudadanas y socioemocionales',
      duracion: '90 min',
      tipo: 'Evaluación formativa',
      objetivo: 'Comprender la evaluación formativa como proceso dialógico, situado y ético, y distinguirla de la evaluación sumativa, reconociendo las implicaciones específicas de evaluar competencias ciudadanas y socioemocionales.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. El problema específico de evaluar CC y CSE',
          texto: `Evaluar competencias ciudadanas y socioemocionales plantea un desafío que no existe con el mismo peso en otras áreas: <strong>el riesgo de pervertir lo que se evalúa</strong>.

<blockquote>"La evaluación de competencias ciudadanas y socioemocionales no puede convertirse en una vigilancia de actitudes o en una calificación de la personalidad. Cuando esto ocurre, los estudiantes aprenden a actuar como si tuvieran las competencias, no a desarrollarlas genuinamente." <cite>— MEN, 2026, p. 133</cite></blockquote>

Ejemplos del riesgo:
<ul>
<li>Calificar la "empatía" puede llevar a que los estudiantes <em>finjan</em> empatía frente al docente.</li>
<li>Calificar la "participación" puede llevar a que los estudiantes participen por la nota, no por convicción.</li>
<li>Calificar los "valores" puede convertirse en vigilancia ideológica.</li>
</ul>

La solución del MEN no es no evaluar, sino <strong>cambiar el objeto de la evaluación</strong>: no evaluar si el estudiante "es empático" sino si está desarrollando las capacidades que lo hacen posible.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Evaluación sumativa vs. formativa en el contexto CC/CSE',
          tabla: {
            cabeceras: ['Dimensión', 'Evaluación sumativa', 'Evaluación formativa'],
            filas: [
              ['Propósito', 'Certificar logro al final. Rendir cuentas.', 'Acompañar el proceso. Generar información útil para aprender más.'],
              ['Momento', 'Al final de una unidad, periodo o curso.', 'Durante todo el proceso, de manera continua y flexible.'],
              ['Foco', 'Lo que el estudiante logró (o no logró).', 'Lo que el estudiante está aprendiendo y lo que necesita para seguir.'],
              ['Relación docente-est.', 'El docente mide; el estudiante es medido.', 'Diálogo: el docente retroalimenta; el estudiante reflexiona y ajusta.'],
              ['En CC/CSE', 'Prueba de conocimientos sobre ciudadanía. Examen.', 'Portafolio de evidencias, observación sistemática, autoevaluación reflexiva.'],
              ['Riesgo específico', 'Reduce la ciudadanía a contenidos memorizables.', 'Si no se hace bien, puede convertirse en vigilancia de actitudes.'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. Los 8 principios de la evaluación formativa para CC/CSE (MEN 2026)',
          texto: `El documento MEN establece 8 principios que deben orientar toda evaluación de competencias ciudadanas y socioemocionales:

<ol>
<li><strong>Autenticidad:</strong> Las evidencias deben provenir de situaciones reales, no de pruebas artificiales. No "¿qué harías si...?" sino "observamos qué hiciste cuando..."</li>
<li><strong>Integralidad:</strong> La evaluación debe capturar las tres dimensiones: cognitiva, socioemocional y ética-ciudadana simultáneamente.</li>
<li><strong>Participación del estudiante:</strong> La autoevaluación y coevaluación son componentes esenciales, no opcionales.</li>
<li><strong>Progresión:</strong> Se evalúa el avance del estudiante en relación consigo mismo, no solo en relación con un estándar externo.</li>
<li><strong>Retroalimentación significativa:</strong> La información que se da al estudiante debe ser útil para su aprendizaje, no solo para la calificación.</li>
<li><strong>Diversidad de instrumentos:</strong> Ningún instrumento captura toda la competencia. Se necesita un portafolio de evidencias.</li>
<li><strong>Confidencialidad reflexiva:</strong> Los instrumentos más profundos (diario, reflexiones personales) no deben calificarse; su valor es la reflexión que generan.</li>
<li><strong>Contextualización:</strong> Los indicadores deben adaptarse al contexto específico de la institución y el estudiante.</li>
</ol>`
        },
        {
          tipo: 'grafico',
          titulo: '4. Instrumentos de evaluación para CC/CSE: un portafolio diversificado',
          tipo_grafico: 'portafolio',
          datos: [
            { instrumento: 'Observación sistemática', desc: 'Registro anecdótico de comportamientos en situaciones auténticas', uso: 'Alta frecuencia, baja formalidad', color: '#3B82F6' },
            { instrumento: 'Portafolio de evidencias', desc: 'Selección reflexiva de trabajos que muestran la evolución del aprendizaje', uso: 'Longitudinal, alta profundidad', color: '#0C7A4A' },
            { instrumento: 'Rúbricas descriptivas', desc: 'Criterios graduados que describen niveles de desempeño observable', uso: 'Moderada frecuencia, alta claridad', color: '#F59E0B' },
            { instrumento: 'Autoevaluación reflexiva', desc: 'El estudiante analiza su propio proceso de aprendizaje', uso: 'Regular, formativa, no calificable', color: '#8B5CF6' },
            { instrumento: 'Coevaluación entre pares', desc: 'Los estudiantes se retroalimentan mutuamente con criterios claros', uso: 'Ocasional, potente para la empatía', color: '#EC4899' },
            { instrumento: 'Diario pedagógico', desc: 'Registro continuo de reflexiones, emociones y aprendizajes del docente', uso: 'Del docente, no para calificar al estudiante', color: '#A84020' },
            { instrumento: 'Situaciones problema auténticas', desc: 'Dilemas reales o situaciones de la institución que el estudiante debe abordar', uso: 'Evaluación de proceso y decisión', color: '#2E6B22' },
          ]
        }
      ],
      actividades: [
        {
          tipo: 'individual',
          titulo: 'Diseño de una rúbrica descriptiva',
          icono: '📋',
          instruccion: 'Elige una competencia (CC o CSE) y un aprendizaje esencial para tu nivel. Diseña una rúbrica descriptiva con 4 niveles de desempeño (Inicial, En desarrollo, Logrado, Sobresaliente). Cada celda debe describir comportamientos observables, no valoraciones ("el estudiante HACE x" no "el estudiante ES x").',
          tiempo: '25 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Crítica cruzada de instrumentos',
          icono: '🔄',
          instruccion: 'Intercambia tu rúbrica con un colega. Evalúa: ¿Los descriptores son observables o son juicios de valor? ¿Los niveles muestran progresión real? ¿Podría usarse para vigilar actitudes o está centrada en capacidades? Retroalimenta con el espíritu de los 8 principios del MEN.',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi evaluación actual',
          icono: '🪞',
          instruccion: 'Escribe honestamente: "La manera en que evalúo actualmente la formación ciudadana en mi aula es... Lo que eso mide realmente es... Lo que debería estar midiendo según el MEN 2026 es... El primer cambio que haré es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Capítulo 4: Evaluación formativa (pp. 133-148)', url: '#', meta: 'Documento oficial — lectura esencial' },
        { tipo: 'libro', titulo: 'Black, P. & Wiliam, D. (1998) — Inside the black box', url: '#', meta: 'La evaluación formativa que funciona' },
        { tipo: 'libro', titulo: 'Santos Guerra, M.A. — La evaluación como aprendizaje', url: '#', meta: 'Crítica y propuesta' },
        { tipo: 'herramienta', titulo: 'Banco de rúbricas CC/CSE por nivel — MEN', url: '#', meta: 'Herramienta descargable' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Por qué el MEN recomienda que los instrumentos más profundos de reflexión (diario, autoevaluación personal) NO se califiquen?',
            opciones: [
              'Porque son muy difíciles de evaluar objetivamente',
              'Porque su valor pedagógico está en la reflexión genuina que generan; calificarlos crea el incentivo de escribir "lo que el docente quiere ver" en lugar de reflexionar honestamente',
              'Porque la Ley 115 prohíbe calificar actitudes',
              'Porque solo los psicólogos pueden evaluar el desarrollo emocional'
            ],
            correcta: 1,
            explicacion: 'Este es uno de los 8 principios más importantes: la confidencialidad reflexiva. Cuando una reflexión íntima se califica, pierde su naturaleza. El estudiante dejará de escribir lo que realmente piensa y sentirá para escribir lo que cree que el docente quiere leer. La evaluación pervertiría exactamente lo que intenta desarrollar.'
          },
          {
            pregunta: '¿Cuál es la diferencia entre evaluar si el estudiante "es empático" y evaluar si está "desarrollando capacidades para la empatía"?',
            opciones: [
              'No hay diferencia real; son dos maneras de decir lo mismo',
              'Evaluar si "es empático" juzga la personalidad (inaccesible y riesgoso); evaluar capacidades observa comportamientos específicos que evidencian el desarrollo en proceso',
              'Solo la primera forma es científicamente válida',
              'La segunda es más fácil pero menos precisa'
            ],
            correcta: 1,
            explicacion: 'Esta distinción es fundamental. "Es empático" es una evaluación de personalidad que puede convertirse en vigilancia o en etiquetado. "Demuestra toma de perspectiva en situaciones de conflicto" es una evaluación de una capacidad observable que respeta la privacidad del mundo interior del estudiante y le da información útil para su desarrollo.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Has vivido alguna vez la experiencia de que una evaluación pervierta lo que intentaba desarrollar? ¿Qué ocurrió?',
          '¿Cuáles de los 8 principios de evaluación ya aplicas? ¿Cuáles son nuevos para ti?',
          '¿Cómo reaccionarían tus estudiantes si les dijeras que su diario de reflexiones no tiene nota?'
        ]
      }
    },
    {
      id: 's6_1',
      num: 'Sesión 2',
      titulo: 'Retroalimentación, autoevaluación y evidencias de aprendizaje ciudadano',
      duracion: '90 min',
      tipo: 'Instrumentos y retroalimentación',
      objetivo: 'Diseñar procesos de retroalimentación formativa que desarrollen autonomía en el estudiante, y construir un sistema de evidencias auténticas del desarrollo ciudadano y socioemocional.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La retroalimentación que transforma',
          texto: `<blockquote>"La retroalimentación no es informar al estudiante sobre su calificación; es proveer información específica, orientada a la mejora, que el estudiante pueda usar para transformar su aprendizaje." <cite>— MEN, 2026, p. 149</cite></blockquote>

Hattie y Timperley (2007) identificaron en una mega-investigación que la retroalimentación es el factor más poderoso de todos los que afectan el aprendizaje (d=0.73). Pero no toda retroalimentación tiene el mismo efecto.

La retroalimentación más poderosa actúa en tres niveles:
<ol>
<li><strong>Sobre la tarea:</strong> ¿Qué específicamente hiciste bien? ¿Qué falta? (ej: "Tu propuesta de mediación es clara pero no considera la perspectiva del tercer estudiante involucrado.")</li>
<li><strong>Sobre el proceso:</strong> ¿Cómo puedes mejorar tu forma de aprender? (ej: "Antes de proponer, ¿qué preguntas podrías hacer para entender mejor?")</li>
<li><strong>Sobre la autorregulación:</strong> ¿Cómo puedes monitorear tu propio aprendizaje? (ej: "¿Cómo sabes cuándo realmente estás escuchando al otro?")</li>
</ol>

La retroalimentación sobre la persona ("eres empático", "eres irresponsable") es la menos efectiva y la más dañina.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Los 4 niveles de aprendizaje según el MEN 2026',
          tabla: {
            cabeceras: ['Nivel', 'Descriptor general', 'Qué implica para la retroalimentación'],
            filas: [
              ['Nivel 1: Explorando', 'El estudiante está tomando conciencia de la competencia. Identifica situaciones donde aplica, pero aún no la desarrolla de manera consistente.', 'Retroalimentación motivadora que valida el reconocimiento inicial. "Identificas bien el problema. El próximo paso es..."'],
              ['Nivel 2: Desarrollando', 'El estudiante aplica la competencia en situaciones familiares con apoyo. Requiere andamiaje para generalizarla.', 'Retroalimentación que ofrece estrategias específicas y andamiaje. "Cuando uses el diálogo, intenta primero..."'],
              ['Nivel 3: Consolidando', 'El estudiante aplica la competencia de manera autónoma en situaciones diversas. Puede explicar su proceso.', 'Retroalimentación que profundiza y expande. "¿Cómo aplicarías esto en una situación más compleja como...?"'],
              ['Nivel 4: Transfiriendo', 'El estudiante aplica la competencia en situaciones nuevas y complejas, y puede apoyar a otros.', 'Retroalimentación que le invita a liderar y transmitir. "¿Cómo podrías ayudar a tu compañero a desarrollar esta capacidad?"'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. El portafolio de ciudadanía: evidencias a lo largo del tiempo',
          texto: `El instrumento más coherente con el enfoque del MEN 2026 para evaluar CC y CSE es el <strong>portafolio de ciudadanía</strong>: una colección reflexiva y seleccionada de evidencias que muestra el desarrollo del estudiante a lo largo del tiempo.

Un portafolio de ciudadanía incluye:
<ul>
<li><strong>Evidencias de acción:</strong> Fotos, videos, actas de reuniones donde el estudiante participó, proyectos realizados.</li>
<li><strong>Evidencias de reflexión:</strong> Textos donde el estudiante analiza su propio proceso de aprendizaje.</li>
<li><strong>Evidencias de relación:</strong> Cartas a compañeros, protocolos de mediación facilitados, coevaluaciones.</li>
<li><strong>Evidencias de transformación:</strong> Comparación entre una situación al inicio y una al final del período, con análisis de lo que cambió.</li>
</ul>

El portafolio tiene un componente esencial: la <strong>selección reflexiva</strong>. El estudiante no incluye todo: elige qué incluir y por qué. Esa elección ya es un acto metacognitivo.

<blockquote>"El portafolio no es un archivo: es una conversación del estudiante consigo mismo sobre quién está llegando a ser." <cite>— MEN, 2026, p. 157</cite></blockquote>`
        },
        {
          tipo: 'tabla',
          titulo: '4. Sistema de evaluación CC/CSE: combinando instrumentos',
          tabla: {
            cabeceras: ['Instrumento', 'Frecuencia', '¿Se califica?', 'Propósito pedagógico'],
            filas: [
              ['Observación sistemática', 'Diaria / semanal', 'No (informa pero no califica)', 'Ver patrones de comportamiento auténticos en situaciones reales'],
              ['Diario reflexivo del docente', 'Semanal', 'No (es del docente)', 'Monitorear el propio proceso y tomar decisiones pedagógicas'],
              ['Autoevaluación del estudiante', 'Mensual', 'Opcional (reflexión, no nota)', 'Desarrollar metacognición y autonomía en el aprendizaje'],
              ['Coevaluación entre pares', 'Bimestral', 'Puede contribuir a la nota (30% máx.)', 'Desarrollar empatía, perspectiva del otro, retroalimentación constructiva'],
              ['Rúbrica de desempeño', 'Por proyecto o unidad', 'Sí (evaluación del desempeño en situaciones)', 'Certificar el nivel alcanzado en competencias específicas'],
              ['Portafolio de ciudadanía', 'Al final del semestre', 'Sí (proceso + producto + reflexión)', 'Evidenciar la trayectoria de aprendizaje a lo largo del tiempo'],
              ['Situación problema auténtica', 'Por período', 'Sí (evaluación de integración)', 'Ver cómo el estudiante integra múltiples competencias en situación real'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'diseno',
          titulo: 'Diseño de un portafolio de ciudadanía',
          icono: '📁',
          instruccion: 'Diseña la estructura de un portafolio de ciudadanía para el nivel que enseñas: ¿Qué secciones tiene? ¿Qué tipos de evidencia incluye? ¿Cómo decide el estudiante qué incluir? ¿Cuándo y cómo se socializa? ¿Qué rúbrica usarías para evaluarlo?',
          tiempo: '25 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Práctica de retroalimentación formativa',
          icono: '💬',
          instruccion: 'Un docente comparte un trabajo real de un estudiante (sin identificarlo). El grupo practica dar retroalimentación en los 3 niveles (tarea, proceso, autorregulación). Contraste: ¿Cuánta retroalimentación solemos dar sobre la persona vs. sobre la tarea y el proceso?',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición final del curso',
          icono: '🪞',
          instruccion: 'Cierre del curso: escribe una carta a ti mismo/a como docente. ¿Qué aprendiste? ¿Qué cambió en tu comprensión? ¿Qué cambiarás en tu práctica el próximo mes? ¿En seis meses? ¿Qué necesitas para lograrlo?',
          tiempo: '20 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 4.2: Retroalimentación y portafolio (pp. 149-162)', url: '#', meta: 'Documento oficial' },
        { tipo: 'investigacion', titulo: 'Hattie & Timperley (2007) — The power of feedback', url: '#', meta: 'Meta-análisis sobre retroalimentación (d=0.73)' },
        { tipo: 'libro', titulo: 'Wiggins, G. (2012) — 7 keys to effective feedback', url: '#', meta: 'Guía práctica para docentes' },
        { tipo: 'herramienta', titulo: 'Plantilla de portafolio de ciudadanía — MEN', url: '#', meta: 'Herramienta descargable por nivel' },
      ],
      evaluacion: {
        titulo: 'Evaluación de cierre del curso',
        preguntas: [
          {
            pregunta: '¿Por qué la retroalimentación sobre la persona ("eres empático") es la menos efectiva?',
            opciones: [
              'Porque los estudiantes no valoran los elogios',
              'Porque no da información sobre qué hacer diferente; etiqueta sin orientar el aprendizaje y puede crear dependencia del juicio externo',
              'Porque viola la privacidad del estudiante',
              'Porque el MEN prohíbe cualquier tipo de elogio'
            ],
            correcta: 1,
            explicacion: 'Hattie demostró que la retroalimentación sobre el ego ("eres brillante", "eres flojo") tiene efectos negativos o nulos sobre el aprendizaje. La razón: no da información útil sobre qué cambiar. Los estudiantes aprenden a depender del juicio externo en lugar de desarrollar autorregulación. La retroalimentación más poderosa es sobre la tarea y el proceso.'
          },
          {
            pregunta: 'Según el MEN 2026, ¿qué hace especial al portafolio de ciudadanía frente a una carpeta de trabajos?',
            opciones: [
              'El portafolio tiene más hojas y más evidencias',
              'El portafolio incluye una selección reflexiva por parte del estudiante que ya es un acto metacognitivo; es una conversación del estudiante consigo mismo sobre quién está llegando a ser',
              'El portafolio usa formatos digitales mientras la carpeta es física',
              'El portafolio lo evalúa el rector; la carpeta el docente'
            ],
            correcta: 1,
            explicacion: 'La distinción fundamental es la reflexividad: el estudiante no solo archiva trabajos, sino que selecciona cuáles incluir y escribe por qué los eligió. Esa selección y justificación ya desarrolla metacognición, responsabilidad y narrativa de aprendizaje. La carpeta es depósito; el portafolio es construcción de identidad.'
          },
          {
            pregunta: '¿Cuál de los siguientes enunciados describe mejor la diferencia entre evaluación sumativa y formativa en el contexto de las CC y CSE?',
            opciones: [
              'La sumativa tiene notas y la formativa no',
              'La sumativa certifica logros finales; la formativa acompaña el proceso generando información útil para el aprendizaje continuo',
              'La sumativa la hace el docente; la formativa la hace el estudiante',
              'La sumativa es obligatoria por ley; la formativa es opcional'
            ],
            correcta: 1,
            explicacion: 'La evaluación formativa no es la opuesta de la sumativa (ambas pueden tener notas). La diferencia está en el propósito: la formativa genera información que se usa para tomar decisiones pedagógicas y de aprendizaje durante el proceso; la sumativa certifica un estado al final del proceso. En CC/CSE, la formativa es estructuralmente más poderosa porque el desarrollo ciudadano es un proceso lento y complejo.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Qué concepto de todo el curso ha transformado más profundamente tu comprensión de la educación ciudadana?',
          '¿Qué aspecto de los Lineamientos MEN 2026 te genera más resistencia? ¿A qué crees que se debe esa resistencia?',
          '¿Cuál es el primer cambio concreto y realista que implementarás en tu práctica la próxima semana?',
          '¿Qué necesitas de tu institución para que los cambios que quieres hacer sean sostenibles?'
        ]
      }
    }
  ]
});
