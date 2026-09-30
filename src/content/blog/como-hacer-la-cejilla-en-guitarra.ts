import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-hacer-la-cejilla-en-guitarra",
  title: "Cómo hacer la cejilla en guitarra: técnica y ejercicios",
  description:
    "Aprende a hacer la cejilla en guitarra: dónde va el índice y el pulgar, errores que la apagan, ejercicios progresivos y los acordes de Fa y Si bemol.",
  excerpt:
    "La cejilla no es cuestión de fuerza sino de ubicación y peso del brazo. Técnica paso a paso, errores que la apagan y ejercicios del Fa en cuatro cuerdas a la cejilla completa.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo hacer la cejilla en guitarra",
    "cejilla guitarra para principiantes",
    "acorde de fa con cejilla",
    "acorde de si bemol guitarra",
    "por qué no me suena la cejilla",
    "ejercicios para la cejilla",
  ],
  intro: [
    "Hacer la cejilla es pisar varias cuerdas a la vez con el índice estirado, justo detrás del traste, mientras los otros dedos forman el resto del acorde. La clave no es la fuerza: es **dónde pones el índice** (girado un poco hacia su costado y pegado al traste), **dónde va el pulgar** (detrás del mástil, no por encima) y usar el **peso del brazo** en lugar de apretar como una pinza.",
    "Casi nadie logra que suene limpia en la primera semana, y eso es normal. Aquí tienes la técnica paso a paso, los errores que la apagan, una progresión de ejercicios que va del Fa en cuatro cuerdas a la cejilla completa, y las dos formas que abren el mástil: la de Fa y la de Si bemol.",
  ],
  keyTakeaways: [
    "La cejilla se hace con el costado del índice, pegado al traste, no con la yema plana.",
    "La presión sale del peso del brazo, no de apretar con el pulgar.",
    "El índice solo necesita pisar de verdad las cuerdas que los demás dedos no cubren.",
    "Empieza por el Fa en cuatro cuerdas y practica la cejilla completa en los trastes 5 a 7 antes de bajar al 1.",
    "Con la forma de Fa (fundamental en la 6ª cuerda) y la de Si bemol (fundamental en la 5ª) puedes tocar cualquier acorde mayor o menor.",
  ],
  sections: [
    {
      id: "que-es-la-cejilla",
      heading: "Qué es la cejilla y por qué la necesitas",
      blocks: [
        {
          type: "p",
          text: "En la **cejilla completa**, el índice cubre las seis cuerdas en un mismo traste. En la **media cejilla**, cubre solo algunas, por ejemplo de la 1ª a la 3ª o de la 1ª a la 5ª. Con los acordes abiertos puedes tocar mucho, pero en cuanto una canción cambia de tonalidad aparecen acordes que solo se pueden hacer con cejilla.",
        },
        {
          type: "table",
          caption: "Acordes con cejilla que aparecen en tonalidades muy comunes",
          head: ["Tonalidad", "Acordes de la tonalidad", "Cuál pide cejilla"],
          rows: [
            ["Do mayor", "Do, Rem, Mim, Fa, Sol, Lam", "Fa"],
            ["Sol mayor", "Sol, Lam, Sim, Do, Re, Mim", "Sim"],
            ["Re mayor", "Re, Mim, Fa♯m, Sol, La, Sim", "Fa♯m y Sim"],
            ["La mayor", "La, Sim, Do♯m, Re, Mi, Fa♯m", "Sim, Do♯m y Fa♯m"],
          ],
        },
        {
          type: "p",
          text: "Por eso la cejilla suele marcar el paso de “sé unos acordes” a “puedo tocar casi cualquier canción”. Si todavía te falta afianzar los acordes abiertos, empieza por los [acordes básicos de guitarra](/blog/acordes-basicos-de-guitarra-para-principiantes).",
        },
      ],
    },
    {
      id: "tecnica-paso-a-paso",
      heading: "La técnica, paso a paso",
      blocks: [
        {
          type: "ol",
          items: [
            "**Baja el pulgar.** Ponlo detrás del mástil, más o menos a la altura del dedo medio y cerca de la mitad del mástil. En los acordes abiertos puede asomar por encima; en la cejilla, no.",
            "**Estira el índice sobre las cuerdas**, justo detrás de la barrita del traste, no en la mitad del espacio.",
            "**Gíralo un poco hacia su costado**, el que mira hacia el clavijero. Esa parte es más firme y ósea que la yema, y no se hunde entre las cuerdas.",
            "**Revisa la punta.** En la cejilla completa, la punta del índice llega justo a la 6ª cuerda o sobresale apenas del borde del mástil.",
            "**Coloca los demás dedos** del acorde, bien arqueados.",
            "**Usa el peso del brazo.** Deja que el brazo cuelgue y lleva el codo suavemente hacia atrás, como si quisieras acercar el mástil a tu cuerpo. Esa tracción hace más trabajo que el pulgar.",
            "**Toca cuerda por cuerda.** Así descubres cuál no suena y ajustas solo lo necesario.",
          ],
        },
        { type: "h3", text: "El índice no tiene que pisar todo" },
        {
          type: "p",
          text: "En el Fa con cejilla, los dedos 2, 3 y 4 cubren la 3ª, la 4ª y la 5ª cuerda, así que el índice solo tiene que hacer sonar de verdad la 6ª, la 2ª y la 1ª. En el Si bemol, solo la 5ª y la 1ª. Saberlo te permite concentrar la presión donde hace falta y relajar el resto.",
        },
        { type: "h3", text: "Cuidado con los pliegues" },
        {
          type: "p",
          text: "Los pliegues de las articulaciones del índice son pequeños huecos. Si uno cae justo sobre una cuerda, esa cuerda suena apagada por más que aprietes. Pasa mucho con la 2ª o la 3ª cuerda. La solución es deslizar el índice uno o dos milímetros hacia arriba o hacia abajo hasta que la cuerda quede bajo una parte firme del dedo.",
        },
      ],
    },
    {
      id: "fa-y-si-bemol",
      heading: "Fa y Si bemol: las dos formas que abren el mástil",
      blocks: [
        {
          type: "table",
          caption: "Digitación en el traste 1 (c = cejilla con el índice; d = dedo)",
          head: ["Acorde", "6ª Mi", "5ª La", "4ª Re", "3ª Sol", "2ª Si", "1ª Mi"],
          rows: [
            ["Fa (F)", "1 (c)", "3 (d3)", "3 (d4)", "2 (d2)", "1 (c)", "1 (c)"],
            ["Fam (Fm)", "1 (c)", "3 (d3)", "3 (d4)", "1 (c)", "1 (c)", "1 (c)"],
            ["Si♭ (B♭)", "x", "1 (c)", "3 (d2)", "3 (d3)", "3 (d4)", "1 (c)"],
            ["Si♭m (B♭m)", "x", "1 (c)", "3 (d3)", "3 (d4)", "2 (d2)", "1 (c)"],
          ],
        },
        {
          type: "p",
          text: "Mira las formas: el Fa es un Mi mayor movido un traste hacia arriba, con el índice haciendo de cejuela; el Fam es un Mim; el Si♭ es un La; y el Si♭m, un Lam. En el Si♭, si tus dedos no caben en el traste 3, puedes pisar la 4ª, la 3ª y la 2ª cuerda con una pequeña cejilla del dedo 3 y dejar de lado la 1ª cuerda.",
        },
        {
          type: "table",
          caption: "Mueve la forma y obtienes otros acordes",
          head: ["Traste", "Forma de Fa (fundamental en la 6ª)", "Forma de Si♭ (fundamental en la 5ª)"],
          rows: [
            ["1", "Fa", "Si♭"],
            ["2", "Fa♯", "Si"],
            ["3", "Sol", "Do"],
            ["5", "La", "Re"],
            ["7", "Si", "Mi"],
            ["8", "Do", "Fa"],
          ],
        },
        {
          type: "p",
          text: "Lo mismo vale para las versiones menores: el famoso **Sim** es la forma de Si♭m en el traste 2 (x-2-4-4-3-2), y el **Fa♯m** es la forma de Fam en el traste 2 (2-4-4-2-2-2).",
        },
      ],
    },
    {
      id: "ejercicios-progresivos",
      heading: "Ejercicios progresivos, de cuatro cuerdas a seis",
      blocks: [
        {
          type: "p",
          text: "No empieces por la cejilla completa en el traste 1: es el lugar donde más cuesta. Sube la dificultad de a poco y dedica solo unos cinco minutos por sesión a estos ejercicios; el resto de la práctica sigue con tus canciones.",
        },
        {
          type: "ol",
          items: [
            "**Fa en cuatro cuerdas.** 4ª cuerda traste 3 (d3), 3ª traste 2 (d2), y el índice pisando la 2ª y la 1ª en el traste 1. Es una media cejilla pequeña y ya te enseña a apoyar el costado del dedo.",
            "**Fa en cinco cuerdas.** Igual, pero con el dedo 3 en la 5ª cuerda traste 3 y el dedo 4 en la 4ª traste 3. Suena más lleno y el índice sigue pisando solo dos cuerdas.",
            "**Índice solo en el traste 5.** Estira el índice sobre las seis cuerdas y tócalas una por una. Ajusta hasta que todas suenen. Más arriba en el mástil suele costar menos que en el traste 1.",
            "**Apretar y soltar.** Con el índice en el traste 5, presiona lo justo para que suene durante cuatro tiempos y afloja otros cuatro, sin despegar el dedo de las cuerdas. Diez repeticiones. Entrena la presión mínima, no la fuerza.",
            "**Forma completa en el traste 5.** Haz la forma de Fa ahí: es un La mayor con cejilla (5-7-7-6-5-5). Cuando suene limpio, bájala un traste cada pocos días hasta llegar al Fa en el traste 1.",
            "**Cambios con metrónomo.** Do a Fa y Lam a Fa, con cuatro golpes por acorde y el [metrónomo](/herramientas/metronomo) a 60. Luego, la progresión Re – La – Sim – Sol, que usa la otra forma.",
          ],
        },
      ],
    },
    {
      id: "errores-comunes-cejilla",
      heading: "Por qué no te suena: errores comunes",
      blocks: [
        {
          type: "table",
          caption: "Síntoma, causa y solución",
          head: ["Síntoma", "Causa probable", "Qué hacer"],
          rows: [
            ["La 2ª o la 3ª cuerda suena apagada", "Cae en un pliegue del índice", "Desliza el índice un poco y gíralo hacia su costado"],
            ["Zumbido en varias cuerdas", "El índice está lejos del traste", "Acércalo a la barrita del traste"],
            ["La 6ª cuerda no suena", "La punta del índice no llega o está floja", "Adelanta el índice hasta que la punta alcance la 6ª"],
            ["Duele la base del pulgar", "Aprietas como pinza", "Relaja el pulgar y usa el peso del brazo"],
            ["El acorde suena desafinado", "Aprietas de más o empujas las cuerdas hacia un lado", "Busca la presión mínima con el ejercicio de apretar y soltar"],
            ["La muñeca queda muy doblada", "Codo muy pegado al cuerpo o guitarra muy baja", "Separa un poco el codo y sube el mástil"],
          ],
        },
        {
          type: "callout",
          title: "A veces la culpa es de la guitarra",
          text: "Si las cuerdas están muy altas sobre el diapasón o la cejuela está alta, la cejilla puede ser casi imposible incluso con buena técnica. Un luthier puede ajustar la acción. Si además te duelen mucho las yemas, lee nuestra guía sobre el [dolor en los dedos al tocar guitarra](/blog/dolor-en-los-dedos-al-tocar-guitarra).",
        },
      ],
    },
    {
      id: "paciencia-y-constancia",
      heading: "Paciencia: cómo no rendirse con la cejilla",
      blocks: [
        {
          type: "p",
          text: "La cejilla tarda en salir, y no avanza en línea recta: hay días en que suena y otros en que no. Es normal. En [cuánto tiempo toma aprender guitarra](/blog/cuanto-tiempo-toma-aprender-guitarra) contamos en qué etapa suele aparecer. Mientras llega, estas ideas ayudan:",
        },
        {
          type: "ul",
          items: [
            "Poco y seguido: cinco minutos diarios de cejilla rinden más que media hora un solo día.",
            "Sigue tocando canciones con la versión simplificada del Fa mientras la cejilla completa madura.",
            "En la guitarra eléctrica la cejilla cuesta menos por las cuerdas delgadas; en la clásica, el mástil es más ancho pero las cuerdas de nylon son más suaves.",
            "Si un acorde con cejilla te frena una canción, usa el capo para cambiar de tonalidad y sigue tocando; la cejilla la trabajas aparte.",
            "Si sientes dolor en la muñeca o el antebrazo, para. Ese dolor no es parte del proceso.",
          ],
        },
        {
          type: "p",
          text: "Un profe de [guitarra acústica](/clases/guitarra-acustica) o de [guitarra eléctrica](/clases/guitarra-electrica) ve en un minuto si el problema es el índice, el pulgar, el codo o la guitarra, algo que a solas puede tomarte semanas descubrir.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Se puede tocar Fa sin cejilla?",
      answer:
        "Sí. La versión en cuatro cuerdas (índice en la 1ª y la 2ª cuerda, traste 1; dedo 2 en la 3ª, traste 2; dedo 3 en la 4ª, traste 3) funciona en casi cualquier canción. También puedes poner un capo en el traste 1 y hacer la forma de Mi mayor: suena como Fa.",
    },
    {
      question: "¿Qué es la media cejilla?",
      answer:
        "Es cuando el índice pisa solo algunas cuerdas en el mismo traste, no las seis. El Fa en cuatro cuerdas es un ejemplo pequeño; otro frecuente es pisar de la 1ª a la 5ª cuerda en los acordes con la forma de Si bemol. Es un buen paso intermedio antes de la cejilla completa.",
    },
    {
      question: "¿Hay que tener mucha fuerza en los dedos para la cejilla?",
      answer:
        "No tanta como parece. Lo que más pesa es la posición del índice, que el pulgar no apriete de más y que uses el peso del brazo. Con la técnica bien ubicada, la presión que hace falta es bastante menor que la que usa un principiante cuando aprieta por instinto.",
    },
    {
      question: "¿Es normal que me duela el dedo índice al practicar la cejilla?",
      answer:
        "Una molestia en el costado del índice al principio es común. Dolor en la muñeca, el antebrazo o la base del pulgar no lo es: suele indicar que aprietas como pinza. Descansa, revisa la técnica con tu profe y, si el dolor persiste, consulta a un profesional de la salud.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "guitarra-electrica"],
  relatedPostSlugs: [
    "acordes-basicos-de-guitarra-para-principiantes",
    "dolor-en-los-dedos-al-tocar-guitarra",
    "cuanto-tiempo-toma-aprender-guitarra",
  ],
  cta: "clases",
};
