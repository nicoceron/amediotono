import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "acordes-basicos-de-guitarra-para-principiantes",
  title: "Acordes básicos de guitarra para principiantes",
  description:
    "Los 8 acordes básicos de guitarra (Do, Re, Mi, Sol, La, Lam, Mim y Rem) con tabla de trastes y dedos, trucos para cambiar rápido y progresiones.",
  excerpt:
    "Con ocho acordes abiertos ya puedes acompañar muchísimas canciones. Aquí tienes cómo se pisa cada uno, en qué orden aprenderlos y cómo cambiar entre ellos sin pausas.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  updatedAt: "2026-10-01",
  keywords: [
    "acordes básicos de guitarra",
    "acordes de guitarra para principiantes",
    "cómo hacer el acorde de do en guitarra",
    "acordes mayores y menores guitarra",
    "progresiones de acordes fáciles guitarra",
    "cómo cambiar de acorde rápido en guitarra",
  ],
  intro: [
    "Con ocho acordes abiertos, **Do, Re, Mi, Sol, La, La menor, Mi menor y Re menor**, puedes acompañar una enorme cantidad de canciones. Empieza por Mi menor y La menor, que usan pocos dedos, y apréndelos de a dos, practicando el cambio entre ellos desde el primer día.",
    "Abajo tienes cada acorde descrito cuerda por cuerda, el orden en que conviene aprenderlos, los atajos para cambiar rápido y progresiones para empezar a tocar canciones. Antes de todo, asegúrate de que tu guitarra esté [bien afinada](/blog/como-afinar-la-guitarra): un acorde bien pisado en una guitarra desafinada igual suena mal.",
  ],
  keyTakeaways: [
    "Los ocho acordes abiertos esenciales son Do, Re, Mi, Sol, La, Lam, Mim y Rem.",
    "Empieza por Mim y Lam; después Mi, Do, Sol, Re, Rem y La.",
    "Entre un acorde mayor y su menor solo cambia una nota: la tercera.",
    "Busca dedos que se quedan quietos entre acordes y mueve los demás como un bloque.",
    "Practica los cambios con metrónomo lento antes de preocuparte por el rasgueo.",
  ],
  sections: [
    {
      id: "como-leer-la-tabla",
      heading: "Antes de empezar: cuerdas, trastes y dedos",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cuerdas:** se numeran de la más delgada (1ª, Mi agudo) a la más gruesa (6ª, Mi grave).",
            "**Dedos de la mano que pisa:** 1 índice, 2 medio, 3 anular, 4 meñique. El pulgar va detrás del mástil.",
            "**x** = esa cuerda no se toca. **0** = se toca al aire, sin pisar.",
            "**3 (d2)** = traste 3, pisado con el dedo 2.",
            "**Cifrado americano:** Do = C, Re = D, Mi = E, Fa = F, Sol = G, La = A, Si = B. La \"m\" significa menor: Am es La menor.",
          ],
        },
        {
          type: "p",
          text: "Pisa con la yema, con el dedo arqueado, justo detrás de la barrita de metal del traste, no encima ni en la mitad del espacio.",
        },
      ],
    },
    {
      id: "tabla-de-acordes",
      heading: "Los 8 acordes básicos, cuerda por cuerda",
      blocks: [
        {
          type: "chords",
          chords: ["mi-menor", "la-menor", "mi-mayor", "do-mayor", "sol-mayor", "re-mayor", "re-menor", "la-mayor"],
          caption: "Toca cualquier diagrama para ver el acorde en piano y ukelele, sus inversiones y cómo suena.",
        },
        {
          type: "table",
          caption: "Digitación de los acordes abiertos (traste y dedo por cuerda)",
          head: ["Acorde", "6ª Mi", "5ª La", "4ª Re", "3ª Sol", "2ª Si", "1ª Mi"],
          rows: [
            ["Mim (Em)", "0", "2 (d2)", "2 (d3)", "0", "0", "0"],
            ["Lam (Am)", "x", "0", "2 (d2)", "2 (d3)", "1 (d1)", "0"],
            ["Mi (E)", "0", "2 (d2)", "2 (d3)", "1 (d1)", "0", "0"],
            ["Do (C)", "x", "3 (d3)", "2 (d2)", "0", "1 (d1)", "0"],
            ["Sol (G)", "3 (d2)", "2 (d1)", "0", "0", "0", "3 (d3)"],
            ["Re (D)", "x", "x", "0", "2 (d1)", "3 (d3)", "2 (d2)"],
            ["Rem (Dm)", "x", "x", "0", "2 (d2)", "3 (d3)", "1 (d1)"],
            ["La (A)", "x", "0", "2 (d1)", "2 (d2)", "2 (d3)", "0"],
          ],
        },
        {
          type: "p",
          text: "Rasguea solo desde la cuerda que corresponde: Mim, Mi y Sol desde la 6ª; Lam, Do y La desde la 5ª; Re y Rem desde la 4ª. Tocar las cuerdas marcadas con x ensucia el acorde, porque meten una nota grave que no pertenece a él o que no conviene en el bajo.",
        },
        {
          type: "p",
          text: "Dos digitaciones alternativas que vale la pena conocer: el Sol también se pisa con los dedos 3, 2 y 4 (en la 6ª, la 5ª y la 1ª), lo que facilita pasar a Do; y en el La, si tus dedos son grandes y no caben en el traste 2, prueba con los dedos 2, 3 y 4.",
        },
      ],
    },
    {
      id: "mayores-y-menores",
      heading: "Mayor o menor: la nota que lo cambia todo",
      blocks: [
        {
          type: "p",
          text: "Un acorde básico tiene tres notas: la fundamental, que le da el nombre; la tercera y la quinta. Si la tercera está a cuatro semitonos de la fundamental, el acorde es mayor; si está a tres, es menor. En la guitarra, eso significa que muchas veces basta con mover un solo dedo.",
        },
        {
          type: "table",
          caption: "Notas de cada acorde y qué cambia entre mayor y menor",
          head: ["Acorde", "Notas", "De mayor a menor"],
          rows: [
            ["Mi / Mim", "Mi-Sol♯-Si / Mi-Sol-Si", "Levanta el dedo 1 de la 3ª cuerda"],
            ["La / Lam", "La-Do♯-Mi / La-Do-Mi", "La 2ª cuerda pasa del traste 2 al traste 1"],
            ["Re / Rem", "Re-Fa♯-La / Re-Fa-La", "La 1ª cuerda pasa del traste 2 al traste 1"],
            ["Do", "Do-Mi-Sol", "Do menor requiere cejilla; llega más adelante"],
            ["Sol", "Sol-Si-Re", "Sol menor requiere cejilla; llega más adelante"],
          ],
        },
        {
          type: "p",
          text: "Toca Mi y Mim seguidos: vas a oír cómo el mismo acorde pasa de sonar abierto y luminoso a más oscuro. Entrenar esa diferencia de oído te va a servir para sacar canciones.",
        },
      ],
    },
    {
      id: "orden-y-cambios",
      heading: "En qué orden aprenderlos y cómo cambiar rápido",
      blocks: [
        {
          type: "ol",
          items: [
            "**Mim:** solo dos dedos. Ideal para acostumbrar la mano.",
            "**Lam:** agrega un dedo y comparte forma con el siguiente.",
            "**Mi:** es exactamente la forma de Lam, desplazada una cuerda hacia las graves.",
            "**Do:** desde Lam, solo mueves el dedo 3.",
            "**Sol:** abre la mano hacia las cuerdas graves.",
            "**Re y Rem:** forma de triángulo en las tres cuerdas agudas.",
            "**La:** tres dedos apretados en el mismo traste; suele costar más de lo que parece.",
          ],
        },
        {
          type: "table",
          caption: "Atajos para cambiar de acorde",
          head: ["Cambio", "Qué se mantiene", "Qué se mueve"],
          rows: [
            ["Do ↔ Lam", "Dedos 1 y 2", "El dedo 3 pasa de la 5ª cuerda (traste 3) a la 3ª (traste 2)"],
            ["Mi ↔ Lam", "La forma completa", "Los tres dedos se desplazan juntos una cuerda hacia el piso"],
            ["Mim ↔ Lam", "La forma de los dedos 2 y 3", "Bajan una cuerda y se suma el dedo 1"],
            ["Re ↔ Rem", "Dedo 3 en la 2ª cuerda", "Los dedos 1 y 2 cambian de lugar"],
            ["Sol ↔ Do (Sol con 3-2-4)", "La forma de los dedos 3 y 2", "Bajan una cuerda juntos; sale el 4 y entra el 1"],
          ],
        },
        {
          type: "p",
          text: "Para practicar, pon el [metrónomo](/herramientas/metronomo) a 60 y rasguea cuatro veces hacia abajo en cada acorde antes de cambiar. Cuando el cambio llegue a tiempo, baja a dos rasgueos por acorde y luego a uno. Otra prueba útil: cronometra un minuto y cuenta cuántas veces cambias limpio entre dos acordes; anota el número y compáralo cada semana.",
        },
      ],
    },
    {
      id: "progresiones",
      heading: "Progresiones para empezar a tocar canciones",
      blocks: [
        {
          type: "table",
          caption: "Progresiones con los ocho acordes básicos",
          head: ["Progresión", "Tonalidad", "Dónde la oyes"],
          rows: [
            ["Sol – Re – Mim – Do", "Sol mayor", "Muchísimas canciones de pop y rock"],
            ["Do – Lam – Rem – Sol", "Do mayor", "Baladas y canciones clásicas de radio"],
            ["La – Re – Mi", "La mayor", "Rock and roll y blues básico"],
            ["Lam – Rem – Mi", "La menor", "Boleros y música latinoamericana en tono menor"],
            ["Re – Sol – La", "Re mayor", "Canciones populares y de fogata"],
          ],
        },
        {
          type: "p",
          text: "Empieza con un rasgueo de cuatro golpes hacia abajo por compás, uno en cada tiempo. Cuando los cambios salgan sin pausa, prueba el patrón \"abajo, abajo-arriba, arriba-abajo-arriba\", uno de los más usados en guitarra acompañante. Si quieres entender por qué estos acordes suenan bien juntos, el [círculo de quintas](/blog/circulo-de-quintas-explicado) lo explica.",
        },
      ],
    },
    {
      id: "sonido-limpio",
      heading: "Si el acorde no suena limpio",
      blocks: [
        {
          type: "table",
          caption: "Problemas frecuentes y cómo resolverlos",
          head: ["Problema", "Causa probable", "Qué hacer"],
          rows: [
            ["Una cuerda suena apagada", "Otro dedo la está rozando", "Arquea más los dedos y pisa con la punta de la yema"],
            ["Zumbido metálico", "Pisas lejos del traste o con poca fuerza", "Acerca el dedo a la barrita del traste"],
            ["Duelen las yemas", "Es normal las primeras semanas", "Sesiones cortas varias veces al día; la piel se endurece"],
            ["La mano se cansa rápido", "Aprietas de más o el pulgar empuja por encima del mástil", "Usa la presión mínima que haga sonar la nota"],
          ],
        },
        {
          type: "callout",
          title: "¿Y el Fa?",
          text: "El Fa mayor completo necesita cejilla, un dedo que pisa varias cuerdas a la vez. Mientras llegas ahí, existe una versión en cuatro cuerdas: 4ª traste 3 (d3), 3ª traste 2 (d2), y el dedo 1 pisando la 2ª y la 1ª en el traste 1.",
        },
        {
          type: "p",
          text: "Un profe de [guitarra acústica](/clases/guitarra-acustica) ve en segundos por qué una cuerda no suena, algo que a solas puede tomarte semanas descubrir. Y si te preguntas cuándo vas a tocar canciones completas, lo contamos en [cuánto tiempo toma aprender guitarra](/blog/cuanto-tiempo-toma-aprender-guitarra).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es el acorde más fácil de guitarra?",
      answer:
        "Mi menor: se toca con dos dedos en el traste 2 de la 5ª y la 4ª cuerda, y las seis cuerdas suenan. Por eso es el primero que enseñan muchos profes.",
    },
    {
      question: "¿Cuántos acordes necesito para tocar canciones?",
      answer:
        "Con tres o cuatro acordes bien cambiados ya puedes tocar muchas canciones. Los ocho de esta guía cubren varias tonalidades y te dan suficiente repertorio para meses.",
    },
    {
      question: "¿Estos acordes sirven para guitarra eléctrica?",
      answer:
        "Sí, se pisan igual. En la eléctrica las cuerdas son más delgadas y suelen costar menos. Con mucha distorsión, eso sí, los acordes completos pueden sonar confusos y se usan más los acordes de quinta o power chords.",
    },
    {
      question: "¿Cómo leo los acordes en una tablatura?",
      answer:
        "En una tablatura, un acorde aparece como números apilados en la misma columna, uno por cuerda. Te explicamos el sistema completo en nuestra guía para leer tablaturas de guitarra y bajo.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica"],
  relatedPostSlugs: [
    "como-afinar-la-guitarra",
    "como-leer-tablaturas-de-guitarra-y-bajo",
    "cuanto-tiempo-toma-aprender-guitarra",
  ],
  cta: "clases",
};
