import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "dolor-en-los-dedos-al-tocar-guitarra",
  title: "¿Es normal que duelan los dedos al tocar guitarra?",
  description:
    "Por qué duelen las yemas al tocar guitarra, cuánto dura, cómo cuidar los callos, qué cambiar en cuerdas y acción, y cuándo el dolor no es normal.",
  excerpt:
    "Que las yemas duelan las primeras semanas es parte del proceso. Te explicamos cómo hacerlo llevadero, qué revisar en tu guitarra y qué señales indican que debes parar.",
  category: "aprender-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "dolor en los dedos al tocar guitarra",
    "me duelen los dedos al tocar guitarra",
    "cuánto tardan en salir los callos de la guitarra",
    "cómo evitar el dolor de dedos en guitarra",
    "callos en los dedos por la guitarra",
    "cuerdas de guitarra que no lastimen los dedos",
  ],
  intro: [
    "Sí. Durante las primeras semanas es normal que las yemas de la mano que pisa las cuerdas duelan, ardan un poco o queden marcadas con la línea de la cuerda. La piel no está acostumbrada a presionar un alambre contra el traste y necesita tiempo para engrosarse y formar callo. Con práctica corta y casi diaria, la molestia suele bajar entre la segunda y la cuarta semana.",
    "Lo que no es normal es el dolor en articulaciones, muñeca o antebrazo, el hormigueo o el adormecimiento. Aquí te explicamos cómo diferenciar una cosa de la otra, cómo practicar para que duela menos y qué revisar en tu guitarra si duele más de la cuenta.",
  ],
  keyTakeaways: [
    "Las yemas sensibles, marcadas o con ardor leve las primeras semanas son parte normal del proceso.",
    "Varias sesiones cortas al día duelen menos y forman callo mejor que una sola sesión larga.",
    "Presiona solo lo necesario, justo detrás del traste: apretar de más duele y además desafina.",
    "Cuerdas más livianas y una guitarra con la acción bien ajustada reducen mucho el esfuerzo.",
    "El dolor en articulaciones, muñeca o antebrazo, el hormigueo y el adormecimiento no son normales: para y consulta.",
  ],
  sections: [
    {
      id: "por-que-duelen",
      heading: "Por qué duelen las yemas al empezar",
      blocks: [
        {
          type: "p",
          text: "Al pisar una nota, toda la presión se concentra en una línea delgada de piel sobre la cuerda. En una guitarra de cuerdas metálicas esa línea es más fina y la tensión más alta; por eso marca más que una de nylon. La piel responde como lo hace con cualquier roce repetido: se vuelve más gruesa y firme en ese punto. Ese engrosamiento es el callo, y cuando se forma, presionar deja de molestar.",
        },
        {
          type: "table",
          caption: "Qué es normal y qué no",
          head: ["Lo que sientes", "¿Es normal?", "Qué hacer"],
          rows: [
            ["Yemas sensibles al tacto o marcadas con la línea de la cuerda", "Sí, las primeras semanas", "Sigue con sesiones cortas y frecuentes"],
            ["Ardor leve al final de la práctica", "Sí, al comienzo", "Para ahí y retoma más tarde o al día siguiente"],
            ["La piel de la yema se pela un poco", "Suele pasar mientras se forma el callo", "No la arranques ni la muerdas; deja que se renueve"],
            ["Ampolla en la yema", "Es señal de exceso", "Deja descansar esa mano hasta que sane y vuelve con sesiones más cortas"],
            ["Dolor en nudillos, muñeca, antebrazo o codo", "No", "Para y revisa la postura con tu profe; si persiste, consulta a un médico"],
            ["Hormigueo, adormecimiento o pérdida de fuerza", "No", "Deja de tocar y consulta a un profesional de la salud"],
          ],
        },
      ],
    },
    {
      id: "tu-guitarra-influye",
      heading: "Tu guitarra influye más de lo que crees",
      blocks: [
        {
          type: "p",
          text: "Dos personas con la misma técnica pueden tener experiencias muy distintas según la guitarra. Antes de pensar que “no tienes manos para esto”, revisa estas tres cosas.",
        },
        {
          type: "table",
          caption: "Cómo se sienten los tres tipos de guitarra en las yemas",
          head: ["Guitarra", "Cuerdas", "En las yemas"],
          rows: [
            ["Clásica", "Nylon, tensión baja", "La más amable; marca poco, aunque el mástil es más ancho"],
            ["Acústica de cuerdas metálicas", "Acero, tensión alta", "La que más duele al principio"],
            ["Eléctrica", "Acero, pero delgadas y bajas", "Se pisa con poca presión; el reto es no apretar de más"],
          ],
        },
        { type: "h3", text: "La acción: qué tan altas están las cuerdas" },
        {
          type: "p",
          text: "La acción es la distancia entre las cuerdas y los trastes. Si es alta, tienes que apretar mucho más para que la nota suene, y las yemas lo pagan. Mírala de perfil a la altura del traste 12: si ves un espacio grande o si las notas cerca del traste 1 exigen mucha fuerza, lleva la guitarra a un luthier. Según el caso, puede ajustar el alma del mástil, rebajar el hueso del puente o las ranuras de la cejuela. Es de los arreglos que más cambian la experiencia de un principiante, y en [cómo elegir tu primera guitarra acústica](/blog/como-elegir-tu-primera-guitarra-acustica) te contamos cómo revisarlo antes de comprar.",
        },
        { type: "h3", text: "El calibre de las cuerdas" },
        {
          type: "p",
          text: "En una acústica de acero, un juego de cuerdas más livianas (por ejemplo, calibre 10 u 11 en lugar de 12) se pisa con menos presión. A cambio, suena un poco más delgado y con menos volumen, un intercambio que casi siempre vale la pena al empezar. Una advertencia importante: nunca le pongas cuerdas de acero a una guitarra clásica. No está construida para esa tensión y puede dañarse.",
        },
        { type: "h3", text: "El clima" },
        {
          type: "p",
          text: "La madera se mueve con la humedad. Una guitarra que sale de Bogotá hacia tierra caliente, o al revés, puede cambiar su acción en pocos días. Si de repente te cuesta más pisar, puede no ser tu mano sino la guitarra.",
        },
      ],
    },
    {
      id: "como-practicar-sin-tanto-dolor",
      heading: "Cómo practicar para que duela menos",
      blocks: [
        {
          type: "ul",
          items: [
            "**Reparte la práctica.** Dos o tres bloques de 10 a 15 minutos durante el día duelen menos que una sesión de una hora, y la piel se adapta mejor.",
            "**Busca la presión mínima.** Pisa una nota, afloja hasta que empiece a zumbar y luego aprieta apenas lo necesario para que suene limpia. Ese es tu punto; casi siempre es menos de lo que usabas.",
            "**Pisa justo detrás del traste**, con la punta de la yema y el dedo arqueado. En la mitad del espacio necesitas más fuerza.",
            "**Suelta el pulgar.** Si aprieta el mástil como una pinza, todos los dedos terminan apretando de más.",
            "**Uñas cortas** en la mano que pisa, para que la yema llegue de frente a la cuerda.",
            "**Cuida el momento.** Muchos guitarristas notan que tocar justo después de bañarse o de lavar la loza duele más: la piel húmeda está más blanda.",
            "**Alterna con tareas sin presión.** Mientras las yemas descansan, practica el rasgueo con las cuerdas apagadas, lee, canta la melodía o entrena el oído con el [juego de intervalos](/herramientas/entrenamiento-auditivo).",
          ],
        },
        {
          type: "p",
          text: "La constancia también cuenta al revés: si dejas de tocar varias semanas, el callo se ablanda y la molestia vuelve un poco al retomar. Pasa más rápido que la primera vez.",
        },
      ],
    },
    {
      id: "callos-y-cuidados",
      heading: "Callos: cómo se forman y cómo cuidarlos",
      blocks: [
        {
          type: "p",
          text: "El callo de guitarrista es una zona de piel más dura y lisa en la yema de los dedos 1 a 4. No hay que hacer nada especial para que salga: aparece con la práctica. Lo que sí conviene es no estropearlo.",
        },
        {
          type: "ul",
          items: [
            "No lo arranques, no lo muerdas y no lo limes a fondo: pierdes lo que tanto te costó.",
            "Si la piel se pela un poco, es parte de la renovación; deja que siga su curso.",
            "Circulan muchos trucos caseros para “endurecer” las yemas más rápido. No los necesitas, y algunos pueden irritar la piel. Lo que funciona es la práctica gradual.",
            "Si la piel se agrieta o se abre, dale descanso a esa mano. Tocar sobre una herida solo retrasa el proceso.",
          ],
        },
        {
          type: "p",
          text: "Con la cejilla aparece una molestia nueva, ahora en el costado del índice, porque es otra zona de la piel la que trabaja. Es normal que pase por un proceso parecido; en nuestra guía para [hacer la cejilla](/blog/como-hacer-la-cejilla-en-guitarra) te explicamos cómo hacerla sin apretar de más.",
        },
      ],
    },
    {
      id: "cuando-no-es-normal",
      heading: "Cuándo el dolor no es normal",
      blocks: [
        {
          type: "p",
          text: "Las yemas son el único lugar donde se espera algo de molestia al empezar. Si el dolor está en otra parte, casi siempre hay tensión o una postura que corregir: la muñeca demasiado doblada, el hombro levantado, la guitarra muy baja o el pulgar apretando. Revisa estas señales:",
        },
        {
          type: "ul",
          items: [
            "Dolor en muñeca, antebrazo, codo, hombro o cuello durante o después de tocar.",
            "Dolor en los nudillos o en las articulaciones de los dedos, no en la piel.",
            "Hormigueo, adormecimiento o sensación de corriente en la mano.",
            "Pérdida de fuerza o torpeza que no mejora con el descanso.",
            "Dolor que sigue al día siguiente o que empeora de una sesión a otra.",
          ],
        },
        {
          type: "callout",
          title: "Ante la duda, para",
          text: "Si aparece cualquiera de estas señales, deja de tocar, descansa y coméntaselo a tu profe para revisar la postura. Si no mejora, consulta a un médico o a un fisioterapeuta. Esta guía no reemplaza una valoración profesional. En [postura y ergonomía para músicos](/blog/postura-y-ergonomia-para-musicos-evitar-lesiones) encontrarás cómo prevenir sobrecargas.",
        },
      ],
    },
    {
      id: "ninos-adultos-y-mayores",
      heading: "Si el alumno es un niño, un adulto o una persona mayor",
      blocks: [
        {
          type: "ul",
          items: [
            "**Niños:** guitarra clásica de nylon en el tamaño adecuado y sesiones cortas. Si se queja de dolor fuerte, se para ese día. Te damos más detalles en [guitarra para niños](/blog/guitarra-para-ninos-guia-para-padres).",
            "**Adultos:** el entusiasmo suele llevar a sesiones largas los primeros días. Ve con calma: es mejor tocar un poco todos los días que lastimarte el lunes y no poder tocar hasta el jueves.",
            "**Personas mayores:** la piel puede ser más delicada y conviene avanzar aún más gradual. Si tienes alguna condición en las manos o las articulaciones, coméntala con tu médico y con tu profe antes de empezar.",
          ],
        },
        {
          type: "p",
          text: "En las clases de [guitarra acústica](/clases/guitarra-acustica), el profe revisa desde la primera sesión cómo pisas, cómo está tu guitarra y cuánto deberías practicar para que el proceso sea llevadero.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto tardan en salir los callos de la guitarra?",
      answer:
        "Con práctica casi diaria, la molestia suele bajar entre la segunda y la cuarta semana, y el callo sigue afirmándose en los meses siguientes. Si practicas pocas veces a la semana, el proceso tarda más.",
    },
    {
      question: "¿Debo seguir tocando si me duelen las yemas?",
      answer:
        "Si es una molestia leve, sí, en sesiones cortas. Si arde mucho, aparece una ampolla o la piel se abre, descansa esa mano hasta que se recupere. Puedes seguir practicando rasgueo, lectura u oído sin presionar las cuerdas.",
    },
    {
      question: "¿Las cuerdas de nylon duelen menos que las de acero?",
      answer:
        "Sí. Tienen menos tensión y son más gruesas y blandas, así que reparten mejor la presión. Por eso la guitarra clásica suele recomendarse para niños. Si ya tienes una acústica de acero, un calibre más liviano y una buena calibración también ayudan mucho.",
    },
    {
      question: "¿Es normal que me duelan los dedos después de años sin tocar?",
      answer:
        "Sí, el callo se ablanda cuando dejas de practicar. La buena noticia es que al retomar vuelve más rápido que la primera vez. Empieza con sesiones cortas, como si fueras principiante, durante un par de semanas.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica"],
  relatedPostSlugs: [
    "como-hacer-la-cejilla-en-guitarra",
    "como-elegir-tu-primera-guitarra-acustica",
    "cuanto-tiempo-toma-aprender-guitarra",
  ],
  cta: "clases",
};
