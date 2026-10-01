// Metrónomo para ritmos colombianos (/herramientas/metronomo/<slug>).
//
// Fuentes de compases, tempos y acentos (cítalas en el texto cuando des un
// número; si una fuente no da tempo, dilo en vez de inventarlo):
// - Cano, Mora-Ángel y otros, "Sesquialtera in the Colombian Bambuco", ISMIR 2020.
// - Jordán Beghelli y otros, "Fantasía en 6/8…", revista Ricercare 5, EAFIT, 2016.
// - Gutiérrez Restrepo y Llanos Hernández, "Tres ritmos colombianos para la guitarra", Univalle, 2018.
// - Luján Zapata, "Álvaro Romero Sánchez y su bambuco Dical", Artes La Revista 32, UdeA, 2025.
// - Ministerio de Cultura, Plan Nacional de Música para la Convivencia: cartillas
//   «Viva quien toca» (músicas andinas de centro oriente), «¡Qué te pasa vo!»
//   (Pacífico sur) y «Pitos y tambores» (Caribe).
// - Ministerio de Cultura, Plan Especial de Salvaguardia de la música vallenata tradicional.
// - Pardo Estrada, tesis de maestría sobre paseos vallenatos, UdeA, 2022.
// - Wikipedia en español, «Joropo» (cita a Juan Francisco Sans).
// Los tempos de los botones son puntos de partida para practicar, no tempos oficiales.
import type { RhythmPreset } from "@/lib/music-tools";

export const RHYTHM_PRESETS: RhythmPreset[] = [
  {
    slug: "bambuco",
    name: "bambuco",
    gender: "m",
    headline: "Metrónomo para bambuco",
    seoTitle: "Metrónomo para bambuco en 6/8 y 3/4",
    metaDescription:
      "Metrónomo gratis para practicar bambuco en 6/8 o en 3/4 con las mismas corcheas, tempos de referencia y ejercicios para sentir la sesquiáltera.",
    summary: "Andina · 6/8 o 3/4",
    intro:
      "El bambuco se escribe en 6/8 o en 3/4, y las dos escrituras conviven desde hace un siglo. Este metrónomo carga los dos compases con la misma velocidad de corcheas: cambia de uno a otro y escucha cómo el mismo ritmo se agrupa de tres en tres o de dos en dos.",
    setups: [
      { label: "En 6/8", meter: "6/8", bpm: 90, subdivision: 3, accents: [2, 0] },
      { label: "En 3/4", meter: "3/4", bpm: 135, subdivision: 2, accents: [2, 0, 1] },
    ],
    setupNote:
      "6/8 a 90 negras con puntillo y 3/4 a 135 negras suenan con las mismas corcheas. En 3/4, el tercer tiempo lleva un acento suave, como suele marcarlo el acompañamiento.",
    facts: [
      ["Región", "Andina colombiana"],
      ["Compás", "6/8 o 3/4: las dos escrituras se usan y ninguna está equivocada"],
      [
        "Tempo de referencia",
        "En una muestra de diez grabaciones analizadas en 2020: negra con puntillo entre 89 y 142 (en 6/8), o negra entre 130 y 213 (en 3/4). Es una muestra, no una norma",
      ],
      ["Instrumentos", "Tiple, bandola, guitarra y voces"],
      ["Para escuchar", "«Cuatro preguntas», de Pedro Morales Pino, y «Muchacha de risa loca», de José Macías"],
    ],
    sections: [
      {
        heading: "¿6/8 o 3/4? Un debate de más de un siglo",
        blocks: [
          {
            type: "p",
            text: "Pedro Morales Pino empezó a comienzos del siglo XX la costumbre de escribir el bambuco en 3/4, cuando puso en partitura su «Cuatro preguntas». Desde entonces, músicos e investigadores han defendido una u otra escritura. Enrique Mazuera (1972) defendió el 3/4 porque, según él, en 6/8 el bambuco pierde su carácter cantable; Mario Gómez-Vignes (1981) sostuvo que el 6/8 es el que mejor responde a su ritmo. Luis Uribe Bueno escribió bambucos en 3/4 y luego los reescribió en 6/8, después de que una orquesta sinfónica tuviera dificultades para tocarlos.",
          },
          {
            type: "p",
            text: "Estudios recientes describen el 6/8 como la escritura más usada por convención, con un acompañamiento que mezcla las dos sensaciones. Para tocarlo, lo importante es sentir la sesquiáltera: el vaivén entre dos grupos de tres corcheas (6/8) y tres grupos de dos (3/4). Lo explicamos con ejemplos en la guía de [ritmos colombianos](/blog/ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados).",
          },
        ],
      },
      {
        heading: "Bambuco fiestero y bambuco lento",
        blocks: [
          {
            type: "p",
            text: "No hay un tempo único. Las fuentes distinguen un bambuco fiestero, más ágil, asociado al Tolima Grande y a los Santanderes, y un bambuco lento y melancólico, asociado al Cauca. Por eso el tempo de los botones es un punto de partida: usa **Tap tempo** sobre la grabación que estés estudiando para encontrar el suyo.",
          },
          {
            type: "p",
            text: "Otra característica que lo distingue del pasillo es su impulso anacrúsico: muchas frases empiezan antes del primer tiempo, y en el acompañamiento el bajo suele apoyar los tiempos 2 y 3.",
          },
        ],
      },
    ],
    practice: [
      "Empieza en 6/8 con subdivisión en corcheas y cuenta «1-2-3-4-5-6», marcando con el pie el 1 y el 4.",
      "Sin dejar de contar, cambia a 3/4: las corcheas siguen iguales, pero ahora los apoyos caen en 1, 3 y 5.",
      "Alterna los dos compases cada cuatro compases hasta que puedas sentir los dos pulsos a la vez.",
      "Toca el acompañamiento del tiple o la guitarra sobre el clic y sube de a 4 BPM cuando salga limpio tres veces seguidas.",
    ],
    faqs: [
      {
        question: "¿El bambuco es en 3/4 o en 6/8?",
        answer:
          "Se escribe de las dos formas y el debate lleva décadas. El 6/8 refleja mejor los dos grupos de tres corcheas y hoy es la escritura convencional; el 3/4 sigue presente en mucho repertorio. Lo recomendable es leer las dos y sentir el vaivén entre ellas.",
      },
      {
        question: "¿A qué velocidad se toca un bambuco?",
        answer:
          "Depende del estilo: el bambuco fiestero es ágil y el lento, pausado. En una muestra de grabaciones analizadas, el pulso en 6/8 fue de 89 a 142 negras con puntillo por minuto. Empieza más lento y sube de a poco.",
      },
      {
        question: "¿En qué se diferencia del pasillo?",
        answer:
          "El pasillo está en 3/4 con el acento claro en el primer tiempo. El bambuco juega con la sesquiáltera y tiene un impulso anacrúsico: sus frases tienden a empezar antes del primer tiempo. Practica el pasillo con el [metrónomo para pasillo](/herramientas/metronomo/pasillo).",
      },
    ],
    courseId: "tiple",
    relatedPostSlugs: [
      "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
      "compases-musicales-explicados-2-4-3-4-4-4-y-6-8",
      "musica-andina-colombiana-guia-para-empezar",
    ],
  },
  {
    slug: "pasillo",
    name: "pasillo",
    gender: "m",
    headline: "Metrónomo para pasillo",
    seoTitle: "Metrónomo para pasillo colombiano en 3/4",
    metaDescription:
      "Metrónomo gratis para practicar pasillo colombiano en 3/4: acento en el primer tiempo, corcheas y ejercicios para el pasillo lento y el fiestero.",
    summary: "Andina · 3/4",
    intro:
      "El pasillo se escribe en 3/4: tres tiempos por compás, con el bajo en el primero. Puede ser lento y cantado o rápido y virtuoso, así que el metrónomo arranca en un tempo cómodo para que subas a tu ritmo.",
    setups: [{ label: "En 3/4", meter: "3/4", bpm: 100, subdivision: 2, accents: [2, 0, 0] }],
    setupNote:
      "3/4 a 100 negras, con corcheas y acento en el primer tiempo: un punto de partida cómodo, no un tempo oficial.",
    facts: [
      ["Región", "Andina; también se cultiva en otros países andinos"],
      ["Compás", "3/4"],
      [
        "Tempo",
        "No hay un tempo fijo: el pasillo cantado es lento y cadencioso, y el instrumental o fiestero, muy rápido, a voluntad del intérprete",
      ],
      ["Instrumentos", "Tiple, bandola, guitarra, requinto; también piano y estudiantina"],
      ["Para escuchar", "«La gata golosa», de Fulgencio García, y «Cachipay», un pasillo fiestero"],
    ],
    sections: [
      {
        heading: "Cómo se acentúa el pasillo",
        blocks: [
          {
            type: "p",
            text: "El acento principal cae en el primer tiempo, que suele marcar el bajo. En la guitarra, un patrón frecuente pone el bajo en el 1 y los acordes en la segunda mitad del 2 y en el 3; en el tiple, el impulso se siente en la tercera y la sexta corchea. Algunos pasillos juegan además con hemiolas, acentos cada dos tiempos que cruzan el compás, como «Acuarela» o «Volverán».",
          },
          {
            type: "p",
            text: "El pasillo llegó por la vía del vals europeo en el siglo XIX, pero esos desplazamientos del acompañamiento lo convirtieron en un ritmo propio. Si lo tocas como un vals, con tres tiempos iguales, pierde su carácter.",
          },
        ],
      },
      {
        heading: "Pasillo lento y pasillo fiestero",
        blocks: [
          {
            type: "table",
            caption: "Dos caras del pasillo",
            head: ["", "Pasillo lento o canción", "Pasillo fiestero"],
            rows: [
              ["Tempo", "Pausado y cadencioso", "Rápido, a veces muy rápido"],
              ["Función", "Acompañar una letra", "Lucimiento instrumental y baile"],
              ["Cómo practicarlo", "Con corcheas, cuidando el primer tiempo", "Sin subdivisión al pasar de 150 BPM, solo con los tiempos"],
            ],
          },
        ],
      },
    ],
    practice: [
      "Con el acento activado, marca el 1 con el pie y cuenta «1 y 2 y 3 y».",
      "Da una palma suave en la segunda mitad del 2 y otra en el 3: es el patrón de los acordes en la guitarra.",
      "Canta o tararea la melodía de un pasillo que conozcas sobre esa base.",
      "Sube de a 4 BPM. El reto del pasillo rápido es que el primer tiempo siga claro.",
    ],
    faqs: [
      {
        question: "¿En qué compás está el pasillo?",
        answer: "En 3/4: tres tiempos por compás, con el acento principal en el primero.",
      },
      {
        question: "¿Qué diferencia hay entre el pasillo y el vals?",
        answer:
          "Los dos están en 3/4 y el pasillo viene del vals europeo, pero su acompañamiento desplaza los acordes y a veces cruza el compás con hemiolas. Por eso, aunque comparten compás, no se sienten igual.",
      },
      {
        question: "¿A qué tempo se toca el pasillo?",
        answer:
          "No hay un tempo único: el pasillo canción es lento y el fiestero, muy rápido. Usa Tap tempo sobre una grabación para encontrar el de cada obra y practícalo primero más lento.",
      },
    ],
    courseId: "bandola-andina",
    relatedPostSlugs: [
      "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
      "musica-andina-colombiana-guia-para-empezar",
      "canciones-colombianas-para-aprender-en-tiple-o-guitarra",
    ],
  },
  {
    slug: "guabina",
    name: "guabina",
    gender: "f",
    headline: "Metrónomo para guabina",
    seoTitle: "Metrónomo para guabina en 3/4",
    metaDescription:
      "Metrónomo gratis para practicar guabina en 3/4: acento en el primer tiempo, corcheas en pares y el patrón de acompañamiento de la guitarra, paso a paso.",
    summary: "Andina · 3/4",
    intro:
      "La guabina se escribe en 3/4, como el pasillo, con el acento en el primer tiempo y las corcheas agrupadas de a dos. Es música de Santander, Boyacá, Tolima y Huila, y en Vélez tiene su propio festival: el Festival Nacional de la Guabina y el Tiple.",
    setups: [{ label: "En 3/4", meter: "3/4", bpm: 90, subdivision: 2, accents: [2, 0, 0] }],
    setupNote:
      "3/4 a 90 negras con corcheas: un punto de partida para practicar. Las fuentes no fijan un tempo para la guabina, así que ajústalo a cada obra con Tap tempo.",
    facts: [
      ["Región", "Santander, Boyacá, Tolima y Huila"],
      ["Compás", "3/4"],
      ["Tempo", "No hay un tempo de referencia publicado: depende de la obra y de la región"],
      ["Instrumentos", "Tiple, bandola y guitarra; en Santander, también requinto"],
      ["Para escuchar", "«Vivirás mi Tolima», de Pedro J. Ramos, y «Guabina chiquinquireña», de Alberto Urdaneta"],
    ],
    sections: [
      {
        heading: "Cómo se acompaña la guabina",
        blocks: [
          {
            type: "p",
            text: "En la guitarra, un patrón frecuente pone el bajo en los tiempos 1 y 2, el acorde en el 2 y dos corcheas en el 3. Como en el pasillo, el apoyo fuerte está en el primer tiempo y las corcheas se agrupan en pares, sin el vaivén entre 3/4 y 6/8 que caracteriza al bambuco.",
          },
        ],
      },
      {
        heading: "Guabina, tiple y requinto",
        blocks: [
          {
            type: "p",
            text: "La guabina es inseparable del tiple, y en Santander se suma el requinto. Si tocas cualquiera de los dos, afínalo antes de practicar con el [afinador de tiple](/herramientas/afinador/tiple) o el [afinador de tiple requinto](/herramientas/afinador/tiple-requinto).",
          },
        ],
      },
    ],
    practice: [
      "Marca el 1 con el pie y cuenta «1 y 2 y 3 y» con el metrónomo en corcheas.",
      "Toca el bajo en 1 y 2, el acorde en el 2 y dos corcheas en el 3, muy despacio.",
      "Cuando el patrón salga solo, quita la subdivisión y escucha solo los tiempos.",
      "Busca el tempo de una grabación con Tap tempo y acércate a él de a 4 BPM.",
    ],
    faqs: [
      {
        question: "¿En qué compás está la guabina?",
        answer: "En 3/4, con el acento en el primer tiempo y las corcheas agrupadas de a dos.",
      },
      {
        question: "¿En qué se diferencia la guabina del pasillo?",
        answer:
          "Comparten el compás de 3/4 y el apoyo en el primer tiempo. Cambian el patrón de acompañamiento, el repertorio y la región: la guabina es sobre todo de Santander, Boyacá, Tolima y Huila.",
      },
      {
        question: "¿Dónde se celebra el festival de la guabina?",
        answer: "En Vélez, Santander, con el Festival Nacional de la Guabina y el Tiple.",
      },
    ],
    courseId: "tiple",
    relatedPostSlugs: [
      "musica-andina-colombiana-guia-para-empezar",
      "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
      "canciones-colombianas-para-aprender-en-tiple-o-guitarra",
    ],
  },
  {
    slug: "cumbia",
    name: "cumbia",
    gender: "f",
    headline: "Metrónomo para cumbia",
    seoTitle: "Metrónomo para cumbia colombiana gratis",
    metaDescription:
      "Metrónomo gratis para practicar cumbia colombiana en compás partido (2/2), con el clic suave en el contratiempo del llamador y ejercicios paso a paso.",
    summary: "Caribe · 2/2 (compás partido)",
    intro:
      "La cumbia es binaria: se escribe en compás partido (2/2) o en 2/4, con dos pulsos por compás. El metrónomo marca las blancas y agrega un clic suave en el contratiempo, justo donde suena el llamador.",
    setups: [{ label: "En 2/2", meter: "2/2", bpm: 90, subdivision: 2, accents: [2, 0] }],
    setupNote:
      "Compás partido a 90 blancas, con subdivisión en negras: el clic suave cae en el contratiempo. Como referencia, la grabación de cumbia de la cartilla «Pitos y tambores» del Ministerio de Cultura va a 100 blancas.",
    facts: [
      ["Región", "Caribe colombiano, sobre todo la depresión momposina y las riberas del bajo Magdalena"],
      ["Compás", "2/2 (compás partido) o 2/4"],
      ["Tempo de referencia", "Por ejemplo, blanca = 100 en la grabación de referencia de la cartilla «Pitos y tambores»"],
      ["Instrumentos", "Caña de millo o gaitas, tambor alegre, llamador, tambora, maracas y guache"],
      ["Para escuchar", "«La pollera colorá» (Juan Madera Castro y Wilson Choperena, 1960)"],
    ],
    sections: [
      {
        heading: "Dónde cae cada instrumento",
        blocks: [
          {
            type: "ul",
            items: [
              "**Llamador:** toca en el contratiempo, de forma constante. Es el clic suave del metrónomo.",
              "**Maracas y guache:** dividen cada pulso en dos y mantienen el movimiento continuo.",
              "**Tambora:** aporta los graves y marca la llamada clave de cumbia, un acento en la séptima de las ocho subdivisiones de cada dos compases.",
              "**Tambor alegre:** improvisa y dialoga con la melodía y el baile.",
              "**Caña de millo o gaitas:** llevan la melodía.",
            ],
          },
        ],
      },
      {
        heading: "Por qué compás partido",
        blocks: [
          {
            type: "p",
            text: "En la música de pitos y tambores del Caribe, los compases de dos pulsos son casi generales. Escribir la cumbia en 2/2 en lugar de 4/4 refleja que se siente en dos, como un paso de baile que va y vuelve, y no en cuatro tiempos. Si prefieres contarla en 2/4, elige ese compás en el [metrónomo](/herramientas/metronomo): el pulso es el mismo, cambia solo la figura.",
          },
        ],
      },
    ],
    practice: [
      "Cuenta «1 y 2 y» a un tempo moderado y marca el 1 y el 2 con los pies, como un paso de baile.",
      "Da una palma en cada «y», junto con el clic suave: ese es el llamador.",
      "Cambia la subdivisión a corcheas y agrega un shaker o los dedos sobre la mesa: son las maracas.",
      "Cuando todo se sienta natural, sube el tempo hacia las 100 blancas de la grabación de referencia.",
    ],
    faqs: [
      {
        question: "¿En qué compás se escribe la cumbia?",
        answer: "En compás partido (2/2) o en 2/4: dos pulsos por compás.",
      },
      {
        question: "¿Qué hace el llamador en la cumbia?",
        answer:
          "Marca el contratiempo de forma constante y sostiene al grupo. En este metrónomo, es el clic suave entre pulso y pulso.",
      },
      {
        question: "¿Puedo practicar cumbia en batería?",
        answer:
          "Sí: puedes repartir en el set los papeles de la tambora, el llamador y las maracas. Lee [batería o percusión latina](/blog/bateria-o-percusion-latina) para decidir por dónde empezar.",
      },
    ],
    courseId: "percusion",
    relatedPostSlugs: [
      "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
      "instrumentos-de-la-musica-del-caribe-colombiano",
      "bateria-o-percusion-latina",
    ],
  },
  {
    slug: "porro",
    name: "porro",
    gender: "m",
    headline: "Metrónomo para porro",
    seoTitle: "Metrónomo para porro en compás partido",
    metaDescription:
      "Metrónomo gratis para practicar porro en compás partido (2/2), con tempos de referencia del porro palitiao, el tapao y el de gaitas, y ejercicios de banda.",
    summary: "Caribe · 2/2 (compás partido)",
    intro:
      "El porro, la música de banda de las sabanas del Caribe colombiano, es binario: se escribe en compás partido (2/2). Su pulso es más reposado que el de otros ritmos de la región, y el metrónomo arranca en un tempo tomado de grabaciones de referencia.",
    setups: [{ label: "En 2/2", meter: "2/2", bpm: 85, subdivision: 2, accents: [2, 0] }],
    setupNote:
      "2/2 a 85 blancas: las grabaciones de referencia de la cartilla «Pitos y tambores» van de 80 (porro palitiao) a 93 (porro de gaitas).",
    facts: [
      ["Región", "Sabanas del Caribe colombiano: Córdoba, Sucre y Bolívar"],
      ["Compás", "2/2 (compás partido)"],
      [
        "Tempo de referencia",
        "Por ejemplo, blanca = 80 en un porro palitiao, 90 en un porro tapao y 93 en un porro de gaitas (cartilla «Pitos y tambores»)",
      ],
      ["Instrumentos", "Banda: clarinetes, trompetas, trombones, bombardino, bombo, redoblante y platillos"],
      ["Para escuchar", "«María Varilla»"],
    ],
    sections: [
      {
        heading: "Porro palitiao y porro tapao",
        blocks: [
          {
            type: "p",
            text: "Son las dos variantes más conocidas del porro de banda. Según la cartilla «Pitos y tambores» del Ministerio de Cultura, el porro palitiao, como el porro de gaitas, usa la misma clave de la cumbia: un acento en la séptima de ocho subdivisiones. El porro tapao, en cambio, acentúa las subdivisiones 1 y 7 del primer compás y la 5 del segundo.",
          },
        ],
      },
      {
        heading: "El pulso de la banda",
        blocks: [
          {
            type: "p",
            text: "En la banda, los platillos suenan apagados en el tiempo y abiertos en el contratiempo. Con el metrónomo en 2/2 y subdivisión en negras, el clic fuerte es el platillo apagado y el suave, el abierto: un buen ejercicio para bombo, redoblante y platillos. Si te llama tocar en una banda, lee cómo [empezar en las bandas de viento](/blog/bandas-de-viento-en-colombia-como-empezar).",
          },
        ],
      },
    ],
    practice: [
      "Cuenta en dos, «1 y 2 y», y marca los pulsos con el pie.",
      "Con subdivisión en negras, alterna un golpe apagado en el tiempo y uno abierto en el contratiempo, como los platillos.",
      "Pasa la subdivisión a corcheas y cuenta las ocho de cada dos compases: acentúa la séptima para sentir la clave.",
      "Toca la melodía de tu instrumento de viento sobre el clic, sin acelerar en los finales de frase.",
    ],
    faqs: [
      {
        question: "¿En qué compás está el porro?",
        answer: "En compás partido (2/2): dos pulsos de blanca por compás.",
      },
      {
        question: "¿Qué diferencia hay entre porro y cumbia?",
        answer:
          "Los dos son binarios y algunas variantes del porro comparten la clave de la cumbia, pero el porro está ligado a las bandas de viento, y la cumbia tradicional, a la caña de millo o las gaitas y los tambores. Practica la cumbia con el [metrónomo para cumbia](/herramientas/metronomo/cumbia).",
      },
      {
        question: "¿A qué tempo se toca el porro?",
        answer:
          "Varía según la obra y la banda. En las grabaciones de referencia de la cartilla «Pitos y tambores», entre 80 y 93 blancas por minuto.",
      },
    ],
    relatedPostSlugs: [
      "bandas-de-viento-en-colombia-como-empezar",
      "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
      "instrumentos-de-la-musica-del-caribe-colombiano",
    ],
  },
  {
    slug: "vallenato",
    name: "paseo vallenato",
    gender: "m",
    headline: "Metrónomo para vallenato (paseo)",
    seoTitle: "Metrónomo para vallenato: paseo en 2/2",
    metaDescription:
      "Metrónomo gratis para practicar el paseo vallenato en compás binario (2/2), con rangos de tempo de referencia y ejercicios para caja y guacharaca.",
    summary: "Caribe · paseo en 2/2",
    intro:
      "El paseo es el aire más frecuente del vallenato y es binario: suele escribirse en 2/2, aunque también se encuentra en 2/4 o 4/4. No tiene un tempo fijo, así que el metrónomo arranca en un tempo moderado para que lo ajustes a cada canción.",
    setups: [{ label: "Paseo en 2/2", meter: "2/2", bpm: 90, subdivision: 2, accents: [2, 0] }],
    setupNote:
      "2/2 a 90 blancas, dentro del rango «normal» (85 a 95) de una muestra de paseos analizada en una tesis de la Universidad de Antioquia. Ajusta el tempo a la grabación con Tap tempo.",
    facts: [
      ["Región", "Caribe colombiano"],
      ["Aires del vallenato", "Son, paseo, merengue y puya"],
      ["Compás del paseo", "Binario: normalmente 2/2; también 2/4 o 4/4, según el autor"],
      [
        "Tempo",
        "Sin tempo preestablecido: desde unos 70 hasta 126 o más, según el Plan Especial de Salvaguardia de la música vallenata",
      ],
      ["Instrumentos", "Acordeón, caja vallenata y guacharaca"],
      ["Para escuchar", "«El jardín de Fundación», de Luis Enrique Martínez"],
    ],
    sections: [
      {
        heading: "Los cuatro aires del vallenato",
        blocks: [
          {
            type: "table",
            caption: "Aires del vallenato y su compás",
            head: ["Aire", "Carácter", "Compás"],
            rows: [
              ["Son", "Pausado; el bajo del acordeón repite una figura en los tiempos fuertes", "Binario"],
              ["Paseo", "Moderado; el más frecuente en canciones", "Binario (2/2, 2/4 o 4/4)"],
              ["Merengue", "Ágil y saltarín", "Ternario, suele escribirse en 6/8"],
              ["Puya", "Muy rápido y virtuoso", "Binario"],
            ],
          },
          {
            type: "p",
            text: "Esta página está pensada para el paseo. Para el merengue vallenato, elige 6/8 en el [metrónomo](/herramientas/metronomo).",
          },
        ],
      },
      {
        heading: "Cómo usar el metrónomo con el vallenato",
        blocks: [
          {
            type: "p",
            text: "Como cada paseo tiene su propio tempo, el primer paso es encontrarlo: pon la canción y toca **Tap tempo** al ritmo de la caja. Una tesis de la Universidad de Antioquia que tomó la blanca como unidad clasificó los paseos de su muestra en lentos (menos de 80), normales (85 a 95) y rápidos (115 o más). La guacharaca subdivide el contratiempo: con la subdivisión en corcheas puedes practicar su raspado sobre el clic.",
          },
        ],
      },
    ],
    practice: [
      "Pon la canción que quieres tocar y busca su tempo con Tap tempo.",
      "Marca los dos pulsos del compás con el pie y canta la melodía encima.",
      "Pasa la subdivisión a corcheas y practica el raspado de la guacharaca sobre el clic.",
      "Si el acompañamiento se acelera en los coros, baja 8 BPM y vuelve a subir de a 4.",
    ],
    faqs: [
      {
        question: "¿En qué compás está el paseo vallenato?",
        answer: "Es binario. Normalmente se escribe en 2/2, aunque algunos autores usan 2/4 o 4/4.",
      },
      {
        question: "¿Qué tempo tiene el vallenato?",
        answer:
          "No tiene un tempo preestablecido: va desde unos 70 hasta 126 o más. Cada canción tiene el suyo; búscalo con Tap tempo.",
      },
      {
        question: "¿Sirve para el merengue vallenato?",
        answer: "El merengue es ternario y suele escribirse en 6/8. Usa el [metrónomo](/herramientas/metronomo) en 6/8 con subdivisión en corcheas.",
      },
    ],
    relatedPostSlugs: [
      "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
      "instrumentos-de-la-musica-del-caribe-colombiano",
      "instrumentos-tipicos-de-colombia",
    ],
  },
  {
    slug: "joropo",
    name: "joropo",
    gender: "m",
    headline: "Metrónomo para joropo",
    seoTitle: "Metrónomo para joropo en 3/4 y 6/8",
    metaDescription:
      "Metrónomo gratis para practicar joropo llanero en 3/4 y 6/8 con las mismas corcheas, tempos de referencia del pasaje y el golpe, y ejercicios de hemiola.",
    summary: "Llanos · 3/4 y 6/8",
    intro:
      "El joropo vive en el cruce entre 3/4 y 6/8: la hemiola, el cambio constante entre tres grupos de dos y dos grupos de tres, es su regla. El metrónomo carga los dos compases con la misma velocidad de corcheas para que practiques ese vaivén.",
    setups: [
      { label: "En 3/4", meter: "3/4", bpm: 132, subdivision: 2, accents: [2, 0, 0] },
      { label: "En 6/8", meter: "6/8", bpm: 88, subdivision: 3, accents: [2, 0] },
    ],
    setupNote:
      "3/4 a 132 negras y 6/8 a 88 negras con puntillo suenan con las mismas corcheas. Es un tempo de práctica: el joropo suele ir más rápido.",
    facts: [
      ["Región", "Llanos de Colombia y Venezuela"],
      ["Compás", "Hemiola entre 3/4 y 6/8; también se escribe en 3/2"],
      [
        "Tempo de referencia",
        "Según el musicólogo venezolano Juan Francisco Sans, cerca de negra = 152 en el pasaje y entre 176 y 192 en el golpe",
      ],
      ["Instrumentos", "Arpa llanera, cuatro y maracas (capachos); en algunos conjuntos, bandola llanera"],
      ["Para escuchar", "«Ay, mi llanura», de Arnulfo Briceño (un pasaje, himno del Meta), y «Pajarillo» (un golpe)"],
    ],
    sections: [
      {
        heading: "Pasaje y golpe, por derecho y por corrío",
        blocks: [
          {
            type: "p",
            text: "El pasaje suele ser más pausado y el golpe, más rápido, y por eso sus tempos de referencia son tan distintos. Además, el joropo se organiza en dos grandes sistemas: por derecho (o atravesao) y por corrío. Según material pedagógico del Plan Nacional de Música para la Convivencia, el primero sigue un patrón anacrúsico parecido al del bambuco, con el bajo en los tiempos 2 y 3, y el segundo arranca con el apoyo en el primer tiempo.",
          },
        ],
      },
      {
        heading: "El cuatro, motor del joropo",
        blocks: [
          {
            type: "p",
            text: "En el conjunto llanero, el cuatro sostiene la armonía y el ritmo con un rasgueo seco y veloz, mientras el arpa lleva la melodía y los bajos y las maracas definen el aire. Antes de practicar con el metrónomo, afina con el [afinador de cuatro llanero](/herramientas/afinador/cuatro-llanero).",
          },
        ],
      },
    ],
    practice: [
      "Empieza en 3/4 con corcheas y cuenta «1-2-3-4-5-6», apoyando 1, 3 y 5.",
      "Cambia a 6/8 sin parar: las corcheas siguen iguales y los apoyos pasan a 1 y 4.",
      "Alterna cada dos compases; esa alternancia es la hemiola que sostiene el joropo.",
      "Sube de a 4 BPM hacia el tempo del pasaje (cerca de 152 negras) y, más adelante, del golpe.",
    ],
    faqs: [
      {
        question: "¿El joropo es en 3/4 o en 6/8?",
        answer:
          "En los dos: la hemiola entre 3/4 y 6/8 es la regla del joropo, y también hay partituras en 3/2. Practica los dos compases con las mismas corcheas hasta sentirlos a la vez.",
      },
      {
        question: "¿Qué tan rápido es el joropo?",
        answer:
          "Según Juan Francisco Sans, cerca de 152 negras por minuto en el pasaje y entre 176 y 192 en el golpe. Para practicar, empieza más lento y sube de a poco.",
      },
      {
        question: "¿Qué instrumentos se tocan en el joropo?",
        answer:
          "El arpa llanera, el cuatro y las maracas, y en algunos conjuntos la bandola llanera. Te contamos más en [instrumentos típicos de Colombia](/blog/instrumentos-tipicos-de-colombia).",
      },
    ],
    relatedPostSlugs: [
      "instrumentos-tipicos-de-colombia",
      "compases-musicales-explicados-2-4-3-4-4-4-y-6-8",
      "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
    ],
  },
  {
    slug: "currulao",
    name: "currulao",
    gender: "m",
    headline: "Metrónomo para currulao",
    seoTitle: "Metrónomo para currulao en 6/8",
    metaDescription:
      "Metrónomo gratis para practicar currulao en 6/8, con tempos de referencia del Pacífico sur y ejercicios para el golpe abierto del bombo.",
    summary: "Pacífico sur · 6/8",
    intro:
      "El currulao, la música de marimba del Pacífico sur colombiano, se escribe en 6/8. El metrónomo marca las negras con puntillo y las corcheas a un tempo de referencia tomado de la cartilla del Ministerio de Cultura sobre esta música.",
    setups: [{ label: "En 6/8", meter: "6/8", bpm: 84, subdivision: 3, accents: [2, 0] }],
    setupNote:
      "6/8 a 84 negras con puntillo. Según la cartilla «¡Qué te pasa vo!», el currulao arranca cerca de ese tempo y puede acelerar hasta 105.",
    facts: [
      ["Región", "Pacífico sur colombiano, de Buenaventura a Tumaco"],
      ["Compás", "6/8"],
      ["Tempo de referencia", "Negra con puntillo entre 84, al comenzar, y 105 (cartilla «¡Qué te pasa vo!», Ministerio de Cultura)"],
      ["Instrumentos", "Marimba de chonta, bombos, cununos, guasás y voces"],
      ["Para escuchar", "«Mi Buenaventura», de Petronio Álvarez"],
    ],
    sections: [
      {
        heading: "Qué hace cada instrumento",
        blocks: [
          {
            type: "p",
            text: "Entre los músicos del Pacífico, «currulao» nombra la música de marimba, bombos, cununos y guasás que está en 6/8. El bombo arrullador sostiene una base pareja; el golpeador, en todos sus patrones, da un golpe fuerte y abierto en la quinta corchea del compás. Los cununos se reparten entre uno que hace la base (apagador) y otro que adorna (repicador), y los guasás completan el conjunto.",
          },
        ],
      },
      {
        heading: "Rápido o cadencioso, según el lugar",
        blocks: [
          {
            type: "p",
            text: "La misma cartilla cuenta que en Tumaco, Salahonda y Francisco Pizarro el currulao suele ir más rápido, mientras que en Guapi y Timbiquí es más cadencioso y lento. Por eso conviene escuchar varias grabaciones y ajustar el tempo con Tap tempo.",
          },
        ],
      },
    ],
    practice: [
      "Cuenta las seis corcheas, «1-2-3-4-5-6», y marca con el pie el 1 y el 4.",
      "Da una palma fuerte en el 5: es el golpe abierto del bombo golpeador.",
      "Con un shaker o los dedos sobre la mesa, toca todas las corcheas sin acelerar.",
      "Sube de a 3 BPM hasta llegar a 105, el tope que menciona la cartilla.",
    ],
    faqs: [
      {
        question: "¿En qué compás está el currulao?",
        answer: "En 6/8: dos pulsos de negra con puntillo por compás, cada uno con tres corcheas.",
      },
      {
        question: "¿A qué tempo se toca el currulao?",
        answer:
          "Según la cartilla «¡Qué te pasa vo!» del Ministerio de Cultura, entre 84 y 105 negras con puntillo por minuto, más rápido en Tumaco y más cadencioso en Guapi y Timbiquí.",
      },
      {
        question: "¿Qué instrumentos lleva el currulao?",
        answer: "Marimba de chonta, bombos (arrullador y golpeador), cununos (apagador y repicador), guasás y voces.",
      },
    ],
    courseId: "percusion",
    relatedPostSlugs: [
      "instrumentos-tipicos-de-colombia",
      "compases-musicales-explicados-2-4-3-4-4-4-y-6-8",
      "bateria-o-percusion-latina",
    ],
  },
];
