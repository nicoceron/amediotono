import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "aprender-guitarra-de-adulto",
  title: "Aprender guitarra de adulto: de cero a tus canciones",
  description:
    "Aprende guitarra de adulto con las canciones que siempre quisiste tocar: cómo cuidar los dedos, qué practicar en 15 minutos y qué esperar al principio.",
  excerpt:
    "La guitarra es el instrumento que muchos adultos tienen pendiente. Así pasas de cero a tocar tus canciones favoritas, cuidando los dedos y practicando poco pero seguido.",
  category: "adultos",
  publishedAt: "2026-09-30",
  keywords: [
    "aprender guitarra de adulto",
    "clases de guitarra para adultos",
    "aprender guitarra a los 40",
    "canciones fáciles para aprender guitarra",
    "cuánto tardan en salir los callos en la guitarra",
    "es tarde para aprender guitarra",
  ],
  intro: [
    "Sí puedes aprender guitarra de adulto, y el mejor punto de partida es una lista con las canciones que siempre quisiste tocar. Con acordes abiertos, un rasgueo sencillo y 15 minutos casi todos los días, la mayoría de adultos logra acompañar sus primeras canciones sin necesidad de años de estudio. Los dedos van a doler un poco al principio: es normal y pasa.",
    "Aquí te contamos cómo elegir esas canciones, qué es normal en los dedos y qué no, qué guitarra te conviene y cómo armar una práctica corta que quepa en tu agenda.",
  ],
  keyTakeaways: [
    "Empieza con canciones que te gustan y que usen pocos acordes: la motivación es tu mejor técnica.",
    "Las yemas sensibles durante las primeras semanas son normales; el dolor en muñeca, codo o tendones no lo es.",
    "La guitarra de nylon es más amable con los dedos; la eléctrica tiene cuerdas delgadas y se puede practicar con audífonos.",
    "Quince minutos diarios bien usados rinden más que una hora el domingo.",
    "Un profe te ahorra meses de malos hábitos que los videos no corrigen.",
  ],
  sections: [
    {
      id: "la-cancion-que-quieres-tocar",
      heading: "Empieza por la canción que siempre quisiste tocar",
      blocks: [
        {
          type: "p",
          text: "Casi todo adulto que se acerca a la guitarra tiene una canción en la cabeza: la del paseo de olla, la de la serenata, la del concierto de rock de la juventud. Úsala. Haz una lista de cinco a diez canciones y llévala a la primera clase.",
        },
        {
          type: "p",
          text: "Tu profe revisará cuáles son accesibles de inmediato y cuáles quedan como meta. Muchas canciones se pueden simplificar: cambiar un acorde difícil por uno más fácil, usar un capotraste para evitar posiciones incómodas o tocar primero solo con un rasgueo básico.",
        },
        { type: "h3", text: "Canciones que suelen salir con pocos acordes" },
        {
          type: "ul",
          items: [
            "Knockin' on Heaven's Door, de Bob Dylan: Sol, Re, La menor y Do.",
            "Let It Be, de The Beatles: Do, Sol, La menor y Fa (el Fa se puede simplificar al comienzo).",
            "La Bamba, en su versión tradicional: Do, Fa y Sol.",
            "Muchas baladas, rancheras y canciones populares que giran sobre tres o cuatro acordes.",
          ],
        },
        {
          type: "p",
          text: "Las posiciones de cada acorde las tienes explicadas en [acordes básicos de guitarra para principiantes](/blog/acordes-basicos-de-guitarra-para-principiantes).",
        },
      ],
    },
    {
      id: "dolor-en-los-dedos",
      heading: "Dedos que duelen: qué es normal y qué no",
      blocks: [
        {
          type: "p",
          text: "Las primeras semanas, las yemas de la mano que pisa las cuerdas (la izquierda, si eres diestro) se sienten sensibles o marcadas. Con práctica frecuente la piel se endurece y el malestar desaparece. Para que ese proceso sea llevadero:",
        },
        {
          type: "ul",
          items: [
            "Practica poco y seguido: varias sesiones cortas en lugar de una larga.",
            "No aprietes más de lo necesario. Pisa justo detrás del traste; ahí basta menos fuerza.",
            "Revisa la altura de las cuerdas: una guitarra con cuerdas muy altas obliga a presionar el doble. Un luthier puede ajustarla.",
            "Si tu guitarra es de cuerdas metálicas, considera un calibre más delgado al empezar.",
          ],
        },
        {
          type: "p",
          text: "Lo que no es normal es el dolor en la muñeca, el antebrazo, el codo o el hombro, ni el hormigueo. Eso suele indicar tensión o mala postura. Detente, revisa con tu profe cómo sostienes la guitarra y, si persiste, consulta con un médico.",
        },
        {
          type: "p",
          text: "Las manos de un adulto pueden ser menos flexibles que las de un adolescente, sobre todo para estirar los dedos. No pasa nada: la cejilla y los acordes con aperturas grandes llegan más adelante, cuando la mano ya tiene fuerza y coordinación.",
        },
      ],
    },
    {
      id: "acustica-o-electrica",
      heading: "¿Guitarra acústica o eléctrica para un adulto?",
      blocks: [
        {
          type: "p",
          text: "Depende de la música que quieras tocar y de dónde vas a practicar. Esta comparación resume lo que más le importa a un adulto que empieza:",
        },
        {
          type: "table",
          caption: "Tipos de guitarra para un adulto principiante",
          head: ["Aspecto", "Clásica (nylon)", "Acústica (metal)", "Eléctrica"],
          rows: [
            ["Dedos", "La más suave.", "La más exigente al principio.", "Cuerdas delgadas, fáciles de pisar."],
            ["Música", "Boleros, música latina, clásica, serenatas.", "Pop, rock acústico, baladas, country.", "Rock, blues, funk, pop."],
            ["Ruido en casa", "Moderado.", "Más fuerte y brillante.", "Silenciosa con audífonos en el amplificador."],
            ["Equipo extra", "Ninguno.", "Ninguno.", "Amplificador y cable."],
            ["Mástil", "Ancho.", "Más delgado.", "Delgado."],
          ],
        },
        {
          type: "p",
          text: "Si tu sueño es la [guitarra eléctrica](/clases/guitarra-electrica), empieza con ella: las cuerdas delgadas y la poca altura la hacen muy cómoda. Si piensas en serenatas o música latinoamericana, la [guitarra acústica](/clases/guitarra-acustica) de nylon es la puerta natural. Profundizamos en [guitarra acústica o eléctrica: cuál aprender primero](/blog/guitarra-acustica-o-electrica-cual-aprender-primero).",
        },
      ],
    },
    {
      id: "practica-corta",
      heading: "Una práctica de 15 minutos para agendas llenas",
      blocks: [
        {
          type: "p",
          text: "No necesitas una hora libre. Esta rutina cabe entre el trabajo y la comida:",
        },
        {
          type: "table",
          caption: "Rutina corta de guitarra para adultos",
          head: ["Minutos", "Qué hacer"],
          rows: [
            ["0 a 2", "Afinar y soltar hombros, muñecas y dedos."],
            ["2 a 6", "Cambios entre dos acordes que te cuesten, por ejemplo Sol y Do, contando cuántos cambios limpios logras en un minuto."],
            ["6 a 10", "Un patrón de rasgueo con metrónomo, lento y parejo."],
            ["10 a 15", "Tu canción: toca la parte que ya sale y agrega un fragmento nuevo."],
          ],
        },
        {
          type: "p",
          text: "Para afinar rápido, usa el [afinador de guitarra online](/herramientas/afinador/guitarra). Y un truco que funciona: deja la guitarra fuera del estuche, en un soporte y a la vista. Si cada vez tienes que sacarla, abrir el estuche y buscar la uña, muchas noches no la vas a tocar.",
        },
      ],
    },
    {
      id: "primeros-meses",
      heading: "Qué vas a aprender en los primeros meses",
      blocks: [
        {
          type: "ol",
          items: [
            "Postura, cómo sostener la guitarra y cómo afinarla.",
            "Primeros acordes abiertos, empezando por los más sencillos, como Mi menor y La menor.",
            "Un rasgueo básico y la idea de pulso: tocar sin detenerte aunque te equivoques.",
            "Cambios de acorde cada vez más fluidos.",
            "Tu primera canción completa, de principio a fin.",
            "Lectura de cifrado y tablatura, y quizás tus primeros arpegios o un punteo sencillo.",
          ],
        },
        {
          type: "p",
          text: "La cejilla, las escalas para improvisar y los ritmos más elaborados llegan después. Si quieres una idea general de los tiempos, revisa [cuánto tiempo toma aprender guitarra](/blog/cuanto-tiempo-toma-aprender-guitarra).",
        },
      ],
    },
    {
      id: "errores-comunes",
      heading: "Errores comunes del guitarrista adulto",
      blocks: [
        {
          type: "ul",
          items: [
            "Comprar la guitarra más barata sin revisar la altura de las cuerdas, y luego culpar a los dedos.",
            "Aprender solo con tutoriales y acumular vicios de postura que nadie corrige.",
            "Detenerse cada vez que un acorde no suena limpio, en vez de mantener el ritmo.",
            "Apretar las cuerdas con toda la fuerza de la mano.",
            "Elegir como primera meta una canción llena de cejillas y solos rápidos.",
            "Tocar encorvado en el sofá durante horas.",
          ],
        },
        {
          type: "callout",
          title: "Tu espalda también toca",
          text: "Siéntate en una silla sin brazos, con los pies apoyados y la espalda recta. En guitarra clásica, un reposapiés o un soporte eleva el mástil y evita que te encorves. Si después de practicar te duele la espalda, la postura necesita ajustes.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Se puede aprender guitarra a los 50 o a los 60?",
      answer:
        "Sí. Lo que cambia es el enfoque: sesiones cortas, cuerdas cómodas y canciones que te motiven. Muchas personas empiezan a esas edades y disfrutan tocar en reuniones familiares o simplemente para sí mismas.",
    },
    {
      question: "¿Cuánto tardan los dedos en acostumbrarse a las cuerdas?",
      answer:
        "Depende de cuánto practiques y del tipo de cuerdas, pero con práctica corta casi diaria la molestia en las yemas suele disminuir en pocas semanas. Si sientes dolor en articulaciones o tendones, detente y consulta.",
    },
    {
      question: "¿Qué pasa si tengo manos pequeñas o dedos gruesos?",
      answer:
        "Se puede tocar igual. Con manos pequeñas, una guitarra de cuerpo más pequeño o de mástil delgado ayuda; con dedos gruesos, se trabaja la precisión apoyando bien la punta del dedo. Tu profe adapta las digitaciones a tu mano.",
    },
    {
      question: "¿Funcionan las clases de guitarra virtuales para adultos?",
      answer:
        "Sí, y son muy prácticas si tu agenda es complicada. Ubica la cámara para que se vean las dos manos y el mástil, y usa audífonos para escuchar bien las indicaciones del profe.",
    },
    {
      question: "¿Necesito saber leer música para aprender guitarra?",
      answer:
        "No para empezar. Muchas canciones se aprenden con cifrado de acordes y tablaturas. Leer partitura es útil si te interesa la guitarra clásica o si quieres entender más a fondo lo que tocas.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "guitarra-electrica"],
  relatedPostSlugs: [
    "acordes-basicos-de-guitarra-para-principiantes",
    "guitarra-acustica-o-electrica-cual-aprender-primero",
    "cuanto-tiempo-toma-aprender-guitarra",
  ],
  cta: "clases",
};
