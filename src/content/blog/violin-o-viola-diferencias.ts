import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "violin-o-viola-diferencias",
  title: "¿Violín o viola? Diferencias y cuál elegir",
  description:
    "Violín o viola: tamaño, cuerdas, clave de do, sonido y rol en la orquesta. Te explicamos cuál elegir y cómo pasar del violín a la viola sin enredos.",
  excerpt:
    "Se parecen tanto que muchos las confunden, pero no suenan ni se leen igual. Comparamos tamaño, clave de do y papel en la orquesta, y cómo cambiar de una a otra.",
  category: "instrumentos",
  publishedAt: "2026-09-30",
  keywords: [
    "violín o viola",
    "diferencia entre violín y viola",
    "pasar de violín a viola",
    "cómo leer clave de do para viola",
    "es más fácil la viola que el violín",
  ],
  intro: [
    "Depende del sonido y del papel que te gusta tener en la música. Si quieres llevar la melodía, el brillo del agudo y acceso al repertorio solista más grande de las cuerdas, elige el violín. Si te atrae un sonido más oscuro y cálido, y disfrutas estar en el centro de la armonía, elige la viola.",
    "La buena noticia es que la técnica es casi la misma. Por eso pasar del violín a la viola, o al revés, es uno de los cambios más naturales entre instrumentos. Lo que cambia es el tamaño, la cuerda más grave, la clave en que se lee y la forma de usar el arco.",
  ],
  keyTakeaways: [
    "La viola es un poco más grande que el violín, se afina una quinta más grave (Do, Sol, Re, La) y no tiene la cuerda de Mi.",
    "La viola lee en clave de do en tercera línea; el violín, en clave de sol.",
    "El violín suele llevar la melodía; la viola llena las voces internas de la armonía y cada vez tiene más solos.",
    "La viola pide más peso del brazo en el arco y responde un poco más lento.",
    "Del violín a la viola se pasa en semanas; lo que más tiempo toma es leer con fluidez en clave de do.",
  ],
  sections: [
    {
      id: "violin-vs-viola-tabla",
      heading: "Violín vs. viola: las diferencias en una tabla",
      blocks: [
        {
          type: "table",
          caption: "Cómo se diferencian el violín y la viola",
          head: ["Aspecto", "Violín", "Viola"],
          rows: [
            [
              "Tamaño",
              "Medida estándar de adulto (4/4) y tamaños fraccionados para niños.",
              "Algo más grande; se mide en pulgadas según el largo de la caja y hay varias medidas de adulto.",
            ],
            [
              "Cuerdas",
              "Sol, Re, La, Mi.",
              "Do, Sol, Re, La: una quinta más grave y sin la Mi aguda.",
            ],
            [
              "Clave",
              "Clave de sol.",
              "Clave de do en tercera línea; clave de sol en pasajes agudos.",
            ],
            [
              "Sonido",
              "Brillante y penetrante.",
              "Más oscuro, cálido, algo velado.",
            ],
            [
              "Arco",
              "Más liviano.",
              "Un poco más pesado, con el talón más ancho.",
            ],
            [
              "Respuesta de las cuerdas",
              "Rápida.",
              "Más lenta: la cuerda de Do necesita peso y tiempo para arrancar.",
            ],
            [
              "Rol en la orquesta",
              "Primeros y segundos violines: melodía y figuras rápidas.",
              "Voces internas: armonía, contracantos y color; cada vez con más solos.",
            ],
            [
              "Repertorio solista",
              "Enorme, de todas las épocas.",
              "Más reducido, pero valioso, y enriquecido con muchas transcripciones.",
            ],
            [
              "Edad de inicio orientativa",
              "Desde los 4 años.",
              "Hacia los 8 años, o después de un tiempo de violín.",
            ],
          ],
        },
      ],
    },
    {
      id: "la-clave-de-do",
      heading: "La clave de do: lo que más asusta (y no debería)",
      blocks: [
        {
          type: "p",
          text: "La viola lee en clave de do en tercera línea, también llamada clave de contralto. Su lógica es sencilla: la línea del centro del pentagrama es el do central. Se eligió porque la mayor parte del registro de la viola cabe ahí sin llenar la partitura de líneas adicionales.",
        },
        {
          type: "p",
          text: "Para un violinista, el truco es este: cada nota se lee un grado más arriba que en clave de sol, y suena una octava más abajo. Lo que en clave de sol sería un si en la tercera línea, en clave de do es el do central.",
        },
        {
          type: "ul",
          items: [
            "Empieza leyendo melodías que ya conoces, para que el oído confirme lo que lees.",
            "No escribas el nombre de todas las notas: marca solo las que te confunden y bórralas cuando ya las reconozcas.",
            "Lee por intervalos, no nota por nota: fíjate si la melodía sube o baja por grado o por salto.",
            "Dedica cinco minutos diarios a lectura a primera vista con obras sencillas.",
          ],
        },
        {
          type: "p",
          text: "En unas semanas de práctica diaria la clave deja de ser un obstáculo. Si todavía estás aprendiendo a leer, empieza por [cómo leer partituras](/blog/como-leer-partituras-guia-para-principiantes).",
        },
      ],
    },
    {
      id: "rol-en-la-orquesta",
      heading: "El papel en la orquesta y en la música de cámara",
      blocks: [
        {
          type: "p",
          text: "El violín es la voz que más se escucha: melodías, pasajes rápidos, el agudo que brilla sobre la orquesta. Los primeros violines suelen llevar el tema principal y los segundos lo acompañan o dialogan con él.",
        },
        {
          type: "p",
          text: "La viola vive en el medio. Completa los acordes, sostiene contracantos y le da cuerpo al sonido de las cuerdas. En un cuarteto de cuerdas se siente la armonía desde adentro, algo que muchos violistas describen como el gran placer del instrumento. Los compositores le han dado cada vez más protagonismo, y el repertorio solista incluye obras de Telemann, Schumann, Brahms o Bartók.",
        },
        {
          type: "p",
          text: "Un dato práctico: en muchas orquestas juveniles y de colegio hay más violines que violas, así que un violista suele ser bienvenido.",
        },
      ],
    },
    {
      id: "elige-violin-o-viola",
      heading: "Elige violín si… / elige viola si…",
      blocks: [
        { type: "h3", text: "Elige el violín si…" },
        {
          type: "ul",
          items: [
            "Quieres tocar la melodía y los pasajes brillantes.",
            "Te interesa el repertorio solista o el folclor, donde el violín tiene mucha presencia.",
            "Es para un niño muy pequeño: hay más tamaños fraccionados y métodos pensados para empezar a los 4 o 5 años.",
          ],
        },
        { type: "h3", text: "Elige la viola si…" },
        {
          type: "ul",
          items: [
            "Te gusta más el sonido grave y cálido que el agudo brillante.",
            "Disfrutas tocar en grupo y sentir la armonía desde adentro.",
            "Tus brazos y manos son grandes y el violín te queda pequeño.",
            "Ya tocas violín y quieres un color nuevo o un lugar en la orquesta.",
          ],
        },
        {
          type: "p",
          text: "En las [clases de violín](/clases/violin) y en las [clases de viola](/clases/viola) el profe evalúa tu tamaño y tu gusto antes de recomendarte una medida o un instrumento.",
        },
      ],
    },
    {
      id: "pasar-de-violin-a-viola",
      heading: "Cómo pasar del violín a la viola",
      blocks: [
        {
          type: "ol",
          items: [
            "Encuentra la medida correcta con tu profe: con el brazo izquierdo extendido, la voluta debe quedar a la altura de la palma, sin estirarte.",
            "Ajusta mentonera y almohadilla: la viola es más profunda y puede pedir otra altura.",
            "Cambia el arco por uno de viola: tiene más peso y ayuda a que la cuerda de Do suene redonda.",
            "Busca el sonido con más peso y menos velocidad de arco, y un punto de contacto un poco más cerca del puente.",
            "Abre la mano izquierda: las distancias son mayores y el vibrato se hace más amplio.",
            "Aprende la clave de do con repertorio fácil antes de enfrentarte a obras de orquesta.",
          ],
        },
        {
          type: "p",
          text: "Para afinar la cuerda de Do, que no existe en el violín, usa el [afinador de viola](/herramientas/afinador/viola) del sitio. Y si vas en la dirección contraria, de la viola al violín, prepárate para un arco más liviano, distancias más cortas y la cuerda de Mi, que exige mucha precisión.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿La viola es más fácil que el violín?",
      answer:
        "No es más fácil, es distinta. Tiene menos pasajes en el agudo extremo, pero el instrumento es más grande, las distancias son mayores y el arco pide más peso para que las cuerdas graves respondan.",
    },
    {
      question: "¿Se puede tocar la viola con un arco de violín?",
      answer:
        "Se puede para salir del paso, pero el sonido queda delgado, sobre todo en la cuerda de Do. El arco de viola es un poco más pesado y está pensado para sus cuerdas más gruesas.",
    },
    {
      question: "¿Cómo sé qué tamaño de viola necesito?",
      answer:
        "Depende del largo de tu brazo y del tamaño de tu mano, no solo de tu estatura. Lo ideal es probar varias medidas con tu profe, porque dos personas de la misma estatura pueden necesitar violas distintas.",
    },
    {
      question: "¿Un niño puede empezar directamente con viola?",
      answer:
        "Sí. Existen violas pequeñas y cada vez más niños empiezan en ellas. Muchos empiezan con violín simplemente porque hay más instrumentos y métodos disponibles, y luego pasan a la viola sin dificultad.",
    },
  ],
  relatedCourseIds: ["violin"],
  relatedPostSlugs: [
    "violin-o-violonchelo-cual-elegir",
    "como-elegir-tu-primer-violin-y-su-tamano",
    "como-limpiar-y-cuidar-un-violin",
  ],
  cta: "clases",
};
