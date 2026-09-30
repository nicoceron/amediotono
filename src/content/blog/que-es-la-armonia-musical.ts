import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "que-es-la-armonia-musical",
  title: "¿Qué es la armonía musical? Acordes, funciones y progresiones",
  seoTitle: "Qué es la armonía musical: acordes y funciones",
  description:
    "La armonía estudia los acordes y cómo se encadenan. Aprende tríadas, las funciones de tónica, subdominante y dominante, y cómo analizar una canción.",
  excerpt:
    "La armonía es lo que suena debajo de la melodía: acordes que reposan, se mueven o generan tensión. Te explicamos tríadas, funciones, progresiones y un método para analizar canciones.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "qué es la armonía musical",
    "tónica subdominante y dominante",
    "funciones armónicas",
    "progresiones de acordes más usadas",
    "cómo analizar una canción armónicamente",
    "qué es una tríada",
  ],
  intro: [
    "La armonía es la parte de la música que estudia las notas que suenan al mismo tiempo, los **acordes**, y la forma en que se encadenan, las **progresiones**. Si la melodía es lo que cantas, la armonía es lo que la guitarra o el piano tocan por debajo.",
    "En la música tonal, cada acorde cumple una función respecto a un centro llamado tónica: hay acordes de **reposo** (tónica), de **movimiento** (subdominante) y de **tensión** (dominante). Entender esas tres funciones es la llave para analizar canciones, sacarlas de oído y componer.",
  ],
  keyTakeaways: [
    "Un acorde básico, o tríada, se forma apilando terceras: fundamental, tercera y quinta.",
    "Hay cuatro tríadas: mayor, menor, disminuida y aumentada; la tercera decide si es mayor o menor.",
    "Tónica (I) es reposo, subdominante (IV) es movimiento y dominante (V) es tensión que pide volver.",
    "La dominante genera tensión porque contiene la sensible, la nota que quiere subir medio tono a la tónica.",
    "Para analizar una canción: encuentra la tónica, pasa los acordes a números romanos y marca sus funciones.",
  ],
  sections: [
    {
      id: "melodia-ritmo-y-armonia",
      heading: "Melodía, ritmo y armonía: qué es cada cosa",
      blocks: [
        {
          type: "p",
          text: "La melodía es una sucesión de notas en el tiempo: se lee “en horizontal”. La armonía es la dimensión “vertical”: qué notas suenan juntas en cada momento y cómo cambia ese bloque de sonido. El ritmo organiza ambas en el tiempo.",
        },
        {
          type: "p",
          text: "Si cantas “Cumpleaños feliz” sola, tienes melodía. Si alguien la acompaña con tres acordes en la guitarra, aparece la armonía, y la misma melodía empieza a sonar a pregunta, a respuesta o a final. Piano, guitarra y tiple son instrumentos armónicos porque pueden tocar acordes; un violín o una flauta participan en la armonía a través de arpegios o cuando tocan junto a otros instrumentos.",
        },
      ],
    },
    {
      id: "acordes-y-triadas",
      heading: "El acorde: tres notas apiladas por terceras",
      blocks: [
        {
          type: "p",
          text: "La tríada, el acorde más básico, se construye con una nota **fundamental**, su **tercera** y su **quinta**. El tipo de tercera y de quinta define su color:",
        },
        {
          type: "table",
          caption: "Las cuatro tríadas, construidas sobre Do",
          head: ["Tríada", "Construcción desde la fundamental", "Notas", "Cifrado", "Carácter"],
          rows: [
            ["Mayor", "3ª mayor + 5ª justa", "Do – Mi – Sol", "C", "Estable, luminoso"],
            ["Menor", "3ª menor + 5ª justa", "Do – Mi♭ – Sol", "Cm", "Estable, más oscuro"],
            ["Disminuida", "3ª menor + 5ª disminuida", "Do – Mi♭ – Sol♭", "Cdim o C°", "Tensa, inestable"],
            ["Aumentada", "3ª mayor + 5ª aumentada", "Do – Mi – Sol♯", "Caug o C+", "Suspendida, extraña"],
          ],
        },
        {
          type: "p",
          text: "Si le sumas otra tercera encima obtienes un acorde de séptima. El más importante es el de **séptima de dominante**: Sol7 = Sol – Si – Re – Fa. Para repasar qué es una tercera o una quinta, mira [qué es un intervalo musical](/blog/que-es-un-intervalo-musical).",
        },
      ],
    },
    {
      id: "funciones-armonicas",
      heading: "Tónica, subdominante y dominante: las tres funciones",
      blocks: [
        {
          type: "p",
          text: "Si construyes una tríada sobre cada nota de la escala de Do mayor, usando solo notas de esa escala, obtienes siete acordes. Cada uno se nombra con un número romano según el grado de la escala donde nace, y cumple una de tres funciones:",
        },
        {
          type: "table",
          caption: "Los acordes de Do mayor y su función",
          head: ["Grado", "Acorde", "Tipo", "Función", "Sensación"],
          rows: [
            ["I", "Do", "Mayor", "Tónica", "Reposo, “estar en casa”"],
            ["ii", "Rem", "Menor", "Subdominante", "Prepara el camino hacia la dominante"],
            ["iii", "Mim", "Menor", "Tónica (débil)", "Reposo ambiguo, poco usado como final"],
            ["IV", "Fa", "Mayor", "Subdominante", "Alejarse de casa, movimiento"],
            ["V", "Sol o Sol7", "Mayor", "Dominante", "Tensión que pide volver a la tónica"],
            ["vi", "Lam", "Menor", "Tónica (sustituta)", "Reposo con color triste"],
            ["vii°", "Si°", "Disminuido", "Dominante", "Tensión, como una V incompleta"],
          ],
        },
        {
          type: "p",
          text: "¿Por qué la dominante “jala” hacia la tónica? Porque contiene la **sensible**, el séptimo grado (Si en Do mayor), que está a medio tono de la tónica y tiende a subir hacia ella. En Sol7, además, Si y Fa forman un tritono, el intervalo más inestable: al resolver, el Si sube a Do y el Fa baja a Mi, y la tensión se convierte en reposo.",
        },
        {
          type: "p",
          text: "En tonalidad menor pasa lo mismo, con un detalle: para que la dominante tenga sensible, se sube el séptimo grado. En La menor, el V suele ser Mi mayor (con Sol♯) y no Mim. Es la razón de ser de la escala menor armónica, que explicamos en [escalas mayores y menores](/blog/escalas-mayores-y-menores-explicadas).",
        },
      ],
    },
    {
      id: "cadencias",
      heading: "Cadencias: cómo terminan las frases",
      blocks: [
        {
          type: "p",
          text: "Una cadencia es la fórmula de acordes que cierra una frase, igual que la puntuación cierra una oración:",
        },
        {
          type: "table",
          caption: "Las cuatro cadencias básicas, en Do mayor",
          head: ["Cadencia", "Acordes", "Efecto"],
          rows: [
            ["Auténtica o perfecta", "V – I (Sol – Do)", "Punto final: conclusión clara"],
            ["Plagal", "IV – I (Fa – Do)", "Final suave, el “amén” de los himnos"],
            ["Semicadencia", "Termina en V (… – Sol)", "Coma o pregunta: la frase queda abierta"],
            ["Rota o evitada", "V – vi (Sol – Lam)", "Sorpresa: esperabas reposo y llega otro color"],
          ],
        },
      ],
    },
    {
      id: "progresiones-comunes",
      heading: "Progresiones comunes que vas a reconocer",
      blocks: [
        {
          type: "table",
          caption: "Progresiones en Do mayor (y una en La menor)",
          head: ["Progresión", "En Do", "Dónde la oyes"],
          rows: [
            ["I – IV – V", "Do – Fa – Sol", "Rock and roll, música popular, “La Bamba”"],
            ["I – V – vi – IV", "Do – Sol – Lam – Fa", "“Let It Be” y muchísimo pop"],
            ["I – vi – IV – V", "Do – Lam – Fa – Sol", "“Stand by Me” y las baladas de los cincuenta"],
            ["ii – V – I", "Rem7 – Sol7 – Do", "Jazz, bolero, bossa nova"],
            ["i – VII – VI – V", "Lam – Sol – Fa – Mi", "“Hit the Road Jack”, el flamenco (cadencia andaluza)"],
            ["Blues de 12 compases", "Do7 (4) – Fa7 (2) – Do7 (2) – Sol7 – Fa7 – Do7 (2)", "Blues, rock, jazz"],
          ],
        },
        {
          type: "p",
          text: "Fíjate en que casi todas giran alrededor del mismo viaje: salir de la tónica, moverse con la subdominante, tensar con la dominante y volver. Para encontrar estos acordes en cualquier otra tonalidad, usa el [círculo de quintas](/blog/circulo-de-quintas-explicado); si tocas guitarra, las primeras cuatro salen con los [acordes básicos](/blog/acordes-basicos-de-guitarra-para-principiantes).",
        },
      ],
    },
    {
      id: "como-analizar-una-cancion",
      heading: "Cómo empezar a analizar canciones",
      blocks: [
        {
          type: "ol",
          items: [
            "Elige una canción sencilla que conozcas y consigue su cifrado.",
            "Encuentra la tónica: el acorde donde la canción descansa, casi siempre el último y muchas veces el primero.",
            "Escribe el número romano de cada acorde según su lugar en la escala de esa tónica.",
            "Marca encima T, S o D y busca las cadencias al final de cada frase.",
            "Encierra los acordes que no pertenecen a la tonalidad y mira hacia dónde van: si un acorde mayor o con séptima resuelve una quinta abajo, probablemente es una **dominante secundaria**, la dominante de otro acorde.",
            "Toca la progresión en otra tonalidad. Si la reconoces en números, la entendiste.",
          ],
        },
        { type: "h3", text: "Un ejemplo: “Cumpleaños feliz” en Do" },
        {
          type: "ul",
          items: [
            "**Primera frase:** va de Do (I) a Sol (V). Termina en la dominante, así que queda abierta: una semicadencia.",
            "**Segunda frase:** va de Sol (V) a Do (I). Cierra: cadencia auténtica.",
            "**Tercera frase:** Do, muchas veces convertido en Do7, que lleva a Fa (IV). Ese Do7 es la dominante de Fa: una dominante secundaria.",
            "**Cuarta frase:** pasa por Sol (V) y cierra en Do (I).",
          ],
        },
        {
          type: "p",
          text: "Con esas herramientas ya puedes leer la mayoría de canciones populares. En las clases de [teoría musical](/clases/teoria-musical), de piano o de guitarra, la armonía se trabaja tocando: primero con tres acordes y luego con canciones cada vez más ricas.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es la diferencia entre armonía y acorde?",
      answer:
        "Un acorde es un conjunto de notas que suenan juntas. La armonía es el sistema completo: cómo se forman los acordes, qué función cumplen y cómo se encadenan unos con otros a lo largo de una obra.",
    },
    {
      question: "¿Se puede tocar música sin saber armonía?",
      answer:
        "Sí, mucha gente toca de oído o con cifrados sin saber teoría. Pero entender la armonía te permite memorizar más rápido, transportar, improvisar y sacar canciones de oído, porque dejas de ver acordes sueltos y empiezas a ver patrones.",
    },
    {
      question: "¿Qué instrumento es mejor para aprender armonía?",
      answer:
        "El piano, porque ves todas las notas en orden y puedes tocar acordes con una mano y melodía con la otra. La guitarra y el tiple también son muy buenos para entenderla desde los acordes y el acompañamiento.",
    },
    {
      question: "¿Qué es una dominante secundaria?",
      answer:
        "Es un acorde que funciona como dominante de un grado distinto de la tónica. En Do mayor, Re mayor (Re7) es la dominante de Sol, y por eso suele aparecer justo antes del V. Suena como un pequeño desvío que luego vuelve a la tonalidad.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "piano", "guitarra-acustica"],
  relatedPostSlugs: [
    "circulo-de-quintas-explicado",
    "escalas-mayores-y-menores-explicadas",
    "como-transportar-una-cancion",
  ],
  cta: "clases",
};
