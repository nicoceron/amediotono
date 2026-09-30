import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-transportar-una-cancion",
  title: "Cómo transportar una canción a otra tonalidad",
  description:
    "Cambia una canción de tonalidad para tu voz o tu instrumento: por semitonos, por grados, con capotraste en guitarra y para instrumentos transpositores.",
  excerpt:
    "Transportar es mover todas las notas y acordes la misma distancia. Aprende a hacerlo por semitonos o por grados, con capotraste y para clarinete, trompeta o saxofón.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo transportar una canción",
    "cambiar el tono de una canción",
    "transportar acordes",
    "bajarle el tono a una canción para cantar",
    "capotraste tabla de tonos",
    "instrumentos transpositores",
  ],
  intro: [
    "Transportar una canción es subir o bajar **todas** sus notas y acordes la misma distancia. La forma más rápida: cuenta cuántos semitonos hay entre la tonalidad original y la nueva, y mueve cada acorde esa misma cantidad sin cambiar su tipo (mayor, menor, séptima). Si la canción está en Sol y la quieres en La, todo sube dos semitonos: Sol – Re – Mim – Do se vuelve La – Mi – Fa♯m – Re.",
    "Se transporta para que una canción quede cómoda para tu voz, para tocar en una tonalidad más fácil en tu instrumento o para leer con instrumentos como el clarinete o el saxofón, que suenan distinto a lo que está escrito.",
  ],
  keyTakeaways: [
    "Transportar es mover todo el mismo intervalo: el tipo de cada acorde no cambia.",
    "Por semitonos es lo más rápido; por grados (I, IV, V) es lo más útil a largo plazo.",
    "En guitarra, cada traste del capotraste sube un semitono la tonalidad que suena.",
    "Para tu voz, decide la tonalidad por la nota más aguda y la más grave de la melodía, no por el primer verso.",
    "Clarinete, trompeta y saxofón leen transportado: un Do escrito en un saxo alto suena Mi♭.",
  ],
  sections: [
    {
      id: "tonalidad-para-tu-voz",
      heading: "Cómo encontrar la tonalidad ideal para tu voz",
      blocks: [
        {
          type: "ol",
          items: [
            "Busca la nota más aguda de la canción, casi siempre en el coro o en el puente, y la más grave, a menudo en el primer verso.",
            "Canta la canción completa con la grabación o con el acompañamiento original.",
            "Si te esfuerzas o gritas en lo agudo, hay que bajar; si lo grave se te pierde o suena sin cuerpo, hay que subir.",
            "Prueba moviendo de a uno o dos semitonos y quédate con la tonalidad en la que las dos puntas salen cómodas.",
            "Anota la tonalidad final en tu cancionero para no repetir la búsqueda.",
          ],
        },
        {
          type: "p",
          text: "Cuando un hombre canta una canción grabada por una mujer, o al revés, a veces basta con cantarla una octava abajo o arriba, pero con frecuencia queda demasiado grave o aguda y conviene moverla además una cuarta o una quinta. Si no sabes cuál es tu rango, el [test de tipo de voz](/herramientas/tipo-de-voz) te da una primera referencia, y un profe de [canto](/clases/canto) puede ajustarla con tu repertorio.",
        },
        {
          type: "p",
          text: "Ojo con el lenguaje cotidiano: cuando alguien pide “bájale un tono”, en teoría son dos semitonos, pero muchas veces quiere decir “un poquito”. Pregunta cuántos semitonos o trastes quiere y evitarás sorpresas en el ensayo.",
        },
      ],
    },
    {
      id: "transportar-por-semitonos",
      heading: "Método 1: transportar acordes por semitonos",
      blocks: [
        {
          type: "p",
          text: "Usa la escala cromática, las doce notas separadas por semitonos. Entre Mi y Fa, y entre Si y Do, no hay nota intermedia:",
        },
        {
          type: "p",
          text: "**Do – Do♯/Re♭ – Re – Re♯/Mi♭ – Mi – Fa – Fa♯/Sol♭ – Sol – Sol♯/La♭ – La – La♯/Si♭ – Si – Do**",
        },
        {
          type: "ol",
          items: [
            "Cuenta cuántos semitonos hay de la tónica original a la nueva, y en qué dirección.",
            "Mueve cada acorde esa misma cantidad y conserva todo lo que viene después de la letra: m, 7, maj7, sus4.",
            "Si hay un bajo indicado, muévelo también: Do/Mi, subido dos semitonos, es Re/Fa♯.",
            "Escribe las alteraciones según la nueva tonalidad: en Fa mayor se escribe Si♭, no La♯; en Mi mayor, Sol♯ y no La♭.",
          ],
        },
        {
          type: "p",
          text: "Ejemplo bajando dos semitonos, de Mi a Re: Mi – Do♯m – La – Si7 queda Re – Sim – Sol – La7.",
        },
      ],
    },
    {
      id: "transportar-por-grados",
      heading: "Método 2: transportar pensando en grados",
      blocks: [
        {
          type: "p",
          text: "Los músicos con experiencia no cuentan semitonos: piensan en números. Si sabes que una canción es I – V – vi – IV, puedes tocarla en cualquier tonalidad con esta tabla:",
        },
        {
          type: "table",
          caption: "Acordes de los primeros seis grados en tonalidades frecuentes",
          head: ["Tonalidad", "I", "ii", "iii", "IV", "V", "vi"],
          rows: [
            ["Do", "Do", "Rem", "Mim", "Fa", "Sol", "Lam"],
            ["Re", "Re", "Mim", "Fa♯m", "Sol", "La", "Sim"],
            ["Mi", "Mi", "Fa♯m", "Sol♯m", "La", "Si", "Do♯m"],
            ["Fa", "Fa", "Solm", "Lam", "Si♭", "Do", "Rem"],
            ["Sol", "Sol", "Lam", "Sim", "Do", "Re", "Mim"],
            ["La", "La", "Sim", "Do♯m", "Re", "Mi", "Fa♯m"],
            ["Si♭", "Si♭", "Dom", "Rem", "Mi♭", "Fa", "Solm"],
          ],
        },
        {
          type: "p",
          text: "Este método te obliga a entender la función de cada acorde, y a la larga te permite transportar a primera vista. Para completar la tabla en cualquier tonalidad, apóyate en el [círculo de quintas](/blog/circulo-de-quintas-explicado).",
        },
      ],
    },
    {
      id: "transportar-una-melodia",
      heading: "Cómo transportar una melodía escrita",
      blocks: [
        {
          type: "ol",
          items: [
            "Define el intervalo exacto, por ejemplo una segunda mayor hacia arriba, de Do a Re.",
            "Escribe la nueva armadura: Re mayor lleva Fa♯ y Do♯.",
            "Mueve cada nota el mismo número de líneas y espacios; para una segunda, un solo paso.",
            "Revisa las alteraciones sueltas: deben conservar el intervalo. Un Fa♯ en Do pasa a Sol♯ en Re, y un Si♭ pasa a Do natural, con becuadro.",
            "Comprueba que la nota más aguda y la más grave sigan dentro del registro del instrumento o de la voz.",
          ],
        },
        {
          type: "p",
          text: "El error típico es mover solo la letra sin cuidar la calidad del intervalo: de Mi a Fa hay un semitono y de Re a Mi un tono. La armadura correcta resuelve la mayoría de esos casos; para lo demás, repasa [qué es un intervalo musical](/blog/que-es-un-intervalo-musical).",
        },
      ],
    },
    {
      id: "capotraste-en-guitarra",
      heading: "Transportar en guitarra con capotraste",
      blocks: [
        {
          type: "p",
          text: "El capotraste, también llamado capo o cejilla móvil, se pone sobre un traste y sube un semitono la afinación de todas las cuerdas por cada traste. Así puedes tocar con las mismas formas de acordes, pero en otra tonalidad:",
        },
        {
          type: "table",
          caption: "Tonalidad que suena según la forma que tocas y el traste del capotraste",
          head: ["Traste", "Forma de Sol", "Forma de Do", "Forma de Re"],
          rows: [
            ["1", "La♭", "Re♭", "Mi♭"],
            ["2", "La", "Re", "Mi"],
            ["3", "Si♭", "Mi♭", "Fa"],
            ["4", "Si", "Mi", "Fa♯"],
            ["5", "Do", "Fa", "Sol"],
            ["7", "Re", "Sol", "La"],
          ],
        },
        {
          type: "p",
          text: "El capotraste solo sube. Para bajar, cambia de formas (si la tocas con formas de Mi y la necesitas en Mi♭, usa formas de Re con capotraste en el 1) o afina todas las cuerdas medio tono abajo. Los acordes con cejilla también ayudan: una misma forma, corrida un traste, sube un semitono. Aprende a hacerla en [cómo hacer la cejilla en guitarra](/blog/como-hacer-la-cejilla-en-guitarra).",
        },
      ],
    },
    {
      id: "instrumentos-transpositores",
      heading: "Instrumentos transpositores: por qué leen otra nota",
      blocks: [
        {
          type: "p",
          text: "En algunos instrumentos, la nota escrita no coincide con la que suena. Se nombran por la nota que suena cuando leen un Do. El sonido real se llama “sonido de concierto”.",
        },
        {
          type: "table",
          caption: "Transpositores más comunes en bandas y orquestas",
          head: ["Instrumento", "Cuando lee Do, suena", "Para escribirle su parte desde el sonido real"],
          rows: [
            ["Clarinete, trompeta y saxo soprano en Si♭", "Si♭, una 2ª mayor más abajo", "Subir una 2ª mayor"],
            ["Saxo tenor (Si♭)", "Si♭, una 9ª mayor más abajo", "Subir una 9ª mayor (octava + 2ª mayor)"],
            ["Saxo alto (Mi♭)", "Mi♭, una 6ª mayor más abajo", "Subir una 6ª mayor"],
            ["Saxo barítono (Mi♭)", "Mi♭, una octava y una 6ª mayor más abajo", "Subir una octava y una 6ª mayor"],
            ["Corno francés (Fa)", "Fa, una 5ª justa más abajo", "Subir una 5ª justa"],
            ["Guitarra y bajo", "Do, una octava más abajo", "Escribir una octava más arriba"],
          ],
        },
        {
          type: "p",
          text: "Ejemplo práctico: si el piano toca en Si♭ mayor, el clarinete y la trompeta leen en Do mayor, el saxo alto en Sol mayor y el corno en Fa mayor. Flauta traversa, oboe, violín, trombón y piano leen lo mismo que suena.",
        },
      ],
    },
    {
      id: "errores-al-transportar",
      heading: "Errores comunes al transportar",
      blocks: [
        {
          type: "ul",
          items: [
            "Cambiar el tipo de acorde: un Lam transportado sigue siendo menor.",
            "Mezclar sostenidos y bemoles en la misma tonalidad.",
            "Elegir la tonalidad por el verso y descubrir en el coro que no alcanzas.",
            "Poner el capotraste pensando que baja la tonalidad.",
            "Olvidar el bajo de los acordes con barra, como Do/Mi.",
            "En una banda, no aclarar si se habla de sonido real o de nota escrita.",
          ],
        },
        {
          type: "p",
          text: "Transportar es una destreza que se entrena como cualquier otra. En las clases de [teoría musical](/clases/teoria-musical) se practica con canciones reales, primero con acordes y luego con melodías escritas.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué significa bajarle medio tono a una canción?",
      answer:
        "Mover todas sus notas y acordes un semitono hacia abajo: Sol pasa a Fa♯, Do a Si y Mim a Re♯m. En guitarra se logra afinando todas las cuerdas medio tono abajo, o cambiando de formas de acordes.",
    },
    {
      question: "¿Transportar cambia la canción?",
      answer:
        "La melodía y la armonía siguen siendo las mismas, porque todas las distancias se conservan. Cambian la altura y el color: más aguda suena más brillante y tensa; más grave, más oscura y relajada.",
    },
    {
      question: "¿Por qué la trompeta y el piano no leen las mismas notas?",
      answer:
        "Porque la trompeta más común está en Si♭: cuando lee un Do, suena Si♭. Para que suenen igual, su parte se escribe una segunda mayor más arriba que la del piano. Esta convención permite usar las mismas digitaciones en instrumentos de distintos tamaños de la misma familia.",
    },
    {
      question: "¿Hay aplicaciones que transportan automáticamente?",
      answer:
        "Sí, muchos sitios de cifrados y programas de partituras tienen un botón para cambiar de tonalidad. Son útiles para comprobar, pero conviene saber hacerlo a mano: en un ensayo no siempre hay tiempo de buscar el botón.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "guitarra-acustica", "canto"],
  relatedPostSlugs: [
    "circulo-de-quintas-explicado",
    "que-es-la-armonia-musical",
    "como-saber-mi-tipo-de-voz",
  ],
  cta: "clases",
};
