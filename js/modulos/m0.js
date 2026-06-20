/* ══════════════════════════════════════════════════════════
   M0 — Introducción y Contexto
   Fuente verificada: MEN (2026), Lineamientos Curriculares para la
   Formación Integral en Educación Inicial, Básica y Media.
   Carta de presentación (p.7), Introducción (pp.11-13),
   Capítulo 1 (pp.14-23).

   v2: contenido recortado, actividades con entregable verificable,
   evaluación por evidencia de aplicación. Se retiró el marco
   "7 CC + 7 CSE / modelo concéntrico" por no estar verificado contra
   el documento real; se usa en su lugar lo que el documento sí dice:
   formación integral, 9 dimensiones del ser, ejes curriculares
   relacionales y la Ley 115 de 1994 como marco legal de origen.
   Guiones de video: /guiones/m0_s0.md y /guiones/m0_s1.md
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm0',
  num: 'Módulo 0',
  icon: '🧭',
  color: '#0C7A4A',
  bg: '#E6F6EE',
  titulo: 'Introducción y Contexto',
  subtitulo: 'De dónde viene el documento y qué entiende por "formación integral"',
  duracion: '2 sesiones · 60-70 min c/u',
  descripcion: 'Por qué el MEN actualizó estos lineamientos, su marco legal de origen, y qué significa "formación integral" en este documento.',
  sesiones: [
    {
      id: 's0_0',
      num: 'Sesión 1',
      titulo: '¿Por qué nuevos lineamientos? Origen y marco legal',
      duracion: '60 min',
      tipo: 'Contexto histórico',
      video: { titulo: 'De la Ley 115 a los lineamientos 2026, en 6 minutos', guion: 'guiones/m0_s0.md', duracion_estimada: '5-6 min' },
      objetivo: 'Ubicar los Lineamientos MEN 2026 dentro de la trayectoria normativa colombiana desde 1991, y distinguir qué son y qué no son estos lineamientos.',

      contenido: [
        {
          tipo: 'video',
          titulo: 'Video — Origen y marco legal (5-6 min)',
          texto: 'Mira el video antes de leer (guion en /guiones/m0_s0.md). Resume de dónde viene este documento y, sobre todo, qué NO es: no es una prescripción rígida que toca implementar igual en todo el país.'
        },
        {
          tipo: 'lectura',
          titulo: 'La idea central',
          texto: `Los lineamientos son el resultado de un <strong>proyecto colectivo nacional</strong> liderado por el MEN en convenio con la Universidad de Antioquia, construido en cinco fases (alistamiento, exploración, construcción colectiva, validación y ajuste, socialización), con la participación de <strong>más de 4000 voces</strong> de comunidades educativas en mesas territoriales (Agradecimientos, p. 9; Introducción, pp. 11-12).

Se apoyan en la <strong>Ley 115 de 1994</strong> (Ley General de Educación), que ya establecía la formación integral como horizonte de la educación colombiana (artículo 5 y artículo 78), y en el artículo 76, que define los lineamientos curriculares como "un conjunto de criterios, planes de estudio, programas, metodologías y procesos que contribuyen a la formación integral y a la construcción de la identidad cultural nacional, regional y local" (citado en el documento, p. 13).

El documento es explícito sobre lo que NO es: una imposición uniforme. Para los pueblos y comunidades étnicas, "estos lineamientos son un horizonte de posibilidad para la toma de decisiones, pero no constituyen una imposición" (Carta de presentación, p. 8); cada institución los adapta con autonomía a su contexto territorial.`
        },
        {
          tipo: 'tabla',
          titulo: 'Línea de tiempo normativa (verificada contra el documento, p. 14-18)',
          tabla: {
            cabeceras: ['Año', 'Hito', 'Qué aportó'],
            filas: [
              ['1991', 'Constitución Política', 'Educación como derecho y servicio público con función social (art. 67).'],
              ['1994', 'Ley 115 — Ley General de Educación', 'Establece la formación integral como horizonte de la educación (arts. 5, 76, 78).'],
              ['1998', 'Primeros lineamientos curriculares por área', 'Matemáticas, Lengua Castellana, Ciencias, Ética y Valores, entre otros.'],
              ['2006', 'Estándares Básicos de Competencias', 'Consolidan el enfoque por competencias en el currículo nacional.'],
              ['2016', 'Ley 1804 — Política de Estado para la Primera Infancia', 'Desarrollo integral desde la educación inicial.'],
              ['2017', 'Decreto 1421 — Educación inclusiva', 'Ajustes razonables y atención a la diversidad como parte del derecho a la educación.'],
              ['2026', 'Lineamientos para la Formación Integral (este documento)', 'Actualización curricular con perspectiva de formación integral, dimensiones del ser y ejes curriculares relacionales.'],
            ]
          }
        }
      ],

      actividades: [
        {
          tipo: 'diseno',
          titulo: 'Entregable: ubica tu institución en el mapa normativo',
          icono: '📍',
          instruccion: 'Revisa el Proyecto Educativo Institucional (PEI) de tu colegio o el plan de área que más conoces. Identifica una frase o principio que venga directamente de alguno de los hitos de la tabla (por ejemplo, algo que remita a la Ley 115 o al Decreto 1421). Escríbela tal cual aparece en tu PEI.',
          tiempo: '15 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Lo que esto cambia',
          icono: '🪞',
          instruccion: 'En una frase: con base en lo que viste en el video y la lectura, ¿qué margen real de autonomía tiene tu institución frente a este documento? Da un ejemplo concreto de algo que tu colegio podría adaptar a su contexto sin violar el marco legal.',
          tiempo: '10 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Carta de presentación e Introducción (pp. 7-13)', url: '#', meta: 'Documento oficial' },
        { tipo: 'doc', titulo: 'Ley 115 de 1994 — Ley General de Educación', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0115_1994.html', meta: 'Texto legal completo' },
        { tipo: 'video', titulo: 'Guion del video de la sesión', url: 'guiones/m0_s0.md', meta: 'Para grabar o ver' },
      ],

      evaluacion: {
        tipo: 'evidencia',
        titulo: 'Evidencia de aplicación',
        instrucciones: 'Completa estos campos con base en el documento institucional que revisaste en la actividad.',
        prompts: [
          {
            label: '1. Tu hallazgo en el PEI o plan de área',
            ayuda: 'Pega la frase o principio que identificaste y el hito normativo con el que se relaciona.',
            placeholder: 'En nuestro PEI dice... y se relaciona con...',
            filas: 4
          },
          {
            label: '2. Qué autonomía real existe',
            ayuda: 'A partir del ejemplo concreto que diste en la reflexión, explica qué margen de adaptación tiene tu institución y por qué no es una camisa de fuerza.',
            placeholder: 'Mi institución podría adaptar... porque el documento permite...',
            filas: 4
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Qué conocías ya de este marco normativo antes de hoy?',
          '¿Cuál de los hitos ha tenido más impacto real en tu práctica cotidiana?'
        ]
      }
    },

    {
      id: 's0_1',
      num: 'Sesión 2',
      titulo: '¿Qué significa "formación integral" en este documento?',
      duracion: '60 min',
      tipo: 'Marco conceptual',
      video: { titulo: 'Formación integral: ni solo cognición, ni una lista de valores', guion: 'guiones/m0_s1.md', duracion_estimada: '5-6 min' },
      objetivo: 'Comprender la formación integral como categoría ontológica, política y pedagógica, y reconocer las dimensiones del ser que el documento articula.',

      contenido: [
        {
          tipo: 'video',
          titulo: 'Video — ¿Qué es la formación integral? (5-6 min)',
          texto: 'Mira el video (guion en /guiones/m0_s1.md) antes de leer. La idea clave: la formación integral no es una lista de materias nuevas que sumar, es una forma de mirar lo que ya enseñas.'
        },
        {
          tipo: 'lectura',
          titulo: 'La idea central',
          texto: `El documento (sección 2.1, p. 25) define la formación integral como una <strong>categoría ontológica, política y pedagógica</strong>: no es una técnica ni una asignatura, es una manera de comprender al ser humano que resiste su fragmentación en partes inconexas (cognitiva por un lado, emocional por otro, ética por otro).

Para organizar esta mirada, el documento (sección 2.4, pp. 35-45) describe <strong>nueve dimensiones del ser</strong>: ambiental, ciudadana y política, cognitiva, comunicativa y creativa, corporal, cultural, ética, histórica y de memoria histórica, y socioemocional. No son materias separadas: son lentes que pueden activarse simultáneamente en una sola actividad.

El documento es enfático (sección 2.1, p. 26): formación integral <strong>no significa</strong> "moldear" al estudiante con una lista cerrada de categorías. Cita a Edgar Morin (1999) para plantearla como una forma de religar conocimientos que el currículo fragmentó, dejando espacio a la indeterminación y a la potencialidad propia del sujeto.`
        },
        {
          tipo: 'lectura',
          titulo: 'Implicación práctica',
          texto: `Esto tiene una consecuencia directa para el aula: una misma actividad —una huerta escolar, un debate, un proyecto de escritura— puede trabajar varias dimensiones del ser a la vez, sin que eso implique más tiempo de clase ni una asignatura nueva. El reto no es "agregar formación integral" a lo que ya haces, sino volver visibles las dimensiones que tu actividad ya toca y las que sistemáticamente deja por fuera.`
        }
      ],

      actividades: [
        {
          tipo: 'diseno',
          titulo: 'Entregable: rastrea las dimensiones en tu plan de clase',
          icono: '🔍',
          instruccion: 'Toma el plan de una clase real que dictaste la semana pasada. De las nueve dimensiones del ser (ambiental, ciudadana y política, cognitiva, comunicativa y creativa, corporal, cultural, ética, histórica y de memoria histórica, socioemocional), marca cuáles trabajó explícitamente tu clase y cuáles no.',
          tiempo: '15 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'El patrón que se repite',
          icono: '🪞',
          instruccion: 'Mirando tus últimas semanas de clase (no solo la de la actividad anterior): ¿qué dimensión aparece casi siempre y cuál casi nunca? ¿Es una decisión consciente tuya, una limitación del área que enseñas, o algo institucional?',
          tiempo: '10 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 2.1 y 2.4 (pp. 25-26, 35-45)', url: '#', meta: 'Documento oficial' },
        { tipo: 'video', titulo: 'Guion del video de la sesión', url: 'guiones/m0_s1.md', meta: 'Para grabar o ver' },
      ],

      evaluacion: {
        tipo: 'evidencia',
        titulo: 'Evidencia de aplicación',
        instrucciones: 'Completa estos campos con base en el plan de clase que revisaste.',
        prompts: [
          {
            label: '1. Tu mapeo de dimensiones',
            ayuda: 'Lista las dimensiones que sí trabajó tu clase y las que no, con un ejemplo concreto de cada una marcada como presente.',
            placeholder: 'Presentes: cognitiva (porque...), socioemocional (porque...)\nAusentes: ambiental, histórica...',
            filas: 5
          },
          {
            label: '2. El patrón identificado',
            ayuda: 'Explica el patrón que detectaste en la reflexión: qué dimensión casi nunca aparece en tus clases y a qué crees que se debe.',
            placeholder: 'La dimensión que casi nunca trabajo es... porque...',
            filas: 4
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Cómo cambia tu idea de "enseñar ciudadanía" después de esta sesión?',
          '¿Qué dimensión quieres incorporar de forma más consciente la próxima semana?'
        ]
      }
    }
  ]
});
