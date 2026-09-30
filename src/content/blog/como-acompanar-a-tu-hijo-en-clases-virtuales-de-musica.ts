import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-acompanar-a-tu-hijo-en-clases-virtuales-de-musica",
  title: "Cómo acompañar a tu hijo en clases virtuales de música",
  description:
    "Qué hacer antes, durante y después de la clase virtual de música de tu hijo: preparar el espacio, estar cerca sin intervenir y reforzar lo aprendido.",
  excerpt:
    "En una clase virtual tu papel no es dar la clase, sino preparar el terreno. Qué hacer antes, durante y después para que tu hijo aproveche cada sesión.",
  category: "ninos",
  publishedAt: "2026-09-30",
  keywords: [
    "clases virtuales de música para niños",
    "cómo ayudar a mi hijo en clases de música online",
    "clases de piano virtuales para niños",
    "papel de los padres en las clases virtuales",
    "clases de música online para niños en Colombia",
  ],
  intro: [
    "En una clase virtual de música, tu papel no es dar la clase ni corregir por encima del profe, sino preparar el terreno: que el instrumento esté afinado, que la cámara muestre lo que el profe necesita ver, que no haya interrupciones y que lo aprendido se practique durante la semana. Cuanto más pequeño es tu hijo, más cerca tienes que estar.",
    "Esta guía está organizada en tres momentos, antes, durante y después de la clase, con ajustes según la edad y el instrumento.",
  ],
  keyTakeaways: [
    "Diez minutos de preparación antes de la clase ahorran muchos contratiempos: afinar, cargar, conectar y silenciar.",
    "La cámara debe mostrar lo que el profe necesita corregir: manos, postura o el cuerpo completo, según el instrumento.",
    "Durante la clase, cerca pero sin intervenir: el profe dirige y tú ayudas cuando te lo pide.",
    "Entre más pequeño el niño, más presente el adulto; con los mayores, basta con estar disponible.",
    "Lo que pasa después, con la tarea anotada y la práctica en casa, define cuánto rinde la clase.",
  ],
  sections: [
    {
      id: "antes-de-la-clase",
      heading: "Antes de la clase: diez minutos que cambian todo",
      blocks: [
        {
          type: "p",
          text: "Conectarse justo a la hora, con el instrumento desafinado y el computador sin batería, se come buena parte de la clase. Una rutina corta antes de cada sesión:",
        },
        {
          type: "ol",
          items: [
            "**Afinar el instrumento.** En violín o guitarra, un niño pequeño no puede afinar solo; usa el [afinador en línea](/herramientas/afinador) unos minutos antes.",
            "**Cargar el dispositivo** y, si puedes, conectarlo cerca del router o por cable.",
            "**Tener el material a mano:** partituras, cuaderno de tareas, lápiz, borrador, atril y, si aplica, baquetas o colofonia.",
            "**Resolver lo básico antes:** baño, agua y algo de comer, para no interrumpir.",
            "**Avisar en la casa:** nada de aspiradora, televisor o licuadora durante ese rato.",
            "**Silenciar notificaciones** y conectarse cinco minutos antes para probar audio y cámara.",
          ],
        },
      ],
    },
    {
      id: "espacio-y-camara",
      heading: "El espacio y la cámara, en versión rápida",
      blocks: [
        {
          type: "p",
          text: "El profe solo puede corregir lo que ve. Antes de la primera clase, prueben juntos dónde poner el dispositivo:",
        },
        {
          type: "table",
          caption: "Dónde ubicar la cámara según el instrumento",
          head: ["Instrumento", "Ubicación de la cámara", "Qué debe ver el profe"],
          rows: [
            ["Piano", "A un lado y un poco por encima del teclado.", "Las dos manos, la postura y los pies en el pedal."],
            ["Violín", "De frente y ligeramente de lado, a una distancia que muestre todo el instrumento.", "El arco completo, la mano izquierda y la posición del violín."],
            ["Guitarra", "De frente, a la altura del pecho.", "Las dos manos y la postura sentado."],
            ["Canto", "De frente, a la altura de los ojos.", "La cara, el cuello, los hombros y la respiración."],
            ["[Iniciación musical](/clases/iniciacion-musical)", "Más lejos, en un plano abierto.","El cuerpo completo, porque hay movimiento y baile."],
          ],
        },
        {
          type: "p",
          text: "Un detalle técnico que marca la diferencia: en la videollamada, activa la opción de sonido original o desactiva la supresión de ruido, que suele recortar el sonido del instrumento. Para ir más a fondo, revisa [cómo preparar tu espacio para clases virtuales](/blog/como-preparar-tu-espacio-para-clases-virtuales-de-musica) y [qué equipo necesitas](/blog/equipo-para-clases-virtuales-de-musica-camara-microfono).",
        },
      ],
    },
    {
      id: "durante-la-clase",
      heading: "Durante la clase: cerca, pero sin intervenir",
      blocks: [
        { type: "p", text: "Qué tan cerca debes estar depende de la edad:" },
        {
          type: "table",
          caption: "Presencia del adulto según la edad",
          head: ["Edad", "Dónde estar", "Qué hacer"],
          rows: [
            ["3 a 5 años", "Al lado del niño, dentro del plano o justo fuera.", "Participar en los juegos cuando el profe lo pida y ayudar con el instrumento y la cámara."],
            ["6 a 8 años", "En el mismo cuarto o muy cerca.", "Observar, anotar la tarea y ayudar solo si el profe lo pide."],
            ["9 a 12 años", "En casa y disponible.", "Entrar al inicio y al final; dejar que el niño maneje la clase."],
            ["Adolescentes", "Donde ellos prefieran.", "Respetar su espacio y hablar con el profe de vez en cuando."],
          ],
        },
        { type: "p", text: "Lo que conviene evitar, aunque sea con buena intención:" },
        {
          type: "ul",
          items: [
            "Corregir al niño mientras el profe está hablando.",
            "Responder por él cuando el profe le hace una pregunta.",
            "Reírse de los errores o comentarlos con otra persona en el cuarto.",
            "Hacer otras llamadas o ver televisión en el mismo espacio.",
            "Repetir todo lo que dice el profe: el niño necesita construir esa relación directamente.",
          ],
        },
      ],
    },
    {
      id: "cuando-si-intervenir",
      heading: "Cuándo sí conviene intervenir",
      blocks: [
        {
          type: "ul",
          items: [
            "Cuando hay un problema técnico: se cae la conexión, no se oye o la cámara se movió.",
            "Cuando el profe te pide ayuda: acomodar el atril, afinar una cuerda, sostener la partitura.",
            "Cuando el niño está muy frustrado o cansado: una pausa corta para tomar agua puede salvar la clase. Si pasa seguido, háblalo después con el profe.",
            "Cuando el instrumento corre peligro: un violín a punto de caerse no espera.",
            "Con los más pequeños, para ayudar en los juegos de movimiento o a encontrar una tecla.",
          ],
        },
        {
          type: "p",
          text: "Una buena práctica es acordar con el profe, desde la primera clase, cuál será tu rol. Cada profe trabaja distinto: algunos prefieren que estés muy presente y otros piden más espacio para que el niño gane autonomía.",
        },
      ],
    },
    {
      id: "despues-de-la-clase",
      heading: "Después de la clase: la semana es la que cuenta",
      blocks: [
        {
          type: "p",
          text: "La clase dura un rato; lo que pasa los otros seis días define el avance.",
        },
        {
          type: "ul",
          items: [
            "**Pídele que te muestre lo que aprendió** justo después de la clase o esa noche: enseñar es la mejor forma de repasar.",
            "**Anota la tarea** en el cuaderno o pide al profe que la envíe por mensaje, con el objetivo de cada ejercicio.",
            "**Agenda la práctica** de la semana: días y hora fijos, sesiones cortas.",
            "**Graba un video corto** de la práctica a mitad de semana, si el profe acepta revisarlo.",
            "**Guarda grabaciones de la clase** solo si el profe está de acuerdo; siempre pregunta antes de grabar.",
          ],
        },
        {
          type: "p",
          text: "Para organizar la práctica diaria, revisa [cómo practicar música en casa](/blog/como-practicar-musica-en-casa).",
        },
      ],
    },
    {
      id: "acuerdos-con-el-profe",
      heading: "Acuerdos claros con el profe",
      blocks: [
        {
          type: "p",
          text: "Una buena comunicación con el profe también es parte de acompañar. Conviene acordar desde el principio:",
        },
        {
          type: "ul",
          items: [
            "Por qué canal se comunican y en qué horarios.",
            "Qué hacer si se cae la conexión: reconectar, pasar a una llamada o reponer los minutos.",
            "Con cuánta anticipación se avisa una cancelación.",
            "Cuál es tu papel durante la clase.",
            "Cada cuánto conversan unos minutos sobre los avances.",
          ],
        },
        {
          type: "p",
          text: "Cuéntale también lo que pasa en casa: una semana de exámenes en el colegio, una práctica que no funcionó o una canción que tu hijo sueña con tocar. En A medio tono el seguimiento es semanal, así que esa información llega a tiempo para ajustar la siguiente clase. Si todavía estás decidiendo el formato, en [clases de música online](/clases-de-musica-online) te contamos cómo funcionan.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Desde qué edad puede un niño tomar clases de música virtuales?",
      answer:
        "Desde pequeño, siempre que un adulto acompañe de cerca. Entre los 3 y los 5 años, la clase virtual funciona mejor con el adulto al lado; hacia los 9 años, muchos niños ya manejan la clase con bastante autonomía.",
    },
    {
      question: "¿Qué instrumentos funcionan bien en clases virtuales para niños?",
      answer:
        "Piano, guitarra, canto, violín e iniciación musical se adaptan bien si la cámara y el audio están bien ubicados. En instrumentos muy fuertes, como la batería, conviene probar el audio con el profe antes de la primera clase.",
    },
    {
      question: "¿Es mejor quedarme en la clase o dejar solo a mi hijo?",
      answer:
        "Depende de la edad y del niño. Con los pequeños, tu presencia es necesaria; con los mayores, basta con estar disponible. Lo importante es acordarlo con el profe y no intervenir en la enseñanza.",
    },
    {
      question: "¿Qué hago si mi hijo se distrae mucho frente a la pantalla?",
      answer:
        "Retira otros dispositivos del espacio, cierra pestañas y ventanas, y ubica la pantalla de modo que el niño vea bien al profe. Si la distracción sigue, háblalo con el profe: clases más cortas o con más actividades de movimiento pueden ayudar.",
    },
  ],
  relatedCourseIds: ["iniciacion-musical", "piano", "violin"],
  relatedPostSlugs: [
    "como-preparar-tu-espacio-para-clases-virtuales-de-musica",
    "clases-de-musica-a-domicilio-o-virtuales",
    "por-que-tomar-clases-de-musica-online",
  ],
  cta: "clases",
};
