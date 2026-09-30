import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "guitarra-o-bajo-cual-aprender",
  title: "¿Guitarra o bajo? Cuál aprender según tu estilo",
  description:
    "¿Guitarra o bajo eléctrico? Comparamos su rol en la banda, la dificultad inicial, el equipo y la personalidad musical de cada uno para que elijas bien.",
  excerpt:
    "Uno arma la armonía y los solos; el otro sostiene el groove de toda la banda. Te ayudamos a elegir según tu forma de sentir la música.",
  category: "instrumentos",
  publishedAt: "2026-09-30",
  keywords: [
    "guitarra o bajo",
    "es más fácil el bajo que la guitarra",
    "qué aprender primero guitarra o bajo",
    "diferencia entre guitarra y bajo eléctrico",
    "aprender bajo sin saber guitarra",
  ],
  intro: [
    "Depende del papel que te gusta tener en la música. Si quieres acordes para cantar, melodías, solos y la posibilidad de tocar solo en tu cuarto, elige la guitarra. Si lo que te mueve es el groove, sentir el ritmo en el cuerpo y ser la base sobre la que se para toda la banda, elige el bajo.",
    "Al comienzo el bajo parece más sencillo, porque tocas una nota a la vez; la guitarra exige acordes desde las primeras semanas. Pero ninguno es un instrumento “menor”: más adelante, los dos tienen la misma profundidad.",
  ],
  keyTakeaways: [
    "La guitarra se encarga de la armonía y la melodía; el bajo une el ritmo de la batería con la armonía.",
    "El bajo tiene cuatro cuerdas afinadas como las cuatro graves de la guitarra, una octava más abajo.",
    "Las primeras líneas de bajo salen rápido; el gran reto del bajista es tocar perfectamente a tiempo.",
    "La guitarra es muy satisfactoria para tocar sola; el bajo brilla cuando suena con otros o con pistas.",
    "En las bandas casi siempre falta un bajista, y pasar de la guitarra al bajo, o al revés, es un camino común.",
  ],
  sections: [
    {
      id: "guitarra-vs-bajo-tabla",
      heading: "Guitarra vs. bajo: comparación rápida",
      blocks: [
        {
          type: "table",
          caption: "Diferencias entre guitarra y bajo eléctrico para quien empieza",
          head: ["Aspecto", "Guitarra", "Bajo eléctrico"],
          rows: [
            [
              "Rol en la música",
              "Armonía y melodía: acordes, arpegios, riffs y solos.",
              "Puente entre ritmo y armonía: notas fundamentales y groove junto a la batería.",
            ],
            [
              "Cuerdas y afinación",
              "Seis: Mi, La, Re, Sol, Si, Mi.",
              "Cuatro: Mi, La, Re, Sol, una octava por debajo de la guitarra.",
            ],
            [
              "Primeras semanas",
              "Acordes y cambios de acorde; las yemas duelen un poco.",
              "Líneas de una nota; cuerdas gruesas y distancias largas en el mástil.",
            ],
            [
              "El reto que llega después",
              "Cejillas, solos, técnica de púa o dedos, armonía más rica.",
              "Precisión rítmica absoluta, sonido parejo, walking bass, slap.",
            ],
            [
              "Tocar solo en casa",
              "Muy satisfactorio: te acompañas cantando.",
              "Suena incompleto sin otros; se practica con pistas o metrónomo.",
            ],
            [
              "En bandas",
              "Suele haber varios guitarristas buscando banda.",
              "Casi siempre hace falta un bajista.",
            ],
            [
              "Equipo",
              "Acústica: nada extra. Eléctrica: amplificador y cable.",
              "Siempre necesita amplificador de bajo y cable, o audífonos con un equipo adecuado.",
            ],
            [
              "Edad de inicio orientativa",
              "Desde los 6 o 7 años con guitarra pequeña de nailon.",
              "Hacia los 9 o 10 años; con un bajo de escala corta, algo antes.",
            ],
          ],
        },
      ],
    },
    {
      id: "que-hace-cada-uno-en-la-banda",
      heading: "Qué hace cada uno en una banda",
      blocks: [
        {
          type: "p",
          text: "Piensa en una canción como una casa. La batería es el piso, el bajo son las columnas y la guitarra, las paredes y las ventanas. Si quitas la guitarra, la canción pierde color; si quitas el bajo, todo suena flotando, aunque mucha gente no sepa explicar por qué.",
        },
        {
          type: "p",
          text: "En la salsa, el bajo toca el tumbao, que anticipa el acorde y empuja a los bailarines. En el vallenato y la cumbia moderna, el bajo es la mitad del baile. En el rock y el funk, bajo y batería forman una sola máquina rítmica. La guitarra, en cambio, puede rasguear acordes en un bolero, hacer riffs en el rock o llevar el solo de una balada.",
        },
      ],
    },
    {
      id: "dificultad-al-empezar",
      heading: "La dificultad al empezar, sin mitos",
      blocks: [
        { type: "h3", text: "En la guitarra" },
        {
          type: "p",
          text: "El primer muro son los cambios de acorde: poner tres o cuatro dedos a la vez, a tiempo, sin que suenen apagados. El segundo, unos meses después, es la cejilla. A cambio, con cuatro acordes ya acompañas muchas canciones.",
        },
        { type: "h3", text: "En el bajo" },
        {
          type: "p",
          text: "Tocar una nota a la vez hace que las primeras líneas salgan rápido. Lo que cuesta es físico y rítmico: el mástil es largo, las cuerdas son gruesas y la mano izquierda tiene que abrirse sin tensión. Y el tiempo no perdona: si el bajista se adelanta o se atrasa, toda la banda se tambalea. Practicar con el [metrónomo](/herramientas/metronomo) desde el primer día es parte de la técnica.",
        },
      ],
    },
    {
      id: "personalidad-musical",
      heading: "¿Qué dice tu personalidad musical?",
      blocks: [
        {
          type: "p",
          text: "Responde con honestidad estas preguntas mientras escuchas tu música favorita:",
        },
        {
          type: "ul",
          items: [
            "¿Cantas la melodía o mueves la cabeza con la línea de abajo?",
            "¿Te imaginas al frente del escenario o atrás, sosteniendo todo junto al baterista?",
            "¿Te emociona un solo de guitarra o un groove que no te deja quieto?",
            "¿Disfrutas tocar solo por horas o prefieres la sensación de tocar en grupo?",
          ],
        },
        {
          type: "p",
          text: "Si tus respuestas se inclinan por la melodía, el protagonismo y tocar solo, la guitarra va contigo. Si te reconoces en el groove y el trabajo en equipo, probablemente eres bajista y todavía no lo sabes. Si quieres saber más de ese rol, lee [por qué aprender bajo eléctrico](/blog/por-que-aprender-bajo-electrico).",
        },
      ],
    },
    {
      id: "elige-guitarra-o-bajo",
      heading: "Elige guitarra si… / elige bajo si…",
      blocks: [
        { type: "h3", text: "Elige la guitarra si…" },
        {
          type: "ul",
          items: [
            "Quieres cantar y acompañarte.",
            "Te atraen los solos, los riffs y los acordes.",
            "Vas a practicar sobre todo solo, en tu casa.",
            "Es para un niño de 6 a 8 años, que todavía no alcanza cómodamente un mástil de bajo.",
          ],
        },
        { type: "h3", text: "Elige el bajo si…" },
        {
          type: "ul",
          items: [
            "Lo primero que escuchas en una canción es la línea de abajo.",
            "Te gusta la salsa, el funk, el reggae, el vallenato o la cumbia moderna.",
            "Quieres entrar pronto a una banda del colegio o con amigos.",
            "Disfrutas más sostener que brillar.",
          ],
        },
        {
          type: "p",
          text: "Puedes ver el enfoque de las [clases de guitarra acústica](/clases/guitarra-acustica), de [guitarra eléctrica](/clases/guitarra-electrica) y de [bajo eléctrico](/clases/bajo-electrico). Si ya elegiste guitarra, el siguiente paso es decidir [si empezar con acústica o eléctrica](/blog/guitarra-acustica-o-electrica-cual-aprender-primero).",
        },
      ],
    },
    {
      id: "pasar-de-guitarra-a-bajo",
      heading: "Pasar de uno al otro más adelante",
      blocks: [
        {
          type: "p",
          text: "Como las cuatro cuerdas del bajo se afinan igual que las cuatro graves de la guitarra, lo que sabes del mástil te sirve en ambos sentidos.",
        },
        {
          type: "ul",
          items: [
            "De la guitarra al bajo: aprende a pulsar con los dedos índice y medio alternados, a apagar las cuerdas que no suenan y a pensar primero en el ritmo y luego en las notas. El error típico del guitarrista que toca bajo es llenar todo de notas.",
            "Del bajo a la guitarra: vas a dominar el ritmo y conocer las fundamentales de cada acorde; te falta armar acordes completos y acostumbrarte a cuerdas más delgadas.",
          ],
        },
        {
          type: "p",
          text: "Muchos músicos tocan los dos. Saber bajo hace mejores guitarristas, porque entienden de dónde sale la armonía, y saber guitarra hace mejores bajistas, porque conocen los acordes que están sosteniendo.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Es más fácil el bajo que la guitarra?",
      answer:
        "Al principio suele parecerlo, porque se toca una nota a la vez. Con el tiempo la dificultad se equilibra: el bajo exige una precisión rítmica muy alta y la guitarra, más coordinación armónica.",
    },
    {
      question: "¿Se puede aprender bajo sin saber guitarra?",
      answer:
        "Sí. El bajo es un instrumento completo y se puede empezar desde cero. No necesitas pasar primero por la guitarra.",
    },
    {
      question: "¿Cuántas cuerdas debe tener un bajo para empezar?",
      answer:
        "Cuatro. Los bajos de cinco o seis cuerdas amplían el registro, pero tienen el mástil más ancho y complican los primeros meses sin aportar mucho a quien empieza.",
    },
    {
      question: "¿Puedo practicar bajo sin amplificador?",
      answer:
        "Un rato sí, pero no se escucha bien ni se aprende a controlar el sonido. Lo mejor es un amplificador pequeño de bajo o un equipo que permita usar audífonos.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "bajo-electrico", "guitarra-electrica"],
  relatedPostSlugs: [
    "guitarra-acustica-o-electrica-cual-aprender-primero",
    "por-que-aprender-bajo-electrico",
    "como-elegir-tu-primer-bajo-electrico",
  ],
  cta: "clases",
};
