import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-afinar-la-guitarra",
  title: "¿Cómo afinar la guitarra paso a paso, con y sin afinador?",
  seoTitle: "Cómo afinar la guitarra: con afinador y de oído",
  description:
    "Afina tu guitarra en afinación estándar (Mi La Re Sol Si Mi): con afinador, de oído con el método del quinto traste y sin reventar cuerdas.",
  excerpt:
    "La afinación estándar es Mi, La, Re, Sol, Si, Mi. Te explicamos cómo lograrla con un afinador, de oído con el quinto traste y qué hacer si no se sostiene.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo afinar la guitarra",
    "afinar guitarra con afinador",
    "afinar guitarra de oído",
    "notas de la guitarra afinación estándar",
    "afinador de guitarra online",
    "afinar guitarra sin afinador",
  ],
  intro: [
    "La guitarra se afina, de la sexta cuerda (la más gruesa) a la primera (la más delgada), en **Mi, La, Re, Sol, Si, Mi**; en cifrado americano, E A D G B E. La forma más rápida y confiable es usar un afinador: tocas cada cuerda al aire, giras su clavija y te detienes cuando la aguja queda centrada en la nota correcta.",
    "Si no tienes afinador a mano, puedes afinar la guitarra consigo misma con el método del quinto traste. Aquí tienes los dos procedimientos paso a paso, más los errores que más cuerdas revientan en las primeras semanas.",
  ],
  keyTakeaways: [
    "Afinación estándar, de la 6ª a la 1ª cuerda: Mi, La, Re, Sol, Si, Mi (E A D G B E).",
    "Con afinador: toca una cuerda al aire, deja que suene y gira la clavija poco a poco hasta centrar la nota.",
    "De oído: el quinto traste de cada cuerda da la nota de la siguiente, excepto en la 3ª cuerda, donde se usa el cuarto traste.",
    "Afina siempre subiendo hacia la nota; si te pasas, baja un poco y vuelve a subir.",
    "Afina cada vez que tomes la guitarra y haz dos pasadas: al tensar una cuerda, las demás se mueven un poco.",
  ],
  sections: [
    {
      id: "afinacion-estandar",
      heading: "Las notas de la guitarra en afinación estándar",
      blocks: [
        {
          type: "p",
          text: "Las cuerdas se numeran de la más delgada (1ª) a la más gruesa (6ª). Cuando sostienes la guitarra para tocar, la 6ª queda arriba, más cerca de tu cara, y la 1ª abajo, más cerca del piso. Confundir la numeración es el error número uno al afinar.",
        },
        {
          type: "table",
          caption: "Afinación estándar de la guitarra (referencia La = 440 Hz)",
          head: ["Cuerda", "Nota", "Cifrado", "Frecuencia"],
          rows: [
            ["6ª (la más gruesa)", "Mi grave", "E2", "82,41 Hz"],
            ["5ª", "La", "A2", "110 Hz"],
            ["4ª", "Re", "D3", "146,83 Hz"],
            ["3ª", "Sol", "G3", "196 Hz"],
            ["2ª", "Si", "B3", "246,94 Hz"],
            ["1ª (la más delgada)", "Mi agudo", "E4", "329,63 Hz"],
          ],
        },
        {
          type: "p",
          text: "Las dos cuerdas de Mi suenan la misma nota a dos octavas de distancia. El número junto a la letra (E2, E4) indica la octava; no lo necesitas para afinar, pero te ayuda a entender por qué un afinador puede marcar \"E\" en una cuerda que en realidad está una octava más aguda de lo que debería.",
        },
      ],
    },
    {
      id: "clavijas-sin-reventar-cuerdas",
      heading: "Cómo girar las clavijas sin reventar cuerdas",
      blocks: [
        {
          type: "p",
          text: "Cada cuerda termina en una clavija del clavijero. Antes de girar nada, sigue la cuerda con el dedo desde la boca de la guitarra hasta su clavija: así te aseguras de mover la correcta.",
        },
        {
          type: "ul",
          items: [
            "**No memorices \"a la derecha\" o \"a la izquierda\".** El sentido cambia según el lado del clavijero y el modelo de guitarra. Gira un cuarto de vuelta mientras la cuerda suena y escucha: si el sonido sube, estás tensando; si baja, estás aflojando.",
            "**Gira mientras la cuerda suena.** Así oyes el cambio en tiempo real y evitas dar vueltas de más a ciegas.",
            "**Movimientos pequeños.** Cerca de la nota, basta con un octavo de vuelta o menos, sobre todo en las cuerdas delgadas.",
            "**Sube siempre hacia la nota.** Si te pasaste, afloja un poco por debajo y vuelve a subir. Así el engranaje queda firme y la cuerda no se desliza.",
            "**En guitarra clásica (nylon)**, las cuerdas nuevas se estiran durante varios días y bajan de tono una y otra vez. Es normal: reafina con paciencia. Te lo explicamos en [cómo cambiar las cuerdas de la guitarra](/blog/como-cambiar-las-cuerdas-de-la-guitarra).",
          ],
        },
      ],
    },
    {
      id: "con-afinador",
      heading: "Cómo afinar la guitarra con afinador",
      blocks: [
        {
          type: "p",
          text: "Hay afinadores de pinza, que se ponen en el clavijero y leen la vibración de la madera (ideales en sitios ruidosos); de pedal, para guitarra eléctrica; y aplicaciones o afinadores web que usan el micrófono. Puedes usar gratis nuestro [afinador de guitarra online](/herramientas/afinador/guitarra) desde el celular o el computador; el mismo [afinador](/herramientas/afinador) tiene modos para bajo, ukelele y cuerdas frotadas.",
        },
        {
          type: "ol",
          items: [
            "Busca un lugar silencioso si usas el micrófono. Abre el afinador y permite el acceso al micrófono.",
            "Empieza por la 6ª cuerda. Tócala al aire, con fuerza media, y deja que suene sin apagarla.",
            "Mira qué nota marca. Si aparece una nota por debajo (por ejemplo, Re♯ o E♭ cuando buscas Mi), tensa; si aparece una por encima (Fa, F), afloja.",
            "Gira la clavija despacio hasta que la aguja o el indicador quede centrado y el afinador muestre la nota correcta.",
            "Repite con la 5ª, 4ª, 3ª, 2ª y 1ª cuerda.",
            "Haz una segunda pasada completa: al cambiar la tensión de una cuerda, el mástil se ajusta un poco y las otras se mueven.",
            "Comprueba con un acorde que conozcas, como Mi mayor o Sol. Si suena \"limpio\", estás listo.",
          ],
        },
        {
          type: "p",
          text: "Un detalle importante: si una cuerda está muy floja, el afinador puede marcar una nota lejana (por ejemplo, Do en lugar de Mi). No la afines a esa nota: sube poco a poco, pasando por Do♯, Re y Re♯, hasta llegar a Mi. Y si la cuerda se siente mucho más tensa de lo normal, detente: quizás la estás llevando una octava arriba.",
        },
      ],
    },
    {
      id: "de-oido-quinto-traste",
      heading: "Cómo afinar la guitarra de oído: el método del quinto traste",
      blocks: [
        {
          type: "p",
          text: "Este método afina la guitarra consigo misma. Necesitas que la 6ª cuerda esté bien, ya sea con un piano, con otro instrumento afinado o con el afinador. Si no tienes ninguna referencia, la guitarra quedará afinada entre sus cuerdas, aunque quizá un poco más alta o más baja que la afinación estándar: sirve para practicar a solas, no para tocar con otros.",
        },
        {
          type: "table",
          caption: "Qué traste pisar para afinar cada cuerda",
          head: ["Pisa la cuerda", "En el traste", "Suena", "Iguala con la cuerda al aire"],
          rows: [
            ["6ª (Mi)", "5", "La", "5ª"],
            ["5ª (La)", "5", "Re", "4ª"],
            ["4ª (Re)", "5", "Sol", "3ª"],
            ["3ª (Sol)", "4 (¡ojo, no el 5!)", "Si", "2ª"],
            ["2ª (Si)", "5", "Mi", "1ª"],
          ],
        },
        {
          type: "ol",
          items: [
            "Pisa la 6ª cuerda en el quinto traste, justo detrás de la barrita de metal, sin apretar de más.",
            "Toca esa nota y luego la 5ª cuerda al aire. Deja sonar las dos juntas.",
            "Si oyes una especie de \"guau-guau\" que ondula, las notas no son iguales. Gira la clavija de la 5ª hasta que esa ondulación se haga cada vez más lenta y desaparezca.",
            "Repite el proceso bajando por las cuerdas según la tabla, recordando el cuarto traste en la 3ª cuerda.",
            "Revisa el resultado comparando la 6ª y la 1ª al aire: deben sonar como la misma nota, dos octavas aparte.",
          ],
        },
        {
          type: "callout",
          title: "Tararea antes de girar",
          text: "Si te cuesta saber si la cuerda está alta o baja, canta suavemente la nota de referencia y luego la de la cuerda. La voz te ayuda a sentir la dirección. Es un ejercicio que también entrena el oído.",
        },
      ],
    },
    {
      id: "por-que-se-desafina",
      heading: "Por qué se desafina la guitarra (y qué hacer)",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cuerdas nuevas:** se estiran durante los primeros días, sobre todo las de nylon.",
            "**Cambios de temperatura y humedad:** pasar del frío seco de Bogotá a un paseo en tierra caliente, o dejar la guitarra en un carro al sol, mueve la madera y las cuerdas. Deja que el instrumento se aclimate unos minutos dentro de su estuche antes de afinar.",
            "**Tocar con mucha fuerza o hacer bends:** tensan y aflojan las cuerdas una y otra vez.",
            "**Clavijas gastadas o flojas:** si una cuerda baja siempre, aunque esté bien puesta, pídele a tu profe o a un luthier que revise el clavijero.",
            "**Cejilla (capo) mal puesta:** si la pones torcida o muy apretada, las cuerdas suben de tono. Afina sin cejilla y colócala justo detrás del traste.",
          ],
        },
        {
          type: "p",
          text: "Por todo esto, afinar no es algo que se hace una vez: se hace cada vez que tomas la guitarra, igual que se ajusta el espejo del carro antes de arrancar.",
        },
      ],
    },
    {
      id: "errores-al-afinar",
      heading: "Errores comunes al afinar la guitarra",
      blocks: [
        {
          type: "ul",
          items: [
            "Girar la clavija de otra cuerda y tensar hasta reventarla.",
            "Llevar una cuerda una octava por encima porque el afinador marcaba la letra correcta.",
            "Pisar muy fuerte en el método del quinto traste: la nota se sube y arrastra el error a todas las cuerdas.",
            "Afinar con ruido de fondo usando un afinador de micrófono.",
            "Quedarse con la primera pasada sin revisar el conjunto.",
            "Afinar la 3ª cuerda con el quinto traste en vez del cuarto.",
          ],
        },
        {
          type: "p",
          text: "Si estás empezando, en tus primeras [clases de guitarra acústica](/clases/guitarra-acustica) o de [guitarra eléctrica](/clases/guitarra-electrica) tu profe revisará contigo la afinación hasta que la hagas por tu cuenta en menos de un minuto. Con la guitarra lista, el siguiente paso son los [acordes básicos de guitarra](/blog/acordes-basicos-de-guitarra-para-principiantes).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿A cuántos hercios se afina la guitarra?",
      answer:
        "La referencia estándar es La = 440 Hz. La 5ª cuerda al aire es un La dos octavas más grave, a 110 Hz. La mayoría de afinadores vienen configurados en 440 Hz; si el tuyo permite cambiarlo, déjalo ahí salvo que tu grupo acuerde otra referencia.",
    },
    {
      question: "¿La guitarra eléctrica y la clásica se afinan igual?",
      answer:
        "Sí. Las dos usan Mi, La, Re, Sol, Si, Mi. Cambia el tipo de cuerda: el nylon se estira más y tarda más en estabilizarse, y en la eléctrica puedes conectar la guitarra a un afinador de pedal o usar uno de pinza.",
    },
    {
      question: "¿Qué es la afinación en Drop D?",
      answer:
        "Es una afinación alternativa en la que bajas la 6ª cuerda un tono, de Mi a Re; las demás quedan igual. Se usa en rock y en algunas piezas de guitarra clásica. Para volver a la estándar, sube de nuevo esa cuerda a Mi.",
    },
    {
      question: "¿Se puede afinar la guitarra con armónicos?",
      answer:
        "Sí. Se compara el armónico del traste 5 de una cuerda con el del traste 7 de la siguiente (salvo entre la 3ª y la 2ª). Es un método útil, pero produce quintas puras que difieren un poquito de la afinación temperada, así que conviene confirmar con afinador.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "guitarra-electrica"],
  relatedPostSlugs: [
    "acordes-basicos-de-guitarra-para-principiantes",
    "como-cambiar-las-cuerdas-de-la-guitarra",
    "como-leer-tablaturas-de-guitarra-y-bajo",
  ],
  cta: "clases",
};
