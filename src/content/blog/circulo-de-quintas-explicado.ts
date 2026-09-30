import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "circulo-de-quintas-explicado",
  title: "El círculo de quintas explicado de forma sencilla",
  description:
    "Qué es el círculo de quintas, cómo leer con él armaduras y tonalidades relativas, y cómo usarlo para encontrar acordes, transponer y practicar escalas.",
  excerpt:
    "El círculo de quintas ordena las 12 tonalidades como un reloj. Aprende a dibujarlo, a leer armaduras y relativas menores con él y a usarlo en la práctica.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "círculo de quintas",
    "círculo de quintas explicado",
    "cómo usar el círculo de quintas",
    "armaduras de clave sostenidos y bemoles",
    "tonalidades relativas menores",
    "orden de los sostenidos y bemoles",
  ],
  intro: [
    "El círculo de quintas es un diagrama que ordena las 12 tonalidades mayores como las horas de un reloj. Arriba está Do; cada paso en el sentido de las manecillas sube una quinta justa (Do, Sol, Re, La, Mi…) y **suma un sostenido** a la armadura. En sentido contrario (Fa, Si♭, Mi♭…) cada paso **suma un bemol**. En un anillo interior se escriben las relativas menores.",
    "Sirve para tres cosas muy concretas: saber qué alteraciones lleva cada tonalidad, encontrar los acordes que suenan bien juntos y transponer una canción sin enredarte. Aquí te explicamos cómo dibujarlo y cómo usarlo.",
  ],
  keyTakeaways: [
    "En el sentido del reloj, cada tonalidad está una quinta justa por encima de la anterior y tiene un sostenido más.",
    "En sentido contrario, cada tonalidad está una quinta por debajo y tiene un bemol más.",
    "Orden de los sostenidos: Fa, Do, Sol, Re, La, Mi, Si. Los bemoles van en el orden inverso.",
    "Cada tonalidad mayor comparte armadura con su relativa menor, tres semitonos más abajo.",
    "Los acordes principales de una tonalidad (I, IV y V) son esa tonalidad y sus dos vecinas en el círculo.",
  ],
  sections: [
    {
      id: "que-es-y-como-dibujarlo",
      heading: "Qué es el círculo de quintas y cómo dibujarlo",
      blocks: [
        {
          type: "p",
          text: "Una quinta justa es la distancia de siete semitonos que hay, por ejemplo, entre Do y Sol: contando ambas notas, Do-Re-Mi-Fa-Sol son cinco. Si repites ese salto doce veces, pasas por las doce notas y vuelves a Do. El círculo es el dibujo de ese recorrido. Si el concepto de distancia entre notas te resulta nuevo, empieza por [qué es un intervalo musical](/blog/que-es-un-intervalo-musical).",
        },
        {
          type: "ol",
          items: [
            "Dibuja un reloj y escribe Do en las 12.",
            "Avanza en el sentido de las manecillas subiendo una quinta en cada hora: Sol (1), Re (2), La (3), Mi (4), Si (5).",
            "En las 6 escribe Fa♯ / Sol♭: es la misma tonalidad con dos nombres posibles.",
            "Vuelve a Do y avanza en sentido contrario bajando una quinta cada vez: Fa (11), Si♭ (10), Mi♭ (9), La♭ (8), Re♭ (7).",
            "Dentro del círculo, junto a cada mayor, escribe su relativa menor: La menor junto a Do, Mi menor junto a Sol, Re menor junto a Fa, y así con todas.",
          ],
        },
        {
          type: "p",
          text: "Dibujarlo de memoria una vez al día durante una semana es la manera más rápida de dejar de necesitarlo en papel.",
        },
      ],
    },
    {
      id: "armaduras",
      heading: "Las armaduras en el círculo de quintas",
      blocks: [
        {
          type: "table",
          caption: "Tonalidades mayores, relativas menores y armaduras",
          head: ["Posición", "Mayor", "Relativa menor", "Armadura"],
          rows: [
            ["12", "Do", "La menor", "Sin alteraciones"],
            ["1", "Sol", "Mi menor", "1 sostenido: Fa♯"],
            ["2", "Re", "Si menor", "2 sostenidos: Fa♯, Do♯"],
            ["3", "La", "Fa♯ menor", "3 sostenidos: Fa♯, Do♯, Sol♯"],
            ["4", "Mi", "Do♯ menor", "4 sostenidos: Fa♯, Do♯, Sol♯, Re♯"],
            ["5", "Si", "Sol♯ menor", "5 sostenidos: Fa♯, Do♯, Sol♯, Re♯, La♯"],
            ["6", "Fa♯ / Sol♭", "Re♯ menor / Mi♭ menor", "6 sostenidos (Fa♯ mayor) o 6 bemoles (Sol♭ mayor)"],
            ["7", "Re♭", "Si♭ menor", "5 bemoles: Si♭, Mi♭, La♭, Re♭, Sol♭"],
            ["8", "La♭", "Fa menor", "4 bemoles: Si♭, Mi♭, La♭, Re♭"],
            ["9", "Mi♭", "Do menor", "3 bemoles: Si♭, Mi♭, La♭"],
            ["10", "Si♭", "Sol menor", "2 bemoles: Si♭, Mi♭"],
            ["11", "Fa", "Re menor", "1 bemol: Si♭"],
          ],
        },
        {
          type: "p",
          text: "Los sostenidos siempre aparecen en el mismo orden: **Fa, Do, Sol, Re, La, Mi, Si**, y cada uno está una quinta arriba del anterior, igual que en el círculo. Los bemoles van al revés: **Si, Mi, La, Re, Sol, Do, Fa**. Existen además Do♯ mayor (7 sostenidos) y Do♭ mayor (7 bemoles), que suenan igual que Re♭ y Si, respectivamente.",
        },
        { type: "h3", text: "Dos trucos para leer una armadura al instante" },
        {
          type: "ul",
          items: [
            "**Con sostenidos:** el último sostenido es la sensible; la tónica está un semitono más arriba. Tres sostenidos terminan en Sol♯, así que la tonalidad es La mayor.",
            "**Con bemoles:** el penúltimo bemol es la tónica. Con Si♭, Mi♭ y La♭, el penúltimo es Mi♭: Mi♭ mayor. La única que hay que memorizar es Fa mayor, que tiene un solo bemol.",
          ],
        },
      ],
    },
    {
      id: "relativas-menores",
      heading: "Tonalidades relativas: mayor o menor con la misma armadura",
      blocks: [
        {
          type: "p",
          text: "Cada armadura sirve para dos tonalidades: una mayor y su relativa menor, que está tres semitonos más abajo y usa las mismas notas. Sin alteraciones puede ser Do mayor o La menor; con un sostenido, Sol mayor o Mi menor. Lo explicamos a fondo en [escalas mayores y menores](/blog/escalas-mayores-y-menores-explicadas).",
        },
        {
          type: "p",
          text: "¿Cómo saber cuál de las dos es? Tres pistas que usan los músicos:",
        },
        {
          type: "ol",
          items: [
            "Mira la última nota de la melodía y la última nota del bajo: casi siempre son la tónica.",
            "Busca alteraciones sueltas: si en una pieza sin armadura aparece Sol♯ una y otra vez, es la sensible de La menor.",
            "Escucha el carácter general y el primer acorde: suelen confirmar lo que dicen las dos pistas anteriores.",
          ],
        },
      ],
    },
    {
      id: "acordes-de-una-tonalidad",
      heading: "Cómo encontrar los acordes de una tonalidad",
      blocks: [
        {
          type: "p",
          text: "Aquí es donde el círculo se vuelve práctico. Ubica tu tonalidad: ese es el acorde I. La vecina de la derecha es el V (dominante) y la de la izquierda, el IV (subdominante). Las relativas menores de esos tres te dan el vi, el iii y el ii. Con esos seis acordes se construye una enorme cantidad de canciones.",
        },
        {
          type: "table",
          caption: "Acordes principales según el círculo",
          head: ["Tonalidad", "IV – I – V", "ii – vi – iii (relativas)"],
          rows: [
            ["Do mayor", "Fa – Do – Sol", "Rem – Lam – Mim"],
            ["Sol mayor", "Do – Sol – Re", "Lam – Mim – Sim"],
            ["Re mayor", "Sol – Re – La", "Mim – Sim – Fa♯m"],
            ["La mayor", "Re – La – Mi", "Sim – Fa♯m – Do♯m"],
          ],
        },
        {
          type: "p",
          text: "Por eso la progresión Sol – Re – Mim – Do suena tan natural: son el I, el V, el vi y el IV de Sol mayor, todos vecinos en el círculo. Puedes tocarla con los [acordes básicos de guitarra](/blog/acordes-basicos-de-guitarra-para-principiantes). El acorde que falta, el del 7º grado, es disminuido y se usa menos.",
        },
      ],
    },
    {
      id: "usos-practicos",
      heading: "Otros usos prácticos del círculo de quintas",
      blocks: [
        {
          type: "ul",
          items: [
            "**Transponer:** si una canción en Mi (Mi – La – Si) te queda alta para cantar, bájala a Re: el patrón de vecinos se mantiene y queda Re – Sol – La.",
            "**Entender modulaciones:** dos tonalidades vecinas se diferencian en una sola nota (Do y Sol, solo en Fa y Fa♯). Por eso pasar de una a otra suena tan fluido.",
            "**Progresiones por quintas:** el famoso ii – V – I (en Do: Rem – Sol – Do) recorre el círculo en sentido contrario. Cadenas más largas, como Mi – La – Re – Sol – Do, aparecen en muchos boleros y estándares de jazz.",
            "**Ordenar el estudio de escalas:** practicarlas siguiendo el círculo suma una alteración nueva cada vez.",
            "**Entender tu instrumento:** la guitarra se siente cómoda en tonalidades con sostenidos (Mi, La, Re, Sol) por sus cuerdas al aire; las bandas de vientos tocan mucho en bemoles (Si♭, Mi♭, Fa) porque muchos de sus instrumentos están afinados en Si♭ o Mi♭.",
          ],
        },
        {
          type: "callout",
          title: "Si vas a presentar una admisión",
          text: "En las pruebas de teoría de las carreras de música es habitual que pidan reconocer armaduras, escribir escalas o identificar relativas con rapidez. Tener el círculo interiorizado ahorra mucho tiempo. Si te estás preparando, mira nuestro [preuniversitario de música](/preuniversitario-musica).",
        },
      ],
    },
    {
      id: "ejercicios",
      heading: "Ejercicios para interiorizarlo",
      blocks: [
        {
          type: "ol",
          items: [
            "Dibuja el círculo completo de memoria, con relativas menores, y compáralo con la tabla.",
            "Pídele a alguien que te diga una tonalidad al azar y responde en voz alta su armadura. Luego al revés: armadura y tonalidad.",
            "Toca la cadencia I – IV – V – I en cada tonalidad, avanzando por el círculo.",
            "Toma una canción que conozcas y transpórtala a las dos tonalidades vecinas.",
          ],
        },
        {
          type: "p",
          text: "En las [clases de teoría musical](/clases/teoria-musical) estos ejercicios se hacen sobre el instrumento y con repertorio real, que es donde el círculo deja de ser un dibujo y se vuelve una herramienta.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Por qué se llama círculo de quintas y no de cuartas?",
      answer:
        "Porque en el sentido del reloj cada paso sube una quinta. Recorrido al revés, cada paso sube una cuarta, y por eso en jazz algunos lo llaman círculo de cuartas. Es el mismo diagrama visto desde otra dirección.",
    },
    {
      question: "¿Qué tonalidades conviene aprender primero?",
      answer:
        "Las que tienen pocas alteraciones: Do, Sol, Fa y Re, con sus relativas menores. Después, las que más use tu instrumento: en guitarra, Mi y La; en vientos, Si♭ y Mi♭.",
    },
    {
      question: "¿Qué son las tonalidades enarmónicas?",
      answer:
        "Son tonalidades que suenan igual pero se escriben distinto, como Fa♯ mayor (seis sostenidos) y Sol♭ mayor (seis bemoles). En el círculo aparecen en la parte de abajo, donde el lado de los sostenidos y el de los bemoles se encuentran.",
    },
    {
      question: "¿El círculo de quintas sirve para componer?",
      answer:
        "Sí. Te muestra qué acordes pertenecen a la tonalidad, qué tonalidades vecinas sirven para modular y qué movimientos del bajo suenan con más fuerza. No compone por ti, pero te da un mapa para probar ideas con criterio.",
    },
  ],
  relatedCourseIds: ["teoria-musical"],
  relatedPostSlugs: [
    "escalas-mayores-y-menores-explicadas",
    "que-es-un-intervalo-musical",
    "acordes-basicos-de-guitarra-para-principiantes",
  ],
  cta: "clases",
};
