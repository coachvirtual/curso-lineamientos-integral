/* ══════════════════════════════════════════════════════════
   M4 — Las 7 Competencias Socioemocionales (CSE)
   Fuente: Capítulo 4 del documento MEN 2026
   ══════════════════════════════════════════════════════════ */

MODULOS.push({
  id: 'm4',
  num: 'Módulo 4',
  icon: '💚',
  color: '#9B2750',
  bg: '#FDEDF3',
  titulo: 'Las 7 Competencias Socioemocionales',
  subtitulo: 'Conciencia, regulación, empatía, decisión y resiliencia como base del ejercicio ciudadano',
  duracion: '7 sesiones · 10.5 horas',
  descripcion: 'Estudiamos en profundidad cada una de las 7 Competencias Socioemocionales del MEN 2026: su fundamento científico, sus aprendizajes esenciales por nivel, sus indicadores y su articulación con las CC.',
  sesiones: [
    {
      id: 's4_0',
      num: 'Sesión 1',
      titulo: 'CSE1 · Conciencia emocional: reconocer, nombrar y comprender las emociones',
      duracion: '90 min',
      tipo: 'CSE-1',
      objetivo: 'Comprender la CSE1 en sus dimensiones cognitiva, afectiva y corporal, y desarrollar estrategias pedagógicas para trabajar la conciencia emocional en todos los niveles educativos.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Definición desde el documento MEN 2026',
          texto: `<p>La conciencia emocional es la capacidad de reconocer, identificar y comprender las propias emociones y las de los demás, incluyendo la habilidad para nombrarlas con precisión y entender su impacto en el comportamiento y las relaciones.</p>

El documento fundamenta esta competencia en tres tradiciones científicas convergentes:

<strong>1. Neurociencia afectiva (Damasio, 2010):</strong> Las emociones son procesos biológicos y cognitivos simultáneamente. No son opuestas a la razón: son su base. Sin señales emocionales, la toma de decisiones se deteriora gravemente.

<strong>2. Teoría de la evaluación cognitiva (Lazarus, 1991):</strong> Las emociones son respuestas a valoraciones que hacemos del mundo. Sentir miedo no es automático: es el resultado de evaluar una situación como amenazante. Esta cognición puede ser enseñada y transformada.

<strong>3. Granularidad emocional (Barrett, 2018):</strong> Las personas con mayor vocabulario emocional gestionan mejor sus estados internos. No es lo mismo "estar mal" que distinguir entre frustración, decepción, vergüenza o tristeza. Cada emoción pide una respuesta diferente.`
        },
        {
          tipo: 'grafico',
          titulo: '2. Las dimensiones de la conciencia emocional',
          tipo_grafico: 'tres_niveles',
          datos: [
            { nivel: 'Reconocer', desc: 'Identificar la emoción cuando ocurre en el cuerpo y la mente. ¿Qué estoy sintiendo ahora?', color: '#F59E0B' },
            { nivel: 'Nombrar', desc: 'Ponerle nombre preciso. No "mal", sino "frustrado porque mis esfuerzos no son reconocidos".', color: '#3B82F6' },
            { nivel: 'Comprender', desc: 'Entender qué la generó, qué significa y qué pide de mí. ¿Qué me dice esta emoción sobre lo que valoro?', color: '#0C7A4A' },
          ]
        },
        {
          tipo: 'tabla',
          titulo: '3. Aprendizajes esenciales por nivel educativo',
          tabla: {
            cabeceras: ['Nivel', 'Aprendizaje esencial', 'Indicadores de desempeño'],
            filas: [
              ['Educación Inicial', 'Reconoce y expresa sus emociones básicas (alegría, tristeza, miedo, enojo) y comienza a identificarlas en los demás.', '• Nombra al menos 4 emociones básicas\n• Señala en su cuerpo dónde siente las emociones\n• Reconoce expresiones emocionales en rostros y gestos'],
              ['Básica Primaria', 'Identifica un vocabulario ampliado de emociones, las conecta con situaciones que las generan y las expresa de forma apropiada.', '• Usa más de 10 palabras emocionales con precisión\n• Explica qué causó su emoción\n• Diferencia la emoción de la reacción'],
              ['Básica Secundaria', 'Analiza sus estados emocionales con profundidad, reconoce la influencia del contexto social y cultural en las emociones.', '• Identifica emociones complejas (vergüenza, orgullo, envidia)\n• Conecta emociones con valores y creencias\n• Reconoce cómo el contexto social moldea lo que siente'],
              ['Educación Media', 'Comprende las emociones como señales de información sobre sí mismo y el mundo, y las usa para la toma de decisiones éticas.', '• Usa las emociones como información en decisiones complejas\n• Reconoce sesgos emocionales en su razonamiento\n• Articula emoción con acción ciudadana'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '4. La conciencia emocional del docente: por qué importa',
          texto: `El documento MEN 2026 hace un énfasis especial en la conciencia emocional del docente, no solo del estudiante:

<p>Un docente que no reconoce sus propias emociones en el aula las actuará sin conciencia: el miedo se volverá rigidez, la frustración se volverá hostilidad, la inseguridad se volverá autoritarismo. El docente emocionalmente consciente transforma esas emociones en información pedagógica.</p>

Las emociones del docente más frecuentes en el aula y su potencial pedagógico:
<ul>
<li><strong>Frustración:</strong> Señal de que algo no está funcionando como esperaba. ¿Qué necesita cambiar?</li>
<li><strong>Aburrimiento:</strong> Señal de que la actividad no conecta con los intereses genuinos. ¿Qué dice esto sobre mi clase?</li>
<li><strong>Alegría:</strong> Señal de que hay flujo y conexión. ¿Qué lo generó? ¿Cómo replicarlo?</li>
<li><strong>Ansiedad:</strong> Señal de incertidumbre. ¿Qué no sé que necesito saber?</li>
</ul>`
        }
      ],
      actividades: [
        {
          tipo: 'individual',
          titulo: 'Mapa corporal de mis emociones en el aula',
          icono: '🧠',
          instruccion: 'Dibuja un contorno de cuerpo humano. Ubica en él dónde sientes físicamente: la frustración cuando un estudiante no entiende, la alegría cuando una clase sale bien, el miedo antes de una observación de clase, la indignación ante una injusticia. ¿Son los mismos lugares para todos?',
          tiempo: '15 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Ampliando el vocabulario emocional',
          icono: '📝',
          instruccion: 'En grupos: partan de la palabra "enojo". Generen 10 palabras más específicas que distingan tipos de enojo (frustración, indignación, resentimiento, irritación...). Hagan lo mismo con "tristeza" y "miedo". Discutan: ¿Por qué importa esta distinción en el aula?',
          tiempo: '20 min'
        },
        {
          tipo: 'diseno',
          titulo: 'Rutina de conciencia emocional para el aula',
          icono: '✏️',
          instruccion: 'Diseña una rutina de 5 minutos de conciencia emocional para iniciar tus clases. Debe ser apropiada para tu nivel, no invasiva, y generar datos que te ayuden a tomar decisiones pedagógicas. ¿Cómo la evaluarías después de un mes?',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi alfabetización emocional',
          icono: '🪞',
          instruccion: 'Escribe: "La emoción que más trabajo en reconocer en mí mismo/a es... La emoción que más me cuesta mostrar frente a mis estudiantes es... Lo que cambiaría en mi aula si fuera más emocionalmente consciente es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CSE1: Conciencia emocional (pp. 135-148)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Damasio, A. (2010) — El error de Descartes', url: '#', meta: 'Base neurológica de las emociones' },
        { tipo: 'libro', titulo: 'Barrett, L.F. (2018) — How emotions are made', url: '#', meta: 'Granularidad emocional' },
        { tipo: 'herramienta', titulo: 'Rueda de las emociones de Plutchik', url: '#', meta: 'Herramienta visual para el aula' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Qué es la "granularidad emocional" según Barrett (2018)?',
            opciones: [
              'La capacidad de sentir muchas emociones al mismo tiempo',
              'La habilidad de distinguir con precisión entre emociones similares usando un vocabulario amplio, lo que mejora la regulación',
              'La intensidad con que se sienten las emociones',
              'El proceso de controlar las emociones para no expresarlas'
            ],
            correcta: 1,
            explicacion: 'La granularidad emocional es la capacidad de hacer distinciones finas entre emociones. Una persona que solo distingue "estar bien" o "estar mal" tiene baja granularidad. Una que distingue entre frustración, decepción, indignación y tristeza tiene alta granularidad, y puede responder de manera más apropiada a cada estado.'
          },
          {
            pregunta: 'Según Damasio, ¿cuál es la relación entre emoción y razón?',
            opciones: [
              'Son opuestas: las emociones interfieren con el pensamiento racional',
              'Las emociones son la base biológica de la razón; sin señales emocionales la toma de decisiones se deteriora',
              'La razón debe controlar completamente las emociones para tomar buenas decisiones',
              'Las emociones son solo reacciones físicas sin valor cognitivo'
            ],
            correcta: 1,
            explicacion: 'El "error de Descartes" fue pensar que razón y emoción son opuestas. Damasio demostró con pacientes con daño en la corteza prefrontal que sin emociones las personas no pueden tomar buenas decisiones, aunque mantengan intacta su capacidad lógica. Las emociones son marcadores somáticos indispensables.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Cuántas palabras emocionales distintas usaste en la última semana de trabajo? ¿Qué dice eso sobre tu granularidad emocional?',
          '¿Qué emoción docente sueles "actuar" sin conciencia y qué efecto tiene en tus estudiantes?',
          '¿Cómo cambiaría tu evaluación de los estudiantes si incluyera indicadores de conciencia emocional?'
        ]
      }
    },
    {
      id: 's4_1',
      num: 'Sesión 2',
      titulo: 'CSE2 · Regulación emocional: gestionar, no suprimir',
      duracion: '90 min',
      tipo: 'CSE-2',
      objetivo: 'Comprender la CSE2 como proceso activo de gestión emocional (no supresión), conocer las estrategias basadas en evidencia y diseñar entornos que favorezcan la autorregulación.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Regulación no es supresión',
          texto: `<p>La regulación emocional es la capacidad de gestionar la experiencia y expresión de las emociones de forma flexible y apropiada al contexto, de manera que se puedan alcanzar metas personales y relacionales sin causar daño.</p>

La distinción más importante que hace el documento es entre <strong>regulación</strong> y <strong>supresión</strong>:

<strong>Supresión:</strong> Reprimir, esconder, ignorar la emoción. Tiene costos: la emoción no desaparece, se desplaza. Los estudios de Gross (2014) muestran que la supresión habitual aumenta el cortisol, deteriora la memoria y daña las relaciones.

<strong>Regulación:</strong> Transformar la emoción de manera que pueda expresarse apropiadamente. No es eliminar el enojo, sino canalizarlo hacia una conversación productiva. No es eliminar la ansiedad, sino usarla para prepararse mejor.

El documento adopta el <strong>modelo procesual de regulación emocional</strong> de Gross (2014), que identifica 5 estrategias según el momento en que intervienen.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Las 5 estrategias de regulación emocional (Gross, 2014)',
          tabla: {
            cabeceras: ['Estrategia', 'Cuándo actúa', 'Ejemplo en el aula', 'Efectividad'],
            filas: [
              ['Selección de situación', 'Antes: evitar o buscar situaciones', 'El docente elige cuándo dar retroalimentación difícil para hacerlo con calma', 'Alta a largo plazo'],
              ['Modificación de la situación', 'Durante: cambiar el entorno', 'Cambiar la disposición del aula antes de una actividad de alta tensión', 'Alta si es posible'],
              ['Despliegue atencional', 'Durante: redirigir la atención', 'Pedir al estudiante que respire antes de responder en caliente', 'Moderada, práctica'],
              ['Cambio cognitivo (reappraisal)', 'Durante: reinterpretar la situación', 'El docente piensa "este estudiante está asustado, no desafiante"', 'Muy alta, duradera'],
              ['Modulación de la respuesta', 'Después: modificar la expresión', 'Hablar en voz calmada aunque por dentro esté perturbado', 'Baja y costosa si es la única estrategia'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. Burnout docente: cuando la regulación falla sistemáticamente',
          texto: `El documento MEN 2026 incluye una sección específica sobre <strong>bienestar docente</strong> como condición para la formación socioemocional de los estudiantes:

<p>No es posible enseñar regulación emocional desde un estado de agotamiento crónico. El bienestar docente no es un lujo: es una condición estructural para la calidad educativa.</p>

El <strong>síndrome de burnout</strong> (Maslach, 2001) tiene tres dimensiones en docentes:
<ul>
<li><strong>Agotamiento emocional:</strong> Sentir que no quedan recursos emocionales para dar más.</li>
<li><strong>Despersonalización:</strong> Distanciarse emocionalmente de los estudiantes como mecanismo de defensa.</li>
<li><strong>Reducción del logro personal:</strong> Sentir que el trabajo ya no tiene impacto ni sentido.</li>
</ul>

Colombia tiene una de las tasas más altas de burnout docente en América Latina. El MEN reconoce que los lineamientos que piden más competencia socioemocional sin apoyar el bienestar docente son contradictorios.`
        }
      ],
      actividades: [
        {
          tipo: 'individual',
          titulo: 'Mi inventario de estrategias de regulación',
          icono: '🛠️',
          instruccion: 'Revisa la tabla de 5 estrategias. Para cada una: ¿La usas? ¿Cuándo? ¿Con qué efectividad? ¿Cuál nunca usas? Diseña un plan personal de una semana para practicar la estrategia que menos usas (cambio cognitivo es la más recomendada).',
          tiempo: '20 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Diseño de un "rincón de la calma" institucional',
          icono: '🏠',
          instruccion: 'En grupos: diseñen un espacio físico y un protocolo de "rincón de la calma" para su institución. ¿Dónde estaría? ¿Qué habría en él? ¿Cómo se activaría? ¿Quién lo gestiona? ¿Cómo se evalúa su uso? Piénsenlo para estudiantes Y para docentes.',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi termómetro de burnout',
          icono: '🪞',
          instruccion: 'Usa la escala Maslach simplificada: ¿Qué tanto agotamiento emocional sientes (1-10)? ¿Qué tanto te distancias de tus estudiantes (1-10)? ¿Qué tanto sientes que tu trabajo tiene impacto (1-10)? No hay respuestas correctas. Escribe qué necesitas para cuidarte.',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CSE2: Regulación emocional (pp. 149-162)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Gross, J.J. (2014) — Handbook of emotion regulation', url: '#', meta: 'Base científica de la regulación' },
        { tipo: 'libro', titulo: 'Maslach, C. — Job burnout: new directions', url: '#', meta: 'Diagnóstico del burnout docente' },
        { tipo: 'herramienta', titulo: 'Técnica de respiración 4-7-8 para el aula', url: '#', meta: 'Herramienta práctica' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Por qué la estrategia de "modulación de la respuesta" (hablar calmado aunque esté perturbado) es la menos recomendada como estrategia única?',
            opciones: [
              'Porque los estudiantes se dan cuenta de que el docente está fingiendo',
              'Porque actúa después de que la emoción ya está activa y tiene costos altos si es la única estrategia: aumenta el cortisol y es psicológicamente costosa a largo plazo',
              'Porque es demasiado difícil de aprender',
              'Porque no funciona con estudiantes de secundaria'
            ],
            correcta: 1,
            explicacion: 'Gross demostró que las estrategias que actúan antes de que la emoción se active (selección de situación, cambio cognitivo) son más efectivas y menos costosas que las que actúan después (modulación de la respuesta). Suprimir la expresión cuando la emoción ya está activa requiere mucho esfuerzo cognitivo y tiene efectos negativos en la salud.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Cuál estrategia de regulación emocional te parece más aplicable de manera inmediata en tu aula?',
          '¿Tu institución tiene algún mecanismo de cuidado del bienestar docente? ¿Es suficiente?',
          '¿Qué le pedirías a tu rector que cambiara para favorecer el bienestar de los docentes?'
        ]
      }
    },
    {
      id: 's4_2',
      num: 'Sesión 3',
      titulo: 'CSE3 · Toma de decisiones éticas y responsables',
      duracion: '90 min',
      tipo: 'CSE-3',
      objetivo: 'Comprender la CSE3 como integración de emoción, razón y ética en la acción, y desarrollar estrategias pedagógicas para cultivar la autonomía moral en los estudiantes.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. La decisión ética como proceso integrado',
          texto: `<p>La toma de decisiones éticas es la capacidad de analizar situaciones complejas considerando consecuencias, valores y perspectivas diversas, para actuar de manera responsable y coherente con principios de justicia, cuidado y dignidad.</p>

El documento integra tres tradiciones éticas:
<ul>
<li><strong>Ética deontológica (Kant):</strong> Actuar por principios universales. ¿Esto es correcto independientemente de las consecuencias?</li>
<li><strong>Ética consecuencialista:</strong> Actuar para maximizar el bienestar. ¿Qué produce el mayor bien para el mayor número?</li>
<li><strong>Ética del cuidado (Gilligan):</strong> Actuar desde la responsabilidad hacia las personas concretas y sus necesidades.</li>
</ul>

El hallazgo clave del documento es que la deliberación ética madura integra las tres perspectivas. Una decisión que es correcta por principio pero ignora las consecuencias reales sobre personas concretas es incompleta.`
        },
        {
          tipo: 'tabla',
          titulo: '2. El proceso de decisión ética: pasos y preguntas',
          tabla: {
            cabeceras: ['Paso', 'Pregunta orientadora', 'Herramienta pedagógica'],
            filas: [
              ['1. Reconocer la dimensión ética', '¿Hay valores en tensión aquí? ¿Alguien puede resultar dañado?', 'Identificación de stakeholders: ¿a quiénes afecta?'],
              ['2. Reunir información', '¿Qué sé? ¿Qué no sé? ¿Qué perspectivas no he escuchado?', 'Mapa de perspectivas: ¿quién ve esto de manera diferente?'],
              ['3. Identificar opciones', '¿Cuáles son las alternativas reales disponibles?', 'Lluvia de opciones sin juicio previo'],
              ['4. Evaluar consecuencias', '¿Qué pasaría si todos hicieran esto? ¿A quién beneficia y a quién daña?', 'Análisis de consecuencias a corto y largo plazo'],
              ['5. Decidir y actuar', '¿Puedo defender esta decisión ante quienes resultan afectados?', 'Test de coherencia: ¿lo haría igual si lo vieran mis estudiantes?'],
              ['6. Reflexionar', '¿Qué aprendí de este proceso? ¿Cambiaría algo?', 'Diario de decisiones éticas'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Dilema ético escolar colombiano',
          icono: '⚖️',
          instruccion: 'Dilema: Tu estudiante más brillante te confiesa que copiará en el examen de Estado porque su familia depende de que obtenga una beca. Llevan años de sacrificio. Aplica los 6 pasos del proceso de decisión ética. ¿A qué conclusión llegan? ¿Hay una sola respuesta correcta?',
          tiempo: '30 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mis dilemas docentes reales',
          icono: '🪞',
          instruccion: 'Escribe sobre una decisión difícil que hayas tomado como docente donde hubiera valores en tensión. ¿Cómo decidiste? ¿Usaste algún proceso sistemático? ¿Cambiarías algo hoy?',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CSE3: Toma de decisiones (pp. 163-175)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Kohlberg, L. — Psicología del desarrollo moral', url: '#', meta: 'Estadios del desarrollo moral' },
        { tipo: 'libro', titulo: 'Gilligan, C. (1982) — In a different voice', url: '#', meta: 'Ética del cuidado' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Por qué el documento MEN integra las tres tradiciones éticas en lugar de elegir solo una?',
            opciones: [
              'Para no tomar posición política',
              'Porque una decisión ética madura considera principios, consecuencias Y el cuidado de personas concretas simultáneamente',
              'Porque ninguna tradición ética ha demostrado ser válida',
              'Para adaptarse a las preferencias religiosas de cada comunidad'
            ],
            correcta: 1,
            explicacion: 'El MEN adopta un enfoque integrador porque cada tradición captura algo real: los principios importan (deontología), las consecuencias importan (consecuencialismo) y las personas concretas importan (cuidado). Una ética que ignora cualquiera de estas dimensiones produce decisiones incompletas o dañinas.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Cuál de las tres tradiciones éticas domina más en tus decisiones cotidianas como docente?',
          '¿Hay situaciones en tu institución donde la "ética institucional" y tu "ética personal" entran en tensión?'
        ]
      }
    },
    {
      id: 's4_3',
      num: 'Sesión 4',
      titulo: 'CSE4 · Empatía, reconocimiento y perspectiva del otro',
      duracion: '90 min',
      tipo: 'CSE-4',
      objetivo: 'Comprender la empatía en sus tres componentes —cognitivo, afectivo y compasivo— y distinguirla de la simpatía y la proyección, desarrollando estrategias pedagógicas que la cultiven.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Empatía: tres componentes inseparables',
          texto: `<p>La empatía es la capacidad de reconocer y comprender los estados emocionales de los demás, de adoptar su perspectiva y de responder de manera apropiada y compasiva.</p>

La neurociencia contemporánea distingue tres componentes de la empatía que el documento MEN adopta:

<strong>Empatía cognitiva</strong> (toma de perspectiva): Entender intelectualmente cómo piensa y siente el otro. "Veo cómo ves el mundo." Es enseñable y entrenable.

<strong>Empatía afectiva</strong> (resonancia emocional): Sentir algo de lo que siente el otro. Los neurocientíficos la relacionan con las neuronas espejo.

<strong>Empatía compasiva</strong> (preocupación empática): Querer hacer algo para ayudar. Sin esta dimensión, la empatía puede quedarse en observación.

La distinción crítica del documento: <strong>empatía ≠ simpatía</strong>. La simpatía dice "qué pena que te pase eso". La empatía dice "entiendo cómo se siente eso desde adentro". Brené Brown (2013): la simpatía alimenta la desconexión; la empatía construye conexión.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Empatía vs. otras respuestas relacionales',
          tabla: {
            cabeceras: ['Respuesta', 'Qué hace', 'Efecto en la relación'],
            filas: [
              ['Empatía', 'Se sitúa en la perspectiva del otro, siente con él/ella, responde con cuidado', 'Construye conexión, confianza y apoyo genuino'],
              ['Simpatía', 'Expresa lástima o pena desde afuera, sin situarse en la perspectiva del otro', 'Puede crear distancia; el otro se siente "compadeciéndose de él"'],
              ['Proyección', 'Asume que el otro siente lo mismo que yo sentiría en esa situación', 'Malentendidos frecuentes; ignora la singularidad del otro'],
              ['Solución prematura', 'Salta a "ayudar" antes de comprender el problema real', 'El otro se siente no escuchado, su emoción invalidada'],
              ['Invalidación', '"No es para tanto", "otros están peor"', 'Daño relacional profundo; el otro cierra la comunicación'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. La empatía como fundamento de la democracia (Nussbaum)',
          texto: `La filósofa Martha Nussbaum, ampliamente citada en el documento MEN, plantea que la democracia requiere ciudadanos empáticos:

<p>La imaginación narrativa —la capacidad de verse como ser humano que busca florecimiento en el lugar de otro ser humano— es el núcleo de la educación para la ciudadanía democrática.</p>

Sin empatía, la democracia se degrada en suma de intereses individuales. Con empatía, se convierte en proyecto colectivo donde cada quien puede ver al otro como igual.

Para el aula colombiana, esto tiene implicaciones concretas: trabajar la empatía con los estudiantes más difíciles, con las familias que generan más resistencia, con los colegas con quienes hay conflicto. La empatía no es solo un valor personal: es una competencia política.`
        }
      ],
      actividades: [
        {
          tipo: 'individual',
          titulo: 'Ejercicio de perspectiva narrativa',
          icono: '📖',
          instruccion: 'Escribe durante 10 minutos desde la perspectiva de un estudiante que te resulta difícil de entender o con quien hay tensión. No desde lo que observas: desde cómo crees que él/ella vive la escuela, sus clases contigo, sus relaciones. ¿Qué descubres? ¿Qué cambia en tu comprensión?',
          tiempo: '15 min'
        },
        {
          tipo: 'grupal',
          titulo: 'Círculo empático docente',
          icono: '💬',
          instruccion: 'Uno del grupo comparte un desafío real (no hipotético) de su práctica docente. Los demás practican empatía genuina: sin consejos, sin soluciones, sin "yo también". Solo escucha activa y preguntas que ayuden a quien habla a comprenderse mejor. Reflexión posterior: ¿cómo se sintió ser escuchado/a así?',
          tiempo: '25 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi capacidad empática en el aula',
          icono: '🪞',
          instruccion: 'Escribe: "El estudiante con quien me cuesta más empatizar es (sin nombre, describe la situación)... Creo que me cuesta porque... Si aplicara la empatía cognitiva, vería la situación de esta manera diferente..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CSE4: Empatía (pp. 176-188)', url: '#', meta: 'Documento oficial' },
        { tipo: 'video', titulo: 'Brené Brown: El poder de la vulnerabilidad', url: '#', meta: 'TED Talk · 20 min (subtítulos)' },
        { tipo: 'libro', titulo: 'Nussbaum, M. (2010) — Sin fines de lucro', url: '#', meta: 'Educación para la democracia empática' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál es la diferencia clave entre empatía y simpatía según Brown y el documento MEN?',
            opciones: [
              'La empatía es más intensa que la simpatía emocionalmente',
              'La simpatía expresa lástima desde afuera; la empatía se sitúa en la perspectiva del otro y construye conexión genuina',
              'La simpatía es para adultos; la empatía es para niños',
              'La empatía requiere sentir exactamente lo mismo que el otro'
            ],
            correcta: 1,
            explicacion: 'Brené Brown hace esta distinción de manera memorable: la simpatía alimenta la desconexión porque mantiene al otro en su dolor desde arriba ("qué pena"). La empatía construye conexión porque baja al nivel del otro y le dice "no estás solo/a". Tampoco requiere sentir lo mismo: requiere comprender desde adentro.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Hubo una persona en tu vida que te enseñó empatía con su ejemplo? ¿Qué hacía específicamente?',
          '¿En qué momentos del día escolar te resulta más difícil responder con empatía? ¿Qué lo genera?'
        ]
      }
    },
    {
      id: 's4_4',
      num: 'Sesión 5',
      titulo: 'CSE5 · Habilidades de relación, comunicación y resolución de conflictos',
      duracion: '90 min',
      tipo: 'CSE-5',
      objetivo: 'Comprender la CSE5 como el conjunto de habilidades que permiten construir relaciones saludables y resolver conflictos de manera constructiva, aplicando la Comunicación No Violenta y la mediación.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Las relaciones como competencia',
          texto: `<p>Las habilidades de relación son el conjunto de capacidades que permiten establecer vínculos interpersonales saludables, comunicarse de manera asertiva y colaborar eficazmente hacia metas comunes.</p>

El documento identifica cuatro componentes de la CSE5:
<ul>
<li><strong>Comunicación asertiva:</strong> Expresar pensamientos, sentimientos y necesidades de manera clara y respetuosa.</li>
<li><strong>Escucha activa:</strong> Prestar atención plena al otro, comprender antes de responder.</li>
<li><strong>Colaboración:</strong> Trabajar hacia metas compartidas respetando las contribuciones de cada uno.</li>
<li><strong>Resolución constructiva de conflictos:</strong> Usar el conflicto como oportunidad de aprendizaje y fortalecimiento de la relación.</li>
</ul>

El documento incorpora el modelo de <strong>Comunicación No Violenta (CNV)</strong> de Marshall Rosenberg (2003) como herramienta práctica. La CNV tiene cuatro pasos:
<ol>
<li><strong>Observar</strong> sin evaluar: "Cuando veo que llegan tarde..." (no "Cuando son irresponsables...")</li>
<li><strong>Sentir:</strong> "Me siento frustrado/preocupado..."</li>
<li><strong>Necesitar:</strong> "Porque necesito que el grupo aprenda colaborativamente..."</li>
<li><strong>Pedir</strong> (no exigir): "¿Pueden decirme qué los impide llegar a tiempo?"</li>
</ol>`
        },
        {
          tipo: 'tabla',
          titulo: '2. Comunicación violenta vs. No Violenta: comparación',
          tabla: {
            cabeceras: ['Situación', 'Comunicación habitual (evaluativa)', 'CNV (observación + emoción + necesidad + petición)'],
            filas: [
              ['Estudiante no entrega tareas', '"Eres irresponsable y perezoso"', '"Cuando veo que no entregaste tres tareas seguidas, me preocupo porque quiero que tengas las bases. ¿Qué está pasando?"'],
              ['Estudiante interrumpe', '"¡Siempre interrumpes! Respeta cuando hablan"', '"Cuando alguien habla y se le interrumpe, me cuesta continuar la clase. Necesito que esperemos el turno. ¿Puedes ayudarme con eso?"'],
              ['Conflicto entre estudiantes', '"Están portándose muy mal los dos"', '"Veo que hay tensión entre ustedes. Eso me preocupa porque quiero que todos se sientan seguros aquí. ¿Pueden contarme qué pasó?"'],
              ['Docente con colega', '"Siempre llega tarde a las reuniones"', '"Cuando la reunión empieza sin ti, se nos dificulta tomar decisiones completas. Necesitamos poder contar con todos. ¿Qué necesitas para poder llegar?"'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Práctica de CNV en parejas',
          icono: '🗣️',
          instruccion: 'Con un compañero: uno comparte un conflicto real de su aula (sin nombres). El otro practica responder con los 4 pasos de la CNV. Luego intercambien roles. Reflexionen: ¿Qué fue más difícil? ¿Qué efecto tuvo en cómo se sintió quien compartió el conflicto?',
          tiempo: '25 min'
        },
        {
          tipo: 'diseno',
          titulo: 'Protocolo de mediación para mi nivel',
          icono: '✏️',
          instruccion: 'Diseña un protocolo de mediación de conflictos entre estudiantes adaptado a tu nivel (lenguaje, duración, roles). Debe poder implementarse en 20 minutos durante una clase. ¿Quién facilita? ¿Qué preguntas guían? ¿Cómo se cierra?',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi estilo comunicativo',
          icono: '🪞',
          instruccion: 'Escribe: "Mi estilo comunicativo habitual en el aula tiende hacia... (evaluativo / asertivo / pasivo / agresivo). Lo sé porque mis estudiantes reaccionan con... Si aplicara la CNV de manera consistente, cambiaría específicamente..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CSE5: Habilidades de relación (pp. 189-202)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Rosenberg, M. (2003) — Comunicación no violenta', url: '#', meta: 'Manual práctico · Capítulos 1-3' },
        { tipo: 'video', titulo: 'CNV en el aula: casos prácticos', url: '#', meta: '15 min · Aplicación pedagógica' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál es la diferencia entre "observar" y "evaluar" en la CNV?',
            opciones: [
              'Son sinónimos en el modelo de Rosenberg',
              'Observar describe hechos concretos sin juicio; evaluar mezcla hechos con interpretaciones y juicios morales',
              'Observar es para docentes; evaluar es para estudiantes',
              'La observación es más importante que la evaluación en el aula'
            ],
            correcta: 1,
            explicacion: 'La distinción observación/evaluación es central en la CNV. "Llegas tarde" es observación. "Eres irresponsable" es evaluación. Cuando empezamos con evaluaciones, el otro se pone a la defensiva y el diálogo se cierra. Cuando empezamos con observaciones neutras, el diálogo puede abrirse.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Cuántos de tus intercambios con estudiantes en una semana típica son evaluativos vs. observacionales?',
          '¿Qué impediría que toda tu institución adoptara la CNV como práctica comunicativa?'
        ]
      }
    },
    {
      id: 's4_5',
      num: 'Sesión 6',
      titulo: 'CSE6 · Emociones colectivas y participación ciudadana',
      duracion: '90 min',
      tipo: 'CSE-6',
      objetivo: 'Comprender cómo las emociones colectivas (indignación, esperanza, vergüenza, orgullo) son motores de la acción ciudadana, y cómo la escuela puede cultivar emociones democráticas.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Las emociones no solo son individuales',
          texto: `<p>Las emociones colectivas son estados afectivos compartidos que emergen en grupos y comunidades, orientan la acción colectiva y tienen un papel constitutivo en la vida democrática.</p>

La filósofa Martha Nussbaum, en <em>Emociones políticas</em> (2014), plantea que la democracia no puede sostenerse solo en razones y normas: necesita también <strong>emociones que la sustenten</strong>.

Las emociones colectivas que el documento identifica como pedagógicamente relevantes:
<ul>
<li><strong>Indignación moral:</strong> La emoción que activa la lucha por la justicia. Sin ella, la injusticia se normaliza.</li>
<li><strong>Esperanza activa:</strong> La disposición a actuar hacia un futuro mejor. Diferente al optimismo ingenuo.</li>
<li><strong>Vergüenza y orgullo colectivos:</strong> La identidad grupal se construye también emocionalmente.</li>
<li><strong>Compasión política:</strong> La capacidad de conmoverse ante el sufrimiento del otro como ciudadano, no solo como individuo.</li>
</ul>

En Colombia, el conflicto armado generó emociones colectivas que todavía estructuran la vida pública: miedo, desconfianza, resentimiento. Los lineamientos proponen que la escuela trabaje activamente estas emociones para transformarlas.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Emociones colectivas: de la parálisis a la acción',
          tabla: {
            cabeceras: ['Emoción colectiva', 'Función democrática', 'Riesgo si no se trabaja', 'Estrategia pedagógica'],
            filas: [
              ['Indignación moral', 'Activa la lucha por la justicia, impide la normalización del daño', 'Se convierte en rabia destructiva o en apatía disfrazada', 'Canalizar hacia propuestas concretas de cambio'],
              ['Esperanza activa', 'Sostiene la acción a largo plazo frente a obstáculos reales', 'Se convierte en optimismo ingenuo o en cinismo paralizante', 'Construir proyectos colectivos con logros verificables'],
              ['Miedo colectivo', 'Señal de amenaza real que pide atención y cuidado', 'Se convierte en repliegue, desconfianza y autoritarismo', 'Nombrar el miedo, construir seguridad colectiva'],
              ['Vergüenza colectiva', 'Impulsa la reparación y el no repetir errores', 'Se convierte en negación, victimización o culpa paralizante', 'Transformar en responsabilidad hacia el futuro'],
              ['Orgullo colectivo', 'Construye identidad y compromiso con la comunidad', 'Se convierte en nacionalismo excluyente o superioridad', 'Anclar en logros concretos compartidos, no en mitos'],
            ]
          }
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Mapa emocional de mi comunidad educativa',
          icono: '🗺️',
          instruccion: '¿Cuál es la emoción colectiva dominante en tu institución hoy? ¿Esperanza, miedo, agotamiento, indignación, orgullo? ¿Cómo afecta esa emoción colectiva al aprendizaje? ¿Qué haría un docente que trabaja conscientemente con emociones colectivas para transformar el clima institucional?',
          tiempo: '20 min'
        },
        {
          tipo: 'diseno',
          titulo: 'Un proyecto de esperanza activa',
          icono: '✨',
          instruccion: 'Diseña un proyecto de 4 semanas que transforme una emoción colectiva negativa (miedo, apatía, desconfianza) de tu institución en acción ciudadana. ¿Cuál sería el primer paso? ¿Quiénes participarían? ¿Cómo sabrías que funcionó?',
          tiempo: '20 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición: Mi emoción política como docente',
          icono: '🪞',
          instruccion: 'Escribe: "La emoción política que más me mueve a actuar como docente y ciudadano/a es... La emoción que más me paraliza es... Lo que hago (o haría) para transformar la parálisis en acción es..."',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CSE6: Emociones colectivas (pp. 203-214)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Nussbaum, M. (2014) — Emociones políticas', url: '#', meta: 'Por qué el amor importa para la justicia' },
        { tipo: 'libro', titulo: 'Ahmed, S. (2004) — The cultural politics of emotion', url: '#', meta: 'Emociones como política social' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Por qué Nussbaum dice que la democracia necesita emociones y no solo razones?',
            opciones: [
              'Porque las personas son incapaces de razonar políticamente',
              'Porque sin emociones como la compasión y la esperanza los ciudadanos no se comprometen activamente con el proyecto democrático',
              'Porque las emociones son más fáciles de manipular que las razones',
              'Para justificar que los políticos apelen a las emociones en sus discursos'
            ],
            correcta: 1,
            explicacion: 'Nussbaum argumenta que las normas e instituciones democráticas son frágiles sin el sustento emocional que las hace significativas. La compasión política hace que los ciudadanos se importen mutuamente. La esperanza activa sostiene el compromiso cuando los resultados tardan. Sin estas emociones, la democracia se vacía.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Qué emoción colectiva tiene tu institución que es un obstáculo para la formación ciudadana?',
          '¿Has tenido alguna vez una experiencia de indignación moral que te llevó a actuar? ¿Qué generó ese movimiento?'
        ]
      }
    },
    {
      id: 's4_6',
      num: 'Sesión 7',
      titulo: 'CSE7 · Resiliencia comunitaria, esperanza y construcción de futuro',
      duracion: '90 min',
      tipo: 'CSE-7',
      objetivo: 'Comprender la resiliencia no como capacidad individual de resistencia, sino como proceso colectivo de transformación, y desarrollar pedagogías de la esperanza contextualizadas en el posconflicto colombiano.',
      contenido: [
        {
          tipo: 'lectura',
          titulo: '1. Resiliencia: más allá del "rebotar"',
          texto: `<p>La resiliencia comunitaria es la capacidad colectiva para afrontar adversidades, aprender de ellas y transformarlas en oportunidades de crecimiento y fortalecimiento del tejido social.</p>

El documento supera la concepción individualista de la resiliencia ("volver a la normalidad después de un golpe") y adopta la perspectiva de <strong>resiliencia comunitaria</strong>:

<strong>Boris Cyrulnik (2002):</strong> La resiliencia no es una característica individual; se construye en la relación con otros. Sin vínculos, sin un "tutor de resiliencia", el ser humano no puede sobreponerse.

<strong>Lederach (2005) — Imaginación moral:</strong> La paz duradera en contextos de conflicto requiere imaginación moral: la capacidad de concebir y crear lo que aún no existe, construyendo relaciones que trascienden el círculo de la violencia.

En Colombia, comunidades que han sufrido desplazamiento, masacres y pérdidas han desarrollado formas extraordinarias de resiliencia comunitaria. Estas experiencias son materiales pedagógicos invaluables que la escuela debe reconocer y amplificar.`
        },
        {
          tipo: 'tabla',
          titulo: '2. Aprendizajes esenciales por nivel educativo',
          tabla: {
            cabeceras: ['Nivel', 'Aprendizaje esencial', 'Indicadores de desempeño'],
            filas: [
              ['Educación Inicial', 'Experimenta que puede superar dificultades con el apoyo de adultos y pares, desarrollando confianza básica.', '• Busca apoyo cuando tiene problemas\n• Celebra sus logros con otros\n• Reconoce que los errores son parte del aprendizaje'],
              ['Básica Primaria', 'Reconoce sus fortalezas personales y comunitarias, y usa el apoyo de otros para enfrentar dificultades.', '• Identifica 3 de sus fortalezas personales\n• Busca y ofrece ayuda en situaciones difíciles\n• Transforma errores en aprendizaje visible'],
              ['Básica Secundaria', 'Analiza experiencias de adversidad colectiva e identifica los factores que permitieron la recuperación comunitaria.', '• Documenta historias locales de resiliencia\n• Conecta adversidades personales con contextos colectivos\n• Propone acciones de fortalecimiento comunitario'],
              ['Educación Media', 'Diseña proyectos de reconstrucción del tejido social desde la imaginación moral, articulando memoria, justicia y esperanza.', '• Lidera procesos de memoria y reparación simbólica\n• Construye narrativas de esperanza fundamentadas\n• Actúa como agente de resiliencia en su comunidad'],
            ]
          }
        },
        {
          tipo: 'lectura',
          titulo: '3. Pedagogía de la esperanza: Freire y el posconflicto',
          texto: `Paulo Freire desarrolló el concepto de <strong>pedagogía de la esperanza</strong> como respuesta a los contextos de opresión y despojo. Para Freire, la esperanza no es ingenuidad: es una necesidad ontológica del ser humano y un acto político:

<p>La esperanza es una especie de vocación ontológica [...] Mientras lucho, tengo esperanza. Y si peleo con esperanza, puedo esperar.</p>

Para el aula colombiana posconflicto, la pedagogía de la esperanza implica:
<ul>
<li><strong>Narrar el sufrimiento</strong> sin quedarse en él.</li>
<li><strong>Documentar la resistencia</strong> junto con el daño.</li>
<li><strong>Proyectar futuros posibles</strong> basados en lo que la comunidad ya ha construido.</li>
<li><strong>Actuar desde el presente</strong> hacia ese futuro, con pasos concretos.</li>
</ul>

La escuela que solo enseña el horror del conflicto sin las historias de resistencia y reconstrucción forma estudiantes paralizados. La escuela que enseña ambos forma ciudadanos con agencia.`
        }
      ],
      actividades: [
        {
          tipo: 'grupal',
          titulo: 'Historias de resiliencia comunitaria',
          icono: '💪',
          instruccion: 'En grupos: identifiquen una comunidad en Colombia (puede ser cercana a su institución) que haya demostrado resiliencia notable frente a la adversidad. ¿Qué factores la hicieron posible? ¿Qué papel jugó la educación? ¿Cómo pueden usar esa historia como material pedagógico?',
          tiempo: '25 min'
        },
        {
          tipo: 'individual',
          titulo: 'Mi carta de esperanza pedagógica',
          icono: '💌',
          instruccion: 'Escribe una carta a tus estudiantes describiendo el futuro que quieres para ellos y el que crees que es posible. No el futuro ideal perfecto: el futuro posible si trabajan juntos. ¿Qué cambiaría en tu práctica si realmente creyeras en ese futuro?',
          tiempo: '15 min'
        },
        {
          tipo: 'reflexion',
          titulo: 'Metacognición cierre del módulo CSE',
          icono: '🪞',
          instruccion: 'Mirando las 7 CSE del módulo: ¿Cuál desarrollas más en tu práctica actual? ¿Cuál está más ausente? ¿Cuál te resultó más desafiante conceptualmente? Escribe un compromiso específico para las próximas 4 semanas.',
          tiempo: '15 min'
        }
      ],
      recursos: [
        { tipo: 'doc', titulo: 'MEN 2026 — CSE7: Resiliencia (pp. 215-226)', url: '#', meta: 'Documento oficial' },
        { tipo: 'libro', titulo: 'Cyrulnik, B. (2002) — Los patitos feos', url: '#', meta: 'La resiliencia como proceso relacional' },
        { tipo: 'libro', titulo: 'Lederach, J.P. (2005) — La imaginación moral', url: '#', meta: 'Paz y resiliencia en el posconflicto' },
        { tipo: 'libro', titulo: 'Freire, P. (1994) — Pedagogía de la esperanza', url: '#', meta: 'Esperanza como acto pedagógico político' },
      ],
      evaluacion: {
        titulo: 'Verificación de comprensión',
        preguntas: [
          {
            pregunta: '¿Cuál es la diferencia entre resiliencia individual y resiliencia comunitaria según el MEN 2026?',
            opciones: [
              'La resiliencia individual es más importante para los estudiantes',
              'La resiliencia comunitaria es el proceso colectivo de afrontar adversidades y transformarlas; no depende solo del individuo sino de los vínculos y el tejido social',
              'Son sinónimos con diferente escala',
              'La comunitaria aplica solo en zonas de conflicto'
            ],
            correcta: 1,
            explicacion: 'Cyrulnik demostró que la resiliencia no se desarrolla en el aislamiento: requiere vínculos, tutores de resiliencia y comunidad. El MEN adopta esta perspectiva colectiva porque en Colombia la adversidad ha sido mayoritariamente colectiva (desplazamiento, conflicto, pobreza estructural) y la respuesta debe serlo también.'
          },
          {
            pregunta: '¿Qué entiende Freire por "esperanza" en su pedagogía?',
            opciones: [
              'Optimismo ingenuo sobre el futuro',
              'Una necesidad ontológica y un acto político: la condición de posibilidad de la lucha y la transformación',
              'Un estado emocional positivo que mejora el aprendizaje',
              'La creencia religiosa en que las cosas mejorarán solas'
            ],
            correcta: 1,
            explicacion: 'Para Freire la esperanza no es pasividad ni ingenuidad. Es la condición ontológica que hace posible la acción transformadora. Sin esperanza no hay lucha; sin lucha no hay cambio. La pedagogía de la esperanza trabaja activamente para que los sujetos se reconozcan como agentes capaces de transformar su realidad.'
          }
        ]
      },
      metacognicion: {
        preguntas: [
          '¿Qué historias de resiliencia de tu comunidad educativa podrías usar como material pedagógico?',
          'Después de estudiar las 7 CSE: ¿Cuál crees que es la más urgente para Colombia hoy? ¿Por qué?',
          '¿Qué tan esperanzado/a te sientes sobre la posibilidad de transformar la educación en tu institución? ¿Qué lo sostiene o lo debilita?'
        ]
      }
    }
  ]
});
