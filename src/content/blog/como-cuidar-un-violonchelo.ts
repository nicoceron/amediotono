import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-cuidar-un-violonchelo",
  title: "¿Cómo cuidar un violonchelo? Pica, puente, arco y transporte",
  seoTitle: "Cómo cuidar un violonchelo: pica, arco y transporte",
  description:
    "Cómo cuidar la pica y el puente de tu chelo, elegir entre funda y estuche rígido, transportarlo sin sustos y proteger la resina, el arco y la madera.",
  excerpt:
    "Con un chelo, casi todos los accidentes pasan fuera de la clase: al dejarlo en el piso, al subir a un bus o al meterlo al carro. Así se cuida su pica, su puente, su arco y su madera.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo cuidar un violonchelo",
    "funda o estuche para violonchelo",
    "cómo transportar un chelo",
    "pica del violonchelo",
    "resina para violonchelo",
    "dónde dejar el chelo en el piso",
  ],
  intro: [
    "Un violonchelo se cuida con las reglas básicas de cualquier instrumento de arco (limpiar la resina, aflojar el arco, vigilar el puente y la humedad), pero su tamaño cambia el juego: la pica, la forma de dejarlo en el piso y sobre todo el transporte son donde ocurren la mayoría de los accidentes.",
    "La regla de oro: un chelo nunca se deja parado solo ni recostado contra nada. O está en tus manos, o en su estuche, o acostado de lado donde nadie lo pueda pisar.",
  ],
  keyTakeaways: [
    "Nunca dejes el chelo recostado contra una pared o una silla: acuéstalo de lado sobre el aro, con el puente lejos del paso.",
    "Recoge siempre la pica antes de guardarlo; afuera puede perforar la funda o golpear el estuche por dentro.",
    "Funda acolchada para trayectos cortos y cuidadosos; estuche rígido para bus, TransMilenio, colegio, orquesta o viajes.",
    "El puente del chelo es alto y soporta mucha presión: revísalo cada semana, afina con los microafinadores y cambia las cuerdas de una en una.",
    "La resina de chelo es más blanda: se ensucia más, se ablanda con el calor y debe ir siempre en su cajita.",
  ],
  sections: [
    {
      id: "pica-y-apoyo",
      heading: "La pica y cómo dejar el chelo en el piso",
      blocks: [
        {
          type: "p",
          text: "La pica es la varilla metálica que sale de la parte baja del chelo. Se desliza hacia adentro y hacia afuera y se fija con un tornillo.",
        },
        {
          type: "ul",
          items: [
            "Aprieta el tornillo lo justo para que no se deslice al tocar. Apretarlo con alicate termina barriendo la rosca o marcando la pica.",
            "La punta es afilada para que no resbale. En pisos de madera, baldosa o alfombra usa una base antideslizante o una correa de pica: protegen el piso y evitan que el chelo se corra mientras tocas.",
            "Recoge la pica por completo antes de guardarlo. Si queda afuera, perfora la funda o golpea el estuche por dentro.",
            "Si la pica se dobló o ya no entra y sale con suavidad, no la fuerces: llévala al luthier.",
          ],
        },
        { type: "h3", text: "Dónde dejarlo mientras descansas" },
        {
          type: "p",
          text: "Acuéstalo de lado en el piso, apoyado sobre el aro (el borde), nunca boca arriba ni boca abajo, con el puente hacia donde no pasa nadie. El arco va en el atril o en el estuche, no sobre la silla. Si tienes espacio, un soporte de chelo es aún mejor. Lo que nunca debes hacer es dejarlo de pie recostado contra una pared, una silla o el atril: basta un roce para que se deslice y caiga sobre el puente o la voluta.",
        },
      ],
    },
    {
      id: "puente-y-cuerdas-chelo",
      heading: "Puente y cuerdas",
      blocks: [
        {
          type: "p",
          text: "El puente del chelo es más alto que el del violín y las cuerdas lo presionan con más fuerza, así que se inclina con facilidad cuando afinas con las clavijas. Míralo de lado cada semana: la cara que da hacia el cordal debe quedar casi perpendicular a la tapa.",
        },
        {
          type: "ul",
          items: [
            "Afina con los microafinadores siempre que puedas y usa las clavijas solo para ajustes grandes. Menos giros de clavija, menos arrastre del puente.",
            "Si lo ves inclinado, pide a tu profe o al luthier que lo enderece o que te enseñe a hacerlo. Con un puente tan alto, un mal movimiento lo tumba.",
            "Cambia las cuerdas de una en una, nunca todas a la vez, para que el puente no se mueva y el alma (la pieza de madera que va dentro, cerca del pie del puente del lado de la cuerda La) no se caiga.",
            "Aprovecha cada cambio para pasar grafito de lápiz por las ranuras del puente y de la cejuela.",
          ],
        },
        {
          type: "p",
          text: "Las cuerdas de chelo duran bastante, pero no son eternas: si suenan opacas, se ven gastadas donde pasa el arco o el entorchado se abre, es momento de cambiarlas. Para revisar la afinación puedes usar el [afinador de violonchelo online](/herramientas/afinador/violonchelo).",
        },
      ],
    },
    {
      id: "funda-o-estuche-rigido",
      heading: "Funda o estuche rígido: cuál elegir",
      blocks: [
        {
          type: "table",
          caption: "Funda acolchada frente a estuche rígido para violonchelo",
          head: ["Aspecto", "Funda acolchada", "Estuche rígido"],
          rows: [
            ["Protección contra golpes", "Media: amortigua roces, no un golpe fuerte ni un peso encima", "Alta: resiste golpes, presión y caídas moderadas"],
            ["Protección contra el clima", "Baja", "Mejor aislamiento frente a lluvia, sol y cambios de temperatura"],
            ["Peso y tamaño", "Liviana y fácil de cargar a la espalda", "Más pesado y voluminoso; algunos traen ruedas"],
            ["Costo relativo", "Más económica", "Más costoso, según el material"],
            ["Ideal para", "Trayectos cortos a pie o en carro propio", "Transporte público, colegio, orquesta y viajes"],
          ],
        },
        {
          type: "p",
          text: "Si tu hijo lleva el chelo al colegio o a la orquesta, un estuche rígido suele ser la mejor inversión: pasillos, buses y salones llenos son el escenario típico de los golpes. Para un adulto que va de la casa al carro y del carro a clase, una buena funda puede ser suficiente. En ambos casos, que tenga compartimento para el arco y correas tipo morral.",
        },
      ],
    },
    {
      id: "transportar-el-chelo",
      heading: "Cómo transportar un chelo sin sustos",
      blocks: [
        { type: "h3", text: "A pie, en bus o en TransMilenio" },
        {
          type: "ul",
          items: [
            "Cárgalo a la espalda con las dos correas, no con una sola, para mantener el equilibrio.",
            "Al cruzar puertas, girar o subir escaleras, piensa en la voluta: sobresale por encima de tu cabeza y es lo primero que se golpea.",
            "En el bus, ubícate donde puedas sostenerlo vertical y pegado a ti, lejos de la puerta. En hora pico, un estuche rígido evita que la presión de la gente llegue a la tapa.",
          ],
        },
        { type: "h3", text: "En carro" },
        {
          type: "ul",
          items: [
            "Va dentro del carro, nunca en el baúl con equipaje encima. Muchos chelistas lo acomodan en el asiento de atrás con el cinturón puesto.",
            "No lo dejes en el carro estacionado al sol: la temperatura sube mucho en poco tiempo y afecta colas, barniz y resina.",
          ],
        },
        { type: "h3", text: "En avión" },
        {
          type: "p",
          text: "Un chelo en funda no debe ir en bodega. Muchos chelistas compran un asiento adicional para el instrumento y otros usan estuches de vuelo especiales. Las reglas cambian según la aerolínea, así que consulta con tiempo.",
        },
        {
          type: "p",
          text: "Después de un viaje largo o de un cambio de clima, como bajar de Bogotá a tierra caliente, deja el chelo un rato en su estuche antes de abrirlo y revisa puente, afinación y uniones antes de tocar fuerte.",
        },
      ],
    },
    {
      id: "arco-y-resina-chelo",
      heading: "Arco y resina de chelo",
      blocks: [
        {
          type: "p",
          text: "El arco de chelo es más corto y pesado que el de violín, pero igual de delicado. Aplican las mismas reglas: aflojar las cerdas al guardarlo, no tocarlas con los dedos y cuidar la punta de golpes contra el atril o la silla vecina en la orquesta.",
        },
        {
          type: "ul",
          items: [
            "La resina de chelo es más blanda y oscura que la de violín: agarra mejor las cuerdas gruesas, pero se ensucia y se ablanda con más facilidad. Guárdala en su cajita, lejos del sol.",
            "Con pocas pasadas basta; si te excedes, deja un polvo pegajoso sobre la tapa.",
            "Después de tocar, limpia con un paño seco las cuerdas, la tapa debajo de ellas y la vara del arco. Nada de alcohol ni productos para muebles: dañan el barniz.",
            "Si el arco ya no se tensa bien o perdió muchas cerdas, es hora de encerdarlo.",
          ],
        },
        {
          type: "p",
          text: "Muchos de estos cuidados se comparten con el violín; si quieres más detalle sobre la resina y la limpieza del barniz, mira [cómo limpiar y cuidar un violín](/blog/como-limpiar-y-cuidar-un-violin).",
        },
      ],
    },
    {
      id: "humedad-y-clima-chelo",
      heading: "Humedad y clima",
      blocks: [
        {
          type: "p",
          text: "Un chelo tiene placas de madera mucho más grandes que un violín, y los cambios de humedad lo afectan más. En Bogotá, las temporadas secas y los calentadores pueden abrir las uniones entre la tapa y los aros o agrietar la madera. En tierra caliente, la humedad alta hincha la madera, sube las cuerdas, vuelve pegajoso el barniz y favorece el moho en la funda.",
        },
        {
          type: "ul",
          items: [
            "Usa un humidificador de estuche en temporadas secas, siempre bien escurrido.",
            "En clima húmedo, no guardes el chelo en una funda cerrada dentro de un clóset sin ventilación.",
            "Un zumbido nuevo, una grieta o una rendija entre tapa y aros son motivo para ir al luthier esa misma semana.",
          ],
        },
        {
          type: "p",
          text: "Para humidificadores, deshumidificadores y viajes, revisa [cómo guardar instrumentos según el clima en Colombia](/blog/como-guardar-instrumentos-humedad-y-clima-en-colombia). Y si estás empezando en el [violonchelo](/clases/violoncello), tu profe te enseñará desde la primera clase a sacarlo del estuche, sentarte y dejarlo de forma segura.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cómo se debe dejar el violonchelo en el piso?",
      answer:
        "De lado, apoyado sobre el aro y con el puente hacia donde nadie pasa. Nunca de pie recostado contra una pared o una silla, ni boca arriba. Si lo vas a dejar mucho tiempo, mejor en su estuche o en un soporte.",
    },
    {
      question: "¿Es mejor funda o estuche rígido para chelo?",
      answer:
        "Depende de cómo lo muevas. Para trayectos cortos y cuidadosos basta una funda acolchada; para transporte público, colegio, orquesta o viajes, el estuche rígido protege mucho más.",
    },
    {
      question: "¿Puedo usar resina de violín en el chelo?",
      answer:
        "Funciona, pero no es lo ideal. La resina de chelo es más blanda y ayuda a que las cuerdas gruesas respondan. Pregúntale a tu profe cuál conviene para tus cuerdas y tu clima.",
    },
    {
      question: "¿Cada cuánto se lleva el chelo al luthier?",
      answer:
        "Una revisión al año es una buena costumbre, y además cada vez que notes el puente inclinado, un zumbido nuevo, una grieta o que las cuerdas quedaron muy altas o muy bajas.",
    },
  ],
  relatedCourseIds: ["violoncello"],
  relatedPostSlugs: [
    "como-elegir-tu-primer-violonchelo",
    "como-limpiar-y-cuidar-un-violin",
    "como-cuidar-un-contrabajo",
  ],
  cta: "clases",
};
