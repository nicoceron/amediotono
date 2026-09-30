import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-cuidar-un-oboe-y-sus-canas",
  title: "¿Cómo cuidar un oboe y sus cañas?",
  description:
    "Cómo cuidar un oboe: remojo y guardado de las cañas dobles, limpieza después de tocar, madera y temperatura para evitar grietas, y errores que evitar.",
  excerpt:
    "El oboe es exigente con dos cosas: sus cañas y su madera. Así se remojan, guardan y rotan las cañas, y así se limpia el oboe sin arriesgarlo a una grieta.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo cuidar un oboe",
    "cómo remojar la caña del oboe",
    "cómo guardar cañas de oboe",
    "grietas en el oboe",
    "cómo limpiar un oboe",
    "cuánto dura una caña de oboe",
  ],
  intro: [
    "Cuidar un oboe se resume en tres hábitos: remojar la caña en agua y solo el tiempo necesario, guardarla en un estuche ventilado y pasar el escobillón por cada cuerpo al terminar. A eso se suma una regla de la madera: nunca soples aire caliente en un oboe frío, porque el cambio brusco de temperatura es la causa más común de grietas.",
    "La caña doble es la pieza más frágil y la que más influye en cómo suenas. El cuerpo, de madera (normalmente granadilla) o de resina en muchos modelos de estudio, necesita otros cuidados. Aquí tienes los dos.",
  ],
  keyTakeaways: [
    "Remoja la caña en agua limpia, solo hasta el hilo, unos dos o tres minutos; más tiempo la satura.",
    "Guarda las cañas en un estuche con ventilación, nunca en un tubo cerrado ni sueltas en el estuche del oboe.",
    "Ten tres o cuatro cañas en rotación para no depender de una sola el día del ensayo.",
    "Pasa el escobillón de la parte estrecha a la ancha de cada cuerpo, siempre sin la caña puesta.",
    "Si el oboe está frío, calienta el cuerpo superior en tus manos antes de soplar.",
  ],
  sections: [
    {
      id: "remojar-la-cana",
      heading: "La caña doble: cómo remojarla bien",
      blocks: [
        {
          type: "p",
          text: "La caña del oboe son dos láminas de caña muy delgadas, atadas con hilo a un tubito metálico con corcho. Solo vibra si está húmeda, pero si se empapa de más pierde respuesta y suena pesada.",
        },
        {
          type: "ol",
          items: [
            "Llena un vasito con agua limpia a temperatura ambiente.",
            "Sumerge la caña solo hasta el hilo. El corcho no debe mojarse: se hincha y después no ajusta bien en el oboe.",
            "Déjala dos o tres minutos. Con el tiempo notarás cuánto pide cada caña; las más nuevas suelen necesitar un poco más.",
            "Sacude el exceso de agua y revisa que la punta tenga una abertura fina y pareja.",
            "Haz sonar solo la caña antes de ponerla: debe dar un sonido vibrante (el llamado cacareo) sin demasiado esfuerzo.",
          ],
        },
        {
          type: "p",
          text: "Muchos oboístas prefieren remojar en agua y no en la boca, porque la saliva deja restos de comida y azúcares que ensucian la caña y favorecen los hongos. Humedecerla en la boca sirve como emergencia.",
        },
        { type: "h3", text: "Si la caña se cierra o se abre" },
        {
          type: "p",
          text: "La caña reacciona al clima y a la altura. Puede cerrarse (la punta casi se junta y el sonido sale ahogado) o abrirse de más (exige mucho aire y cuesta controlarla). Una caña que funcionaba en Bogotá puede comportarse distinto en tierra caliente, y al revés; por eso los oboístas que viajan llevan varias cañas probadas. No la raspes con cuchilla por tu cuenta: ajustar cañas es un oficio que se aprende con guía. Si con el [afinador](/herramientas/afinador) notas que una caña te deja muy alto o muy bajo en todo el registro, llévala a clase.",
        },
      ],
    },
    {
      id: "guardar-y-rotar-las-canas",
      heading: "Cómo guardar y rotar las cañas",
      blocks: [
        {
          type: "ul",
          items: [
            "Al terminar, enjuaga la caña con agua limpia y sopla suavemente desde el lado del corcho para sacar el agua.",
            "Guárdala en un estuche de cañas con ventilación, donde cada una queda sujeta por el tubito y la punta no toca nada.",
            "En clima húmedo, deja que se seque al aire antes de cerrar el estuche: una caña mojada en un espacio cerrado es un criadero de hongos.",
            "No uses a diario el tubo plástico en que viene la caña: no deja ventilar.",
            "No metas limpiapipas ni objetos por la punta: la abertura se deforma. Si tu profe usa algún método de limpieza interna, que te lo enseñe en clase.",
            "Nunca dejes la caña suelta en el estuche del oboe o en un bolsillo: la punta se despica con cualquier roce.",
          ],
        },
        {
          type: "p",
          text: "Tener una sola caña es la forma más segura de quedarse sin tocar justo antes de un ensayo. Mantén tres o cuatro en uso y altérnalas: cada una descansa, se desgasta más despacio y siempre hay una de respaldo. Numéralas y anota en tu cuaderno cuándo empezaste a usar cada una.",
        },
        {
          type: "table",
          caption: "Señales de una caña con problemas",
          head: ["Lo que notas", "Qué suele significar"],
          rows: [
            ["Punta despicada o con una grieta", "Daño físico; ya no se recupera."],
            ["Manchas oscuras o puntos de moho", "Hongos: descártala por higiene."],
            ["Suena apagada aunque la remojes bien", "Perdió elasticidad; llegó a su final."],
            ["Se cierra por completo al tocar", "Puede tener arreglo; muéstrasela a tu profe antes de botarla."],
            ["Queda floja o se mueve en el oboe", "El corcho se secó o se gastó; pide ayuda antes de forzarla."],
          ],
        },
      ],
    },
    {
      id: "limpieza-despues-de-tocar",
      heading: "Limpieza del oboe después de tocar",
      blocks: [
        {
          type: "p",
          text: "El agua que se condensa dentro del oboe tiende a meterse en los orificios pequeños, sobre todo en los de las llaves de octava. Por eso el oboe se seca siempre, aunque solo hayas tocado diez minutos.",
        },
        {
          type: "ol",
          items: [
            "Quita la caña primero y guárdala.",
            "Separa el cuerpo superior del inferior con un giro suave, sin presionar las llaves puente que conectan los dos cuerpos. Luego retira la campana.",
            "Revisa que el escobillón (de seda o microfibra) no tenga nudos ni hilos sueltos.",
            "Pasa el escobillón por cada cuerpo desde el extremo estrecho hacia el ancho. En el cuerpo superior, introduce la pesa por arriba, donde va la caña, y hala por abajo. Al revés, el paño se puede atascar.",
            "Si un orificio quedó con agua, pon papel absorbente sin goma bajo la zapatilla, presiona la llave con suavidad y retíralo. Repite hasta que salga seco.",
            "Limpia las llaves con un paño seco y guarda cada pieza en su lugar del estuche.",
          ],
        },
        {
          type: "callout",
          title: "Si el escobillón se atasca",
          text: "No hales con fuerza ni empujes con un palito. Intenta sacarlo con suavidad por donde entró; si no sale, llévalo al técnico. Forzarlo puede rayar el interior del cuerpo superior, que es lo que más define el sonido del oboe.",
        },
        {
          type: "p",
          text: "Si al tocar escuchas un gorgoteo o una nota que se quiebra, casi siempre hay agua en un orificio. Si pasa seguido en las llaves de octava, coméntalo con tu profe: a veces depende de cómo sostienes el oboe. Nunca metas agujas ni alfileres en esos orificios, que son diminutos.",
        },
      ],
    },
    {
      id: "madera-y-temperatura",
      heading: "Madera y temperatura: cómo evitar grietas",
      blocks: [
        {
          type: "p",
          text: "Las grietas aparecen cuando el interior de la madera se calienta y se humedece rápido con tu aire mientras el exterior sigue frío. La madera se expande de forma desigual y se abre, casi siempre en el cuerpo superior, que es el más delgado. En Bogotá esto importa: una mañana fría, un salón sin calefacción o un viaje en bus con el estuche junto a la ventana bastan para que el oboe esté helado al abrirlo.",
        },
        {
          type: "ul",
          items: [
            "Si el oboe está frío, calienta el cuerpo superior entre tus manos o bajo el brazo unos minutos antes de soplar.",
            "Al pasar de un lugar frío a uno cálido, deja el estuche cerrado un rato para que se aclimate.",
            "Lleva el estuche dentro de una funda que lo aísle del frío y del sol.",
            "Nunca lo dejes en el carro, junto a una ventana soleada ni cerca de un calentador.",
          ],
        },
        {
          type: "p",
          text: "Muchos fabricantes y profes recomiendan un periodo de adaptación para un oboe de madera nuevo: sesiones cortas al principio, que se alargan durante las primeras semanas, y secado cuidadoso después de cada una. Sigue las indicaciones del fabricante y de tu profe. Los oboes de resina, o con el cuerpo superior forrado por dentro, son menos propensos a agrietarse. La lógica es la misma que en [el cuidado del clarinete](/blog/como-limpiar-y-cuidar-un-clarinete), y el clima de cada región lo tratamos en [cómo guardar instrumentos según el clima en Colombia](/blog/como-guardar-instrumentos-humedad-y-clima-en-colombia).",
        },
        {
          type: "p",
          text: "No apliques aceites ni productos a la madera por tu cuenta. Si el técnico considera que el tubo lo necesita, lo hará en la revisión.",
        },
      ],
    },
    {
      id: "armar-sin-doblar-llaves",
      heading: "Armar el oboe sin doblar las llaves",
      blocks: [
        {
          type: "p",
          text: "El oboe tiene uno de los mecanismos más complejos de las maderas, con llaves puente entre los cuerpos y tornillos de ajuste muy finos. Una llave apenas doblada basta para que una nota no salga.",
        },
        {
          type: "ol",
          items: [
            "Si las uniones con corcho entran duras, aplica muy poca grasa para corcho y límpiate los dedos antes de tocar las llaves.",
            "Une la campana al cuerpo inferior presionando la llave de la campana, para que su conexión no choque.",
            "Une el cuerpo superior al inferior con un giro suave y alinea las llaves puente para que queden una sobre otra sin presionarse.",
            "Pon la caña al final, empujando el corcho con un giro suave hasta el fondo.",
          ],
        },
        {
          type: "p",
          text: "No gires los tornillos pequeños que ves en el mecanismo: controlan cómo cierran las zapatillas entre sí, y moverlos sin saber desajusta todo el oboe.",
        },
      ],
    },
    {
      id: "errores-y-revision-tecnica",
      heading: "Lo que nunca debes hacer y cuándo ir al técnico",
      blocks: [
        {
          type: "ul",
          items: [
            "Soplar aire caliente en un oboe frío.",
            "Guardar la caña mojada en un tubo cerrado o dejarla puesta en el oboe.",
            "Pasar el escobillón con la caña puesta o de lo ancho a lo estrecho.",
            "Mover los tornillos de ajuste o doblar llaves para arreglarlas.",
            "Lavar el cuerpo con agua o dejarlo secar al sol.",
          ],
        },
        {
          type: "p",
          text: "Lleva el oboe a un técnico de maderas al menos una vez al año, o antes si una nota grave no sale, si escuchas fugas de aire, si ves una línea fina en la madera o si una llave se siente floja. Una grieta detectada a tiempo suele tener buen arreglo; si se deja avanzar, sale mucho más costosa.",
        },
        {
          type: "p",
          text: "En las [clases de oboe](/clases/oboe) tu profe revisa contigo las cañas y el instrumento como parte del trabajo semanal. Y si todavía estás decidiendo, lee [por qué aprender clarinete u oboe](/blog/por-que-aprender-clarinete-u-oboe).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto dura una caña de oboe?",
      answer:
        "Depende de cuánto toques, de la calidad de la caña y de cómo la cuides. Con práctica diaria, muchas duran unas pocas semanas; rotarlas y guardarlas bien alarga su vida. Guíate por la respuesta: cuando deja de sonar viva aunque la remojes bien, es hora de cambiarla.",
    },
    {
      question: "¿Se puede tener un oboe de madera en Bogotá sin que se agriete?",
      answer:
        "Sí. El riesgo no es la ciudad sino los cambios bruscos de temperatura. Calienta el cuerpo superior antes de tocar, sécalo siempre y no lo expongas al frío de la noche ni al sol dentro de un carro.",
    },
    {
      question: "¿Por qué mi caña suena bien un día y mal al siguiente?",
      answer:
        "La caña es un material natural que reacciona a la humedad, la temperatura y la altura, y cambia con el remojo: poco la deja rígida y mucho la satura. Por eso conviene tener varias listas y remojarlas siempre igual.",
    },
    {
      question: "¿Qué hago si veo una línea en la madera del oboe?",
      answer:
        "Deja de tocarlo, sécalo, guárdalo en su estuche y llévalo al técnico cuanto antes. No lo pegues ni lo selles tú mismo: el técnico decide si hay que asegurar la grieta y cómo.",
    },
  ],
  relatedCourseIds: ["oboe"],
  relatedPostSlugs: [
    "como-limpiar-y-cuidar-un-clarinete",
    "por-que-aprender-clarinete-u-oboe",
    "como-guardar-instrumentos-humedad-y-clima-en-colombia",
  ],
  cta: "clases",
};
