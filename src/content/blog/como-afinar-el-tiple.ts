import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-afinar-el-tiple",
  title: "¿Cómo afinar el tiple? Paso a paso para sus 12 cuerdas",
  description:
    "Cómo afinar el tiple paso a paso: notas de sus cuatro órdenes (Re, Sol, Si, Mi), cuerdas en octava, afinación con afinador y de oído, y errores comunes.",
  excerpt:
    "Doce cuerdas, cuatro órdenes y algunas en octava: así se afina el tiple con afinador y de oído, sin enredarte con las clavijas ni reventar una cuerda.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo afinar el tiple",
    "afinación del tiple colombiano",
    "notas del tiple",
    "afinar tiple con afinador",
    "temple del tiple",
  ],
  intro: [
    "El tiple se afina con los mismos nombres de nota que las cuatro cuerdas más agudas de la guitarra: Re, Sol, Si y Mi (D, G, B, E), del cuarto orden al primero. Cada orden tiene tres cuerdas. En el primero (Mi) las tres suenan al unísono y, en la configuración más común, en los otros tres órdenes la cuerda del centro, más gruesa, suena una octava por debajo de las dos laterales.",
    "La forma más segura de afinarlo es fijar con un afinador una cuerda de referencia por orden y luego igualar las demás de oído. Como los encordados varían, confirma con tu profe qué cuerdas van en octava en tu tiple antes de subir la tensión.",
  ],
  keyTakeaways: [
    "Los cuatro órdenes del tiple se afinan en Re, Sol, Si y Mi, como las cuerdas 4.ª a 1.ª de la guitarra.",
    "El primer orden (Mi) lleva sus tres cuerdas al unísono; en los demás, lo habitual es que la central suene una octava más grave.",
    "Un afinador muestra el nombre de la nota, pero no siempre la octava: identifica cada cuerda por su grosor.",
    "Afina una cuerda a la vez, siempre subiendo hacia la nota, y da al menos dos vueltas completas.",
    "Nunca subas una cuerda gruesa hasta la altura de las delgadas: la tensión puede reventarla o forzar el puente.",
  ],
  sections: [
    {
      id: "afinacion-del-tiple",
      heading: "La afinación del tiple, orden por orden",
      blocks: [
        {
          type: "p",
          text: "Las 12 cuerdas metálicas del tiple se agrupan en cuatro órdenes de tres. Se cuentan igual que en la guitarra: el primer orden es el más agudo y queda más cerca del piso cuando tocas. Muchos tiplistas llaman “temple” a la afinación.",
        },
        {
          type: "table",
          caption: "Afinación más común del tiple colombiano",
          head: ["Orden", "Nota", "Cuerda de guitarra con el mismo nombre", "Cómo suenan sus tres cuerdas"],
          rows: [
            ["4.º (el más grave)", "Re (D)", "4.ª cuerda", "Dos laterales iguales; la central, una octava más grave"],
            ["3.º", "Sol (G)", "3.ª cuerda", "Dos laterales iguales; la central, una octava más grave"],
            ["2.º", "Si (B)", "2.ª cuerda", "Dos laterales iguales; la central, una octava más grave"],
            ["1.º (el más agudo)", "Mi (E)", "1.ª cuerda", "Las tres al unísono"],
          ],
        },
        {
          type: "p",
          text: "Algunos tiples, sobre todo antiguos o con encordados especiales, cambian qué cuerda va en octava o su posición dentro del orden. Una pista útil es el grosor: la cuerda entorchada, con alambre enrollado, suele ser la que va una octava abajo. Si no tienes certeza de cómo viene el tuyo, pregúntale a tu profe antes de tensar.",
        },
      ],
    },
    {
      id: "que-necesitas",
      heading: "Qué necesitas antes de empezar",
      blocks: [
        {
          type: "ul",
          items: [
            "**Un afinador cromático**, que reconozca cualquier nota. Puede ser el [afinador online](/herramientas/afinador) de la web, uno de pinza o una aplicación.",
            "**Un lugar silencioso**, sobre todo si usas el micrófono del celular o del computador.",
            "**Saber qué clavija mueve cada cuerda.** Son 12 clavijas; sigue cada cuerda con el dedo desde el puente hasta su clavija antes de girar nada.",
            "**Opcional: una guitarra afinada**, que te da las notas de referencia Re, Sol, Si y Mi en sus cuatro primeras cuerdas.",
          ],
        },
        {
          type: "p",
          text: "Ten en cuenta que muchos afinadores muestran solo el nombre de la nota. Para ellos, la cuerda central del orden de Si también es “Si”, aunque suene una octava abajo. Por eso el afinador te dice si la nota está centrada, pero eres tú quien sabe qué cuerda estás afinando.",
        },
      ],
    },
    {
      id: "paso-a-paso-con-afinador",
      heading: "Paso a paso con afinador",
      blocks: [
        {
          type: "ol",
          items: [
            "Afloja la mano izquierda y apoya suavemente los dedos sobre las cuerdas que no vas a afinar, para que no vibren. Los afinadores de pinza captan la vibración de todo el instrumento.",
            "Empieza por el primer orden (Mi). Pulsa una sola cuerda y gira su clavija hasta que el afinador marque Mi centrado.",
            "Afina las otras dos cuerdas del primer orden, una por una, hasta que las tres coincidan.",
            "Pasa al segundo orden (Si). Afina primero una cuerda lateral, luego la otra y por último la central, que debe marcar Si una octava más abajo.",
            "Repite el mismo proceso en el tercer orden (Sol) y en el cuarto (Re).",
            "Da una segunda vuelta completa. Doce cuerdas metálicas suman mucha tensión: al afinar un orden, los demás se mueven un poco.",
            "Toca un acorde que conozcas y escucha. Si algo “chirría”, busca la cuerda que desentona tocando cada orden por separado.",
          ],
        },
        {
          type: "p",
          text: "Un hábito que ahorra tiempo: llega a la nota siempre desde abajo. Si te pasaste, baja un poco por debajo de la nota y vuelve a subir. Así la cuerda se asienta mejor y se mantiene afinada por más tiempo.",
        },
      ],
    },
    {
      id: "afinar-de-oido",
      heading: "Cómo afinar de oído",
      blocks: [
        { type: "h3", text: "Dentro de cada orden: los batimientos" },
        {
          type: "p",
          text: "Cuando dos cuerdas suenan casi igual, pero no del todo, se oye una ondulación, un “gua-gua-gua” que se acelera cuanto más lejos están. A medida que las igualas, la ondulación se hace más lenta hasta desaparecer. Con la octava pasa algo parecido: bien afinada, la cuerda grave y las agudas se funden en un solo sonido más rico. Afina cada orden así, tomando como referencia la cuerda que ya fijaste con el afinador.",
        },
        { type: "h3", text: "Entre órdenes: los trastes de referencia" },
        {
          type: "p",
          text: "Como el tiple comparte los intervalos de las cuatro primeras cuerdas de la guitarra, puedes comprobar un orden con el siguiente:",
        },
        {
          type: "table",
          caption: "Comprobación entre órdenes",
          head: ["Pisa", "En el traste", "Debe coincidir con"],
          rows: [
            ["4.º orden (Re)", "5", "3.er orden al aire (Sol)"],
            ["3.er orden (Sol)", "4", "2.º orden al aire (Si)"],
            ["2.º orden (Si)", "5", "1.er orden al aire (Mi)"],
          ],
        },
        {
          type: "p",
          text: "Por las cuerdas en octava, al comparar una cuerda delgada con una gruesa puede que las notas coincidan en nombre pero no en altura. Lo importante es que suenen como la misma nota y sin ondulación. Si prefieres partir de una guitarra, afínala primero con el [afinador de guitarra](/herramientas/afinador/guitarra) y usa sus cuerdas 4.ª a 1.ª como referencia.",
        },
      ],
    },
    {
      id: "errores-comunes-tiple",
      heading: "Errores comunes (y cómo no reventar una cuerda)",
      blocks: [
        {
          type: "table",
          caption: "Qué evitar al afinar el tiple",
          head: ["Error", "Qué pasa", "Solución"],
          rows: [
            ["Subir la cuerda central a la altura de las laterales", "Tensión excesiva: puede reventarse o forzar el puente", "Recuerda que suele ir una octava abajo; si la sientes durísima, para"],
            ["Girar la clavija equivocada", "Desafinas otra cuerda o la tensas de más", "Sigue la cuerda hasta su clavija antes de girar"],
            ["Afinar con varias cuerdas sonando", "El afinador se confunde y salta", "Apaga con la mano las que no estás afinando"],
            ["Hacer una sola vuelta", "El tiple se desafina en minutos", "Da dos o tres vueltas completas"],
            ["Afinar cuerdas nuevas de afán", "No se sostienen afinadas", "Afínalas varias veces durante los primeros días"],
            ["Afinar recién llegado de otro clima", "Se desafina mientras tocas", "Deja que el tiple se aclimate unos minutos dentro del estuche"],
          ],
        },
        {
          type: "callout",
          title: "Si una cuerda se siente durísima, detente",
          text: "Es la señal más clara de que la estás llevando a una octava que no le corresponde. Suéltala un poco y confirma con tu profe antes de seguir.",
        },
      ],
    },
    {
      id: "cada-cuanto-afinar",
      heading: "Cada cuánto afinar y cuándo sospechar de las cuerdas",
      blocks: [
        {
          type: "p",
          text: "Afina cada vez que vayas a tocar y antes de cada clase, sea presencial o virtual. Los cambios de temperatura y humedad, frecuentes al pasar del frío de Bogotá a la tierra caliente, mueven la afinación de un día para otro.",
        },
        {
          type: "p",
          text: "Si el tiple ya no se sostiene afinado, las cuerdas suenan opacas, se ven oxidadas o las octavas nunca terminan de cuadrar, probablemente toca cambiarlas. Y si el afinador marca bien las cuerdas al aire pero los acordes suenan desafinados en los trastes altos, puede ser un tema de calibración que debe revisar un luthier. Te contamos más en la guía para [cuidar el tiple y la bandola](/blog/como-cuidar-un-tiple-y-una-bandola). En las clases de [tiple](/clases/tiple), afinar con tu profe las primeras veces es la forma más rápida de que el oído aprenda a reconocer un orden bien afinado.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Puedo afinar el tiple con el modo de guitarra de un afinador?",
      answer:
        "Es mejor usar el modo cromático. Los modos de guitarra esperan las seis cuerdas de la guitarra en sus octavas, mientras que el cromático reconoce cualquier nota. Así ves con claridad si cada cuerda está en Re, Sol, Si o Mi.",
    },
    {
      question: "¿Por qué mi tiple se desafina tan rápido?",
      answer:
        "Las causas más comunes son cuerdas nuevas que todavía se están estirando, cambios de clima, clavijas flojas o haber llegado a la nota desde arriba. Si nada de eso explica el problema, llévalo a revisión.",
    },
    {
      question: "¿Cuánto se demora afinar un tiple?",
      answer:
        "Al principio, entre 10 y 15 minutos no es raro, porque son 12 cuerdas y hay que ubicar cada clavija. Con práctica, y si el tiple se mantiene bien, bastan unos pocos minutos antes de tocar.",
    },
    {
      question: "¿El tiple y la bandola se afinan igual?",
      answer:
        "No. La bandola andina tiene otro número de órdenes y su propia afinación. Si tocas ambos instrumentos, tu profe te explicará el temple de cada uno.",
    },
  ],
  relatedCourseIds: ["tiple"],
  relatedPostSlugs: [
    "como-afinar-la-guitarra",
    "como-cuidar-un-tiple-y-una-bandola",
    "guitarra-o-tiple",
  ],
  cta: "clases",
};
