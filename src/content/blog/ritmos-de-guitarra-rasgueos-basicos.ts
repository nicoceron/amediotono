import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "ritmos-de-guitarra-rasgueos-basicos",
  title: "Ritmos de guitarra: rasgueos básicos para principiantes",
  description:
    "Rasgueos básicos de guitarra con flechas: patrones en 4/4 y 3/4 para balada, pop, rock, reggae y vals o pasillo, y cómo practicarlos con metrónomo.",
  excerpt:
    "Un rasgueo es un patrón de golpes hacia abajo y hacia arriba que se repite. Aquí tienes los básicos en 4/4 y 3/4, escritos con flechas, y cómo practicarlos sin que se te desordene el ritmo.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "ritmos de guitarra para principiantes",
    "rasgueos básicos de guitarra",
    "rasgueo de balada en guitarra",
    "cómo rasguear la guitarra",
    "ritmo de reggae en guitarra",
    "rasgueo de vals en guitarra",
  ],
  intro: [
    "Un rasgueo es un patrón de golpes hacia abajo (↓) y hacia arriba (↑) que se repite en cada compás. El secreto para aprender cualquier ritmo de guitarra es que la mano derecha **nunca se detiene**: baja en cada tiempo y sube en cada “y”, como un péndulo, y el patrón solo decide en qué momentos toca las cuerdas y en cuáles pasa por el aire.",
    "Aquí tienes los rasgueos básicos en 4/4 y 3/4 escritos con flechas, en el orden en que un profe suele enseñarlos: negras, corcheas, el patrón pop, balada, rock, reggae y vals o pasillo sencillo. Al final, cómo practicarlos con metrónomo y los errores que más desordenan el ritmo.",
  ],
  keyTakeaways: [
    "La mano derecha se mueve como un péndulo constante: abajo en los números, arriba en las “y”.",
    "Los silencios de un rasgueo no detienen la mano: pasa por el aire sin tocar las cuerdas.",
    "Empieza con cuatro golpes hacia abajo por compás; el patrón “abajo, abajo-arriba, arriba-abajo-arriba” llega después.",
    "Practica cada patrón con las cuerdas apagadas y contando en voz alta antes de sumarle acordes.",
    "Usa el metrónomo entre 60 y 70 y súbelo solo cuando el patrón salga sin pensar.",
  ],
  sections: [
    {
      id: "como-leer-los-rasgueos",
      heading: "Cómo leer un rasgueo: flechas, cuentas y silencios",
      blocks: [
        {
          type: "p",
          text: "En un compás de 4/4 hay cuatro tiempos, y cada tiempo se divide en dos mitades. Se cuenta así: **1 y 2 y 3 y 4 y**. Los números caen cuando tu mano baja; las “y”, cuando sube. Esa es la base de todos los patrones de esta guía.",
        },
        {
          type: "table",
          caption: "Símbolos que usamos en las tablas",
          head: ["Símbolo", "Qué significa", "Cómo se hace"],
          rows: [
            ["↓", "Rasgueo hacia abajo", "De las cuerdas graves a las agudas, con la púa o la uña del índice"],
            ["↑", "Rasgueo hacia arriba", "De las agudas a las graves; basta con tocar tres o cuatro cuerdas"],
            ["·", "Silencio de la mano", "La mano hace el movimiento, pero pasa por encima sin tocar"],
            ["X", "Golpe apagado o chasquido", "La mano cae sobre las cuerdas y las apaga al mismo tiempo; suena como un golpe de caja"],
            ["B", "Bajo", "El pulgar o la púa toca solo la nota más grave del acorde"],
          ],
        },
        {
          type: "p",
          text: "Los golpes hacia abajo suenan más llenos porque empiezan en los bordones; los de arriba, más livianos. No hace falta tocar las seis cuerdas en cada golpe: esa diferencia de peso es parte del groove. Si todavía estás aprendiendo a pisar los acordes, repasa primero los [acordes básicos de guitarra](/blog/acordes-basicos-de-guitarra-para-principiantes).",
        },
      ],
    },
    {
      id: "rasgueos-en-4-4",
      heading: "Rasgueos básicos en 4/4",
      blocks: [
        {
          type: "table",
          caption: "Patrones en 4/4 (un compás; se repite)",
          head: ["Patrón", "1", "y", "2", "y", "3", "y", "4", "y"],
          rows: [
            ["Negras", "↓", "·", "↓", "·", "↓", "·", "↓", "·"],
            ["Corcheas", "↓", "↑", "↓", "↑", "↓", "↑", "↓", "↑"],
            ["Pop o folk", "↓", "·", "↓", "↑", "·", "↑", "↓", "↑"],
            ["Balada", "↓", "·", "↓", "↑", "↓", "·", "↓", "↑"],
            ["Pop con chasquido", "↓", "↑", "X", "↑", "↓", "↑", "X", "↑"],
          ],
        },
        { type: "h3", text: "Negras y corcheas: la base" },
        {
          type: "p",
          text: "Cuatro golpes hacia abajo por compás es el primer ritmo que se enseña, y no es un paso que se pueda saltar: te obliga a cambiar de acorde a tiempo. Cuando salga parejo, pasa a corcheas, ocho golpes alternados. Aquí nace el péndulo que vas a usar en todo lo demás.",
        },
        { type: "h3", text: "El patrón pop: “abajo, abajo-arriba, arriba-abajo-arriba”" },
        {
          type: "p",
          text: "Es el rasgueo más usado para acompañar canciones de pop, rock suave y música de fogata. Fíjate en el tiempo 3: la mano baja sin tocar las cuerdas y por eso el “arriba” siguiente se siente a contratiempo. Si en el 3 detienes la mano en lugar de pasar por el aire, el patrón se desarma. Di en voz alta “a-ba-jo, a-ba-jo-a-rri-ba…” si te ayuda, pero lo que funciona de verdad es contar “1 y 2 y 3 y 4 y” mientras tocas.",
        },
        { type: "h3", text: "Balada" },
        {
          type: "p",
          text: "El patrón de balada repite dos veces “abajo, abajo-arriba” a un tempo tranquilo. Una variante muy usada reemplaza el primer golpe de cada mitad por el bajo del acorde (B en el 1 y en el 3): la fundamental en el tiempo 1 y otra nota grave del acorde en el 3. Así el acompañamiento respira y deja espacio para la voz.",
        },
        { type: "h3", text: "Pop con chasquido" },
        {
          type: "p",
          text: "El golpe apagado en el 2 y el 4 imita la caja de una batería y le da empuje a cualquier canción movida. Para hacerlo, deja caer el costado de la mano derecha sobre las cuerdas justo cuando la púa las golpea, o afloja la presión de la mano izquierda en ese instante. Empieza sin acordes, solo con el sonido percusivo, hasta que el golpe apagado suene claro.",
        },
      ],
    },
    {
      id: "rock-y-reggae",
      heading: "Rock y reggae: el mismo compás, otro carácter",
      blocks: [
        { type: "h3", text: "Rock básico" },
        {
          type: "p",
          text: "El rock más directo se toca en corcheas, pero todas hacia abajo: ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓. Da un sonido compacto y con energía. Acentúa un poco el 2 y el 4, y si tocas guitarra eléctrica, prueba a apoyar el borde de la palma sobre el puente para apagar ligeramente las cuerdas (palm mute). A tempos rápidos, este patrón cansa el antebrazo: mantén la muñeca suelta y el movimiento corto.",
        },
        { type: "h3", text: "Reggae" },
        {
          type: "p",
          text: "El reggae le da la vuelta a todo lo anterior: la guitarra no marca los tiempos fuertes. Contando despacio 1-2-3-4, calla en el 1 y el 3 y toca un acorde corto y seco en el 2 y el 4, solo en las tres o cuatro cuerdas agudas. Para cortarlo, la mano izquierda afloja la presión justo después del golpe, sin despegarse de las cuerdas. En el ska, que es más rápido, ese mismo golpe corto cae en cada “y”. Canciones como “Three Little Birds”, de Bob Marley, son ideales para practicarlo.",
        },
        {
          type: "table",
          caption: "Reggae contado lento (↓ = acorde corto y apagado enseguida)",
          head: ["Tiempo", "1", "2", "3", "4"],
          rows: [["Guitarra", "·", "↓", "·", "↓"]],
        },
        {
          type: "p",
          text: "El error típico en el reggae es acelerarse, porque el silencio del 1 y el 3 da ansiedad. Llevar esos tiempos con el pie, o poner el metrónomo a sonar solo en el 1 y el 3, te ayuda a no adelantarte.",
        },
      ],
    },
    {
      id: "rasgueos-en-3-4",
      heading: "Rasgueos en 3/4: vals y pasillo sencillo",
      blocks: [
        {
          type: "p",
          text: "En 3/4 hay tres tiempos por compás y se cuenta **1 y 2 y 3 y**. El primer tiempo es el fuerte y casi siempre es donde cambia el acorde.",
        },
        {
          type: "table",
          caption: "Patrones en 3/4 (un compás; se repite)",
          head: ["Patrón", "1", "y", "2", "y", "3", "y"],
          rows: [
            ["Vals básico", "↓", "·", "↓", "·", "↓", "·"],
            ["Vals con bajo", "B", "·", "↓", "·", "↓", "·"],
            ["Vals con arriba", "B", "·", "↓", "↑", "↓", "↑"],
          ],
        },
        {
          type: "p",
          text: "El “vals con bajo” (bajo en el 1, acorde en el 2 y en el 3) es la forma más sencilla de empezar a acompañar un pasillo lento o una canción en ritmo de vals, como “Feliz cumpleaños”. Para que suene más completo, alterna los bajos: la fundamental del acorde en un compás y otra nota grave del acorde, por lo general la quinta, en el siguiente.",
        },
        {
          type: "p",
          text: "Ojo: el pasillo tradicional en guitarra y tiple tiene acentos, apagados y desplazamientos que lo distinguen de un vals, y cambian según el estilo y la región. Este patrón es la puerta de entrada, no el ritmo completo. En [ritmos colombianos](/blog/ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados) te explicamos cómo se siente el pasillo frente al bambuco.",
        },
      ],
    },
    {
      id: "como-practicar-con-metronomo",
      heading: "Cómo practicar un rasgueo con metrónomo",
      blocks: [
        {
          type: "ol",
          items: [
            "**Apaga las cuerdas.** Apoya la mano izquierda suavemente sobre las cuerdas, sin pisarlas. Así practicas solo la mano derecha y oyes el ritmo con claridad.",
            "**Cuenta en voz alta.** “1 y 2 y 3 y 4 y”, con la mano bajando en los números aunque no toque.",
            "**Pon el [metrónomo](/herramientas/metronomo) entre 60 y 70.** Que cada clic sea un tiempo. Toca el patrón ocho veces seguidas sin parar.",
            "**Suma un solo acorde.** Mim o Lam son perfectos porque se pisan fácil.",
            "**Suma el cambio.** Dos acordes, cambiando en el tiempo 1. Truco de profe: suelta el acorde en el último “arriba” del compás; ese golpe puede sonar con cuerdas al aire y nadie lo nota, pero te da tiempo para llegar al siguiente acorde.",
            "**Sube de a poco.** Cuando salga limpio tres veces seguidas, sube el metrónomo cuatro o cinco pulsaciones.",
          ],
        },
        {
          type: "p",
          text: "Para cualquier canción, empieza con negras aunque la grabación tenga un rasgueo más complejo, y complícalo cuando los cambios salgan a tiempo. Si quieres repertorio para aplicar estos patrones, tenemos una lista de [canciones fáciles para guitarra](/blog/canciones-faciles-para-guitarra-principiantes) ordenadas por número de acordes.",
        },
      ],
    },
    {
      id: "errores-comunes-rasgueo",
      heading: "Errores comunes al rasguear",
      blocks: [
        {
          type: "table",
          caption: "Qué pasa y cómo corregirlo",
          head: ["Error", "Qué pasa", "Corrección"],
          rows: [
            ["Detener la mano en los silencios", "El ritmo se desordena justo después del silencio", "Mantén el péndulo: la mano pasa por el aire"],
            ["Mover todo el brazo desde el hombro", "Te cansas rápido y el sonido es duro", "El movimiento sale del antebrazo que rota y de una muñeca suelta"],
            ["Agarrar la púa con demasiada fuerza", "Suena golpeado y la púa se traba en las cuerdas", "Sujétala entre el pulgar y el costado del índice, dejando asomar solo la punta"],
            ["Acelerar en los cambios de acorde", "El compás se acorta cuando el cambio es difícil", "Practica el cambio aislado y usa el truco del último “arriba”"],
            ["Tocar las seis cuerdas en todos los acordes", "Suenan bajos que no pertenecen al acorde", "En Re, empieza en la 4ª cuerda; en La y Do, en la 5ª"],
            ["Mirar siempre la mano derecha", "Pierdes la mano izquierda y la postura", "Mira el mástil en los cambios; la derecha debe ir sola"],
          ],
        },
        {
          type: "callout",
          title: "¿Con púa o con los dedos?",
          text: "Las dos formas son válidas. Con púa delgada o media, el sonido es más brillante y parejo, ideal para pop y rock en guitarra de cuerdas metálicas. Con los dedos (la uña del índice hacia abajo y la yema del índice o el pulgar hacia arriba), el sonido es más cálido y es lo habitual en guitarra clásica y en muchos ritmos latinos y colombianos.",
        },
        {
          type: "p",
          text: "Los patrones de esta guía son un punto de partida; un profe de [guitarra acústica](/clases/guitarra-acustica) te ayuda a escuchar qué rasgueo lleva realmente cada canción y a corregir la mano derecha antes de que se vuelva un hábito.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es el rasgueo más fácil de guitarra?",
      answer:
        "Cuatro golpes hacia abajo por compás, uno en cada tiempo. Parece demasiado simple, pero es el que te permite concentrarte en cambiar de acorde a tiempo. Cuando eso salga, pasa a corcheas y luego al patrón pop.",
    },
    {
      question: "¿Cómo sé qué rasgueo lleva una canción?",
      answer:
        "Primero cuenta el compás: si al llevar el pulso sientes grupos de tres, es 3/4; si son de cuatro, 4/4. Luego escucha dónde están los acentos y si la guitarra toca seguido o deja huecos. Empieza con el patrón más cercano y ajústalo; no hace falta copiar la grabación golpe por golpe.",
    },
    {
      question: "¿Por qué se me desordena el ritmo cuando cambio de acorde?",
      answer:
        "Porque la mano derecha espera a que la izquierda llegue. Practica el cambio por separado, sin rasgueo, y cuando juntes todo, deja que la mano derecha siga en su péndulo aunque el acorde no haya llegado del todo. Con el tiempo, la izquierda aprende a llegar a tiempo.",
    },
    {
      question: "¿Estos rasgueos sirven para guitarra eléctrica y para tiple?",
      answer:
        "En la eléctrica, sí, tal cual, aunque ahí es más común el rock en corcheas hacia abajo y los golpes apagados. El tiple tiene rasgueos propios para bambuco, pasillo y guabina, con técnicas de apagado particulares, así que conviene aprenderlos con un profe de música andina.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica"],
  relatedPostSlugs: [
    "acordes-basicos-de-guitarra-para-principiantes",
    "canciones-faciles-para-guitarra-principiantes",
    "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
  ],
  cta: "clases",
};
