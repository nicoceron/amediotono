import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-empezar-a-improvisar",
  title: "¿Cómo empezar a improvisar? Guía para principiantes",
  seoTitle: "Cómo empezar a improvisar: guía para principiantes",
  description:
    "Empieza a improvisar con la escala pentatónica, frases de llamada y respuesta y bases sencillas, con ejercicios para piano, guitarra y saxofón.",
  excerpt:
    "Improvisar se aprende limitando las opciones: cinco notas, una base de uno o dos acordes y frases cortas. Te damos ejercicios concretos y claves para perderle el miedo al error.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo empezar a improvisar",
    "cómo improvisar en guitarra",
    "cómo improvisar en piano",
    "escala pentatónica para improvisar",
    "ejercicios de improvisación musical",
    "improvisar sobre una base",
  ],
  intro: [
    "Para empezar a improvisar, reduce las opciones al mínimo: una **escala pentatónica** de cinco notas, una **base** de uno o dos acordes y **frases cortas** que dialoguen entre sí, como en una conversación de llamada y respuesta. Primero juega con el ritmo; después, con las notas.",
    "Improvisar no es tocar cualquier cosa ni un talento reservado para unos pocos. Es componer en tiempo real con un vocabulario que construyes escuchando, imitando y equivocándote sin miedo.",
  ],
  keyTakeaways: [
    "La pentatónica menor de La (La, Do, Re, Mi, Sol) no tiene semitonos, así que casi ninguna nota choca con la base.",
    "Empieza improvisando con una sola nota y solo ritmo; luego con dos, luego con tres.",
    "La llamada y respuesta organiza tus ideas: una frase que pregunta y otra que resuelve en la tónica.",
    "Avanza de un acorde a dos, y de ahí al blues de 12 compases.",
    "Una nota que choca se arregla moviéndola medio tono o repitiéndola con intención.",
  ],
  sections: [
    {
      id: "que-es-improvisar",
      heading: "Improvisar no es tocar cualquier cosa",
      blocks: [
        {
          type: "p",
          text: "Una improvisación tiene reglas, igual que una conversación: una tonalidad, un compás, una forma que se repite y otros músicos a los que escuchar. Dentro de ese marco, inventas. El vocabulario son las frases que vas aprendiendo; la gramática, la armonía; y la escucha, lo que hace que lo que dices tenga sentido.",
        },
        {
          type: "p",
          text: "No es cosa solo del jazz. El blues, las descargas de la salsa y muchas tradiciones colombianas viven de improvisar: el tambor alegre dialoga con el baile en la cumbia, y en el bullerengue la cantadora improvisa versos que el coro responde. Todas comparten algo: frases cortas, repetición y mucha escucha.",
        },
      ],
    },
    {
      id: "la-escala-pentatonica",
      heading: "La escala pentatónica: cinco notas que casi no fallan",
      blocks: [
        {
          type: "p",
          text: "La pentatónica mayor toma los grados 1, 2, 3, 5 y 6 de la escala mayor: en Do, **Do – Re – Mi – Sol – La**. La pentatónica menor usa los grados 1, ♭3, 4, 5 y ♭7: en La, **La – Do – Re – Mi – Sol**. Son las mismas notas, con distinto centro. Al quitar el cuarto y el séptimo grado de la escala mayor desaparecen los semitonos, y con ellos casi todos los choques. Si quieres repasar de dónde salen, mira [escalas mayores y menores](/blog/escalas-mayores-y-menores-explicadas).",
        },
        { type: "h3", text: "En el piano: las teclas negras" },
        {
          type: "p",
          text: "Las cinco teclas negras forman una pentatónica: la de Fa♯ mayor o, con otro centro, la de Re♯ menor. Toca con la mano izquierda un Fa♯ grave y su quinta, Do♯, y con la derecha improvisa solo en teclas negras. Es imposible que suene mal, y es el mejor primer contacto con la improvisación.",
        },
        { type: "h3", text: "En la guitarra: la primera caja" },
        {
          type: "table",
          caption: "Pentatónica menor de La en quinta posición (dedo índice en el traste 5)",
          head: ["Cuerda", "Trastes", "Notas"],
          rows: [
            ["6ª (Mi grave)", "5 y 8", "La, Do"],
            ["5ª (La)", "5 y 7", "Re, Mi"],
            ["4ª (Re)", "5 y 7", "Sol, La"],
            ["3ª (Sol)", "5 y 7", "Do, Re"],
            ["2ª (Si)", "5 y 8", "Mi, Sol"],
            ["1ª (Mi aguda)", "5 y 8", "La, Do"],
          ],
        },
        { type: "h3", text: "En el saxofón: ojo con el transporte" },
        {
          type: "p",
          text: "Si la base está en La menor de concierto, en el saxo alto debes pensar en Fa♯ menor, y en el tenor o el soprano, en Si menor. Te explicamos por qué en [cómo transportar una canción](/blog/como-transportar-una-cancion). Y como el saxofón respira, tus frases tendrán un largo natural: úsalo a tu favor.",
        },
      ],
    },
    {
      id: "ritmo-primero",
      heading: "Empieza por el ritmo: el solo de una nota",
      blocks: [
        {
          type: "p",
          text: "El error más común es pensar que improvisar es correr por la escala. Un ejercicio que cambia eso de raíz:",
        },
        {
          type: "ol",
          items: [
            "Pon una base en La menor, o un [metrónomo](/herramientas/metronomo) a 80 BPM.",
            "Durante dos minutos, toca solo la nota La. Varía el ritmo: notas largas, cortas, repetidas, en el contratiempo, y deja silencios.",
            "Suma el Do y toca dos minutos más con dos notas.",
            "Suma el Re. Con tres notas y buen ritmo ya puedes decir mucho.",
            "Solo cuando eso fluya, abre la pentatónica completa.",
          ],
        },
        {
          type: "p",
          text: "Vas a notar que una frase simple con buen ritmo suena más musical que diez notas rápidas sin dirección.",
        },
      ],
    },
    {
      id: "llamada-y-respuesta",
      heading: "Llamada y respuesta: conversar con frases cortas",
      blocks: [
        {
          type: "p",
          text: "Piensa en frases de dos compases. La **llamada** termina en una nota abierta, que deja la pregunta en el aire; en La menor pentatónica, Re o Sol. La **respuesta** cierra en una nota estable, idealmente La. Deja respirar entre una y otra.",
        },
        {
          type: "ul",
          items: [
            "**Con un compañero o tu profe:** uno toca la llamada y el otro responde. Luego cambian.",
            "**En eco:** el profe toca una frase y tú la repites igual; después la repites cambiando solo el final.",
            "**Solo:** graba cuatro llamadas con silencios de dos compases entre ellas, y responde encima.",
          ],
        },
      ],
    },
    {
      id: "sobre-bases",
      heading: "Sobre bases: de un acorde al blues de 12 compases",
      blocks: [
        {
          type: "table",
          caption: "Una progresión de bases para la pentatónica menor de La",
          head: ["Etapa", "Base", "Notas de llegada"],
          rows: [
            ["1. Un acorde", "Lam7 todo el tiempo", "La, Do, Mi, Sol"],
            ["2. Dos acordes", "Lam7 – Rem7, dos compases cada uno", "La y Mi en Lam7; Re, La y Do en Rem7"],
            ["3. Blues en La", "La7 (4 compases) – Re7 (2) – La7 (2) – Mi7 – Re7 – La7 (2)", "La en La7, Re en Re7, Mi en Mi7"],
          ],
        },
        {
          type: "p",
          text: "Las notas de llegada son las del acorde que suena: terminar tus frases en ellas hace que todo suene intencional. Encuentras bases buscando “backing track en La menor” en plataformas de video, o puedes grabarlas tú en el celular. En el piano, la mano izquierda puede tocar el acorde o solo la fundamental y la quinta, mientras la derecha improvisa.",
        },
      ],
    },
    {
      id: "escuchar-e-imitar",
      heading: "Escuchar e imitar: de dónde sale el vocabulario",
      blocks: [
        {
          type: "ol",
          items: [
            "Elige un solo que te guste y escoge una frase corta, de dos a cinco segundos.",
            "Cántala hasta que te la sepas.",
            "Búscala en tu instrumento, nota por nota.",
            "Tócala en distintos lugares de la base y cámbiale el ritmo o el final.",
            "Úsala en tu próxima improvisación. Una frase nueva por semana es un ritmo excelente.",
          ],
        },
        {
          type: "p",
          text: "Cuando la pentatónica te quede corta, el siguiente paso son los [modos griegos](/blog/modos-griegos-explicados), que te dan colores nuevos sobre los mismos acordes.",
        },
      ],
    },
    {
      id: "miedo-al-error",
      heading: "Cómo perderle el miedo al error",
      blocks: [
        {
          type: "table",
          caption: "Los miedos más comunes y qué hacer con cada uno",
          head: ["Si piensas…", "Prueba esto"],
          rows: [
            ["“Voy a tocar una nota equivocada”", "Si una nota choca, muévela medio tono arriba o abajo: casi siempre caes en una nota del acorde. O repítela a propósito: repetida, suena intencional."],
            ["“No se me ocurre nada”", "Toma una frase de tres notas y repítela cambiando solo el ritmo. El silencio también cuenta."],
            ["“Me da pena que me escuchen”", "Improvisa solo y grábate; luego con tu profe; después con un amigo y, al final, en grupo."],
            ["“Todo me suena igual”", "Cambia una sola cosa por vez: registro, volumen, articulación o tempo."],
            ["“Me pierdo en la canción”", "Cuenta los compases y apóyate en los cambios de acorde; el blues de 12 compases es perfecto para entrenarlo."],
          ],
        },
        {
          type: "p",
          text: "Un profe te da algo difícil de conseguir solo: alguien con quien conversar musicalmente cada semana. En las clases de [guitarra eléctrica](/clases/guitarra-electrica), de [saxofón](/clases/saxofon), de piano o de teoría, la improvisación se puede trabajar desde las primeras clases, a tu nivel.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Se puede improvisar sin saber teoría musical?",
      answer:
        "Sí. Muchos músicos populares y tradicionales improvisan de oído. La teoría no es un requisito, pero ayuda a elegir notas con intención y a salir de los lugares de siempre.",
    },
    {
      question: "¿Cuál es la diferencia entre la pentatónica y la escala de blues?",
      answer:
        "La escala de blues es la pentatónica menor con una nota extra, la quinta disminuida. En La: La – Do – Re – Mi♭ – Mi – Sol. Esa nota de paso le da el sabor característico del blues.",
    },
    {
      question: "¿Qué instrumento es más fácil para empezar a improvisar?",
      answer:
        "Cualquiera sirve. En el piano, las teclas negras permiten improvisar desde el primer día; en la guitarra, la caja pentatónica cabe en una sola posición. La voz también improvisa: cantar frases antes de tocarlas es uno de los mejores entrenamientos.",
    },
    {
      question: "¿Cuánto tiempo toma aprender a improvisar?",
      answer:
        "Las primeras improvisaciones sencillas pueden salir en la primera semana, con pocas notas y una base simple. Improvisar con fluidez en distintos estilos es un camino de años, que se disfruta desde el comienzo.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "piano", "saxofon", "guitarra-electrica"],
  relatedPostSlugs: [
    "modos-griegos-explicados",
    "escalas-mayores-y-menores-explicadas",
    "como-componer-una-cancion-desde-cero",
  ],
  cta: "clases",
};
