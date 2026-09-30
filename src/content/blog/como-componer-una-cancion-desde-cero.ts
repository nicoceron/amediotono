import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-componer-una-cancion-desde-cero",
  title: "Cómo componer una canción desde cero, paso a paso",
  description:
    "Compón tu primera canción: de la idea al coro, la estructura, una progresión sencilla, la melodía, tu propia letra y una demo grabada en el celular.",
  excerpt:
    "Para componer tu primera canción no necesitas teoría avanzada: una idea, cuatro acordes, una melodía que te guste y una letra tuya. Te mostramos el proceso completo, paso a paso.",
  category: "aprender-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo componer una canción",
    "cómo hacer una canción desde cero",
    "cómo escribir una canción",
    "estructura de una canción verso y coro",
    "progresiones de acordes para componer",
    "cómo escribir la letra de una canción",
  ],
  intro: [
    "Para componer una canción desde cero, empieza por una idea pequeña (una frase, un riff, un ritmo o cuatro acordes) y constrúyele un **coro**. Después ordena las partes en una estructura sencilla, como verso–coro–verso–coro, elige una **progresión** de tres o cuatro acordes, busca la **melodía** cantando encima, escribe la **letra** cuidando los acentos y graba una **demo** en el celular.",
    "No necesitas teoría avanzada ni un estudio. Necesitas terminar: una canción imperfecta y completa enseña más que diez comienzos guardados en el celular.",
  ],
  keyTakeaways: [
    "Empieza por el coro o por la frase que más te gusta; el resto de la canción se construye alrededor.",
    "Una estructura verso–coro–verso–coro–puente–coro funciona para la mayoría de canciones.",
    "Tres o cuatro acordes bastan; el contraste entre verso y coro importa más que la complejidad.",
    "En la letra, las sílabas acentuadas deben caer en los tiempos fuertes de la música.",
    "Graba una demo simple con metrónomo y escúchala al día siguiente, con oídos frescos.",
  ],
  sections: [
    {
      id: "capturar-la-idea",
      heading: "Paso 1: captura la idea antes de que se escape",
      blocks: [
        {
          type: "p",
          text: "Las canciones rara vez nacen completas. Nacen de un fragmento: una frase que se te ocurrió en el bus, un riff que salió calentando, un ritmo que te quedó sonando o una emoción concreta. Graba todo en las notas de voz del celular, con fecha y una palabra clave, y no lo juzgues en el momento.",
        },
        {
          type: "p",
          text: "Cuando tengas varias ideas, escoge la que más se te repite en la cabeza y conviértela en el coro. El coro es la parte que la gente recuerda; si esa parte funciona, el resto se puede construir.",
        },
      ],
    },
    {
      id: "estructura",
      heading: "Paso 2: elige una estructura",
      blocks: [
        {
          type: "table",
          caption: "Las partes de una canción y qué hace cada una",
          head: ["Sección", "Función", "Consejo"],
          rows: [
            ["Intro", "Presenta el ambiente y la tonalidad", "Corta: a menudo son los acordes del coro o del verso"],
            ["Verso", "Cuenta la historia, da detalles", "Cambia la letra en cada verso; la música se repite"],
            ["Pre-coro (opcional)", "Crea expectativa antes del coro", "Sube la energía o deja un pequeño silencio antes del coro"],
            ["Coro", "Resume la idea central", "Misma letra cada vez, con el título incluido"],
            ["Puente", "Da un respiro y un contraste", "Otros acordes, otra perspectiva en la letra"],
            ["Final", "Cierra la canción", "Repite el coro, o termina con la intro"],
          ],
        },
        {
          type: "p",
          text: "La forma más usada es verso – coro – verso – coro – puente – coro. Otra clásica es la AABA de muchos estándares del siglo XX, donde la sección A se repite y la B funciona como puente. Para una primera canción, basta con dos versos y un coro que se repite tres veces.",
        },
      ],
    },
    {
      id: "progresion-de-acordes",
      heading: "Paso 3: una progresión de acordes sencilla",
      blocks: [
        {
          type: "p",
          text: "Primero elige una tonalidad cómoda para tu voz; si la melodía resulta muy aguda o grave, luego puedes [transportar la canción](/blog/como-transportar-una-cancion). Estas progresiones en Sol se tocan con acordes abiertos en la [guitarra](/clases/guitarra-acustica) y son fáciles en el [piano](/clases/piano):",
        },
        {
          type: "table",
          caption: "Progresiones para empezar, en Sol mayor",
          head: ["Progresión", "Acordes", "Sensación"],
          rows: [
            ["I – V – vi – IV", "Sol – Re – Mim – Do", "Abierta, optimista; muy común en el pop"],
            ["I – vi – IV – V", "Sol – Mim – Do – Re", "Nostálgica, de balada clásica"],
            ["vi – IV – I – V", "Mim – Do – Sol – Re", "Más melancólica, aunque son los mismos acordes de la primera"],
            ["I – IV – V", "Sol – Do – Re", "Directa, de rock and roll y música popular"],
            ["I – IV", "Sol – Do", "Muy sencilla; deja todo el protagonismo a la melodía"],
          ],
        },
        {
          type: "p",
          text: "El secreto está en el contraste: si el verso gira sobre vi – IV – I – V, el coro puede arrancar en I para sentirse más luminoso, o cambiar de acorde más seguido para ganar energía. En [qué es la armonía musical](/blog/que-es-la-armonia-musical) explicamos por qué cada acorde produce reposo, movimiento o tensión.",
        },
      ],
    },
    {
      id: "melodia",
      heading: "Paso 4: encuentra la melodía",
      blocks: [
        {
          type: "p",
          text: "Graba dos minutos de tu progresión en bucle y canta encima con sílabas sin sentido, como “na na” o “la la”. Hazlo varias veces sin detenerte y después escucha: casi siempre aparecen dos o tres fragmentos que valen la pena. Guárdalos y trabaja sobre ellos.",
        },
        {
          type: "ul",
          items: [
            "**Notas del acorde en los tiempos fuertes:** sobre Sol, las notas Sol, Si y Re suenan firmes; las demás funcionan de paso.",
            "**Registro:** el verso en la zona media o grave de tu voz y el coro un poco más arriba. Ese ascenso le da fuerza.",
            "**Repetición con variación:** repite un motivo corto y cámbiale solo el final.",
            "**Pregunta y respuesta:** que la primera frase termine en una nota abierta y la segunda vuelva a la tónica.",
            "**Ritmo:** versos con más sílabas y notas cortas; coro con notas más largas, fáciles de cantar a coro.",
          ],
        },
      ],
    },
    {
      id: "letra",
      heading: "Paso 5: escribe tu propia letra",
      blocks: [
        {
          type: "ol",
          items: [
            "Resume de qué trata la canción en una sola oración. Si no cabe, todavía no está clara.",
            "Pon el título en el coro, al comienzo o al final de la frase, donde más se escucha.",
            "Usa los versos para mostrar detalles concretos, como el frío de la madrugada o el último bus, en lugar de palabras abstractas como “sentimiento” o “destino”.",
            "Cuida la prosodia: la sílaba acentuada de cada palabra debe caer en un tiempo fuerte. “Canción” se acentúa al final y “música” al comienzo; si la melodía los contradice, suenan mal dichos.",
            "Rima con naturalidad. La rima consonante repite vocales y consonantes desde la última vocal acentuada (canción, razón); la asonante, solo las vocales (casa, alma), y suele sonar menos forzada.",
          ],
        },
        {
          type: "p",
          text: "Evita las rimas de siempre, como corazón con canción, salvo que tengas una buena razón. Lee la letra en voz alta, sin música: si suena rara hablada, probablemente también sonará rara cantada.",
        },
      ],
    },
    {
      id: "grabar-una-demo",
      heading: "Paso 6: graba una demo sencilla",
      blocks: [
        {
          type: "ol",
          items: [
            "Define el tempo con el [metrónomo](/herramientas/metronomo) y anótalo.",
            "Graba primero el instrumento con el clic en audífonos, en una aplicación de grabación multipista (hay varias gratuitas).",
            "Graba la voz encima, escuchando el instrumento por audífonos para que no se cuele en el micrófono.",
            "Busca un lugar sin eco: un clóset con ropa o un cuarto con cortinas y cobijas suena mejor que un baño o una sala vacía.",
            "Guarda cada versión con fecha y escúchala al día siguiente. Anota qué cambiarías.",
          ],
        },
        {
          type: "callout",
          title: "Antes de publicarla",
          text: "Si vas a subir la canción a plataformas o a presentarla en público, averigua cómo registrarla ante la Dirección Nacional de Derecho de Autor. Guardar las grabaciones y borradores con fecha también te sirve como historial de tu proceso.",
        },
      ],
    },
    {
      id: "cuando-te-bloqueas",
      heading: "Cuando te bloqueas: salidas que funcionan",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cambia de instrumento:** una idea que no avanza en la guitarra puede despegar en el piano, y al revés.",
            "**Cambia el ritmo:** prueba la misma progresión en 6/8, sobre una base de cumbia o con el balanceo del bambuco; los [ritmos colombianos](/blog/ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados) abren caminos que el pop no da.",
            "**Ponte límites:** solo tres acordes, veinte minutos y una sola sección.",
            "**Termina imperfecto:** una canción acabada con un verso flojo es mejor que un coro perfecto sin canción.",
            "**Revisa que sea tuya:** si una melodía te salió demasiado fácil, cántasela a alguien y pregúntale si le recuerda otra.",
          ],
        },
        {
          type: "p",
          text: "Componer también se aprende con acompañamiento. Un profe de teoría, guitarra o piano puede ayudarte a destrabar una sección, sugerirte acordes nuevos o mostrarte por qué un coro no despega.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Necesito saber teoría musical para componer?",
      answer:
        "No para empezar: muchas canciones se componen de oído con pocos acordes. Pero la teoría ayuda a salir de los bloqueos, a entender por qué algo funciona y a probar más opciones en menos tiempo.",
    },
    {
      question: "¿Qué va primero, la letra o la música?",
      answer:
        "Las dos formas funcionan. Si empiezas por la letra, léela en voz alta para descubrir su ritmo natural. Si empiezas por la música, canta sílabas sin sentido y deja que la melodía sugiera dónde van las palabras importantes.",
    },
    {
      question: "¿Cómo sé si mi canción se parece demasiado a otra?",
      answer:
        "Las progresiones de acordes comunes aparecen en miles de canciones; lo que identifica una canción es sobre todo su melodía y su letra. Si sospechas que una melodía no es tuya, cántasela a varias personas o grábala y compárala con lo que has escuchado últimamente.",
    },
    {
      question: "¿Cuánto debe durar una canción?",
      answer:
        "No hay regla. Muchas canciones populares duran entre tres y cuatro minutos, pero para una primera canción lo importante es que cada sección diga algo y que no se repita más de la cuenta.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "guitarra-acustica", "piano"],
  relatedPostSlugs: [
    "que-es-la-armonia-musical",
    "como-transportar-una-cancion",
    "como-empezar-a-improvisar",
  ],
  cta: "clases",
};
