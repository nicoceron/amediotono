import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-limpiar-y-cuidar-un-violin",
  title: "¿Cómo limpiar y cuidar un violín (y una viola)?",
  description:
    "Cómo usar la resina, limpiar cuerdas y tapa, cuidar el arco, revisar el puente y proteger tu violín o viola de la humedad, con los errores más comunes.",
  excerpt:
    "Resina, arco, puente, alma y humedad: lo que tu profe de violín espera que hagas después de cada práctica, cada semana y cada año. Aplica igual para la viola.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo limpiar un violín",
    "cómo poner resina al arco del violín",
    "cómo cuidar el arco del violín",
    "puente del violín inclinado",
    "cómo guardar un violín",
    "cómo cuidar una viola",
  ],
  intro: [
    "Después de cada práctica, afloja el arco, limpia con un paño seco la resina que quedó en las cuerdas y en la tapa, y guarda el violín en su estuche con los cierres asegurados. Una vez por semana, mira el puente de lado para confirmar que sigue derecho. Y nunca toques las cerdas del arco con los dedos.",
    "Todo lo que sigue aplica igual a la viola: es algo más grande y más grave, pero se cuida exactamente de la misma forma.",
  ],
  keyTakeaways: [
    "Afloja las cerdas cada vez que guardes el arco: si queda tenso, la vara pierde su curvatura.",
    "No toques las cerdas: la grasa de la piel impide que la resina agarre y esa zona deja de sonar.",
    "Limpia la resina de cuerdas, tapa y vara con un paño seco después de tocar; nada de alcohol cerca del barniz.",
    "Al afinar, el puente se inclina hacia el diapasón: revísalo cada semana y enderézalo antes de que se caiga.",
    "El alma es una pieza interna que solo mueve el luthier; si se cae, afloja las cuerdas y no toques el instrumento.",
  ],
  sections: [
    {
      id: "rutina-de-cuidado-violin",
      heading: "Qué hacer después de cada práctica, cada semana y cada año",
      blocks: [
        {
          type: "table",
          caption: "Calendario de cuidado del violín y la viola",
          head: ["Cuándo", "Qué hacer"],
          rows: [
            ["Después de cada práctica", "Aflojar el arco, limpiar la resina de cuerdas, tapa y vara, guardar en el estuche y cerrar los cierres"],
            ["Cada semana", "Revisar que el puente esté derecho y que los microafinadores no estén al tope"],
            ["Cada mes", "Revisar cerdas rotas, el estado de la resina y el interior del estuche"],
            ["Cada 6 a 12 meses", "Cambiar cuerdas si están gastadas y hacer una revisión con el luthier"],
            ["Cada uno o dos años, según el uso", "Cambiar las cerdas del arco (encerdado)"],
          ],
        },
        {
          type: "p",
          text: "Si tocas varias horas al día, los plazos se acortan. Los de cuerdas y cerdas son una guía: lo que manda es el sonido y lo que te diga tu profe.",
        },
      ],
    },
    {
      id: "resina-y-arco",
      heading: "Resina y arco: lo que más se hace mal",
      blocks: [
        { type: "h3", text: "Cómo poner la resina (colofonia)" },
        {
          type: "ol",
          items: [
            "Tensa el arco hasta que, en el centro, entre la vara y las cerdas quepa más o menos un lápiz. Ni más ni menos.",
            "Pasa la resina a lo largo de las cerdas, del talón a la punta, con movimientos lentos. Tres o cuatro pasadas suelen bastar.",
            "Si la resina es nueva y está lisa, no agarra: raspa suavemente su superficie para abrirla; tu profe o el luthier te muestran cómo.",
            "Un arco con cerdas nuevas necesita muchas más pasadas la primera vez.",
          ],
        },
        {
          type: "p",
          text: "El exceso se nota: sonido áspero, una nube blanca al tocar y polvo pegado en la tapa. Mejor poca resina cada una o dos prácticas que mucha de una vez. Guárdala en su cajita o envuelta en tela: se parte si se cae y se ablanda con el calor, por ejemplo en un carro al sol.",
        },
        { type: "h3", text: "Cuidar el arco" },
        {
          type: "ul",
          items: [
            "Nunca toques las cerdas ni las laves, ni les pongas talco u otros productos.",
            "Afloja las cerdas al guardar el arco, hasta que queden relajadas pero sin colgar.",
            "Si se rompe una cerda, córtala con tijeras cerca de la punta y del talón. No la arranques: puedes aflojar el taco que las sujeta.",
            "Cuida la punta del arco: es su parte más frágil y un golpe contra el atril o el piso puede partirla.",
            "Si el estuche pasa mucho tiempo cerrado, ábrelo y airéalo de vez en cuando: hay insectos diminutos que se comen las cerdas en estuches oscuros y sin uso.",
          ],
        },
        {
          type: "p",
          text: "Si todavía estás aprendiendo el agarre, mira [cómo sostener el arco del violín](/blog/como-sostener-el-arco-del-violin): una mano relajada también cuida la vara y las cerdas.",
        },
      ],
    },
    {
      id: "limpiar-cuerdas-y-tapa",
      heading: "Cómo limpiar cuerdas, tapa y barniz",
      blocks: [
        {
          type: "p",
          text: "Usa un paño suave de algodón o microfibra que sea solo para el violín. Sostén el instrumento por el mango, no por la tapa, y:",
        },
        {
          type: "ol",
          items: [
            "Pasa el paño por las cuerdas entre el puente y el final del diapasón, donde se acumula la resina.",
            "Limpia la tapa debajo de las cuerdas y alrededor de las efes, sin mover el puente.",
            "Limpia el diapasón, el borde de la mentonera y la vara del arco.",
          ],
        },
        {
          type: "p",
          text: "Si la resina ya se endureció sobre las cuerdas, no la raspes con uñas ni objetos metálicos. Hay quien usa alcohol en un paño para limpiarlas, pero es riesgoso: una gota sobre el barniz basta para mancharlo o disolverlo. Existen limpiadores para cuerdas y para barniz de instrumentos de arco; aun así, la limpieza a fondo del barniz es mejor dejarla para la revisión con el luthier.",
        },
        {
          type: "p",
          text: "Nunca uses productos para muebles, limpiavidrios ni pulidores genéricos. Una zona opaca donde apoyas la mandíbula o la mano es desgaste normal por el sudor; el luthier puede protegerla.",
        },
      ],
    },
    {
      id: "puente-alma-y-clavijas",
      heading: "Puente, alma y clavijas",
      blocks: [
        { type: "h3", text: "El puente" },
        {
          type: "p",
          text: "El puente no está pegado: lo sostiene la presión de las cuerdas. Cada vez que afinas con las clavijas, las cuerdas arrastran un poco su parte superior hacia el diapasón. Tras semanas de afinar, el puente se inclina, se deforma y, en el peor caso, se cae.",
        },
        {
          type: "ul",
          items: [
            "Míralo de lado: la cara que da hacia el cordal debe quedar más o menos perpendicular a la tapa.",
            "Si está inclinado, con el violín apoyado en tu regazo, toma la parte alta del puente con pulgares e índices de ambas manos y llévala con suavidad a su posición. Si nunca lo has hecho, pide primero a tu profe que te muestre.",
            "Al cambiar cuerdas, pasa la punta de un lápiz por las ranuras del puente y de la cejuela: el grafito ayuda a que las cuerdas deslicen sin arrastrar el puente.",
            "Si el puente ya está curvo, enderezarlo no basta: hay que reemplazarlo.",
          ],
        },
        { type: "h3", text: "El alma" },
        {
          type: "p",
          text: "Dentro del violín hay un palito de madera, el alma, entre la tapa y el fondo, cerca del pie del puente del lado de la cuerda Mi. Tampoco está pegada. Si el puente se cae o aflojas todas las cuerdas a la vez, el alma puede caerse. Si oyes algo suelto adentro, afloja las cuerdas, no toques el violín y llévalo al luthier: tocar sin alma puede hundir o agrietar la tapa. Nunca intentes acomodarla tú.",
        },
        { type: "h3", text: "Clavijas y microafinadores" },
        {
          type: "p",
          text: "Si una clavija resbala, empújala un poco hacia adentro mientras la giras; si se pega o chirría, puede necesitar pasta para clavijas. Con aire seco es más común que resbalen, y en tierra caliente que se peguen. Revisa también los microafinadores: si están atornillados hasta el fondo, su pieza inferior puede rayar la tapa. Devuélvelos a la mitad de su recorrido y reafina con la clavija, con ayuda del [afinador de violín online](/herramientas/afinador/violin) y los pasos de [cómo afinar el violín](/blog/como-afinar-el-violin).",
        },
      ],
    },
    {
      id: "humedad-y-estuche-violin",
      heading: "Humedad, temperatura y estuche",
      blocks: [
        {
          type: "p",
          text: "El violín está hecho de maderas delgadas unidas con cola animal, pensada para ceder antes que la madera. Por eso, cuando el ambiente se reseca, lo primero que suele pasar es que se abre una unión entre la tapa y los aros; lo notas por un zumbido nuevo. Es una reparación sencilla para el luthier, y mucho mejor que una grieta.",
        },
        {
          type: "ul",
          items: [
            "En Bogotá, en temporadas secas o si usas calentador, un humidificador de estuche ayuda a evitar grietas y clavijas sueltas. Úsalo bien escurrido: nunca debe gotear.",
            "En tierra caliente y en la costa, el problema es el exceso de humedad: barniz pegajoso, cuerdas oxidadas, clavijas duras y moho en el estuche. Ventila y usa sobres absorbentes.",
            "Nunca lo dejes en un carro cerrado, junto a una ventana con sol o cerca de una chimenea.",
            "Si llegas del frío de la calle a una casa caliente, deja el violín unos minutos en el estuche antes de abrirlo.",
          ],
        },
        { type: "h3", text: "El estuche" },
        {
          type: "ul",
          items: [
            "Cierra siempre los cierres o cremalleras, aunque solo vayas a moverlo dos metros. Levantar un estuche abierto es de las formas más comunes de que un violín termine en el piso.",
            "No lleves objetos sueltos (resina, afinador, lápices) donde puedan golpear el instrumento.",
            "No dejes el estuche en sillas o camas donde alguien se pueda sentar.",
            "Saca el paño del estuche si quedó húmedo.",
          ],
        },
        {
          type: "p",
          text: "Todo esto aplica igual a la [viola](/clases/viola). Para humidificadores y viajes entre climas, lee [cómo guardar instrumentos según el clima en Colombia](/blog/como-guardar-instrumentos-humedad-y-clima-en-colombia).",
        },
      ],
    },
    {
      id: "errores-comunes-violin",
      heading: "Errores comunes de quien empieza",
      blocks: [
        {
          type: "ul",
          items: [
            "Guardar el arco tenso “para no tener que tensarlo mañana”.",
            "Poner resina en cada práctica como si nunca fuera suficiente, hasta que el violín queda blanco.",
            "Afinar siempre con las clavijas y no revisar nunca el puente.",
            "Dejar el violín sobre una silla o la cama “solo un momento”.",
            "Aflojar todas las cuerdas a la vez para limpiar o cambiarlas.",
            "Llevarlo en el baúl del carro o cerca de la ventana del bus, al sol.",
          ],
        },
        {
          type: "p",
          text: "Si empiezas en el [violín](/clases/violin), tu profe revisará contigo el puente y el arco en las primeras clases: es parte del aprendizaje, no un extra.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cada cuánto hay que ponerle resina al arco?",
      answer:
        "Para la mayoría de estudiantes, unas pocas pasadas cada una o dos prácticas. Si el arco resbala sin sacar sonido, falta; si ves polvo blanco y el sonido es áspero, sobra.",
    },
    {
      question: "¿Cómo sé si hay que cambiar las cerdas del arco?",
      answer:
        "Cuando ha perdido muchas cerdas, quedan más de un lado que del otro, el arco ya no se tensa bien o, aun con resina, no agarra la cuerda. Con uso diario suele ser cada uno o dos años; con menos uso duran más.",
    },
    {
      question: "¿Qué hago si se cayó el puente del violín?",
      answer:
        "Afloja un poco las cuerdas que sigan tensas, guarda el puente y escucha, sin sacudir el violín, si hay algo suelto adentro. Llévalo al luthier: ubicar el puente en su punto exacto y revisar el alma es parte de su trabajo.",
    },
    {
      question: "¿Se puede limpiar el violín con alcohol?",
      answer:
        "No. El alcohol disuelve muchos barnices de violín y una gota basta para dejar una mancha. Para el día a día, un paño seco; para una limpieza profunda, un producto específico para instrumentos de arco o el luthier.",
    },
    {
      question: "¿La viola se cuida igual que el violín?",
      answer:
        "Sí: resina, arco, puente, alma, humedad y estuche siguen las mismas reglas. Cambian la afinación (Do, Sol, Re, La en lugar de Sol, Re, La, Mi) y el tamaño del instrumento y de accesorios como las cuerdas, el estuche y la mentonera.",
    },
  ],
  relatedCourseIds: ["violin"],
  relatedPostSlugs: [
    "como-afinar-el-violin",
    "como-sostener-el-arco-del-violin",
    "como-elegir-tu-primer-violin-y-su-tamano",
  ],
  cta: "clases",
};
