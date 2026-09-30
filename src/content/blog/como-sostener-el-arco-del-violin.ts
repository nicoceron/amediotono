import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-sostener-el-arco-del-violin",
  title: "¿Cómo sostener el arco del violín? Agarre paso a paso",
  description:
    "Cómo sostener el arco del violín paso a paso: posición de cada dedo, uso del peso del brazo, errores comunes y ejercicios con lápiz para practicar en casa.",
  excerpt:
    "Pulgar doblado, meñique curvo y mano suelta: así se arma el agarre del arco, dedo por dedo, con ejercicios con lápiz para fijarlo sin tensión.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo sostener el arco del violín",
    "cómo agarrar el arco del violín",
    "posición de la mano derecha en el violín",
    "agarre del arco franco-belga",
    "ejercicios para el arco del violín",
  ],
  intro: [
    "Para sostener el arco del violín, apoya la punta del pulgar doblado sobre la vara, justo en el rincón donde termina el talón; deja caer el dedo medio y el anular por encima del talón, frente al pulgar; apoya el índice sobre la vara más o menos a la altura de su falange media, y pon el meñique curvo, de punta, encima de la vara. La mano queda redonda y suelta, como si sostuviera algo frágil.",
    "Es uno de los aprendizajes más lentos del violín: al principio se siente extraño y hay que revisarlo en cada práctica. Esta guía describe el agarre franco-belga, uno de los más difundidos; tu profe puede ajustar detalles según el tamaño y la forma de tu mano.",
  ],
  keyTakeaways: [
    "El pulgar va doblado hacia afuera, nunca recto ni bloqueado.",
    "El meñique se apoya curvo sobre la vara y equilibra el peso del arco cerca del talón.",
    "El sonido sale del peso del brazo transmitido por el índice, no de apretar la vara.",
    "Practicar el agarre con un lápiz unos minutos al día acelera el aprendizaje sin riesgo para el arco.",
    "En el violonchelo el principio es el mismo, pero la mano cuelga más y el meñique no se para sobre la vara.",
  ],
  sections: [
    {
      id: "partes-del-arco",
      heading: "Las partes del arco que necesitas conocer",
      blocks: [
        {
          type: "table",
          caption: "Partes del arco y por qué importan para el agarre",
          head: ["Parte", "Dónde está", "Por qué importa"],
          rows: [
            ["Vara", "La madera larga y delgada", "Es donde apoyan pulgar, índice y meñique."],
            ["Crin o cerdas", "Las cerdas tensadas bajo la vara", "Es lo que toca la cuerda; no se toca con los dedos."],
            ["Talón o nuez", "La pieza donde se sujeta la crin, cerca de la mano", "Sobre ella caen el dedo medio y el anular."],
            ["Tornillo", "Al final del talón", "Tensa y afloja la crin."],
            ["Entorchado y cuero", "La zona forrada junto al talón", "Protege la vara donde apoyan el índice y el pulgar."],
            ["Punta", "El extremo opuesto al talón", "Allí el arco pesa menos sobre la cuerda."],
          ],
        },
        {
          type: "p",
          text: "Antes de tocar, gira el tornillo hasta que entre la crin y la vara, en la mitad del arco, quede más o menos el espacio de un lápiz. Al terminar, aflójala. Te contamos más sobre esto en la guía para [cuidar el violín](/blog/como-limpiar-y-cuidar-un-violin).",
        },
      ],
    },
    {
      id: "agarre-paso-a-paso",
      heading: "El agarre del arco, paso a paso",
      blocks: [
        {
          type: "ol",
          items: [
            "Sostén el arco con la mano izquierda por la mitad de la vara, con la punta hacia tu izquierda y la crin hacia abajo.",
            "Suelta la mano derecha y forma un “conejito”: el pulgar toca las yemas del dedo medio y del anular, mientras el índice y el meñique quedan arriba, como orejas.",
            "Lleva ese conejito al arco. La punta del pulgar, doblada hacia afuera, se apoya en la vara, en el rincón entre el talón y el entorchado.",
            "El dedo medio y el anular caen por encima del talón, frente al pulgar. El anular queda más o menos a la altura del ojo del talón, el punto de nácar.",
            "El índice rodea la vara y la toca cerca de su falange media, con un pequeño espacio respecto al dedo medio.",
            "El meñique se dobla y apoya la punta encima de la vara, más o menos sobre el final del talón. Es un meñique curvo, no estirado.",
            "Revisa: pulgar doblado, nudillos redondos, muñeca suelta y dedos ligeramente inclinados hacia la punta del arco.",
          ],
        },
        {
          type: "p",
          text: "Al principio, sostén el arco así unos segundos, suéltalo y vuelve a armarlo. Repetir el montaje es tan importante como tocar: el objetivo es que la mano lo encuentre sola.",
        },
      ],
    },
    {
      id: "peso-del-brazo",
      heading: "El peso: de dónde sale el sonido",
      blocks: [
        {
          type: "p",
          text: "Un buen sonido no se consigue apretando. Se consigue dejando que el peso natural del brazo llegue a la cuerda a través del índice, con una leve rotación del antebrazo hacia ese dedo. El pulgar y el dedo medio sostienen, pero no presionan.",
        },
        {
          type: "p",
          text: "Como el arco pesa más cerca del talón y menos en la punta, la mano va compensando a lo largo del recorrido:",
        },
        {
          type: "table",
          caption: "Cómo cambia el trabajo de la mano a lo largo del arco",
          head: ["Zona del arco", "Qué pasa", "Qué hace la mano"],
          rows: [
            ["Talón", "Todo el peso del arco cae sobre la cuerda", "El meñique equilibra y aligera; el índice casi no carga."],
            ["Mitad", "El peso está más repartido", "Índice y meñique en equilibrio, la mano neutra."],
            ["Punta", "El arco pesa poco sobre la cuerda", "El índice aporta más peso; el meñique se relaja y puede estirarse un poco."],
          ],
        },
        {
          type: "p",
          text: "Un ejercicio útil: toca notas largas en cuerdas al aire, de talón a punta, buscando que el sonido sea igual de lleno en todo el recorrido. Afina antes con el [afinador de violín](/herramientas/afinador/violin) para que tu oído se concentre solo en el sonido.",
        },
      ],
    },
    {
      id: "ejercicios-con-lapiz",
      heading: "Ejercicios con lápiz para practicar el agarre",
      blocks: [
        {
          type: "p",
          text: "El lápiz es liviano, no se daña y está siempre a mano, así que permite repetir el agarre muchas veces al día sin cansar la mano ni arriesgar el arco. Es especialmente útil con niños.",
        },
        {
          type: "table",
          caption: "Rutina de 5 minutos con lápiz y luego con arco",
          head: ["Ejercicio", "Cómo se hace", "Qué trabaja"],
          rows: [
            ["Montaje", "Arma el agarre sobre el lápiz, sostenlo 20 segundos, suéltalo y repite cinco veces.", "Memoria de la forma"],
            ["Limpiaparabrisas", "Con el lápiz vertical, muévelo de lado a lado solo con los dedos, sin mover la muñeca.", "Flexibilidad de los dedos"],
            ["Araña", "Sube por el lápiz hasta la punta “caminando” con los dedos y vuelve a bajar sin perder la forma.", "Independencia y control"],
            ["Flexiones del meñique", "Con el lápiz horizontal, dobla y estira suavemente el meñique para subir y bajar la punta.", "Fuerza y curvatura del meñique"],
            ["Cohete", "Ya con el arco, sostenlo vertical frente a ti con el agarre armado y súbelo y bájalo despacio.", "Equilibrio con el peso real"],
          ],
        },
        {
          type: "p",
          text: "Haz los ejercicios frente a un espejo y detente si notas tensión en el pulgar o en la muñeca. Pocos minutos repartidos en el día rinden más que una sesión larga.",
        },
      ],
    },
    {
      id: "errores-comunes-arco",
      heading: "Errores comunes al sostener el arco",
      blocks: [
        {
          type: "table",
          caption: "Cómo reconocerlos y corregirlos",
          head: ["Error", "Cómo se nota", "Corrección"],
          rows: [
            ["Pulgar recto o bloqueado", "Sonido duro, mano rígida", "Dobla el pulgar hacia afuera y revísalo en cada nota larga"],
            ["Meñique estirado", "El arco se tambalea cerca del talón", "Ejercicio de flexiones del meñique"],
            ["Apretar la vara", "Nudillos blancos, cansancio o dolor", "Afloja hasta que el arco casi se resbale y encuentra el punto justo"],
            ["Índice muy lejos o muy cerca del dedo medio", "Falta control del peso", "Deja un pequeño espacio y apoya cerca de la falange media"],
            ["Muñeca rígida", "Cambios de arco bruscos", "Ejercicio de limpiaparabrisas y notas largas lentas"],
            ["Tocar la crin con los dedos", "La crin pierde agarre en esa zona", "Sostén siempre el arco por la vara o el talón"],
          ],
        },
        {
          type: "callout",
          title: "Revisa el pulgar primero",
          text: "Si algo se siente raro en la mano derecha, casi siempre el pulgar se estiró o se hundió bajo el talón. Recolócalo doblado y el resto de la mano suele acomodarse.",
        },
      ],
    },
    {
      id: "viola-y-violonchelo",
      heading: "¿Y en la viola y el violonchelo?",
      blocks: [
        {
          type: "p",
          text: "En la viola el agarre es prácticamente el mismo que en el violín; el arco es un poco más pesado, así que se necesita todavía menos presión. En el violonchelo, en cambio, el arco se toca con el brazo más horizontal y la mano cambia de forma:",
        },
        {
          type: "table",
          caption: "Diferencias principales del agarre",
          head: ["Aspecto", "Violín y viola", "Violonchelo"],
          rows: [
            ["Posición de la mano", "Más de lado, inclinada hacia el índice", "Más colgada y abierta sobre la vara"],
            ["Meñique", "Curvo, de punta sobre la vara", "Descansa al costado del talón o de la vara"],
            ["Dedos", "Compactos e inclinados hacia la punta del arco", "Más separados, envolviendo la vara y el talón"],
            ["Peso", "Se dirige con rotación del antebrazo", "Cae con más facilidad por gravedad"],
          ],
        },
        {
          type: "p",
          text: "Si tocas [violín](/clases/violin) o [violonchelo](/clases/violoncello), tu profe revisará el agarre en cada clase durante los primeros meses; es normal y necesario. Si estás buscando quién te acompañe en ese proceso, puedes ver los perfiles en [profes](/profes).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto se demora en sentirse natural el agarre del arco?",
      answer:
        "Varía mucho de una persona a otra. Suele tomar semanas dejar de pensar en cada dedo y meses afinar el uso del peso. Por eso los profes lo revisan tan seguido al principio.",
    },
    {
      question: "¿Qué diferencia hay entre el agarre franco-belga y el ruso?",
      answer:
        "En el agarre ruso el índice se apoya más adentro de la vara y la mano está más inclinada hacia él, lo que da más peso con menos esfuerzo. El franco-belga es un punto intermedio muy usado en la enseñanza. Tu profe decidirá cuál te conviene.",
    },
    {
      question: "¿Por qué no se deben tocar las cerdas del arco?",
      answer:
        "La grasa natural de los dedos se queda en la crin e impide que la colofonia agarre bien. Con el tiempo, esa zona suena opaca o resbala sobre la cuerda.",
    },
    {
      question: "¿Sirven los accesorios que marcan dónde van los dedos?",
      answer:
        "Algunos profes los usan un tiempo con niños pequeños para guiar la posición. Son una ayuda temporal: la meta es que la mano aprenda la forma sin ellos.",
    },
  ],
  relatedCourseIds: ["violin", "violoncello"],
  relatedPostSlugs: [
    "como-afinar-el-violin",
    "como-limpiar-y-cuidar-un-violin",
    "violin-para-ninos-guia-para-padres",
  ],
  cta: "clases",
};
