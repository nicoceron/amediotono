import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-usar-el-metronomo-para-practicar",
  title: "Cómo usar el metrónomo para practicar: guía paso a paso",
  description:
    "Aprende a usar el metrónomo para practicar: cómo elegir el tempo inicial, contar subdivisiones y subir la velocidad poco a poco sin perder precisión.",
  excerpt:
    "El metrónomo no es para presionarte: es un espejo de tu pulso. Así eliges el tempo de partida, trabajas subdivisiones y subes la velocidad sin atropellarte.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo usar el metrónomo",
    "cómo practicar con metrónomo",
    "metrónomo online gratis",
    "qué significa BPM en música",
    "a qué velocidad poner el metrónomo",
    "ejercicios con metrónomo",
  ],
  intro: [
    "Para practicar con metrónomo, empieza en un tempo tan lento que puedas tocar el pasaje sin errores y sin tensión, cuenta las subdivisiones en voz alta y sube la velocidad de a pocas pulsaciones, solo cuando el fragmento salga limpio varias veces seguidas. El metrónomo no está para apurarte: es un espejo que te muestra dónde se acelera o se frena tu pulso.",
    "El método sirve para cualquier instrumento y para el canto. Puedes seguir esta guía con el [metrónomo online gratuito](/herramientas/metronomo) de la web o con cualquier aplicación.",
  ],
  keyTakeaways: [
    "Tu tempo de partida es el más rápido al que el pasaje sale limpio y relajado, no el de la grabación.",
    "Sube de 2 a 5 pulsaciones por minuto (BPM) cada vez, y solo después de tres repeticiones seguidas sin errores.",
    "Contar subdivisiones (“1 y 2 y”) es el hábito que más mejora la precisión rítmica.",
    "Si te desordenas, baja el tempo: retroceder es parte del método, no un fracaso.",
    "Alterna tocar con y sin clic para que el pulso sea tuyo y no del aparato.",
  ],
  sections: [
    {
      id: "que-es-bpm",
      heading: "Qué es el tempo y qué significan las BPM",
      blocks: [
        {
          type: "p",
          text: "El metrónomo mide el tempo en **BPM**, pulsos por minuto. A 60 BPM suena un clic por segundo; a 120 BPM, dos por segundo. En la partitura el tempo aparece como una cifra junto a una figura (por ejemplo, negra = 80) o como un término en italiano. Estos términos son orientativos y cada época y editor los interpreta con cierta libertad:",
        },
        {
          type: "table",
          caption: "Términos de tempo más comunes (rangos aproximados)",
          head: ["Término", "Carácter", "Rango aproximado"],
          rows: [
            ["Largo / Lento", "Muy despacio", "40–60 BPM"],
            ["Adagio", "Despacio y tranquilo", "66–76 BPM"],
            ["Andante", "Al paso, caminando", "76–108 BPM"],
            ["Moderato", "Moderado", "108–120 BPM"],
            ["Allegro", "Rápido y alegre", "120–168 BPM"],
            ["Presto", "Muy rápido", "168 BPM o más"],
          ],
        },
        {
          type: "p",
          text: "El metrónomo marca pulsos; el compás los agrupa. Si tu metrónomo permite acentuar el primer tiempo, configúralo según el compás de la obra: dos pulsos para 2/4, tres para 3/4, cuatro para 4/4. En compases como 6/8 el pulso suele sentirse en dos grupos de tres corcheas, así que puedes poner el clic en cada corchea para empezar y después en cada negra con puntillo. Si todavía te enredas con estas cifras, repasa nuestra guía para [leer partituras](/blog/como-leer-partituras-guia-para-principiantes).",
        },
      ],
    },
    {
      id: "tempo-de-partida",
      heading: "Paso a paso: cómo encontrar tu tempo de partida",
      blocks: [
        {
          type: "ol",
          items: [
            "Elige un fragmento corto, de dos a cuatro compases. No toda la obra.",
            "Pon el metrónomo a más o menos la mitad del tempo final. Si la obra va a 120, arranca cerca de 60.",
            "Escucha cuatro clics antes de tocar y cuéntalos en voz alta.",
            "Toca el fragmento. Si cada nota cae con el clic, sin errores y sin apretar hombros ni manos, ese es tu tempo.",
            "Si no salió, baja 8 o 10 BPM y repite. Sigue bajando hasta que salga limpio.",
            "Anota el número a lápiz sobre la partitura o en tu cuaderno de práctica. Mañana sabrás desde dónde partir.",
          ],
        },
        {
          type: "p",
          text: "Lento no es sinónimo de fácil. A 50 BPM se nota si una nota dura menos de lo que debe, si el cambio de posición llega tarde o si una respiración corta la frase. Esa lupa es justamente lo que hace útil el metrónomo.",
        },
      ],
    },
    {
      id: "subdivisiones",
      heading: "Subdivisiones: el secreto de la precisión",
      blocks: [
        {
          type: "p",
          text: "Los errores rítmicos casi nunca están en el clic, sino en el espacio entre dos clics. Subdividir es contar lo que pasa dentro de cada pulso, y es lo que evita que las corcheas salgan desiguales o que los silencios se acorten.",
        },
        {
          type: "table",
          caption: "Cómo contar las subdivisiones más comunes",
          head: ["Figura por pulso", "Notas por clic", "Cómo contarlas"],
          rows: [
            ["Negras", "1", "“1, 2, 3, 4”"],
            ["Corcheas", "2", "“1 y 2 y 3 y 4 y”"],
            ["Tresillos de corchea", "3", "Tres sílabas iguales por pulso, como “ta-ta-ta”"],
            ["Semicorcheas", "4", "Cuatro sílabas por pulso, como “ta-ka-ta-ka” o la que use tu profe"],
          ],
        },
        { type: "h3", text: "Ejercicio de subdivisión (5 minutos)" },
        {
          type: "ol",
          items: [
            "Pon el metrónomo a 60 BPM.",
            "Da palmas en negras durante ocho clics, contando en voz alta.",
            "Sin parar, pasa a corcheas durante ocho clics; luego a tresillos y después a semicorcheas.",
            "Vuelve en orden inverso hasta las negras.",
            "Repite el ejercicio en tu instrumento con una escala o una nota repetida.",
          ],
        },
        {
          type: "p",
          text: "Para un pasaje difícil, muchos metrónomos permiten que suene la subdivisión además del pulso. Úsala unos días como apoyo y luego quítala: el objetivo es que la subdivisión quede sonando en tu cabeza.",
        },
      ],
    },
    {
      id: "subir-la-velocidad",
      heading: "Cómo subir la velocidad sin perder limpieza",
      blocks: [
        { type: "h3", text: "El método de pequeños saltos" },
        {
          type: "p",
          text: "Cuando el fragmento te sale limpio tres veces seguidas, sube entre 2 y 5 BPM. Si fallas dos veces al nuevo tempo, vuelve al anterior. Parece lento, pero así el cuerpo aprende el movimiento correcto en vez de practicar el error a más velocidad.",
        },
        { type: "h3", text: "Dos pasos adelante, uno atrás" },
        {
          type: "p",
          text: "Otra opción es avanzar en escalera: subes dos saltos y bajas uno para consolidar. Una sesión podría verse así:",
        },
        {
          type: "table",
          caption: "Ejemplo de progresión en una sesión",
          head: ["Paso", "Tempo", "Qué haces"],
          rows: [
            ["1", "60 BPM", "Tres repeticiones limpias"],
            ["2", "64 BPM", "Tres repeticiones limpias"],
            ["3", "68 BPM", "Aparece un error: repites con atención"],
            ["4", "64 BPM", "Vuelves atrás y consolidas"],
            ["5", "68 BPM", "Ahora sale limpio"],
            ["6", "72 BPM", "Cierras la sesión aquí"],
          ],
        },
        {
          type: "p",
          text: "Al día siguiente es normal arrancar un poco por debajo de donde terminaste, por ejemplo en 66. No es retroceso: el cuerpo necesita recalentar. Con el paso de los días, el punto de partida irá subiendo solo.",
        },
      ],
    },
    {
      id: "ejercicios-para-el-pulso",
      heading: "Ejercicios para que el pulso sea tuyo",
      blocks: [
        {
          type: "p",
          text: "Una vez que el pasaje está al tempo, el reto cambia: ya no se trata de seguir el clic, sino de no necesitarlo.",
        },
        {
          type: "ul",
          items: [
            "**Clic en 2 y 4:** en pop, jazz o funk, pon el metrónomo a la mitad del tempo y siente cada clic como el 2 y el 4 del compás. Tú pones el 1 y el 3. Es un clásico de las clases de [percusión](/clases/percusion) y batería.",
            "**Clic solo en el 1:** pon el metrónomo a la cuarta parte del tempo en 4/4 para que suene una vez por compás. Tienes que sostener tú los otros tres tiempos.",
            "**Compases en silencio:** toca dos compases con clic y dos sin él, o baja el volumen a ratos. Si al volver el clic sigues alineado, tu pulso interno está firme.",
            "**Manos separadas en piano:** trabaja cada mano con metrónomo antes de juntarlas; en [piano](/clases/piano) es la forma más rápida de detectar cuál mano arrastra.",
            "**Grábate con el clic:** al escucharte notarás si te adelantas en los pasajes fáciles o te frenas en los difíciles.",
          ],
        },
      ],
    },
    {
      id: "errores-comunes-metronomo",
      heading: "Errores comunes con el metrónomo",
      blocks: [
        {
          type: "table",
          caption: "Qué pasa y cómo corregirlo",
          head: ["Error", "Qué pasa", "Solución"],
          rows: [
            ["Empezar al tempo final", "Repites el error hasta automatizarlo", "Arranca a la mitad y sube por pasos"],
            ["Perseguir el clic", "Tocas reaccionando y siempre llegas tarde", "Cuenta en voz alta y anticipa el pulso"],
            ["Subir cuando sale “casi”", "El pasaje nunca se limpia del todo", "Exige tres repeticiones limpias seguidas"],
            ["No contar", "Los silencios y notas largas se acortan", "Subdivide en voz alta, aunque sea bajito"],
            ["Volumen mal ajustado", "No lo oyes o te aturde", "Súbelo hasta oírlo sin esfuerzo sobre tu instrumento"],
            ["Usarlo en toda la obra, siempre", "La música suena mecánica", "Úsalo para técnica y pasajes; luego toca con expresión"],
          ],
        },
        {
          type: "callout",
          title: "Si el clic te tensiona",
          text: "Es común al principio sentir que el metrónomo te persigue. Baja el tempo hasta que te sobre tiempo entre clics, respira y suelta los hombros. La meta es tocar cómodo con él, no pelear contra él.",
        },
        {
          type: "p",
          text: "Para ubicar el metrónomo dentro de una sesión completa, mira nuestra rutina para [practicar música en casa](/blog/como-practicar-musica-en-casa). Y si quieres fortalecer la lectura rítmica desde la base, las clases de [teoría musical](/clases/teoria-musical) trabajan pulso, compás y subdivisión con ejercicios graduales.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿A qué velocidad debe practicar un principiante?",
      answer:
        "No hay un número único: depende del pasaje y del instrumento. Una buena referencia es empezar a la mitad del tempo indicado y bajar más si hace falta. Si tocas sin errores y sin tensión, vas bien, aunque el número parezca muy bajo.",
    },
    {
      question: "¿Es malo depender del metrónomo?",
      answer:
        "Solo si nunca lo apagas. El metrónomo sirve para construir el pulso; después hay que comprobar que se sostiene sin él. Alterna tramos con y sin clic, y en obras expresivas deja espacio para el rubato que te indique tu profe.",
    },
    {
      question: "¿Metrónomo mecánico, digital o aplicación?",
      answer:
        "Cualquiera sirve si puedes oírlo bien y ajustarlo con precisión. Los digitales y las aplicaciones suelen permitir acentos y subdivisiones; los mecánicos tienen la ventaja de que se ve el péndulo. Para empezar, un metrónomo online en el celular o el computador es suficiente.",
    },
    {
      question: "¿Cómo uso el metrónomo en un compás de 6/8?",
      answer:
        "Al principio, pon el clic en cada corchea para contar las seis. Cuando te sientas seguro, cambia a un clic por cada negra con puntillo, es decir, dos por compás. Así pasas de contar notas a sentir el balanceo en dos del 6/8.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "piano", "percusion"],
  relatedPostSlugs: [
    "como-practicar-musica-en-casa",
    "cuantas-horas-practicar-al-dia",
    "como-leer-partituras-guia-para-principiantes",
  ],
  cta: "clases",
};
