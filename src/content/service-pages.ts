import type { FaqItem } from "@/lib/content-types";

/**
 * Copy for the service pages (/clases-de-musica-a-domicilio-bogota,
 * /clases-de-musica-online, /preuniversitario-musica). The pages render it
 * with their own icons and layout; src/lib/markdown.ts turns the same data
 * into the pages' Markdown twins and their llms-full.txt sections.
 */
export type ServicePoint = {
  title: string;
  body: string;
  /** Blog slug of the guide that explains this point in depth. */
  guide?: string;
};

export type ServiceSection = {
  heading: string;
  intro?: string;
  points: ServicePoint[];
  /** Shown after the points as an "Importante" callout. */
  note?: string;
};

export type ServicePage = {
  path: string;
  /** The page's H1. */
  title: string;
  description: string;
  lead: string;
  sections: ServiceSection[];
  guidesHeading: string;
  /** Blog slugs listed under guidesHeading. */
  guides: string[];
  faqs: FaqItem[];
};

export const HOME_CLASSES_PAGE: ServicePage = {
  path: "/clases-de-musica-a-domicilio-bogota",
  title: "Clases de música a domicilio en Bogotá",
  description:
    "Clases de música a domicilio en Bogotá: piano, canto, guitarra, violín, batería y más, con profes evaluados que van a tu casa. Para niños, jóvenes y adultos.",
  lead:
    "Un profe de música evaluado va a tu casa en Bogotá y alrededores. Piano, canto, guitarra, violín, batería, vientos e iniciación musical para niños, jóvenes y adultos.",
  sections: [
    {
      heading: "Por qué elegir clases a domicilio",
      points: [
        {
          title: "En tu casa, con tu instrumento",
          body: "Aprendes en el piano, la guitarra o la batería con los que vas a practicar toda la semana.",
        },
        {
          title: "Sin trancones de tu lado",
          body: "El profe llega a tu casa: tú no pierdes tiempo en desplazamientos ni en esperas.",
        },
        {
          title: "Ideal para niños y familias",
          body: "Los niños aprenden en un entorno conocido y los papás pueden ver cómo avanza la clase.",
        },
        {
          title: "Profes evaluados",
          body: "Cada profe pasa por una evaluación musical, pedagógica y de perfil antes de dar clases.",
        },
      ],
    },
    {
      heading: "Cómo empezar",
      points: [
        {
          title: "Nos escribes",
          body: "Por WhatsApp nos cuentas el instrumento, la edad del estudiante, tu barrio y los horarios que te sirven.",
        },
        {
          title: "Te recomendamos profe",
          body: "Te proponemos el profe que mejor encaja con tus objetivos y su disponibilidad en tu zona.",
        },
        {
          title: "Empiezan las clases",
          body: "Acordamos día y hora fijos, y el profe llega a tu casa con el plan de la primera clase.",
        },
      ],
    },
  ],
  guidesHeading: "Guías sobre clases a domicilio",
  guides: [
    "clases-de-musica-a-domicilio-que-esperar",
    "clases-de-musica-a-domicilio-o-virtuales",
    "clases-de-musica-hibridas-virtual-y-presencial",
    "como-elegir-profesor-de-musica",
  ],
  faqs: [
    {
      question: "¿A qué zonas de Bogotá van los profes?",
      answer:
        "Damos clases a domicilio en Bogotá y alrededores. La cobertura depende del barrio y de la disponibilidad de cada profe, así que escríbenos con tu dirección aproximada y te confirmamos.",
    },
    {
      question: "¿Necesito tener el instrumento en casa?",
      answer:
        "Para piano o batería, sí: el profe no puede llevarlos. Para guitarra, violín o vientos también conviene tener el tuyo para practicar entre clases. Si aún no lo tienes, te orientamos: mira [cómo elegir tu primer piano o teclado](/blog/como-elegir-tu-primer-piano-o-teclado) o [tu primera guitarra acústica](/blog/como-elegir-tu-primera-guitarra-acustica).",
    },
    {
      question: "¿Las clases a domicilio sirven para niños pequeños?",
      answer:
        "Sí. Para los más pequeños recomendamos empezar con [iniciación musical](/clases/iniciacion-musical), una clase de juego, ritmo y canto que se adapta muy bien a la casa.",
    },
    {
      question: "¿Puedo combinar clases a domicilio y virtuales?",
      answer:
        "Sí. Muchas familias alternan según la semana, por ejemplo cuando hay viajes o días de lluvia. Lo explicamos en [clases híbridas](/blog/clases-de-musica-hibridas-virtual-y-presencial).",
    },
    {
      question: "¿Cuánto cuestan las clases a domicilio?",
      answer:
        "El valor depende de la duración, la frecuencia y la zona. Escríbenos por WhatsApp y te enviamos las opciones.",
    },
  ],
};

export const ONLINE_CLASSES_PAGE: ServicePage = {
  path: "/clases-de-musica-online",
  title: "Clases de música online en vivo con profes evaluados",
  description:
    "Clases de música online en vivo desde cualquier ciudad de Colombia: piano, canto, guitarra, violín y más, con profes evaluados y seguimiento semanal.",
  lead:
    "Aprende piano, canto, guitarra, violín, vientos o teoría desde cualquier ciudad de Colombia, con clases en vivo por videollamada y un profe que te acompaña cada semana.",
  sections: [
    {
      heading: "Por qué elegir clases online",
      points: [
        {
          title: "Desde cualquier ciudad",
          body: "Medellín, Cali, Barranquilla, un municipio o fuera del país: solo necesitas conexión.",
        },
        {
          title: "Horarios que sí te sirven",
          body: "Sin desplazamientos ni trancones: la clase empieza cuando abres la videollamada.",
        },
        {
          title: "Profe elegido para ti",
          body: "Accedes a todo el equipo, sin depender de quién vive cerca.",
        },
        {
          title: "Clase en vivo, no un curso grabado",
          body: "Tu profe te escucha, corrige en el momento y ajusta la clase a tu ritmo.",
        },
      ],
    },
    {
      heading: "Lo que necesitas para tu primera clase",
      points: [
        {
          title: "Conexión estable",
          body: "Wifi o datos con buena señal; mejor si estás cerca del router.",
        },
        {
          title: "Cámara bien ubicada",
          body: "Que se vean tus manos y tu postura: de lado para piano, de frente para canto.",
        },
        {
          title: "Audio claro",
          body: "Micrófono del celular o del computador; audífonos si hay eco.",
        },
      ],
    },
  ],
  guidesHeading: "Guías para aprovechar tus clases online",
  guides: [
    "por-que-tomar-clases-de-musica-online",
    "como-preparar-tu-espacio-para-clases-virtuales-de-musica",
    "equipo-para-clases-virtuales-de-musica-camara-microfono",
    "clases-de-musica-a-domicilio-o-virtuales",
  ],
  faqs: [
    {
      question: "¿De verdad se puede aprender música por videollamada?",
      answer:
        "Sí. Canto, teoría, piano y guitarra se adaptan muy bien, y la mayoría de instrumentos funcionan con una buena ubicación de cámara. Lo importante es que la clase sea en vivo y con seguimiento. Te contamos ventajas y límites en [por qué tomar clases de música online](/blog/por-que-tomar-clases-de-musica-online).",
    },
    {
      question: "¿Qué plataforma usan?",
      answer:
        "Una videollamada común desde el celular, la tableta o el computador. Tu profe te comparte el enlace y, si hace falta, te ayuda a configurar el audio antes de la primera clase.",
    },
    {
      question: "¿Sirven para niños?",
      answer:
        "Sí, con un adulto cerca en las primeras clases para ayudar con la cámara y la atención. Mira nuestra guía para [acompañar a tu hijo en clases virtuales](/blog/como-acompanar-a-tu-hijo-en-clases-virtuales-de-musica).",
    },
    {
      question: "¿Puedo combinar clases online y a domicilio?",
      answer:
        "Si vives en Bogotá o alrededores, sí: muchas familias combinan ambos formatos según la semana. Mira nuestras [clases de música a domicilio en Bogotá](/clases-de-musica-a-domicilio-bogota) y cómo funcionan las [clases híbridas](/blog/clases-de-musica-hibridas-virtual-y-presencial).",
    },
    {
      question: "¿Cuánto cuestan las clases online?",
      answer:
        "El valor depende de la duración y la frecuencia. Escríbenos por WhatsApp y te enviamos las opciones.",
    },
  ],
};

export const PREUNIVERSITARIO_PAGE: ServicePage = {
  path: "/preuniversitario-musica",
  title: "Preuniversitario de música: prepárate para la prueba de admisión",
  description:
    "Prepárate para la prueba de admisión de música con clases de teoría, solfeo, dictado e instrumento. Virtual o a domicilio en Bogotá, con plan a tu medida.",
  lead:
    "Clases de teoría, solfeo, dictado e instrumento con profes, virtuales o a domicilio en Bogotá, para que llegues a la prueba específica de la universidad que elijas con todo trabajado.",
  sections: [
    {
      heading: "Qué preparamos",
      intro:
        "Las pruebas específicas de música en Colombia suelen evaluar estos componentes. Cada universidad los combina y pondera distinto.",
      points: [
        {
          title: "Aptitud y entrenamiento auditivo",
          body: "Repetir ritmos, melodías e intervalos de oído y fortalecer la memoria musical.",
          guide: "que-es-un-intervalo-musical",
        },
        {
          title: "Teoría y gramática",
          body: "Tonalidades, armaduras, escalas, intervalos, tríadas y acordes de séptima; armonía cuando la prueba la pide.",
          guide: "escalas-mayores-y-menores-explicadas",
        },
        {
          title: "Dictado",
          body: "Dictado rítmico, melódico, de intervalos y armónico, con un método progresivo.",
          guide: "dictado-musical-como-prepararlo",
        },
        {
          title: "Lectura rítmica y melódica",
          body: "Solfeo entonado y lectura a primera vista, como se evalúa frente a un jurado.",
          guide: "lectura-ritmica-y-melodica-para-la-prueba-de-admision",
        },
        {
          title: "Instrumento o voz",
          body: "Repertorio, escalas y estudios para la audición, con simulacros frente a tu profe.",
          guide: "repertorio-para-la-audicion-de-admision",
        },
        {
          title: "Entrevista",
          body: "Cómo contar tu recorrido musical y tu motivación, clave en muchas licenciaturas.",
          guide: "entrevista-de-admision-en-musica",
        },
      ],
    },
    {
      heading: "Cómo funciona",
      points: [
        {
          title: "Diagnóstico",
          body: "Revisamos tu nivel actual, la universidad y el programa al que apuntas y la fecha de la prueba.",
        },
        {
          title: "Plan semana a semana",
          body: "Armamos un plan hacia la fecha de la prueba, con metas claras de teoría, oído e instrumento.",
        },
        {
          title: "Clases con profes",
          body: "Teoría, solfeo y dictado con profes de teoría musical, e instrumento con un profe de tu instrumento.",
        },
        {
          title: "Simulacros",
          body: "Practicas dictados, lectura a primera vista y tu audición en condiciones parecidas a las de la prueba.",
        },
      ],
      note: "No estamos afiliados a ninguna universidad y ninguna preparación garantiza la admisión. Los requisitos cambian en cada convocatoria: revisa siempre el instructivo o la guía del aspirante vigente de tu universidad.",
    },
  ],
  guidesHeading: "Guías por universidad y carrera",
  guides: [
    "examen-de-admision-musica-universidad-nacional",
    "admision-musica-universidad-distrital-asab",
    "admision-licenciatura-en-musica-universidad-pedagogica",
    "admision-musica-universidad-javeriana",
    "admision-musica-universidad-de-los-andes",
    "admision-musica-universidad-el-bosque",
    "admision-musica-universidad-de-antioquia",
    "admision-musica-eafit",
    "admision-musica-universidad-del-valle",
    "admision-musica-universidad-del-atlantico",
    "admision-musica-uis",
    "admision-musica-conservatorio-del-tolima",
    "admision-musica-universidad-de-caldas",
    "estudiar-musica-en-medellin-cali-y-otras-ciudades",
    "carreras-de-musica-en-colombia",
    "maestro-en-musica-o-licenciatura-en-musica",
  ],
  faqs: [
    {
      question: "¿Con cuánto tiempo de anticipación debo empezar a prepararme?",
      answer:
        "Depende de tu punto de partida. Si ya lees música y tocas con soltura, unos meses de trabajo enfocado pueden ser suficientes; si empiezas desde cero en teoría y dictado, conviene empezar con más tiempo. En el diagnóstico te damos una recomendación honesta.",
    },
    {
      question: "¿Me sirve si soy autodidacta?",
      answer:
        "Sí. Muchos aspirantes tocan muy bien de oído pero nunca han estudiado teoría ni dictado. El plan se enfoca justamente en lo que te falta para la prueba específica.",
    },
    {
      question: "¿Puedo prepararme si vivo fuera de Bogotá?",
      answer:
        "Sí. Las clases de teoría, solfeo y dictado funcionan muy bien de forma virtual, y el instrumento también puede trabajarse por videollamada. Mira cómo funcionan nuestras [clases online](/clases-de-musica-online).",
    },
    {
      question: "¿La preparación garantiza que pase la prueba?",
      answer:
        "No, y desconfía de quien lo prometa. La admisión depende de la universidad, del número de cupos y de tu desempeño el día de la prueba. Nuestro objetivo es que llegues con las habilidades trabajadas y sin sorpresas. No estamos afiliados a ninguna universidad.",
    },
    {
      question: "¿Es lo mismo que el preparatorio de una universidad?",
      answer:
        "No. Algunas universidades tienen sus propios programas preparatorios o de extensión. Nuestras clases son particulares y se ajustan a tu nivel, tu horario y la prueba que vas a presentar. Te lo explicamos en [qué es un preuniversitario de música](/blog/preuniversitario-de-musica-que-es).",
    },
  ],
};

export const SERVICE_PAGES = [HOME_CLASSES_PAGE, ONLINE_CLASSES_PAGE, PREUNIVERSITARIO_PAGE];

/** Slug used by the Markdown twin route (/md/servicios/<slug>). */
export function servicePageSlug(page: ServicePage) {
  return page.path.slice(1);
}
