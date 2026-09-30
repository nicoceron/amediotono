import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-preparar-una-clase-de-musica",
  title: "Cómo preparar una clase de música: estructura paso a paso",
  seoTitle: "Cómo preparar una clase de música paso a paso",
  description:
    "Cómo preparar una clase de música: calentamiento, objetivo, práctica, repertorio y cierre, cómo adaptarla a cada edad y cómo dejar tareas claras.",
  excerpt:
    "Una estructura de clase que sirve para cualquier instrumento, con tiempos para 45 y 60 minutos, ejemplos de objetivos y tareas que sí se cumplen.",
  category: "para-profes",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo preparar una clase de música",
    "plan de clase de música",
    "estructura de una clase de música",
    "planeación de clase de música para niños",
    "cómo dar una clase de instrumento",
    "tareas para estudiantes de música",
  ],
  intro: [
    "Una clase de música bien preparada tiene cinco momentos: calentamiento, revisión de la tarea, un objetivo nuevo, repertorio y cierre con tarea clara. Todo gira alrededor de un solo objetivo que puedas ver o escuchar al final; si no sabes qué debería sonar distinto cuando termine la clase, todavía no está preparada.",
    "Aquí tienes la estructura con tiempos para clases de 45 y 60 minutos, cómo formular objetivos, un ejemplo completo, cómo adaptar la clase a cada edad y cómo dejar tareas que el estudiante sí va a cumplir.",
  ],
  keyTakeaways: [
    "Estructura base: calentamiento, revisión, objetivo nuevo, repertorio y cierre con tarea.",
    "Un objetivo por clase, formulado de forma observable: qué va a poder tocar el estudiante y a qué tempo.",
    "Con niños pequeños, actividades de tres a cinco minutos y mucho movimiento; con adultos, más contexto y explicación del porqué.",
    "La tarea debe ser corta, concreta y escrita: qué practicar, cómo, a qué tempo y cuántas veces.",
    "Ten siempre un plan B: una versión más fácil del objetivo y una actividad de repuesto.",
  ],
  sections: [
    {
      id: "estructura-de-la-clase",
      heading: "La estructura de una clase, momento a momento",
      blocks: [
        {
          type: "table",
          caption: "Distribución orientativa del tiempo",
          head: ["Momento", "Clase de 45 min", "Clase de 60 min", "Para qué sirve"],
          rows: [
            ["1. Calentamiento", "5 min", "7 min", "Preparar cuerpo, oído e instrumento para el objetivo del día."],
            ["2. Revisión de la tarea", "5 min", "8 min", "Ver qué funcionó en casa y ajustar."],
            ["3. Objetivo nuevo", "12 min", "15 min", "Presentar y practicar la habilidad del día."],
            ["4. Repertorio", "17 min", "22 min", "Aplicar lo nuevo en música real."],
            ["5. Cierre y tarea", "6 min", "8 min", "Tocar algo completo, resumir y dejar la tarea clara."],
          ],
        },
        { type: "h3", text: "Calentamiento" },
        {
          type: "p",
          text: "No es relleno: prepara lo que viene. Si el objetivo es un rasgueo de pasillo, calienta con palmas en tres tiempos; si es una escala rápida, con notas largas y dedos sueltos; si es canto, con respiración y vocalizaciones suaves.",
        },
        { type: "h3", text: "Revisión de la tarea" },
        {
          type: "p",
          text: "Pide que toque lo que practicó antes de corregir nada. Escucha completo, reconoce lo que mejoró y elige una sola cosa para ajustar.",
        },
        { type: "h3", text: "Objetivo nuevo" },
        {
          type: "p",
          text: "Presenta la habilidad del día con una demostración corta, divídela en pasos y practícala primero fuera de la pieza: un cambio de acorde aislado, un compás difícil, un ritmo con palmas.",
        },
        { type: "h3", text: "Repertorio y cierre" },
        {
          type: "p",
          text: "Aplica lo nuevo en una canción u obra; aquí el estudiante toca mucho y tú hablas poco. Termina con algo que salga bien y completo, para que se vaya con sensación de logro, resume en una frase lo que aprendió y deja la tarea.",
        },
      ],
    },
    {
      id: "objetivo-observable",
      heading: "Cómo escribir un objetivo que se pueda cumplir",
      blocks: [
        {
          type: "p",
          text: "Un buen objetivo describe lo que el estudiante va a poder hacer al final de la clase, no lo que tú vas a explicar. Compara:",
        },
        {
          type: "table",
          head: ["Objetivo vago", "Objetivo observable"],
          rows: [
            ["Mejorar el ritmo.", "Tocar los compases 1 a 8 con metrónomo a 70, sin detenerse."],
            ["Aprender acordes.", "Cambiar de Sol a Re en guitarra en cuatro tiempos, cuatro veces seguidas."],
            ["Trabajar la lectura.", "Leer a primera vista cuatro compases en clave de sol con negras y corcheas."],
            ["Practicar la afinación.", "Cantar la escala de Do mayor, subiendo y bajando, afinada con el piano."],
            ["Ver dinámicas.", "Tocar la primera frase fuerte y la respuesta suave, con una diferencia que se note."],
          ],
        },
        {
          type: "p",
          text: "Si al final no se cumplió, no es un fracaso: es información para la próxima planeación. Quizá el paso era muy grande o el tiempo muy corto. Para seguir el avance en tempo, el [metrónomo en línea](/herramientas/metronomo) te deja anotar un número concreto cada semana.",
        },
      ],
    },
    {
      id: "ejemplo-de-plan-de-clase",
      heading: "Ejemplo: clase de piano de 45 minutos para un niño de 8 años",
      blocks: [
        {
          type: "p",
          text: "Estudiante en su tercer mes de piano. Objetivo: tocar con las dos manos las dos primeras frases de Oda a la alegría, con la mano izquierda en una nota por compás.",
        },
        {
          type: "ol",
          items: [
            "**Calentamiento (5 min):** palmear el ritmo de la pieza diciendo el nombre de las notas; luego, los cinco dedos “caminando” de Do a Sol con cada mano.",
            "**Revisión (5 min):** toca la mano derecha que practicó en casa; se celebra lo que salió y se ajusta una sola cosa, por ejemplo la muñeca que se hunde.",
            "**Objetivo nuevo (12 min):** la mano izquierda sola, una nota por compás; después, manos juntas en el primer compás, muy lento.",
            "**Repertorio (17 min):** manos juntas frase por frase; entre intentos, un juego en el que el profe se equivoca a propósito y el niño descubre el error.",
            "**Cierre (6 min):** toca completa una pieza que ya domina, se anota la tarea con su tempo y se le cuenta a la familia lo que logró.",
          ],
        },
      ],
    },
    {
      id: "adaptar-la-clase-por-edad",
      heading: "Cómo adaptar la clase según la edad",
      blocks: [
        {
          type: "table",
          head: ["Edad", "Duración de cada actividad", "Qué funciona", "Qué evitar"],
          rows: [
            ["3 a 5 años", "3 a 5 minutos", "Movimiento, canciones, juegos de eco, percusión menor", "Explicaciones largas y quietud prolongada"],
            ["6 a 8 años", "5 a 8 minutos", "Retos cortos, marcas de logro, canciones conocidas", "Corregir todo a la vez"],
            ["9 a 12 años", "8 a 12 minutos", "Metas visibles, repertorio que les guste, primeras presentaciones", "Repertorio infantil con el que ya no se identifican"],
            ["Adolescentes", "10 a 15 minutos", "Su música, autonomía para elegir, grabarse", "Tratarlos como niños o ignorar sus gustos"],
            ["Adultos", "Bloques más largos", "Explicar el porqué, conectar con su música, metas realistas", "Asumir que entendieron sin preguntar"],
            ["Adultos mayores", "Ritmo pausado, con descansos", "Repertorio significativo, repetición, paciencia con la motricidad", "La prisa y el exceso de información"],
          ],
        },
        {
          type: "p",
          text: "Con los más pequeños, la clase se parece más a un juego guiado que a una lección de instrumento; si trabajas con esa edad, repasa los principios de la [iniciación musical](/blog/que-es-la-iniciacion-musical).",
        },
      ],
    },
    {
      id: "tareas-claras",
      heading: "Tareas claras: qué dejar para la semana",
      blocks: [
        {
          type: "p",
          text: "Lo que el estudiante haga en casa depende en buena parte de lo clara que sea la tarea. Una buena tarea:",
        },
        {
          type: "ul",
          items: [
            "**Es corta:** dos o tres puntos, no diez.",
            "**Dice qué, cómo y cuánto:** “compases 5 a 8, manos separadas, a 60, tres veces seguidas sin error”.",
            "**Queda por escrito,** en el cuaderno del estudiante o en un mensaje a la familia.",
            "**Incluye algo que disfrute,** como repasar una pieza que ya le sale o sacar una canción de oído.",
            "**Tiene un modelo:** un audio o video corto tuyo tocando el fragmento a la velocidad correcta.",
          ],
        },
        {
          type: "p",
          text: "Si quieres compartir con estudiantes y familias una guía sobre cómo organizar la práctica diaria, puedes enviarles [cómo practicar música en casa](/blog/como-practicar-musica-en-casa).",
        },
      ],
    },
    {
      id: "plan-b-en-vivo",
      heading: "Plan B: cómo ajustar la clase en vivo",
      blocks: [
        {
          type: "table",
          head: ["Situación", "Ajuste"],
          rows: [
            ["No practicó en casa", "Convierte la revisión en práctica guiada: muéstrale cómo se estudia ese fragmento, paso a paso."],
            ["El objetivo resultó muy difícil", "Baja un escalón: más lento, un fragmento más corto, manos separadas o solo el ritmo."],
            ["Lo logró en diez minutos", "Ten listo el siguiente paso o una variación: otra tonalidad, otro tempo, otra dinámica."],
            ["Llega cansado o distraído", "Empieza con algo activo o con una pieza que le guste, y deja la técnica para después."],
            ["Se frustra", "Detén el ejercicio, toca algo que le salga bien y vuelve al problema desde otro ángulo."],
          ],
        },
        {
          type: "p",
          text: "Una actividad de repuesto, como un eco rítmico, una improvisación sobre dos notas o sacar de oído una frase, te salva cualquier clase.",
        },
      ],
    },
    {
      id: "despues-de-la-clase",
      heading: "Después de la clase: tres minutos que ahorran horas",
      blocks: [
        {
          type: "p",
          text: "Antes de pasar al siguiente estudiante, anota qué se trabajó y si se cumplió el objetivo, la tarea exacta que dejaste, una observación (algo que funcionó, una duda o una señal de alerta) y el objetivo tentativo de la próxima clase. Con esas notas, la siguiente planeación toma pocos minutos y el estudiante siente que hay un hilo entre una clase y otra.",
        },
        {
          type: "p",
          text: "En A medio tono evaluamos a cada profe en música, pedagogía y calidad humana, y una clase bien preparada es donde mejor se ven las tres. Si enseñas y quieres unirte, conoce la convocatoria en [Trabaja con nosotros](/trabaja-con-nosotros). Para el lado práctico del oficio, como la primera clase o los acuerdos con las familias, lee [cómo dar clases de música particulares](/blog/como-dar-clases-de-musica-particulares).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo se necesita para preparar una clase de música?",
      answer:
        "Con un buen registro de la clase anterior, entre cinco y quince minutos suelen bastar para una clase individual. La primera clase con un estudiante nuevo y las clases grupales piden más preparación.",
    },
    {
      question: "¿Hay que escribir un plan para cada clase?",
      answer:
        "No hace falta un documento formal. Unas líneas con el objetivo, las actividades y la tarea prevista son suficientes; lo importante es que exista antes de empezar y que lo revises al terminar.",
    },
    {
      question: "¿Cómo preparo una clase de música grupal?",
      answer:
        "Con la misma estructura, pero con actividades en las que todos participen a la vez, roles que roten y un plan para los distintos niveles: una versión más fácil y otra más retadora de cada ejercicio.",
    },
    {
      question: "¿Qué hago si el estudiante solo quiere tocar lo que le gusta?",
      answer:
        "Úsalo a tu favor: saca de su canción favorita el objetivo técnico del día. Casi cualquier canción tiene un ritmo, un cambio de acordes o un pasaje que sirve para enseñar lo que necesita.",
    },
  ],
  relatedCourseIds: ["iniciacion-musical", "piano"],
  relatedPostSlugs: [
    "como-dar-clases-de-musica-particulares",
    "como-ser-profesor-de-musica-en-colombia",
    "como-practicar-musica-en-casa",
  ],
  cta: "clases",
};
