import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-prepararte-para-tu-primer-recital",
  title: "Cómo prepararte para tu primer recital de música",
  description:
    "Guía para tu primer recital: qué hacer en las semanas previas, cómo ensayar en condiciones reales, qué llevar y cómo vivir el día de la presentación.",
  excerpt:
    "Un buen recital se prepara semanas antes. Este cronograma te dice qué hacer en cada etapa, qué llevar y cómo manejar el día de la presentación.",
  category: "aprender-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo prepararse para un recital",
    "primer recital de piano",
    "consejos para un recital de música",
    "qué hacer antes de un recital",
    "qué ponerse para un recital de música",
    "recital de violín para niños",
  ],
  intro: [
    "Para tu primer recital, ten la obra lista unas semanas antes de la fecha, no la noche anterior. Ese tiempo extra es para \"rodarla\": tocarla completa sin parar, frente a otras personas y en condiciones parecidas a las del día real. La última semana no se aprende nada nuevo; se afina lo que ya está.",
    "Aquí tienes un cronograma semana a semana, cómo ensayar según tu instrumento, qué llevar y qué hacer desde que llegas al lugar hasta el saludo final.",
  ],
  keyTakeaways: [
    "Elige con tu profe una obra un poco por debajo de tu nivel máximo: en el escenario tu nivel baja un poco.",
    "La obra debe estar completa y segura al menos dos semanas antes; el resto del tiempo es para rodarla.",
    "Ensaya todo el ritual: entrar, saludar, acomodarte, afinar, empezar y terminar, con la ropa y los zapatos del día.",
    "La última semana no cambies digitaciones, arcos ni respiraciones.",
    "Si te equivocas, sigue tocando: detenerse se nota mucho más que una nota fallada.",
  ],
  sections: [
    {
      id: "elegir-la-obra",
      heading: "Elige una obra que puedas tocar con margen",
      blocks: [
        {
          type: "p",
          text: "El primer recital no es el momento de estrenar la pieza más difícil que has intentado. Escoge con tu profe algo que ya te salga bien en casa y que puedas disfrutar. Con los nervios, lo que está en el límite suele romperse; lo que tiene margen, aguanta.",
        },
        {
          type: "ul",
          items: [
            "Que te guste: vas a tocarla muchas veces en las próximas semanas.",
            "Que tenga una duración adecuada al formato del recital; en recitales de estudiantes suelen ser obras cortas.",
            "Que su pasaje más difícil ya salga limpio a un tempo cercano al final.",
            "Para niños, que sea una pieza que reconozcan y quieran mostrar a la familia.",
          ],
        },
      ],
    },
    {
      id: "cronograma-semanas-previas",
      heading: "Cronograma: de seis semanas antes al día anterior",
      blocks: [
        {
          type: "table",
          caption: "Plan de preparación para un recital",
          head: ["Momento", "Objetivo", "Qué hacer"],
          rows: [
            ["Seis a cuatro semanas antes", "Notas y ritmo seguros", "Resolver pasajes difíciles lento y por fragmentos, fijar digitaciones"],
            ["Cuatro a tres semanas antes", "Tempo final y expresión", "Subir el tempo con metrónomo, trabajar dinámicas y fraseo, memorizar si aplica"],
            ["Dos semanas antes", "Tocar completo sin parar", "Pasadas de principio a fin, grabarte, tocar para la familia"],
            ["Última semana", "Estabilidad", "Ensayos generales, pasadas lentas de control, ningún cambio nuevo"],
            ["Día anterior", "Descanso", "Una pasada tranquila, preparar ropa, partitura e instrumento, dormir bien"],
          ],
        },
        {
          type: "p",
          text: "Para subir el tempo sin perder limpieza, usa el [metrónomo](/herramientas/metronomo) de a pocas pulsaciones y vuelve atrás si el pasaje se desordena. Y si vas a tocar sin partitura, empieza a memorizar temprano: te explicamos cómo en [cómo memorizar una pieza musical](/blog/como-memorizar-una-pieza-musical).",
        },
      ],
    },
    {
      id: "ensayos-como-el-dia-real",
      heading: "Ensayos que simulan el día real",
      blocks: [
        {
          type: "p",
          text: "Tocar bien en tu cuarto no es lo mismo que tocar en un salón con gente. Acerca tus ensayos a las condiciones reales:",
        },
        {
          type: "ul",
          items: [
            "Haz pasadas completas sin detenerte, pase lo que pase. Es una habilidad distinta a practicar por fragmentos.",
            "Ensaya el ritual completo: entrar, saludar, acomodar banco o atril, afinar, respirar, empezar y terminar con el saludo.",
            "Toca al menos una vez con la ropa y los zapatos del recital. Un zapato nuevo cambia cómo pisas el pedal o cómo te paras.",
            "Si tienes acompañante, ensaya con esa persona varias veces, no solo el día anterior.",
          ],
        },
        { type: "h3", text: "Si tocas piano" },
        {
          type: "p",
          text: "Pregunta si puedes probar el piano del lugar. Si no, practica en otros pianos que tengas a mano: el peso de las teclas y la respuesta del pedal cambian mucho. Aprende a ajustar la altura del banco en segundos. En [clases de piano](/clases/piano) puedes pedirle a tu profe que simule el recital completo en una sesión.",
        },
        { type: "h3", text: "Si tocas violín" },
        {
          type: "p",
          text: "Practica afinar rápido y en silencio, con el [afinador de violín](/herramientas/afinador/violin) y luego de oído con el acompañante. Revisa las cuerdas unos días antes, no la mañana del recital, para que una cuerda nueva alcance a estabilizarse.",
        },
        { type: "h3", text: "Si cantas" },
        {
          type: "p",
          text: "Ensaya con la pista o el acompañante exactamente como será el día: misma tonalidad, misma introducción, y con micrófono si lo vas a usar. Practica tu entrada después de la introducción sin mirar a nadie para contar.",
        },
      ],
    },
    {
      id: "que-llevar",
      heading: "Qué llevar el día del recital",
      blocks: [
        {
          type: "table",
          caption: "Lista de chequeo por instrumento",
          head: ["Instrumento", "No olvides"],
          rows: [
            ["Todos", "Partitura (aunque toques de memoria), agua, algo liviano de comer, pañuelo para secar las manos"],
            ["Piano", "Zapatos cómodos de suela delgada para el pedal, cojín si lo necesitas para la altura"],
            ["Violín y viola", "Colofonia, cuerdas de repuesto, hombrera, afinador y paño de limpieza"],
            ["Guitarra", "Cuerdas de repuesto, afinador, apoyapié o soporte, uñas limadas si tocas clásica"],
            ["Canto", "Agua a temperatura ambiente, la pista en el celular y en una segunda copia"],
            ["Vientos", "Cañas de repuesto ya probadas, aceite o grasa, paño para el agua condensada"],
          ],
        },
        {
          type: "p",
          text: "Sobre la ropa: elegante pero cómoda. Si tienes que levantar los brazos, sentarte o respirar profundo, pruébate la ropa tocando antes del día.",
        },
      ],
    },
    {
      id: "el-dia-del-recital",
      heading: "El día del recital, paso a paso",
      blocks: [
        {
          type: "ol",
          items: [
            "Come algo liviano unas horas antes. Tocar con hambre o muy lleno afecta la concentración y la respiración.",
            "Llega con tiempo de sobra. En Bogotá, cuenta con el tráfico y con el frío: lleva algo para mantener las manos calientes.",
            "Reconoce el espacio: dónde te vas a parar o sentar, por dónde entras y cómo se oye la sala.",
            "Calienta poco y suave. No repases la obra completa una y otra vez tras bambalinas.",
            "Afina tu instrumento y déjalo listo antes de tu turno.",
            "Mientras esperas, respira lento y escucha a los demás en lugar de pensar en tus errores posibles.",
            "Al salir, saluda, acomódate sin prisa y piensa el tempo de la primera frase antes de empezar.",
            "Si algo falla, continúa. Al terminar, espera un instante, baja el instrumento y agradece el aplauso.",
          ],
        },
        {
          type: "p",
          text: "Si los nervios son tu principal preocupación, te damos herramientas concretas en [cómo vencer el miedo escénico](/blog/como-vencer-el-miedo-escenico).",
        },
      ],
    },
    {
      id: "si-es-el-recital-de-tu-hijo",
      heading: "Si es el primer recital de tu hijo",
      blocks: [
        {
          type: "ul",
          items: [
            "Semanas antes, llévalo a ver algún concierto o recital para que sepa cómo es el ambiente.",
            "Practiquen en casa la entrada y el saludo como un juego, con la familia de público.",
            "Antes de salir, recuérdale que disfrute; evita frases como \"no te vayas a equivocar\".",
            "Graba sin flash y sin distraerlo desde la primera fila.",
            "Al terminar, celebra el esfuerzo y la valentía. Los comentarios técnicos se los deja el profe para la siguiente clase.",
          ],
        },
        {
          type: "p",
          text: "Un recital bien vivido deja ganas de volver a tocar. Uno con presión excesiva puede dejar lo contrario, sobre todo en niños pequeños.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Tengo que tocar de memoria en mi primer recital?",
      answer:
        "Depende del recital y de lo que acuerdes con tu profe. En recitales de estudiantes es común tocar con partitura, sobre todo la primera vez. Si decides tocar de memoria, empieza a memorizar semanas antes y ten la partitura a mano igual.",
    },
    {
      question: "¿Qué hago si me equivoco en pleno recital?",
      answer:
        "Sigue tocando con el pulso y retoma en el siguiente punto seguro de la obra. No repitas el pasaje ni hagas gestos. El público casi siempre recuerda la sensación general, no una nota.",
    },
    {
      question: "¿Qué ropa es adecuada para un recital de música?",
      answer:
        "Ropa formal o semiformal en la que te puedas mover y respirar con libertad. Pruébala tocando antes: mangas anchas, faldas muy cortas o zapatos nuevos pueden molestar según el instrumento.",
    },
    {
      question: "¿Es bueno practicar mucho el mismo día del recital?",
      answer:
        "No. Una o dos pasadas tranquilas y un calentamiento corto son suficientes. Practicar demasiado cansa las manos o la voz y aumenta la ansiedad justo antes de tocar.",
    },
  ],
  relatedCourseIds: ["piano", "violin", "canto"],
  relatedPostSlugs: [
    "como-vencer-el-miedo-escenico",
    "como-memorizar-una-pieza-musical",
    "como-practicar-musica-en-casa",
  ],
  cta: "clases",
};
