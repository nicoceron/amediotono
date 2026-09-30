import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-limpiar-y-cuidar-un-clarinete",
  title: "¿Cómo limpiar y cuidar un clarinete?",
  description:
    "Cómo pasar el escobillón, lavar la boquilla, rotar y guardar las cañas, engrasar los corchos y evitar grietas en un clarinete de madera o de resina.",
  excerpt:
    "Escobillón, boquilla, cañas, grasa de corchos y el gran riesgo de la madera: las grietas. Todo lo que necesitas para que tu clarinete suene bien y dure.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo limpiar un clarinete",
    "cómo cuidar las cañas del clarinete",
    "grasa para corchos clarinete",
    "clarinete de madera grietas",
    "cómo limpiar la boquilla del clarinete",
    "cómo armar un clarinete",
  ],
  intro: [
    "Al terminar de tocar, quita la caña y guárdala en su portacañas, pasa el escobillón por dentro de cada parte, limpia la boquilla y guarda el clarinete desarmado y seco. Una vez por semana, lava la boquilla con agua tibia. Y si tu clarinete es de madera, evita los cambios bruscos de temperatura: son la causa más común de grietas.",
    "Aquí va todo con detalle, incluidas las cañas, que es donde más se desperdicia por falta de cuidado.",
  ],
  keyTakeaways: [
    "Pasa el escobillón por cada parte después de tocar; si se atasca, sácalo por donde entró, sin tirar con fuerza.",
    "Nunca dejes la caña puesta en la boquilla: sécala y guárdala en un portacañas plano.",
    "Rota tres o cuatro cañas en lugar de tocar una sola hasta que se acabe.",
    "Grasa en los corchos solo cuando cueste armar, y poca; al unir los cuerpos, protege el puente de llaves.",
    "Un clarinete de madera frío que recibe aire caliente puede agrietarse: caliéntalo en las manos antes de tocar.",
  ],
  sections: [
    {
      id: "escobillon-despues-de-tocar",
      heading: "El escobillón: la limpieza después de cada práctica",
      blocks: [
        {
          type: "p",
          text: "El escobillón es un paño largo, de gamuza, seda o microfibra, con un cordón y un pequeño peso en la punta. Absorbe la humedad del aliento, que si se queda adentro daña las zapatillas y, en la madera, favorece las grietas.",
        },
        {
          type: "ol",
          items: [
            "Quita la boquilla con la caña y la abrazadera antes de pasar el escobillón.",
            "Desarma el clarinete: barrilete, cuerpo superior, cuerpo inferior y campana. Hay quien lo pasa con los cuerpos armados, pero por partes es más seguro mientras aprendes.",
            "Deja caer el peso por un extremo de la pieza y hala el paño con suavidad hasta que salga por el otro. Repite dos o tres veces.",
            "Estira bien el escobillón antes de cada pasada: si entra con un nudo o doblado, se atasca.",
            "Seca con un paño las espigas y sus receptores.",
          ],
        },
        {
          type: "p",
          text: "En muchos clarinetes, el tubito de la llave de registro (la que tocas con el pulgar izquierdo) sobresale un poco hacia el interior del cuerpo superior, y ahí se enganchan los escobillones. Si se atasca, no tires más fuerte: sácalo con paciencia por donde entró. Si no sale, lleva el clarinete al técnico; forzarlo puede desprender ese tubo.",
        },
      ],
    },
    {
      id: "boquilla-y-abrazadera",
      heading: "Boquilla y abrazadera",
      blocks: [
        {
          type: "ul",
          items: [
            "Después de tocar, pasa un escobillón pequeño para boquilla o un paño por dentro, entrando por el extremo ancho y sin rozar la punta ni la tabla (la parte plana donde apoya la caña).",
            "Una vez por semana, lávala sola, sin abrazadera, con agua tibia y un poco de jabón suave. Enjuaga y deja secar.",
            "Nunca uses agua caliente: la ebonita, material de muchas boquillas, se decolora y se puede deformar, y la tabla deja de ser plana.",
            "No la raspes por dentro ni uses cepillos duros: un rayón en la punta o en la tabla cambia la respuesta de todo el clarinete.",
            "Ponle su tapa protectora siempre que no estés tocando.",
            "No aprietes de más los tornillos de la abrazadera: la caña necesita vibrar y la abrazadera se deforma.",
          ],
        },
        {
          type: "p",
          text: "Si ya hay depósitos blancos o cafés dentro de la boquilla, pide consejo a tu técnico; no los quites con objetos metálicos.",
        },
      ],
    },
    {
      id: "canas-rotacion-y-guardado",
      heading: "Cañas: rotación, guardado y cuándo cambiarlas",
      blocks: [
        {
          type: "p",
          text: "La caña es una lámina muy delgada de caña natural. Se moja, se seca y se deforma cada vez que tocas, así que su vida depende de cómo la trates.",
        },
        {
          type: "ol",
          items: [
            "Humedécela antes de tocar, en la boca o en un vasito de agua limpia, durante un minuto o menos.",
            "Al terminar, quítala de la boquilla y sécala con suavidad, de la base hacia la punta.",
            "Guárdala en un portacañas que la mantenga sobre una superficie plana y con algo de ventilación; nunca suelta en el estuche ni en el bolsillo.",
            "Rota tres o cuatro cañas, usando una distinta cada día. Así ninguna se agota y siempre tienes repuesto si una se parte.",
            "Con una caña nueva, tócala pocos minutos los primeros días: se asienta mejor y dura más.",
          ],
        },
        {
          type: "table",
          caption: "Señales de que una caña está llegando a su fin",
          head: ["Señal", "Qué significa"],
          rows: [
            ["Punta astillada, rajada o con muesca", "Descártala: va a chillar y no responde"],
            ["Sonido opaco o blando, que cuesta en el registro agudo", "Perdió firmeza; está terminando su vida útil"],
            ["Manchas oscuras o verdosas", "Moho o suciedad: cámbiala"],
            ["Punta ondulada después de secar", "Se secó mal o sin portacañas; a veces se recupera al humedecerla, a veces no"],
          ],
        },
        {
          type: "p",
          text: "No compartas cañas ni las muerdas mientras piensas: los dientes dañan la punta. La dureza (2, 2½, 3…) depende de tu nivel y de tu boquilla; el profe te dirá cuándo subir. Lo explicamos en [cómo elegir tu primer clarinete](/blog/como-elegir-tu-primer-clarinete).",
        },
      ],
    },
    {
      id: "corchos-y-armado",
      heading: "Grasa de corchos y cómo armar sin doblar llaves",
      blocks: [
        { type: "h3", text: "La grasa de corchos" },
        {
          type: "p",
          text: "Las espigas del clarinete llevan corcho, y el corcho necesita un poco de grasa para que las piezas entren sin forzar. Aplícala cuando cueste armar, no por rutina: una pequeña cantidad sobre el corcho, esparcida con el dedo, y el exceso retirado con un paño, porque atrae mugre. Con un clarinete nuevo la necesitarás más seguido al principio. No uses vaselina ni aceites de cocina, ni pongas grasa en partes metálicas.",
        },
        { type: "h3", text: "Armado paso a paso" },
        {
          type: "ol",
          items: [
            "Une la campana con el cuerpo inferior girando suavemente, sin apretar las llaves.",
            "Toma el cuerpo superior presionando sus anillos con los dedos: así se levanta la palanca del puente, la llave que conecta los dos cuerpos.",
            "Une los cuerpos girando con cuidado y alinea las dos partes del puente. Si los unes sin levantar la palanca, se dobla: es uno de los daños más comunes en clarinetes de estudiantes.",
            "Coloca el barrilete y luego la boquilla, de modo que la tabla quede alineada con el orificio del pulgar, por la parte de atrás.",
            "Pon la caña y la abrazadera al final.",
          ],
        },
      ],
    },
    {
      id: "madera-o-resina-grietas",
      heading: "Madera o resina: el riesgo de grietas",
      blocks: [
        {
          type: "table",
          caption: "Diferencias de cuidado entre clarinete de madera y de resina",
          head: ["Aspecto", "Madera", "Resina o plástico"],
          rows: [
            ["Riesgo de grietas", "Sí, sobre todo en el cuerpo superior y el barrilete", "Prácticamente ninguno"],
            ["Clima", "Sensible a cambios de temperatura y humedad", "Resistente; aguanta mejor bandas al aire libre"],
            ["Cuidado extra", "Calentarlo antes de tocar, adaptación gradual cuando es nuevo, secado riguroso", "El mismo secado; zapatillas y corchos se cuidan igual"],
          ],
        },
        {
          type: "p",
          text: "Las grietas suelen aparecer por un choque térmico: un clarinete frío recibe el aire caliente del aliento, el interior se expande más rápido que el exterior y la madera se abre. En Bogotá, un clarinete que pasó la noche en un carro o en un salón frío está en riesgo si lo tocas fuerte apenas lo sacas.",
        },
        {
          type: "ul",
          items: [
            "Calienta el barrilete y el cuerpo superior entre las manos o bajo el brazo antes de tocar.",
            "Empieza suave, con notas largas, durante unos minutos.",
            "Si el clarinete de madera es nuevo, tócalo poco tiempo al día las primeras semanas y ve aumentando.",
            "Sécalo siempre por dentro, sin excepción.",
            "El aceite para el interior del tubo no es de uso frecuente: úsalo solo si tu técnico lo recomienda y como te lo indique.",
            "En tierra caliente, el problema es el exceso de humedad: zapatillas hinchadas y moho en el estuche. Seca bien y ventila.",
          ],
        },
        {
          type: "p",
          text: "Si ves una grieta, deja de tocar esa pieza y llévala al técnico: muchas se reparan bien si se atienden a tiempo, pero si sigues tocando avanzan hacia los orificios. Por esto, en bandas de colegio o al aire libre muchos profes prefieren clarinetes de resina; te contamos más en [bandas de viento en Colombia](/blog/bandas-de-viento-en-colombia-como-empezar).",
        },
      ],
    },
    {
      id: "zapatillas-y-revision-clarinete",
      heading: "Zapatillas, llaves y revisión técnica",
      blocks: [
        {
          type: "ul",
          items: [
            "Si una zapatilla se pega o hace “clic”, pon papel limpiador de zapatillas entre ella y el orificio, cierra suavemente, abre y retira el papel con la llave abierta.",
            "Limpia las huellas de las llaves con un paño seco. Nada de pulidores de metales: se meten en el mecanismo.",
            "No lubriques los ejes de las llaves: eso lo hace el técnico.",
            "Lleva el clarinete a revisión una vez al año, o antes si las notas graves no salen, chilla sin razón o alguna llave no vuelve a su lugar.",
          ],
        },
        {
          type: "p",
          text: "A veces un estudiante cree que “no le sale” el registro agudo cuando en realidad hay una fuga en una zapatilla. Tu profe de [clarinete](/clases/clarinete) puede ayudarte a distinguir si es técnica o instrumento. Y si también tocas saxofón, sus cuidados se parecen pero tienen detalles propios: míralos en [cómo limpiar un saxofón](/blog/como-limpiar-un-saxofon).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cada cuánto se cambian las cañas del clarinete?",
      answer:
        "Depende del uso y de cómo las cuides. Rotando tres o cuatro y guardándolas bien, cada una dura varias semanas; tocando siempre la misma, bastante menos. Cámbiala cuando se astille, suene opaca o tenga manchas.",
    },
    {
      question: "¿Se puede lavar el clarinete con agua?",
      answer:
        "El cuerpo no: el agua daña las zapatillas y, en la madera, favorece las grietas. Solo la boquilla se lava, con agua tibia y jabón suave, sin la abrazadera.",
    },
    {
      question: "¿Qué pasa si no le pongo grasa a los corchos?",
      answer:
        "Armar y desarmar cuesta más, y al forzar puedes doblar llaves o romper el corcho. No hace falta ponerla a diario: solo cuando la espiga entre con dificultad.",
    },
    {
      question: "¿Por qué se agrietó mi clarinete de madera?",
      answer:
        "Casi siempre por cambios bruscos de temperatura o humedad: tocarlo frío con aire caliente, dejarlo en un carro al sol o guardarlo mojado. Llévalo al técnico cuanto antes y no sigas tocando esa pieza.",
    },
  ],
  relatedCourseIds: ["clarinete"],
  relatedPostSlugs: [
    "como-elegir-tu-primer-clarinete",
    "como-limpiar-un-saxofon",
    "como-guardar-instrumentos-humedad-y-clima-en-colombia",
  ],
  cta: "clases",
};
