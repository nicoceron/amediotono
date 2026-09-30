import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "microfono-para-cantar-en-casa-como-elegir",
  title: "¿Qué micrófono comprar para cantar en casa?",
  description:
    "Micrófono para cantar en casa: dinámico o condensador, USB o con interfaz, qué audífonos usar y cómo prepararlo para grabarte y para clases virtuales.",
  excerpt:
    "Para cantar en casa, un micrófono dinámico con interfaz y audífonos cerrados suele ser lo más práctico. Te explicamos cuándo conviene un condensador.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "qué micrófono comprar para cantar",
    "micrófono para cantar en casa",
    "micrófono dinámico o condensador para voz",
    "interfaz de audio para cantar",
    "micrófono USB para grabar voz",
    "micrófono para clases de canto virtuales",
  ],
  intro: [
    "Para cantar en casa, en un cuarto sin tratamiento acústico, la opción más práctica suele ser un **micrófono dinámico cardioide** conectado a una interfaz de audio, con audífonos cerrados. Capta tu voz y deja por fuera buena parte del ruido de la casa y de la calle. Un micrófono de condensador da más detalle, pero también registra el eco del cuarto y cada ruido de fondo, así que brilla en un espacio silencioso y algo tratado.",
    "Antes de comprar, define para qué lo quieres: practicar, grabarte, tomar clases virtuales o todo a la vez. No es lo mismo, y para algunas de esas cosas ni siquiera necesitas micrófono.",
  ],
  keyTakeaways: [
    "Para practicar técnica no necesitas micrófono: la voz se trabaja en acústico.",
    "Para grabarte y tomar clases virtuales, un micrófono dinámico cardioide es el más tolerante con cuartos ruidosos.",
    "El condensador necesita alimentación phantom de 48 voltios, más cuidado y un cuarto silencioso.",
    "Una interfaz con monitoreo directo te deja escucharte sin retraso.",
    "Canta con audífonos cerrados y de cable: los Bluetooth tienen retraso y no sirven para cantar sobre una pista.",
  ],
  sections: [
    {
      id: "para-que-lo-necesitas",
      heading: "Primero: ¿para qué lo necesitas?",
      blocks: [
        {
          type: "table",
          caption: "Qué necesitas según tu objetivo",
          head: ["Objetivo", "¿Necesitas micrófono?", "Lo mínimo que funciona"],
          rows: [
            ["Practicar técnica y repertorio", "No", "Tu voz, un espejo y el celular para grabarte de vez en cuando"],
            ["Grabarte para escuchar tu progreso", "No al principio", "La grabadora del celular a un metro de distancia, en un cuarto con poco eco"],
            ["Clases virtuales de canto", "Ayuda bastante", "Un micrófono dinámico o USB y audífonos de cable"],
            ["Grabar covers o maquetas", "Sí", "Micrófono, interfaz de audio, audífonos cerrados y un programa de grabación"],
            ["Cantar con pista en reuniones o eventos", "Sí", "Un micrófono dinámico de mano y un parlante o amplificador"],
          ],
        },
        {
          type: "p",
          text: "Un micrófono no mejora la afinación ni la respiración: amplifica lo que ya haces. Por eso la técnica va primero. Los [ejercicios de calentamiento vocal](/blog/ejercicios-de-calentamiento-vocal) y las clases son la base; el micrófono es la herramienta para escucharte mejor y mostrarle tu voz a tu profe con claridad.",
        },
      ],
    },
    {
      id: "dinamico-o-condensador",
      heading: "Dinámico o condensador",
      blocks: [
        {
          type: "table",
          caption: "Micrófono dinámico y de condensador para voz",
          head: ["Aspecto", "Dinámico", "Condensador"],
          rows: [
            ["Sensibilidad", "Menor: capta sobre todo lo que tiene cerca", "Alta: capta detalles y también el cuarto"],
            ["Ruido de fondo", "Deja por fuera buena parte", "Registra buses, perros, la nevera y el eco"],
            ["Alimentación", "No necesita", "Phantom de 48 V desde la interfaz, o integrada si es USB"],
            ["Resistencia", "Muy resistente a golpes y a la humedad", "Más delicado"],
            ["Distancia de uso", "Cerca de la boca, a pocos centímetros", "Un poco más lejos, con filtro antipop"],
            ["Ideal para", "Cuartos sin tratar, clases virtuales, cantar en vivo", "Grabar en un espacio silencioso y tratado"],
          ],
        },
        {
          type: "p",
          text: "En ambos casos, busca un patrón **cardioide** o supercardioide: capta sobre todo lo que está al frente y rechaza lo que viene de atrás. Para voz, los condensadores más usados son los de diafragma grande.",
        },
        {
          type: "p",
          text: "Ten en cuenta el efecto de proximidad: entre más te acercas a un micrófono direccional, más graves captura. Úsalo a tu favor si tu voz suena delgada y aléjate un poco si suena retumbante.",
        },
      ],
    },
    {
      id: "usb-o-interfaz",
      heading: "Micrófono USB o micrófono con interfaz",
      blocks: [
        {
          type: "p",
          text: "Un micrófono USB se conecta directo al computador y trae todo incluido: es la vía más sencilla para clases virtuales y grabaciones básicas. Un micrófono con conector XLR necesita una interfaz de audio, una cajita que convierte la señal y se conecta al computador. Es un paso más, pero te permite cambiar de micrófono más adelante sin cambiar todo, y el mismo micrófono te sirve para conectarlo a un parlante o a una tarima.",
        },
        { type: "h3", text: "Qué revisar en una interfaz de audio" },
        {
          type: "ul",
          items: [
            "Al menos una entrada XLR con preamplificador y perilla de ganancia.",
            "Alimentación phantom de 48 V, por si algún día usas un condensador.",
            "Salida de audífonos con su propio control de volumen.",
            "Monitoreo directo, para escucharte sin pasar por el computador.",
            "Compatibilidad con tu equipo: computador, tableta o celular; este último suele necesitar un adaptador.",
          ],
        },
        {
          type: "p",
          text: "El retraso importa más de lo que parece: escuchar tu propia voz con una fracción de segundo de demora desorienta y te hace desafinar. El monitoreo directo de la interfaz lo resuelve.",
        },
      ],
    },
    {
      id: "audifonos",
      heading: "Audífonos: cerrados y de cable",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cerrados**: evitan que la pista se filtre al micrófono mientras grabas. Los abiertos son cómodos para escuchar, pero su sonido se cuela en la grabación.",
            "**De cable**: los Bluetooth tienen retraso; sirven para oír música, no para cantar sobre una pista ni para monitorearte.",
            "**Cómodos**: que rodeen la oreja y no aprieten, porque los vas a usar un buen rato.",
            "**Con un oído libre**: muchos cantantes se retiran un lado del audífono para escuchar su voz natural en el cuarto y afinar mejor. Pruébalo.",
          ],
        },
        {
          type: "p",
          text: "Mantén el volumen moderado. Si subes los audífonos para escucharte por encima de la pista, tiendes a cantar más fuerte de lo necesario y a cansar la voz; en [cómo cuidar la voz](/blog/como-cuidar-la-voz-guia-para-cantantes) hablamos de ese tipo de hábitos.",
        },
      ],
    },
    {
      id: "como-usarlo-en-casa",
      heading: "Cómo sacarle provecho en casa",
      blocks: [
        {
          type: "ol",
          items: [
            "**Pon el micrófono en un pie**, no en la mano, cuando grabes: evitas ruidos de manipulación y mantienes la distancia constante.",
            "**Usa un filtro antipop** con el condensador para suavizar las p y las b.",
            "**Ajusta la ganancia** cantando la parte más fuerte de tu canción: la luz de la interfaz no debe ponerse roja. Es mejor grabar un poco bajo que saturado.",
            "**Elige el lugar del cuarto**: frente a un clóset con ropa, cortinas gruesas o la cama hay menos eco. Evita cantarle a una pared desnuda o a una esquina vacía.",
            "**Cierra ventanas** y apaga ventiladores; en una ciudad como Bogotá, el ruido de la calle entra con facilidad.",
            "**Escucha con audífonos**, no por los parlantes del computador, para notar los detalles de tu grabación.",
          ],
        },
      ],
    },
    {
      id: "clases-virtuales-de-canto",
      heading: "Para clases virtuales de canto",
      blocks: [
        {
          type: "p",
          text: "En una clase virtual, lo que más cambia la experiencia no es un micrófono sofisticado sino la configuración de la aplicación. Las plataformas de videollamada están hechas para hablar y tienden a recortar las notas largas y los cambios de volumen. Activa el modo de sonido original o de música y desactiva la supresión de ruido; en [equipo para clases virtuales de música](/blog/equipo-para-clases-virtuales-de-musica-camara-microfono) te explicamos cómo.",
        },
        {
          type: "p",
          text: "Por el retraso de internet, tu profe y tú no pueden cantar o tocar exactamente al mismo tiempo. Lo habitual es que el profe te comparta la pista o el acompañamiento y tú cantes sobre ella desde tu lado, con audífonos puestos para que la pista no vuelva por tu micrófono. Si estás pensando en empezar, en las [clases de canto](/clases/canto) puedes elegir entre virtual y a domicilio.",
        },
        { type: "h3", text: "Errores comunes al comprar" },
        {
          type: "ul",
          items: [
            "Comprar un condensador para un cuarto ruidoso y con eco.",
            "Grabar con un micrófono de karaoke con parlante integrado: sirve para divertirse, no para escucharte con detalle.",
            "Cantar con audífonos Bluetooth.",
            "Olvidar el pie de micrófono y el cable: sin ellos, el equipo no sirve.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Puedo tomar clases de canto virtuales sin micrófono externo?",
      answer:
        "Sí. Muchos estudiantes empiezan con el micrófono del computador o del celular y audífonos. Configurar bien la aplicación suele mejorar más el sonido que cambiar de micrófono; el externo se vuelve útil cuando quieres más claridad o grabarte.",
    },
    {
      question: "¿Qué es mejor para empezar, un micrófono USB o uno con interfaz?",
      answer:
        "Si solo quieres clases virtuales y grabaciones sencillas, el USB es práctico. Si piensas grabar en serio, cantar en vivo o cambiar de micrófono más adelante, un micrófono XLR con interfaz crece contigo.",
    },
    {
      question: "¿A qué distancia del micrófono debo cantar?",
      answer:
        "Con un dinámico, a pocos centímetros; con un condensador, un poco más lejos, más o menos a una cuarta, con el filtro antipop en medio. Ajusta escuchando: si suena retumbante, aléjate; si suena lejano y con eco, acércate.",
    },
    {
      question: "¿Un buen micrófono me hace cantar mejor?",
      answer:
        "Te hace sonar más claro, no más afinado. La afinación, la respiración y el timbre se trabajan con técnica; el micrófono solo capta lo que ya haces.",
    },
  ],
  relatedCourseIds: ["canto"],
  relatedPostSlugs: [
    "equipo-para-clases-virtuales-de-musica-camara-microfono",
    "ejercicios-de-calentamiento-vocal",
    "como-cuidar-la-voz-guia-para-cantantes",
  ],
  cta: "clases",
};
