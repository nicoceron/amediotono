import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-vencer-el-miedo-escenico",
  title: "Cómo vencer el miedo escénico al tocar o cantar",
  description:
    "Cómo vencer el miedo escénico al tocar o cantar en público: preparación a fondo, respiración, exposición gradual y qué pensar antes de salir a escena.",
  excerpt:
    "Los nervios no desaparecen del todo, ni siquiera en músicos con experiencia. La meta es tocar bien con ellos, y eso se entrena.",
  category: "aprender-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo vencer el miedo escénico",
    "miedo escénico al cantar",
    "nervios antes de tocar en público",
    "cómo controlar los nervios en una presentación musical",
    "pánico escénico músicos",
    "me tiemblan las manos al tocar",
  ],
  intro: [
    "El miedo escénico no se elimina: se entrena. Se vence con tres herramientas que funcionan juntas: una preparación que va más allá de \"en la casa me sale\", presentaciones pequeñas antes de las grandes y recursos concretos para el cuerpo (respiración, soltar tensión) y para la cabeza (en qué pones la atención).",
    "Sentir nervios antes de tocar o cantar es normal, incluso en músicos con muchos años de escenario. La diferencia es que ellos saben qué les pasa en el cuerpo y tienen un plan para cuando aparece.",
  ],
  keyTakeaways: [
    "Los nervios son una reacción normal del cuerpo; el objetivo no es no sentirlos, sino tocar bien con ellos.",
    "Una obra preparada con margen, que puedes empezar desde varios puntos, es la mejor defensa contra el miedo.",
    "Exhalar más largo de lo que inhalas y soltar hombros y mandíbula ayuda a bajar revoluciones antes de salir.",
    "Sube la exposición por escalones: grabarte, tocar para una persona, para la familia y luego para un público.",
    "Si te equivocas, sigue: el público recuerda la música, no la nota fallada.",
  ],
  sections: [
    {
      id: "que-le-pasa-a-tu-cuerpo",
      heading: "Qué le pasa a tu cuerpo cuando te pones nervioso",
      blocks: [
        {
          type: "p",
          text: "Frente a una situación que el cerebro percibe como riesgosa, el cuerpo se prepara para reaccionar: el corazón se acelera, la respiración se vuelve corta y alta, la sangre se concentra en los músculos grandes. Es útil para correr, no tanto para hacer movimientos finos con los dedos o controlar el aire. Conocer cada síntoma te permite tener una respuesta para cada uno:",
        },
        {
          type: "table",
          caption: "Síntomas frecuentes y cómo manejarlos",
          head: ["Síntoma", "Cómo afecta al tocar o cantar", "Qué ayuda"],
          rows: [
            ["Manos frías o sudorosas", "Dedos torpes en piano y guitarra, arco que resbala", "Calentar las manos con agua tibia y hacer un ejercicio técnico corto"],
            ["Temblor", "Arco inestable en violín, embocadura que vibra en vientos", "Notas largas, sentir el peso del brazo en lugar de apretar"],
            ["Boca seca", "Cantantes e instrumentistas de viento pierden control", "Hidratarte durante el día y tener agua cerca"],
            ["Respiración corta", "Frases que se quedan sin aire", "Respiración baja y lenta antes de empezar"],
            ["Pulso acelerado", "Tendencia a correr el tempo", "Pensar el tempo de la primera frase antes de tocar"],
            ["Mente en blanco", "Lagunas de memoria", "Puntos de anclaje preparados en la obra"],
          ],
        },
      ],
    },
    {
      id: "preparacion-con-margen",
      heading: "Prepárate con margen: la mitad del trabajo pasa antes",
      blocks: [
        {
          type: "p",
          text: "Con nervios, tu nivel baja un poco. Por eso la obra tiene que estar más sólida de lo que parece necesario. Estas son señales de que está lista para presentarse:",
        },
        {
          type: "ul",
          items: [
            "La tocas completa sin parar, aunque haya un error, varias veces seguidas.",
            "Puedes empezar desde el inicio de cualquier sección, no solo desde el primer compás.",
            "Te sale bien a un tempo un poco más lento y un poco más rápido que el final.",
            "La has tocado \"en frío\", sin calentar mucho, como puede pasar el día de la presentación.",
            "Si tocas [piano](/clases/piano), la has probado en un instrumento distinto al tuyo: cada teclado y cada pedal responden diferente.",
            "Sabes cantar la melodía o decir los acordes sin el instrumento.",
          ],
        },
        {
          type: "p",
          text: "Si vas a tocar de memoria, trabaja con varios tipos de memoria y no solo con la de los dedos. Te explicamos cómo en [cómo memorizar una pieza musical](/blog/como-memorizar-una-pieza-musical).",
        },
      ],
    },
    {
      id: "respiracion-y-cuerpo",
      heading: "Respiración y cuerpo: qué hacer en los minutos previos",
      blocks: [
        {
          type: "p",
          text: "Mientras esperas tu turno no es momento de repasar la obra entera. Es momento de preparar el cuerpo:",
        },
        {
          type: "ol",
          items: [
            "Respira por la nariz contando hasta cuatro y suelta el aire por la boca contando hasta seis u ocho. Repite varias veces: exhalar más largo que inhalar ayuda a muchas personas a calmarse.",
            "Sacude suavemente brazos y manos, sube los hombros hacia las orejas y déjalos caer.",
            "Abre y cierra la mandíbula despacio; la tensión en la cara se va directo a la voz y a la embocadura.",
            "Siente los pies apoyados en el piso y el peso del cuerpo. Parece simple, pero te devuelve al presente.",
            "Haz un calentamiento corto con tu instrumento o con la voz, sin intentar arreglar nada a última hora.",
          ],
        },
        {
          type: "p",
          text: "Si cantas, el control del aire es todavía más importante. En [clases de canto](/clases/canto) se trabaja la respiración de forma técnica, y te sirve tanto para cantar mejor como para llegar más tranquilo al escenario. Tienes rutinas concretas en [ejercicios de respiración para cantar](/blog/ejercicios-de-respiracion-para-cantar).",
        },
      ],
    },
    {
      id: "exposicion-gradual",
      heading: "Exposición gradual: de la sala de tu casa al escenario",
      blocks: [
        {
          type: "p",
          text: "El miedo baja cuando la experiencia de tocar frente a otros deja de ser nueva. La clave es subir por escalones y repetir cada uno varias veces antes de pasar al siguiente:",
        },
        {
          type: "table",
          caption: "Escalera de exposición para músicos",
          head: ["Escalón", "Frente a quién", "Qué practicas"],
          rows: [
            ["1", "Tu celular grabando", "Tocar completo sin parar, sabiendo que queda registro"],
            ["2", "Una persona de confianza", "Que alguien te mire y escuche"],
            ["3", "La familia o un grupo de amigos", "Presentarte, saludar y tocar"],
            ["4", "Una videollamada o una transmisión corta", "Tocar para personas que no ves bien"],
            ["5", "Una audición de la escuela o un recital de estudiantes", "Un público real, en un ambiente amable"],
            ["6", "Un evento abierto, una misa, una tarima del colegio", "Tocar en condiciones que no controlas del todo"],
          ],
        },
        {
          type: "p",
          text: "Tu clase también es un escenario: pídele a tu profe que te deje tocar la obra completa, de principio a fin y sin interrupciones, como si fuera la presentación. Luego hablan de lo que pasó.",
        },
      ],
    },
    {
      id: "que-pensar-antes-y-durante",
      heading: "Qué pensar antes y durante la presentación",
      blocks: [
        { type: "h3", text: "Antes de empezar" },
        {
          type: "p",
          text: "Cambia la pregunta \"¿qué van a pensar de mí?\" por \"¿qué quiero que sientan con esta música?\". Pon la atención en el carácter de la obra y canta mentalmente la primera frase al tempo correcto antes de tocar la primera nota. Un comienzo claro ordena todo lo demás.",
        },
        {
          type: "p",
          text: "También ayuda nombrar lo que sientes de otra manera: el corazón acelerado y la energía extra son activación, la misma que sientes antes de algo que te emociona. No tienes que convencerte de estar tranquilo; basta con no pelear contra la sensación.",
        },
        { type: "h3", text: "Si te equivocas" },
        {
          type: "p",
          text: "Sigue. No repitas, no hagas gestos, no pidas disculpas con la cara. Salta al siguiente punto de anclaje y continúa con el pulso. La mayoría de errores pasan inadvertidos para el público; lo que sí se nota es detenerse.",
        },
        {
          type: "callout",
          title: "Cuándo pedir ayuda profesional",
          text: "Si la ansiedad es tan intensa que te impide presentarte, aparece también fuera de la música o te hace sufrir durante días, habla con un profesional de la salud mental. Tu profe de música te acompaña en lo musical, pero no reemplaza esa ayuda.",
        },
      ],
    },
    {
      id: "despues-de-tocar",
      heading: "Después de tocar: cómo aprender de cada presentación",
      blocks: [
        {
          type: "ul",
          items: [
            "Antes de juzgarte, anota tres cosas que salieron bien. Tu memoria tiende a quedarse solo con los errores.",
            "Escoge una sola cosa para mejorar en la próxima presentación.",
            "Mira la grabación al día siguiente, no apenas bajas del escenario. Casi siempre sonó mejor de lo que sentiste.",
            "Cuéntale a tu profe qué te pasó con los nervios para ajustar la preparación de la próxima vez.",
          ],
        },
        {
          type: "p",
          text: "Si tu próximo reto es presentarte por primera vez, sigue nuestra guía para [preparar tu primer recital](/blog/como-prepararte-para-tu-primer-recital): ahí encontrarás el cronograma de ensayos y qué hacer el día de la presentación.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿El miedo escénico se quita con la experiencia?",
      answer:
        "Suele disminuir mucho, pero rara vez desaparece del todo. Con cada presentación aprendes cómo reacciona tu cuerpo y qué te funciona, y los nervios pasan de bloquearte a darte energía.",
    },
    {
      question: "¿Por qué me tiemblan las manos cuando toco frente a otros?",
      answer:
        "Es parte de la reacción de alerta del cuerpo. Ayuda calentar las manos, respirar con exhalaciones largas y, al tocar, pensar en el peso del brazo en lugar de apretar con los dedos. Con la exposición gradual el temblor suele bajar.",
    },
    {
      question: "¿Qué hago si me quedo en blanco a mitad de la canción?",
      answer:
        "Sigue el pulso y salta al siguiente punto que tengas preparado para retomar, como el coro o el inicio de una sección. Por eso conviene ensayar empezando desde varios lugares de la obra, no siempre desde el principio.",
    },
    {
      question: "¿Cómo ayudo a mi hijo si le dan nervios antes de una presentación?",
      answer:
        "Normaliza lo que siente, practiquen juntos en casa la entrada y el saludo, y después de tocar habla primero de lo que salió bien. Evita frases como \"no te vayas a equivocar\", que ponen la atención justo en el error.",
    },
  ],
  relatedCourseIds: ["canto", "piano"],
  relatedPostSlugs: [
    "como-prepararte-para-tu-primer-recital",
    "como-memorizar-una-pieza-musical",
    "ejercicios-de-respiracion-para-cantar",
  ],
  cta: "clases",
};
