import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "entrevista-de-admision-en-musica",
  title: "Entrevista de admisión en música: preguntas que conviene preparar y cómo responder",
  seoTitle: "Entrevista de admisión en música: cómo prepararla",
  description:
    "Qué preguntan en la entrevista de admisión a música, por qué pesa tanto en las licenciaturas y cómo hablar de tu recorrido y tu vocación sin memorizar.",
  excerpt:
    "En algunas licenciaturas la entrevista pesa tanto como la prueba de teoría. Estas son las preguntas que conviene preparar y los errores que más restan.",
  category: "estudiar-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "entrevista de admisión música",
    "preguntas entrevista licenciatura en música",
    "qué preguntan en la entrevista de música en la universidad",
    "cómo prepararse para la entrevista de admisión universitaria",
    "entrevista universidad pedagógica música",
  ],
  intro: [
    "La entrevista de admisión en música no es un trámite. En la Licenciatura en Música de la Universidad Pedagógica Nacional, por ejemplo, pesaba el 40 % del resultado en la convocatoria más reciente que revisamos (2026-2), lo mismo que toda la prueba de aptitud y conocimiento musical. Y aparece en muchos otros procesos, como los de la Javeriana, El Bosque, la Universidad Central, el Conservatorio del Tolima o la licenciatura de Univalle.",
    "Se prepara igual que el instrumento: con tiempo, ensayando en voz alta y con alguien que te haga preguntas de verdad. Aquí tienes las preguntas que conviene preparar, cómo contar tu recorrido y los errores que más restan.",
  ],
  keyTakeaways: [
    "En la convocatoria 2026-2 de la UPN, la entrevista pesaba el 40 % de la admisión a la Licenciatura en Música.",
    "Las licenciaturas forman profes de música, así que es lógico que miren tu disposición para enseñar, no solo tu nivel.",
    "Prepara tu recorrido musical como un relato de unos dos minutos, con ejemplos concretos.",
    "Ensaya en voz alta, pero no memorices respuestas: se nota y le quita naturalidad a la conversación.",
    "Conoce el programa al que te presentas: su enfoque, sus énfasis y por qué lo elegiste.",
  ],
  sections: [
    {
      id: "por-que-importa-la-entrevista",
      heading: "Por qué la entrevista pesa tanto, sobre todo en licenciaturas",
      blocks: [
        {
          type: "callout",
          title: "Cada universidad define su entrevista",
          text: "Si hay entrevista, cuánto pesa y si es presencial o virtual cambia según la universidad y el periodo. Los datos de este artículo corresponden a la convocatoria más reciente que revisamos (2026); confírmalos siempre en el instructivo o la guía del aspirante vigente en el sitio oficial de tu programa.",
        },
        {
          type: "p",
          text: "Una licenciatura forma músicos que van a enseñar en colegios, escuelas de música y otros espacios. Tiene sentido que, además de tu nivel musical, el jurado quiera saber si entiendes lo que implica enseñar y si tu motivación es clara. En los programas de Maestro en Música la entrevista también aparece, aunque con otro foco.",
        },
        {
          type: "table",
          caption: "La entrevista en algunos procesos de admisión (según lo revisado, 2026)",
          head: ["Institución", "Programa", "Papel de la entrevista"],
          rows: [
            ["Universidad Pedagógica Nacional", "Licenciatura en Música", "40 % del resultado en 2026-2"],
            ["Pontificia Universidad Javeriana", "Estudios Musicales", "Entrevista junto con la audición según el énfasis"],
            ["Universidad El Bosque", "Formación Musical", "Entrevista el mismo día de las pruebas"],
            ["Universidad Central", "Estudios Musicales", "Entrevista virtual, además de las pruebas musicales"],
            ["Conservatorio del Tolima", "Maestro en Música y Licenciatura en Música", "Entrevista en ambos programas"],
            ["Universidad del Valle", "Licenciatura en Música", "Entrevista además de la prueba específica"],
          ],
        },
        {
          type: "p",
          text: "La licenciatura de la Universidad del Atlántico, además, incluía un ejercicio pedagógico corto: otra señal de que la vocación docente se evalúa. Si te presentas a la UPN, revisa también [cómo es su prueba de admisión completa](/blog/admision-licenciatura-en-musica-universidad-pedagogica).",
        },
      ],
    },
    {
      id: "preguntas-que-conviene-preparar",
      heading: "Preguntas que conviene preparar",
      blocks: [
        {
          type: "p",
          text: "No conocemos un banco oficial de preguntas, pero hay temas que salen de forma natural en cualquier entrevista de música. Prepara estas:",
        },
        { type: "h3", text: "Sobre tu recorrido" },
        {
          type: "ul",
          items: [
            "¿Cómo empezaste en la música y con quién has estudiado?",
            "¿Qué instrumento tocas y desde hace cuánto?",
            "¿En qué agrupaciones o proyectos has participado?",
            "¿Qué música escuchas y cuál te gustaría hacer?",
          ],
        },
        { type: "h3", text: "Sobre tu motivación" },
        {
          type: "ul",
          items: [
            "¿Por qué quieres estudiar música como carrera?",
            "¿Por qué este programa y esta universidad?",
            "¿Dónde te ves cuando termines?",
          ],
        },
        { type: "h3", text: "Sobre la enseñanza, si es una licenciatura" },
        {
          type: "ul",
          items: [
            "¿Has enseñado música alguna vez, aunque sea de manera informal?",
            "¿Qué crees que hace a un buen profesor de música?",
            "¿Cómo le enseñarías un ritmo o una canción a un grupo de niños?",
            "¿Qué papel tiene la música en un colegio o en una comunidad?",
          ],
        },
        { type: "h3", text: "Sobre tu prueba" },
        {
          type: "ul",
          items: [
            "¿Por qué elegiste esa obra?",
            "¿Qué fue lo más difícil de preparar?",
            "¿Cómo te sentiste tocando o cantando?",
          ],
        },
      ],
    },
    {
      id: "como-contar-tu-recorrido",
      heading: "Cómo contar tu recorrido musical",
      blocks: [
        {
          type: "p",
          text: "Tu historia no tiene que ser impresionante; tiene que ser clara y verdadera. Una estructura que funciona:",
        },
        {
          type: "ol",
          items: [
            "**Inicio**: cómo llegaste a la música, sea la banda del colegio, un familiar, un coro o videos en internet.",
            "**Formación**: con quién y cómo has estudiado, incluidas clases particulares, escuelas de música o preparatorios.",
            "**Experiencia**: agrupaciones, presentaciones, festivales o proyectos propios.",
            "**Momento actual**: qué estás trabajando y qué te falta.",
            "**Hacia dónde vas**: por qué este programa encaja con eso.",
          ],
        },
        {
          type: "p",
          text: "Un ejemplo concreto vale más que diez adjetivos. En vez de “me gusta la música desde pequeño”, algo como: “Empecé con el clarinete en la banda del colegio a los 12 años, y desde hace dos años ayudo a los más pequeños a montar sus partes en los ensayos”.",
        },
        {
          type: "p",
          text: "Si aprendiste por tu cuenta o vienes de la música popular o tradicional, cuéntalo con precisión y sin complejos. Y reconoce con honestidad lo que te falta, como la lectura o la teoría, junto con lo que estás haciendo para resolverlo.",
        },
      ],
    },
    {
      id: "disposicion-pedagogica",
      heading: "Cómo mostrar disposición pedagógica",
      blocks: [
        {
          type: "p",
          text: "En una licenciatura, la vocación no se demuestra diciendo “me encantan los niños”. Se demuestra con experiencias y con reflexión:",
        },
        {
          type: "ul",
          items: [
            "Busca experiencias antes de la entrevista: apoyar en la banda o el coro del colegio, ayudar a un compañero con teoría o acompañar a un hermano menor que empieza.",
            "Piensa en tus profes: qué hacía el que más te ayudó y qué no te funcionó con otros. Esa reflexión es material valioso.",
            "Ten clara una forma sencilla de enseñar algo concreto, como el pulso, una escala o una canción, paso a paso.",
            "Infórmate sobre dónde se enseña música en Colombia: colegios, escuelas municipales de música, casas de cultura, bandas y programas como los de la Fundación Nacional Batuta.",
          ],
        },
        {
          type: "p",
          text: "Si todavía dudas entre enseñar o dedicarte a la interpretación, vale la pena aclararlo antes de la entrevista: revisa las diferencias entre [Maestro en Música y Licenciatura en Música](/blog/maestro-en-musica-o-licenciatura-en-musica).",
        },
      ],
    },
    {
      id: "errores-que-restan",
      heading: "Errores que más restan en una entrevista de música",
      blocks: [
        {
          type: "ul",
          items: [
            "Recitar respuestas memorizadas: la conversación se vuelve rígida y se nota.",
            "No saber nada del programa, ni sus énfasis ni su enfoque.",
            "Hablar mal de profes o instituciones anteriores.",
            "Decir que eliges la licenciatura “por si no me va bien tocando”.",
            "Exagerar tu nivel o tu experiencia: el jurado puede comprobarlo en tus pruebas.",
            "Responder con monosílabos por nervios. Si no entiendes una pregunta, pide que te la repitan.",
            "En una entrevista virtual, llegar con mala conexión, ruido de fondo o la cámara mal ubicada.",
          ],
        },
      ],
    },
    {
      id: "practicar-la-entrevista",
      heading: "Cómo practicar la entrevista",
      blocks: [
        {
          type: "ol",
          items: [
            "Escribe tus ideas para cada pregunta en viñetas, no en párrafos completos.",
            "Dilas en voz alta y grábate con el celular. Revisa si se entiende, si hablas muy rápido o si repites muletillas.",
            "Haz dos o tres simulacros con alguien que no te conozca mucho y que pueda sorprenderte con preguntas nuevas.",
            "Prepara dos o tres preguntas propias sobre el programa: muestran interés real.",
            "El día anterior, repasa solo tus ideas clave y descansa.",
          ],
        },
        {
          type: "p",
          text: "Un profe de música es un buen entrevistador de práctica: conoce el medio, puede preguntarte por tu repertorio y detecta las respuestas vagas. En A medio tono, además de preparar [teoría musical](/clases/teoria-musical), solfeo, dictado e instrumento con profes, en clases virtuales o a domicilio en Bogotá, puedes pedirle a tu profe que dedique parte de una clase a simular la entrevista. Te contamos cómo en [preparación para pruebas de admisión de música](/preuniversitario-musica), y el resto de la preparación está en [cómo prepararte para la prueba de admisión de música](/blog/como-prepararte-para-la-prueba-de-admision-de-musica).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿La entrevista de admisión en música es presencial o virtual?",
      answer:
        "Depende de la universidad y del periodo. En la Universidad Central, por ejemplo, era virtual según lo que revisamos. Confírmalo en el instructivo vigente y, si es virtual, prueba antes tu conexión, cámara y micrófono.",
    },
    {
      question: "¿Qué hago si me quedo en blanco en la entrevista?",
      answer:
        "Respira y pide un momento o que te repitan la pregunta. Una pausa corta es mejor que una respuesta atropellada. Tener tus ideas clave ordenadas en viñetas mentales te ayuda a retomar el hilo.",
    },
    {
      question: "¿Es una desventaja venir de la música popular y no de la académica?",
      answer:
        "En la entrevista no tiene por qué serlo: lo que cuenta es que expliques con claridad tu recorrido y lo que te falta. Eso sí, revisa que tu nivel de teoría y lectura alcance para las demás pruebas.",
    },
    {
      question: "¿También hay entrevista si me presento a Maestro en Música y no a licenciatura?",
      answer:
        "En algunos programas sí. En lo que revisamos, la Javeriana, El Bosque, la Central y el Conservatorio del Tolima incluían entrevista en programas de formación como Maestro en Música. Su peso varía, así que confírmalo en cada convocatoria.",
    },
  ],
  relatedCourseIds: ["teoria-musical"],
  relatedPostSlugs: [
    "admision-licenciatura-en-musica-universidad-pedagogica",
    "maestro-en-musica-o-licenciatura-en-musica",
    "como-prepararte-para-la-prueba-de-admision-de-musica",
  ],
  cta: "clases",
};
