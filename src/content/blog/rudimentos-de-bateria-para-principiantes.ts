import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "rudimentos-de-bateria-para-principiantes",
  title: "Rudimentos de batería para principiantes: por dónde empezar",
  seoTitle: "Rudimentos de batería para principiantes",
  description:
    "Golpe simple, doble, paradiddle, flam y redoble de cinco: el sticking de cada rudimento, cómo contarlo y una rutina de 15 minutos en el pad con metrónomo.",
  excerpt:
    "Cinco rudimentos bastan para empezar: golpe simple, doble, paradiddle, flam y redoble de cinco. Aquí tienes el sticking de cada uno y cómo practicarlos en el pad.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "rudimentos de batería para principiantes",
    "paradiddle batería",
    "golpe doble batería",
    "qué es un flam en batería",
    "ejercicios de pad de práctica",
    "rudimentos básicos de batería",
  ],
  intro: [
    "Si estás empezando, trabaja primero cinco rudimentos: el **golpe simple** (D I D I), el **golpe doble** (D D I I), el **paradiddle** (D I D D, I D I I), el **flam** y el **redoble de cinco golpes** (D D I I D). Con ellos se arma buena parte de los ritmos y rellenos que vas a tocar en los primeros años.",
    "Se practican en un pad de práctica, con metrónomo, despacio y con las dos manos a la misma altura. Diez o quince minutos diarios bien hechos rinden más que una hora de golpes sin control.",
  ],
  keyTakeaways: [
    "Un rudimento es un patrón fijo de manos (sticking); D es mano derecha, I es mano izquierda, y en métodos en inglés verás R y L.",
    "Los cinco primeros: golpe simple, golpe doble, paradiddle, flam y redoble de cinco golpes.",
    "La velocidad es consecuencia del control: primero lento, parejo y relajado; después más rápido.",
    "Practica cada rudimento empezando también con la izquierda, para que la mano débil no se quede atrás.",
    "Los rudimentos no son un fin en sí mismos: se llevan a la batería como ritmos, rellenos y acentos.",
  ],
  sections: [
    {
      id: "que-es-un-rudimento",
      heading: "Qué es un rudimento y por qué importa",
      blocks: [
        {
          type: "p",
          text: "Un rudimento es una combinación fija de golpes de mano derecha e izquierda, con acentos y dinámicas definidos. La Percussive Arts Society reúne 40 rudimentos internacionales, pero ningún principiante necesita todos. Los primeros cinco concentran lo esencial: alternar manos, aprovechar el rebote, combinar golpes sencillos y dobles, y controlar las notas de adorno.",
        },
        {
          type: "p",
          text: "Piensa en ellos como las escalas de un pianista: no suenan a canción, pero cuando los tienes en las manos todo lo demás sale más limpio. En [cuánto tiempo toma aprender batería](/blog/cuanto-tiempo-toma-aprender-bateria) explicamos dónde encajan dentro del primer año; aquí vamos al detalle de cómo tocarlos.",
        },
      ],
    },
    {
      id: "los-cinco-rudimentos",
      heading: "Los cinco rudimentos esenciales, con su sticking",
      blocks: [
        {
          type: "table",
          caption: "D = derecha, I = izquierda. El signo > marca el golpe acentuado; en el flam, la letra minúscula es la nota de adorno.",
          head: ["Rudimento", "Sticking", "Cómo contarlo", "Qué entrena"],
          rows: [
            ["Golpe simple (single stroke roll)", "D I D I D I D I", "Corcheas: “1 y 2 y”; luego semicorcheas: “1 e y a”", "Alternancia pareja y velocidad"],
            ["Golpe doble (double stroke roll)", "D D I I D D I I", "Semicorcheas: “1 e y a”", "Control del rebote; dos notas iguales por mano"],
            ["Paradiddle simple", ">D I D D >I D I I", "Semicorcheas, acento en el “1” y en el “2”", "Combinar simples y dobles; la mano líder cambia"],
            ["Flam", "iD dI iD dI", "Un flam por tiempo, en negras", "Precisión entre alturas distintas de baqueta"],
            ["Redoble de cinco golpes", "D D I I >D / I I D D >I", "Dos dobles y un golpe acentuado", "Cerrar un redoble con un acento limpio"],
          ],
        },
        { type: "h3", text: "Golpe simple" },
        {
          type: "p",
          text: "Es la base de todo. La meta es que no se note qué mano toca: mismo volumen, misma altura y mismo espacio entre golpes. Grábate con el celular y escucha si hay un patrón tipo “fuerte-débil”; casi siempre delata a la mano izquierda (o a la derecha, si eres zurdo).",
        },
        { type: "h3", text: "Golpe doble" },
        {
          type: "p",
          text: "El error clásico es que la segunda nota de cada mano salga más débil. Al principio toca cada golpe con la muñeca, como dos golpes separados. Solo cuando el tempo sube, deja que el segundo nazca del rebote, ayudado por los dedos. A velocidad alta, un golpe doble bien hecho suena casi igual que uno simple.",
        },
        { type: "h3", text: "Paradiddle" },
        {
          type: "p",
          text: "Su nombre imita el sonido: “pa-ra” son los dos golpes sencillos y “did-dle” el doble. Como cada grupo empieza con una mano distinta, obliga a las dos a liderar. Marca el acento en la primera nota de cada grupo y mantén las demás bajas. Cuando esté firme, prueba el paradiddle doble (D I D I D D, I D I D I I) y el paradiddle-diddle (D I D D I I).",
        },
        { type: "h3", text: "Flam y redoble de cinco" },
        {
          type: "p",
          text: "En el flam, una baqueta arranca baja (a unos 3 o 5 cm del parche) y toca una nota de adorno suave justo antes del golpe principal, que sale desde arriba. Si las dos suenan a la vez, es un “flam plano” y pierde su efecto. El redoble de cinco golpes es tu primer redoble con final: dos dobles y un golpe acentuado que cierra la frase, muy usado al terminar un relleno.",
        },
      ],
    },
    {
      id: "agarre-y-rebote",
      heading: "Agarre, alturas y rebote: la técnica detrás",
      blocks: [
        {
          type: "ul",
          items: [
            "**Punto de apoyo:** sostén la baqueta entre el pulgar y el índice (o el medio), más o menos a un tercio de su extremo; los otros dedos la rodean sin apretar.",
            "**Deja que rebote:** el parche o el pad devuelven la baqueta. Si la aprietas, frenas ese rebote y te cansas el doble.",
            "**Alturas:** los acentos salen desde arriba (unos 20 a 30 cm) y las notas suaves desde muy abajo. En el paradiddle, el acento es un golpe que baja y se queda abajo para las notas suaves; la mano vuelve a subir justo antes de su siguiente acento.",
            "**Posición:** hombros sueltos, codos cerca del cuerpo y el pad a la altura de la caja, no sobre las rodillas si puedes evitarlo.",
            "**Baquetas:** 7A, más delgadas, para niños o manos pequeñas; 5A, las más comunes, para la mayoría de adultos.",
          ],
        },
        {
          type: "callout",
          title: "La regla del antebrazo",
          text: "Si sientes el antebrazo duro o la muñeca caliente, baja el metrónomo de 5 a 10 BPM. La tensión se vuelve hábito rápido y es la puerta de entrada a molestias en tendones. Si hay dolor que no se va, para y revisa la técnica con tu profe.",
        },
      ],
    },
    {
      id: "rutina-en-el-pad",
      heading: "Rutina de 15 minutos en el pad de práctica",
      blocks: [
        {
          type: "p",
          text: "Un pad de goma o silicona sobre un soporte es silencioso, barato y perfecto para apartamento. Pon el [metrónomo en línea](/herramientas/metronomo) en subdivisión de corcheas o semicorcheas y sigue este orden:",
        },
        {
          type: "table",
          caption: "Tempo de partida sugerido: 60–70 BPM",
          head: ["Minutos", "Ejercicio", "Detalle"],
          rows: [
            ["0–2", "Golpes completos lentos", "Ocho con la derecha, ocho con la izquierda; la baqueta sube y vuelve a la misma altura."],
            ["2–5", "Golpe simple", "Un minuto en corcheas y dos en semicorcheas, empezando una vez con cada mano."],
            ["5–8", "Golpe doble", "Primero cada nota con muñeca; al final, deja entrar el rebote."],
            ["8–11", "Paradiddle", "Con acentos marcados y notas suaves bien bajas."],
            ["11–13", "Flams", "Alternados (iD dI) y luego flam tap (iD D dI I)."],
            ["13–15", "Redoble de cinco y juego libre", "Combina rudimentos e inventa una frase de dos compases."],
          ],
        },
        {
          type: "p",
          text: "Anota cada día el tempo al que cada rudimento salió limpio. Sube de 2 a 5 BPM solo cuando lo toques bien tres veces seguidas; el método completo está en [cómo usar el metrónomo para practicar](/blog/como-usar-el-metronomo-para-practicar). Para variar, el clásico libro “Stick Control”, de George Lawrence Stone, tiene páginas enteras de combinaciones de manos.",
        },
      ],
    },
    {
      id: "de-la-mesa-a-la-bateria",
      heading: "Del pad a la batería: cómo aplicar cada rudimento",
      blocks: [
        {
          type: "ul",
          items: [
            "**Golpe simple en los toms:** cuatro semicorcheas en la caja, cuatro en el tom 1, cuatro en el tom 2 y cuatro en el tom de piso. Es el relleno más usado del mundo.",
            "**Paradiddle como ritmo:** la derecha en el hi-hat y la izquierda en la caja, con el bombo en el 1. Obtienes un groove con más movimiento que el rock básico.",
            "**Flam para acentuar:** un flam en la caja al final de un relleno, o junto con un platillo, le da peso a la llegada al tiempo 1.",
            "**Golpe doble repartido:** los dos golpes de una mano en la caja y los de la otra en un tom, para rellenos rápidos sin mover mucho los brazos.",
            "**Redoble de cinco:** cierra una frase y cae con el acento en el platillo crash y el bombo al mismo tiempo.",
          ],
        },
        {
          type: "p",
          text: "Cuando el rudimento funcione repartido entre tambores, combínalo con los [primeros ritmos de batería](/blog/primeros-ritmos-de-bateria): tres compases de ritmo y uno de relleno. Ese ejercicio conecta la técnica con la música de verdad.",
        },
      ],
    },
    {
      id: "errores-comunes-rudimentos",
      heading: "Errores comunes al practicar rudimentos",
      blocks: [
        {
          type: "ul",
          items: [
            "Practicar siempre empezando con la mano dominante.",
            "Subir el tempo antes de que el patrón esté parejo, y acostumbrar las manos a tocar sucio.",
            "Apretar la baqueta con toda la mano y tocar con el brazo en lugar de la muñeca.",
            "Acentos que no se oyen, o notas suaves tan fuertes como los acentos.",
            "Tocar sin metrónomo y acelerar sin darte cuenta.",
            "Quedarse solo en el pad y no llevar nunca el rudimento a la batería.",
            "Olvidar la protección auditiva cuando pasas de un pad a un set acústico.",
          ],
        },
        {
          type: "p",
          text: "Un profe detecta en segundos detalles que tú no ves: una muñeca rígida, un codo abierto o una mano que sube menos que la otra. En las [clases de percusión](/clases/percusion) esa corrección se hace desde la primera semana, y evita meses de practicar un vicio.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es el rudimento más importante de la batería?",
      answer:
        "El golpe simple, porque es la base de casi todos los rellenos y ritmos. Pero el paradiddle es el que más enseña a coordinar, porque combina golpes simples y dobles y obliga a que la mano líder cambie en cada grupo.",
    },
    {
      question: "¿Cuántos rudimentos de batería existen?",
      answer:
        "La lista internacional de la Percussive Arts Society incluye 40, agrupados en redobles, paradiddles, flams y drags. Para empezar basta con cinco; los demás llegan a medida que los necesites en el repertorio.",
    },
    {
      question: "¿Puedo practicar rudimentos sin pad?",
      answer:
        "Sí, sobre un cojín firme, un libro grueso o tus rodillas, aunque el rebote cambia y no es ideal para el golpe doble. Si vas en serio, un pad de práctica es de las compras más útiles y económicas para un baterista.",
    },
    {
      question: "¿A qué velocidad debería tocar un paradiddle?",
      answer:
        "Al tempo en el que te salga parejo y relajado, aunque sea 60 BPM en semicorcheas. La velocidad llega sola si subes de a pocos BPM y no sacrificas el control.",
    },
  ],
  relatedCourseIds: ["percusion"],
  relatedPostSlugs: [
    "primeros-ritmos-de-bateria",
    "cuanto-tiempo-toma-aprender-bateria",
    "como-usar-el-metronomo-para-practicar",
  ],
  cta: "clases",
};
