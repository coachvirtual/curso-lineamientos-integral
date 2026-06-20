/* ══════════════════════════════════════════════════════════
   M2 — Los Ejes Curriculares Relacionales
   Fuente verificada: MEN (2026), Lineamientos Curriculares para la
   Formación Integral en Educación Inicial, Básica y Media.
   Capítulo 2, sección 2.1 "Componentes e interacciones de la
   formación integral" (pp. 25-29), y Figura 2, p. 29.

   v2: contenido recortado a lo esencial, actividades con entregable
   verificable, evaluación por evidencia de aplicación (no quiz).
   Guion de video complementario: ver /guiones/m2_s0.md
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm2',
  num: 'Módulo 2',
  icon: '🎯',
  color: '#B35900',
  bg: '#FFF3E0',
  titulo: 'Los Ejes Curriculares Relacionales',
  subtitulo: 'Cuatro relaciones que organizan la formación integral: consigo mismo/a, con los otros, con la vida y el entorno, con el mundo y las tecnologías',
  duracion: '1 sesión · 50-60 min',
  descripcion: 'Identificamos las cuatro relaciones que organiza el documento MEN 2026 y las usamos para rediseñar una actividad real de tu aula.',
  sesiones: [
    {
      id: 's2_0',
      num: 'Sesión única',
      titulo: 'Los ejes curriculares relacionales: una red de vínculos, no una escalera',
      duracion: '50-60 min',
      tipo: 'Marco organizador',
      video: { titulo: 'Los ejes curriculares relacionales en 6 minutos', guion: 'guiones/m2_s0.md', duracion_estimada: '5-7 min' },
      objetivo: 'Reconocer las cuatro relaciones de los ejes curriculares relacionales y usarlas para rediseñar una actividad real de tu práctica docente.',

      contenido: [
        {
          tipo: 'video',
          titulo: 'Video — Las cuatro relaciones (5-7 min)',
          texto: `Antes de leer, mira el video de esta sesión (guion en /guiones/m2_s0.md). Resume la idea central: la formación integral se organiza en cuatro relaciones que el sujeto sostiene simultáneamente, no en una escalera de etapas. El texto de abajo es apoyo de lectura rápida, no un sustituto del video.`
        },
        {
          tipo: 'lectura',
          titulo: 'La idea central, en un párrafo',
          texto: `El documento MEN 2026 (sección 2.1, p. 25) describe la formación integral como una categoría que resiste la fragmentación del sujeto —citando a Han (2012) sobre la fragmentación por productividad, y a Esquirol (2006, 2015) sobre la atención como cuidado—. A partir de ahí organiza cuatro relaciones que el documento llama ejes curriculares relacionales (pp. 25-26): consigo mismo/a, con los otros seres humanos, con la vida y el entorno, y con el mundo y las tecnologías. El documento es explícito (pp. 26-27): no son etapas sucesivas ni niveles jerárquicos, sino una red de vínculos que se sostiene, además, en una ética del cuidado fundamentada en Tronto (2018) y Gilligan (2013): poner atención, responsabilizarse, tener competencia y responder.`
        },
        {
          tipo: 'grafico',
          titulo: 'Las cuatro relaciones (Figura 2, MEN 2026, p. 29)',
          tipo_grafico: 'concentrico_svg',
          nota: 'Fuente: Figura 2, MEN 2026, p. 29. No son jerárquicas ni etapas sucesivas: son dimensiones simultáneas (p. 27).',
          datos: [
            { eje: 'A', label: 'Consigo mismo/a', color: '#0C7A4A', desc: 'Identidad, autonomía, competencias socioemocionales.' },
            { eje: 'B', label: 'Con los otros seres humanos', color: '#1A4FA0', desc: 'Vínculos éticos y empáticos, convivencia, justicia.' },
            { eje: 'C', label: 'Con la vida y el entorno', color: '#B35900', desc: 'Conciencia ecológica, interdependencia con el territorio.' },
            { eje: 'D', label: 'Con el mundo y las tecnologías', color: '#5A2E8A', desc: 'Pensamiento crítico frente a lo global y lo digital.' },
          ]
        }
      ],

      actividades: [
        {
          tipo: 'diseno',
          titulo: 'Entregable: rediseña una actividad que ya usas',
          icono: '✏️',
          instruccion: 'Trae una actividad real que ya hagas en tu clase (no inventada). Identifica qué relación(es) de las cuatro trabaja hoy. Luego rediseña la consigna para que trabaje, de forma explícita, al menos dos relaciones más. Escribe la versión "antes" y la versión "después" de la consigna. Esto se usa como insumo de tu evidencia de aplicación más abajo.',
          tiempo: '20 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Contraste entre pares',
          icono: '🎭',
          instruccion: 'Intercambia tu actividad rediseñada con un/a colega (presencial o por el diario pedagógico). Pídele que identifique qué relación falta o está débil en tu versión "después". Ajusta tu consigna con esa retroalimentación antes de guardar tu evidencia final.',
          tiempo: '15 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Verificación rápida',
          icono: '🪞',
          instruccion: 'En una frase: ¿qué relación descuidas sistemáticamente en tu práctica y por qué? Esta frase la usarás en el campo 3 de tu evidencia de aplicación.',
          tiempo: '5 min'
        }
      ],

      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — Sección 2.1 (pp. 25-29)', url: '#', meta: 'Documento oficial — lectura de respaldo' },
        { tipo: 'doc', titulo: 'MEN 2026 — Figura 2 (p. 29)', url: '#', meta: 'Diagrama de referencia' },
        { tipo: 'video', titulo: 'Guion del video de la sesión', url: 'guiones/m2_s0.md', meta: 'Para grabar o ver' },
      ],

      evaluacion: {
        tipo: 'evidencia',
        titulo: 'Evidencia de aplicación',
        instrucciones: 'Esta sesión no se evalúa con preguntas de opción múltiple. Completa estos tres campos a partir de la actividad real que rediseñaste arriba. Es lo que llevarás a tu aula esta semana.',
        prompts: [
          {
            label: '1. Tu actividad real, antes y después',
            ayuda: 'Pega la consigna original y la versión rediseñada que trabajaste en la actividad de diseño.',
            placeholder: 'Antes: ...\nDespués: ...',
            filas: 5
          },
          {
            label: '2. Confronta tu rediseño con el marco teórico',
            ayuda: 'Explica, citando las relaciones por su nombre, qué relación(es) trabajaba tu actividad original y cuáles incorporaste al rediseñarla. ¿Dónde hubo tensión o dificultad real, no teórica?',
            placeholder: 'Mi actividad original trabajaba la relación... porque... Al rediseñarla incorporé...',
            filas: 5
          },
          {
            label: '3. Compromiso de aula',
            ayuda: 'Indica en qué grupo y en qué fecha aproximada vas a aplicar la versión rediseñada, y qué evidencia traerás la próxima sesión (foto, trabajo de estudiantes, registro de observación).',
            placeholder: 'La aplicaré con el grupo... el día... Traeré como evidencia...',
            filas: 3
          }
        ]
      },

      metacognicion: {
        preguntas: [
          '¿Qué cambió realmente en tu consigna al pasar de "antes" a "después", más allá de añadir palabras del marco teórico?',
          '¿Qué relación está más ausente en el currículo de tu institución, no solo en tu clase?'
        ]
      }
    }
  ]
});
