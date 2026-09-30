import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "modos-griegos-explicados",
  title: "Modos griegos explicados: de jónico a locrio",
  description:
    "Los siete modos griegos, de jónico a locrio: de qué grado nace cada uno, su nota característica, su sonido y cómo practicarlos sobre una base o un bordón.",
  excerpt:
    "Los modos son siete escalas que salen de la escala mayor, cada una con su propio centro y su propio color. Aprende a reconocerlos por su nota característica y a practicarlos.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "modos griegos",
    "modos griegos explicados",
    "modo dórico",
    "modo mixolidio",
    "modos griegos en guitarra",
    "qué es el modo lidio",
  ],
  intro: [
    "Los modos griegos son siete escalas que resultan de tocar la escala mayor empezando en cada uno de sus grados: **jónico** (I), **dórico** (II), **frigio** (III), **lidio** (IV), **mixolidio** (V), **eólico** (VI) y **locrio** (VII). En teclas blancas, Re dórico va de Re a Re y Sol mixolidio de Sol a Sol.",
    "Comparten las notas de su escala madre, pero cambian el centro tonal, y con él, el carácter. Por eso lo que define un modo no es “en qué nota empiezas”, sino qué nota escucha el oído como casa.",
  ],
  keyTakeaways: [
    "Jónico es la escala mayor y eólico la menor natural; los otros cinco son variaciones de ellas.",
    "Cada modo tiene una nota característica: la 6ª mayor en el dórico, la 2ª menor en el frigio, la 4ª aumentada en el lidio y la 7ª menor en el mixolidio.",
    "Comparados desde la misma tónica, del más brillante al más oscuro: lidio, jónico, mixolidio, dórico, eólico, frigio, locrio.",
    "Un modo solo suena como tal si la armonía confirma su centro: se practica sobre un bordón o una base.",
    "Dórico y mixolidio son los más útiles para empezar; el locrio casi no se usa como centro.",
  ],
  sections: [
    {
      id: "que-son-los-modos",
      heading: "Qué son los modos y de dónde sale su nombre",
      blocks: [
        {
          type: "p",
          text: "Toma la escala de Do mayor, sin alteraciones. Si en lugar de empezar en Do empiezas en Re y terminas en Re, las notas son las mismas, pero el orden de tonos y semitonos cambia: ahora es T-S-T-T-T-S-T. Esa nueva fórmula es el modo dórico. Haz lo mismo desde cada nota y obtienes los siete modos.",
        },
        {
          type: "p",
          text: "Los nombres vienen de pueblos y regiones del mundo griego antiguo y de sus vecinos de Asia Menor, pero el sistema que usamos hoy se parece poco a la música griega: se heredó de los modos de la música medieval y se reorganizó mucho después. Para lo práctico, basta con saber que cada nombre corresponde a un grado de la escala mayor.",
        },
      ],
    },
    {
      id: "los-siete-modos",
      heading: "Los siete modos, uno por uno",
      blocks: [
        {
          type: "table",
          caption: "T = tono, S = semitono. La nota característica es la que lo diferencia de la escala mayor o de la menor natural.",
          head: ["Modo", "Grado", "En teclas blancas", "Fórmula", "Nota característica", "Carácter y usos"],
          rows: [
            ["Jónico", "I", "Do a Do", "T-T-S-T-T-T-S", "Es la escala mayor", "Brillante y estable; casi toda la música en tonalidad mayor"],
            ["Dórico", "II", "Re a Re", "T-S-T-T-T-S-T", "6ª mayor", "Menor pero luminoso; funk, jazz modal, música celta"],
            ["Frigio", "III", "Mi a Mi", "S-T-T-T-S-T-T", "2ª menor", "Oscuro, con sabor “español”; flamenco, metal"],
            ["Lidio", "IV", "Fa a Fa", "T-T-T-S-T-T-S", "4ª aumentada", "Flotante, de ensueño; bandas sonoras"],
            ["Mixolidio", "V", "Sol a Sol", "T-T-S-T-T-S-T", "7ª menor", "Mayor relajado; rock, blues, música celta"],
            ["Eólico", "VI", "La a La", "T-S-T-T-S-T-T", "Es la menor natural", "Melancólico; pop y rock en tonalidad menor"],
            ["Locrio", "VII", "Si a Si", "S-T-T-S-T-T-T", "5ª disminuida (y 2ª menor)", "Inestable; casi no se usa como centro"],
          ],
        },
        {
          type: "p",
          text: "Si la fórmula de tonos y semitonos no te resulta familiar, repasa primero [escalas mayores y menores](/blog/escalas-mayores-y-menores-explicadas): los modos son la continuación natural de ese tema.",
        },
      ],
    },
    {
      id: "modos-desde-la-misma-tonica",
      heading: "La forma de oírlos de verdad: todos desde la misma tónica",
      blocks: [
        {
          type: "p",
          text: "Comparar Re dórico con Mi frigio no ayuda mucho, porque cambian a la vez la tónica y el modo. Es mucho más claro construir los siete sobre la misma nota. Desde Do, cada modo baja una sola nota respecto al anterior:",
        },
        {
          type: "table",
          caption: "Los modos sobre Do, del más brillante al más oscuro",
          head: ["Modo sobre Do", "Alteraciones", "Escala madre", "Tipo"],
          rows: [
            ["Do lidio", "Fa♯", "Sol mayor", "Mayor"],
            ["Do jónico", "Ninguna", "Do mayor", "Mayor"],
            ["Do mixolidio", "Si♭", "Fa mayor", "Mayor"],
            ["Do dórico", "Mi♭, Si♭", "Si♭ mayor", "Menor"],
            ["Do eólico", "Mi♭, La♭, Si♭", "Mi♭ mayor", "Menor"],
            ["Do frigio", "Re♭, Mi♭, La♭, Si♭", "La♭ mayor", "Menor"],
            ["Do locrio", "Re♭, Mi♭, Sol♭, La♭, Si♭", "Re♭ mayor", "Disminuido"],
          ],
        },
        {
          type: "p",
          text: "Para construir cualquier modo, busca su escala madre: La dórico es el segundo grado de Sol mayor, así que tiene Fa♯; Mi mixolidio es el quinto grado de La mayor, así que tiene Fa♯, Do♯ y Sol♯. El [círculo de quintas](/blog/circulo-de-quintas-explicado) te da esas armaduras de un vistazo.",
        },
      ],
    },
    {
      id: "el-centro-tonal",
      heading: "El error más común: olvidar el centro tonal",
      blocks: [
        {
          type: "p",
          text: "Si tocas de Re a Re sobre una canción en Do mayor, no estás tocando en dórico: estás tocando en Do mayor empezando en Re. El oído sigue sintiendo Do como casa. Para que un modo suene, la armonía tiene que confirmar su tónica. Estas bases, todas en teclas blancas, lo logran:",
        },
        {
          type: "table",
          caption: "Bases de dos o tres acordes para practicar cada modo",
          head: ["Modo", "Base para repetir", "Qué escuchar", "Ejemplo conocido"],
          rows: [
            ["Re dórico", "Rem7 – Sol (i – IV)", "El Si natural del acorde de Sol", "“Oye como va”, de Tito Puente; “Scarborough Fair”"],
            ["Mi frigio", "Mim – Fa (i – ♭II)", "El Fa, medio tono sobre la tónica", "El sonido del flamenco"],
            ["Fa lidio", "Fa – Sol/Fa (I – II con bajo en Fa)", "El Si natural sobre el bajo de Fa", "Muchas bandas sonoras de cine"],
            ["Sol mixolidio", "Sol – Fa – Do (I – ♭VII – IV)", "El Fa natural, la 7ª menor", "“Sweet Home Alabama”, “Norwegian Wood”"],
            ["La eólico", "Lam – Fa – Sol (i – ♭VI – ♭VII)", "El Fa, la 6ª menor", "Mucho rock y pop en menor"],
          ],
        },
        {
          type: "p",
          text: "Fíjate en que cada base contiene justo la nota característica del modo. Esa es la idea: la armonía la hace sonar y tú la resaltas en la melodía. Si quieres entender por qué esos acordes funcionan así, lee [qué es la armonía musical](/blog/que-es-la-armonia-musical).",
        },
      ],
    },
    {
      id: "como-practicarlos",
      heading: "Cómo practicar los modos paso a paso",
      blocks: [
        {
          type: "ol",
          items: [
            "**Compara de a dos:** toca Do jónico y enseguida Do mixolidio; solo cambia el Si. Luego Do dórico y Do eólico; solo cambia el La.",
            "**Usa un bordón:** deja sonar un Re grave (la cuarta cuerda al aire en guitarra o una nota sostenida con pedal en el piano) y toca Re dórico despacio, deteniéndote en el Si. Cántalo.",
            "**Improvisa sobre la base:** grábala en el celular y toca dos o tres minutos por modo, poniendo la nota característica en tiempos fuertes.",
            "**Una canción por modo:** escucha los ejemplos de la tabla y trata de encontrar la nota característica en la melodía o en los acordes.",
            "**En guitarra, piensa en la tónica:** aprende cada modo en una posición anclada a su tónica y di su nombre en voz alta. Memorizar siete digitaciones sin oír el centro no sirve de mucho.",
          ],
        },
        {
          type: "p",
          text: "Un orden razonable: dórico y mixolidio primero, porque son los más frecuentes en la música popular; después lidio y frigio; el locrio al final, casi como curiosidad. En las clases de [guitarra eléctrica](/clases/guitarra-electrica) o de [teoría musical](/clases/teoria-musical) un profe puede armarte bases a tu nivel y corregir si estás oyendo el centro correcto.",
        },
      ],
    },
    {
      id: "cuando-estudiarlos",
      heading: "Cuándo estudiarlos y hasta dónde llegar",
      blocks: [
        {
          type: "p",
          text: "Los modos rinden de verdad cuando ya manejas la escala mayor, la menor natural y las tríadas básicas. Si apenas estás empezando a improvisar, la pentatónica es un mejor primer paso: te lo contamos en [cómo empezar a improvisar](/blog/como-empezar-a-improvisar).",
        },
        {
          type: "p",
          text: "También existen modos de la escala menor armónica y de la menor melódica, como el frigio dominante del flamenco o el lidio dominante del jazz. Son un tema aparte y vale la pena llegar a ellos solo cuando los siete modos de la escala mayor ya suenan en tu oído, no solo en tus dedos.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es la diferencia entre una escala y un modo?",
      answer:
        "Una escala es una serie ordenada de notas. Un modo es una manera de ordenar esas notas alrededor de un centro distinto. Do mayor y Re dórico tienen las mismas notas, pero son modos diferentes porque su tónica y su carácter cambian.",
    },
    {
      question: "¿Por qué se llaman modos griegos?",
      answer:
        "Porque sus nombres vienen de pueblos y regiones que conocían los griegos antiguos, como los dorios o Frigia y Lidia, en Asia Menor. Los teóricos medievales los aplicaron a sus propios modos, y en el siglo XVI se sumaron el jónico y el eólico. El sistema actual, con siete modos de la escala mayor, se consolidó mucho después.",
    },
    {
      question: "¿Qué modo uso sobre un acorde menor?",
      answer:
        "Depende del contexto. Si el acorde menor es el ii de una tonalidad mayor, como Rem7 en Do, el modo natural es el dórico. Si es la tónica de una canción en menor, suele ser eólico. El frigio aparece cuando la armonía sube medio tono desde la tónica, como Mim – Fa.",
    },
    {
      question: "¿Necesito aprender los modos para improvisar?",
      answer:
        "No al principio. Con la escala pentatónica y buen oído puedes improvisar mucho. Los modos llegan después, cuando quieres más colores y entender por qué ciertas notas suenan mejor sobre ciertos acordes.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "guitarra-electrica"],
  relatedPostSlugs: [
    "escalas-mayores-y-menores-explicadas",
    "como-empezar-a-improvisar",
    "que-es-la-armonia-musical",
  ],
  cta: "clases",
};
