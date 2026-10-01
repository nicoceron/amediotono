import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-afinar-el-bajo-electrico",
  title: "¿Cómo afinar el bajo eléctrico? Mi, La, Re y Sol",
  description:
    "Cómo afinar el bajo eléctrico en Mi, La, Re y Sol: con afinador, de oído con el traste 5 o con armónicos, y cómo ajustar la octavación en el puente.",
  excerpt:
    "Mi, La, Re y Sol: las cuatro cuerdas graves de la guitarra, una octava más abajo. Así se afina el bajo con afinador, de oído y con armónicos, y se revisa la octavación.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo afinar el bajo eléctrico",
    "notas de las cuerdas del bajo",
    "afinador de bajo online",
    "afinar bajo con armónicos",
    "afinar bajo de oído",
    "cómo octavar un bajo",
  ],
  intro: [
    "Un bajo eléctrico de cuatro cuerdas se afina, de la más gruesa a la más delgada, en **Mi, La, Re y Sol** (E1, A1, D2 y G2): las mismas notas de las cuatro cuerdas graves de la guitarra, una octava más abajo. Lo más rápido es usar un afinador y subir cada cuerda hasta su nota desde abajo. Sin afinador, puedes afinar las cuerdas entre sí con el traste 5 o con armónicos, a partir de una sola nota de referencia.",
    "Hay además un ajuste que muchos bajistas pasan por alto: la afinación de octavas. Si el bajo suena afinado al aire pero desafinado en los trastes altos, el problema no está en las clavijas, sino en el puente.",
  ],
  keyTakeaways: [
    "Afinación estándar del bajo de cuatro cuerdas: Mi (E1), La (A1), Re (D2) y Sol (G2), separadas por cuartas.",
    "Afina siempre subiendo hacia la nota: si te pasas, baja un poco y vuelve a subir.",
    "El traste 5 de cada cuerda da la nota de la cuerda al aire siguiente; los armónicos de los trastes 5 y 7 sirven para comprobar.",
    "Si el afinador del celular no lee bien el Mi grave, toca el armónico del traste 12: es la misma nota, una octava arriba.",
    "Si el armónico del traste 12 y la nota pisada en ese traste no coinciden, hay que ajustar la octavación en el puente.",
  ],
  sections: [
    {
      id: "notas-del-bajo",
      heading: "Las notas de las cuerdas del bajo",
      blocks: [
        {
          type: "table",
          caption: "Afinación estándar (referencia La = 440 Hz)",
          head: ["Cuerda", "Nota", "Cifrado", "Frecuencia"],
          rows: [
            ["4ª (la más gruesa)", "Mi", "E1", "41,20 Hz"],
            ["3ª", "La", "A1", "55 Hz"],
            ["2ª", "Re", "D2", "73,42 Hz"],
            ["1ª (la más delgada)", "Sol", "G2", "98 Hz"],
          ],
        },
        {
          type: "p",
          text: "Entre cada cuerda y la siguiente hay una cuarta justa. En un bajo de cinco cuerdas, la adicional suele ser un Si grave (B0, unos 30,87 Hz) por debajo del Mi, y tiene su propio [afinador de bajo de 5 cuerdas](/herramientas/afinador/bajo-5-cuerdas); en uno de seis se suma además un Do agudo (C3) por encima del Sol. El contrabajo usa las mismas cuatro notas que el bajo eléctrico y tiene su propio [afinador de contrabajo](/herramientas/afinador/contrabajo).",
        },
      ],
    },
    {
      id: "bajo-con-afinador",
      heading: "Cómo afinar el bajo con afinador",
      blocks: [
        {
          type: "table",
          caption: "Tipos de afinador para bajo",
          head: ["Tipo", "Cómo lee la nota", "Ideal para"],
          rows: [
            ["De pinza", "Por la vibración, enganchado en el clavijero", "Ensayos y lugares con ruido"],
            ["De pedal o conectado por cable", "Por la señal eléctrica del bajo", "Tocar en vivo; el ruido del lugar no le afecta"],
            ["Con micrófono (celular o web)", "Por el sonido del instrumento o del amplificador", "Practicar en casa sin comprar nada"],
            ["Integrado en el amplificador o la pedalera", "Por la señal, como el de pedal", "Si ya lo tienes, no necesitas otro"],
          ],
        },
        {
          type: "ol",
          items: [
            "Si usas un afinador conectado, sube el volumen del bajo al máximo; en un bajo activo, revisa que la batería tenga carga.",
            "Pulsa la cuerda al aire con el dedo, a volumen medio, y déjala sonar. Lee la nota un instante después del ataque: justo al pulsar, la cuerda suena un poco alta.",
            "Si la nota está baja, gira la clavija para tensar. Si está alta, afloja por debajo de la nota y vuelve a subir: así el engranaje queda firme y la cuerda no se baja a los pocos minutos.",
            "Afina Mi, La, Re y Sol, y haz una segunda pasada.",
          ],
        },
        {
          type: "p",
          text: "En casa puedes usar nuestro [afinador de bajo online](/herramientas/afinador/bajo), que funciona con el micrófono. Los micrófonos de muchos celulares y portátiles captan mal las notas muy graves; si con el Mi la aguja salta, toca el armónico del traste 12 (abajo te explicamos cómo): el afinador lo reconoce como Mi, una octava arriba, y lo lee más estable. También ayuda acercar el micrófono al parlante del amplificador.",
        },
      ],
    },
    {
      id: "afinar-de-oido-bajo",
      heading: "Afinar de oído: traste 5 y armónicos",
      blocks: [
        {
          type: "p",
          text: "Necesitas una sola referencia confiable, por ejemplo el Mi de un piano, de otro instrumento o del afinador. A partir de ahí, afinas cada cuerda contra la anterior.",
        },
        { type: "h3", text: "Con el traste 5" },
        {
          type: "ol",
          items: [
            "Pisa la cuerda Mi en el traste 5: suena un La.",
            "Toca la cuerda La al aire y ajústala hasta que las dos notas suenen iguales.",
            "Repite con el traste 5 de la cuerda La contra la Re al aire, y con el traste 5 de la Re contra la Sol al aire.",
          ],
        },
        { type: "h3", text: "Con armónicos en los trastes 5 y 7" },
        {
          type: "p",
          text: "Para hacer un armónico, toca la cuerda con la yema, muy suave, justo encima del alambre del traste, sin hundirla; pulsa cerca del puente y retira enseguida el dedo izquierdo. El armónico sigue sonando mientras giras la clavija, y eso facilita oír el batido: una ondulación, como un “ua-ua-ua”, que se hace más lenta a medida que te acercas y desaparece cuando las dos notas coinciden.",
        },
        {
          type: "table",
          caption: "Pares de armónicos que deben coincidir",
          head: ["Armónico del traste 5 de…", "Armónico del traste 7 de…", "Nota que suena"],
          rows: [
            ["Mi", "La", "Mi (E3)"],
            ["La", "Re", "La (A3)"],
            ["Re", "Sol", "Re (D4)"],
          ],
        },
        {
          type: "p",
          text: "Un matiz técnico: los armónicos producen intervalos puros, y la cuarta pura es un poquito más estrecha que la del afinador. El error se suma cuerda a cuerda, hasta unos 6 cents en la Sol. Es poco, pero se nota en acordes o tocando con teclado. Usa los armónicos para acercarte rápido y el traste 5 o el afinador para confirmar.",
        },
      ],
    },
    {
      id: "afinacion-de-octavas",
      heading: "Afinación de octavas: si desafina en los trastes altos",
      blocks: [
        {
          type: "p",
          text: "La octavación es la longitud de cada cuerda entre la cejuela y la selleta del puente. Si no está bien ajustada, el bajo suena afinado al aire y se desafina a medida que subes por el mástil. Se revisa así:",
        },
        {
          type: "ol",
          items: [
            "Pon cuerdas en buen estado: las gastadas nunca octavan bien. Si hay que cambiarlas, en [cómo cuidar un bajo eléctrico](/blog/como-cuidar-un-bajo-electrico) te contamos cómo.",
            "Colócate como tocas normalmente, sentado o de pie con la correa, y afina todas las cuerdas.",
            "Toca el armónico del traste 12 de una cuerda y mira el afinador. Luego pisa esa cuerda en el traste 12, sin apretar de más, y compara.",
            "Ajusta la selleta de esa cuerda con su tornillo en el puente, poco a poco, vuelve a afinar y repite la comparación.",
          ],
        },
        {
          type: "table",
          caption: "Hacia dónde mover la selleta",
          head: ["Nota pisada en el traste 12", "Qué significa", "Qué hacer con la selleta"],
          rows: [
            ["Más alta que el armónico", "La parte que vibra es muy corta", "Alejarla del mástil"],
            ["Más baja que el armónico", "La parte que vibra es muy larga", "Acercarla al mástil"],
            ["Igual", "Octavación correcta", "Nada; pasa a la siguiente cuerda"],
          ],
        },
        {
          type: "p",
          text: "Si el tornillo está duro, afloja un poco la cuerda antes de girarlo. Y si la selleta llega al tope sin corregir la diferencia, o si nunca lo has hecho, llévalo al luthier: puede haber un tema de curvatura del mástil, de altura de cuerdas o del puente.",
        },
      ],
    },
    {
      id: "afinaciones-alternativas",
      heading: "Afinaciones alternativas más comunes",
      blocks: [
        {
          type: "table",
          caption: "Afinaciones que vas a encontrar",
          head: ["Afinación", "Notas, de grave a aguda", "Cuándo se usa"],
          rows: [
            ["Estándar", "Mi, La, Re, Sol", "Casi todo: pop, salsa, rock, jazz, música colombiana"],
            ["Drop D (Re bajado)", "Re, La, Re, Sol", "Rock, metal o canciones que bajan hasta el Re grave"],
            ["Medio tono abajo", "Mi♭, La♭, Re♭, Sol♭", "Bandas cuyas guitarras están afinadas así, o para acomodar la voz"],
            ["Bajo de cinco cuerdas", "Si, Mi, La, Re, Sol", "Cualquier estilo que pida notas por debajo del Mi"],
          ],
        },
        {
          type: "p",
          text: "Para pasar a Drop D, baja la cuerda Mi un tono y compara su armónico del traste 12 con la cuerda Re al aire: deben sonar iguales. Ten en cuenta que cambiar de afinación cambia la tensión sobre el mástil; si lo haces seguido, las cuerdas tardan más en quedarse quietas.",
        },
      ],
    },
    {
      id: "por-que-se-desafina-el-bajo",
      heading: "Por qué se desafina el bajo",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cuerdas nuevas:** se estiran durante los primeros días. Después de ponerlas, estíralas con suavidad a lo largo del mástil y reafina varias veces.",
            "**Cambios de clima:** pasar del frío de Bogotá a tierra caliente, o dejar el bajo junto a una ventana con sol, mueve la afinación y a veces la curvatura del mástil.",
            "**Apretar de más:** presionar muy fuerte sube la nota, sobre todo si las cuerdas quedan muy separadas del diapasón. Si en los primeros trastes todo suena alto, revisa tu mano antes que el bajo.",
            "**Golpes en el clavijero:** un bajo que se resbala de la pared o del soporte suele llegar desafinado, y a veces con una clavija floja.",
          ],
        },
        {
          type: "p",
          text: "Afinar al empezar cada sesión, y otra vez si tocas un buen rato, es un hábito que tu profe revisa desde la primera de las [clases de bajo eléctrico](/clases/bajo-electrico). Si también tocas guitarra, el proceso se parece mucho al de [afinar la guitarra](/blog/como-afinar-la-guitarra), con una ventaja: en el bajo todas las cuerdas están a una cuarta, así que no existe la excepción de la cuerda Si.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿El bajo se afina igual que la guitarra?",
      answer:
        "Las cuatro cuerdas del bajo tienen las mismas notas que las cuatro cuerdas graves de la guitarra (Mi, La, Re, Sol), pero suenan una octava más abajo. Por eso un afinador de guitarra también sirve, siempre que detecte bien las frecuencias graves.",
    },
    {
      question: "¿Cada cuánto hay que afinar el bajo?",
      answer:
        "Cada vez que lo vayas a tocar, y de nuevo si cambias de lugar o tocas mucho rato. Con cuerdas nuevas, revísalo varias veces en la misma sesión.",
    },
    {
      question: "¿Por qué el bajo suena bien al aire pero desafinado más arriba del mástil?",
      answer:
        "Las causas más comunes son cuerdas gastadas, una octavación mal ajustada o apretar demasiado los trastes. Prueba primero con cuerdas nuevas y la comparación del traste 12; si la diferencia sigue, que lo revise un luthier.",
    },
    {
      question: "¿Qué pasa si subo una cuerda por encima de su nota?",
      answer:
        "Recibe más tensión de la que está pensada para soportar: puede romperse y además carga el mástil. Si te pasas, baja la cuerda y vuelve a subir despacio hasta la nota correcta.",
    },
  ],
  relatedCourseIds: ["bajo-electrico"],
  relatedPostSlugs: [
    "como-cuidar-un-bajo-electrico",
    "como-elegir-tu-primer-bajo-electrico",
    "como-leer-tablaturas-de-guitarra-y-bajo",
  ],
  cta: "clases",
};
