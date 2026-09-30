import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-limpiar-y-cuidar-una-guitarra-acustica",
  title: "¿Cómo limpiar y cuidar una guitarra acústica o clásica?",
  description:
    "Cómo limpiar el cuerpo, el diapasón y las cuerdas de tu guitarra clásica o acústica, protegerla de la humedad y saber cuándo llevarla al luthier.",
  excerpt:
    "Un minuto después de tocar, una limpieza a fondo al cambiar cuerdas y ojo con la humedad: así se cuida una guitarra de nylon o de metal, y así sabes cuándo toca ir al luthier.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo limpiar una guitarra acústica",
    "cómo limpiar el diapasón de la guitarra",
    "cómo cuidar una guitarra clásica",
    "humedad guitarra acústica",
    "cuándo llevar la guitarra al luthier",
    "aceite para diapasón cada cuánto",
  ],
  intro: [
    "Después de tocar, pasa un paño seco de microfibra por las cuerdas y por donde apoyas el brazo, y guarda la guitarra en su estuche o en un soporte seguro. Cada vez que cambies cuerdas, limpia a fondo el diapasón. Y vigila la humedad: le hace más daño a una guitarra de madera que el uso diario.",
    "Casi todo aplica igual a la guitarra clásica de nylon y a la acústica de cuerdas metálicas, pero hay diferencias importantes en el acabado, las cuerdas y el ajuste que te señalamos en cada punto.",
  ],
  keyTakeaways: [
    "Seca las cuerdas y el cuerpo después de cada práctica: el sudor oxida las cuerdas metálicas y opaca el acabado.",
    "Limpia el diapasón a fondo al cambiar cuerdas; el aceite para diapasón va solo en maderas sin barniz, muy poco y una o dos veces al año.",
    "Nunca uses alcohol: disuelve la goma laca que tienen muchas guitarras clásicas y daña otros barnices.",
    "Trastes que pinchan en los bordes, tapa hundida o abombada y cuerdas que cambian de altura son señales de problemas de humedad.",
    "El alma de las guitarras de metal, la cejuela, el puente y las grietas son trabajo del luthier.",
  ],
  sections: [
    {
      id: "rutina-despues-de-tocar",
      heading: "La rutina de un minuto después de tocar",
      blocks: [
        {
          type: "ol",
          items: [
            "Pinza cada cuerda con un paño de microfibra, una parte del paño por encima y otra por debajo, y recórrela desde la boca hasta el clavijero.",
            "Pasa el paño por el borde donde apoyas el antebrazo y por la parte de atrás del mástil.",
            "Mira rápido el puente y la tapa: nada despegado, nada levantado.",
            "Guárdala en su estuche o funda, o en un soporte firme lejos del paso.",
          ],
        },
        {
          type: "p",
          text: "Lavarte las manos antes de tocar hace más por tus cuerdas que cualquier limpiador. Si tus manos sudan mucho, verás que las cuerdas metálicas se oscurecen en pocas semanas; con esta rutina duran bastante más.",
        },
      ],
    },
    {
      id: "nylon-o-metal-diferencias",
      heading: "Guitarra clásica o acústica: qué cambia en el cuidado",
      blocks: [
        {
          type: "table",
          caption: "Diferencias de cuidado entre guitarra de nylon y de metal",
          head: ["Aspecto", "Clásica (nylon)", "Acústica (metal)"],
          rows: [
            [
              "Acabado",
              "Muchas tienen goma laca o barnices finos: nada de alcohol ni productos abrasivos",
              "Suele ser un barniz más resistente, brillante o satinado",
            ],
            [
              "Cuerdas",
              "Tensión baja; las bordonas (entorchadas) pierden brillo antes que las primas",
              "Tensión alta; se oxidan con el sudor y la humedad",
            ],
            [
              "Alma (varilla dentro del mástil)",
              "La mayoría no tiene alma ajustable",
              "Casi todas tienen alma ajustable para corregir la curvatura del mástil",
            ],
            [
              "Riesgo típico",
              "Puente que se levanta; tapa delgada que se agrieta con la sequedad",
              "Tapa que se abomba detrás del puente por la tensión; mástil que se curva",
            ],
          ],
        },
        {
          type: "p",
          text: "Un error frecuente es ponerle cuerdas metálicas a una guitarra clásica “para que suene más duro”. Su mástil y su puente no están hechos para esa tensión, y el puente se puede arrancar o el mástil doblarse. Si buscas ese sonido, necesitas otra guitarra; comparamos ambas en [cómo elegir tu primera guitarra acústica](/blog/como-elegir-tu-primera-guitarra-acustica).",
        },
      ],
    },
    {
      id: "limpiar-cuerpo-y-diapason",
      heading: "Cómo limpiar el cuerpo y el diapasón",
      blocks: [
        { type: "h3", text: "El cuerpo" },
        {
          type: "p",
          text: "Quita el polvo con microfibra seca. Para huellas y grasa, humedece apenas una esquina del paño, limpia y seca enseguida. Si usas un limpiador para guitarras, aplícalo sobre el paño, nunca sobre la madera, y solo en acabados brillantes: en los mate o satinados, frotar con producto deja parches brillantes que ya no se quitan.",
        },
        { type: "h3", text: "El diapasón" },
        {
          type: "p",
          text: "La mugre se acumula justo al lado de cada traste. El mejor momento para limpiarla es cuando la guitarra está sin cuerdas:",
        },
        {
          type: "ol",
          items: [
            "Pasa un paño apenas húmedo por todo el diapasón y seca.",
            "Para la mugre pegada junto a los trastes, usa el borde de una tarjeta plástica o un palillo de madera, sin rayar.",
            "Si el diapasón es de palo de rosa, ébano u otra madera sin barniz (se ve mate y con poro), aplica unas gotas de aceite para diapasón con un paño, espera un par de minutos y retira todo el exceso.",
            "Si el diapasón es claro y brillante (arce con barniz, poco común en acústicas), no le pongas aceite: solo paño húmedo y seco.",
          ],
        },
        {
          type: "p",
          text: "No uses aceite de cocina ni vaselina: se enrancian o quedan pegajosos. Y cuidado con la lana de acero: raya los barnices y suelta partículas. Si los trastes tienen surcos o están muy opacos, que los pula o nivele un luthier.",
        },
      ],
    },
    {
      id: "humedad-y-estuche",
      heading: "Humedad, estuche y dónde dejarla",
      blocks: [
        {
          type: "p",
          text: "La madera de la guitarra se mueve con la humedad, sobre todo si la tapa es sólida (maciza) y no laminada. Estas señales te avisan antes de que aparezca una grieta:",
        },
        {
          type: "table",
          caption: "Señales de humedad en una guitarra de madera",
          head: ["Señal", "Qué indica", "Qué hacer"],
          rows: [
            [
              "Los trastes pinchan en los bordes del diapasón",
              "Ambiente seco: el diapasón se encogió",
              "Subir la humedad en el estuche; si no se corrige, luthier",
            ],
            [
              "Cuerdas que bajan y trastean de repente, tapa hundida frente al puente",
              "Ambiente seco",
              "Humidificador de estuche o sobre regulador de humedad",
            ],
            [
              "Cuerdas que suben y cuestan, tapa abombada detrás del puente",
              "Ambiente húmedo o exceso de tensión",
              "Deshumidificar el espacio; si persiste, revisión del luthier",
            ],
            [
              "Cuerdas oxidadas en pocos días, olor a guardado, manchas en el estuche",
              "Humedad alta y poca ventilación",
              "Airear el estuche, usar sobres absorbentes, no guardarla húmeda",
            ],
          ],
        },
        {
          type: "p",
          text: "En Bogotá, el riesgo aparece en las temporadas secas y en cuartos con calentador. En tierra caliente y en la costa ocurre lo contrario: humedad alta todo el año y salitre que oxida cuerdas y clavijas. Hay sobres reguladores que funcionan en ambos sentidos; profundizamos en [cómo guardar instrumentos según el clima en Colombia](/blog/como-guardar-instrumentos-humedad-y-clima-en-colombia).",
        },
        { type: "h3", text: "Estuche, funda o soporte" },
        {
          type: "ul",
          items: [
            "Un estuche rígido protege más de golpes y de cambios de clima; una funda acolchada basta para el día a día si la tratas con cuidado.",
            "Si prefieres tenerla a la vista para practicar más, usa un soporte de piso firme o un colgador en una pared interior.",
            "Nunca la dejes recostada contra la pared, una silla o la cama: basta un empujón para que caiga de espaldas y se parta el clavijero, una de las reparaciones más comunes.",
            "Nunca la dejes en el baúl de un carro al sol: el calor ablanda las colas y puede despegar el puente.",
            "Algunos soportes con caucho barato manchan ciertos barnices; si el tuyo es delicado, pon un paño de algodón en los apoyos.",
          ],
        },
      ],
    },
    {
      id: "cuando-llevar-al-luthier",
      heading: "Cuándo llevarla al luthier",
      blocks: [
        {
          type: "p",
          text: "Limpiar, afinar y cambiar cuerdas lo haces tú. Para lo siguiente, no improvises:",
        },
        {
          type: "ul",
          items: [
            "El puente se está despegando: si ves una rendija entre el puente y la tapa, afloja las cuerdas de inmediato y llévala. Es urgente.",
            "Una grieta en la tapa, los aros o el fondo, por pequeña que sea.",
            "Cuerdas tan altas que tocar duele, o trasteo constante que no se arregla con cuerdas nuevas.",
            "La guitarra desafina en el traste 12 aunque las cuerdas al aire estén afinadas.",
            "Clavijas duras, flojas o con juego.",
            "La cejuela (la pieza blanca entre el clavijero y el diapasón) rota, o cuerdas que se salen de sus ranuras.",
          ],
        },
        {
          type: "callout",
          title: "No gires el alma a ciegas",
          text: "En las acústicas de metal, el alma corrige la curvatura del mástil. Girarla sin saber es de los errores más costosos: un giro de más puede partirla o torcer el mástil. Pide al luthier que la ajuste y que te explique si más adelante puedes hacerlo tú.",
        },
        {
          type: "p",
          text: "Una revisión al año, o cuando te mudes de clima, mantiene la guitarra cómoda. Muchas veces lo que parece “falta de fuerza en los dedos” es una guitarra con las cuerdas demasiado altas.",
        },
      ],
    },
    {
      id: "errores-que-danan-la-guitarra",
      heading: "Errores comunes que dañan una guitarra",
      blocks: [
        {
          type: "ul",
          items: [
            "Limpiarla con alcohol, limpiavidrios o limpiadores de cocina.",
            "Dejar cuerdas viejas y oxidadas porque “todavía suenan”.",
            "Guardarla con el paño húmedo dentro del estuche.",
            "Pegarle stickers o cinta en el cuerpo: al quitarlos arrancan el barniz.",
            "Apretar a fondo los tornillos de las clavijas.",
            "Dejarla junto a una ventana o un calentador.",
          ],
        },
        {
          type: "p",
          text: "Si estás aprendiendo, tu profe de [guitarra acústica](/clases/guitarra-acustica) puede mostrarte en clase cómo revisar tu instrumento. Y cuando llegue el momento de renovar las cuerdas, aquí tienes la guía para [cambiar las cuerdas de la guitarra](/blog/como-cambiar-las-cuerdas-de-la-guitarra).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Con qué se limpia una guitarra de madera?",
      answer:
        "Con un paño de microfibra seco para el polvo y apenas húmedo para la grasa, secando enseguida. Si quieres un producto, que sea un limpiador específico para guitarras, aplicado sobre el paño. Evita alcohol, limpiavidrios, ceras con silicona y productos de cocina.",
    },
    {
      question: "¿Cada cuánto se le echa aceite al diapasón?",
      answer:
        "Una o dos veces al año es suficiente, siempre en diapasones sin barniz y aprovechando el cambio de cuerdas. El exceso de aceite no hidrata más: ablanda la madera y puede aflojar los trastes.",
    },
    {
      question: "¿Es malo dejar la guitarra fuera del estuche?",
      answer:
        "No, si está en un soporte firme, en una pared interior, lejos del sol, de ventanas y de calentadores, y si la humedad de tu casa es estable. Tenerla a la vista ayuda a practicar más. Con niños pequeños, mascotas o clima extremo, mejor el estuche.",
    },
    {
      question: "¿Hay que aflojar las cuerdas cuando no se usa la guitarra?",
      answer:
        "Para el uso normal, no: la guitarra está hecha para estar afinada. Si no la vas a tocar en meses o la vas a enviar o llevar en avión, conviene bajar un poco la tensión, sin dejar las cuerdas totalmente sueltas.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica"],
  relatedPostSlugs: [
    "como-cambiar-las-cuerdas-de-la-guitarra",
    "como-afinar-la-guitarra",
    "como-guardar-instrumentos-humedad-y-clima-en-colombia",
  ],
  cta: "clases",
};
