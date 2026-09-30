import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-guardar-instrumentos-humedad-y-clima-en-colombia",
  title: "¿Cómo guardar tus instrumentos según el clima de Colombia?",
  seoTitle: "Cómo guardar instrumentos: humedad y clima en Colombia",
  description:
    "Protege tus instrumentos del clima: cambios bruscos en Bogotá, humedad y salitre en la costa, viajes en carro y avión, humidificadores y carros al sol.",
  excerpt:
    "La madera, el cuero, los pegantes y las zapatillas reaccionan al clima. Cómo guardar tu instrumento en Bogotá, en la costa, en tierra caliente y cuando viajas.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo guardar instrumentos musicales",
    "humedad y guitarra",
    "humidificador para guitarra",
    "cómo proteger el piano de la humedad",
    "viajar con un instrumento en avión",
    "instrumento en el carro al sol",
  ],
  intro: [
    "Guarda tus instrumentos en su estuche, dentro de la casa, lejos de ventanas, paredes exteriores y fuentes de calor, y nunca en un carro cerrado. En Bogotá, cuídalos de los cambios bruscos de temperatura y de las temporadas secas; en la costa y en tierra caliente, del exceso de humedad y del salitre. Y antes de comprar un humidificador o un deshumidificador, mide la humedad con un higrómetro.",
    "En Colombia, un par de horas de carretera te llevan del frío de la sabana al calor húmedo de un valle. Para un instrumento de madera, cuero o con zapatillas, ese cambio es un esfuerzo real. Esta guía te ayuda a anticiparlo.",
  ],
  keyTakeaways: [
    "La mayoría de instrumentos de madera están cómodos con una humedad relativa moderada, más o menos entre 40 y 60 %.",
    "Mide antes de corregir: un higrómetro económico te dice si necesitas humedecer, secar o nada.",
    "Los cambios bruscos hacen más daño que un clima extremo pero estable.",
    "Nunca dejes un instrumento en un carro cerrado al sol, ni siquiera un rato.",
    "Al llegar a un clima distinto, deja el estuche cerrado un rato antes de abrirlo.",
  ],
  sections: [
    {
      id: "que-le-hace-el-clima",
      heading: "Qué les hacen la humedad y la temperatura a los instrumentos",
      blocks: [
        {
          type: "p",
          text: "La madera absorbe y suelta humedad todo el tiempo: se hincha cuando el aire está húmedo y se contrae cuando está seco. El cuero de los parches y de las zapatillas, los fieltros y los pegantes también reaccionan. El problema no es tanto el clima en sí como el cambio rápido de un extremo a otro.",
        },
        {
          type: "table",
          caption: "Síntomas por exceso de sequedad y de humedad",
          head: ["Instrumento", "Aire muy seco o cambio brusco a frío", "Aire muy húmedo o calor"],
          rows: [
            ["Guitarra, tiple y bandola", "Grietas en la tapa, trastes que sobresalen por el borde del mástil, cuerdas que bajan y trastean.", "Cuerdas más altas, sonido apagado, cuerdas oxidadas; con calor fuerte, el puente se puede despegar."],
            ["Violín, viola y violonchelo", "Grietas, juntas que se abren y clavijas que se aflojan.", "Clavijas que se traban, sonido opaco y juntas que se abren con el calor."],
            ["Piano acústico", "Afinación inestable y, en casos extremos, grietas en la tabla armónica.", "Teclas lentas o pegadas, cuerdas oxidadas y desafinación."],
            ["Clarinete, oboe y otras maderas", "Grietas, sobre todo al soplar aire caliente en un instrumento frío.", "Zapatillas hinchadas que no sellan y moho en el estuche."],
            ["Metales y saxofón", "Poco efecto directo; el frío endurece grasas y aceites.", "Corrosión por salitre cerca del mar y zapatillas del saxo pegajosas."],
            ["Percusión de cuero natural", "Parches muy tensos que se pueden rasgar.", "Parches flojos y sin sonido."],
            ["Pianos digitales y amplificadores", "Poco efecto directo.", "Condensación y óxido en contactos y circuitos."],
          ],
        },
        {
          type: "p",
          text: "Como referencia, luthiers y técnicos suelen recomendar una humedad relativa moderada para los instrumentos de madera, más o menos entre 40 y 60 %, y sobre todo estable.",
        },
      ],
    },
    {
      id: "bogota-costa-y-tierra-caliente",
      heading: "Bogotá, la costa y tierra caliente: riesgos distintos",
      blocks: [
        { type: "h3", text: "Bogotá y las ciudades frías" },
        {
          type: "p",
          text: "El riesgo no es solo el frío, sino la variación: mañanas heladas, mediodías de sol fuerte, temporadas secas y temporadas de lluvia con humedad alta. A eso se suman los calentadores eléctricos, que resecan el aire del cuarto, y los apartamentos con humedad en las paredes, donde un estuche pegado al muro puede coger moho.",
        },
        {
          type: "ul",
          items: [
            "No pongas el instrumento cerca del calentador ni en la ventana donde entra el sol de la tarde.",
            "No guardes estuches contra paredes exteriores ni en el piso de cuartos con humedad.",
            "Si tocas un viento de madera que estuvo en el frío, caliéntalo en tus manos antes de soplar.",
          ],
        },
        { type: "h3", text: "La costa Caribe y el Pacífico" },
        {
          type: "p",
          text: "Calor y humedad altos casi todo el año, y cerca del mar, salitre. Las cuerdas se oxidan en pocas semanas, los metales se manchan, las zapatillas se hinchan y los estuches cerrados huelen a humedad.",
        },
        {
          type: "ul",
          items: [
            "Seca el instrumento siempre después de tocar y deja el estuche abierto un rato a la sombra para que ventile.",
            "Pasa un paño seco por cuerdas, llaves y partes cromadas en cada uso.",
            "Un cuarto con aire acondicionado o deshumidificador protege más que cualquier truco dentro del estuche.",
          ],
        },
        { type: "h3", text: "Tierra caliente del interior" },
        {
          type: "p",
          text: "En los valles cálidos del interior el mayor riesgo es el calor directo: un instrumento en una terraza al sol o junto a una ventana puede quedar mucho más caliente que el aire del cuarto. Tócalo y guárdalo a la sombra, en el lugar más fresco de la casa.",
        },
      ],
    },
    {
      id: "higrometro-humidificadores-y-deshumidificadores",
      heading: "Higrómetro, humidificadores y deshumidificadores",
      blocks: [
        {
          type: "p",
          text: "El primer paso no es comprar un humidificador: es medir. Un higrómetro digital pequeño, dentro del estuche o en el cuarto donde guardas el instrumento, te muestra la humedad real a lo largo de la semana.",
        },
        {
          type: "table",
          caption: "Qué hacer según lo que marca el higrómetro",
          head: ["Situación", "Qué hacer"],
          rows: [
            ["Humedad baja por varios días", "Humidificador de estuche para guitarras y cuerdas frotadas, o humidificador de cuarto si guardas varios instrumentos o un piano."],
            ["Humedad alta constante", "Deshumidificador o aire acondicionado en el cuarto, y sobres de sílica gel en el estuche, cambiados o regenerados cuando se saturan."],
            ["Humedad que sube y baja", "Sobres de control de humedad de dos vías dentro del estuche, que absorben o liberan humedad según haga falta."],
            ["Humedad moderada y estable", "Nada. No agregues aparatos que no necesitas."],
          ],
        },
        {
          type: "ul",
          items: [
            "Nunca uses una esponja empapada que gotee: el agua directa mancha y deforma la madera.",
            "No uses humidificador de estuche en la costa ni en temporada de lluvias sin medir antes: puedes empeorar el problema.",
            "Recarga los humidificadores de estuche según sus instrucciones; uno seco no sirve y uno olvidado puede criar moho.",
            "Para un piano acústico, pregúntale a tu técnico afinador si conviene un sistema de control de humedad.",
          ],
        },
      ],
    },
    {
      id: "donde-guardar-en-casa",
      heading: "Dónde guardar los instrumentos en casa",
      blocks: [
        {
          type: "ul",
          items: [
            "En el estuche si no los vas a usar por varios días. Para la práctica diaria, un soporte estable en un rincón seguro está bien.",
            "Contra una pared interior, lejos de ventanas, puertas al exterior, la cocina y el baño.",
            "Lejos de calentadores, chimeneas, estufas y salidas de aire acondicionado.",
            "Fuera del alcance de mascotas y niños pequeños, y nunca recostados contra la pared o sobre la cama.",
            "El piano, contra una pared interior y sin sol directo; si lo cambias de lugar, cuenta con que necesitará afinación.",
            "Pianos digitales y amplificadores, conectados a un regulador o protector de voltaje.",
          ],
        },
        {
          type: "p",
          text: "Si guardas varios instrumentos, un clóset ventilado en una pared interior suele ser mejor que un cuarto útil pegado a la fachada. Para los cuidados propios de cada uno, revisa las guías de [guitarra acústica](/blog/como-limpiar-y-cuidar-una-guitarra-acustica), [violín](/blog/como-limpiar-y-cuidar-un-violin), [piano](/blog/como-cuidar-y-limpiar-un-piano) y [clarinete](/blog/como-limpiar-y-cuidar-un-clarinete).",
        },
      ],
    },
    {
      id: "viajes-por-carretera",
      heading: "Viajes por carretera: el baúl y el carro al sol",
      blocks: [
        {
          type: "p",
          text: "Un carro cerrado al sol se calienta muchísimo en poco tiempo, bastante más que el aire de afuera. Con ese calor se ablandan los pegantes de guitarras y violines, se pueden despegar puentes y juntas, las cañas y las zapatillas se deforman y la grasa de los metales se escurre.",
        },
        {
          type: "ol",
          items: [
            "Lleva el instrumento en la cabina, con el aire acondicionado, y no en el baúl.",
            "Protege el estuche del sol que entra por la ventana con una cobija o una funda.",
            "No lo dejes en el carro mientras paras a almorzar o haces una vuelta, ni siquiera con las ventanas entreabiertas.",
            "Al llegar, entra el estuche y déjalo cerrado un rato antes de abrirlo, sobre todo si pasaste de frío a calor o al revés. Así evitas la condensación y el cambio brusco.",
            "En un plan de fin de semana, como bajar de Bogotá a tierra caliente, revisa la afinación y el estado del instrumento al llegar y antes de volver.",
          ],
        },
        {
          type: "callout",
          title: "El error más caro",
          text: "Unos minutos en un carro parqueado al sol pueden despegar un puente, dañar el barniz o deformar las cañas. Si no puedes llevar el instrumento contigo cuando te bajas, es mejor dejarlo en casa.",
        },
      ],
    },
    {
      id: "viajes-en-avion",
      heading: "Viajar en avión con un instrumento",
      blocks: [
        {
          type: "ul",
          items: [
            "Antes de comprar el tiquete, pregunta a la aerolínea si tu instrumento puede ir en cabina y en qué condiciones. Las políticas cambian y dependen del tamaño.",
            "Si puede ir en cabina, llévalo contigo: evitas golpes y los cambios de temperatura de la bodega.",
            "Si va en bodega, usa un estuche rígido de buena calidad, rellena los espacios para que no se mueva y márcalo como frágil.",
            "En guitarras, tiples y otras cuerdas que van en bodega, muchos músicos bajan un poco la afinación para reducir la tensión, sin aflojar las cuerdas por completo.",
            "En vientos, quita boquilla, cañas y correa, y guárdalos en su lugar del estuche.",
            "Al aterrizar en un clima distinto, deja el estuche cerrado un rato antes de abrirlo.",
          ],
        },
        {
          type: "p",
          text: "Lleva en el estuche un kit básico: paño, cuerdas o cañas de repuesto, un higrómetro pequeño si tu instrumento lo necesita y el celular con el [afinador en línea](/herramientas/afinador) a mano. Si tomas [clases de violín](/clases/violin) o de otro instrumento, tu profe también puede ayudarte a notar a tiempo los síntomas del clima.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Es mejor guardar la guitarra en el estuche o en un soporte?",
      answer:
        "Para el uso diario, un soporte estable en un lugar protegido está bien y te invita a practicar. Si no vas a tocarla por días, si hay cambios fuertes de clima o si hay niños y mascotas, el estuche protege mejor.",
    },
    {
      question: "¿Cómo sé si mi instrumento está sufriendo por la humedad?",
      answer:
        "Mira las señales: cuerdas que suben o bajan sin razón, afinación que no se sostiene, olor a humedad en el estuche, óxido en cuerdas o llaves y, en maderas, grietas o trastes que sobresalen. Un higrómetro confirma la sospecha.",
    },
    {
      question: "¿Sirve poner arroz o sal en el estuche para quitar la humedad?",
      answer:
        "No es buena idea: sueltan polvo, pueden atraer insectos y no controlan la humedad de forma confiable. Los sobres de sílica gel o de control de humedad hechos para instrumentos funcionan mejor.",
    },
    {
      question: "¿Qué hago si mi instrumento se mojó con la lluvia?",
      answer:
        "Sécalo por fuera de inmediato con un paño suave y deja el estuche abierto en un lugar ventilado y a la sombra. No uses secador de pelo ni lo pongas al sol. Si entró agua a un piano, un amplificador o un instrumento con zapatillas, llévalo a revisión.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "violin", "piano", "clarinete"],
  relatedPostSlugs: [
    "como-limpiar-y-cuidar-un-violin",
    "como-limpiar-y-cuidar-una-guitarra-acustica",
    "como-cuidar-y-limpiar-un-piano",
  ],
  cta: "clases",
};
