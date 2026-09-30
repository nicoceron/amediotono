import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "guitarra-para-ninos-guia-para-padres",
  title: "Guitarra para niños: tamaño, cuerdas y primeras canciones",
  seoTitle: "Guitarra para niños: guía para papás",
  description:
    "Guitarra para niños: qué tamaño elegir según la edad, por qué empezar con cuerdas de nylon, cómo manejar el dolor de dedos y qué canciones tocar primero.",
  excerpt:
    "Una guía para papás sobre la primera guitarra de su hijo: tamaño, cuerdas de nylon, dedos adoloridos y las primeras canciones que sí salen.",
  category: "ninos",
  publishedAt: "2026-09-30",
  keywords: [
    "guitarra para niños",
    "qué tamaño de guitarra para un niño de 7 años",
    "a qué edad puede aprender guitarra un niño",
    "guitarra de nylon o de metal para niños",
    "clases de guitarra para niños",
    "canciones fáciles de guitarra para niños",
  ],
  intro: [
    "La guitarra funciona muy bien como primer instrumento para niños desde los 6 o 7 años, con dos condiciones: que sea de su tamaño (a esa edad, normalmente 1/2 o 3/4) y que tenga cuerdas de nylon. Con eso, los dedos sufren menos, la postura es cómoda y las primeras canciones llegan pronto.",
    "Aquí te contamos cómo elegir el tamaño, qué es normal con el dolor de dedos, cuáles suelen ser las primeras canciones y cómo acompañar la práctica en casa.",
  ],
  keyTakeaways: [
    "Muchos niños pueden empezar guitarra entre los 6 y los 7 años, con una guitarra de su tamaño.",
    "El tamaño se elige por la estatura y el alcance del brazo: 1/4, 1/2, 3/4 o 4/4.",
    "Las cuerdas de nylon son más amables con los dedos que las metálicas: ideales para empezar.",
    "Una leve molestia en las yemas las primeras semanas es normal; un dolor fuerte no lo es.",
    "Las primeras canciones se tocan en una o dos cuerdas o con acordes simplificados de uno o dos dedos.",
  ],
  sections: [
    {
      id: "edad-para-empezar-guitarra",
      heading: "¿Desde qué edad puede aprender guitarra un niño?",
      blocks: [
        {
          type: "p",
          text: "Hacia los 6 o 7 años, muchos niños tienen la fuerza en los dedos, la coordinación y la paciencia necesarias para empezar con la guitarra. Antes de esa edad se puede, pero las manos pequeñas se cansan rápido al presionar las cuerdas, y suele funcionar mejor combinar el instrumento con juegos de ritmo y canto.",
        },
        { type: "p", text: "Señales de que está listo:" },
        {
          type: "ul",
          items: [
            "Pide tocar y se interesa por las guitarras que ve en casa, en el colegio o en videos.",
            "Puede mantener la atención en una actividad guiada durante 20 a 30 minutos.",
            "Tiene fuerza para presionar una cuerda contra el traste y que la nota suene limpia.",
          ],
        },
      ],
    },
    {
      id: "tamano-de-guitarra-para-ninos",
      heading: "Qué tamaño de guitarra necesita tu hijo",
      blocks: [
        {
          type: "p",
          text: "Las guitarras para niños vienen en tamaños fraccionados. Esta tabla es una orientación; lo que manda es cómo se siente el niño con el instrumento en las manos.",
        },
        {
          type: "table",
          caption: "Tamaños de guitarra según la edad (orientativo)",
          head: ["Tamaño", "Edad aproximada", "Cómo notar que es el correcto"],
          rows: [
            ["1/4", "4 a 6 años", "Menos común; útil para niños muy pequeños o de baja estatura."],
            ["1/2", "5 a 8 años", "El niño rodea la caja con el brazo derecho sin levantar el hombro."],
            ["3/4", "8 a 11 años", "Alcanza el primer traste sin estirar el brazo del todo."],
            ["4/4", "Desde los 11 o 12 años", "Tamaño de adulto; depende más de la estatura que de la edad."],
          ],
        },
        { type: "h3", text: "La prueba en persona" },
        {
          type: "ul",
          items: [
            "Sentado, con los pies apoyados en el piso o en un banquito, la guitarra no debe taparle la cara ni obligarlo a encorvarse.",
            "El brazo derecho descansa sobre la caja y la mano llega a la boca de la guitarra sin esfuerzo.",
            "La mano izquierda alcanza el primer traste con el codo un poco doblado.",
          ],
        },
        {
          type: "p",
          text: "Si tu hijo está entre dos tamaños, casi siempre conviene el más pequeño. Más detalles en [cómo elegir tu primera guitarra acústica](/blog/como-elegir-tu-primera-guitarra-acustica).",
        },
      ],
    },
    {
      id: "cuerdas-de-nylon",
      heading: "Por qué empezar con cuerdas de nylon",
      blocks: [
        {
          type: "p",
          text: "Las guitarras clásicas usan cuerdas de nylon, más suaves y con menos tensión que las cuerdas metálicas de las guitarras acústicas de folk o pop. Para un niño, eso se traduce en menos dolor en las yemas, un sonido más cálido y menos ganas de rendirse en las primeras semanas.",
        },
        {
          type: "ul",
          items: [
            "**Revisa la altura de las cuerdas.** Si están muy separadas del diapasón, hay que presionar más fuerte. Un luthier puede bajarla con un ajuste sencillo, y es de las mejores inversiones en una guitarra económica.",
            "**Evita las guitarras de juguete con cuerdas metálicas**: suelen ser difíciles de afinar y lastiman los dedos.",
            "**Cambia las cuerdas** cuando suenen opacas o no sostengan la afinación; unas cuerdas viejas hacen sonar mal hasta a una buena guitarra. Te explicamos cómo en [cómo cambiar las cuerdas de la guitarra](/blog/como-cambiar-las-cuerdas-de-la-guitarra).",
          ],
        },
        {
          type: "p",
          text: "El mástil de una guitarra clásica es algo más ancho que el de una acústica de metal; en tamaños 1/2 y 3/4 eso rara vez es un problema. Y si más adelante tu hijo quiere pasar a cuerdas metálicas o a guitarra eléctrica, la base que construyó le sirve igual.",
        },
      ],
    },
    {
      id: "dedos-unas-y-dolor",
      heading: "Dedos, uñas y dolor: qué es normal",
      blocks: [
        {
          type: "p",
          text: "Las primeras semanas, las yemas de la mano izquierda se sienten sensibles, a veces con marcas de las cuerdas. Es normal: con la práctica se forma una piel más firme, los famosos “callitos”. Lo que no es normal es un dolor fuerte, punzante o que siga al día siguiente.",
        },
        {
          type: "ul",
          items: [
            "Sesiones cortas, de 10 a 15 minutos, con pausas, mientras los dedos se acostumbran.",
            "Presionar lo justo para que la nota suene limpia, cerca del traste y no en medio de la casilla.",
            "El pulgar izquierdo detrás del mástil, relajado, sin apretar como una pinza.",
            "Uñas de la mano izquierda cortas; si no, las yemas no llegan bien a la cuerda.",
            "Hombros y muñecas sueltos: si tu hijo aprieta la mandíbula o sube el hombro, es momento de pausa.",
          ],
        },
        {
          type: "callout",
          title: "Si duele, se para",
          text: "Una molestia leve en las yemas es parte del proceso; un dolor fuerte en dedos, muñeca o antebrazo no lo es. Paren, descansen y cuéntenle al profe para revisar la postura y la guitarra.",
        },
      ],
    },
    {
      id: "primeras-canciones-en-guitarra",
      heading: "Las primeras canciones: de una cuerda a los primeros acordes",
      blocks: [
        {
          type: "p",
          text: "Los niños necesitan tocar música de verdad desde temprano, aunque sea sencilla. Una ruta frecuente:",
        },
        {
          type: "ol",
          items: [
            "**Melodías en una o dos cuerdas.** “Estrellita, ¿dónde estás?”, el “Cumpleaños feliz” o un villancico, nota por nota.",
            "**Acordes simplificados.** Versiones de uno o dos dedos de Mi menor o de Do, con rasgueo del pulgar hacia abajo.",
            "**Canciones de dos acordes.** Rondas como “Los pollitos dicen” se acompañan con solo dos acordes; es el primer gran logro.",
            "**Los primeros acordes completos.** Mi menor, La menor, Re, Sol y Do abren la puerta a muchísimas canciones.",
            "**Rasgueos con ritmo.** Patrones sencillos de abajo y arriba y, más adelante, ritmos como la balada o el bambuco.",
          ],
        },
        {
          type: "p",
          text: "Deja que tu hijo proponga canciones: una de su serie favorita, una que cantan en el colegio, una que suena en la casa. El profe puede simplificarla a su nivel. Los acordes están explicados en [acordes básicos de guitarra para principiantes](/blog/acordes-basicos-de-guitarra-para-principiantes).",
        },
      ],
    },
    {
      id: "practica-de-guitarra-en-casa",
      heading: "Cómo acompañar la práctica en casa",
      blocks: [
        {
          type: "ul",
          items: [
            "**Afina tú al principio.** Un niño no puede afinar solo en los primeros meses; con el [afinador de guitarra](/herramientas/afinador/guitarra) del sitio toma un par de minutos.",
            "**Deja la guitarra a la vista**, en un soporte o colgada en la pared, no dentro del estuche en el clóset.",
            "**Toquen juntos.** Tú cantas y tu hijo rasguea: es la forma más divertida de practicar cambios de acorde.",
            "**Un objetivo por sesión**: un cambio de acorde, un fragmento de canción o un rasgueo.",
            "**Pregunta en vez de corregir todo.** “¿Qué te dijo el profe de la mano derecha?” funciona mejor que señalar cada error.",
          ],
        },
        {
          type: "p",
          text: "Los videos de internet son un buen complemento, pero un profe ve la postura, el tamaño de la guitarra y los hábitos de las manos que ningún video corrige. Si estás buscando uno, en [clases de guitarra acústica](/clases/guitarra-acustica) encuentras cómo empezar.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué guitarra le compro a un niño de 7 años?",
      answer:
        "Normalmente, una guitarra clásica de tamaño 1/2 o 3/4 con cuerdas de nylon, según su estatura. Pruébala con el niño sentado y, si puedes, pide al profe que revise la altura de las cuerdas antes de comprarla.",
    },
    {
      question: "¿Es mejor que un niño empiece con guitarra eléctrica?",
      answer:
        "Puede funcionar si al niño le encanta el rock: las cuerdas de la eléctrica son delgadas y el mástil es angosto. Pero necesita amplificador y cable, y hay menos opciones en tamaños para niños. Para la mayoría de niños pequeños, la clásica de nylon es la opción más sencilla para empezar.",
    },
    {
      question: "¿Mi hijo tiene que aprender a leer partitura para tocar guitarra?",
      answer:
        "No es obligatorio para empezar: muchas canciones se aprenden con acordes y tablaturas. Pero leer partitura amplía mucho lo que puede tocar, sobre todo en guitarra clásica, y el profe puede introducirla poco a poco.",
    },
    {
      question: "¿Por qué la guitarra de mi hijo se desafina tanto?",
      answer:
        "Las cuerdas nuevas se estiran durante los primeros días y se desafinan seguido; es normal. También influyen los cambios de temperatura, los golpes y las clavijas en mal estado. Si la desafinación sigue una semana después de cambiar cuerdas, llévala a revisión.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica"],
  relatedPostSlugs: [
    "como-elegir-tu-primera-guitarra-acustica",
    "acordes-basicos-de-guitarra-para-principiantes",
    "piano-o-guitarra-primer-instrumento",
  ],
  cta: "clases",
};
