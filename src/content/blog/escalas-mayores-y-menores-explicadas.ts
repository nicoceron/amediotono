import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "escalas-mayores-y-menores-explicadas",
  title: "Escalas mayores y menores explicadas paso a paso",
  description:
    "Construye cualquier escala mayor o menor con la fórmula de tonos y semitonos, y entiende la diferencia entre menor natural, armónica y melódica.",
  excerpt:
    "Todas las escalas mayores siguen la misma fórmula de tonos y semitonos, y las menores tienen tres versiones. Aprende a construirlas desde cualquier nota.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "escalas mayores y menores",
    "fórmula de la escala mayor",
    "escala menor natural armónica y melódica",
    "tono y semitono en música",
    "cómo construir una escala mayor",
    "escala de do mayor",
  ],
  intro: [
    "Una escala es una serie de notas ordenadas desde una nota principal, la tónica, hasta su octava, siguiendo un patrón fijo de distancias. La escala mayor sigue la fórmula **tono, tono, semitono, tono, tono, tono, semitono** (T-T-S-T-T-T-S); la menor natural, **tono, semitono, tono, tono, semitono, tono, tono** (T-S-T-T-S-T-T).",
    "Con esas dos fórmulas puedes construir la escala de cualquier nota. Y cuando entiendas por qué la escala menor tiene tres versiones, natural, armónica y melódica, muchas piezas y progresiones de acordes van a empezar a tener sentido.",
  ],
  keyTakeaways: [
    "El semitono, también llamado medio tono, es la distancia más pequeña entre dos notas; un tono son dos semitonos.",
    "Escala mayor: T-T-S-T-T-T-S. Do mayor no lleva alteraciones.",
    "Escala menor natural: T-S-T-T-S-T-T. La menor comparte las notas de Do mayor: son relativas.",
    "La menor armónica sube el 7º grado; la melódica sube el 6º y el 7º al ascender.",
    "En una escala cada letra aparece una sola vez: por eso Fa mayor lleva Si♭ y no La♯.",
  ],
  sections: [
    {
      id: "tono-y-semitono",
      heading: "Tono y semitono: las dos medidas que necesitas",
      blocks: [
        {
          type: "p",
          text: "El **semitono** es la distancia más pequeña entre dos notas en la música occidental. En el piano es el paso de una tecla a la siguiente, sea blanca o negra; en la guitarra, de un traste al siguiente. También se le llama medio tono (sí, de ahí viene el nombre de A medio tono). Un **tono** son dos semitonos.",
        },
        {
          type: "ul",
          items: [
            "De Do a Do♯: un semitono. De Do a Re: un tono.",
            "Entre Mi y Fa, y entre Si y Do, hay solo un semitono: en el piano no hay tecla negra entre ellas.",
            "Entre las demás notas naturales vecinas (Do-Re, Re-Mi, Fa-Sol, Sol-La, La-Si) hay un tono.",
          ],
        },
        {
          type: "p",
          text: "Si quieres profundizar en cómo se miden las distancias entre notas, lee [qué es un intervalo musical](/blog/que-es-un-intervalo-musical).",
        },
      ],
    },
    {
      id: "escala-mayor",
      heading: "La escala mayor y su fórmula",
      blocks: [
        {
          type: "table",
          caption: "Escala de Do mayor: grados y distancias",
          head: ["Grado", "Nota", "Distancia a la siguiente"],
          rows: [
            ["I", "Do", "Tono"],
            ["II", "Re", "Tono"],
            ["III", "Mi", "Semitono"],
            ["IV", "Fa", "Tono"],
            ["V", "Sol", "Tono"],
            ["VI", "La", "Tono"],
            ["VII", "Si", "Semitono"],
            ["VIII (I)", "Do", "—"],
          ],
        },
        {
          type: "p",
          text: "Do mayor es la única escala mayor que cae completa en las teclas blancas. Si empiezas en otra nota, tendrás que alterar algunas para mantener la fórmula.",
        },
        { type: "h3", text: "Cómo construir cualquier escala mayor" },
        {
          type: "ol",
          items: [
            "Escribe las siete letras en orden desde la tónica, sin repetir ni saltar ninguna. Para Sol: Sol, La, Si, Do, Re, Mi, Fa, Sol.",
            "Revisa cada distancia contra la fórmula T-T-S-T-T-T-S.",
            "Donde no coincida, altera la nota con ♯ o ♭, sin cambiarle la letra. En Sol, de Mi a Fa hay un semitono, pero la fórmula pide un tono: el Fa pasa a Fa♯, y de Fa♯ a Sol queda el semitono final.",
            "Comprueba el resultado tocándolo: si suena como \"do-re-mi-fa-sol-la-si-do\", está bien.",
          ],
        },
        {
          type: "table",
          caption: "Algunas escalas mayores construidas con la fórmula",
          head: ["Escala", "Notas", "Alteraciones"],
          rows: [
            ["Do mayor", "Do Re Mi Fa Sol La Si Do", "Ninguna"],
            ["Sol mayor", "Sol La Si Do Re Mi Fa♯ Sol", "Fa♯"],
            ["Re mayor", "Re Mi Fa♯ Sol La Si Do♯ Re", "Fa♯, Do♯"],
            ["Fa mayor", "Fa Sol La Si♭ Do Re Mi Fa", "Si♭"],
          ],
        },
        {
          type: "p",
          text: "Fíjate en Fa mayor: de La a Si hay un tono y la fórmula pide un semitono. Podrías pensar en La♯, pero entonces tendrías dos notas \"La\" y ninguna \"Si\". Por eso se escribe Si♭: cada letra aparece una sola vez.",
        },
      ],
    },
    {
      id: "grados-de-la-escala",
      heading: "Los grados de la escala y sus nombres",
      blocks: [
        {
          type: "table",
          caption: "Nombres de los grados",
          head: ["Grado", "Nombre", "Por qué importa"],
          rows: [
            ["I", "Tónica", "La nota de reposo; le da nombre a la escala"],
            ["II", "Supertónica", "Justo encima de la tónica"],
            ["III", "Mediante", "Define si la escala es mayor o menor"],
            ["IV", "Subdominante", "Base de uno de los tres acordes principales"],
            ["V", "Dominante", "Genera tensión que pide volver a la tónica"],
            ["VI", "Superdominante o submediante", "Punto de partida de la relativa menor"],
            ["VII", "Sensible (a un semitono de la tónica) o subtónica (a un tono)", "La sensible \"empuja\" hacia la tónica"],
          ],
        },
      ],
    },
    {
      id: "escala-menor-natural",
      heading: "La escala menor natural y las tonalidades relativas",
      blocks: [
        {
          type: "p",
          text: "La fórmula de la menor natural es T-S-T-T-S-T-T. Aplicada a La, no necesita alteraciones: La, Si, Do, Re, Mi, Fa, Sol, La. Son exactamente las notas de Do mayor, empezando desde su 6º grado. Por eso se dice que **La menor es la relativa menor de Do mayor**: comparten notas y armadura, pero tienen distinta tónica y distinto carácter.",
        },
        {
          type: "ul",
          items: [
            "Para encontrar la relativa menor de una escala mayor, baja tres semitonos desde su tónica: de Sol mayor llegas a Mi menor (Mi Fa♯ Sol La Si Do Re Mi).",
            "No confundas relativa con **paralela**: Do menor es la paralela de Do mayor, porque tiene la misma tónica. Do menor natural es Do Re Mi♭ Fa Sol La♭ Si♭ Do.",
            "Comparada con su paralela mayor, la menor natural tiene bajados los grados III, VI y VII.",
          ],
        },
        {
          type: "p",
          text: "Se suele decir que lo mayor suena alegre y lo menor triste. Es una guía útil para el oído, pero no una regla: hay música festiva en menor y canciones melancólicas en mayor.",
        },
      ],
    },
    {
      id: "tres-escalas-menores",
      heading: "Menor natural, armónica y melódica: las diferencias",
      blocks: [
        {
          type: "table",
          caption: "Las tres escalas menores de La",
          head: ["Escala", "Notas", "Fórmula", "Qué cambia"],
          rows: [
            ["Menor natural", "La Si Do Re Mi Fa Sol La", "T-S-T-T-S-T-T", "Es la base"],
            ["Menor armónica", "La Si Do Re Mi Fa Sol♯ La", "T-S-T-T-S-1½T-S", "Sube el 7º grado"],
            ["Menor melódica (subiendo)", "La Si Do Re Mi Fa♯ Sol♯ La", "T-S-T-T-T-T-S", "Sube el 6º y el 7º"],
            ["Menor melódica (bajando, uso clásico)", "La Sol Fa Mi Re Do Si La", "Igual a la natural", "Vuelve a la natural"],
          ],
        },
        { type: "h3", text: "Por qué existe la menor armónica" },
        {
          type: "p",
          text: "En la menor natural, el 7º grado (Sol) está a un tono de la tónica y no \"empuja\" hacia ella. Al subirlo a Sol♯ aparece la sensible y el acorde sobre el 5º grado pasa de Mi menor a Mi mayor (Mi-Sol♯-Si), que resuelve con mucha más fuerza en La menor. Es el Mi mayor de la progresión Lam–Rem–Mi que se usa en boleros y en tantas canciones latinoamericanas; puedes tocarla con los [acordes básicos de guitarra](/blog/acordes-basicos-de-guitarra-para-principiantes). Como efecto secundario, entre Fa y Sol♯ queda un salto de tono y medio que le da un color muy reconocible.",
        },
        { type: "h3", text: "Por qué existe la menor melódica" },
        {
          type: "p",
          text: "Para suavizar ese salto al cantar o tocar melodías, la menor melódica sube también el 6º grado al ascender. Al descender, la tradición clásica vuelve a la natural, porque ya no hace falta la sensible. En jazz se usa la misma versión subiendo y bajando.",
        },
      ],
    },
    {
      id: "como-practicarlas",
      heading: "Cómo practicar escalas sin aburrirte",
      blocks: [
        {
          type: "ol",
          items: [
            "Construye en papel Do, Sol, Re y Fa mayor, y sus relativas menores. Escribir las escalas fija la fórmula más que memorizarlas.",
            "Tócalas en el piano. Para Do mayor, la digitación habitual de la mano derecha subiendo es 1-2-3-1-2-3-4-5; la izquierda, 5-4-3-2-1-3-2-1.",
            "Pon el [metrónomo](/herramientas/metronomo) a 60: primero una nota por pulso, luego dos. Busca notas parejas en volumen y duración.",
            "Canta las escalas con el nombre de las notas. Cantar entrena el oído mucho más que solo tocar.",
            "Toca seguidas las tres menores de La y escucha qué cambia en cada una.",
            "Sigue el orden del [círculo de quintas](/blog/circulo-de-quintas-explicado) para ir sumando escalas con una alteración nueva cada vez.",
          ],
        },
        {
          type: "p",
          text: "En [clases de teoría musical](/clases/teoria-musical) o de [piano](/clases/piano), el profe conecta cada escala con piezas reales, que es lo que hace que se queden en la memoria.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuántas escalas mayores existen?",
      answer:
        "Hay 12 escalas mayores con sonidos distintos, una por cada nota de la octava. Como algunas se pueden escribir de dos formas, por ejemplo Fa♯ mayor y Sol♭ mayor, en la teoría aparecen 15 nombres de tonalidades mayores.",
    },
    {
      question: "¿Qué es una escala pentatónica?",
      answer:
        "Es una escala de cinco notas. La pentatónica mayor quita el 4º y el 7º grado de la escala mayor (Do Re Mi Sol La); la pentatónica menor quita el 2º y el 6º de la menor natural (La Do Re Mi Sol). Es muy usada para improvisar en rock, blues y música popular.",
    },
    {
      question: "¿Cuál es la diferencia entre escala y tonalidad?",
      answer:
        "La escala es la lista ordenada de notas. La tonalidad es todo el sistema que se organiza alrededor de una tónica: sus notas, sus acordes y la función de cada uno. Decir que una canción está \"en La menor\" habla de la tonalidad.",
    },
    {
      question: "¿Por qué se dice semitono y no medio tono?",
      answer:
        "Son sinónimos. \"Semitono\" es el término más usado en teoría y en los libros; \"medio tono\" es más frecuente al hablar, sobre todo entre músicos populares.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "piano"],
  relatedPostSlugs: [
    "circulo-de-quintas-explicado",
    "que-es-un-intervalo-musical",
    "como-leer-partituras-guia-para-principiantes",
  ],
  cta: "clases",
};
