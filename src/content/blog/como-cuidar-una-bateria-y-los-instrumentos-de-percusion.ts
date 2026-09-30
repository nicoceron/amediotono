import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-cuidar-una-bateria-y-los-instrumentos-de-percusion",
  title: "¿Cómo cuidar una batería y los instrumentos de percusión?",
  seoTitle: "Cómo cuidar una batería y la percusión: guía práctica",
  description:
    "Cuándo cambiar los parches, cómo afinar lo básico, cuidar platillos y herrajes, mantener cajón y congas, y por qué proteger tu oído al tocar batería.",
  excerpt:
    "Parches, platillos, herrajes, cajón y congas: cada parte de la percusión tiene su cuidado. Y hay uno que no se ve y es el más importante: tu oído.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo cuidar una batería",
    "cuándo cambiar los parches de la batería",
    "cómo afinar una batería",
    "cómo limpiar platillos",
    "cuidado de congas de cuero",
    "tapones para baterista",
  ],
  intro: [
    "Una batería se cuida revisando los parches y cambiándolos cuando pierden sonido o afinación, afinando de forma pareja en cada tensor, montando los platillos con fieltros y sin metal contra metal, y sin apretar de más ningún herraje. En la percusión de mano, como el cajón y las congas, lo que manda es la madera, el cuero y la tensión.",
    "Y hay algo que no está en el instrumento: tu oído. Tocar batería acústica sin protección, semana tras semana, puede dejar un daño que no tiene reversa.",
  ],
  keyTakeaways: [
    "Cambia un parche cuando tiene hundimientos, perdió el recubrimiento donde golpeas o ya no sostiene la afinación.",
    "Afina en estrella, con giros pequeños e iguales, y compara el sonido cerca de cada tensor.",
    "Los platillos van entre fieltros y con funda plástica en el eje: nunca metal contra metal ni apretados.",
    "Si tus congas son de cuero natural, baja un poco la tensión cuando vayan a estar guardadas.",
    "Usa protección auditiva al tocar batería acústica, incluso en sesiones cortas.",
  ],
  sections: [
    {
      id: "cuando-cambiar-los-parches",
      heading: "Cuándo cambiar los parches",
      blocks: [
        {
          type: "p",
          text: "No hay una fecha fija: depende de cuánto tocas, con qué fuerza y con qué baquetas. El parche de golpe del redoblante suele ser el primero en gastarse; los de resonancia, los de abajo, duran mucho más.",
        },
        {
          type: "table",
          caption: "Señales de un parche gastado",
          head: ["Lo que ves o escuchas", "Qué significa", "Qué hacer"],
          rows: [
            ["Hundimientos donde más golpeas", "El parche se estiró de forma irregular.", "Cambiarlo: ya no afina parejo."],
            ["El recubrimiento blanco se borró en el centro", "Desgaste por uso.", "Cambiarlo, sobre todo en el redoblante si usas escobillas."],
            ["Se desafina en cada canción", "Perdió elasticidad o está mal asentado.", "Revisar la afinación; si persiste, cambiarlo."],
            ["Suena opaco aunque lo afines", "Llegó al final de su vida útil.", "Cambiarlo."],
            ["Rotura o corte", "Daño directo.", "Cambiarlo antes de volver a tocar ese tambor."],
          ],
        },
        { type: "h3", text: "Cómo poner un parche nuevo" },
        {
          type: "ol",
          items: [
            "Afloja los tensores en estrella, retira el aro y el parche viejo, y limpia con un paño seco el borde del casco.",
            "Pon el parche nuevo centrado y el aro encima.",
            "Enrosca todos los tensores con los dedos hasta que toquen el aro, sin usar la llave.",
            "Presiona el centro del parche con la palma para asentarlo. Es normal escuchar algunos crujidos.",
            "Afina como se explica abajo.",
          ],
        },
        {
          type: "p",
          text: "Aprovecha el cambio para poner una gota de lubricante en la rosca de cada tensor: giran mejor y la afinación se vuelve más precisa.",
        },
      ],
    },
    {
      id: "afinacion-basica",
      heading: "Afinación básica de la batería",
      blocks: [
        {
          type: "p",
          text: "Afinar es tensar el parche de forma pareja. Al principio el objetivo no es una nota exacta, sino que el tambor suene igual cerca de cada tensor.",
        },
        {
          type: "ol",
          items: [
            "Con la llave de afinación, da el mismo giro a cada tensor (un cuarto o media vuelta) siguiendo un patrón en estrella, como cuando se aprietan las tuercas de una llanta.",
            "Golpea suave a unos tres centímetros de cada tensor y escucha. Si un punto suena más grave, dale un poco más a ese tensor.",
            "Sube de a poco hasta que el tambor suene limpio y con tono. Si te pasas, afloja un poco y vuelve a subir.",
            "Afina el parche de resonancia con el mismo método. La relación entre los dos parches cambia la duración y el carácter del sonido; vale la pena experimentarla con tu profe.",
          ],
        },
        {
          type: "p",
          text: "En el redoblante, la bordonera (las espirales metálicas de abajo) se ajusta con su perilla: lo justo para que suene definida, no tan apretada que ahogue el sonido. Suéltala con la palanca si vibra con otros sonidos del cuarto, y nunca apoyes el redoblante sobre ella.",
        },
        {
          type: "p",
          text: "Un error muy común es apretar mucho un solo tensor para quitar un armónico molesto: solo desbalanceas el parche. Revisa la afinación completa antes.",
        },
      ],
    },
    {
      id: "platillos",
      heading: "Platillos: montaje, golpe y limpieza",
      blocks: [
        {
          type: "ul",
          items: [
            "Móntalos con un fieltro abajo y otro arriba, y con la funda plástica en el eje del soporte. Un platillo que roza la rosca metálica se desgasta en el agujero central y termina rajándose.",
            "No aprietes la mariposa: el platillo debe poder moverse con libertad. Apretado, vibra mal y es más fácil que se raje.",
            "Golpea con un ángulo rasante, no de filo y en perpendicular contra el borde; ese golpe es una causa típica de platillos rajados.",
            "Transpórtalos en una funda para platillos, con separadores entre uno y otro.",
          ],
        },
        {
          type: "p",
          text: "Sobre la limpieza hay opiniones distintas entre bateristas. Los platillos de acabado tradicional se oscurecen con el tiempo y muchos prefieren ese sonido; un paño seco para las huellas es suficiente. Si decides limpiarlos, usa un producto hecho para platillos y sigue la dirección de los surcos. Nunca uses brillametal, lana de acero ni esponjas abrasivas: rayan, pueden borrar el logo y cambian el sonido.",
        },
      ],
    },
    {
      id: "herrajes-pedales-y-cascos",
      heading: "Herrajes, pedales y cascos",
      blocks: [
        {
          type: "ul",
          items: [
            "Aprieta tornillos y mariposas lo justo para que no se muevan. Apretarlos de más barre las roscas.",
            "Revisa cada tanto las tuercas de los soportes y del pedal de hi-hat: con la vibración se aflojan.",
            "Cuando el pedal de bombo chirríe, pon una gota de aceite liviano en ejes y resortes, y limpia el exceso.",
            "Cambia el mazo del pedal si el fieltro o el plástico se gastó: termina rompiendo el parche del bombo.",
            "Usa un tapete debajo de la batería: evita que el bombo se desplace y protege el piso.",
            "Limpia el cromo con un paño seco, sobre todo en clima húmedo o cerca del mar, donde se oxida rápido.",
            "No dejes los cascos al sol ni junto a una ventana: el recubrimiento plástico puede formar burbujas y la madera sufre con el calor.",
          ],
        },
        {
          type: "p",
          text: "Revisa también las baquetas. Cuando están astilladas, cámbialas: las astillas pueden saltar y además rayan parches y platillos.",
        },
      ],
    },
    {
      id: "cajon-congas-y-tambores",
      heading: "Cajón, congas y tambores de cuero",
      blocks: [
        { type: "h3", text: "El cajón" },
        {
          type: "ul",
          items: [
            "Está hecho para sentarse encima, no para pararse en él ni para brincar sentado.",
            "La tapa delantera, la que se golpea, es delgada: quítate anillos y relojes.",
            "Si tiene tornillos en las esquinas superiores de la tapa, aflojarlos un poco da un golpe más seco; no los quites ni los fuerces.",
            "No lo dejes en el piso mojado ni al sol.",
          ],
        },
        { type: "h3", text: "Congas y bongós" },
        {
          type: "p",
          text: "Un parche de cuero natural reacciona al clima: en ambiente seco se tensa y en ambiente húmedo se afloja. Por eso muchos percusionistas bajan un poco la tensión al terminar, sobre todo si las congas van a quedar guardadas por días o viajan a un clima más seco. Afina girando todas las llaves de forma pareja y en el mismo orden. Los parches sintéticos son más estables y una buena opción para tocar en exteriores.",
        },
        { type: "h3", text: "Tambores tradicionales" },
        {
          type: "p",
          text: "Tambores colombianos como el tambor alegre o el llamador suelen tensarse con cuerdas y cuñas. Cuando no los uses, conviene bajar un poco la tensión, guardarlos en un lugar seco y ventilado y proteger el cuero del sol directo. Si el cuero se rompe, un artesano de percusión puede cambiarlo.",
        },
      ],
    },
    {
      id: "proteccion-auditiva",
      heading: "Protección auditiva: el cuidado más importante",
      blocks: [
        {
          type: "p",
          text: "Una batería acústica en un cuarto pequeño suena lo bastante fuerte como para afectar el oído con la exposición repetida, y el daño por ruido suele ser permanente. El zumbido en los oídos después de tocar es una señal de que te expusiste de más.",
        },
        {
          type: "ul",
          items: [
            "Usa tapones para músicos, con filtro: bajan el volumen de forma pareja y sigues escuchando con claridad. Los de espuma también protegen, aunque apagan más los agudos.",
            "Si tocas con audífonos, mantén el volumen moderado; subirlo para tapar la batería acústica es un error común.",
            "Para trabajar técnica, un pad de práctica y el [metrónomo](/herramientas/metronomo) cubren buena parte del estudio sin ruido.",
            "Con niños, la protección auditiva va desde la primera clase; lo tratamos en la [guía de batería para niños](/blog/bateria-para-ninos-guia-para-padres).",
          ],
        },
        {
          type: "callout",
          title: "Tu oído no tiene repuesto",
          text: "Un parche se cambia y un platillo rajado se reemplaza; el oído no. Guarda los tapones en la funda de las baquetas para que nunca se queden en casa. Si notas zumbido que no se va o sensación de oído tapado, consulta a un especialista en audición.",
        },
      ],
    },
    {
      id: "errores-que-danan-la-bateria",
      heading: "Errores que dañan la batería",
      blocks: [
        {
          type: "ul",
          items: [
            "Afinar apretando solo el tensor que suena raro.",
            "Tocar con baquetas astilladas o con el mazo del pedal gastado.",
            "Montar platillos sin fieltros o sin funda en el eje.",
            "Arrastrar la batería armada para moverla: se desajustan los herrajes y se rayan los cascos.",
            "Guardar el cajón o las congas junto a una ventana o en un cuarto húmedo.",
          ],
        },
        {
          type: "p",
          text: "Si estás armando tu primer set, en [cómo elegir una batería o un cajón para empezar](/blog/como-elegir-una-bateria-o-cajon-para-empezar) comparamos opciones para apartamento. En las [clases de percusión](/clases/percusion), tu profe te enseña a afinar y montar tu instrumento desde las primeras semanas.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cada cuánto se cambian los parches de la batería?",
      answer:
        "Depende del uso. Con práctica diaria, el parche de golpe del redoblante puede necesitar cambio varias veces al año, mientras que los de resonancia duran años. Guíate por las señales: hundimientos, recubrimiento gastado y afinación que no se sostiene.",
    },
    {
      question: "¿Cómo sé si un platillo está rajado?",
      answer:
        "Revisa el borde y la zona del agujero central con buena luz. Una rajadura se ve como una línea fina, y el platillo suele sonar con un zumbido o apagarse rápido. Si la encuentras, deja de tocarlo con fuerza y consulta antes de que avance.",
    },
    {
      question: "¿La batería electrónica necesita cuidados?",
      answer:
        "Sí, aunque distintos: pads limpios y secos, cables y conectores revisados, el módulo lejos de golpes y bebidas, un protector de voltaje y audífonos a volumen moderado.",
    },
    {
      question: "¿Es normal que me zumben los oídos después de tocar?",
      answer:
        "Es frecuente, pero no es inofensivo: indica que la exposición fue excesiva. Usa protección auditiva y, si el zumbido persiste, consulta a un especialista.",
    },
  ],
  relatedCourseIds: ["percusion"],
  relatedPostSlugs: [
    "como-elegir-una-bateria-o-cajon-para-empezar",
    "bateria-o-percusion-latina",
    "bateria-para-ninos-guia-para-padres",
  ],
  cta: "clases",
};
