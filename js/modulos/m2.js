/* ══════════════════════════════════════════════════════════
   M2 — El Modelo Concéntrico
   Fuente: Capítulo 2, sección 2.6 (pp. 34-40)
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm2',
  num: 'Módulo 2',
  icon: '🎯',
  color: '#B35900',
  bg: '#FFF3E0',
  titulo: 'El Modelo Concéntrico',
  subtitulo: 'Cuatro ejes coexistentes: Yo · Otros · Sociedad · Mundo',
  duracion: '1 sesión · 90 min',
  descripcion: 'Comprendemos el modelo concéntrico como cartografía de la formación humana: cuatro ejes interdependientes que organizan el sentido formativo de las competencias ciudadanas y socioemocionales.',
  sesiones: [
    {
      id: 's2_0',
      num: 'Sesión única',
      titulo: 'El modelo concéntrico: cartografía de la formación humana',
      duracion: '90 min',
      tipo: 'Marco organizador',
      objetivo: 'Comprender el modelo concéntrico como recurso organizador del sentido formativo, identificar sus cuatro ejes, sus fundamentos teóricos y sus implicaciones para el diseño curricular situado.',

      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. ¿Qué es el modelo concéntrico y qué NO es?',
          texto: `El modelo concéntrico es uno de los aportes más originales y potentes del documento MEN 2026. Es fundamental entender primero lo que <strong>no es</strong>:

<blockquote>"La propuesta de ejes de interacción no debe entenderse como una representación geométrica del desarrollo humano, sino como un recurso organizador del sentido formativo. La referencia inicial a lo concéntrico no pretende describir trayectorias lineales ni expansiones uniformes, sino señalar que la formación implica la articulación de distintos ámbitos de experiencia —personal, interpersonal y social— que se encuentran estructuralmente relacionados." <cite>— MEN, 2026, p. 34</cite></blockquote>

Los ejes concéntricos <strong>NO son:</strong>
<ul>
<li>Etapas sucesivas que se superan una a una.</li>
<li>Niveles jerárquicos donde lo "interior" es menos importante.</li>
<li>Un camino lineal de adentro hacia afuera.</li>
</ul>

Los ejes concéntricos <strong>SÍ son:</strong>
<ul>
<li>Dimensiones <em>coexistentes</em> de la experiencia humana que se constituyen simultáneamente.</li>
<li>Un marco que puede transformarse en <em>grado de conciencia, elaboración y responsabilidad</em>.</li>
<li>Una cartografía que describe cómo el sujeto se sitúa en distintos tipos de relación.</li>
</ul>`
        },
        {
          tipo: 'grafico',
          titulo: '2. Los cuatro ejes del modelo concéntrico (Figura 2, MEN 2026)',
          tipo_grafico: 'concentrico_svg',
          nota: 'Fuente: Figura 2, MEN 2026, p. 35. Los círculos no representan jerarquía ni etapas: son dimensiones coexistentes de la experiencia humana.',
          datos: [
            { eje: 'A', label: 'Yo conmigo mismo', color: '#0C7A4A', desc: 'Identidad personal, autoconciencia, regulación emocional, autocuidado. Base del desarrollo humano desde la que emerge la reflexividad y la toma de decisiones.' },
            { eje: 'B', label: 'Yo con los otros', color: '#1A4FA0', desc: 'Diálogo, empatía, construcción de vínculos, reconocimiento de la diversidad, negociación de diferencias.' },
            { eje: 'C', label: 'Yo con la sociedad', color: '#B35900', desc: 'Sentido de pertenencia, comprensión histórica, participación comunitaria, compromiso con el bien común.' },
            { eje: 'D', label: 'Yo con el mundo', color: '#5A2E8A', desc: 'Conciencia ecológica, ciudadanía global, responsabilidad planetaria, comprensión intercultural.' },
          ]
        },
        {
          tipo: 'tabla',
          titulo: '3. Fundamentos teóricos de cada eje',
          tabla: {
            cabeceras: ['Eje', 'Fundamento teórico clave', 'Cita del documento MEN 2026'],
            filas: [
              ['A — Yo conmigo mismo', 'Bisquerra (2009) y Damasio (2010): el reconocimiento de las propias emociones constituye el núcleo desde el cual emergen la reflexividad y el autocuidado.', '"Sin autoconocimiento no es posible una relación auténtica con los otros ni una participación ética en la vida colectiva." (p. 37)'],
              ['B — Yo con los otros', 'Gilligan (1982), Noddings (2003), Gadamer (2006): la identidad humana es constitutivamente relacional. Nos conocemos en la medida en que somos reconocidos.', '"La relación con el otro es constitutiva de la identidad humana." (p. 38)'],
              ['C — Yo con la sociedad', 'Arendt (1958), Taylor (1994): el ser humano es político porque aparece en un mundo compartido donde sus acciones tienen impacto público.', '"Aprender a situarse en narrativas sociales, interpretar estructuras de poder, participar en procesos deliberativos orientados a la justicia." (p. 38-39)'],
              ['D — Yo con el mundo', 'Boff (2002), Torres (2019), UNESCO (2015): el ser humano es habitante del mundo inscrito en redes ecológicas, culturales y geopolíticas.', '"Responsabilidad compartida y compromiso con la sostenibilidad del planeta y la convivencia global." (p. 39)'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '4. La interdependencia entre los ejes: lo que cambia uno cambia a los demás',
          texto: `El hallazgo más profundo del modelo concéntrico es la <strong>interdependencia recursiva</strong> entre los cuatro ejes. El documento lo expresa así:

<ul>
<li>La relación con otros <strong>transforma</strong> la comprensión de sí mismo.</li>
<li>La participación social <strong>configura</strong> los vínculos interpersonales.</li>
<li>La conciencia global <strong>da nuevo sentido</strong> a la identidad personal y al lugar en la comunidad.</li>
</ul>

Esto tiene una implicación pedagógica poderosa: <strong>no hay un orden correcto para trabajar las competencias</strong>. Una actividad de consciencia ambiental (eje D) puede transformar la autoestima de un estudiante (eje A). Un trabajo de reconciliación comunitaria (eje C) puede enseñar empatía (eje B).

El modelo concéntrico dice: <em>todo está conectado</em>. El docente inteligente trabaja esa conectividad.

<blockquote>"La formación integral es un movimiento expansivo que articula la subjetividad, la comunidad y la experiencia compartida del mundo." <cite>— MEN, 2026, p. 40</cite></blockquote>`
        },
        {
          tipo: 'tabla',
          titulo: '5. Las 7 CC y las 7 CSE organizadas según el modelo concéntrico',
          tabla: {
            cabeceras: ['Eje de interacción', 'Competencias Ciudadanas (CC)', 'Competencias Socioemocionales (CSE)'],
            filas: [
              ['A — Yo conmigo mismo', 'Base transversal de todas las CC: la persona que puede relacionarse con la sociedad primero se conoce a sí misma.', 'CSE 1: Conciencia emocional\nCSE 2: Regulación emocional\nCSE 3: Toma de decisiones éticas'],
              ['B — Yo con los otros', 'CC 1: Convivencia pacífica y reconciliación\nCC 5: Diversidad e identidad', 'CSE 4: Empatía y reconocimiento del otro\nCSE 5: Habilidades de relación y resolución de conflictos'],
              ['C — Yo con la sociedad', 'CC 2: Justicia social y equidad\nCC 3: Participación democrática\nCC 4: Competencia histórica', 'CSE 6: Emociones colectivas y participación ciudadana\nCSE 7: Resiliencia comunitaria y esperanza'],
              ['D — Yo con el mundo', 'CC 6: Sostenibilidad y cuidado ambiental\nCC 7: Ciudadanía digital y mediática', 'CSE — Transversal: la conciencia planetaria requiere todas las CSE'],
            ]
          }
        }
      ],

      actividades: [
        {
          tipo: 'individual',
          titulo: 'Autoevaluación del eje más trabajado y el más descuidado',
          icono: '⚖️',
          instruccion: 'Traza un radar personal: ¿Cuánto trabajas cada eje en tu práctica docente habitual? Pontúa del 1 al 5 cada eje. ¿Hay un eje que consistentemente descuidas? ¿Por qué? ¿Es una decisión consciente o una omisión involuntaria?',
          tiempo: '15 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Análisis de situaciones escolares reales',
          icono: '🎭',
          instruccion: 'Tu rector anuncia que reducirá la hora de ética para dar más matemáticas porque las Pruebas Saber bajaron. En grupos: ¿Cómo afecta esta decisión a cada uno de los cuatro ejes del modelo concéntrico? ¿Qué argumentos usarías desde el modelo para fundamentar la importancia de mantenerla?',
          tiempo: '25 min'
        },
        {
          tipo: 'diseno',
          titulo: 'Diseño de una actividad integradora',
          icono: '✏️',
          instruccion: 'Diseña una actividad para tu área que trabaje SIMULTÁNEAMENTE al menos 3 de los 4 ejes. Explica qué eje trabaja cada componente de la actividad y cómo se produce la interdependencia entre ellos.',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi propio modelo concéntrico',
          icono: '🪞',
          instruccion: 'Escribe: "Si dibujara mi propio modelo concéntrico como persona (no solo como docente), el eje que está más desarrollado en mí es... y el que más necesito cultivar es... Esto impacta mi práctica docente de la siguiente manera..."',
          tiempo: '15 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 2.6: Modelo concéntrico (pp. 34-41)', url: '#', meta: 'Documento oficial — lectura esencial' },
        { tipo: 'libro', titulo: 'Bronfenbrenner, U. — La ecología del desarrollo humano', url: '#', meta: 'Teoría base del modelo' },
        { tipo: 'libro', titulo: 'Gadamer, H.G. — Verdad y método', url: '#', meta: 'Fundamento hermenéutico del eje B' },
        { tipo: 'libro', titulo: 'Arendt, H. (1958) — La condición humana', url: '#', meta: 'Fundamento del eje C: la vita activa' },
      ],

      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál es la diferencia más importante entre los ejes concéntricos y las "etapas" del desarrollo?',
            opciones: [
              'Los ejes son más modernos que las etapas de Piaget',
              'Los ejes son dimensiones coexistentes que se constituyen simultáneamente, no fases sucesivas que se superan',
              'Los ejes aplican solo para adultos; las etapas aplican para niños',
              'Las etapas son biológicas; los ejes son exclusivamente culturales'
            ],
            correcta: 1,
            explicacion: 'El MEN enfatiza que los ejes concéntricos NO son etapas sucesivas. Son dimensiones coexistentes: el yo, los otros, la sociedad y el mundo no aparecen uno después del otro, sino que se constituyen simultáneamente. Lo que cambia es el grado de conciencia y elaboración de cada dimensión.'
          },
          {
            pregunta: 'Según el modelo concéntrico, ¿qué ocurre cuando se trabaja el eje D (Yo con el mundo)?',
            opciones: [
              'Solo se desarrolla la competencia de sostenibilidad ambiental',
              'Se afectan únicamente los conocimientos sobre el medio ambiente',
              'Puede transformarse también la identidad personal (eje A) y los vínculos interpersonales (eje B), por la interdependencia recursiva del modelo',
              'No tiene relación con los otros ejes porque es el más externo'
            ],
            correcta: 2,
            explicacion: 'La interdependencia recursiva es central en el modelo: trabajar cualquier eje transforma a los demás. Una actividad de conciencia planetaria (eje D) puede fortalecer la identidad personal (eje A) y generar vínculos de solidaridad (eje B). Todo está conectado.'
          },
          {
            pregunta: '¿Qué diferencia el eje B ("Yo con los otros") del eje C ("Yo con la sociedad")?',
            opciones: [
              'El eje B trabaja con grupos pequeños; el C con grupos grandes',
              'El eje B se centra en la relación cara a cara (microética); el C en la inserción en marcos institucionales, normativos y políticos (macroética)',
              'El eje B es para primaria; el eje C es para secundaria',
              'No hay diferencia real: ambos trabajan las relaciones sociales'
            ],
            correcta: 1,
            explicacion: 'El eje B opera en el plano microético de la relación interpersonal directa (empatía, diálogo, vínculos). El eje C se sitúa en el plano macroético: la inserción del sujeto en estructuras sociales, instituciones, narrativas históricas y sistemas de poder que regulan la vida colectiva.'
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Qué te resultó más revelador del modelo concéntrico: su interdependencia, sus fundamentos teóricos, o su diferencia con el concepto de "etapas"?',
          '¿Qué eje está más ausente en el currículo de tu institución? ¿Por qué crees que ocurre eso?',
          '¿Cómo cambiaría la reunión de docentes de tu institución si todos compartieran la comprensión del modelo concéntrico?'
        ]
      }
    }
  ]
});
