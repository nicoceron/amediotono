import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "posicion-correcta-de-las-manos-en-el-piano",
  title: "¿Cuál es la posición correcta de las manos en el piano?",
  seoTitle: "Posición correcta de las manos en el piano",
  description:
    "Posición correcta de las manos en el piano: altura de la banca, mano redondeada, digitación básica, cómo evitar la tensión y ejercicios para fijarla.",
  excerpt:
    "Mano redonda, yemas firmes, muñeca nivelada y banca a la altura justa. Te explicamos la postura del cuerpo a los dedos, con digitación y ejercicios diarios.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "posición correcta de las manos en el piano",
    "cómo poner las manos en el piano",
    "postura para tocar piano",
    "altura de la banca del piano",
    "digitación piano para principiantes",
    "números de los dedos en el piano",
  ],
  intro: [
    "La posición correcta de las manos en el piano es redonda y relajada: dedos ligeramente curvos que tocan con la yema cerca de la punta, nudillos firmes que no se hunden, muñeca más o menos a la altura del teclado y el pulgar apoyado sobre su costado. Todo empieza antes de tocar la primera tecla: la altura de la banca y la distancia al piano deciden si la mano puede quedar así sin tensión.",
    "En esta guía vas del cuerpo a los dedos: postura, banca, forma de la mano, digitación, uso del peso y los errores que un profe corrige con más frecuencia.",
  ],
  keyTakeaways: [
    "Con las manos sobre el teclado, los antebrazos deben quedar más o menos paralelos al suelo.",
    "La curva de la mano es la misma que tiene cuando cuelga relajada al costado del cuerpo: redonda, no crispada.",
    "Se toca con la yema cerca de la punta del dedo; el pulgar, con su costado.",
    "Los dedos se numeran del 1 (pulgar) al 5 (meñique) en ambas manos.",
    "La tecla se baja con el peso del brazo, y una vez abajo no hay que seguir apretando.",
  ],
  sections: [
    {
      id: "postura-y-banca",
      heading: "Postura y altura de la banca",
      blocks: [
        {
          type: "ol",
          items: [
            "Siéntate en la mitad delantera de la banca, no en todo el asiento.",
            "Apoya los pies en el suelo, con el derecho cerca del pedal. Si los pies no llegan, como pasa con muchos niños, usa un reposapiés o una caja firme.",
            "Pon las manos sobre las teclas y revisa la altura: los antebrazos deben quedar más o menos paralelos al suelo, con los codos a la altura del teclado o un poco por encima.",
            "Ajusta la distancia: los codos deben quedar un poco por delante del torso. Si quedan pegados al cuerpo, estás muy cerca; si los brazos se estiran, estás muy lejos.",
            "Ubícate frente al centro del teclado, más o menos a la altura del do central.",
            "Mantén la espalda erguida sin rigidez, con una leve inclinación hacia adelante y los hombros sueltos.",
          ],
        },
        {
          type: "table",
          caption: "Señales de que la banca no está bien",
          head: ["Señal", "Causa probable", "Ajuste"],
          rows: [
            ["Codos por debajo del teclado y muñecas quebradas hacia arriba", "Banca muy baja", "Súbela o añade un cojín firme"],
            ["Hombros subidos y antebrazos inclinados hacia arriba", "Banca baja o muy cerca", "Sube la banca o aléjala un poco"],
            ["Brazos estirados y espalda inclinada", "Banca muy lejos", "Acércala hasta que los codos queden sueltos"],
            ["Codos muy por encima del teclado y espalda encorvada", "Banca muy alta", "Bájala hasta que los antebrazos queden nivelados"],
          ],
        },
      ],
    },
    {
      id: "forma-de-la-mano",
      heading: "La forma de la mano: redonda pero natural",
      blocks: [
        {
          type: "p",
          text: "Durante años se enseñó a tocar “como si sostuvieras una pelota”. La imagen ayuda, pero exagerada genera tensión. Hoy muchos profes prefieren otra referencia: deja caer el brazo al costado del cuerpo, completamente suelto, y observa la curva que toma la mano. Esa es la forma que buscas sobre el teclado.",
        },
        {
          type: "ul",
          items: [
            "**Yemas:** tocas con la parte carnosa cerca de la punta, no con la uña ni con el dedo plano. Mantén las uñas cortas.",
            "**Nudillos:** forman un arco o “puente”; no se hunden hacia el teclado.",
            "**Última falange:** firme; si se dobla hacia adentro al tocar, el dedo está colapsando.",
            "**Pulgar:** toca con el costado, cerca de la esquina de la uña, y se mantiene suelto, sin pegarse a la mano.",
            "**Meñique:** curvo y apoyado sobre su punta lateral; no plano ni estirado.",
            "**Muñeca:** nivelada con el dorso de la mano, ni caída ni levantada.",
          ],
        },
        { type: "h3", text: "Truco: de la rodilla al teclado" },
        {
          type: "p",
          text: "Pon las manos relajadas sobre tus rodillas y observa su forma: redonda y sin esfuerzo. Luego levántalas y llévalas al teclado sin cambiar nada. Hazlo cada vez que empieces a practicar.",
        },
      ],
    },
    {
      id: "digitacion-basica",
      heading: "Digitación: los números de los dedos",
      blocks: [
        {
          type: "p",
          text: "En piano los dedos se numeran igual en ambas manos: 1 es el pulgar, 2 el índice, 3 el medio, 4 el anular y 5 el meñique. Esos números aparecen sobre las notas de la partitura y conviene respetarlos desde el principio: una buena digitación hace que los pasajes salgan solos más adelante.",
        },
        {
          type: "table",
          caption: "Posición de do: un dedo por tecla",
          head: ["Nota", "Mano derecha", "Mano izquierda"],
          rows: [
            ["Do", "1", "5"],
            ["Re", "2", "4"],
            ["Mi", "3", "3"],
            ["Fa", "4", "2"],
            ["Sol", "5", "1"],
          ],
        },
        {
          type: "p",
          text: "Para tocar más de cinco notas seguidas, el pulgar pasa por debajo de la mano. En la escala de do mayor ascendente, la mano derecha toca 1-2-3-1-2-3-4-5 (el pulgar pasa después del mi) y la izquierda 5-4-3-2-1-3-2-1 (el dedo 3 cruza por encima del pulgar después del sol). Al bajar, se hace el camino inverso. Si todavía no lees con fluidez, apóyate en nuestra guía para [leer partituras](/blog/como-leer-partituras-guia-para-principiantes).",
        },
      ],
    },
    {
      id: "peso-y-tension",
      heading: "Peso del brazo y tensión: cómo tocar sin apretar",
      blocks: [
        {
          type: "p",
          text: "El sonido del piano no sale de empujar con el dedo, sino de dejar que el peso del brazo llegue a la tecla a través de una mano firme pero no rígida. Una vez que la tecla bajó y sonó, no hace falta seguir presionando: el dedo la sostiene con el mínimo esfuerzo.",
        },
        { type: "h3", text: "Señales de tensión" },
        {
          type: "ul",
          items: [
            "Los hombros suben mientras tocas.",
            "Contienes la respiración en los pasajes difíciles.",
            "El pulgar se queda rígido o pegado al costado de la mano.",
            "Los dedos que no tocan se levantan muy alto o se estiran.",
            "Aparece molestia en el antebrazo o la muñeca después de practicar.",
          ],
        },
        {
          type: "p",
          text: "Cuando notes alguna, detente, deja caer los brazos a los costados, sacúdelos suavemente y vuelve a empezar más lento. En las clases de [piano](/clases/piano), el profe observa estos detalles desde afuera, algo difícil de hacer mientras tocas.",
        },
      ],
    },
    {
      id: "ejercicios-diarios",
      heading: "Ejercicios para fijar la posición",
      blocks: [
        {
          type: "p",
          text: "Cinco minutos al comienzo de cada práctica bastan. Hazlos lentos, con el [metrónomo](/herramientas/metronomo) a unos 60 BPM y una nota por clic.",
        },
        {
          type: "table",
          caption: "Rutina de 5 minutos para las manos",
          head: ["Ejercicio", "Cómo se hace", "Qué revisa"],
          rows: [
            ["Caída de brazo", "Levanta el brazo suelto y déjalo caer sobre una tecla con el dedo 3 firme.", "Tocar con peso, no con fuerza"],
            ["Cinco dedos", "Do-re-mi-fa-sol-fa-mi-re-do legato, primero cada mano sola y luego juntas.", "Forma redonda y dedos parejos"],
            ["Notas repetidas", "Cada dedo toca cuatro veces la misma tecla.", "Que la última falange no se doble"],
            ["Paso del pulgar", "Do-re-mi-fa con 1-2-3-1, ida y vuelta, en la mano derecha.", "Pulgar suelto y muñeca estable"],
            ["Staccato de muñeca", "Notas cortas dejando que la muñeca rebote suavemente.", "Liberar la tensión de la muñeca"],
          ],
        },
      ],
    },
    {
      id: "errores-comunes-piano",
      heading: "Errores comunes en la posición de las manos",
      blocks: [
        {
          type: "table",
          caption: "Qué se ve y cómo corregirlo",
          head: ["Error", "Cómo se ve", "Corrección"],
          rows: [
            ["Dedos planos", "Se toca con toda la falange", "Vuelve a la forma de la mano sobre la rodilla"],
            ["Falange quebrada", "La punta del dedo se dobla hacia adentro", "Notas repetidas lentas con atención a ese dedo"],
            ["Muñeca caída", "La muñeca queda por debajo del teclado", "Revisa la altura de la banca"],
            ["Muñeca alta y rígida", "La mano “cuelga” sobre las teclas", "Staccato de muñeca y caída de brazo"],
            ["Pulgar colgando", "El pulgar queda fuera del teclado", "Apóyalo sobre su costado encima de una tecla"],
            ["Meñique estirado", "El dedo 5 toca plano y sin fuerza", "Tócalo sobre su punta lateral, más curvo"],
          ],
        },
        {
          type: "callout",
          title: "Si duele, para",
          text: "Un poco de cansancio es normal al empezar, pero el dolor en muñeca, antebrazo o dedos no lo es. Descansa y revisa la postura con tu profe antes de seguir.",
        },
        {
          type: "p",
          text: "La postura es la misma en un piano acústico y en uno digital. Lo que cambia es el peso de las teclas: en un teclado con teclas livianas cuesta más desarrollar el control del peso. Te explicamos las diferencias en [piano digital o teclado](/blog/piano-digital-o-teclado-diferencias).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué altura debe tener la banca del piano?",
      answer:
        "No hay una medida única, porque depende de tu estatura y de la del piano. La referencia es el cuerpo: con las manos sobre las teclas, los antebrazos deben quedar más o menos paralelos al suelo. Por eso una banca regulable es una buena inversión, sobre todo si en casa tocan varias personas.",
    },
    {
      question: "¿Los niños deben usar la misma posición que los adultos?",
      answer:
        "Sí, con los mismos principios, pero adaptando el entorno: reposapiés para que los pies no cuelguen, cojín firme o banca regulable y sesiones cortas. Te damos más detalles en nuestra guía de [piano para niños](/blog/piano-para-ninos-guia-para-padres).",
    },
    {
      question: "¿Es normal que el anular y el meñique sean los más débiles?",
      answer:
        "Sí. Por cómo están conectados los tendones de la mano, el anular es menos independiente que los demás y el meñique suele tener menos control al principio. Se fortalecen con ejercicios lentos y con el repertorio, sin forzar.",
    },
    {
      question: "¿Hay que levantar mucho los dedos antes de tocar?",
      answer:
        "No. Levantarlos en exceso gasta energía y genera tensión. Los dedos deben mantenerse cerca de las teclas, listos para bajar con un movimiento corto.",
    },
  ],
  relatedCourseIds: ["piano"],
  relatedPostSlugs: [
    "piano-para-ninos-guia-para-padres",
    "aprender-piano-de-adulto",
    "como-practicar-musica-en-casa",
  ],
  cta: "clases",
};
