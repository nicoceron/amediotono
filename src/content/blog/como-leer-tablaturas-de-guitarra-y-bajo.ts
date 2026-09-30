import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-leer-tablaturas-de-guitarra-y-bajo",
  title: "Cómo leer tablaturas de guitarra y bajo",
  description:
    "Aprende a leer tablaturas de guitarra y bajo: qué es cada línea y número, símbolos como h, p, / y b, ejemplos prácticos y qué no te dice una tab.",
  excerpt:
    "En una tablatura cada línea es una cuerda y cada número un traste. Te explicamos cómo leerla en guitarra y bajo, sus símbolos más comunes y sus límites frente a la partitura.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo leer tablaturas de guitarra",
    "cómo leer tablaturas de bajo",
    "qué significa h y p en tablatura",
    "tablatura o partitura",
    "símbolos de tablatura guitarra",
    "tabs de guitarra para principiantes",
  ],
  intro: [
    "Una tablatura (o tab) te dice **dónde poner los dedos**: cada línea horizontal es una cuerda y cada número indica en qué traste pisarla. Se lee de izquierda a derecha, el 0 significa cuerda al aire y los números que aparecen uno encima de otro se tocan al mismo tiempo.",
    "Es el sistema más rápido para empezar a sacar canciones y riffs, pero tiene un gran límite: casi nunca muestra el ritmo. Por eso una tab se lee siempre con la grabación sonando al lado.",
  ],
  keyTakeaways: [
    "En la tablatura de guitarra la línea de arriba es la 1ª cuerda (Mi agudo) y la de abajo, la 6ª (Mi grave).",
    "En la de bajo de cuatro cuerdas, de arriba abajo: Sol, Re, La, Mi.",
    "Cada número es un traste; 0 es cuerda al aire; números apilados se tocan juntos.",
    "Los símbolos más comunes son h (hammer-on), p (pull-off), / y \\ (slides) y b (bend).",
    "La tab no indica ritmo ni digitación: escucha la canción y apóyate en la partitura cuando la haya.",
  ],
  sections: [
    {
      id: "lineas-y-numeros",
      heading: "Qué significa cada línea y cada número",
      blocks: [
        {
          type: "p",
          text: "El error más común al empezar es leer la tab al revés. La línea de **arriba** es la cuerda más **aguda** y la de abajo, la más grave. Imagina la guitarra acostada boca arriba sobre tus piernas: la cuerda gruesa queda más cerca de ti, abajo en tu campo de visión.",
        },
        {
          type: "table",
          caption: "Qué cuerda representa cada línea",
          head: ["Línea de la tab", "Guitarra (6 cuerdas)", "Bajo (4 cuerdas)"],
          rows: [
            ["1ª (arriba)", "1ª cuerda: Mi agudo (e)", "1ª cuerda: Sol (G)"],
            ["2ª", "2ª cuerda: Si (B)", "2ª cuerda: Re (D)"],
            ["3ª", "3ª cuerda: Sol (G)", "3ª cuerda: La (A)"],
            ["4ª", "4ª cuerda: Re (D)", "4ª cuerda: Mi (E), la más grave"],
            ["5ª", "5ª cuerda: La (A)", "—"],
            ["6ª (abajo)", "6ª cuerda: Mi grave (E)", "—"],
          ],
        },
        {
          type: "ul",
          items: [
            "Muchas tabs escriben la letra de cada cuerda al inicio de la línea; la \"e\" minúscula suele marcar el Mi agudo para distinguirlo del grave.",
            "En un bajo de cinco cuerdas aparece una línea más abajo, para el Si (B) grave.",
            "Un número de dos cifras, como 12, es un solo traste, no un 1 y un 2.",
            "Un acorde se ve como una columna de números. El Do mayor, por ejemplo, de arriba abajo: 0, 1, 0, 2, 3, y la 6ª cuerda sin número porque no se toca.",
          ],
        },
      ],
    },
    {
      id: "ejemplos",
      heading: "Dos ejemplos para leer ahora mismo",
      blocks: [
        {
          type: "p",
          text: "Aquí dibujamos cada tab como una tabla: cada fila es una cuerda y cada columna, un momento en el tiempo. El guion (–) significa que esa cuerda no se toca en ese momento. Primero, la escala de Do mayor en la guitarra, en primera posición:",
        },
        {
          type: "table",
          caption: "Tab de guitarra: escala de Do mayor",
          head: ["Cuerda", "1", "2", "3", "4", "5", "6", "7", "8"],
          rows: [
            ["e (1ª)", "–", "–", "–", "–", "–", "–", "–", "–"],
            ["B (2ª)", "–", "–", "–", "–", "–", "–", "0", "1"],
            ["G (3ª)", "–", "–", "–", "–", "0", "2", "–", "–"],
            ["D (4ª)", "–", "0", "2", "3", "–", "–", "–", "–"],
            ["A (5ª)", "3", "–", "–", "–", "–", "–", "–", "–"],
            ["E (6ª)", "–", "–", "–", "–", "–", "–", "–", "–"],
            ["Nota", "Do", "Re", "Mi", "Fa", "Sol", "La", "Si", "Do"],
          ],
        },
        {
          type: "p",
          text: "Ahora, un patrón clásico de bajo: fundamental, quinta y octava sobre La. Es la base de muchísimas líneas de bajo en rock, pop y música latina.",
        },
        {
          type: "table",
          caption: "Tab de bajo: fundamental, quinta y octava en La",
          head: ["Cuerda", "1", "2", "3", "4"],
          rows: [
            ["G (1ª)", "–", "–", "–", "–"],
            ["D (2ª)", "–", "–", "7", "–"],
            ["A (3ª)", "–", "7", "–", "7"],
            ["E (4ª)", "5", "–", "–", "–"],
            ["Nota", "La", "Mi", "La", "Mi"],
          ],
        },
        {
          type: "p",
          text: "En este patrón, pisa el traste 5 con el dedo 1 y los trastes 7 con el dedo 3 o el 4. Esa decisión, qué dedo usar, es justamente lo que la tab no te dice.",
        },
      ],
    },
    {
      id: "simbolos",
      heading: "Símbolos de técnica: h, p, /, b y compañía",
      blocks: [
        {
          type: "table",
          caption: "Símbolos más comunes en tablaturas",
          head: ["Símbolo", "Nombre", "Qué haces", "Ejemplo"],
          rows: [
            ["h", "Hammer-on (ligado ascendente)", "Tocas la primera nota y \"martillas\" otro dedo en un traste más agudo, sin volver a pulsar", "5h7"],
            ["p", "Pull-off (ligado descendente)", "Retiras el dedo tirando un poco de la cuerda para que suene la nota más grave", "7p5"],
            ["/", "Slide ascendente", "Deslizas el dedo hacia un traste más agudo sin soltar la cuerda", "5/7"],
            ["\\", "Slide descendente", "Deslizas el dedo hacia un traste más grave", "7\\5"],
            ["b", "Bend", "Empujas la cuerda para subir la nota hasta la indicada", "7b9"],
            ["r", "Release", "Sueltas el bend y vuelves a la nota original", "7b9r7"],
            ["~", "Vibrato", "Mueves la cuerda de forma repetida para que la nota ondule", "7~"],
            ["x", "Nota apagada", "Golpeas la cuerda sin dejarla sonar: un sonido percutido", "x"],
            ["PM", "Palm mute", "Apoyas el borde de la palma sobre las cuerdas, junto al puente", "PM----"],
            ["<12>", "Armónico natural", "Rozas la cuerda justo encima del traste 12 sin pisarla", "<12>"],
          ],
        },
        {
          type: "p",
          text: "En tablaturas de bajo con slap vas a encontrar T (golpe con el pulgar) y P (pop, tirón de la cuerda con el índice o el medio). Como la P también puede significar pull-off, revisa siempre la leyenda. Los símbolos cambian un poco entre sitios y programas.",
        },
      ],
    },
    {
      id: "leer-una-tab-nueva",
      heading: "Cómo leer una tab nueva, paso a paso",
      blocks: [
        {
          type: "ol",
          items: [
            "Mira el encabezado: afinación y cejilla. Si dice \"Drop D\" o \"medio tono abajo\", reafina antes de tocar; si dice \"Capo 2\", pon la cejilla en el traste 2. Normalmente los números se cuentan desde la cejilla.",
            "Afina el instrumento; para el bajo puedes usar el [afinador de bajo](/herramientas/afinador/bajo).",
            "Escucha la canción siguiendo la tab con el dedo, para ubicar cada frase.",
            "Toca un fragmento corto, de una o dos frases, hasta que salga sin mirar tanto.",
            "Saca el ritmo de la grabación: canta o tararea la parte y fíjate dónde caen las notas largas.",
            "Elige la digitación: en una posición, asigna un dedo por traste para no saltar con la mano.",
            "Practica con [metrónomo](/herramientas/metronomo) lento y sube la velocidad cuando salga limpio.",
          ],
        },
      ],
    },
    {
      id: "tablatura-vs-partitura",
      heading: "Tablatura vs. partitura: qué gana y qué pierde cada una",
      blocks: [
        {
          type: "table",
          caption: "Comparación entre tablatura y partitura",
          head: ["Aspecto", "Tablatura", "Partitura"],
          rows: [
            ["Dónde tocar", "Exacto: cuerda y traste", "Solo la nota; tú eliges la posición"],
            ["Ritmo", "Casi nunca, salvo tabs con figuras", "Siempre, con precisión"],
            ["Tiempo para aprenderla", "Minutos", "Semanas o meses de práctica"],
            ["Instrumentos", "Solo de trastes: guitarra, bajo, ukelele", "Cualquier instrumento y la voz"],
            ["Dinámicas y fraseo", "Casi no aparecen", "Sí aparecen"],
            ["Tocar con otros músicos", "Limitado", "Es el idioma común"],
          ],
        },
        {
          type: "p",
          text: "Lo ideal es manejar las dos: la tab para aprender rápido una canción, la partitura para entender la música y leer con cualquier músico. Si quieres dar ese paso, empieza por nuestra guía para [leer partituras desde cero](/blog/como-leer-partituras-guia-para-principiantes).",
        },
      ],
    },
    {
      id: "errores-comunes",
      heading: "Errores comunes al aprender con tablaturas",
      blocks: [
        {
          type: "ul",
          items: [
            "**Creer todo lo que dice la tab.** Muchas las suben aficionados y traen errores. Si algo no suena como la grabación, confía en tu oído.",
            "**Ignorar la afinación del encabezado.** Varias bandas de rock graban medio tono abajo; con afinación estándar, todo sonará \"casi\" bien.",
            "**Tocar todo con un solo dedo** porque la tab no indica digitación.",
            "**No aprender el ritmo.** Las notas correctas en el momento equivocado no son la canción.",
            "**Quedarse solo en la tab.** Te limita a las canciones que alguien ya transcribió.",
          ],
        },
        {
          type: "p",
          text: "Un profe de [guitarra eléctrica](/clases/guitarra-electrica) o de [bajo eléctrico](/clases/bajo-electrico) te ayuda a elegir digitaciones, corregir tabs dudosas y combinar tab y partitura según lo que quieras tocar. Si estás empezando en guitarra, complementa esta guía con los [acordes básicos](/blog/acordes-basicos-de-guitarra-para-principiantes).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Es malo aprender guitarra solo con tablaturas?",
      answer:
        "No es malo para empezar ni para tocar canciones, pero se queda corto: sin ritmo escrito dependes de la grabación, y sin partitura te cuesta tocar con otros músicos o presentarte a una carrera de música. Lo más completo es combinar ambas.",
    },
    {
      question: "¿Las tablaturas de ukelele se leen igual?",
      answer:
        "Sí, con cuatro líneas. En la afinación más común, de arriba abajo: La (A), Mi (E), Do (C) y Sol (G). La línea de arriba sigue siendo la cuerda más cercana al piso cuando tocas.",
    },
    {
      question: "¿Cómo saco el ritmo si la tab no lo indica?",
      answer:
        "Escucha la grabación por frases, tararéalas y cuenta el pulso con el pie. Algunas tabs incluyen figuras rítmicas debajo de los números; si las trae, aprende a leerlas, que son las mismas de la partitura.",
    },
    {
      question: "¿Qué significa \"afinación medio tono abajo\" en una tab?",
      answer:
        "Que todas las cuerdas se bajan un semitono: Mi♭, La♭, Re♭, Sol♭, Si♭, Mi♭ en guitarra. Los números de la tab se leen igual, pero la canción coincidirá con la grabación.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "guitarra-electrica", "bajo-electrico"],
  relatedPostSlugs: [
    "acordes-basicos-de-guitarra-para-principiantes",
    "como-leer-partituras-guia-para-principiantes",
    "como-afinar-la-guitarra",
  ],
  cta: "clases",
};
