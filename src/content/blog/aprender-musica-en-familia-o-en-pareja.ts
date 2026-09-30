import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "aprender-musica-en-familia-o-en-pareja",
  title: "Aprender música en familia o en pareja: guía práctica",
  description:
    "Ideas para aprender música en familia o en pareja: clase compartida o separada, instrumentos que combinan, rutina en casa y un primer proyecto juntos.",
  excerpt:
    "Tocar con tu pareja, tus hijos o tus papás es una de las mejores razones para aprender. Así se organizan las clases, se eligen instrumentos que combinan y se arma una rutina en casa.",
  category: "adultos",
  publishedAt: "2026-09-30",
  keywords: [
    "aprender música en familia",
    "clases de música en pareja",
    "clases de música para papás e hijos",
    "instrumentos para tocar en pareja",
    "actividades en familia con música",
    "clases de música grupales en casa",
  ],
  intro: [
    "Aprender música en familia o en pareja funciona muy bien cuando cada uno tiene su propio espacio para avanzar y hay un momento compartido para tocar juntos. La fórmula más práctica suele ser una clase compartida si van a un nivel parecido, o clases individuales seguidas con el mismo profe si no, más un ensayo familiar corto cada semana.",
    "Aquí te explicamos cómo elegir el formato de clase, qué instrumentos combinan bien, cómo manejar niveles distintos sin competir y cómo armar un primer proyecto juntos.",
  ],
  keyTakeaways: [
    "Clase compartida si van a un nivel parecido; clases individuales seguidas si los niveles o los instrumentos son distintos.",
    "Guitarra y canto, piano y voz, o guitarra y cajón son combinaciones que suenan bien desde el principio.",
    "Separa la práctica individual del ensayo en familia, y dale a cada uno su propio rato.",
    "En pareja, elegir instrumentos distintos evita comparaciones y permite tocar juntos antes.",
    "Un proyecto con fecha, como una canción para la novena, une a todos alrededor de una meta.",
  ],
  sections: [
    {
      id: "compartida-o-separada",
      heading: "Clase compartida o clases separadas",
      blocks: [
        {
          type: "table",
          caption: "Formatos de clase para familias y parejas",
          head: ["Formato", "Ventajas", "Cuándo conviene"],
          rows: [
            ["Clase compartida, mismo instrumento", "Aprenden juntos, se motivan y practican lo mismo en casa.", "Parejas o hermanos que empiezan al mismo tiempo y a un ritmo parecido."],
            ["Grupo pequeño, instrumentos distintos", "Desde el principio suenan como un pequeño ensamble.", "Familias con una meta común, como tocar canciones juntos."],
            ["Clases individuales seguidas", "Cada uno avanza a su ritmo, con el mismo profe y el mismo día.", "Niveles muy distintos, por ejemplo una mamá principiante y una hija con experiencia."],
            ["Mixto", "Clase individual y, de vez en cuando, una sesión conjunta de ensamble.", "Cuando quieren técnica personal y también tocar juntos."],
          ],
        },
        {
          type: "p",
          text: "Con clases a domicilio, programar las clases una tras otra es especialmente práctico, porque el profe atiende a varios en la misma visita. Si dudas entre un formato y otro, lee [clases de música individuales o grupales](/blog/clases-de-musica-individuales-o-grupales).",
        },
      ],
    },
    {
      id: "niveles-distintos",
      heading: "Niveles distintos en la misma casa",
      blocks: [
        {
          type: "p",
          text: "Es casi seguro que alguien va a avanzar más rápido. Un niño puede memorizar una melodía antes que su papá, y el papá puede entender la teoría antes que el niño. Eso no tiene por qué ser un problema:",
        },
        {
          type: "ul",
          items: [
            "**Nadie corrige a nadie,** salvo que se lo pidan. La corrección le toca al profe.",
            "**Cada uno tiene su parte:** el profe puede escribir arreglos en los que el más avanzado toca la melodía y el principiante lleva un acompañamiento sencillo.",
            "**Se celebran los avances de cada uno,** sin compararlos.",
            "**El que va adelante acompaña, pero no da clase:** tocar juntos es lo que más aporta.",
          ],
        },
        {
          type: "p",
          text: "Cuando papás e hijos aprenden al mismo tiempo, el niño ve que el adulto también se equivoca, practica y mejora. Ese ejemplo pesa más que cualquier sermón sobre la constancia.",
        },
      ],
    },
    {
      id: "instrumentos-que-combinan",
      heading: "Instrumentos que combinan bien",
      blocks: [
        {
          type: "table",
          caption: "Combinaciones que suenan bien desde las primeras semanas",
          head: ["Combinación", "Por qué funciona", "Idea de repertorio"],
          rows: [
            ["Guitarra y canto", "La guitarra acompaña con pocos acordes y la voz lleva la melodía.", "Baladas, boleros, música latinoamericana."],
            ["Piano y canto", "El piano sostiene la armonía y deja la voz al frente.", "Canciones populares, villancicos, música de iglesia."],
            ["Piano a cuatro manos", "Dos personas en el mismo instrumento, con partes de distinta dificultad.", "Arreglos a cuatro manos para principiantes."],
            ["Guitarra y percusión", "El cajón o las maracas marcan el pulso y dan energía.", "Cumbia, rumba, pop acústico."],
            ["Tiple y guitarra", "Son la base de la música andina colombiana.", "Bambucos y pasillos."],
            ["Piano y violín", "Una combinación clásica con un repertorio enorme.", "Piezas cortas para violín y piano."],
          ],
        },
        {
          type: "p",
          text: "Para los más pequeños de la casa, la [percusión](/clases/percusion) es una puerta de entrada natural: les permite tocar con los adultos desde el primer día llevando el pulso. Y para quien busca el instrumento más versátil para acompañar, la [guitarra acústica](/clases/guitarra-acustica) y el [piano](/clases/piano) son los más usados.",
        },
      ],
    },
    {
      id: "rutina-en-casa",
      heading: "Una rutina que funcione en casa",
      blocks: [
        {
          type: "p",
          text: "La clave es separar dos momentos: la práctica individual, en la que cada uno trabaja lo suyo, y el ensayo compartido, en el que tocan juntos.",
        },
        {
          type: "ul",
          items: [
            "**Turnos para el instrumento:** si hay un solo piano, un horario pegado en la nevera evita discusiones.",
            "**Audífonos:** con piano digital o guitarra eléctrica, uno practica sin interrumpir la conversación o las tareas de los demás.",
            "**Ensayo familiar fijo:** de 20 a 30 minutos a la semana, por ejemplo el domingo después del almuerzo.",
            "**Un rincón musical:** atriles, sillas y el instrumento listos para que empezar sea fácil.",
            "**Mini conciertos:** de vez en cuando, toquen para los abuelos por videollamada o para las visitas.",
          ],
        },
        {
          type: "p",
          text: "El ensayo familiar no reemplaza la práctica individual; la complementa. Cada uno necesita su propio rato para avanzar en lo que le dejó el profe.",
        },
      ],
    },
    {
      id: "en-pareja",
      heading: "En pareja: aprender sin competir",
      blocks: [
        {
          type: "p",
          text: "Aprender con tu pareja puede ser un plan precioso o una fuente de roces. Algunos consejos para que sea lo primero:",
        },
        {
          type: "ul",
          items: [
            "**Elijan instrumentos distintos** que combinen, como guitarra y canto. Así no hay comparación directa y pueden tocar juntos más pronto.",
            "**Respeten el ritmo del otro:** uno puede practicar a diario y el otro dos veces por semana, y está bien.",
            "**No se den clase en casa:** si el otro no pregunta, no corrijas.",
            "**Tengan un proyecto común:** una canción para su aniversario, para el matrimonio de unos amigos o simplemente para tocar un viernes en la noche.",
            "**Sean el público del otro:** escuchar con cariño lo que tu pareja aprendió también es parte del plan.",
          ],
        },
        {
          type: "p",
          text: "Si uno de los dos ya toca, puede acompañar mientras el otro aprende, pero las clases con un profe siguen siendo importantes para ambos.",
        },
      ],
    },
    {
      id: "primer-proyecto-familiar",
      heading: "Primer proyecto: una canción para la novena",
      blocks: [
        {
          type: "p",
          text: "En Colombia, diciembre es la excusa perfecta para tocar en familia. Un villancico como “Tutaina”, “Mi burrito sabanero” o “Los peces en el río” tiene pocos acordes, todo el mundo lo conoce y admite instrumentos de todos los niveles. Así se arma:",
        },
        {
          type: "ol",
          items: [
            "**Elijan la canción** con el profe, en una tonalidad cómoda para las voces de la casa.",
            "**Repartan papeles según el nivel:** melodía en piano o flauta, acordes en guitarra, pulso con maracas o pandereta y voces para todos.",
            "**Ensayen por partes:** cada uno practica lo suyo durante la semana.",
            "**Junten todo** en el ensayo familiar, primero lento y luego a tempo.",
            "**Preséntenlo en la novena,** sin presión: la idea es disfrutar, no dar un concierto perfecto.",
          ],
        },
        {
          type: "callout",
          title: "Grábenlo",
          text: "Graben la primera versión y la de la novena. Ver la diferencia entre las dos motiva muchísimo, y el video se vuelve un recuerdo familiar que vale la pena guardar.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Desde qué edad pueden los niños tomar clase con sus papás?",
      answer:
        "Depende del formato. Los más pequeños pueden participar en actividades de iniciación musical acompañados por un adulto; para una clase de instrumento compartida, lo ideal es que el niño ya siga instrucciones y se concentre un buen rato. El profe puede orientarte sobre qué formato conviene.",
    },
    {
      question: "¿Un mismo profe puede darle clase a toda la familia?",
      answer:
        "Sí, si enseña los instrumentos que eligieron. Algunos profes manejan más de un instrumento, por ejemplo piano y canto o guitarra y tiple. Si no, cada uno puede tener su profe y se reúnen de vez en cuando para ensamblar.",
    },
    {
      question: "¿Qué pasa si uno de los dos avanza mucho más rápido?",
      answer:
        "Es normal. Se resuelve con arreglos en los que cada uno tiene una parte a su nivel y evitando las comparaciones. Lo importante es que los dos disfruten tocar juntos.",
    },
    {
      question: "¿Se pueden tomar clases virtuales en familia?",
      answer:
        "Sí. Hay que ubicar la cámara para que el profe vea a todos, o turnarse frente a ella. Para tocar en conjunto conviene un buen micrófono que capte el sonido de todo el grupo.",
    },
    {
      question: "¿Cómo involucramos a los abuelos?",
      answer:
        "Pueden unirse al ensayo familiar cantando, con percusión menor o aprendiendo su propio instrumento. Si quieres darles ese empujón, lee cómo [regalar clases de música a papá, mamá o los abuelos](/blog/clases-de-musica-como-regalo-para-papa-mama-o-abuelos).",
    },
  ],
  relatedCourseIds: ["piano", "guitarra-acustica", "canto", "percusion"],
  relatedPostSlugs: [
    "clases-de-musica-individuales-o-grupales",
    "clases-de-musica-como-regalo-para-papa-mama-o-abuelos",
    "que-es-la-iniciacion-musical",
  ],
  cta: "clases",
};
