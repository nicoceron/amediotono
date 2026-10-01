// Afinaciones alternativas de guitarra (/herramientas/afinador/guitarra-*).
// Las canciones y los datos históricos vienen de Wikipedia (artículos de cada
// afinación y de cada canción) y de guías de Guitar World, D'Addario y
// Acoustic Guitar; si agregas uno, verifica que la fuente lo diga explícitamente.
// La tabla «cómo pasar desde la afinación estándar» se calcula en la página.
import type { TunerPreset, TunerString } from "@/lib/music-tools";

/** Labels for the six strings of a guitar tuning, 6th to 1st. */
function guitarStrings(midis: number[]): TunerString[] {
  return midis.map((midi, index) => ({ label: `${6 - index}.ª cuerda`, midi }));
}

const GUITAR = { group: "guitarra", name: "guitarra", gender: "f" } as const;

export const GUITAR_TUNING_PRESETS: TunerPreset[] = [
  {
    ...GUITAR,
    slug: "guitarra-medio-tono-abajo",
    variant: "medio tono abajo",
    headline: "Afinador de guitarra medio tono abajo online",
    seoTitle: "Afinador de guitarra medio tono abajo gratis",
    metaDescription:
      "Afina tu guitarra medio tono abajo (Mi♭) con el micrófono: Mi♭ La♭ Re♭ Sol♭ Si♭ Mi♭, cómo bajar cada cuerda y qué guitarristas la usan.",
    intro:
      "En la afinación medio tono abajo, o en Mi bemol, las seis cuerdas bajan un semitono: Mi♭, La♭, Re♭, Sol♭, Si♭, Mi♭. Las digitaciones no cambian, pero todo suena medio tono más grave. Toca cada cuerda y sigue la aguja.",
    strings: guitarStrings([39, 44, 49, 54, 58, 63]),
    tuningName: "Medio tono abajo (Mi♭ La♭ Re♭ Sol♭ Si♭ Mi♭)",
    flats: true,
    sections: [
      {
        heading: "Cuándo y por qué se usa",
        blocks: [
          {
            type: "ul",
            items: [
              "**Bends más cómodos:** con un poco menos de tensión, las cuerdas se doblan con menos esfuerzo, algo muy apreciado en el blues y el rock.",
              "**Para la voz:** bajar medio tono acomoda una canción al rango del cantante sin cambiar lo que hacen las manos.",
              "**Con vientos:** las tonalidades con bemoles, frecuentes en las secciones de vientos, quedan con las digitaciones cómodas de Mi y La.",
              "**Color:** el sonido es apenas más grave y oscuro, sin perder la definición de la afinación estándar.",
            ],
          },
          {
            type: "p",
            text: "«Medio tono» es un semitono: la distancia entre dos notas vecinas de la escala cromática, la misma que hay entre dos trastes seguidos de la guitarra.",
          },
        ],
      },
      {
        heading: "Guitarristas y canciones que la usan",
        blocks: [
          {
            type: "p",
            text: "Jimi Hendrix la usó en canciones como «Voodoo Child (Slight Return)» y «Little Wing», y Stevie Ray Vaughan afinaba medio tono abajo, una costumbre que se suele atribuir a la influencia de Hendrix. Slash grabó en esta afinación «Sweet Child o' Mine» y «Welcome to the Jungle» con Guns N' Roses, y la guitarra de Eddie Van Halen en «Eruption» también estaba medio tono abajo.",
          },
          {
            type: "p",
            text: "Si quieres tocar sobre la grabación de alguna de ellas, afina así y toca con las posiciones de siempre: los acordes coinciden sin transportar nada.",
          },
        ],
      },
    ],
    tips: [
      "Baja cada cuerda un poco por debajo de la nota y vuelve a subir hasta el centro: así la clavija queda firme.",
      "Al quitar tensión, el mástil puede relajarse un poco: repasa la afinación después de unos minutos de tocar.",
      "Si tocas con alguien en afinación estándar, recuerda que tu Mi suena como su Mi♭: transporta o afinen igual.",
      "Para volver a la afinación estándar, usa el [afinador de guitarra](/herramientas/afinador/guitarra).",
    ],
    faqs: [
      {
        question: "¿Qué notas tiene la guitarra medio tono abajo?",
        answer: "De la 6.ª cuerda a la 1.ª: Mi♭, La♭, Re♭, Sol♭, Si♭ y Mi♭ (E♭ A♭ D♭ G♭ B♭ E♭).",
      },
      {
        question: "¿Es lo mismo afinar en Mi♭ que en Re♯?",
        answer:
          "Sí: Mi♭ y Re♯ son la misma nota con dos nombres (notas enarmónicas). Algunos afinadores muestran Re♯, Sol♯, Do♯, Fa♯, La♯ y Re♯; las frecuencias son idénticas.",
      },
      {
        question: "¿Necesito cuerdas diferentes?",
        answer:
          "No. Medio tono quita poca tensión y el juego de siempre funciona bien. Algunos guitarristas suben un calibre para recuperar firmeza bajo los dedos.",
      },
    ],
    courseId: "guitarra-electrica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "como-transportar-una-cancion", "guitarra-acustica-o-electrica-cual-aprender-primero"],
  },
  {
    ...GUITAR,
    slug: "guitarra-un-tono-abajo",
    variant: "un tono abajo",
    headline: "Afinador de guitarra un tono abajo online",
    seoTitle: "Afinador de guitarra un tono abajo gratis",
    metaDescription:
      "Afina tu guitarra un tono abajo (D standard) con el micrófono: Re Sol Do Fa La Re, cuánta tensión pierden las cuerdas y canciones que la usan.",
    intro:
      "Un tono abajo, también llamada D standard o Re estándar, baja las seis cuerdas dos semitonos: Re, Sol, Do, Fa, La, Re. Las formas de los acordes son las de siempre, pero suenan un tono más graves.",
    strings: guitarStrings([38, 43, 48, 53, 57, 62]),
    tuningName: "Un tono abajo o D standard (Re Sol Do Fa La Re)",
    sections: [
      {
        heading: "Cuándo y por qué se usa",
        blocks: [
          {
            type: "ul",
            items: [
              "**Rock pesado y metal:** muchas bandas la usan por su sonido más grave y oscuro.",
              "**Blues:** con menos tensión, los bends cuestan menos.",
              "**Guitarras de 12 cuerdas:** bajar un tono reduce la carga que las doce cuerdas ponen sobre el mástil y el puente.",
              "**Cantantes:** acerca las canciones a un registro más grave sin cambiar las digitaciones.",
            ],
          },
        ],
      },
      {
        heading: "Canciones que la usan",
        blocks: [
          {
            type: "p",
            text: "La introducción de «Come as You Are», de Nirvana, se toca en esta afinación, y fue la preferida de la banda en la época de su primer disco. «Sad but True», de Metallica, también está en D standard.",
          },
        ],
      },
      {
        heading: "Cuerdas y tensión",
        blocks: [
          {
            type: "p",
            text: "La tensión de una cuerda depende del cuadrado de su frecuencia, así que bajar un tono le quita alrededor de un 20 % de tensión a cada cuerda. Si las notas te quedan flojas o las cuerdas zumban contra los trastes, los fabricantes suelen recomendar un juego más grueso para estas afinaciones, por ejemplo .011–.056 en guitarra eléctrica.",
          },
          {
            type: "p",
            text: "Truco útil: con una cejilla en el traste 2, una guitarra afinada un tono abajo vuelve a sonar en la altura de la afinación estándar.",
          },
        ],
      },
    ],
    tips: [
      "Baja las seis cuerdas en orden, de la 6.ª a la 1.ª, y luego da una segunda vuelta: al aflojar unas, las otras suben un poco.",
      "Comprueba las cuerdas entre sí igual que en estándar: traste 5 con la cuerda siguiente, salvo la 3.ª, que se compara en el traste 4.",
      "Si la guitarra se queda en esta afinación por semanas, pide que revisen la curvatura del mástil y la altura de las cuerdas.",
      "Para volver a la afinación estándar, usa el [afinador de guitarra](/herramientas/afinador/guitarra).",
    ],
    faqs: [
      {
        question: "¿Qué notas tiene la guitarra un tono abajo?",
        answer: "De la 6.ª cuerda a la 1.ª: Re, Sol, Do, Fa, La y Re (D G C F A D).",
      },
      {
        question: "¿Es lo mismo que Drop D?",
        answer:
          "No. En Drop D solo baja la 6.ª cuerda; aquí bajan las seis. Si quieres solo la 6.ª en Re, usa el [afinador Drop D](/herramientas/afinador/guitarra-drop-d).",
      },
      {
        question: "¿Puedo tocar canciones en afinación estándar?",
        answer:
          "Sí, con las mismas posiciones, pero sonarán un tono más graves. Si necesitas la altura original, pon una cejilla en el traste 2.",
      },
    ],
    courseId: "guitarra-electrica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "como-transportar-una-cancion", "como-elegir-tu-primera-guitarra-electrica"],
  },
  {
    ...GUITAR,
    slug: "guitarra-drop-d",
    variant: "en Drop D",
    headline: "Afinador de guitarra en Drop D online",
    seoTitle: "Afinador de guitarra en Drop D gratis",
    metaDescription:
      "Afina tu guitarra en Drop D con el micrófono: solo baja la 6.ª cuerda a Re (Re La Re Sol Si Mi). Cómo hacerlo, comprobarlo de oído y canciones que la usan.",
    intro:
      "Drop D solo cambia una cuerda: la 6.ª baja un tono, de Mi a Re. Quedan Re, La, Re, Sol, Si, Mi, y las tres cuerdas graves forman un acorde de quinta que se toca con un solo dedo.",
    strings: guitarStrings([38, 45, 50, 55, 59, 64]),
    tuningName: "Drop D (Re La Re Sol Si Mi)",
    sections: [
      {
        heading: "Por qué es la afinación alternativa más popular",
        blocks: [
          {
            type: "ul",
            items: [
              "**Acordes de quinta con un dedo:** las cuerdas 6.ª, 5.ª y 4.ª forman un power chord; basta con apoyar un dedo sobre las tres en cualquier traste.",
              "**Un bajo más grave sin reafinar todo:** ganas un Re grave y el resto de la guitarra queda igual.",
              "**Tonalidades de Re:** en Re mayor o Re menor, la 6.ª al aire funciona como bajo pedal.",
            ],
          },
          {
            type: "p",
            text: "No es un invento del rock. Laudistas y guitarristas clásicos ya la usaban, John Dowland entre ellos, y hoy es la afinación alternativa más común en la guitarra clásica. A mediados de los años ochenta, bandas como King's X, Melvins y Soundgarden la convirtieron en un sello del rock pesado.",
          },
        ],
      },
      {
        heading: "Canciones en Drop D",
        blocks: [
          {
            type: "p",
            text: "«Dear Prudence», de The Beatles, está en Drop D. Tom Morello compuso el riff de «Killing in the Name», de Rage Against the Machine, mientras le enseñaba esta afinación a un estudiante, y «Outshined», de Soundgarden, es otro ejemplo clásico.",
          },
        ],
      },
      {
        heading: "Cómo comprobarla de oído",
        blocks: [
          {
            type: "ul",
            items: [
              "El armónico del traste 12 de la 6.ª cuerda (Re3) debe sonar igual que la 4.ª cuerda al aire.",
              "La 6.ª cuerda pisada en el traste 7 debe sonar igual que la 5.ª al aire (La).",
              "Para volver a la afinación estándar, sube la 6.ª hasta que el traste 5 suene igual que la 5.ª al aire.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Baja la 6.ª cuerda un poco más allá de Re y súbela despacio hasta el centro: así no se desafina al tocar.",
      "Con un juego normal (.010–.046) funciona bien; si la 6.ª te queda floja, prueba una cuerda grave más gruesa.",
      "Al bajar la 6.ª, las otras cinco suben un poco: repásalas al final.",
      "Si cambias entre estándar y Drop D en medio de una canción, practica el cambio con el afinador hasta hacerlo de oído.",
    ],
    faqs: [
      {
        question: "¿Qué cuerda cambia en Drop D?",
        answer: "Solo la 6.ª, que baja un tono, de Mi a Re. Las demás quedan en afinación estándar: La, Re, Sol, Si, Mi.",
      },
      {
        question: "¿Cómo afino en Drop D sin afinador?",
        answer:
          "Baja la 6.ª cuerda hasta que su armónico del traste 12 suene igual que la 4.ª cuerda al aire (Re). Debe sonar como la misma nota, una octava más grave, sin ondulación.",
      },
      {
        question: "¿Qué es Double Drop D?",
        answer:
          "Es Drop D con la 1.ª cuerda también bajada a Re: Re, La, Re, Sol, Si, Re. Usa este afinador para las cinco primeras y el [afinador cromático](/herramientas/afinador) para la 1.ª en Re4.",
      },
    ],
    courseId: "guitarra-electrica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "como-elegir-tu-primera-guitarra-electrica", "como-leer-tablaturas-de-guitarra-y-bajo"],
  },
  {
    ...GUITAR,
    slug: "guitarra-drop-c",
    variant: "en Drop C",
    headline: "Afinador de guitarra en Drop C online",
    seoTitle: "Afinador de guitarra en Drop C gratis",
    metaDescription:
      "Afina tu guitarra en Drop C con el micrófono: Do Sol Do Fa La Re. Qué cuerdas bajan y cuánto, qué calibre usar y canciones grabadas en Drop C.",
    intro:
      "Drop C es Drop D bajado un tono completo: Do, Sol, Do, Fa, La, Re. Las cuerdas 5.ª a 1.ª bajan un tono y la 6.ª baja dos tonos, de Mi a Do. Es la afinación de muchos riffs de rock pesado y metal.",
    strings: guitarStrings([36, 43, 48, 53, 57, 62]),
    tuningName: "Drop C (Do Sol Do Fa La Re)",
    sections: [
      {
        heading: "Cuándo se usa",
        blocks: [
          {
            type: "p",
            text: "Conserva la gran ventaja de Drop D, los acordes de quinta con un solo dedo en las tres cuerdas graves, pero un tono más abajo, con un sonido más pesado y oscuro. Por eso es tan común en el rock alternativo y el metal.",
          },
          {
            type: "p",
            text: "«Toxicity», de System of a Down, está compuesto en su mayoría en Drop C, y Metallica grabó casi todo «St. Anger» en esta afinación. Nirvana llegó a ella por accidente en una sesión de grabación: de esas canciones conservaron solo «Blew».",
          },
        ],
      },
      {
        heading: "Cuerdas, tensión y ajuste",
        blocks: [
          {
            type: "p",
            text: "Bajar tanto le quita mucha tensión a la guitarra: alrededor de un 20 % en las cinco primeras cuerdas y más de un tercio en la 6.ª. Con un juego delgado, las cuerdas quedan flojas, zumban y la afinación se mueve al tocar fuerte. Los fabricantes de cuerdas suelen recomendar juegos entre .011–.056 y .012–.060 para Drop C, y a veces un ajuste completo de la guitarra: mástil, altura de cuerdas y octavación.",
          },
        ],
      },
      {
        heading: "Drop C y C estándar no son lo mismo",
        blocks: [
          {
            type: "table",
            caption: "Dos afinaciones en Do",
            head: ["Afinación", "Notas (6.ª a 1.ª)", "Qué cambia"],
            rows: [
              ["Drop C", "Do · Sol · Do · Fa · La · Re", "6.ª baja dos tonos; las demás, uno"],
              ["C estándar", "Do · Fa · Si♭ · Mi♭ · Sol · Do", "Las seis cuerdas bajan dos tonos"],
            ],
          },
        ],
      },
    ],
    tips: [
      "Baja primero las cinco cuerdas un tono y deja la 6.ª para el final: es la que más se mueve cuando cambia la tensión de las otras.",
      "Comprueba la 6.ª con su armónico del traste 12: debe sonar igual que la 4.ª cuerda al aire (Do).",
      "Si la guitarra zumba después de bajarla, no subas la acción a ciegas: consulta un técnico o cambia a un calibre más grueso.",
      "Afina con la guitarra en posición de tocar: con cuerdas tan flojas, un poco de presión sobre el mástil cambia la nota.",
    ],
    faqs: [
      {
        question: "¿Qué notas tiene Drop C?",
        answer: "De la 6.ª cuerda a la 1.ª: Do, Sol, Do, Fa, La y Re (C G C F A D).",
      },
      {
        question: "¿Cómo paso de Drop D a Drop C?",
        answer: "Baja las seis cuerdas un tono. Las relaciones entre cuerdas son las mismas, así que las digitaciones de Drop D sirven igual.",
      },
      {
        question: "¿Puedo usar Drop C en una guitarra acústica?",
        answer:
          "Sí, pero con cuerdas normales quedarán muy flojas. Usa un calibre más grueso y revisa que el puente y el mástil estén bien ajustados.",
      },
    ],
    courseId: "guitarra-electrica",
    relatedPostSlugs: ["como-elegir-tu-primera-guitarra-electrica", "como-limpiar-y-cuidar-una-guitarra-electrica", "como-leer-tablaturas-de-guitarra-y-bajo"],
  },
  {
    ...GUITAR,
    slug: "guitarra-dadgad",
    variant: "en DADGAD",
    headline: "Afinador de guitarra en DADGAD online",
    seoTitle: "Afinador DADGAD para guitarra gratis",
    metaDescription:
      "Afina tu guitarra en DADGAD con el micrófono: Re La Re Sol La Re. Qué cuerdas bajar, de dónde viene esta afinación y por qué suena tan abierta.",
    intro:
      "DADGAD toma su nombre de sus notas en cifrado americano: Re, La, Re, Sol, La, Re. Se bajan un tono la 6.ª, la 2.ª y la 1.ª cuerda, y al aire suena un acorde suspendido, ni mayor ni menor.",
    strings: guitarStrings([38, 45, 50, 55, 57, 62]),
    tuningName: "DADGAD (Re La Re Sol La Re)",
    sections: [
      {
        heading: "Un sonido abierto y modal",
        blocks: [
          {
            type: "p",
            text: "Al aire, DADGAD forma un acorde de Re con cuarta suspendida: no tiene tercera, así que no es ni mayor ni menor. Esa ambigüedad permite dejar sonar cuerdas al aire como bordones mientras la melodía se mueve encima, y hace que muchas formas de acordes se puedan desplazar por el mástil sin perder ese colchón sonoro.",
          },
          {
            type: "p",
            text: "Por eso encaja tan bien en la música celta, el folk y la guitarra acústica fingerstyle, aunque también aparece en el rock y el metal.",
          },
        ],
      },
      {
        heading: "De dónde viene",
        blocks: [
          {
            type: "p",
            text: "La popularizó el guitarrista británico Davey Graham a comienzos de los años sesenta, inspirado por un intérprete de laúd árabe (oud) que escuchó en Marruecos. En la música tradicional irlandesa, Mícheál Ó Domhnaill y Dáithí Sproule fueron los primeros guitarristas en usarla.",
          },
          {
            type: "p",
            text: "Su ejemplo más famoso en el rock es «Kashmir», de Led Zeppelin. Guitarristas acústicos como Pierre Bensusan han construido buena parte de su repertorio en ella.",
          },
        ],
      },
    ],
    tips: [
      "Solo cambian tres cuerdas: baja la 6.ª, la 2.ª y la 1.ª un tono. La 5.ª, la 4.ª y la 3.ª quedan como en la afinación estándar.",
      "Comprueba la 6.ª con la 4.ª: su armónico del traste 12 debe sonar igual que la 4.ª al aire (Re).",
      "La 2.ª cuerda (La) debe sonar igual que la 5.ª al aire, una octava más aguda; la 1.ª, igual que la 4.ª, una octava arriba.",
      "Explora dejando sonar las cuerdas al aire: en DADGAD, buena parte de la gracia está en lo que no pisas.",
    ],
    faqs: [
      {
        question: "¿Qué significa DADGAD?",
        answer: "Son las notas de la 6.ª a la 1.ª cuerda en cifrado americano: D A D G A D, es decir, Re, La, Re, Sol, La, Re.",
      },
      {
        question: "¿Qué cuerdas cambian respecto a la afinación estándar?",
        answer: "Tres: la 6.ª (Mi a Re), la 2.ª (Si a La) y la 1.ª (Mi a Re). Todas bajan un tono.",
      },
      {
        question: "¿En qué se diferencia de Open D?",
        answer:
          "Solo en la 3.ª cuerda: en DADGAD es Sol y en [Open D](/herramientas/afinador/guitarra-open-d) baja medio tono a Fa♯, lo que convierte el acorde suspendido en un Re mayor.",
      },
    ],
    courseId: "guitarra-acustica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "modos-griegos-explicados", "como-empezar-a-improvisar"],
  },
  {
    ...GUITAR,
    slug: "guitarra-open-g",
    variant: "en Open G",
    headline: "Afinador de guitarra en Open G online",
    seoTitle: "Afinador Open G (Sol abierta) para guitarra",
    metaDescription:
      "Afina tu guitarra en Open G (Sol abierta) con el micrófono: Re Sol Re Sol Si Re. Para slide y blues, con la versión de cinco cuerdas de Keith Richards.",
    intro:
      "En Open G, o Sol abierta, la guitarra forma un acorde de Sol mayor al aire: Re, Sol, Re, Sol, Si, Re. Se bajan un tono la 6.ª, la 5.ª y la 1.ª cuerda; las otras tres no cambian.",
    strings: guitarStrings([38, 43, 50, 55, 59, 62]),
    tuningName: "Open G o Sol abierta (Re Sol Re Sol Si Re)",
    sections: [
      {
        heading: "Slide, blues y acordes con un dedo",
        blocks: [
          {
            type: "p",
            text: "Como las cuerdas al aire ya forman un acorde mayor, basta con poner un dedo (o un slide) atravesado sobre todas las cuerdas para tocar otro acorde mayor: en el traste 5 suena Do y en el 7, Re. Por eso es una de las afinaciones favoritas del blues, el slide y el folk.",
          },
          {
            type: "p",
            text: "Tiene una larga historia. En la guitarra hawaiana slack-key se la conoce como afinación «Taro Patch», y en el siglo XIX se la llamó afinación «española» por «Spanish Fandango», una pieza para guitarra de salón de Henry Worrall escrita en Sol abierta.",
          },
        ],
      },
      {
        heading: "La Open G de cinco cuerdas de Keith Richards",
        blocks: [
          {
            type: "p",
            text: "Keith Richards, de los Rolling Stones, empezó a experimentar con afinaciones abiertas a finales de los años sesenta. Usa Open G con solo cinco cuerdas: quita la 6.ª, porque según él estorba, y deja Sol, Re, Sol, Si, Re. Con esa guitarra grabó riffs como los de «Honky Tonk Women», «Brown Sugar» y «Start Me Up».",
          },
          {
            type: "p",
            text: "Si quieres probarla sin quitar ninguna cuerda, simplemente no toques la 6.ª: el riff suena igual.",
          },
        ],
      },
    ],
    tips: [
      "Baja la 6.ª y la 5.ª un tono cada una; comprueba que la 6.ª suene igual que la 4.ª una octava abajo.",
      "La 1.ª cuerda baja a Re4 y debe sonar igual que la 4.ª cuerda al aire, una octava más aguda.",
      "Para slide, apoya el tubo justo encima del traste, sin presionar: así las notas quedan afinadas.",
      "Rasguea las seis cuerdas al aire al terminar: deben sonar como un Sol mayor limpio.",
    ],
    faqs: [
      {
        question: "¿Qué notas tiene Open G?",
        answer: "De la 6.ª cuerda a la 1.ª: Re, Sol, Re, Sol, Si y Re (D G D G B D). Al aire forman un acorde de Sol mayor.",
      },
      {
        question: "¿Qué cuerdas cambian?",
        answer: "Tres, y todas bajan un tono: la 6.ª (Mi a Re), la 5.ª (La a Sol) y la 1.ª (Mi a Re).",
      },
      {
        question: "¿Open G y Sol abierta son lo mismo?",
        answer: "Sí. Open G es el nombre en inglés; en español también se dice afinación abierta de Sol o Sol abierta.",
      },
    ],
    courseId: "guitarra-acustica",
    relatedPostSlugs: ["acordes-basicos-de-guitarra-para-principiantes", "como-empezar-a-improvisar", "ritmos-de-guitarra-rasgueos-basicos"],
  },
  {
    ...GUITAR,
    slug: "guitarra-open-d",
    variant: "en Open D",
    headline: "Afinador de guitarra en Open D online",
    seoTitle: "Afinador Open D (Re abierta) para guitarra",
    metaDescription:
      "Afina tu guitarra en Open D (Re abierta) con el micrófono: Re La Re Fa♯ La Re. Qué cuerdas bajar, por qué se usa en slide y canciones conocidas.",
    intro:
      "Open D, o Re abierta, deja la guitarra en un acorde de Re mayor al aire: Re, La, Re, Fa♯, La, Re. Bajan un tono la 6.ª, la 2.ª y la 1.ª cuerda, y medio tono la 3.ª.",
    strings: guitarStrings([38, 45, 50, 54, 57, 62]),
    tuningName: "Open D o Re abierta (Re La Re Fa♯ La Re)",
    sections: [
      {
        heading: "Slide y fingerstyle",
        blocks: [
          {
            type: "p",
            text: "Open D es muy popular para tocar con slide, porque el tubo forma acordes mayores completos en cualquier traste. Como todas las cuerdas que cambian bajan, la tensión total es menor que en la afinación estándar, algo cómodo para el slide en guitarra acústica. También funciona muy bien para fingerstyle, con bajos al aire que suenan mientras la melodía va en las cuerdas agudas.",
          },
          {
            type: "p",
            text: "En inglés también se la llama «Vestapol», una deformación de «Sebastopol», una pieza para guitarra de salón publicada por Henry Worrall en 1856 y escrita en esta afinación.",
          },
        ],
      },
      {
        heading: "Canciones en Open D",
        blocks: [
          {
            type: "p",
            text: "Elmore James tocó en Open D su versión de «Dust My Broom», uno de los riffs de slide más imitados del blues. La parte de guitarra de Stone Gossard en «Even Flow», de Pearl Jam, está en esta afinación, y Mumford & Sons la usan con cejilla en el traste 2 en «The Cave».",
          },
        ],
      },
      {
        heading: "Open D, DADGAD y Open E",
        blocks: [
          {
            type: "p",
            text: "Open D y [DADGAD](/herramientas/afinador/guitarra-dadgad) solo se diferencian en la 3.ª cuerda: Fa♯ en Open D, Sol en DADGAD. Y [Open E](/herramientas/afinador/guitarra-open-e) tiene exactamente los mismos intervalos un tono más arriba, así que una guitarra en Open D con cejilla en el traste 2 suena en Open E.",
          },
        ],
      },
    ],
    tips: [
      "Baja la 6.ª, la 2.ª y la 1.ª un tono, y la 3.ª solo medio tono (de Sol a Fa♯).",
      "Comprueba que la 6.ª, la 4.ª y la 1.ª suenen como el mismo Re en tres octavas distintas.",
      "La 3.ª cuerda (Fa♯) define si el acorde es mayor: si el rasgueo al aire suena raro, revísala primero.",
      "Para slide, una altura de cuerdas un poco mayor ayuda a que el tubo no choque con los trastes.",
    ],
    faqs: [
      {
        question: "¿Qué notas tiene Open D?",
        answer: "De la 6.ª cuerda a la 1.ª: Re, La, Re, Fa♯, La y Re (D A D F♯ A D). Al aire forman un acorde de Re mayor.",
      },
      {
        question: "¿Qué cuerdas cambian respecto a la afinación estándar?",
        answer: "Cuatro: la 6.ª (Mi a Re), la 3.ª (Sol a Fa♯), la 2.ª (Si a La) y la 1.ª (Mi a Re). La 5.ª y la 4.ª no cambian.",
      },
      {
        question: "¿Open D con cejilla en el traste 2 es lo mismo que Open E?",
        answer:
          "Suena igual: las dos tienen los mismos intervalos. Muchos guitarristas prefieren esa opción porque no tienen que subir la tensión de ninguna cuerda.",
      },
    ],
    courseId: "guitarra-acustica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "acordes-basicos-de-guitarra-para-principiantes", "como-empezar-a-improvisar"],
  },
  {
    ...GUITAR,
    slug: "guitarra-open-e",
    variant: "en Open E",
    headline: "Afinador de guitarra en Open E online",
    seoTitle: "Afinador Open E (Mi abierta) para guitarra",
    metaDescription:
      "Afina tu guitarra en Open E (Mi abierta) con el micrófono: Mi Si Mi Sol♯ Si Mi. Qué cuerdas subir, cuidados con la tensión y la opción con cejilla.",
    intro:
      "Open E, o Mi abierta, forma un acorde de Mi mayor al aire: Mi, Si, Mi, Sol♯, Si, Mi. A diferencia de otras afinaciones abiertas, aquí se suben cuerdas: la 5.ª y la 4.ª un tono, y la 3.ª medio tono.",
    strings: guitarStrings([40, 47, 52, 56, 59, 64]),
    tuningName: "Open E o Mi abierta (Mi Si Mi Sol♯ Si Mi)",
    sections: [
      {
        heading: "Más tensión: tenlo en cuenta",
        blocks: [
          {
            type: "p",
            text: "Subir una cuerda un tono aumenta su tensión alrededor de un 26 %. En Open E, eso pasa en la 5.ª y la 4.ª, y la 3.ª sube medio tono. La guitarra se siente más dura, el mástil recibe más carga y aumenta el riesgo de reventar una cuerda, sobre todo en guitarras acústicas.",
          },
          {
            type: "p",
            text: "Por eso muchos guitarristas prefieren afinar en [Open D](/herramientas/afinador/guitarra-open-d) y poner una cejilla en el traste 2: suena en Mi mayor con los mismos intervalos y sin subir la tensión.",
          },
        ],
      },
      {
        heading: "Slide eléctrico y canciones en Open E",
        blocks: [
          {
            type: "p",
            text: "Duane Allman, de The Allman Brothers Band, tocó en Open E la mayor parte de su trabajo con slide, como en «Statesboro Blues», y Derek Trucks también la usa. «She Talks to Angels», de The Black Crowes, está en esta afinación. Keith Richards ha contado que para él Open D y Open E son «lo mismo»: los mismos intervalos, un tono de diferencia.",
          },
        ],
      },
    ],
    tips: [
      "Sube las cuerdas despacio, en dos o tres pasos, y deja que se asienten entre uno y otro.",
      "La 6.ª, la 2.ª y la 1.ª no cambian: afínalas primero como referencia.",
      "Si tu guitarra es acústica o las cuerdas son viejas, considera Open D con cejilla en el traste 2.",
      "Si vas a dejar la guitarra en Open E por mucho tiempo, pide que revisen el mástil; si no, vuelve a la afinación estándar al terminar.",
    ],
    faqs: [
      {
        question: "¿Qué notas tiene Open E?",
        answer: "De la 6.ª cuerda a la 1.ª: Mi, Si, Mi, Sol♯, Si y Mi (E B E G♯ B E). Al aire forman un acorde de Mi mayor.",
      },
      {
        question: "¿Open E le hace daño a la guitarra?",
        answer:
          "Sube la tensión del mástil, pero una guitarra en buen estado la soporta para tocar un rato. Si la vas a dejar así mucho tiempo, consulta a un técnico; si no quieres riesgos, usa Open D con cejilla en el traste 2.",
      },
      {
        question: "¿Qué cuerdas suben y cuánto?",
        answer: "La 5.ª sube un tono (La a Si), la 4.ª un tono (Re a Mi) y la 3.ª medio tono (Sol a Sol♯). Las demás no cambian.",
      },
    ],
    courseId: "guitarra-electrica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "como-limpiar-y-cuidar-una-guitarra-electrica", "como-cambiar-las-cuerdas-de-la-guitarra"],
  },
];
