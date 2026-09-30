import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-poner-los-dedos-en-el-violin",
  title: "¿Cómo poner los dedos en el violín? Primera posición",
  description:
    "Dónde van los dedos en la primera posición del violín: notas de cada cuerda, patrones de tonos y semitonos, cintas guía y ejercicios para afinar mejor.",
  excerpt:
    "Dedos pegados para el semitono, separados para el tono: así se organiza la mano izquierda en primera posición, con el mapa de notas y ejercicios para afinar sin trastes.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo poner los dedos en el violín",
    "primera posición del violín",
    "notas del violín con los dedos",
    "patrones de dedos en el violín",
    "cintas en el violín dónde van",
    "cómo afinar los dedos en el violín",
  ],
  intro: [
    "En la primera posición del violín, el primer dedo (el índice) va un tono por encima de la cuerda al aire y los demás se ubican según la escala: separados cuando entre dos notas hay un tono y pegados cuando hay un semitono. En la cuerda La, dentro de la escala de Re mayor, los dedos 1, 2, 3 y 4 dan Si, Do♯, Re y Mi, y ese Mi del cuarto dedo debe sonar igual que la cuerda Mi al aire.",
    "Como el violín no tiene trastes, la mano aprende las distancias y el oído las corrige. Aquí tienes el mapa de notas de la primera posición, los cuatro patrones de dedos que más se usan, cómo aprovechar las cintas guía y ejercicios para que la mano encuentre las notas sola.",
  ],
  keyTakeaways: [
    "Los dedos se numeran del 1 (índice) al 4 (meñique); el 0 es la cuerda al aire.",
    "En primera posición, el dedo 1 queda un tono por encima de la cuerda al aire y el dedo 4 suena igual que la cuerda al aire siguiente.",
    "Dedos pegados significan semitono; dedos separados, tono. La armadura te dice qué patrón usar en cada cuerda.",
    "El tercer dedo se comprueba con la cuerda al aire de abajo: cuando está afinado, esa cuerda vibra sola por resonancia.",
    "Las cintas guía ayudan al principio, pero la afinación la decide el oído, no la vista.",
  ],
  sections: [
    {
      id: "numeros-y-forma-de-la-mano",
      heading: "Los números de los dedos y la forma de la mano",
      blocks: [
        {
          type: "p",
          text: "En las partituras de violín, los números sobre las notas indican el dedo de la mano izquierda: 1 es el índice, 2 el medio, 3 el anular y 4 el meñique. El 0 significa cuerda al aire. El pulgar no lleva número porque no pisa: acompaña detrás del mástil.",
        },
        {
          type: "ul",
          items: [
            "**Pulgar:** suelto, más o menos frente al primer o al segundo dedo. No aprieta: el violín lo sostienen la mentonera y el hombro.",
            "**Muñeca:** recta, en línea con el antebrazo. Si se dobla hacia adentro y la palma se pega al mástil, los dedos pierden fuerza y alcance.",
            "**Dedos:** curvos, cayendo de punta sobre la cuerda, como martillos pequeños. Así no rozan la cuerda vecina.",
            "**Base del índice:** roza el costado del mástil, cerca de la cejuela, y te sirve como punto de referencia.",
            "**Codo:** debajo del violín. Se desplaza un poco hacia la derecha para alcanzar la cuerda Sol y hacia la izquierda para la cuerda Mi.",
          ],
        },
        {
          type: "p",
          text: "Mantén cortas las uñas de la mano izquierda: si la uña toca el diapasón antes que la yema, el dedo cae aplanado y la nota queda insegura. Presiona solo lo necesario para que la cuerda toque el diapasón y suene limpia; más fuerza no mejora el sonido y cansa la mano.",
        },
      ],
    },
    {
      id: "mapa-de-notas",
      heading: "El mapa de notas de la primera posición",
      blocks: [
        {
          type: "p",
          text: "Antes de poner los dedos, [afina el violín](/blog/como-afinar-el-violin): si las cuerdas al aire están desafinadas, ninguna referencia sirve. La tabla muestra qué nota da cada dedo en cada cuerda. El segundo dedo tiene dos lugares posibles: “bajo”, pegado al primero, y “alto”, pegado al tercero.",
        },
        {
          type: "table",
          caption: "Notas de la primera posición en el violín",
          head: ["Cuerda", "0 (al aire)", "1", "2 bajo", "2 alto", "3", "4"],
          rows: [
            ["Sol", "Sol", "La", "Si♭", "Si", "Do", "Re"],
            ["Re", "Re", "Mi", "Fa", "Fa♯", "Sol", "La"],
            ["La", "La", "Si", "Do", "Do♯", "Re", "Mi"],
            ["Mi", "Mi", "Fa♯", "Sol", "Sol♯", "La", "Si"],
          ],
        },
        {
          type: "p",
          text: "Hay dos regularidades que te ayudan a orientarte. El dedo 4 de cada cuerda da la misma nota que la cuerda al aire siguiente (Re, La y Mi). Y el dedo 3 da la octava de la cuerda al aire anterior: Sol en la cuerda Re, Re en la cuerda La y La en la cuerda Mi.",
        },
      ],
    },
    {
      id: "patrones-de-dedos",
      heading: "Los cuatro patrones de dedos",
      blocks: [
        {
          type: "p",
          text: "En lugar de memorizar nota por nota, los violinistas piensan en patrones: la forma que toma la mano según dónde cae el semitono. Cada método los numera distinto, así que aquí los nombramos por los dedos que van pegados.",
        },
        {
          type: "table",
          caption: "Patrones de la mano izquierda en primera posición",
          head: ["Patrón", "Dónde está el semitono", "Ejemplo en la cuerda La", "Dónde aparece"],
          rows: [
            ["2 y 3 juntos", "Entre los dedos 2 y 3", "La, Si, Do♯, Re, Mi", "Re mayor en las cuerdas Re y La; La mayor en las cuerdas La y Mi"],
            ["1 y 2 juntos", "Entre los dedos 1 y 2", "La, Si, Do, Re, Mi", "Sol mayor en las cuerdas La y Mi; Do mayor en las cuerdas Re y La"],
            ["3 y 4 juntos", "Entre los dedos 3 y 4", "La, Si, Do♯, Re♯, Mi", "La mayor en la cuerda Re; Re mayor en la cuerda Sol"],
            ["1 bajo", "Entre la cuerda al aire y el dedo 1", "La, Si♭, Do, Re, Mi", "Fa mayor en la cuerda La; Do mayor en la cuerda Mi"],
          ],
        },
        {
          type: "p",
          text: "¿Cómo saber cuál usar? Mira la armadura. Si la obra tiene Do♯, en la cuerda La el segundo dedo va alto; si tiene Do natural, va bajo, pegado al primero. Lo mismo pasa con el Fa en la cuerda Re y con el Sol en la cuerda Mi. Antes de tocar una pieza nueva, recorre la armadura cuerda por cuerda y decide dónde irá cada segundo dedo: te ahorras buena parte de las notas falsas.",
        },
      ],
    },
    {
      id: "cintas-guia",
      heading: "Cintas guía: cómo usarlas sin depender de ellas",
      blocks: [
        {
          type: "p",
          text: "Muchos profes pegan cintas delgadas sobre el diapasón al principio para que la mano tenga una referencia visual. Lo más común es marcar el dedo 1, el 2 alto y el 3; algunos agregan el 2 bajo o el 4. Las ubica el profe, nota por nota y con afinador, porque cada violín y cada tamaño tiene distancias distintas.",
        },
        {
          type: "ul",
          items: [
            "Mira las cintas para ubicar la mano, pero escucha para corregir. Si con el dedo sobre la cinta la nota suena baja, mueve el dedo: la cinta es una zona, no un punto exacto.",
            "Apoya el dedo encima de la cinta, no al lado. En un violín pequeño, medio centímetro ya se escucha como una nota desafinada.",
            "Revisa de vez en cuando que no se hayan corrido, sobre todo después de limpiar el diapasón.",
            "Cuando una nota ya sale afinada sin mirar, esa cinta puede irse. Normalmente se retiran de a una.",
          ],
        },
        {
          type: "p",
          text: "Un truco para irlas soltando: toca la escala con los ojos cerrados y, al final de cada nota, mira si el dedo cayó sobre la cinta. Si casi siempre acierta, la mano ya aprendió esa distancia.",
        },
      ],
    },
    {
      id: "comprobar-con-cuerdas-al-aire",
      heading: "Cómo comprobar la afinación con las cuerdas al aire",
      blocks: [
        {
          type: "p",
          text: "Tu mejor referencia está dentro del violín: las cuerdas al aire. Varias notas de la primera posición coinciden con ellas al unísono o a la octava, y cuando están afinadas, la cuerda al aire vecina vibra sola por resonancia. El violín “suena más”, con un brillo que se nota aunque no toques esa cuerda.",
        },
        {
          type: "table",
          caption: "Notas que puedes comprobar sin afinador",
          head: ["Nota pisada", "Compárala con", "Qué buscar"],
          rows: [
            ["Dedo 4 en Sol, Re o La", "La cuerda al aire siguiente (Re, La o Mi)", "Unísono: las dos suenan como una sola, sin ondulaciones"],
            ["Dedo 3 en Re, La o Mi", "La cuerda al aire anterior (Sol, Re o La)", "Octava limpia y la cuerda al aire vibrando por simpatía"],
            ["Dedo 1 en Sol o Re", "La cuerda al aire dos cuerdas más arriba (La o Mi)", "Octava: la cuerda al aire resuena sin tocarla"],
          ],
        },
        {
          type: "p",
          text: "Para practicarlo, toca la nota pisada con arco y luego, sin levantar el dedo, la cuerda al aire; o tócalas juntas en doble cuerda. Las notas que no tienen cuerda de referencia, como los segundos dedos, compruébalas con el [afinador de violín](/herramientas/afinador/violin).",
        },
      ],
    },
    {
      id: "ejercicios-mano-izquierda",
      heading: "Ejercicios para que la mano encuentre las notas",
      blocks: [
        {
          type: "p",
          text: "Hazlos lento, con el [metrónomo](/herramientas/metronomo) a 60 y una nota por pulso. Cinco minutos al comienzo de la práctica son suficientes.",
        },
        {
          type: "ol",
          items: [
            "**Martillitos sin arco.** Con el violín en posición, deja caer cada dedo sobre la cuerda La desde un par de centímetros y levántalo, uno por uno. Busca que caiga de punta y que se escuche un pequeño golpe.",
            "**Escalera en pizzicato.** Toca 0-1-2-3-4-3-2-1-0 en una cuerda, en pizzicato. Sin el arco, toda tu atención va a la afinación. Al llegar al 4, compáralo con la cuerda al aire siguiente.",
            "**Dedos que se quedan.** Al subir, deja puestos los dedos anteriores: para tocar el 3, el 1 y el 2 siguen sobre la cuerda. La mano gana estabilidad. Al bajar, levanta solo el dedo que termina.",
            "**Segundo dedo bajo y alto.** En la cuerda La, alterna 1-2-1-2 primero con Do y luego con Do♯. Es el movimiento que más confunde al principio.",
            "**Mismo patrón, otra cuerda.** Toca el patrón de 2 y 3 juntos en la cuerda La y luego, sin cambiar la forma de la mano, en la cuerda Re. Se mueve el codo, no la forma de los dedos.",
            "**Escala con nota pedal.** Toca la escala de Re mayor de una octava mientras suena un Re continuo de un teclado o una aplicación. Cada nota tiene un color contra el Re; cuando una está desafinada, se nota una aspereza.",
          ],
        },
      ],
    },
    {
      id: "errores-mano-izquierda",
      heading: "Errores comunes de la mano izquierda",
      blocks: [
        {
          type: "table",
          caption: "Cómo reconocerlos y corregirlos",
          head: ["Error", "Cómo se nota", "Corrección"],
          rows: [
            ["Apretar el mástil con el pulgar", "Mano cansada, dedos lentos, molestia en la base del pulgar", "Mueve el pulgar mientras tocas: si puede moverse, no está apretando"],
            ["Muñeca doblada hacia el mástil", "Dedos aplanados y sin alcance para el 4", "Deja un espacio entre la palma y el mástil"],
            ["Dedos planos", "Rozan la cuerda vecina y suena una nota extra o apagada", "Curva los dedos y cae de punta"],
            ["Levantar mucho los dedos", "Notas que llegan tarde en pasajes rápidos", "Levántalos apenas, cerca de la cuerda"],
            ["Evitar el cuarto dedo", "Todo se toca con cuerdas al aire", "Escalera en pizzicato con el 4 contra la cuerda al aire"],
            ["Tocar mirando las cintas", "Cuello torcido y oído distraído", "Mira una vez, luego escucha y corrige"],
          ],
        },
        {
          type: "p",
          text: "Casi todos estos errores se ven desde afuera antes de oírse, por eso en las [clases de violín](/clases/violin) el profe revisa la mano izquierda en cada sesión durante los primeros meses y ajusta la posición al tamaño de tu mano y de tu instrumento. Cuando la primera posición esté estable, el siguiente paso expresivo es el [vibrato](/blog/como-hacer-vibrato-en-el-violin).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto hay que presionar la cuerda del violín?",
      answer:
        "Lo justo para que la cuerda toque el diapasón y la nota suene limpia. Un ejercicio útil: apoya el dedo tan suave que suene un silbido, y ve aumentando la presión hasta que la nota se aclare. Ese punto, con un poquito más de peso, es suficiente.",
    },
    {
      question: "¿Por qué desafino aunque ponga el dedo sobre la cinta?",
      answer:
        "Porque la cinta marca una zona y el dedo puede caer más adelante, más atrás o inclinado. Además, las cintas se corren con el uso. El oído siempre tiene la última palabra: escucha y corrige moviendo el dedo apenas unos milímetros.",
    },
    {
      question: "¿Cuándo se usa el cuarto dedo en vez de la cuerda al aire?",
      answer:
        "La cuerda al aire suena más brillante y no admite vibrato; el cuarto dedo da un sonido más parejo con las notas vecinas y evita cambiar de cuerda en pasajes rápidos. La partitura suele indicarlo y, si no, tu profe te dirá cuál conviene. Lo importante es entrenar el cuarto dedo para poder elegir.",
    },
    {
      question: "¿Qué son la segunda y la tercera posición?",
      answer:
        "Son ubicaciones de la mano más arriba en el diapasón. En tercera posición, por ejemplo, el primer dedo pisa la nota que en primera posición tocabas con el tercero. Se aprenden cuando la primera posición ya es estable, porque usan las mismas formas de mano en otro lugar.",
    },
  ],
  relatedCourseIds: ["violin"],
  relatedPostSlugs: [
    "como-afinar-el-violin",
    "como-sostener-el-arco-del-violin",
    "como-hacer-vibrato-en-el-violin",
  ],
  cta: "clases",
};
