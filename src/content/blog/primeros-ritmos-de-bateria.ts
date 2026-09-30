import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "primeros-ritmos-de-bateria",
  title: "Primeros ritmos de batería: 5 patrones para aprender primero",
  seoTitle: "Primeros ritmos de batería para principiantes",
  description:
    "Rock básico, balada, disco, shuffle y cumbia en batería, explicados tiempo por tiempo: qué tocan el hi-hat, la caja y el bombo, y cómo practicarlos.",
  excerpt:
    "Cinco ritmos cubren buena parte de lo que un baterista toca en sus primeros meses. Aquí los tienes desarmados tiempo por tiempo, con tempos para empezar.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "ritmos básicos de batería",
    "primer ritmo de batería",
    "ritmo de rock en batería",
    "ritmo disco batería",
    "shuffle batería",
    "cumbia en batería",
  ],
  intro: [
    "El primer ritmo que aprende casi cualquier baterista es el **rock básico**: hi-hat en corcheas, caja en los tiempos 2 y 4 y bombo en el 1 y el 3. A partir de ese esqueleto salen la **balada**, el **disco**, el **shuffle** y, con un cambio de acentos, un ritmo latino sencillo como la **cumbia**.",
    "Abajo tienes cada uno desarmado tiempo por tiempo, en tablas fáciles de leer aunque todavía no leas partitura. Tócalos despacio, con metrónomo, y cuenta en voz alta.",
  ],
  keyTakeaways: [
    "Rock básico: hi-hat en corcheas, caja en 2 y 4, bombo en 1 y 3. Es la base de los demás.",
    "La balada usa el mismo esqueleto a tempo lento, con golpe de aro en la caja y más espacio.",
    "El disco pone el bombo en los cuatro tiempos y abre el hi-hat en cada “y”.",
    "El shuffle divide cada tiempo en tres y toca la primera y la tercera nota del tresillo.",
    "En la cumbia, el golpe de aro en el contratiempo cumple el papel del llamador.",
  ],
  sections: [
    {
      id: "como-leer-las-tablas",
      heading: "Cómo leer las tablas de ritmo",
      blocks: [
        {
          type: "p",
          text: "Cada columna es un tiempo del compás y, dentro de ella, sus subdivisiones. En los ritmos de corcheas se cuenta “1 y 2 y 3 y 4 y”: el número cae con el pulso y la “y” justo en la mitad. Cada fila es una parte del cuerpo:",
        },
        {
          type: "ul",
          items: [
            "**Hi-hat:** mano derecha (si eres diestro), con los platillos cerrados por el pie izquierdo.",
            "**Caja:** mano izquierda.",
            "**Bombo:** pie derecho.",
            "**Símbolos:** x = hi-hat cerrado, o = hi-hat abierto, ● = golpe, · = silencio.",
          ],
        },
        {
          type: "p",
          text: "Si todavía te cuesta coordinar, arma cada ritmo capa por capa, como explicamos en [cuánto tiempo toma aprender batería](/blog/cuanto-tiempo-toma-aprender-bateria). Y antes de sentarte al set, calienta las manos con los [rudimentos básicos](/blog/rudimentos-de-bateria-para-principiantes).",
        },
      ],
    },
    {
      id: "rock-basico",
      heading: "Rock básico: el ritmo que abre todas las puertas",
      blocks: [
        {
          type: "table",
          caption: "Rock básico en 4/4",
          head: ["", "1 y", "2 y", "3 y", "4 y"],
          rows: [
            ["Hi-hat", "x x", "x x", "x x", "x x"],
            ["Caja", "· ·", "● ·", "· ·", "● ·"],
            ["Bombo", "● ·", "· ·", "● ·", "· ·"],
          ],
        },
        {
          type: "p",
          text: "Fíjate en que el hi-hat nunca se detiene: suena en cada número y en cada “y”. La caja y el bombo siempre coinciden con un golpe de hi-hat, así que las manos tocan a veces juntas y a veces solas, pero el pie solo cae con los números.",
        },
        { type: "h3", text: "Primera variación" },
        {
          type: "p",
          text: "Suma un bombo en la “y” del 3: el patrón queda “bum – cha – bum bum – cha”. Es el primer momento en que el pie toca entre pulsos, y casi siempre hace que la mano del hi-hat dude. Si pasa, baja el tempo hasta que la mano siga como un reloj.",
        },
      ],
    },
    {
      id: "balada",
      heading: "Balada: menos volumen, más control",
      blocks: [
        {
          type: "table",
          caption: "Balada en 4/4, entre 60 y 76 BPM",
          head: ["", "1 y", "2 y", "3 y", "4 y"],
          rows: [
            ["Hi-hat (suave)", "x x", "x x", "x x", "x x"],
            ["Caja (golpe de aro)", "· ·", "● ·", "· ·", "● ·"],
            ["Bombo", "● ·", "· ●", "● ·", "· ·"],
          ],
        },
        {
          type: "p",
          text: "La balada cambia sobre todo el sonido. En lugar de golpear el parche, apoya la baqueta de lado sobre la caja y golpea el aro con su parte gruesa: es el golpe de aro o cross-stick, un “toc” seco que no tapa la voz. El bombo agrega un golpe en la “y” del 2 que empuja hacia el tiempo 3.",
        },
        {
          type: "p",
          text: "Lo difícil aquí es la lentitud: a 60 BPM hay mucho espacio entre golpes y es fácil apresurarse. Cuenta en voz alta y piensa en que cada nota dure hasta la siguiente.",
        },
      ],
    },
    {
      id: "disco",
      heading: "Disco: el bombo en los cuatro tiempos",
      blocks: [
        {
          type: "table",
          caption: "Disco en 4/4, entre 110 y 125 BPM cuando ya lo dominas",
          head: ["", "1 y", "2 y", "3 y", "4 y"],
          rows: [
            ["Hi-hat", "x o", "x o", "x o", "x o"],
            ["Caja", "· ·", "● ·", "· ·", "● ·"],
            ["Bombo", "● ·", "● ·", "● ·", "● ·"],
          ],
        },
        {
          type: "p",
          text: "Es el famoso “cuatro en el piso” de la música disco de los setenta y de mucho pop bailable actual. El truco está en el pie izquierdo: levanta el pedal del hi-hat en cada “y” para que los platillos suenen abiertos, y ciérralo justo en el siguiente número, al mismo tiempo que el bombo. Así, el hi-hat hace “chic-tsss” en cada tiempo. Practica primero solo los dos pies, sin manos, hasta que el vaivén salga solo.",
        },
      ],
    },
    {
      id: "shuffle",
      heading: "Shuffle: el balanceo del blues",
      blocks: [
        {
          type: "table",
          caption: "Shuffle en 4/4: cada tiempo se divide en tres (tresillo)",
          head: ["", "Tiempo 1", "Tiempo 2", "Tiempo 3", "Tiempo 4"],
          rows: [
            ["Hi-hat o ride", "x · x", "x · x", "x · x", "x · x"],
            ["Caja", "· · ·", "● · ·", "· · ·", "● · ·"],
            ["Bombo", "● · ·", "· · ·", "● · ·", "· · ·"],
          ],
        },
        {
          type: "p",
          text: "Aquí cambia la subdivisión. Cada tiempo se divide en tres partes iguales y la mano toca solo la primera y la tercera: el resultado es un “taa-ta, taa-ta” desigual, típico del blues y del rock and roll de los cincuenta. Cuenta “uno-y-a, dos-y-a” y toca en el “uno” y en la “a”.",
        },
        {
          type: "p",
          text: "Para sentirlo, pon el [metrónomo](/herramientas/metronomo) con subdivisión en tresillos y canta las tres notas antes de tocar dos. El error más común es que el shuffle se “enderece” y vuelva a sonar a corcheas de rock.",
        },
      ],
    },
    {
      id: "cumbia-en-bateria",
      heading: "Un ritmo latino para empezar: la cumbia en batería",
      blocks: [
        {
          type: "table",
          caption: "Cumbia simplificada en 2/4",
          head: ["", "1 y", "2 y"],
          rows: [
            ["Hi-hat", "x x", "x x"],
            ["Caja (golpe de aro)", "· ●", "· ●"],
            ["Bombo", "● ·", "● ·"],
          ],
        },
        {
          type: "p",
          text: "La cumbia es binaria y se escribe en 2/4 o en compás partido. Esta versión traslada a la batería los papeles del grupo tradicional: el bombo marca el pulso, como el bajo o la tambora, y el golpe de aro cae en cada “y”, en el contratiempo, como el llamador. Cuando esté firme, pasa el hi-hat a semicorcheas suaves para imitar el guache o las maracas.",
        },
        {
          type: "p",
          text: "Es una adaptación de batería; la cumbia de tambores tiene su propia técnica y mucha más riqueza. Si te interesa ese mundo, lee sobre los [ritmos colombianos](/blog/ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados) y sobre cómo se reparten los papeles en un grupo de cumbia tradicional.",
        },
      ],
    },
    {
      id: "como-practicarlos",
      heading: "Cómo practicarlos y en qué orden",
      blocks: [
        {
          type: "table",
          caption: "Un orden posible para los primeros meses",
          head: ["Ritmo", "Compás", "Tempo para empezar", "Dónde lo oyes"],
          rows: [
            ["Rock básico", "4/4", "60–70 BPM", "Rock y pop de todas las épocas"],
            ["Balada", "4/4", "60 BPM", "Baladas pop y en español"],
            ["Disco", "4/4", "70–80 BPM", "Disco y pop bailable"],
            ["Shuffle", "4/4 con tresillos", "60 BPM", "Blues, rock and roll, swing"],
            ["Cumbia", "2/4", "70 BPM", "Cumbia y música tropical"],
          ],
        },
        {
          type: "ol",
          items: [
            "Toca cada ritmo durante cuatro compases seguidos sin parar; si te detienes, baja el tempo.",
            "Cuando salgan cuatro limpios, tócalo un minuto completo contando en voz alta.",
            "Graba un minuto con el celular y escucha si el bombo y la caja caen exactamente con el hi-hat.",
            "Sube de 2 a 5 BPM por sesión, nunca de a saltos grandes.",
            "Pon una canción del estilo y tócale encima, aunque solo sea el ritmo sin rellenos.",
          ],
        },
        {
          type: "callout",
          title: "Protege tus oídos desde el primer día",
          text: "Una batería acústica en un cuarto pequeño suena muy fuerte. Usa tapones para músicos o audífonos aislantes cada vez que toques; en [cómo proteger tu audición si eres músico](/blog/como-proteger-tu-audicion-si-eres-musico) te explicamos cuáles elegir.",
        },
        {
          type: "p",
          text: "Un profe te corrige a tiempo la postura en el banco, la altura del hi-hat y la independencia entre pies y manos. En las [clases de percusión](/clases/percusion) puedes trabajar batería a domicilio en Bogotá o de forma virtual, y también ritmos latinos y colombianos.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es el ritmo más fácil de batería?",
      answer:
        "El rock básico en corcheas, porque las manos y el pie caen en lugares muy predecibles y el bombo nunca toca entre pulsos. Si incluso así te cuesta, empieza con el hi-hat en negras en lugar de corcheas.",
    },
    {
      question: "¿Qué ritmos de batería debo aprender primero?",
      answer:
        "Rock básico, sus variaciones de bombo y luego una balada. Cuando esos salgan sin pensar, suma el disco, que entrena el pie izquierdo, y el shuffle, que te obliga a cambiar la subdivisión.",
    },
    {
      question: "¿Por qué se me detiene la mano del hi-hat cuando toco el bombo?",
      answer:
        "Porque todavía no hay independencia entre manos y pies, algo normal al comienzo. Baja el tempo, toca solo hi-hat y bombo hasta que la mano siga constante, y cuenta en voz alta las corcheas.",
    },
    {
      question: "¿Puedo aprender estos ritmos en una batería electrónica?",
      answer:
        "Sí. Todos los patrones funcionan igual, y la electrónica te deja practicar con audífonos. Lo que cambia es la sensación del hi-hat abierto y del golpe de aro, que conviene revisar de vez en cuando en un set acústico.",
    },
  ],
  relatedCourseIds: ["percusion"],
  relatedPostSlugs: [
    "rudimentos-de-bateria-para-principiantes",
    "cuanto-tiempo-toma-aprender-bateria",
    "bateria-o-percusion-latina",
  ],
  cta: "clases",
};
