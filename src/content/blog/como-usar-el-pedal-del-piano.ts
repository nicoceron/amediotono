import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-usar-el-pedal-del-piano",
  title: "Cómo usar el pedal del piano: guía para principiantes",
  description:
    "Cómo usar el pedal del piano: resonancia o sustain, pedal sincopado, una corda y sostenuto, cómo se escriben en la partitura, errores y piano digital.",
  excerpt:
    "El pedal derecho sostiene el sonido; el secreto está en cambiarlo justo después de tocar el acorde nuevo. Te explicamos los tres pedales, cómo se escriben y los errores más comunes.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo usar el pedal del piano",
    "pedal de resonancia piano",
    "pedal sincopado piano",
    "para qué sirven los pedales del piano",
    "qué significa Ped. en una partitura",
    "pedal sustain piano digital",
  ],
  intro: [
    "El pedal más importante del piano es el de la derecha, el de resonancia o sustain: al pisarlo se levantan todos los apagadores y las notas siguen sonando aunque sueltes las teclas. La técnica básica es el **pedal sincopado**: tocas el acorde nuevo y, justo después, levantas el pie y vuelves a pisar, para que el sonido nuevo quede sostenido sin mezclarse con el anterior.",
    "El pedal izquierdo, una corda, suaviza y cambia el color del sonido. El del medio depende del piano: en uno de cola es el sostenuto, y en muchos verticales es una sordina para estudiar. Aquí te explicamos cómo pisarlos, cómo aparecen en la partitura, los errores más comunes y qué tener en cuenta en un piano digital.",
  ],
  keyTakeaways: [
    "El pedal derecho levanta todos los apagadores: las notas siguen sonando al soltar las teclas.",
    "En el pedal sincopado, primero bajan las manos y después el pie sube y vuelve a bajar.",
    "El talón se queda apoyado en el piso y el pedal se pisa con la parte delantera del pie, sin golpearlo.",
    "En la partitura, “Ped.” indica pisar y el asterisco, o el final del corchete, indica soltar.",
    "El pedal se cambia cuando cambia la armonía, y el que decide es el oído, no el pie.",
  ],
  sections: [
    {
      id: "los-tres-pedales",
      heading: "Los tres pedales y qué hace cada uno",
      blocks: [
        {
          type: "table",
          caption: "Pedales del piano según el tipo de instrumento",
          head: ["Pedal", "Piano de cola", "Piano vertical", "Piano digital"],
          rows: [
            ["Derecho: resonancia o sustain", "Levanta todos los apagadores; las cuerdas vibran libres y resuenan entre sí", "Igual que en el de cola", "Simula el efecto; en muchos modelos admite medio pedal"],
            ["Izquierdo: una corda", "Desplaza el mecanismo para que los martillos golpeen menos cuerdas y con otra zona del fieltro: sonido más suave y velado", "Acerca los martillos a las cuerdas: suena más suave, con poco cambio de color", "Simula un sonido más suave"],
            ["Central", "Sostenuto: sostiene solo las notas que estaban presionadas al pisarlo", "Suele ser una sordina de estudio: una tela entre martillos y cuerdas que baja mucho el volumen", "Depende del modelo: sostenuto u otra función"],
          ],
        },
        {
          type: "p",
          text: "Al pedal derecho también le dicen “pedal fuerte”, pero el nombre engaña: no sube el volumen, sino que deja sonar las cuerdas y su resonancia. Por eso una pieza con mucho pedal puede sonar más grande, y también más confusa si se usa mal.",
        },
      ],
    },
    {
      id: "como-pisar-el-pedal",
      heading: "Cómo pisar: posición del pie y primeros pasos",
      blocks: [
        {
          type: "ol",
          items: [
            "**Talón en el piso**, más o menos alineado con el pedal. El talón es el punto de apoyo; nunca queda en el aire.",
            "**Parte delantera del pie sobre el pedal**, a pocos centímetros del extremo. Así controlas la profundidad con un movimiento pequeño del tobillo.",
            "**Contacto permanente.** Al soltar, el pie sube con el pedal, pero no se despega de él. Si lo levantas, el pedal hace ruido al volver y pierdes precisión.",
            "**Encuentra el punto de acción.** El pedal tiene un pequeño recorrido libre antes de que los apagadores empiecen a subir. Aprende dónde está para no perder tiempo en ese tramo.",
            "**El pie izquierdo**, apoyado cerca del pedal izquierdo, listo si lo necesitas.",
          ],
        },
        {
          type: "p",
          text: "Antes de tocar, dos minutos de preparación: con el [metrónomo](/herramientas/metronomo) lento, pisa en el tiempo 1 y suelta en el 3, sin tocar teclas y sin hacer ruido. Luego toca un acorde grave, pisa, suelta las manos y escucha cómo sigue sonando; suelta el pie y escucha cómo se apaga. Esa escucha es la base de todo lo demás. La postura del resto del cuerpo, banca incluida, la explicamos en [posición correcta de las manos en el piano](/blog/posicion-correcta-de-las-manos-en-el-piano).",
        },
      ],
    },
    {
      id: "pedal-sincopado",
      heading: "El pedal sincopado, paso a paso",
      blocks: [
        {
          type: "p",
          text: "Si levantas el pie antes de tocar el acorde nuevo, queda un hueco de silencio. Si lo levantas mucho después, los dos acordes se mezclan. El pedal sincopado resuelve eso: el pie cambia justo después de que las manos tocan, desfasado de ellas, como un contratiempo.",
        },
        {
          type: "table",
          caption: "El orden de los movimientos",
          head: ["Momento", "Manos", "Pie"],
          rows: [
            ["Tiempo 1", "Tocan el acorde nuevo y lo sostienen", "Sube en el mismo instante: se limpia el acorde anterior"],
            ["Justo después (“y”)", "Siguen sosteniendo el acorde", "Vuelve a bajar y atrapa el acorde nuevo"],
            ["Resto del compás", "Pueden soltar o tocar otras notas del mismo acorde", "Se queda abajo hasta el siguiente cambio"],
          ],
        },
        { type: "h3", text: "Dos ejercicios para automatizarlo" },
        {
          type: "ul",
          items: [
            "**Escala con un solo dedo.** Toca Do-Re-Mi-Fa-Sol solo con el dedo 3, una nota por tiempo, y une las notas únicamente con el pedal, cambiándolo en cada una. Si queda un hueco, el pie subió antes; si dos notas se mezclan, bajó tarde o no subió del todo.",
            "**Progresión Do – Fa – Sol – Do.** La izquierda toca la fundamental y la derecha el acorde, en redondas. Cambia el pedal en cada acorde diciendo en voz alta “toco… pie arriba-abajo”.",
          ],
        },
        {
          type: "p",
          text: "Existe también el pedal directo, que baja al mismo tiempo que las manos, para dar resonancia a un acorde aislado o a un acento, y el pedal anticipado, que se pisa antes de tocar para que la primera nota ya suene con resonancia. Aparecen más adelante; el sincopado es el que vas a usar la mayor parte del tiempo.",
        },
      ],
    },
    {
      id: "pedal-en-la-partitura",
      heading: "Cómo aparece el pedal en la partitura",
      blocks: [
        {
          type: "table",
          caption: "Indicaciones de pedal más comunes",
          head: ["Indicación", "Qué significa"],
          rows: [
            ["Ped.", "Pisa el pedal derecho"],
            ["Asterisco (✱)", "Suelta el pedal derecho"],
            ["Línea horizontal bajo el pentagrama", "Pedal pisado mientras dura la línea; donde termina, se suelta"],
            ["Pico o muesca en la línea (∧)", "Suelta y vuelve a pisar enseguida: un cambio de pedal"],
            ["con Ped. / senza Ped.", "Con pedal, según tu criterio / sin pedal"],
            ["simile", "Sigue pedaleando igual que en los compases anteriores"],
            ["una corda (u.c.) / tre corde (t.c.)", "Pisa el pedal izquierdo / suéltalo"],
            ["Sost. Ped.", "Pedal central (sostenuto)"],
            ["½ Ped.", "Medio pedal"],
          ],
        },
        {
          type: "p",
          text: "Que no haya indicaciones no siempre significa “sin pedal”. En muchas obras románticas el compositor lo dejó al criterio del intérprete. En Bach casi nunca verás marcas, porque los instrumentos de teclado para los que escribió la mayor parte de su música no tenían pedal de resonancia; muchos profes piden usarlo poco o nada en esas obras, al menos al principio.",
        },
      ],
    },
    {
      id: "medio-pedal-una-corda-y-sostenuto",
      heading: "Medio pedal, una corda y sostenuto: cuándo se usan",
      blocks: [
        {
          type: "ul",
          items: [
            "**Medio pedal:** pisas solo una parte del recorrido, de modo que los apagadores rozan las cuerdas sin apagarlas del todo. Limpia parte del sonido y deja resonando otra parte. Se usa en repertorio romántico e impresionista, y exige un oído atento.",
            "**Una corda:** no es un botón de volumen. Sirve para cambiar el color en pasajes suaves y misteriosos. Un error frecuente es usarlo para no tener que controlar el sonido suave con los dedos; tu profe te va a pedir primero que toques suave sin él.",
            "**Sostenuto:** permite dejar sonando, por ejemplo, una nota grave larga mientras las manos tocan notas cortas arriba sin que se mezclen. Aparece sobre todo en repertorio de los siglos XX y XXI y en algunos arreglos.",
          ],
        },
      ],
    },
    {
      id: "errores-comunes-pedal",
      heading: "Errores comunes con el pedal",
      blocks: [
        {
          type: "table",
          caption: "Cómo suena y cómo corregirlo",
          head: ["Error", "Cómo suena", "Corrección"],
          rows: [
            ["Pie y manos al mismo tiempo en cada cambio", "Huecos o cortes entre acordes", "Pedal sincopado: primero manos, después pie"],
            ["Dejar el pedal pisado muchos compases", "Una mancha donde las armonías se mezclan", "Cambia el pedal en cada cambio de acorde"],
            ["Usar el pedal para tapar un mal legato", "Suena ligado, pero la digitación no existe", "Estudia la pieza sin pedal hasta que los dedos liguen solos"],
            ["Golpear el pedal o levantar el pie", "Un “clac” mecánico en medio de la música", "Contacto permanente y movimiento corto"],
            ["Talón en el aire", "Pierna cansada y cambios imprecisos", "Talón apoyado; solo se mueve el tobillo"],
            ["Mismo pedal en cualquier piano o sala", "Demasiado turbio en una sala con eco, seco en una sala apagada", "Ajusta la profundidad y los cambios a lo que escuchas"],
          ],
        },
        {
          type: "callout",
          title: "Estudia primero sin pedal",
          text: "Aprende las notas, la digitación y el ritmo sin pedal, y súmalo al final. Si la pieza solo suena bien con pedal, lo más probable es que el pedal esté escondiendo algo que las manos todavía no hacen.",
        },
      ],
    },
    {
      id: "pedal-en-piano-digital",
      heading: "El pedal en un piano digital o un teclado",
      blocks: [
        {
          type: "ul",
          items: [
            "**Pedal tipo interruptor:** el pedalito cuadrado que viene con muchos teclados solo tiene dos estados, pisado o suelto, y suele deslizarse por el piso. Sirve para aprender el pedal sincopado, no el medio pedal.",
            "**Pedal tipo piano:** tiene la forma y el recorrido de un pedal real, es más estable y, si el instrumento lo admite, permite graduar la profundidad.",
            "**Si funciona al revés** (suena sostenido cuando lo sueltas), apaga el instrumento, revisa que el pedal esté conectado y enciéndelo sin pisarlo. Algunos pedales tienen un interruptor de polaridad.",
            "**Que no se mueva:** un tapete antideslizante o una base fija evita que el pedal se aleje mientras tocas.",
          ],
        },
        {
          type: "p",
          text: "Otro detalle técnico es la polifonía: con el pedal pisado se acumulan muchas notas, y los instrumentos más básicos empiezan a cortar las primeras. Lo explicamos en [piano digital o teclado](/blog/piano-digital-o-teclado-diferencias). El pedal suele llegar hacia el final del primer año o en el segundo, como contamos en [cuánto tiempo toma aprender piano](/blog/cuanto-tiempo-toma-aprender-piano); cuando llegue, un profe de [piano](/clases/piano) corrige en una sola clase lo que a solas cuesta semanas escuchar.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuándo se empieza a usar el pedal del piano?",
      answer:
        "Cuando las manos ya tocan juntas con cierta soltura, porque el pie es una tercera “mano” que hay que coordinar. En muchos casos aparece hacia el final del primer año, con las primeras piezas que lo piden.",
    },
    {
      question: "¿Qué pie se usa para cada pedal?",
      answer:
        "El derecho para el pedal de resonancia y el izquierdo para el una corda. El central se suele pisar con el derecho, aunque cuando ese pie está ocupado con el de resonancia, algunos pianistas usan el izquierdo.",
    },
    {
      question: "¿Qué significa el asterisco debajo de las notas?",
      answer:
        "Indica que sueltes el pedal de resonancia, que se había pisado donde aparece la indicación “Ped.”. En ediciones modernas es más común ver una línea con cortes, donde el final de la línea o cada muesca marcan cuándo soltar.",
    },
    {
      question: "¿Puedo aprender a usar el pedal con el pedalito de un teclado?",
      answer:
        "Sí, para lo básico: el pedal sincopado se aprende igual. Lo que no vas a poder practicar es el medio pedal, y el pedal pequeño se desliza con facilidad. Si ya tocas piezas con pedal, un pedal tipo piano vale la pena.",
    },
  ],
  relatedCourseIds: ["piano"],
  relatedPostSlugs: [
    "piano-digital-o-teclado-diferencias",
    "canciones-faciles-para-piano-principiantes",
    "cuanto-tiempo-toma-aprender-piano",
  ],
  cta: "clases",
};
