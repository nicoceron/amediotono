import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-elegir-tu-primera-guitarra-acustica",
  title: "Cómo elegir tu primera guitarra acústica o clásica",
  description:
    "¿Nylon o metal? Tamaños 1/2, 3/4 y 4/4 para niños, altura de cuerdas, tapa sólida o laminada y qué revisar antes de comprar tu primera guitarra.",
  excerpt:
    "Nylon o metal, el tamaño correcto para cada edad y la altura de las cuerdas: lo que define si los primeros meses con la guitarra se disfrutan o se sufren.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "qué guitarra comprar para aprender",
    "guitarra clásica o acústica para principiantes",
    "tamaño de guitarra para niños",
    "guitarra 3/4 para qué edad",
    "guitarra tapa sólida o laminada",
    "cómo saber si una guitarra es buena",
  ],
  intro: [
    "Para la mayoría de principiantes, y casi siempre para los niños, la mejor primera guitarra es una clásica de cuerdas de nylon, del tamaño correcto y con las cuerdas bajas. Si eres adolescente o adulto y lo tuyo es el pop, el rock o el folk con púa, una acústica de cuerdas de metal también es buena opción.",
    "Más que la marca o el color, lo que define si vas a disfrutar o sufrir los primeros meses es que la guitarra sea cómoda, afine bien y no lastime los dedos. Te explicamos qué mirar y qué probar.",
  ],
  keyTakeaways: [
    "Nylon para niños y para clásica, bolero, bossa o música andina; metal para rasgueo con púa en pop, rock y folk.",
    "Nunca le pongas cuerdas de metal a una guitarra clásica: no está construida para esa tensión.",
    "El tamaño se confirma con el niño sentado y la guitarra en posición, no solo por la edad.",
    "Las cuerdas demasiado altas son la causa más común de dolor y frustración al empezar.",
    "La tapa laminada es resistente y suficiente para empezar; la sólida suena más rica, pero pide más cuidado con la humedad.",
  ],
  sections: [
    {
      id: "nylon-o-metal",
      heading: "¿Clásica de nylon o acústica de metal?",
      blocks: [
        {
          type: "p",
          text: "Las dos se tocan sin amplificar y comparten afinación y acordes. Cambian las cuerdas, el mástil, el sonido y la música para la que brillan.",
        },
        {
          type: "table",
          head: ["", "Clásica (nylon)", "Acústica (metal)"],
          rows: [
            ["Cuerdas", "Suaves y con menos tensión", "Más tensas; marcan las yemas al principio"],
            ["Mástil", "Ancho y plano; los dedos tienen espacio", "Más angosto y delgado; cómodo para rasguear"],
            ["Sonido", "Cálido y redondo", "Brillante, con más volumen y proyección"],
            ["Se toca con", "Sobre todo los dedos", "Púa o dedos"],
            ["Géneros", "Clásica, bolero, bossa nova, música andina y latinoamericana", "Pop, rock, folk, baladas, country"],
            ["Para quién", "Niños y cualquier principiante que quiera una base sólida", "Adolescentes y adultos que quieren acompañar canciones con púa"],
          ],
        },
        {
          type: "p",
          text: "Una advertencia importante: no le pongas cuerdas de metal a una clásica. La mayoría no tiene alma (la varilla de ajuste dentro del mástil) y su puente está pensado para la tensión del nylon; con metal, el mástil se deforma o el puente se despega.",
        },
        {
          type: "p",
          text: "Si todavía dudas entre acústica y eléctrica, lee primero [guitarra acústica o eléctrica: cuál aprender primero](/blog/guitarra-acustica-o-electrica-cual-aprender-primero).",
        },
      ],
    },
    {
      id: "tamanos-para-ninos",
      heading: "Tamaños 1/2, 3/4 y 4/4: cuál le sirve a tu hijo",
      blocks: [
        {
          type: "p",
          text: "Las guitarras clásicas vienen en tamaños fraccionados. La fracción no es una proporción exacta: indica un mástil más corto y un cuerpo más pequeño. La medida clave es el largo de escala, la distancia entre la cejuela y el puente.",
        },
        {
          type: "table",
          caption: "Orientativo: la estatura y el largo de los brazos pesan más que la edad",
          head: ["Tamaño", "Edad aproximada", "Largo de escala aproximado"],
          rows: [
            ["1/4", "4 a 6 años", "Entre 44 y 48 cm"],
            ["1/2", "6 a 8 años", "Alrededor de 53 cm"],
            ["3/4", "8 a 11 años", "Alrededor de 58 cm"],
            ["7/8", "Adolescentes o adultos de manos pequeñas", "Alrededor de 62 cm"],
            ["4/4", "Desde los 11 o 12 años y adultos", "Alrededor de 65 cm"],
          ],
        },
        { type: "h3", text: "La prueba que vale más que la tabla" },
        {
          type: "ol",
          items: [
            "Siéntalo en una silla donde apoye los pies en el piso, o en un apoyapiés.",
            "Con la guitarra en posición, debe alcanzar el primer traste con la mano izquierda sin estirar del todo el brazo ni inclinar el cuerpo.",
            "El brazo derecho debe pasar por encima del cuerpo de la guitarra y caer cómodo frente a la boca, sin subir el hombro.",
            "Si duda entre dos tamaños, elige el menor. Una guitarra «para que le dure» genera tensiones y malos hábitos.",
          ],
        },
        {
          type: "p",
          text: "En [guitarra para niños: guía para padres](/blog/guitarra-para-ninos-guia-para-padres) encontrarás más sobre la edad para empezar, los dedos y las primeras canciones.",
        },
      ],
    },
    {
      id: "altura-de-cuerdas",
      heading: "La altura de las cuerdas: el detalle que más importa",
      blocks: [
        {
          type: "p",
          text: "La acción es la distancia entre las cuerdas y los trastes. Si es alta, hay que apretar mucho, las yemas duelen, las notas se desafinan al presionar y el estudiante termina creyendo que «no es bueno para esto». Es el defecto más común en guitarras económicas, y muchas veces tiene arreglo.",
        },
        {
          type: "ul",
          items: [
            "**Cómo medir:** con una regla metálica, mide en el traste 12 la distancia entre la parte de arriba del traste y la parte de abajo de la sexta cuerda, y luego de la primera.",
            "**Referencia en clásica:** alrededor de 4 mm en la sexta cuerda y 3 mm en la primera.",
            "**Referencia en acústica de metal:** alrededor de 2,5 mm en la sexta y 2 mm en la primera, o algo menos.",
            "**Si está alta:** un luthier puede rebajar el hueso del puente. Si el mástil está torcido o el puente se está levantando, mejor busca otra guitarra.",
          ],
        },
        {
          type: "p",
          text: "Revisa también la cejuela, la pieza blanca al comienzo del mástil. Si ahí las cuerdas quedan altas, cuesta presionar los primeros trastes, justo donde viven todos los acordes básicos.",
        },
      ],
    },
    {
      id: "tapa-solida-o-laminada",
      heading: "Tapa sólida o laminada",
      blocks: [
        {
          type: "p",
          text: "La tapa es la cara frontal, la que tiene la boca. Es la parte de la guitarra que más influye en el sonido.",
        },
        {
          type: "table",
          head: ["", "Tapa sólida", "Tapa laminada"],
          rows: [
            ["Qué es", "Madera maciza, normalmente dos piezas unidas en el centro", "Varias capas finas de madera prensadas"],
            ["Sonido", "Más rico y con más matices; suele abrirse con los años de uso", "Correcto, con menos resonancia"],
            ["Resistencia", "Sensible a la humedad, al sol y a los cambios bruscos de clima", "Aguanta mejor golpes, viajes y cambios de clima"],
            ["Para quién", "Adultos o estudiantes que la cuidarán durante años", "Niños, primera guitarra, viajes entre tierra fría y tierra caliente"],
          ],
        },
        {
          type: "p",
          text: "¿Cómo saberlo? Mira el borde de la boca: en una tapa sólida, la veta de la madera continúa por el canto; en una laminada se ven capas, o la veta del borde no coincide con la de la superficie. Si la ficha dice «tapa de abeto» o «de cedro» sin las palabras «sólida» o «maciza», probablemente es laminada.",
        },
        {
          type: "p",
          text: "Para una primera guitarra, una laminada bien construida y bien ajustada es mejor compra que una sólida con las cuerdas altas.",
        },
      ],
    },
    {
      id: "que-revisar-al-comprar",
      heading: "Qué revisar en la tienda o en una guitarra usada",
      blocks: [
        {
          type: "p",
          text: "Afínala primero con un afinador o con nuestro [afinador de guitarra](/herramientas/afinador/guitarra) en el celular: una guitarra desafinada no se puede evaluar. Luego revisa:",
        },
        {
          type: "ol",
          items: [
            "**Mástil:** pon el ojo en la cabeza y mira a lo largo del diapasón hacia el cuerpo. Debe verse recto, sin torcerse hacia un lado.",
            "**Trasteo:** toca cada cuerda pisada en varios trastes. No debe zumbar ni apagarse.",
            "**Afinación en el traste 12:** compara el armónico del traste 12 con la nota pisada en ese mismo traste. Si suenan muy distintos, desafinará en los acordes de más arriba.",
            "**Clavijas:** deben girar suave y mantener la afinación, sin patinar ni tener juego.",
            "**Puente:** revisa que no se esté levantando por detrás. Si cabe una hoja de papel entre el puente y la tapa, es mala señal.",
            "**Grietas y pegues:** revisa tapa, aros y el talón del mástil con buena luz.",
            "**Trastes:** pasa la mano por el borde del mástil. Si los extremos raspan, la madera se encogió; tiene arreglo, pero dice mucho de cómo se ha guardado.",
            "**Electroacústica:** si tiene pastilla, conéctala a un amplificador y revisa el conector y la tapa de la batería.",
          ],
        },
        { type: "h3", text: "Señales de alerta" },
        {
          type: "ul",
          items: [
            "Guitarras para niños con cuerdas de metal.",
            "Diapasón pintado que ya se está pelando.",
            "La tapa abombada detrás del puente.",
            "Un vendedor que no deja afinarla ni probarla.",
          ],
        },
        {
          type: "callout",
          title: "Que la pruebe tu profe",
          text: "Un profe detecta en un par de minutos una acción alta, un mástil torcido o una afinación que no cuadra. Si no puede acompañarte, mándale fotos del mástil de perfil y un video tocando algunas notas y acordes.",
        },
      ],
    },
    {
      id: "accesorios-para-empezar",
      heading: "Los accesorios que sí necesitas",
      blocks: [
        {
          type: "ul",
          items: [
            "Funda acolchada, mejor si tiene correas de morral para llevarla al colegio.",
            "Afinador de clip o una aplicación; aprende a usarlo desde el primer día.",
            "Apoyapiés, si tocas guitarra clásica sentado en la postura tradicional.",
            "Púas delgadas o medianas, si tocas acústica de metal.",
            "Un juego de cuerdas de repuesto; cuando llegue el momento, sigue [este paso a paso para cambiarlas](/blog/como-cambiar-las-cuerdas-de-la-guitarra).",
            "Un atril para leer canciones o partituras a la altura de los ojos.",
          ],
        },
        {
          type: "p",
          text: "La cejilla, la correa o un soporte de piso pueden esperar. Y si vas a empezar [clases de guitarra](/clases/guitarra-acustica), lleva la guitarra desde la primera clase: el profe revisa el ajuste y te dice si necesita algo antes de que se convierta en un problema.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué guitarra es mejor para un niño de 6 años?",
      answer:
        "A esa edad suele funcionar una clásica de nylon de tamaño 1/2, aunque depende de la estatura y del largo de los brazos. Lo más seguro es probarla con el niño sentado: debe alcanzar el primer traste sin estirarse del todo.",
    },
    {
      question: "¿Es normal que duelan los dedos al empezar?",
      answer:
        "Una molestia leve en las yemas durante las primeras semanas es normal, sobre todo con cuerdas de metal, y pasa a medida que se forma el callo. Si el dolor es fuerte o aparece en la muñeca, revisa la altura de las cuerdas y la postura con tu profe.",
    },
    {
      question: "¿Vale la pena comprar una electroacústica para empezar?",
      answer:
        "Solo si sabes que vas a tocar amplificado, por ejemplo en eventos del colegio o en un grupo. Para aprender en casa no hace falta, y con el mismo presupuesto a veces consigues una guitarra mejor construida sin electrónica.",
    },
    {
      question: "¿Puedo aprender en una acústica de metal y luego pasar a la clásica?",
      answer:
        "Sí. Los acordes y la afinación son los mismos. Cambian la técnica de la mano derecha, el ancho del mástil y el repertorio. Muchos guitarristas terminan teniendo las dos.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica"],
  relatedPostSlugs: [
    "guitarra-para-ninos-guia-para-padres",
    "guitarra-acustica-o-electrica-cual-aprender-primero",
    "como-limpiar-y-cuidar-una-guitarra-acustica",
  ],
  cta: "clases",
};
