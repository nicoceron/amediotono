import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "carreras-de-musica-en-colombia",
  title: "Carreras de música en Colombia: universidades y títulos",
  description:
    "Guía de carreras de música en Colombia: universidades en Bogotá y otras ciudades, títulos, énfasis, públicas o privadas y cómo elegir la tuya.",
  excerpt:
    "Dónde estudiar música en Colombia, qué títulos existen y qué énfasis puedes elegir, con tablas de programas en Bogotá y otras ciudades.",
  category: "estudiar-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "carreras de música en Colombia",
    "universidades para estudiar música en Colombia",
    "dónde estudiar música en Bogotá",
    "universidades públicas con carrera de música",
    "estudiar música profesionalmente en Colombia",
    "qué énfasis tiene la carrera de música",
  ],
  intro: [
    "En Colombia puedes estudiar música como carrera universitaria en instituciones públicas y privadas de Bogotá, Medellín, Cali, Ibagué y otras ciudades. Hay dos grandes tipos de título: el de **Maestro en Música** (o Músico), centrado en la práctica artística, y el de **Licenciado en Música**, que forma docentes.",
    "Dentro de cada carrera sueles elegir un énfasis: interpretación, composición, dirección, jazz, pedagogía o producción, según la universidad. Aquí tienes un mapa de los programas que revisamos y los criterios para escoger.",
  ],
  keyTakeaways: [
    "Los títulos principales son Maestro en Música (o Músico) y Licenciado en Música: el primero forma artistas y el segundo, docentes.",
    "En Bogotá están, entre otras, la Nacional, la Distrital ASAB, la Pedagógica, la Javeriana, Los Andes, El Bosque y la Central.",
    "Fuera de Bogotá hay programas en Medellín, Cali, Ibagué, Bucaramanga, Manizales, Barranquilla, Pasto, Pereira y Popayán.",
    "Casi todas las carreras exigen una prueba específica de música, además del bachillerato y el Saber 11.",
    "Elige por tu meta (tocar, componer, dirigir, enseñar, producir), el énfasis, el tipo de prueba, la ciudad y el costo.",
  ],
  sections: [
    {
      id: "tipos-de-titulo",
      heading: "Qué títulos puedes obtener",
      blocks: [
        {
          type: "callout",
          title: "Los requisitos cambian cada periodo",
          text: "Programas, énfasis, pruebas y fechas cambian de una convocatoria a otra. Esta guía se basa en la información más reciente que revisamos (2026). Antes de decidir, confirma en el sitio oficial de cada universidad y en su instructivo o guía del aspirante vigente.",
        },
        {
          type: "table",
          caption: "Tipos de formación musical en Colombia",
          head: ["Título", "Enfoque", "Ejemplos"],
          rows: [
            [
              "Maestro en Música, Maestro en Artes Musicales o Músico",
              "Pregrado profesional centrado en interpretar, componer, dirigir o producir",
              "Distrital ASAB, Javeriana, El Bosque, Los Andes, Univalle, Conservatorio del Tolima",
            ],
            [
              "Licenciado en Música",
              "Pregrado para formar docentes de música",
              "Pedagógica Nacional, Antioquia, Univalle, UIS, Caldas, Atlántico",
            ],
            [
              "Técnico",
              "Formación para el trabajo, no universitaria",
              "SENA: Técnico en ejecución musical con instrumentos funcionales",
            ],
            [
              "Magíster en Música",
              "Posgrado (maestría) para quien ya terminó un pregrado",
              "Se estudia después de la carrera",
            ],
          ],
        },
        {
          type: "p",
          text: "El título de Maestro en Música es un pregrado, no una maestría. La confusión es tan común que le dedicamos una guía completa: [¿Maestro en Música o Licenciatura en Música?](/blog/maestro-en-musica-o-licenciatura-en-musica).",
        },
        {
          type: "p",
          text: "Antes de la universidad también hay formación sin título que vale mucho: las Escuelas Municipales de Música del Plan Nacional de Música para la Convivencia, la Fundación Nacional Batuta, la Red de Músicas de Medellín y los preparatorios de las propias universidades.",
        },
      ],
    },
    {
      id: "carreras-de-musica-en-bogota",
      heading: "Carreras de música en Bogotá",
      blocks: [
        {
          type: "table",
          caption: "Programas de pregrado en Bogotá (información revisada en 2026)",
          head: ["Universidad", "Programa", "Título", "Tipo", "Cómo es la admisión"],
          rows: [
            [
              "Nacional (Conservatorio de Música)",
              "Música, con énfasis, y Música Instrumental",
              "Confirma la denominación en la ficha oficial",
              "Pública",
              "Examen general más prueba específica, con instrumento eliminatorio",
            ],
            [
              "Distrital, Facultad de Artes ASAB",
              "Artes Musicales",
              "Maestro(a) en Artes Musicales",
              "Pública",
              "Pruebas eliminatorias auditiva e instrumental, más componentes ponderados",
            ],
            [
              "Pedagógica Nacional",
              "Licenciatura en Música (10 semestres)",
              "Licenciado en Música",
              "Pública",
              "Instrumento, aptitud y conocimiento musical, y entrevista",
            ],
            [
              "Javeriana",
              "Estudios Musicales (10 semestres)",
              "Maestro en Música con énfasis",
              "Privada",
              "Entrevista y audición según el énfasis",
            ],
            [
              "Los Andes",
              "Música",
              "Músico, con variantes según la línea",
              "Privada",
              "Examen de aptitud musical obligatorio",
            ],
            [
              "El Bosque",
              "Formación Musical (9 semestres)",
              "Maestro en Música",
              "Privada",
              "Aptitud musical, instrumento, teoría y audición, más entrevista",
            ],
            [
              "Central",
              "Estudios Musicales",
              "Maestro o maestra en música",
              "Privada",
              "Teoría, prueba expresiva y perceptiva, prueba de la línea elegida y entrevista",
            ],
          ],
        },
        {
          type: "p",
          text: "También tienen programas de música en Bogotá la Sergio Arboleda y la Fundación Universitaria Juan N. Corpas, entre otras; consulta directamente sus requisitos. La ficha oficial de cada programa es la fuente final; por ejemplo, la de [Artes Musicales de la Distrital](https://www.udistrital.edu.co/admisiones/index.php/oferta/programas/artes-musicales) o la de [Estudios Musicales de la Javeriana](https://www.javeriana.edu.co/carrera-estudios-musicales).",
        },
        {
          type: "p",
          text: "Si ya tienes una universidad en mente, tenemos guías de admisión con lo que evalúa cada prueba: [Universidad Nacional](/blog/examen-de-admision-musica-universidad-nacional), [Distrital ASAB](/blog/admision-musica-universidad-distrital-asab), [Pedagógica Nacional](/blog/admision-licenciatura-en-musica-universidad-pedagogica), [Javeriana](/blog/admision-musica-universidad-javeriana), [Los Andes](/blog/admision-musica-universidad-de-los-andes) y [El Bosque](/blog/admision-musica-universidad-el-bosque).",
        },
      ],
    },
    {
      id: "carreras-de-musica-en-otras-ciudades",
      heading: "Carreras de música fuera de Bogotá",
      blocks: [
        {
          type: "table",
          caption: "Algunos programas en otras ciudades (información revisada en 2026)",
          head: ["Ciudad", "Universidad", "Programas revisados", "Tipo"],
          rows: [
            ["Medellín", "Universidad de Antioquia", "Música (composición, dirección o instrumento), Música Canto y Licenciatura en Música, esta última también en Oriente y Urabá", "Pública"],
            ["Medellín", "EAFIT", "Música, con énfasis en clásica o jazz", "Privada"],
            ["Cali", "Universidad del Valle", "Música (interpretación, dirección, composición, musicología) y Licenciatura en Música", "Pública"],
            ["Ibagué", "Conservatorio del Tolima", "Maestro en Música y Licenciatura en Música", "Pública"],
            ["Bucaramanga", "UIS", "Licenciatura en Música", "Pública"],
            ["Manizales", "Universidad de Caldas", "Licenciatura en Música y Maestro en Música", "Pública"],
            ["Barranquilla", "Universidad del Atlántico", "Licenciatura en Música (Barranquilla) y Música (Puerto Colombia)", "Pública"],
            ["Pasto", "Universidad de Nariño", "Licenciatura en Música", "Pública"],
            ["Pereira", "UTP", "Licenciatura en Música", "Pública"],
            ["Popayán", "Universidad del Cauca", "Música Instrumental, Dirección de Banda y Licenciatura en Música", "Pública"],
          ],
        },
        {
          type: "p",
          text: "Hay más oferta que no revisamos en detalle, como la UPTC, la UNAB, Icesi o Bellas Artes en Medellín. Te contamos cómo son las pruebas de varias de estas universidades en [estudiar música en Medellín, Cali y otras ciudades](/blog/estudiar-musica-en-medellin-cali-y-otras-ciudades).",
        },
        {
          type: "p",
          text: "Y tenemos guías de admisión detalladas para varias de ellas: [Universidad de Antioquia](/blog/admision-musica-universidad-de-antioquia), [EAFIT](/blog/admision-musica-eafit), [Univalle](/blog/admision-musica-universidad-del-valle), [Conservatorio del Tolima](/blog/admision-musica-conservatorio-del-tolima), [UIS](/blog/admision-musica-uis), [Universidad de Caldas](/blog/admision-musica-universidad-de-caldas) y [Universidad del Atlántico](/blog/admision-musica-universidad-del-atlantico).",
        },
      ],
    },
    {
      id: "enfasis",
      heading: "Énfasis: qué puedes especializar dentro de la carrera",
      blocks: [
        {
          type: "p",
          text: "El énfasis define buena parte de tus materias y, muchas veces, también tu prueba de admisión. Estos son ejemplos de la información revisada:",
        },
        {
          type: "table",
          caption: "Énfasis según lo que te interesa",
          head: ["Si te interesa…", "Busca énfasis como…", "Ejemplos"],
          rows: [
            ["Tocar o cantar a nivel profesional", "Interpretación o instrumento", "ASAB, Javeriana, Univalle, Antioquia; Música Instrumental en la Nacional"],
            ["Crear música", "Composición, arreglos, creación y producción de canciones", "Nacional, ASAB (Composición y Arreglos), Javeriana, Univalle"],
            ["Dirigir orquestas, coros o bandas", "Dirección", "Nacional, ASAB, Javeriana, Univalle; Dirección de Banda en la del Cauca"],
            ["Jazz y música popular", "Jazz, música popular", "Nacional (Jazz), Javeriana (Jazz y Música Popular), EAFIT (jazz)"],
            ["Sonido y producción", "Ingeniería de sonido, producción", "Javeriana"],
            ["Investigar la música", "Musicología, teoría", "Univalle (musicología), Los Andes (variantes como teórico)"],
            ["Enseñar", "Educación musical, pedagogía, licenciatura", "Las licenciaturas; Javeriana (Educación Musical); Nacional (Investigación en Pedagogía Instrumental)"],
            ["Cantar", "Canto lírico o popular", "Antioquia (Música Canto)"],
          ],
        },
        {
          type: "p",
          text: "No todas las universidades definen el énfasis en el mismo momento. En Los Andes, por ejemplo, la audición de instrumento para la línea de interpretación llega después de la admisión, incluso al final del primer semestre.",
        },
      ],
    },
    {
      id: "publica-o-privada",
      heading: "¿Universidad pública o privada?",
      blocks: [
        {
          type: "table",
          caption: "Diferencias generales entre públicas y privadas",
          head: ["Aspecto", "Públicas (Nacional, ASAB, Pedagógica, Antioquia, Univalle…)", "Privadas (Javeriana, Los Andes, El Bosque, Central, EAFIT…)"],
          rows: [
            ["Costo", "En general, matrículas más bajas", "Matrículas más altas; revisa becas y opciones de financiación de cada una"],
            ["Tipo de prueba", "Suelen combinar componentes ponderados con partes eliminatorias", "Más variedad: entrevista y audición, portafolio, examen de aptitud"],
            ["Frecuencia de admisión", "Varía: la ASAB admitía cada semestre y Univalle una vez al año", "Varía: El Bosque admitía cada semestre"],
            ["Cupos", "Limitados; Univalle lo advierte de forma explícita", "Según el programa"],
          ],
        },
        {
          type: "p",
          text: "No hay una opción mejor en abstracto. Una pública puede ser la forma de estudiar sin endeudarte, y una privada puede tener justo el énfasis que buscas. Presentarte a más de una (por ejemplo, una pública y una privada) es una estrategia sensata, siempre que las fechas y las pruebas te lo permitan.",
        },
      ],
    },
    {
      id: "como-elegir-tu-carrera",
      heading: "Cómo elegir tu carrera de música",
      blocks: [
        {
          type: "ol",
          items: [
            "**Define tu meta.** ¿Quieres tocar en una orquesta, componer, enseñar en un colegio, producir canciones? La meta te dice qué título y qué énfasis buscar.",
            "**Lee el plan de estudios**, no solo el nombre del programa. Mira cuántos semestres de instrumento, ensambles y teoría incluye.",
            "**Compara las pruebas con tu perfil.** Si aprendiste de oído, un examen de aptitud como el de [Los Andes](/blog/admision-musica-universidad-de-los-andes) puede encajar mejor que uno con análisis armónico y contrapunto.",
            "**Verifica que tu instrumento se ofrezca.** No todas las universidades tienen todos los instrumentos ni todos los énfasis.",
            "**Calcula tiempos y costos:** duración (varios de los programas revisados tienen diez semestres), matrícula, transporte y, si te mudas de ciudad, sostenimiento.",
            "**Habla con estudiantes y egresados** y, si puedes, asiste a conciertos de la facultad para escuchar el nivel.",
          ],
        },
        {
          type: "p",
          text: "Elijas la que elijas, vas a necesitar teoría, oído y lectura sólidos. Para organizar tu estudio, revisa [cómo prepararte para la prueba de admisión de música](/blog/como-prepararte-para-la-prueba-de-admision-de-musica). En A medio tono puedes tomar [clases de teoría musical](/clases/teoria-musical) y de tu instrumento, virtuales o a domicilio en Bogotá, como parte de tu [preparación para la admisión](/preuniversitario-musica).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto dura una carrera de música en Colombia?",
      answer:
        "Varios de los programas revisados duran diez semestres, como la Licenciatura en Música de la Pedagógica, Estudios Musicales de la Javeriana o Música en Univalle; otros duran menos, como Formación Musical de El Bosque (nueve) o Música en la Universidad de Antioquia (ocho). Confirma la duración de cada programa en su ficha oficial.",
    },
    {
      question: "¿Puedo estudiar música en la universidad si nunca he tomado clases?",
      answer:
        "Legalmente basta con el título de bachiller y el Saber 11, pero en la práctica las pruebas asumen preparación previa. Lo sensato es tomar clases o un preparatorio antes de presentarte, y fijarte en programas con examen de aptitud si aprendiste de oído.",
    },
    {
      question: "¿El SENA ofrece carrera de música?",
      answer:
        "El SENA tiene programas como el Técnico en ejecución musical con instrumentos funcionales. Es formación técnica para el trabajo, no un título universitario de Maestro o Licenciado en Música.",
    },
    {
      question: "¿Cuál es la mejor universidad para estudiar música?",
      answer:
        "Depende de lo que busques: tu instrumento, el énfasis, el tipo de prueba, el costo y la ciudad. Compara planes de estudio, escucha conciertos de cada facultad y, si puedes, habla con estudiantes antes de decidir.",
    },
  ],
  relatedCourseIds: ["teoria-musical"],
  relatedPostSlugs: [
    "maestro-en-musica-o-licenciatura-en-musica",
    "como-prepararte-para-la-prueba-de-admision-de-musica",
    "estudiar-musica-en-medellin-cali-y-otras-ciudades",
  ],
  cta: "clases",
};
