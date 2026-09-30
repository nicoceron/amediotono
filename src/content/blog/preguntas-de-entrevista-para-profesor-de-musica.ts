import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "preguntas-de-entrevista-para-profesor-de-musica",
  title: "Preguntas de entrevista para profesor de música: qué preguntar y qué escuchar",
  seoTitle: "Preguntas de entrevista para profesor de música",
  description:
    "Banco de preguntas para entrevistar a un profesor de música, organizado por criterio, con qué buscar en cada respuesta, señales de alerta y cómo calificar.",
  excerpt:
    "Preguntas listas para adaptar, agrupadas por criterio, con lo que debes escuchar en cada respuesta y las señales de alerta. Para que la entrevista te dé evidencia y no solo impresiones.",
  category: "academias",
  publishedAt: "2026-09-30",
  keywords: [
    "preguntas de entrevista para profesor de música",
    "entrevista a docentes de música",
    "qué preguntar en una entrevista a un profesor",
    "entrevista estructurada docente",
    "cómo entrevistar a un profesor de música",
    "preguntas para entrevistar profesores de colegio",
  ],
  intro: [
    "Las mejores preguntas para entrevistar a un profesor de música piden ejemplos concretos de lo que la persona ya hizo: cómo planeó un periodo, cómo destrabó a un estudiante que no avanzaba, cómo le dio una mala noticia a una familia. Organízalas por criterio (dominio musical y pedagogía, calidad humana, manejo de grupo, profesionalismo y entornos seguros) y define antes qué respuesta cuenta como sólida.",
    "Aquí tienes un banco de preguntas para adaptar a tu academia o colegio, con lo que debes escuchar en cada respuesta, las señales de alerta y una escala sencilla para calificar. La entrevista no reemplaza la audición ni la clase muestra: las complementa.",
  ],
  keyTakeaways: [
    "Prefiere preguntas sobre situaciones reales (“cuéntame de una vez que…”) a preguntas sobre intenciones (“¿qué harías si…?”).",
    "Agrupa las preguntas por criterio y haz las mismas, en el mismo orden, a todos los candidatos.",
    "Antes de entrevistar, escribe qué respuesta sería débil, sólida y sobresaliente en cada pregunta.",
    "Escucha ejemplos concretos, reflexión sobre los errores y foco en el estudiante; desconfía de respuestas genéricas o que siempre culpan a otros.",
    "No hagas preguntas personales sin relación con el cargo, como estado civil, planes de tener hijos, religión u opiniones políticas.",
  ],
  sections: [
    {
      id: "como-estructurar-la-entrevista",
      heading: "Cómo estructurar la entrevista",
      blocks: [
        {
          type: "p",
          text: "Una entrevista estructurada usa las mismas preguntas, en el mismo orden y con una escala de calificación definida de antemano. Así puedes comparar candidatos con justicia y reduces el peso de la simpatía o de la seguridad al hablar. Para un profe de música, entre 45 y 60 minutos suelen alcanzar, idealmente con dos entrevistadores: alguien de la coordinación y un músico que conozca la familia del instrumento.",
        },
        {
          type: "ol",
          items: [
            "**Apertura:** presenta la institución, el cargo y las etapas del proceso.",
            "**Trayectoria:** que el candidato cuente, en pocos minutos, dónde ha enseñado, a quién y en qué formato.",
            "**Preguntas por criterio:** el bloque central, con repreguntas.",
            "**Preguntas del candidato:** lo que pregunta dice mucho de su interés y de cómo entiende el trabajo.",
            "**Cierre:** próximos pasos y fechas.",
          ],
        },
        { type: "h3", text: "Repregunta hasta llegar a lo concreto" },
        {
          type: "p",
          text: "Una buena respuesta tiene situación, acción y resultado. Si el candidato se queda en lo general, repregunta: “¿Qué hiciste exactamente?”, “¿Qué pasó después?”, “¿Qué harías distinto hoy?”. Las preguntas hipotéticas sirven cuando la persona no ha vivido esa situación, pero dales contexto: edad, número de estudiantes y formato.",
        },
      ],
    },
    {
      id: "dominio-musical-y-pedagogia",
      heading: "Preguntas sobre dominio musical y pedagogía",
      blocks: [
        {
          type: "table",
          caption: "Dominio musical y pedagogía: qué preguntar y qué escuchar",
          head: ["Pregunta", "Qué buscar en la respuesta", "Señal de alerta"],
          rows: [
            [
              "¿Qué repertorio usas con un principiante absoluto y por qué?",
              "Piezas elegidas porque resuelven un problema técnico y motivan; una progresión clara.",
              "Una lista de obras sin explicar para qué sirven, o repertorio muy por encima del nivel.",
            ],
            [
              "Cuéntame de un estudiante que no lograba una técnica o un pasaje. ¿Cómo lo destrabaste?",
              "Diagnóstico de la causa, cambio de estrategia (oído, imagen, movimiento, dividir el problema) y seguimiento.",
              "“Le dije que practicara más” como única estrategia.",
            ],
            [
              "¿Cómo planeas un periodo para un estudiante o un grupo?",
              "Metas por periodo, secuencia, momentos de evaluación y espacio para ajustar.",
              "“Voy viendo en cada clase”, sin ninguna meta escrita.",
            ],
            [
              "¿Cuándo y cómo introduces la lectura musical?",
              "Una postura argumentada y adaptada a la edad y al objetivo del estudiante.",
              "Dogmas sin matices, en un sentido o en el otro.",
            ],
            [
              "¿Qué haces si un estudiante quiere tocar música que tú no dominas?",
              "Apertura, uso del interés del estudiante como motor y límites razonables.",
              "Desprecio por los gustos del estudiante.",
            ],
          ],
        },
        {
          type: "p",
          text: "El nivel musical en sí se comprueba en la audición, no en la entrevista. Aquí evalúas cómo piensa la enseñanza. Para ver cómo la pone en práctica, usa una [clase muestra con rúbrica](/blog/clase-muestra-como-evaluar-a-un-profesor-de-musica).",
        },
      ],
    },
    {
      id: "calidad-humana-y-familias",
      heading: "Preguntas sobre calidad humana y relación con las familias",
      blocks: [
        {
          type: "table",
          caption: "Calidad humana: qué preguntar y qué escuchar",
          head: ["Pregunta", "Qué buscar en la respuesta", "Señal de alerta"],
          rows: [
            [
              "Cuéntame de un estudiante con el que te costó conectar. ¿Qué hiciste?",
              "Curiosidad por el estudiante, paciencia y ajustes concretos.",
              "Etiquetas (“era imposible”) y ninguna reflexión propia.",
            ],
            [
              "¿Cómo le cuentas a una familia que su hijo no avanza como esperaban?",
              "Honestidad, ejemplos concretos, una propuesta de plan y un tono respetuoso.",
              "Evasivas, promesas que no puede cumplir o culpar a la familia.",
            ],
            [
              "¿Cómo corriges a un estudiante que se frustra con facilidad?",
              "Retroalimentación específica y amable, una cosa a la vez, reconocimiento del avance.",
              "Corrección dura o sarcástica, o “así aprendí yo”.",
            ],
            [
              "Cuéntame de una crítica que recibiste sobre tu forma de enseñar.",
              "La acepta, explica qué cambió y qué aprendió.",
              "Defensividad, o asegura que nunca ha recibido críticas.",
            ],
          ],
        },
      ],
    },
    {
      id: "manejo-de-grupo",
      heading: "Preguntas sobre manejo de grupo (colegios y ensambles)",
      blocks: [
        {
          type: "p",
          text: "Si el cargo incluye grupos, este bloque pesa tanto como el pedagógico. Para una academia con clases individuales, puedes reducirlo a una o dos preguntas.",
        },
        {
          type: "ul",
          items: [
            "**“¿Cómo son los primeros cinco minutos de tu clase con un grupo de 30?”** Busca una rutina de entrada clara, instrucciones breves y a todos ocupados rápido.",
            "**“Cuéntame de una clase en la que el grupo se te salió de las manos. ¿Qué cambiaste después?”** Busca que identifique la causa (transiciones, instrucciones, reparto de instrumentos) y un cambio concreto.",
            "**“¿Cómo repartes y recoges los instrumentos sin perder la clase?”** Busca logística pensada, roles para los estudiantes y normas conocidas por todos.",
            "**“¿Cómo haces para que el que va más rápido y el que va más lento participen en el mismo ensayo?”** Busca arreglos por niveles, roles distintos o monitores.",
            "**“¿Cómo preparas una presentación sin que el último mes sea solo ensayar?”** Busca planeación hacia atrás y repertorio a la medida del grupo.",
          ],
        },
      ],
    },
    {
      id: "profesionalismo-y-entornos-seguros",
      heading: "Preguntas sobre profesionalismo y entornos seguros",
      blocks: [
        {
          type: "table",
          caption: "Profesionalismo y entornos seguros: qué preguntar y qué escuchar",
          head: ["Pregunta", "Qué buscar en la respuesta", "Señal de alerta"],
          rows: [
            [
              "¿Cómo registras el progreso de tus estudiantes?",
              "Un registro concreto (cuaderno, planilla, grabaciones) que usa para planear.",
              "Nada escrito; “lo llevo en la cabeza”.",
            ],
            [
              "¿Qué haces si te sale un concierto el día de una clase?",
              "Aviso con tiempo, propuesta de reposición y respeto por las reglas de la institución.",
              "Cancelar a última hora le parece normal.",
            ],
            [
              "¿Cómo te comunicas con estudiantes menores de edad fuera de clase?",
              "Canales institucionales o con la familia incluida.",
              "Chats privados con menores o contacto por redes personales.",
            ],
            [
              "¿Cómo corriges la postura de un niño?",
              "Prioriza la demostración; si necesita tocar, lo explica antes y pide permiso.",
              "Nunca lo ha pensado.",
            ],
            [
              "¿Qué harías si un estudiante te cuenta algo que te preocupa sobre su seguridad?",
              "Escucha, no promete guardar el secreto y sigue la ruta institucional.",
              "Lo resolvería por su cuenta o lo dejaría pasar.",
            ],
          ],
        },
        {
          type: "p",
          text: "Estas preguntas no reemplazan las verificaciones legales. Antes de vincular a alguien que trabajará con menores, revisa [qué verificar antes de contratar en Colombia](/blog/verificaciones-antes-de-contratar-profesores-colombia).",
        },
      ],
    },
    {
      id: "como-calificar",
      heading: "Cómo calificar las respuestas y qué no preguntar",
      blocks: [
        {
          type: "table",
          caption: "Escala sugerida para calificar cada respuesta",
          head: ["Puntaje", "Qué significa"],
          rows: [
            ["1", "Respuesta vaga o solo hipotética, sin ningún ejemplo."],
            ["2", "Un ejemplo general, con poca reflexión o acciones poco claras."],
            ["3", "Un ejemplo concreto, con acciones claras y un resultado."],
            ["4", "Un ejemplo concreto, con reflexión sobre lo aprendido y cómo lo aplicó después."],
          ],
        },
        {
          type: "ul",
          items: [
            "Cada entrevistador califica por su cuenta y anota frases textuales antes de comentar con el otro.",
            "Fija mínimos: por ejemplo, ningún 1 en entornos seguros.",
            "Guarda puntajes y notas: te sirven para decidir y para comparar con la audición y la clase muestra.",
          ],
        },
        { type: "h3", text: "Preguntas que no debes hacer" },
        {
          type: "p",
          text: "Estado civil, hijos o planes de tenerlos, embarazo, religión, orientación sexual, opiniones políticas u origen: no dicen nada sobre cómo enseña alguien y pueden resultar discriminatorias. Si necesitas saber algo práctico, pregúntalo de forma directa y para todos igual, por ejemplo: “¿Tienes disponibilidad los sábados en la mañana?”.",
        },
        {
          type: "p",
          text: "Si tu equipo no tiene tiempo o criterio musical para entrevistar, en A medio tono hacemos [evaluación de candidatos](/academias/evaluacion-de-candidatos) con entrevista estructurada, audición y clase muestra, o la [selección completa](/academias/seleccion-de-profesores). Tu institución decide y contrata directamente a quien elija. Conoce los [servicios para academias y colegios](/academias).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuántas preguntas debe tener una entrevista a un profesor de música?",
      answer:
        "Entre ocho y doce preguntas principales, con sus repreguntas, suelen caber en una entrevista de 45 a 60 minutos. Es mejor profundizar en pocas preguntas bien elegidas que recorrer una lista larga sin llegar a ejemplos concretos.",
    },
    {
      question: "¿Es mejor entrevistar en persona o por videollamada?",
      answer:
        "La entrevista funciona bien por videollamada y ahorra tiempo en las primeras etapas. Para la audición y, sobre todo, para la clase muestra de un cargo con grupos, conviene hacerlo en persona.",
    },
    {
      question: "¿Debo enviarle las preguntas al candidato antes de la entrevista?",
      answer:
        "Puedes compartir los criterios que vas a evaluar, lo cual hace el proceso más transparente. Las preguntas exactas es mejor reservarlas, para escuchar respuestas genuinas y no discursos preparados.",
    },
    {
      question: "¿Quién debe estar en la entrevista?",
      answer:
        "Idealmente dos personas: alguien de la coordinación académica, que conoce el cargo y la cultura de la institución, y un músico que pueda valorar el criterio pedagógico del instrumento. Talento humano puede sumarse para hablar de condiciones y vinculación.",
    },
  ],
  relatedCourseIds: [],
  relatedPostSlugs: [
    "como-contratar-profesores-de-musica-para-tu-academia",
    "clase-muestra-como-evaluar-a-un-profesor-de-musica",
    "como-escribir-una-vacante-de-profesor-de-musica",
  ],
  cta: "academias",
};
