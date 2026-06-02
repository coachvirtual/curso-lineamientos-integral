/* ══════════════════════════════════════════
   MÓDULO 4: COMPETENCIAS SOCIOEMOCIONALES (7 CSE) + DEEP DIVE
   ══════════════════════════════════════════ */

if (typeof MODULOS === 'undefined') { var MODULOS = []; }

MODULOS.push({ 
  id: 'm4', 
  num: 'Módulo 4', 
  color: '#993556', 
  bg: '#FBEAF0', 
  icon: 'ti-heart',
  title: 'Competencias Socioemocionales',
  sub: 'Siete capacidades esenciales para habitar la interioridad y la relación humana',
  sesiones: [
    { 
      title: 'CSE-1: Conciencia emocional — El Diccionario Fisiológico', 
      tipo: 'Competencia Socioemocional 1', 
      dur: '75 min',
      obj: [
        'Identificar, nombrar y mapear las expresiones corporales de las emociones propias y ajenas.',
        'Apropiar el concepto de las emociones como juicios evaluativos de valor (Nussbaum).',
        'Desarrollar la granularidad emocional de los estudiantes para optimizar la comunicación.'
      ],
      contenidos: [
        'La conciencia emocional como la base indispensable de la infraestructura de todo el Desarrollo Socioemocional.',
        'Las emociones como juicios de valor que revelan lo que consideramos importante para nuestro bienestar (Nussbaum).',
        'La granularidad emocional (Barrett): Ampliar el vocabulario de emociones similares permite respuestas conductuales más adaptativas y precisas.'
      ],
      actividades: [
        'Dinámica de Aula "El Diccionario Fisiológico": Guía un ejercicio de escaneo corporal donde tus estudiantes identifiquen y registren cartográficamente en qué partes del cuerpo experimentan físicamente la rabia, el miedo, la indignación o la tristeza antes de que estas se desborden de forma conductual.',
        'Bitácora emocional: Confección de una libreta reflexiva que registre detonadores, variaciones de pulso y pensamientos.',
        'Taller semántico: Pasar de estados genéricos vagos ("estoy mal") a precisiones conceptuales claras ("me siento frustrado, ignorado o decepcionado").'
      ],
      recursos: [
        'Herramienta visual: Rueda Expandida de las Emociones y Ficha de Registro Corporal',
        'Lectura técnica: Nussbaum, M. (2001). Upheavals of thought: The intelligence of emotions'
      ],
      rq: 'Cuando un estudiante reacciona con agresividad o apatía, ¿intentas castigar la conducta externa directamente o eres capaz de descifrar la emoción y el juicio de valor oculto que están detonando esa respuesta?',
      aq: 'Análisis analítico sobre tus propios disparadores corporales y conductuales en las horas de mayor saturación laboral.'
    },
    { 
      title: 'CSE-2: Regulación emocional — Primeros Auxilios Emocionales', 
      tipo: 'Competencia Socioemocional 2', 
      dur: '75 min',
      obj: [
        'Comprender la regulación emocional como un proceso activo de reevaluación cognitiva.',
        'Diferenciar técnicamente entre regulación adaptativa, supresión e inundación emocional.',
        'Implementar la co-regulación docente como estrategia primordial para estabilizar crisis de aula.'
      ],
      contenidos: [
        'El modelo procesual de regulación emocional (Gross): Selección de la situación, modificación, despliegue atencional, cambio cognitivo y modulación de la respuesta.',
        'El peligro de la supresión emocional crónica: Consecuencias psicosomáticas y afectación severa de las relaciones interpersonales.',
        'El docente como modelo de co-regulación: La calma se transmite a través del sistema nervioso, el tono de voz y la postura física corporal.'
      ],
      actividades: [
        'Simulador de Emergencia "Primeros Auxilios Emocionales": Enfréntate a una situación interactiva de desregulación masiva en el aula. Diseña un protocolo de intervención física y verbal basado en el uso intencional del tono de voz, la postura y técnicas de respiración consciente antes de emitir palabras.',
        'Diseño del Rincón de la Calma: Estructuración de un espacio físico pedagógico en el salón que cuente con recursos sensoriales autorreguladores, normalizando su uso no como castigo, sino como derecho de autocuidado.',
        'Análisis de detonadores docentes: Ejercicio de reevaluación cognitiva aplicado a los propios disparadores de frustración del educador.'
      ],
      recursos: [
        'Protocolo de Choque: Guía de Co-regulación y Primeros Auxilios Emocionales en el Aula',
        'Lectura complementaria: Gross, J.J. (2014). Handbook of emotion regulation'
      ],
      rq: '¿Cuál es tu detonador emocional más recurrente en el aula de clases? Cuando ese disparador se activa, ¿qué estrategia real de reevaluación o pausa utilizas para evitar engancharte en una lucha de poder con el estudiante?',
      aq: '¿Qué tan preparado/a te sientes para mantener la calma profunda y modelar la co-regulación cuando un salón se encuentra desbordado emocionalmente?'
    }
  ],
  quiz: [
    {
      q: 'Al aplicar el modelo procesual de regulación emocional (CSE-2) en el aula a través de los "Primeros Auxilios Emocionales", ¿qué acción define a la co-regulación docente adaptativa?',
      opts: [
        'Gritar más fuerte que el estudiante desregulado para imponer la autoridad legítima en el salón de clases de forma inmediata.',
        'Utilizar de forma consciente el sistema nervioso del propio educador (manteniendo un tono de voz pausado, una postura física corporal no amenazante y una respiración profunda) para estabilizar el entorno antes de intervenir verbalmente.',
        'Ignorar por completo la conducta del estudiante desregulado hasta que se calme de forma autónoma en el pasillo.',
        'Enviar inmediatamente al estudiante a la coordinación de convivencia sin entablar ningún tipo de diálogo o contención.'
      ],
      c: 1,
      exp: 'La co-regulación parte del principio de que el sistema nervioso del docente actúa como un ancla para el estudiante en crisis. Al modelar y proyectar calma física, corporal y tonal, se reduce la reactividad cerebral del alumno, permitiendo una intervención formativa posterior.'
    }
  ]
});

// BASE DE DATOS EXCLUSIVA PARA EL PANEL DE DEEP DIVE EXTERNO DE LA PÁGINA 2
const CSE = [
  { 
    id: 'cse1', 
    num: 'CSE-1', 
    color: '#534AB7', 
    bg: '#EEEDFE', 
    tc: '#3C3489', 
    icon: 'ti-eye',
    title: 'Conciencia emocional', 
    eje: 'Yo conmigo mismo',
    def: 'Capacidad de identificar, nombrar y comprender las propias emociones y las de los demás, reconociendo las señales corporales, cognitivas y contextuales que las generan.',
    secuencia: [
      { fase: 'Apertura (Termómetro de Granularidad)', tiempo: '15 min', desc: 'Rutina de conciencia corporal profunda: los participantes cierran los ojos, respiran pausadamente y ejecutan un escaneo de su cuerpo de pies a cabeza. Deben registrar cartográficamente en qué órganos o músculos se aloja físicamente su estado emocional actual, asignándole un color y una textura metafórica sin emitir juicios.', rol: 'El facilitador guía con voz suave y pausas largas, modelando el ejercicio compartiendo primero su propio estado corporal interno. Protege la seguridad psicológica del grupo.' },
      { fase: 'Exploración conceptual', tiempo: '20 min', desc: 'Análisis del continuum de granularidad emocional: Diferenciación técnica entre la emoción de respuesta biológica automática, el sentimiento como elaboración cognitiva y el estado de ánimo sostenido. Uso de la analogía de Nussbaum: las emociones como juicios de valor que revelan lo que consideramos valioso para nuestra subsistencia.', rol: 'Docente presenta marcos conceptuales con ejemplos reales extraídos de las crisis escolares cotidianas, promoviendo la expansión del vocabulario emocional del grupo.' },
      { fase: 'Práctica activa (El Diccionario Fisiológico)', tiempo: '25 min', desc: 'Construcción del mapa de sensaciones: En una silueta humana impresa, cada participante mapea con marcadores la ubicación exacta de las emociones primarias y complejas (indignación, vergüenza, orgullo, frustración). Posteriormente, inician el diseño de su libreta personal de bitácora emocional de aula.', rol: 'El facilitador circula por los subgrupos realizando preguntas reflexivas abiertas: ¿Qué pensamientos precedieron a esa opresión en el pecho? ¿Qué conducta automática desató?' },
      { fase: 'Transferencia pedagógica', tiempo: '20 min', desc: 'Grupos por niveles educativos co-diseñan una rutina de sintonía emocional de 5 minutos para implementar al inicio de sus clases tradicionales. Definen el vocabulario matizado adecuado para las edades y estructuran cómo el docente de forma regulada expondrá su propia interioridad.', rol: 'Acompaña el diseño metodológico. Recuerda a los grupos que la rutina de conciencia debe ser un recurso protector, nunca una obligación invasiva para el estudiante.' },
      { fase: 'Cierre y metacognición', tiempo: '10 min', desc: 'Ronda de salida: Cada participante comparte en una única palabra precisa el estado emocional con el que se retira del espacio y un hallazgo de autoconciencia relevante de la sesión. Se da espacio al silencio reflexivo.', rol: 'Recoge las palabras de salida en un mural visual para evaluar el clima final del ecosistema del grupo.' }
    ],
    actividades: [
      { nivel: 'Educación Inicial (0–5 años)', bg: '#E1F5EE', tc: '#085041', items: ['Dado de Granularidad: Cubo grande de espuma con expresiones faciales complejas. Los niños lo lanzan, imitan el gesto y narran una historia de un juguete que experimentó esa misma emoción.', 'El monstruo de los colores (Lectura Dialógica): Lectura guiada en voz alta utilizando frascos reales de vidrio donde los niños clasifican lanas de colores según la emoción diaria.', 'Espejo de la Alteridad: En parejas frente a frente, un niño gesticula sutilmente una emoción corporal y su compañero actúa como un espejo exacto, intentando adivinar el estado emocional reflejado.'] },
      { nivel: 'Básica Primaria (1°–5°)', bg: '#E6F1FB', tc: '#0C447C', items: ['Semáforo Corporal Diario: Registro en una mini-tarjeta de escritorio antes de iniciar la jornada (Rojo = Inundado/Tenso, Amarillo = Inquieto, Verde = En calma), ayudando al maestro a regular los andamiajes didácticos.', 'Línea de Tiempo de los Picos Emocionales: Dibujo de una gráfica semanal de montañas y valles que registre los eventos del colegio que detonaron estados de alegría, frustración o exclusión.', 'Auditoría Emocional de Cuentos: Lectura crítica de un relato identificando los mensajes corporales ocultos de los personajes y cómo el contexto influyó en sus sentimientos.'] },
      { nivel: 'Básica Secundaria (6°–9°)', bg: '#FBEAF0', tc: '#72243E', items: ['Bitácora de Granularidad Emocional: Registro escrito individual que analice de forma precisa: Detonador objetivo de aula + Fuente corporal + Pensamiento + Emoción exacta.', 'Análisis del Lenguaje Juvenil: Debate grupal sobre las implicaciones de reducir todo el vocabulario emocional a expresiones genéricas o jergas locales, expandiendo el glosario semántico del curso.', 'Lectura de emociones públicas en la historia local: Análisis de los testimonios de memoria oral comunitaria del barrio identificando las emociones subyacentes de los relatos.'] },
      { nivel: 'Media (10°–11°)', bg: '#FAECE7', tc: '#712B13', items: ['Ensayo Argumentativo Crítico: "Las emociones como juicios evaluativos de valor en la teoría de Martha Nussbaum aplicada a la justicia escolar colombiana".', 'Investigación de Campo Intercultural: Entrevistas estudiantiles a miembros de la comunidad con diversas raíces culturales o generacionales sobre cómo identifican y nombran sus emociones, presentando los hallazgos al grupo.', 'Producción Audiovisual: Creación de un micro-podcast de 3 minutos diseñado para visibilizar la importancia de la salud mental y la granularidad emocional en la adolescencia contemporánea.'] }
    ],
    rubrica: [
      { criterio: 'Identificación emocional precisa', d: ['Incapaz de reconocer o nombrar estados emocionales propios o del entorno.', 'Identifica emociones básicas únicamente cuando se le interroga con preguntas cerradas directas.', 'Identifica y nombra de forma autónoma una gama variada de emociones primarias utilizando vocabulario matizado.', 'Analiza con fluidez semántica la complejidad de múltiples emociones simultáneas en sí mismo y en los otros en diversos contextos de tensión.'] },
      { criterio: 'Reconocimiento de señales corporales', d: ['Ignora las señales físicas y fisiológicas asociadas a sus estados emocionales.', 'Identifica algunas reacciones corporales básicas (ej. sudoración, llanto) con acompañamiento del docente.', 'Describe con precisión las señales corporales internas asociadas a sus emociones de forma regular.', 'Integra de forma autónoma la lectura de sus señales corporales, cognitivas y contextuales para prevenir desbordamientos emocionales conductuales.'] },
      { criterio: 'Vocabulario y granularidad semántica', d: ['Reduce toda su expresión emocional a términos genéricos vagos como "bien" o "mal".', 'Utiliza un glosario limitado de emociones básicas (alegría, tristeza, rabia, miedo) de manera repetitiva.', 'Posee un repertorio amplio y diferenciado de términos emocionales (30+ palabras), aplicándolos con precisión.', 'Apropia un vocabulario emocional matizado, culturalmente situado, y es capaz de desglosar variaciones sutiles de estados de ánimo complejos.'] }
    ],
    guia: { 
      prop: 'Garantizar que los docentes desarrollen una alta granularidad emocional y una lectura corporal fina de sus propios estados internos, estructurando de forma técnica andamiajes didácticos viables para transferir esta competencia protectora a las aulas de clase colombianas.',
      adv: [
        'Bajo ninguna circunstancia obligue a un estudiante o participante a exponer públicamente una experiencia emocional traumática o dolorosa.',
        'El facilitador debe modelar el ejercicio exponiendo primero su propia interioridad de forma vulnerable pero regulada.',
        'Evite catalogar las emociones como "positivas" o "negativas"; todas las emociones son legítimas y contienen información cognitiva valiosa sobre lo que el sujeto valora.',
        'Tenga estructurado un canal de derivación institucional discreto si durante los ejercicios de autoconciencia emerge un caso crítico de afectación de salud mental.'
      ],
      mat: [
        'Siluetas impresas del mapa corporal humano',
        'Crayones, marcadores o lápices de colores variados',
        'Tarjetas didácticas de granularidad y vocabulario emocional',
        'Libretas de bitácora personal de autoformación'
      ],
      cierre: 'Concluya la sesión implementando la rutina de la "Palabra de Salida". Este ejercicio estabiliza el cierre del grupo, valida la experiencia individual de forma horizontal y ofrece datos de control clave sobre el clima emocional del taller para el facilitador.'
    } 
  }
];