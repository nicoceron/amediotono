import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "instrumento-nuevo-o-usado-que-revisar-antes-de-comprar",
  title: "¿Instrumento nuevo o usado? Qué revisar antes de comprar",
  seoTitle: "Instrumento nuevo o usado: qué revisar al comprar",
  description:
    "¿Instrumento nuevo o usado? Checklist por familia (cuerdas, vientos, piano y percusión), señales de alarma y cuándo conviene alquilar o pedir prestado.",
  excerpt:
    "Un instrumento usado puede ser una gran compra si sabes qué mirar. Aquí tienes un checklist por familia y las señales que deberían hacerte desconfiar.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "instrumento musical usado qué revisar",
    "comprar instrumento nuevo o usado",
    "comprar piano usado qué revisar",
    "violín usado qué revisar",
    "alquilar o comprar instrumento musical",
    "instrumentos musicales de segunda",
  ],
  intro: [
    "Un instrumento usado puede ser una excelente compra si alguien que sabe lo revisa antes de pagar; uno nuevo te da garantía y menos sorpresas, pero no siempre mejor calidad. Para un principiante, la regla práctica es esta: **mejor un usado de estudio en buen estado y revisado que un nuevo de muy baja calidad**.",
    "Esta guía te da un método para revisar cualquier instrumento y un checklist por familia. Para los detalles de cada uno, te enlazamos las guías de compra específicas.",
  ],
  keyTakeaways: [
    "Un usado de buena calidad y bien revisado suele tocar mejor que un nuevo muy básico.",
    "Revísalo siempre en persona, con buena luz y con alguien que toque ese instrumento.",
    "Calcula lo que costaría ponerlo a punto: cuerdas, zapatillas, calibración o afinación.",
    "Si el estudiante es un niño que va a crecer o aún no está seguro del instrumento, alquilar o pedir prestado puede ser mejor que comprar.",
    "Desconfía de quien pide anticipos sin mostrar el instrumento o no deja probarlo.",
  ],
  sections: [
    {
      id: "nuevo-usado-alquilado-o-prestado",
      heading: "Nuevo, usado, alquilado o prestado",
      blocks: [
        {
          type: "table",
          caption: "Formas de conseguir tu primer instrumento",
          head: ["Opción", "A favor", "En contra", "Conviene si…"],
          rows: [
            ["Nuevo", "Sin desgaste, con garantía y factura", "Los más básicos pueden venir mal calibrados", "Tu profe conoce la calidad del instrumento que vas a comprar"],
            ["Usado", "Acceso a un instrumento de mejor calidad con la misma inversión", "Posibles daños ocultos y sin garantía", "Puedes revisarlo con alguien que sepa"],
            ["Alquilado", "Pruebas el instrumento sin comprometerte", "No es tuyo y hay que devolverlo en buen estado", "El niño va a crecer o no sabes si vas a seguir"],
            ["Prestado", "Empiezas de inmediato", "Puede necesitar arreglos y hay que devolverlo", "Hay un familiar, un colegio o una banda que lo presta"],
          ],
        },
        {
          type: "p",
          text: "Con violines, violonchelos y guitarras para niños, el alquiler o el préstamo tienen mucho sentido: los tamaños fraccionados se quedan pequeños a medida que el niño crece. En pianos, en cambio, la decisión pesa más, porque moverlos exige personal especializado; ahí vale la pena pensar primero si un piano digital resuelve la etapa inicial.",
        },
      ],
    },
    {
      id: "metodo-para-revisar",
      heading: "Cómo revisar cualquier instrumento usado",
      blocks: [
        {
          type: "ol",
          items: [
            "Pide fotos detalladas antes de ir: de frente, de lado, de las uniones y de cualquier golpe o reparación.",
            "Pregunta la historia: cuántos años tiene, quién lo tocó, dónde estuvo guardado y cuándo fue su última revisión.",
            "Revísalo con luz natural o con una linterna, sin afán, y por dentro cuando se pueda.",
            "Tócalo o pide que lo toquen: todas las notas, del grave al agudo, suave y fuerte.",
            "Usa un [afinador](/herramientas/afinador) para ver si la afinación se mantiene estable.",
            "Escucha los ruidos que no son música: zumbidos, golpeteos, chasquidos o aire que se escapa.",
            "Pregunta si el vendedor tiene algún soporte de la procedencia, como la factura original.",
          ],
        },
        {
          type: "p",
          text: "Lo ideal es ir con tu profe. Si no puede acompañarte, pídele que vea un video del instrumento tocando todas sus notas, o llévalo a un luthier o técnico antes de cerrar el trato. Si todavía no tienes profe, puedes buscar uno de tu instrumento en el [directorio de profes](/profes).",
        },
        {
          type: "p",
          text: "Ten en cuenta también el clima: un instrumento de madera que viene de tierra caliente y va a vivir en Bogotá, o al revés, necesita unas semanas para adaptarse, y en ese cambio pueden aparecer grietas o ajustes pendientes.",
        },
      ],
    },
    {
      id: "checklist-por-familia",
      heading: "Checklist por familia de instrumentos",
      blocks: [
        {
          type: "table",
          caption: "Qué revisar según el tipo de instrumento",
          head: ["Familia", "Qué revisar", "Señal de alerta", "Quién lo evalúa mejor"],
          rows: [
            ["Cuerdas pulsadas (guitarra, tiple, bajo)", "Mástil recto, altura de cuerdas, trastes, puente bien pegado", "Puente despegándose, tapa abombada, mástil torcido", "Un luthier o tu profe"],
            ["Cuerdas frotadas (violín, viola, violonchelo)", "Grietas, alma en su lugar, puente recto, clavijas que sostienen, estado del arco", "Grietas en la tapa, diapasón despegado, vara del arco torcida", "Un luthier de cuerdas frotadas"],
            ["Vientos de madera (flauta, clarinete, saxofón)", "Zapatillas, resortes, corchos, mecánica sin juego", "Notas graves que no salen, grietas en el cuerpo de madera del clarinete", "Un técnico de vientos"],
            ["Vientos de metal (trompeta, trombón)", "Pistones o vara, bombas, abolladuras", "Pistones gastados, vara golpeada, corrosión interna", "Un técnico de vientos o tu profe"],
            ["Piano acústico", "Teclas, martillos, apagadores, estabilidad de la afinación", "Clavijas flojas, tabla armónica rajada, comején", "Un afinador o técnico de pianos"],
            ["Piano digital y teclados", "Que todas las teclas respondan, sensibilidad, pedal, salidas", "Teclas que no suenan o suenan siempre igual de fuerte", "Tú mismo, con una prueba ordenada"],
            ["Percusión", "Cascos, bordes, herrajes, pedales, platillos", "Platillos con fisuras, cascos rajados", "Tu profe o un baterista con experiencia"],
          ],
        },
        {
          type: "p",
          text: "Cada instrumento tiene detalles propios que no caben en una tabla. En vientos, por ejemplo, profundizamos en [cómo elegir tu primer saxofón](/blog/como-elegir-tu-primer-saxofon), con todo lo que conviene mirar en zapatillas y tudel.",
        },
      ],
    },
    {
      id: "piano-usado",
      heading: "El caso especial del piano usado",
      blocks: [
        {
          type: "p",
          text: "El piano es el instrumento en el que un usado puede ser una gran oportunidad o un gran problema. Por fuera puede verse impecable y por dentro tener piezas que ya no sostienen la afinación. Antes de comprar, pídele a un afinador o técnico de pianos que revise:",
        },
        {
          type: "ul",
          items: [
            "Que sostenga la afinación: si las clavijas están flojas, el piano se desafina a los pocos días de afinarlo.",
            "Que la tabla armónica y los puentes no tengan grietas grandes.",
            "Que todas las teclas bajen y suban parejo, sin quedarse pegadas.",
            "Que los martillos no estén muy desgastados ni comidos por la polilla, y que los apagadores detengan el sonido al soltar la tecla.",
            "Que no haya rastros de comején en el mueble ni en las partes internas.",
          ],
        },
        {
          type: "p",
          text: "Suma el transporte, que debe hacer personal especializado, y la primera afinación en su nuevo lugar. Si estás en esa decisión, lee [cómo elegir tu primer piano o teclado](/blog/como-elegir-tu-primer-piano-o-teclado), donde comparamos acústico y digital, y conoce cómo son las [clases de piano](/clases/piano) si vas a empezar desde cero.",
        },
      ],
    },
    {
      id: "cuerdas-frotadas-usadas",
      heading: "Violín y otras cuerdas frotadas: revisa también el arco",
      blocks: [
        {
          type: "p",
          text: "En violines, violas y violonchelos usados, lo más delicado no siempre se ve a primera vista:",
        },
        {
          type: "ul",
          items: [
            "**Grietas**: revisa la tapa, sobre todo cerca de las efes y del puente, y los bordes del instrumento.",
            "**Alma**: es un palito de madera dentro del instrumento, cerca del pie del puente del lado de la cuerda más aguda. Si se cayó o está corrida, el sonido se apaga; ubicarla es trabajo de luthier.",
            "**Puente**: debe estar derecho, sin curvarse hacia el diapasón.",
            "**Clavijas**: deben girar con suavidad y quedarse en su lugar.",
            "**Arco**: vara recta al mirarla a lo largo, un tornillo que tense las cerdas y cerdas suficientes.",
            "**Tamaño**: un violín usado de la medida equivocada no es una ganga. Confirma la medida con el profe antes de comprar.",
          ],
        },
        {
          type: "p",
          text: "En [cómo elegir tu primer violín y su tamaño](/blog/como-elegir-tu-primer-violin-y-su-tamano) explicamos cómo medir a un niño y qué incluye un violín de estudio.",
        },
      ],
    },
    {
      id: "senales-de-alarma",
      heading: "Señales de alarma al comprar de segunda",
      blocks: [
        {
          type: "ul",
          items: [
            "Te piden un anticipo o el pago completo antes de ver el instrumento.",
            "El vendedor dice que el instrumento está en otra ciudad y solo puede enviarlo.",
            "No deja probarlo o pone excusas para que lo revise alguien que sepa.",
            "Las fotos parecen de catálogo y no del instrumento real.",
            "Frases como “solo necesita un ajuste” o “solo le faltan cuerdas”, sin saber de qué ajuste se trata.",
            "Un precio muy por debajo de instrumentos parecidos, sin una explicación clara.",
            "No hay forma de saber de dónde viene el instrumento.",
          ],
        },
        {
          type: "callout",
          title: "Paga cuando estés seguro",
          text: "Revisa el instrumento en persona, en un lugar seguro, y paga solo cuando haya sido probado. Si no puedes verificar su estado, es mejor pasar a la siguiente opción: siempre aparecen más.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Vale la pena comprar un instrumento usado para un principiante?",
      answer:
        "Sí, siempre que lo revise alguien que sepa y lo pongas a punto antes de empezar. Un principiante no puede distinguir si una dificultad es suya o del instrumento, así que un usado mal ajustado puede desanimarlo sin razón.",
    },
    {
      question: "¿Es mejor alquilar o comprar un instrumento para un niño?",
      answer:
        "Si el niño está en tamaños fraccionados o apenas está probando, alquilar o pedir prestado suele ser más sensato. Cuando ya tenga su tamaño definitivo y la constancia se haya sostenido unos meses, comprar tiene más sentido.",
    },
    {
      question: "¿Mi profe puede revisar un instrumento antes de que lo compre?",
      answer:
        "Pregúntale: muchos profes revisan con gusto fotos, videos o el instrumento en persona. Para diagnósticos internos o reparaciones, lo indicado es un luthier o un técnico.",
    },
    {
      question: "¿Qué pierdo al comprar usado?",
      answer:
        "Normalmente, la garantía y la certeza sobre la historia del instrumento. Por eso conviene preguntar por revisiones anteriores y reservar parte del presupuesto para ajustes.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "violin", "saxofon", "piano"],
  relatedPostSlugs: [
    "como-elegir-tu-primer-violin-y-su-tamano",
    "como-elegir-tu-primer-piano-o-teclado",
    "como-elegir-tu-primer-saxofon",
  ],
  cta: "clases",
};
