import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-limpiar-una-flauta-traversa",
  title: "¿Cómo limpiar y cuidar una flauta traversa?",
  description:
    "Cómo limpiar tu flauta traversa con varilla y paño, cuidar las zapatillas, armarla sin torcer llaves, revisar el corcho y saber cuándo ir al técnico.",
  excerpt:
    "Dos minutos con la varilla después de tocar y un buen armado evitan casi todos los daños. Guía de limpieza, zapatillas, corcho y revisión técnica.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo limpiar una flauta traversa",
    "cómo armar una flauta traversa",
    "zapatillas pegajosas flauta",
    "varilla limpiadora flauta traversa",
    "mantenimiento flauta traversa",
    "corcho de la cabeza de la flauta",
  ],
  intro: [
    "Después de tocar, desarma la flauta, pasa por dentro de cada parte la varilla limpiadora con un paño que la cubra por completo, limpia las huellas por fuera con un paño suave y guárdala seca en su estuche. Son dos minutos que evitan la mayoría de problemas con las zapatillas, que son la parte más delicada.",
    "Lo demás es manejo: armarla y desarmarla sin apretar las llaves, no mover la corona de la cabeza y llevarla a revisión técnica una vez al año.",
  ],
  keyTakeaways: [
    "Seca por dentro cabeza, cuerpo y pie después de cada práctica, con un paño que cubra toda la punta de la varilla.",
    "Arma y desarma sujetando zonas sin llaves y girando suavemente; nunca empujes por el mecanismo.",
    "Las uniones de la flauta son metal con metal: no llevan grasa; si están duras, se limpian.",
    "Para zapatillas pegajosas usa papel especial y retíralo con la llave abierta; nunca alcohol, agua ni polvos.",
    "No gires la corona de la cabeza: mueve el corcho y cambia la afinación. Revisión técnica una vez al año.",
  ],
  sections: [
    {
      id: "limpieza-despues-de-tocar",
      heading: "La limpieza después de cada práctica",
      blocks: [
        {
          type: "ol",
          items: [
            "Desarma la flauta en sus tres partes: cabeza, cuerpo y pie.",
            "Pasa una punta del paño por la ranura de la varilla y envuélvelo de modo que cubra por completo el extremo. Si la punta queda expuesta, raya el tubo por dentro.",
            "Introduce la varilla con suavidad en el cuerpo y gírala para absorber la humedad. Repite en el pie.",
            "En la cabeza, entra solo por el extremo abierto y sin empujar hasta el fondo: al otro lado está el corcho, y un golpe lo puede mover.",
            "Con otro paño seco y suave, limpia por fuera el cuerpo, las llaves y el plato de la embocadura, sin presionar las llaves.",
            "Saca el paño húmedo antes de cerrar el estuche: si lo guardas dentro, la humedad se queda junto a las zapatillas.",
          ],
        },
        {
          type: "p",
          text: "Lava el paño cuando esté sucio; uno con restos de comida o azúcar pasa esa suciedad al interior. Y antes de tocar, cepíllate los dientes o al menos enjuágate la boca: la saliva con azúcar es lo que más ensucia y pega las zapatillas.",
        },
      ],
    },
    {
      id: "armar-sin-torcer-llaves",
      heading: "Cómo armar y desarmar sin torcer las llaves",
      blocks: [
        {
          type: "p",
          text: "El mecanismo de la flauta es fino: varillas largas con llaves que se desajustan con una presión mínima en el lugar equivocado.",
        },
        {
          type: "ol",
          items: [
            "Toma la cabeza por la zona lisa, lejos del plato de la embocadura.",
            "Toma el cuerpo por el extremo superior, donde no hay llaves, nunca apretando las varillas.",
            "Une las partes girando suavemente hacia un lado y hacia el otro, sin forzar ni empujar en línea recta.",
            "Toma el pie por su extremo, sin apretar las llaves, y únelo girando del mismo modo.",
            "Alinea el orificio de la embocadura con el centro de la primera llave del cuerpo, y la varilla del pie con el centro de la última llave del cuerpo. Tu profe puede sugerirte un ajuste fino según tu embocadura.",
          ],
        },
        {
          type: "p",
          text: "Las uniones (espigas) son metal con metal y no llevan grasa. Si cuesta armar, limpia la espiga y su receptor con un paño seco y limpio: la grasa atrae mugre y empeora el problema. Si aun así está muy dura, o si está floja y baila, llévala al técnico.",
        },
        {
          type: "callout",
          title: "Siempre con las llaves hacia arriba",
          text: "Cuando dejes la flauta sobre una mesa, pon las llaves hacia arriba: apoyada sobre ellas, su propio peso las desajusta. Y nunca la dejes en una silla, en la cama o atravesada en el atril.",
        },
      ],
    },
    {
      id: "zapatillas-de-la-flauta",
      heading: "Las zapatillas: cómo cuidarlas y qué hacer si se pegan",
      blocks: [
        {
          type: "p",
          text: "Las zapatillas son las almohadillas que tapan los orificios cuando presionas una llave. Tienen fieltro y una membrana muy fina, así que el agua, el azúcar y los productos químicos las arruinan. Si una se pega o hace “clic” al abrir:",
        },
        {
          type: "ol",
          items: [
            "Pon una hoja de papel limpiador para zapatillas entre la zapatilla y el orificio.",
            "Cierra la llave con suavidad, sin presionar de más, y ábrela.",
            "Mueve el papel a otra posición y repite si hace falta.",
            "Retira el papel con la llave abierta, nunca tirando mientras la llave lo aprieta: rompes la membrana.",
          ],
        },
        {
          type: "p",
          text: "No uses billetes, papel de revista, pañitos húmedos, alcohol ni polvos: dejan residuos o dañan la membrana. Si la zapatilla sigue pegándose, se ve rota o hinchada, o una nota grave deja de salir, es momento del técnico.",
        },
      ],
    },
    {
      id: "corcho-y-corona",
      heading: "El corcho y la corona de la cabeza",
      blocks: [
        {
          type: "p",
          text: "Dentro de la cabeza, cerca del extremo cerrado, hay un corcho cuya posición influye en la afinación y en la respuesta del registro agudo. La corona, la tapita del extremo, está conectada a él.",
        },
        {
          type: "ul",
          items: [
            "No gires la corona para “apretarla” ni por jugar con ella: puedes mover el corcho sin darte cuenta.",
            "Para revisar la posición, usa la varilla: muchas traen una línea marcada en el extremo sin ranura. Introduce ese extremo por la cabeza hasta que toque el corcho y mira por el orificio de la embocadura: la línea debe verse centrada.",
            "Si no está centrada, no la corrijas golpeando la corona ni empujando el corcho. Pide ayuda a tu profe o al técnico: un corcho reseco que se mueve solo necesita cambio.",
          ],
        },
        {
          type: "p",
          text: "Señales de un corcho con problemas: la tercera octava suena desafinada o cuesta mucho, la corona gira sola o se escapa aire por ese extremo.",
        },
      ],
    },
    {
      id: "revision-tecnica-flauta",
      heading: "Revisión técnica: cada cuánto y qué incluye",
      blocks: [
        {
          type: "p",
          text: "Aunque la limpies bien, una flauta necesita revisión técnica una vez al año, más si tocas a diario. El técnico busca fugas en zapatillas que parecen cerradas pero no sellan, ajusta el mecanismo, cambia los corchos y fieltros pequeños que amortiguan las llaves, revisa resortes y lubrica los ejes. Esto último no lo hagas tú: el aceite en el lugar equivocado termina en las zapatillas.",
        },
        {
          type: "table",
          caption: "Síntomas que piden revisión técnica",
          head: ["Síntoma", "Posible causa"],
          rows: [
            ["Las notas graves no salen o suenan con mucho aire", "Fuga en alguna zapatilla o mecanismo desajustado"],
            ["Tienes que apretar muy fuerte las llaves para que suene", "Zapatillas que no asientan bien"],
            ["Una llave no vuelve a su lugar", "Resorte suelto o roto"],
            ["Ruido metálico al mover las llaves", "Falta un corcho o fieltro amortiguador"],
            ["Registro agudo desafinado o difícil", "Posición del corcho de la cabeza"],
          ],
        },
        {
          type: "p",
          text: "Una flauta con fugas obliga a apretar y soplar de más, y eso se vuelve un mal hábito. Si estás aprendiendo, tu profe de [flauta traversa](/clases/flauta-traversa) te dirá si la dificultad es de técnica o del instrumento.",
        },
      ],
    },
    {
      id: "guardar-y-clima-flauta",
      heading: "Dónde guardarla y cómo le afecta el clima",
      blocks: [
        {
          type: "ul",
          items: [
            "Siempre en su estuche, desarmada, seca y con el estuche bien cerrado.",
            "El estuche, dentro de su forro y lejos del sol, del carro cerrado y de fuentes de calor.",
            "Nada de partituras, lápices o el paño doblado presionando las llaves dentro del estuche.",
            "Para el brillo exterior basta un paño de microfibra. Los líquidos para limpiar plata llegan a las zapatillas y al mecanismo; si quieres un pulido, que lo haga el técnico.",
          ],
        },
        {
          type: "p",
          text: "En tierra caliente y en la costa, la humedad alta hincha las zapatillas y mancha el metal más rápido, así que secar bien es todavía más importante. En Bogotá, en las mañanas frías, calienta la flauta un momento con las manos antes de tocar: fría, suena más baja de afinación. Más detalles en [cómo guardar instrumentos según el clima en Colombia](/blog/como-guardar-instrumentos-humedad-y-clima-en-colombia). Y si todavía estás eligiendo instrumento, mira [cómo elegir tu primera flauta traversa](/blog/como-elegir-tu-primera-flauta-traversa).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Se puede lavar una flauta traversa con agua?",
      answer:
        "No. El agua y el jabón llegan a las zapatillas y al mecanismo y los dañan. Se limpia por dentro con varilla y paño, y por fuera con un paño seco.",
    },
    {
      question: "¿Cada cuánto hay que llevar la flauta a mantenimiento?",
      answer:
        "Una vez al año como mínimo, y antes si las notas graves no salen, alguna llave no vuelve a su lugar o necesitas apretar mucho para que suene.",
    },
    {
      question: "¿Por qué mi flauta se pone oscura?",
      answer:
        "La plata y los baños plateados se oscurecen con el aire y el sudor; es normal y no afecta el sonido. Limpiar las huellas después de tocar lo reduce. Evita los líquidos para plata: el pulido, si lo quieres, que lo haga el técnico.",
    },
    {
      question: "¿Puedo guardar la flauta armada?",
      answer:
        "No es buena idea. Armada no cabe en el estuche, queda expuesta a golpes y la humedad se queda dentro. Desármala, sécala y guárdala después de cada práctica.",
    },
  ],
  relatedCourseIds: ["flauta-traversa"],
  relatedPostSlugs: [
    "como-elegir-tu-primera-flauta-traversa",
    "por-que-aprender-flauta-traversa",
    "como-guardar-instrumentos-humedad-y-clima-en-colombia",
  ],
  cta: "clases",
};
