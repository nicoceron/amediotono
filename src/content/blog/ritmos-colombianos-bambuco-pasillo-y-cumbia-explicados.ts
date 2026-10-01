import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
  title: "Ritmos colombianos: bambuco, pasillo, cumbia y más",
  description:
    "Bambuco, pasillo, cumbia, porro y vallenato explicados: en qué compás se escriben, cómo se sienten, qué instrumentos los llevan y cómo empezar a tocarlos.",
  excerpt:
    "¿Por qué el bambuco se escribe de dos maneras y la cumbia se cuenta en dos? Compases, carácter e instrumentos de los ritmos colombianos, con ejercicios para empezar.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "ritmos colombianos",
    "en qué compás está el bambuco",
    "diferencia entre bambuco y pasillo",
    "compás de la cumbia",
    "cómo tocar bambuco",
    "ritmos de la música andina colombiana",
  ],
  intro: [
    "El bambuco y el pasillo son ritmos andinos ternarios: el pasillo se escribe en 3/4, y el bambuco en 6/8 o en 3/4, un debate de larga data entre músicos e investigadores, porque juega con dos sensaciones de pulso al mismo tiempo. La cumbia y el porro, del Caribe, son binarios: se escriben en 2/4 o en compás partido (2/2). El vallenato reúne varios aires, en su mayoría binarios.",
    "Aquí tienes cómo se siente cada uno, qué instrumentos lo sostienen y ejercicios concretos para empezar a llevarlo en el cuerpo y luego en tu instrumento.",
  ],
  keyTakeaways: [
    "El pasillo se escribe en 3/4 y está emparentado con el vals europeo del siglo XIX.",
    "El bambuco aparece escrito en 6/8 o en 3/4 porque alterna la sensación de dos grupos de tres y tres grupos de dos.",
    "La cumbia y el porro son binarios: se escriben en 2/4 o en compás partido (2/2).",
    "En la cumbia tradicional, el llamador marca el contratiempo y el tambor alegre improvisa.",
    "Para aprender un ritmo, primero se lleva en el cuerpo con palmas y pies, y después en el instrumento.",
  ],
  sections: [
    {
      id: "ritmos-de-un-vistazo",
      heading: "Los ritmos colombianos de un vistazo",
      blocks: [
        {
          type: "table",
          caption: "Compás, carácter e instrumentos (en la práctica hay variantes regionales)",
          head: ["Ritmo", "Región", "Compás más usado", "Carácter", "Instrumentos típicos"],
          rows: [
            ["Bambuco", "Andina", "6/8 o 3/4", "Cadencioso, lírico, a veces festivo", "Tiple, bandola, guitarra, voces"],
            ["Pasillo", "Andina", "3/4", "Romántico si es lento; virtuoso si es rápido", "Tiple, bandola, guitarra, piano, estudiantina"],
            ["Cumbia", "Caribe", "2/4 o compás partido", "De baile en rueda, cadencioso", "Tambor alegre, llamador, tambora, guache, maracas, gaitas o caña de millo"],
            ["Porro", "Caribe (sabanas de Córdoba y Sucre)", "Compás partido o 2/4", "Festivo, de banda", "Clarinetes, trompetas, trombones, bombardino, bombo, platillos, redoblante"],
            ["Vallenato", "Caribe (Cesar, La Guajira, Magdalena)", "Casi todos sus aires binarios", "Narrativo, de canción", "Acordeón, caja vallenata, guacharaca"],
          ],
        },
        {
          type: "p",
          text: "Esta guía se centra en el ritmo. Si quieres conocer el repertorio, los formatos y por dónde empezar a escuchar, mira nuestra guía de [música andina colombiana](/blog/musica-andina-colombiana-guia-para-empezar).",
        },
      ],
    },
    {
      id: "bambuco",
      heading: "Bambuco: el ritmo que se escribe de dos maneras",
      blocks: [
        {
          type: "p",
          text: "Seis corcheas pueden agruparse de dos formas: 3 + 3, que es la base del 6/8, o 2 + 2 + 2, que es la base del 3/4. El bambuco hace sentir ambas a la vez: la melodía y el acompañamiento a menudo van con acentos cruzados, un juego conocido como sesquiáltera o hemiola. Por eso hay partituras de bambuco en 6/8 y otras en 3/4, y ninguna de las dos está equivocada. Lo importante es reconocer ese balanceo.",
        },
        { type: "h3", text: "Ejercicio de sesquiáltera (5 minutos)" },
        {
          type: "ol",
          items: [
            "Cuenta seis corcheas iguales en voz alta: “1 2 3 4 5 6”, a un tempo cómodo.",
            "Da palmas en 1 y 4: sientes dos grupos de tres, la sensación del 6/8.",
            "Ahora da palmas en 1, 3 y 5: sientes tres grupos de dos, la sensación del 3/4.",
            "Alterna: un ciclo de cada forma, sin detener la cuenta.",
            "Combina: el pie marca 1 y 4 mientras las palmas marcan 1, 3 y 5. Esa superposición es el corazón del bambuco.",
            "Pon un bambuco grabado y trata de descubrir cuál de las dos sensaciones marca el tiple y cuál la melodía.",
          ],
        },
        {
          type: "p",
          text: "En el [tiple](/clases/tiple) y la guitarra, el acompañamiento de bambuco combina golpes abiertos y apagados; el patrón exacto varía según la región y el intérprete, así que conviene aprenderlo con un profe que lo muestre despacio.",
        },
      ],
    },
    {
      id: "pasillo",
      heading: "Pasillo: el vals que se volvió colombiano",
      blocks: [
        {
          type: "p",
          text: "El pasillo llegó por la vía del vals europeo en el siglo XIX y se transformó en un ritmo propio en Colombia y otros países andinos. Se escribe en 3/4: tres tiempos por compás. En el acompañamiento, el bajo suele marcar el primer tiempo y los acordes completan el compás, con acentos y desplazamientos que lo diferencian de un vals.",
        },
        {
          type: "table",
          caption: "Dos caras del pasillo",
          head: ["", "Pasillo lento o canción", "Pasillo rápido o fiestero"],
          rows: [
            ["Tempo", "Pausado", "Ágil, a veces muy rápido"],
            ["Función", "Acompañar una letra, a menudo romántica o nostálgica", "Lucimiento instrumental y baile"],
            ["Instrumento protagonista", "La voz, con trío o piano", "Bandola, tiple o piano con pasajes virtuosos"],
          ],
        },
        {
          type: "ol",
          items: [
            "Configura el [metrónomo para pasillo](/herramientas/metronomo/pasillo) en 3/4, con acento en el primer tiempo y un tempo lento.",
            "Marca el 1 con el pie y da dos palmas suaves en el 2 y el 3.",
            "Cuando se estabilice, canta o tararea la melodía de un pasillo que conozcas sobre esa base.",
            "Sube el tempo de a poco. El reto del pasillo rápido es que el primer tiempo siga claro.",
          ],
        },
      ],
    },
    {
      id: "cumbia-y-porro",
      heading: "Cumbia y porro: el pulso binario del Caribe",
      blocks: [
        {
          type: "p",
          text: "La cumbia tiene sus raíces en la región Caribe, asociada sobre todo a las riberas del bajo Magdalena, y se escribe en 2/4 o en compás partido: dos pulsos por compás. En su formato tradicional, cada instrumento cumple un papel claro:",
        },
        {
          type: "table",
          caption: "Roles en un grupo de cumbia tradicional",
          head: ["Instrumento", "Qué hace"],
          rows: [
            ["Llamador", "Marca el contratiempo de forma constante; es el ancla del grupo."],
            ["Tambor alegre", "Improvisa, adorna y dialoga con la melodía y el baile."],
            ["Tambora", "Aporta los graves y refuerza el pulso con golpes en el parche y en el aro."],
            ["Guache y maracas", "Mantienen una subdivisión continua que da el “movimiento”."],
            ["Gaitas o caña de millo", "Llevan la melodía."],
          ],
        },
        { type: "h3", text: "Ejercicio de cumbia" },
        {
          type: "ol",
          items: [
            "Cuenta “1 y 2 y” a un tempo moderado.",
            "Marca el 1 y el 2 con los pies, como un paso de baile.",
            "Da una palma en cada “y”: ese es el llamador.",
            "Cuando se sienta natural, agrega una subdivisión continua con un shaker o con los dedos sobre la mesa.",
          ],
        },
        {
          type: "p",
          text: "El porro viene de las sabanas de Córdoba y Sucre y está ligado a las bandas de viento, como las tradicionales bandas pelayeras. También es binario, generalmente en compás partido, y tiene variantes como el porro palitiao y el porro tapao. Si te llama tocar en una banda, lee cómo [empezar en las bandas de viento](/blog/bandas-de-viento-en-colombia-como-empezar).",
        },
      ],
    },
    {
      id: "vallenato",
      heading: "Vallenato: cuatro aires en uno",
      blocks: [
        {
          type: "p",
          text: "El vallenato no es un solo ritmo: reúne varios aires tocados con acordeón, caja vallenata y guacharaca. Los cuatro más reconocidos son estos, descritos de forma general:",
        },
        {
          type: "table",
          caption: "Los aires del vallenato",
          head: ["Aire", "Carácter", "Sensación de compás"],
          rows: [
            ["Son", "Pausado y cadencioso", "Binaria"],
            ["Paseo", "Moderado; el más frecuente en canciones", "Binaria"],
            ["Merengue", "Ágil y saltarín", "Ternaria, suele escribirse en 6/8"],
            ["Puya", "Muy rápido y virtuoso", "Binaria"],
          ],
        },
      ],
    },
    {
      id: "como-empezar-a-tocarlos",
      heading: "Cómo empezar a tocar ritmos colombianos",
      blocks: [
        {
          type: "ol",
          items: [
            "**Escucha con intención.** Elige un ritmo por semana y escucha varias versiones buscando el pulso, el compás y qué hace cada instrumento.",
            "**Llévalo al cuerpo.** Haz los ejercicios de palmas y pies antes de tocar una sola nota. Si el cuerpo no lo siente, las manos tampoco.",
            "**Elige tu puerta de entrada.** Para los ritmos andinos, el tiple o la guitarra en el acompañamiento, o la [bandola andina](/clases/bandola-andina) en la melodía. Para la cumbia y el porro, la [percusión](/clases/percusion) o un instrumento de viento.",
            "**Aprende el patrón base lento.** Con el instrumento bien afinado y el metrónomo, repite el patrón hasta que salga sin pensar, y solo entonces súbele el tempo.",
            "**Toca con otros.** Grabaciones, un trío, una estudiantina o una banda. Estos ritmos cobran sentido en conjunto.",
          ],
        },
        {
          type: "callout",
          title: "El error más común",
          text: "Tocar el bambuco “cuadrado”, como si fuera un vals con otro nombre. Si tu bambuco suena igual que tu pasillo, vuelve al ejercicio de sesquiáltera: el balanceo entre dos y tres es lo que lo hace bambuco.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿El bambuco se escribe en 6/8 o en 3/4?",
      answer:
        "Se encuentran ambas escrituras, y el debate lleva décadas. El 6/8 refleja mejor la sensación de dos grupos de tres; el 3/4 resulta más cómodo para algunos acompañamientos y para leer la melodía. Lo recomendable es aprender a leer las dos y sentir el balanceo entre ellas.",
    },
    {
      question: "¿Qué diferencia hay entre bambuco y pasillo?",
      answer:
        "Los dos son ternarios y andinos, pero el pasillo tiene un pulso más estable de tres tiempos, con el bajo marcando el primero, mientras que el bambuco juega con acentos cruzados entre dos y tres. Al escucharlos seguidos, el bambuco se siente más “balanceado” y el pasillo más cercano al vals.",
    },
    {
      question: "¿La cumbia colombiana es la misma que la de otros países?",
      answer:
        "La cumbia tiene su origen en el Caribe colombiano y desde allí se difundió por América Latina. En varios países se desarrollaron estilos propios, con otros instrumentos y tempos, que conservan el pulso binario de base.",
    },
    {
      question: "¿Qué instrumento conviene para tocar música colombiana?",
      answer:
        "Depende del repertorio que te atraiga. Para la música andina, el tiple, la bandola o la guitarra; para el Caribe, la percusión tradicional, los vientos o el acordeón. Lo más práctico es empezar por el instrumento que más te emocione al escuchar y dejar que tu profe te guíe hacia los ritmos que lo acompañan.",
    },
  ],
  relatedCourseIds: ["tiple", "bandola-andina", "percusion", "guitarra-acustica"],
  relatedPostSlugs: [
    "musica-andina-colombiana-guia-para-empezar",
    "instrumentos-de-la-musica-del-caribe-colombiano",
    "por-que-aprender-tiple-y-bandola-musica-andina",
  ],
  cta: "clases",
};
