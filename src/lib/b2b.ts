import type { FaqItem } from "@/lib/content-types";

export const B2B_HUB_PATH = "/academias";

export type B2BServiceIcon = "search" | "clipboard" | "chart";

export type B2BService = {
  slug: string;
  path: string;
  /** Short label for cards, selects and navigation. */
  name: string;
  icon: B2BServiceIcon;
  accent: string;
  /** Visible H1. */
  headline: string;
  /** <title> without the brand suffix. */
  seoTitle: string;
  metaDescription: string;
  /** One-line summary for cards. */
  summary: string;
  intro: string;
  idealFor: string[];
  includes: string[];
  steps: Array<{ title: string; body: string }>;
  deliverable: { title: string; items: string[] };
  faqs: FaqItem[];
  keywords: string[];
};

export const B2B_SERVICES: B2BService[] = [
  {
    slug: "seleccion-de-profesores",
    path: `${B2B_HUB_PATH}/seleccion-de-profesores`,
    name: "Selección a la medida",
    icon: "search",
    accent: "var(--blue)",
    headline: "Selección de profesores de música a la medida",
    seoTitle: "Selección de profesores de música para academias",
    metaDescription:
      "Buscamos, escuchamos y evaluamos profes de música para tu academia o colegio. Recibes una terna con audición, clase muestra e informe por candidato.",
    summary:
      "Definimos el perfil contigo, buscamos candidatos, los evaluamos como músicos y como pedagogos y te presentamos una terna lista para decidir.",
    intro:
      "Una hoja de vida no dice si alguien sabe enseñar. Por eso cada candidato que te presentamos pasó por una entrevista estructurada, una audición y una **clase muestra** evaluadas con rúbrica por profes de música. Tú decides con evidencia, no con intuición.",
    idealFor: [
      "Academias de música que abren un nuevo instrumento o una nueva sede.",
      "Colegios que necesitan profe de música, banda, coro o iniciación musical.",
      "Programas de jornada complementaria y cajas de compensación.",
      "Fundaciones y entidades culturales con procesos de formación artística.",
    ],
    includes: [
      "Reunión de diagnóstico para definir el perfil real del cargo: edades, tamaño de grupos, repertorio, horarios e idioma.",
      "Búsqueda de candidatos en nuestra red de profes y en comunidades musicales.",
      "Entrevista estructurada con los mismos criterios para todos los candidatos.",
      "Audición corta y clase muestra ajustadas al nivel de tus estudiantes.",
      "Verificación de referencias y de antecedentes públicos, con autorización de cada candidato.",
      "Informe comparativo de la terna con puntajes, fortalezas y alertas.",
    ],
    steps: [
      {
        title: "Diagnóstico",
        body: "Entendemos tu institución, tus estudiantes y lo que no funcionó antes. Con eso definimos el perfil y la rúbrica.",
      },
      {
        title: "Búsqueda",
        body: "Convocamos candidatos que encajen con el instrumento, las edades y el formato de tus clases.",
      },
      {
        title: "Filtro musical y pedagógico",
        body: "Entrevista, audición y clase muestra. Solo avanza quien demuestra que sabe tocar y sabe enseñar.",
      },
      {
        title: "Verificación",
        body: "Referencias y antecedentes públicos con autorización del candidato. Te orientamos para hacer tu consulta de inhabilidades.",
      },
      {
        title: "Terna y decisión",
        body: "Recibes los mejores perfiles con su informe. Tú entrevistas, eliges y contratas directamente.",
      },
    ],
    deliverable: {
      title: "Qué recibes",
      items: [
        "Terna de candidatos evaluados",
        "Informe por candidato con puntajes de la rúbrica",
        "Grabación o notas de la clase muestra",
        "Resumen de referencias y verificaciones",
        "Seguimiento después de la contratación",
      ],
    },
    faqs: [
      {
        question: "¿Quién contrata al profe?",
        answer:
          "Tu institución. Nosotros evaluamos y te presentamos candidatos; la contratación, el tipo de contrato y las condiciones las defines directamente con el profe que elijas.",
      },
      {
        question: "¿Para qué instrumentos pueden buscar profes?",
        answer:
          "Para los instrumentos que enseñamos en nuestra red —piano, canto, guitarra, cuerdas frotadas, vientos, percusión, teoría e iniciación musical— y también para cargos de banda, coro o música general en colegios.",
      },
      {
        question: "¿Cuánto tarda el proceso?",
        answer:
          "Depende del perfil y de la disponibilidad de agenda de tu equipo para las entrevistas finales. En el diagnóstico acordamos un cronograma y te informamos el avance en cada etapa.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Depende del número de vacantes y del tipo de cargo. Cuéntanos tu necesidad en el formulario y te enviamos una propuesta sin compromiso.",
      },
    ],
    keywords: [
      "selección de profesores de música",
      "cómo contratar profesor de música para colegio",
      "empresa de selección de personal docente Bogotá",
      "headhunter docentes de música",
      "reclutamiento de profesores de música",
    ],
  },
  {
    slug: "evaluacion-de-candidatos",
    path: `${B2B_HUB_PATH}/evaluacion-de-candidatos`,
    name: "Evaluación de candidatos",
    icon: "clipboard",
    accent: "var(--pink)",
    headline: "Evaluación de candidatos a profesor de música",
    seoTitle: "Evaluación de candidatos a profesor de música",
    metaDescription:
      "¿Ya tienes candidatos? Los evaluamos por ti con audición, clase muestra y entrevista estructurada, y te entregamos un informe con puntaje por persona.",
    summary:
      "Tú traes los candidatos; nosotros los escuchamos. Audición, clase muestra y entrevista con rúbrica, e informe por persona.",
    intro:
      "Tu equipo de talento humano sabe filtrar hojas de vida, pero evaluar una técnica de arco, una embocadura o cómo alguien corrige a un niño de seis años requiere oído de músico. Nos envías a tus finalistas y **los evaluamos profes de la misma familia de instrumentos**, con una rúbrica clara.",
    idealFor: [
      "Instituciones con área de talento humano que necesita un filtro musical experto.",
      "Coordinaciones académicas que dudan entre dos o tres finalistas.",
      "Procesos con muchos aspirantes que necesitan una preselección rápida.",
      "Convocatorias para bandas, coros o programas de formación artística.",
    ],
    includes: [
      "Rúbrica de evaluación acordada con tu institución.",
      "Audición: pieza de libre elección, lectura a primera vista y acompañamiento cuando aplica.",
      "Clase muestra con estudiantes reales o simulados, del nivel y la edad de tus grupos.",
      "Entrevista pedagógica estructurada.",
      "Evaluación presencial en Bogotá o virtual por videollamada.",
      "Informe individual y ranking comparativo.",
    ],
    steps: [
      {
        title: "Nos cuentas el cargo",
        body: "Instrumento, edades, tamaño de grupos y lo que más te importa en un profe.",
      },
      {
        title: "Ajustamos la rúbrica",
        body: "Definimos criterios y pesos para que la evaluación mida lo que tu institución necesita.",
      },
      {
        title: "Evaluamos",
        body: "Cada candidato hace la misma audición, la misma clase muestra y la misma entrevista.",
      },
      {
        title: "Recibes el informe",
        body: "Puntajes, fortalezas, alertas y una recomendación clara para decidir.",
      },
    ],
    deliverable: {
      title: "Qué recibes por candidato",
      items: [
        "Puntaje por criterio de la rúbrica",
        "Observaciones de la audición y la clase muestra",
        "Fortalezas y aspectos a desarrollar",
        "Recomendación: avanzar, avanzar con reservas o no avanzar",
      ],
    },
    faqs: [
      {
        question: "¿Quién evalúa a los candidatos?",
        answer:
          "Profes de nuestra red con experiencia en pedagogía musical. Buscamos que el evaluador domine la misma familia de instrumentos que el candidato.",
      },
      {
        question: "¿Se puede evaluar de forma virtual?",
        answer:
          "Sí. La audición, la entrevista y la clase muestra pueden hacerse por videollamada, lo que permite evaluar candidatos fuera de Bogotá. Para instrumentos donde el sonido en vivo es clave recomendamos la evaluación presencial.",
      },
      {
        question: "¿Cuántos candidatos pueden evaluar?",
        answer:
          "Desde un finalista hasta convocatorias completas. En procesos grandes combinamos una preselección corta con la evaluación completa de los mejores perfiles.",
      },
      {
        question: "¿Qué pasa con los datos de los candidatos?",
        answer:
          "Solo los tratamos con su autorización y para la finalidad del proceso, conforme a la Ley 1581 de 2012. Los resultados se comparten únicamente con tu institución.",
      },
    ],
    keywords: [
      "evaluación de candidatos docentes",
      "clase muestra docente rúbrica",
      "audición profesor de música",
      "evaluar profesor de música",
    ],
  },
  {
    slug: "evaluacion-docente",
    path: `${B2B_HUB_PATH}/evaluacion-docente`,
    name: "Evaluación docente",
    icon: "chart",
    accent: "var(--green)",
    headline: "Evaluación docente para equipos de profesores de música",
    seoTitle: "Evaluación docente para profesores de música",
    metaDescription:
      "Observamos clases de tu equipo de música con una rúbrica musical y pedagógica, y entregamos retroalimentación y un plan de desarrollo por profe.",
    summary:
      "Observamos clases de tu equipo actual con una rúbrica y entregamos retroalimentación y un plan de desarrollo por profe.",
    intro:
      "Los mejores equipos no se contratan: se desarrollan. Observamos clases reales de tus profes de música, las evaluamos con una rúbrica musical y pedagógica y convertimos lo observado en **retroalimentación concreta** y un plan de desarrollo para cada profe y para el área.",
    idealFor: [
      "Academias que quieren un estándar de calidad común entre sedes o profes.",
      "Colegios que evalúan su área de música antes de renovar contratos.",
      "Coordinaciones que necesitan una mirada externa y experta.",
      "Instituciones que preparan procesos de mejora o acreditación.",
    ],
    includes: [
      "Rúbrica de observación musical y pedagógica ajustada a tu institución.",
      "Observación de clases presencial en Bogotá o por video.",
      "Conversación de retroalimentación con cada profe.",
      "Plan de desarrollo individual con acciones concretas.",
      "Informe consolidado del área para la coordinación.",
    ],
    steps: [
      {
        title: "Alcance",
        body: "Definimos cuántos profes, qué clases y qué objetivos tiene la evaluación.",
      },
      {
        title: "Observación",
        body: "Asistimos a clases reales o revisamos grabaciones con la rúbrica acordada.",
      },
      {
        title: "Retroalimentación",
        body: "Conversamos con cada profe sobre fortalezas y oportunidades, con ejemplos concretos.",
      },
      {
        title: "Plan de desarrollo",
        body: "Entregamos planes individuales y un informe del área con prioridades.",
      },
    ],
    deliverable: {
      title: "Qué recibes",
      items: [
        "Informe individual por profe",
        "Plan de desarrollo con acciones concretas",
        "Informe consolidado del área de música",
        "Rúbrica para seguir usando internamente",
      ],
    },
    faqs: [
      {
        question: "¿La evaluación es para despedir profes?",
        answer:
          "No es su objetivo. Está pensada para desarrollar al equipo: identifica fortalezas, define prioridades de formación y crea un estándar común. Cómo usar los resultados lo decide tu institución.",
      },
      {
        question: "¿Los profes saben que serán observados?",
        answer:
          "Sí. Recomendamos comunicar el proceso con anticipación y compartir la rúbrica: la evaluación funciona mejor cuando los profes la entienden como acompañamiento.",
      },
      {
        question: "¿Pueden evaluar clases grupales y de banda o coro?",
        answer:
          "Sí. La rúbrica se ajusta al formato: clase individual, grupo, ensamble, banda, coro o iniciación musical con primera infancia.",
      },
      {
        question: "¿Cada cuánto conviene repetir la evaluación?",
        answer:
          "Muchas instituciones la hacen una vez por periodo académico o por año, para medir el avance frente al plan de desarrollo.",
      },
    ],
    keywords: [
      "evaluación docente profesores de música",
      "auditoría pedagógica",
      "observación de clases música",
      "rúbrica evaluación docente música",
    ],
  },
];

const SERVICE_BY_SLUG = new Map(B2B_SERVICES.map((service) => [service.slug, service]));

export function getB2BService(slug: string) {
  return SERVICE_BY_SLUG.get(slug);
}

export const B2B_AUDIENCES = [
  {
    title: "Academias de música",
    body: "Profes que sostienen la calidad de tu marca clase tras clase.",
  },
  {
    title: "Colegios y jardines",
    body: "Música general, banda, coro e iniciación musical para cada edad.",
  },
  {
    title: "Jornada complementaria",
    body: "Profes que saben manejar grupos grandes y mantenerlos motivados.",
  },
  {
    title: "Entidades culturales",
    body: "Formadores artísticos para fundaciones y programas de formación.",
  },
];

export const B2B_PAINS = [
  {
    title: "La hoja de vida no muestra si alguien sabe enseñar",
    body: "Un gran intérprete no siempre es un gran profe. Evaluamos la clase, no solo el currículo.",
  },
  {
    title: "Seleccionar le quita semanas a la coordinación",
    body: "Convocar, filtrar, escuchar y comparar candidatos toma tiempo que tu equipo necesita para enseñar.",
  },
  {
    title: "Talento humano no puede evaluar lo musical",
    body: "Una técnica de arco, una embocadura o la forma de corregir a un niño requieren oído de músico.",
  },
  {
    title: "Las verificaciones no pueden quedar pendientes",
    body: "Trabajar con niños exige verificar antecedentes e inhabilidades antes de contratar.",
  },
];

export const B2B_CRITERIA = [
  {
    title: "Dominio musical",
    body: "Técnica, sonido, lectura y repertorio acordes al nivel que va a enseñar.",
  },
  {
    title: "Pedagogía",
    body: "Claridad para explicar, secuencia de la clase y adaptación a la edad y el nivel.",
  },
  {
    title: "Calidad humana",
    body: "Escucha, paciencia, trato con estudiantes y familias, y forma de corregir.",
  },
  {
    title: "Manejo de grupo",
    body: "Cuando el cargo lo requiere: energía, dinámica y control de grupos grandes.",
  },
  {
    title: "Profesionalismo",
    body: "Puntualidad, comunicación, preparación de clases y referencias verificadas.",
  },
  {
    title: "Entornos seguros",
    body: "Antecedentes públicos verificados con autorización y buenas prácticas con menores.",
  },
];

export const B2B_HUB_FAQS: FaqItem[] = [
  {
    question: "¿En qué se diferencia de una empresa de selección tradicional?",
    answer:
      "Somos una escuela de música: quienes evalúan son profes de música. Por eso medimos lo que un proceso genérico no puede ver, como la técnica, el oído y la forma de enseñar, con audición y clase muestra.",
  },
  {
    question: "¿Ustedes contratan a los profes y los envían a mi institución?",
    answer:
      "No. No actuamos como empleador ni como empresa de servicios temporales. Tu institución contrata directamente al profe que elija; nosotros te ayudamos a encontrarlo y a evaluarlo.",
  },
  {
    question: "¿Hacen la consulta de inhabilidades por delitos sexuales?",
    answer:
      "Verificamos antecedentes públicos con autorización del candidato, pero la ley asigna a la entidad que contrata la consulta de inhabilidades (Ley 1918 de 2018 y Decreto 753 de 2019). Te explicamos cómo hacerla en nuestra [guía de verificaciones](/blog/verificaciones-antes-de-contratar-profesores-colombia).",
  },
  {
    question: "¿Trabajan solo en Bogotá?",
    answer:
      "Las evaluaciones presenciales son en Bogotá y alrededores. La audición, la entrevista y la clase muestra también pueden hacerse por videollamada para instituciones de otras ciudades de Colombia.",
  },
  {
    question: "¿Cuánto cuestan los servicios?",
    answer:
      "Depende del servicio, del número de vacantes o candidatos y del tipo de cargo. Cuéntanos tu necesidad en el formulario y te enviamos una propuesta.",
  },
];

export const B2B_INSTITUTION_TYPES = [
  "Academia de música",
  "Colegio",
  "Jardín infantil",
  "Caja de compensación / jornada complementaria",
  "Fundación o entidad cultural",
  "Otro",
];
