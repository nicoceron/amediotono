import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "que-instrumento-elegir-para-mi-hijo",
  title: "¿Qué instrumento elegir para mi hijo? Guía por edad y gustos",
  seoTitle: "Qué instrumento elegir para mi hijo: guía para papás",
  description:
    "Cómo elegir el instrumento de tu hijo según su edad, tamaño, gustos, personalidad y la logística de casa, y por qué conviene probar antes de comprar.",
  excerpt:
    "Elegir el primer instrumento de tu hijo es más fácil si cruzas cuatro factores: edad, gustos, personalidad y logística de casa. Y si lo prueba antes de comprar.",
  category: "ninos",
  publishedAt: "2026-09-30",
  keywords: [
    "qué instrumento elegir para mi hijo",
    "mejor instrumento para niños",
    "qué instrumento debe aprender un niño",
    "instrumento musical para niños de 6 años",
    "instrumento más fácil para niños",
  ],
  intro: [
    "Para elegir el instrumento de tu hijo, cruza cuatro cosas: su edad y su tamaño (qué puede tocar cómodo hoy), la música que le gusta, su personalidad y la logística de tu casa (espacio, ruido, transporte). Y antes de comprar, que lo pruebe: unas primeras clases con un instrumento prestado dicen más que cualquier guía.",
    "No existe un instrumento “mejor” para los niños en general. Existe el que encaja con tu hijo en este momento, y esa elección no es para siempre.",
  ],
  keyTakeaways: [
    "Elige cruzando edad y tamaño, gustos musicales, personalidad y logística de casa.",
    "Hasta los 5 años, la iniciación musical es la mejor base; entre los 6 y los 8 funcionan piano, violín, guitarra pequeña y flauta dulce; desde los 9 se suman vientos, batería y bajo.",
    "El interés del niño pesa más que el prestigio del instrumento o lo que el papá quiso tocar.",
    "Prueba antes de comprar: clases con un instrumento prestado y la asesoría del profe sobre tamaño y modelo.",
    "Cambiar de instrumento es normal, y lo aprendido se transfiere.",
  ],
  sections: [
    {
      id: "por-edad-y-tamano",
      heading: "Por edad y tamaño",
      blocks: [
        {
          type: "p",
          text: "El cuerpo manda: un instrumento demasiado grande o pesado genera malas posturas y frustración. Como referencia general:",
        },
        {
          type: "table",
          caption: "Opciones cómodas según la edad",
          head: ["Edad", "Opciones cómodas", "Por qué"],
          rows: [
            [
              "3 a 5 años",
              "[Iniciación musical](/clases/iniciacion-musical) y percusión menor; algunos niños, piano o violín con enfoque lúdico.",
              "Aprenden jugando y moviéndose; para la mayoría de instrumentos, las manos todavía son pequeñas.",
            ],
            [
              "6 a 8 años",
              "Piano, violín, violonchelo, flauta dulce, percusión y guitarra de tamaño reducido.",
              "Hay versiones a su medida, y la lectura que aprenden en el colegio ayuda con la partitura.",
            ],
            [
              "9 a 12 años",
              "Saxofón, trompeta, clarinete, flauta traversa, trombón, batería, guitarra eléctrica y bajo.",
              "Dientes definitivos, brazos más largos y más capacidad de aire.",
            ],
            [
              "13 años en adelante",
              "Cualquier instrumento.",
              "El cuerpo ya no limita; pesan más los gustos y las metas.",
            ],
          ],
        },
        {
          type: "p",
          text: "Para ver la edad orientativa de cada instrumento con más detalle, revisa [a qué edad empezar a estudiar música](/blog/a-que-edad-empezar-a-estudiar-musica).",
        },
      ],
    },
    {
      id: "por-gustos",
      heading: "Por la música que le gusta",
      blocks: [
        {
          type: "p",
          text: "Pregúntale qué música le gusta y fíjate en lo que escucha, canta o baila. Es la mejor pista:",
        },
        {
          type: "table",
          caption: "Pistas según los gustos musicales",
          head: ["Si le gusta…", "Instrumentos para mirar"],
          rows: [
            ["Rock y pop", "Guitarra eléctrica, bajo, batería, canto."],
            ["Música de películas y música clásica", "Piano, violín, violonchelo, flauta traversa."],
            ["Salsa, cumbia y música del Caribe", "Percusión, trompeta, saxofón, trombón."],
            ["Música andina colombiana", "Tiple, bandola, guitarra."],
            ["Canta todo el día", "Canto, y piano o guitarra para acompañarse."],
            ["Jazz", "Saxofón, piano, contrabajo, batería."],
          ],
        },
        {
          type: "p",
          text: "Un buen ejercicio: vean juntos videos de distintos instrumentos, o vayan a un concierto de una orquesta juvenil o de una banda, y observa qué le llama la atención. A veces el instrumento aparece solo: “quiero tocar eso”.",
        },
      ],
    },
    {
      id: "por-personalidad",
      heading: "Por su personalidad y su forma de aprender",
      blocks: [
        {
          type: "p",
          text: "Toma estas ideas como pistas, no como reglas. Hay niños tímidos que brillan en la batería y niños inquietos que aman el violín.",
        },
        {
          type: "ul",
          items: [
            "Si necesita moverse y tiene mucha energía: la percusión y la batería canalizan ese impulso.",
            "Si es detallista y paciente: el [violín](/clases/violin) y el piano recompensan el trabajo fino.",
            "Si quiere resultados rápidos: la [guitarra](/clases/guitarra-acustica) permite acompañar canciones en pocas semanas, y el piano también da resultados visibles pronto.",
            "Si le encanta estar en grupo: los vientos le abren la puerta a las bandas, y el canto, a los coros.",
            "Si le gusta “ver” lo que hace: el teclado del [piano](/clases/piano) muestra la lógica de las notas de un vistazo.",
            "Si es tímido: una clase individual al principio, y los ensambles cuando gane confianza.",
          ],
        },
        {
          type: "p",
          text: "Otro punto: algunos niños disfrutan más la melodía (cantar, llevar la parte principal) y otros el ritmo o el acompañamiento. Observar con qué se engancha en la música que escucha también ayuda a elegir.",
        },
      ],
    },
    {
      id: "logistica-en-casa",
      heading: "Espacio, ruido y logística en casa",
      blocks: [
        {
          type: "p",
          text: "El mejor instrumento en teoría no sirve si en casa no se puede practicar. Antes de decidir, piensa en:",
        },
        {
          type: "ul",
          items: [
            "Ruido: en un apartamento, una batería acústica o una trompeta necesitan acuerdos de horario, un pad de práctica o una sordina. Un piano digital o una guitarra eléctrica permiten usar audífonos.",
            "Espacio: un piano ocupa una pared; un violín cabe en un clóset.",
            "Transporte: llevar un violonchelo en bus o en TransMilenio es todo un reto; con clases a domicilio, el instrumento no tiene que salir de casa.",
            "Clima: los instrumentos de madera sufren con los cambios bruscos de temperatura y humedad; en casa, mantenlos lejos del sol directo de la ventana.",
            "Presupuesto: una flauta dulce cuesta mucho menos que un piano. Hay opciones de alquiler, préstamo o instrumentos usados en buen estado, y el profe te puede orientar.",
          ],
        },
      ],
    },
    {
      id: "probar-antes-de-comprar",
      heading: "Probar antes de comprar",
      blocks: [
        {
          type: "ol",
          items: [
            "Escuchen el instrumento en vivo: en un concierto, en el colegio o con un familiar que lo toque.",
            "Tomen unas primeras clases con un instrumento prestado por un familiar, el colegio o el profe, si es posible.",
            "Pregúntale al profe qué tamaño y qué tipo de instrumento necesita tu hijo. En violín y guitarra, el tamaño es clave.",
            "Compra un instrumento de estudio adecuado, no uno de juguete: los de juguete no afinan y terminan frustrando.",
            "Si compras usado, pídele al profe que lo revise antes de pagar.",
          ],
        },
        {
          type: "p",
          text: "En el [directorio de profes](/profes) puedes ver los profes por instrumento; muchas familias usan las primeras clases para confirmar la elección antes de invertir en el instrumento definitivo.",
        },
      ],
    },
    {
      id: "errores-al-elegir",
      heading: "Errores comunes al elegir",
      blocks: [
        {
          type: "ul",
          items: [
            "Elegir por lo que tú quisiste tocar de niño.",
            "Elegir por prestigio: ningún instrumento es “más serio” que otro.",
            "Comprar un instrumento grande para que le dure.",
            "Decidir solo por el precio del instrumento, sin pensar en si el niño lo va a disfrutar.",
            "Pensar que la elección es para siempre.",
          ],
        },
        {
          type: "callout",
          title: "La elección no es para siempre",
          text: "Muchos músicos empezaron con un instrumento y terminaron en otro. El ritmo, el oído, la lectura y el hábito de practicar pasan de un instrumento al siguiente. Elegir bien ahora es importante, pero equivocarse no es perder el tiempo.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es el instrumento más fácil para un niño?",
      answer:
        "Depende de qué entiendas por fácil. El piano y la percusión dan resultados rápidos porque el sonido sale de inmediato; la flauta dulce es liviana y accesible; el violín y los vientos piden más paciencia al principio. Para un niño, lo más fácil suele ser el instrumento que le gusta, porque practica con ganas.",
    },
    {
      question: "¿Es mejor empezar con piano o con guitarra?",
      answer:
        "Los dos son buenas puertas de entrada. El piano muestra la lógica de las notas y se puede empezar un poco antes; la guitarra es portátil y permite acompañar canciones pronto, pero pide algo más de fuerza en los dedos. Decide según la edad de tu hijo y la música que le gusta.",
    },
    {
      question: "¿Qué hago si mi hijo quiere un instrumento que no me parece adecuado?",
      answer:
        "Escucha por qué lo quiere y consulta con un profe. Si es un instrumento para más adelante, como el saxofón a los 6 años, puede empezar con uno que prepare el camino, como la flauta dulce o el piano, sin perder de vista su meta. Si el problema es el ruido o el espacio, casi siempre hay adaptaciones.",
    },
    {
      question: "¿Debe aprender primero flauta dulce?",
      answer:
        "No es obligatorio. Es un buen primer instrumento de viento y prepara para la flauta traversa, el clarinete o el saxofón, pero si tu hijo ya quiere piano o violín y tiene la edad, puede empezar directamente.",
    },
  ],
  relatedCourseIds: ["iniciacion-musical", "piano", "violin", "guitarra-acustica"],
  relatedPostSlugs: [
    "piano-o-guitarra-primer-instrumento",
    "a-que-edad-empezar-a-estudiar-musica",
    "instrumento-nuevo-o-usado-que-revisar-antes-de-comprar",
  ],
  cta: "clases",
};
