import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-limpiar-y-cuidar-una-guitarra-electrica",
  title: "¿Cómo limpiar y cuidar una guitarra eléctrica?",
  description:
    "Limpieza del cuerpo, los trastes y las pastillas, potenciómetros que suenan, cables y amplificador: qué puedes hacer tú y qué debe hacer un luthier.",
  excerpt:
    "Cuerpo, trastes, pastillas, potenciómetros que raspan, cables y amplificador: cómo cuidar tu eléctrica en casa y cuándo dejarle el trabajo al luthier.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo limpiar una guitarra eléctrica",
    "potenciómetro de guitarra hace ruido",
    "cómo limpiar los trastes de la guitarra",
    "jack de guitarra flojo",
    "cómo cuidar el amplificador de guitarra",
    "calibrar guitarra eléctrica",
  ],
  intro: [
    "Una guitarra eléctrica se cuida en tres frentes: la madera y el metal (cuerpo, mástil, trastes y cuerdas), la electrónica (pastillas, potenciómetros, selector y jack) y la cadena de sonido (cables y amplificador). Lo básico es sencillo: secar cuerdas y trastes después de tocar, limpiar el cuerpo con microfibra, enrollar bien los cables y encender y apagar el amplificador en el orden correcto.",
    "Muchos ruidos que parecen graves se resuelven en casa en minutos. Otros, como el ajuste del alma o la nivelación de trastes, son trabajo de luthier. Aquí te explicamos cuál es cuál.",
  ],
  keyTakeaways: [
    "Limpia el diapasón según su madera: arce con barniz solo con paño húmedo; palo de rosa o ébano, con aceite para diapasón una o dos veces al año.",
    "Si pules trastes, tapa las pastillas: las partículas metálicas se pegan a sus imanes.",
    "Un potenciómetro que raspa suele mejorar girándolo de extremo a extremo; si no, limpiador de contactos o luthier, nunca lubricante multiuso.",
    "Conecta con el amplificador en cero y apágalo antes de desconectar el cable.",
    "Cuerdas, tornillos flojos y altura de pastillas los ajustas tú; alma, octavación fina, trastes y soldaduras, mejor el luthier.",
  ],
  sections: [
    {
      id: "cuerpo-y-diapason",
      heading: "Cuerpo, mástil y diapasón",
      blocks: [
        {
          type: "p",
          text: "La mayoría de eléctricas tienen un barniz de poliuretano o poliéster bastante resistente. Algunas, sobre todo modelos antiguos o de gama alta, usan laca de nitrocelulosa, más delicada: reacciona con ciertos cauchos y vinilos, como los de algunos soportes y correas baratas, y puede mancharse o ablandarse en el punto de contacto.",
        },
        {
          type: "ul",
          items: [
            "Después de tocar, pasa microfibra seca por el cuerpo, la parte trasera del mástil y el puente.",
            "Para grasa y huellas, microfibra apenas húmeda o un limpiador para guitarras aplicado sobre el paño.",
            "En acabados mate o satinados, no frotes con pulidor: sacas brillo a parches.",
          ],
        },
        {
          type: "table",
          caption: "Cómo limpiar el diapasón según su madera",
          head: ["Diapasón", "Cómo reconocerlo", "Cómo limpiarlo"],
          rows: [
            [
              "Arce con barniz",
              "Claro y brillante, igual que el resto del mástil",
              "Paño apenas húmedo y secar. Sin aceite: no lo absorbe y queda pegajoso",
            ],
            [
              "Palo de rosa, ébano, pau ferro o similares",
              "Oscuro, mate, con el poro de la madera a la vista",
              "Paño húmedo, mugre junto a los trastes con un palillo de madera y, una o dos veces al año, unas gotas de aceite para diapasón retirando el exceso",
            ],
          ],
        },
      ],
    },
    {
      id: "trastes-y-cuerdas-electrica",
      heading: "Trastes y cuerdas",
      blocks: [
        {
          type: "p",
          text: "Las cuerdas de una eléctrica son delgadas y el sudor las oxida rápido. Sécalas después de tocar y cámbialas cuando suenen apagadas, se sientan ásperas o dejen de afinar en el traste 12; el paso a paso está en [cómo cambiar las cuerdas de la guitarra](/blog/como-cambiar-las-cuerdas-de-la-guitarra).",
        },
        {
          type: "p",
          text: "Aprovecha el cambio de cuerdas para revisar los trastes. Si están opacos o manchados, puedes pulirlos así:",
        },
        {
          type: "ol",
          items: [
            "Cubre las pastillas con cinta de enmascarar o con una bolsa plástica sujeta con cinta.",
            "Protege la madera con cinta de enmascarar a lado y lado de cada traste, dejando solo el metal a la vista.",
            "Pule traste por traste con un paño de pulir metales o un pulidor de trastes.",
            "Retira la cinta, limpia con microfibra y, si el diapasón no tiene barniz, aplica un poco de aceite.",
          ],
        },
        {
          type: "p",
          text: "¿Por qué tapar las pastillas? Porque sus imanes atraen cualquier partícula metálica, y la lana de acero suelta miles. Esas limaduras se pegan a los polos y producen ruidos. Si los trastes tienen surcos donde más tocas o las cuerdas trastean siempre en el mismo punto, eso ya no es limpieza: es nivelación o cambio de trastes.",
        },
      ],
    },
    {
      id: "pastillas-potenciometros-jack",
      heading: "Pastillas, potenciómetros y jack: ruidos y soluciones",
      blocks: [
        {
          type: "p",
          text: "Las pastillas se limpian con un pincel suave o microfibra seca, sin líquidos. Para los ruidos, esta tabla cubre los casos más comunes:",
        },
        {
          type: "table",
          caption: "Ruidos frecuentes en la guitarra eléctrica",
          head: ["Síntoma", "Causa probable", "Qué hacer"],
          rows: [
            [
              "Crujido o “raspado” al girar volumen o tono",
              "Polvo u óxido dentro del potenciómetro",
              "Girarlo de extremo a extremo varias veces; si sigue, limpiador de contactos electrónico o luthier",
            ],
            [
              "Chasquidos al mover el selector de pastillas",
              "Contactos sucios del selector",
              "Moverlo varias veces; si persiste, limpiador de contactos o luthier",
            ],
            [
              "Sonido que va y viene al mover el cable",
              "Cable dañado, o jack flojo o sucio",
              "Probar otro cable; si falla igual, revisar el jack",
            ],
            [
              "El jack gira o se hunde",
              "La tuerca se aflojó",
              "Apretarla sin dejar que el jack gire por dentro",
            ],
            [
              "Zumbido que baja al tocar las cuerdas o el puente",
              "Normal en muchas guitarras de bobina simple, o una conexión a tierra deficiente",
              "Alejarte de pantallas y luces; si es excesivo, luthier",
            ],
            [
              "Notas desafinadas u “onduladas” en los trastes altos",
              "Pastillas demasiado cerca de las cuerdas: el imán las atrae",
              "Bajar un poco la pastilla con sus tornillos",
            ],
          ],
        },
        {
          type: "p",
          text: "Con el jack flojo, sostén el jack por dentro de la cavidad (o con una llave del mismo tamaño) mientras aprietas la tuerca por fuera. Si solo giras la tuerca, el jack gira con ella, los cables soldados se tuercen y terminan soltándose.",
        },
        {
          type: "p",
          text: "Nunca uses lubricante multiuso en aerosol en los potenciómetros: no es un limpiador de contactos, deja residuo y atrae polvo. Si hay que abrir la cavidad o el golpeador, desconecta la guitarra y toma fotos antes de mover nada. Y si soldar no es lo tuyo, la electrónica es del luthier.",
        },
      ],
    },
    {
      id: "cables-y-amplificador",
      heading: "Cables y amplificador",
      blocks: [
        { type: "h3", text: "Cables" },
        {
          type: "ul",
          items: [
            "Enróllalos en círculos amplios, siguiendo la curva natural del cable, nunca alrededor del codo. La técnica de alternar una vuelta normal y una invertida, que usan los técnicos de sonido, evita nudos y alarga su vida.",
            "Desconecta tirando del conector, nunca del cable.",
            "No los pises ni los dobles en ángulo cerrado junto al conector: ahí es donde se rompen.",
            "Ten un cable de repuesto. Ante cualquier ruido, lo primero es cambiar de cable.",
          ],
        },
        { type: "h3", text: "Amplificador" },
        {
          type: "ol",
          items: [
            "Conecta la guitarra con el amplificador apagado o con el volumen en cero.",
            "Enciende y sube el volumen poco a poco.",
            "Al terminar, baja el volumen, apaga y solo entonces desconecta el cable. Desconectar con el equipo encendido produce un golpe fuerte que castiga el parlante.",
          ],
        },
        {
          type: "p",
          text: "Dale ventilación, sin encerrarlo en un mueble ni ponerle cosas encima, límpialo con paño seco y conéctalo a un regulador de voltaje. Si es de tubos (bulbos), usa el modo de espera si lo tiene, no lo muevas mientras está caliente y nunca lo enciendas sin el parlante conectado: puedes dañar el transformador de salida.",
        },
      ],
    },
    {
      id: "ajuste-basico-o-luthier",
      heading: "Ajuste básico en casa o visita al luthier",
      blocks: [
        {
          type: "table",
          caption: "Qué ajustes puedes hacer tú y cuáles no",
          head: ["Tarea", "¿En casa?", "Comentario"],
          rows: [
            ["Cambiar cuerdas y limpiar", "Sí", "Con cuidado extra si el puente es flotante"],
            ["Apretar tornillos de correa, clavijas y tuerca del jack", "Sí", "Sin forzar: un tornillo pasado se barre en la madera"],
            ["Subir o bajar pastillas", "Sí", "Cambios pequeños, un lado a la vez, comparando el volumen entre pastillas"],
            ["Ajustar el alma", "Con guía", "Giros de un octavo o un cuarto de vuelta; si está dura, no la fuerces"],
            ["Octavación (afinación en el traste 12)", "Con guía", "Se mueve la silleta de cada cuerda, con cuerdas nuevas y afinador"],
            ["Nivelar o cambiar trastes", "No", "Requiere herramientas y experiencia"],
            ["Soldaduras y cambio de pastillas", "No, salvo experiencia", "Un error deja la guitarra muda o con ruido"],
            ["Calibrar un puente flotante tipo Floyd Rose", "No, al principio", "Cada cuerda afecta a las demás; es fácil desajustarlo todo"],
          ],
        },
        {
          type: "p",
          text: "Para revisar la octavación necesitas un afinador preciso; puedes usar el [afinador de guitarra online](/herramientas/afinador/guitarra). Una buena calibración completa (alma, altura de cuerdas, octavación y pastillas) hace una diferencia enorme en lo fácil que es tocar. Hazla al comprar la guitarra, al cambiar de calibre de cuerdas y cuando notes que la comodidad cambió con el clima.",
        },
      ],
    },
    {
      id: "guardarla-y-transportarla",
      heading: "Dónde guardarla y cómo llevarla",
      blocks: [
        {
          type: "ul",
          items: [
            "En un soporte de piso firme o un colgador de pared; nunca recostada contra el amplificador, que vibra y la puede tumbar.",
            "Revisa los botones de la correa: si están flojos, la guitarra se cae mientras tocas de pie. Unos seguros de correa cuestan poco al lado de un clavijero partido.",
            "Para clase o ensayo, funda acolchada; para viajes o un bus lleno, mejor estuche rígido.",
            "Nunca en un carro al sol. En tierra caliente, calor y humedad oxidan puente, clavijas y cuerdas muy rápido; en Bogotá, los cambios de temporada mueven el mástil y la altura de las cuerdas.",
          ],
        },
        {
          type: "p",
          text: "Si estás empezando en la [guitarra eléctrica](/clases/guitarra-electrica), pídele a tu profe que revise tu equipo en las primeras clases: a veces lo que frena el avance no son los dedos, sino cuerdas muy altas o un cable que falla. Y si aún no la compras, te sirve [cómo elegir tu primera guitarra eléctrica](/blog/como-elegir-tu-primera-guitarra-electrica).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Por qué suena el potenciómetro de mi guitarra cuando lo giro?",
      answer:
        "Casi siempre es polvo u oxidación dentro del potenciómetro. Gíralo de extremo a extremo varias veces; si no mejora, se limpia con un limpiador de contactos electrónico o se reemplaza. No es grave, pero suele empeorar si lo ignoras.",
    },
    {
      question: "¿Cada cuánto se calibra una guitarra eléctrica?",
      answer:
        "Al comprarla, cuando cambias de calibre o tipo de cuerdas y cuando notas que cambió la altura de las cuerdas o la afinación. Para muchas personas eso es una o dos veces al año, más si viajan entre climas distintos.",
    },
    {
      question: "¿Puedo limpiar la guitarra eléctrica con alcohol?",
      answer:
        "No sobre el cuerpo ni el mástil: puede opacar o dañar el barniz, sobre todo si es de nitrocelulosa. Un paño de microfibra apenas húmedo o un limpiador específico para guitarras, aplicado sobre el paño, es suficiente.",
    },
    {
      question: "¿Qué hago si mi guitarra hace ruido solo con un cable?",
      answer:
        "Entonces el problema es el cable, no la guitarra. Revisa si falla al moverlo cerca de un conector: suele ser una soldadura rota ahí. Algunos cables se pueden reparar; si no, reemplázalo y guarda el nuevo bien enrollado.",
    },
  ],
  relatedCourseIds: ["guitarra-electrica"],
  relatedPostSlugs: [
    "como-cambiar-las-cuerdas-de-la-guitarra",
    "como-elegir-tu-primera-guitarra-electrica",
    "como-cuidar-un-bajo-electrico",
  ],
  cta: "clases",
};
