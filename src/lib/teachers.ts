export type Review = {
  id: string;
  author: string;
  instrument?: string;
  quote: string;
};

export type ClassFormat = "Presencial" | "Virtual" | "A domicilio";

export type Teacher = {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  color: string;
  bio: string;
  longBio: string;
  photo: string;
  gallery: { src: string; alt: string }[];
  reviews: Review[];
  /** ISO country (default Colombia) */
  country?: string;
  countryFlag?: string;
  /** Years actively teaching */
  yearsTeaching: number;
  /** Short trait pills shown on cards / detail page */
  highlights: string[];
  /** How classes are delivered */
  classFormats: ClassFormat[];
};

export const TEACHERS: Teacher[] = [
  {
    slug: "gisselle-torres",
    name: "Gisselle Torres",
    shortName: "Gisselle",
    role: "Flauta",
    color: "var(--green)",
    bio: "Tu profe de flauta que no omite lo gracioso que es equivocarse en clases. Soy Gisselle, ¡si no te ríes pierdes!",
    longBio:
      "Soy Gisselle, flautista y profesora apasionada por enseñar desde lo más básico hasta lo más avanzado. Mi metodología es cercana, paciente y enfocada en construir fundamentos sólidos para que cada estudiante avance a su propio ritmo. Creo que aprender música es también aprender a equivocarse con humor y a celebrar cada pequeño logro.",
    country: "Colombia",
    countryFlag: "🇨🇴",
    yearsTeaching: 5,
    highlights: ["Paciente", "Apasionada", "Pedagógica"],
    classFormats: ["Presencial", "Virtual", "A domicilio"],
    photo: "/profes/gisselle-torres.svg",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1532464142-9c0d6cce9b25?auto=format&fit=crop&w=900&q=80",
        alt: "Estudiante practicando flauta",
      },
      {
        src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80",
        alt: "Partituras sobre un atril",
      },
      {
        src: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=900&q=80",
        alt: "Detalle de instrumento de viento",
      },
    ],
    reviews: [
      {
        id: "g1",
        author: "Familia",
        instrument: "Flauta",
        quote:
          "Es una flautista muy paciente y enseña desde lo más básico para que los fundamentos queden muy claros. Hoy fue nuestra primera clase y quedamos muy motivados con el instrumento y la profe.",
      },
      {
        id: "g2",
        author: "Estudiante",
        instrument: "Flauta",
        quote:
          "Gisselle es una excelente profesional, con una paciencia tremenda y muchas ganas de enseñarle a uno todo sobre la flauta. Es una excelente profesora.",
      },
      {
        id: "g3",
        author: "Estudiante",
        instrument: "Flauta",
        quote:
          "Gisselle es una grandiosa y excelente profesional. Es una líder innata que enseña desde el corazón, poniéndose en los zapatos del otro para dar lo mejor de sí misma. Refleja confianza al enseñar, reconoce lo que haces bien y busca las palabras adecuadas para corregir desde la experiencia. Es demasiado empática.",
      },
      {
        id: "g4",
        author: "Estudiante",
        instrument: "Flauta",
        quote:
          "Muy profesional la profe Gisselle. Demuestra conocimiento en el instrumento y su metodología puede dar muy buenos resultados a largo plazo.",
      },
      {
        id: "g5",
        author: "Estudiante",
        instrument: "Flauta",
        quote:
          "Una chica muy atenta, paciente, con toda la disposición para que como estudiante tengas muy buenas bases y puedas aprender. Corrige con cariño y se evidencia su experiencia con el instrumento. Excelente, muy recomendada.",
      },
      {
        id: "g6",
        author: "Madre de estudiante",
        instrument: "Flauta",
        quote:
          "El proceso con la profe Gisselle ha sido integral y muy humano. No solo es aprender a tocar el instrumento, también es escribir y leer partituras, todo bajo una pedagogía muy cercana, entendiendo los ritmos y momentos de mi hija. Gracias a Gisselle, el amor por la música y la dedicación de mi hija se han fortalecido.",
      },
      {
        id: "g7",
        author: "Marcelo",
        instrument: "Flauta",
        quote:
          "Hola, soy Marcelo. Mi profesora de flauta Gisselle es admirable. No solo me enseña, sino que me tiene paciencia. Mis clases de flauta me enseñan a tener más flexibilidad en mis manos y a centrarme en la correlación entre mis manos, mi cerebro y las notas musicales. He vuelto a sentir la música en mi interior y a valorarla. No es fácil el instrumento, pero con dedicación y esfuerzo se puede mejorar. Tocar un instrumento es un arte y la vida sin música no es nada.",
      },
    ],
  },
  {
    slug: "daniela-cardenas",
    name: "Daniela Cárdenas",
    shortName: "Dani",
    role: "Violín",
    color: "var(--purple)",
    bio: "Soy la profe de los mil recursos: convierto colores, burbujas, pañuelos y cuentos en experiencias donde la música se vive antes de aprenderse.",
    longBio:
      "Soy Daniela, violinista y profe de iniciación musical. Mi clase es un espacio donde colores, burbujas, pañuelos y cuentos se vuelven herramientas para que la música se sienta antes de leerse. Trabajo con disciplina y cariño en partes iguales, porque creo que aprender un instrumento es también aprender a confiar en uno mismo.",
    country: "Colombia",
    countryFlag: "🇨🇴",
    yearsTeaching: 6,
    highlights: ["Creativa", "Cariñosa", "Estructurada"],
    classFormats: ["Presencial", "Virtual", "A domicilio"],
    photo: "/profes/daniela-cardenas.svg",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80",
        alt: "Violinista en plena interpretación",
      },
      {
        src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=80",
        alt: "Niños descubriendo la música",
      },
      {
        src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80",
        alt: "Detalle de un violín",
      },
    ],
    reviews: [
      {
        id: "d1",
        author: "Violeta",
        quote:
          "Soy Violeta y soy estudiante de la profe Daniela Cárdenas. Me encantan las clases que tengo con ella, ya que es muy divertida, le entiendo súper bien todo y siento que he avanzado en mi proceso.",
      },
{
        id: "d2",
        author: "Familia",
        instrument: "Violín",
        quote:
          "Helena ha disfrutado muchísimo sus clases de violín y nos sentimos súper agradecidos de todo lo que ha aprendido con la profe Dani. No fue fácil encontrar una profe de violín que le enseñara con tanta paciencia, cariño, pero también estructura a mi peque. Helena sigue advancing a pasos gigantes con cada clase, y no solo ha aprendido de música, sino también de disciplina y amor por lo que hace.",
      },
      {
        id: "d3",
        author: "Familia",
        quote:
          "Holaaa profe Dani, quiero contarte que como familia estamos muy contentos por el trabajo que has venido haciendo con nuestros hijos. Hemos visto que en cada clase avanzan y aprenden algo nuevo. Personalmente me encanta que cada clase hagas algo nuevo con mis hijos y que no sea una clase monótona ni aburrida. Gracias por la retroalimentación que nos das cada mes y por el cariño, paciencia y dedicación que tienes con el proceso de nuestros hijos.",
      },
    ],
  },
  {
    slug: "sara-alfonso",
    name: "Sara Alfonso",
    shortName: "Sara",
    role: "Piano",
    color: "var(--pink)",
    bio: "Soy Sara, pianista que no tiene tan buenos chistes, pero aprendemos divirtiéndonos. \"Music is medicine\".",
    longBio:
      "Soy Sara, pianista enamorada de la pedagogía musical. Mis clases son dinámicas, claras y de fácil asimilación, pensadas para que avances con confianza desde el primer día — sea de manera presencial o virtual. Creo que la música es medicina, y que cada estudiante merece un espacio cálido y honesto para encontrar su sonido.",
    country: "Colombia",
    countryFlag: "🇨🇴",
    yearsTeaching: 4,
    highlights: ["Clara", "Dinámica", "Cercana"],
    classFormats: ["Presencial", "Virtual"],
    photo: "/profes/sara-alfonso.svg",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
        alt: "Manos al piano",
      },
      {
        src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80",
        alt: "Teclas de un piano vertical",
      },
      {
        src: "https://images.unsplash.com/photo-1466737414428-e4ec5d2ee23d?auto=format&fit=crop&w=900&q=80",
        alt: "Sala de música con piano",
      },
    ],
    reviews: [
      {
        id: "s1",
        author: "Familia",
        instrument: "Piano",
        quote:
          "Hemos iniciado las clases de piano con la escuela A Medio Tono y la experiencia ha sido altamente positiva. Las orientaciones impartidas han sido claras, dinámicas y de fácil asimilación, permitiendo avanzar con confianza aún en medio de la virtualidad. Valoramos especialmente la disposición para despejar dudas de manera inmediata, así como las correcciones oportunas que fortalecen el aprendizaje y motivan a continuar este hermoso proceso musical.",
      },
    ],
  },
  {
    slug: "valentina-fernandez",
    name: "Valentina Fernández",
    shortName: "Valentina",
    role: "Violín",
    color: "var(--blue)",
    bio: "Soy Valentina, la violinista del color y con nuestros violines pintaremos de sonido nuestro corazón. Una sonrisa dibujada es lo más bello de la educación.",
    longBio:
      "Soy Valentina, violinista convencida de que enseñar es pintar el mundo con sonido. Trabajo con niñas, niños y adultos para que descubran la postura, la afinación y la sensibilidad musical desde un lugar amable, paciente y muy creativo. Mi mayor recompensa es ver a un estudiante sonreír cuando suena algo que antes parecía imposible.",
    country: "Colombia",
    countryFlag: "🇨🇴",
    yearsTeaching: 5,
    highlights: ["Sensible", "Carismática", "Paciente"],
    classFormats: ["Presencial", "Virtual", "A domicilio"],
    photo: "/profes/valentina-fernandez.svg",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=900&q=80",
        alt: "Detalle de un violín en clase",
      },
      {
        src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80",
        alt: "Violinista interpretando una obra",
      },
      {
        src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
        alt: "Estudiante recibiendo clase de violín",
      },
    ],
    reviews: [
      {
        id: "v1",
        author: "Familia",
        instrument: "Violín",
        quote:
          "Quiero extender mi agradecimiento y felicitación a la escuela A Medio Tono Music, donde actualmente mi hija Michelle está aprendiendo violín. Iniciamos clases en febrero y ha sido una experiencia muy bonita. No se trata solo del instrumento, también trabajan la postura y el aprendizaje a través de dinámicas que hacen las clases más amenas. Además, ofrecen un excelente servicio a domicilio. Los profesores tienen mucha experiencia y destacan por su carisma, amabilidad y paciencia en cada clase. Poco a poco se van notando los progresos, lo cual es muy gratificante.",
      },
    ],
  },
];

export function getTeacherBySlug(slug: string): Teacher | undefined {
  return TEACHERS.find((t) => t.slug === slug);
}

/** "Gisselle Torres" → "Gisselle T." */
export function shortDisplayName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  const first = parts[0];
  const last = parts[parts.length - 1];
  return `${first} ${last[0].toUpperCase()}.`;
}

export type FeaturedQuote = Review & {
  teacherSlug: string;
  teacherName: string;
  teacherShortName: string;
  color: string;
};

export const FEATURED_QUOTES: FeaturedQuote[] = TEACHERS.flatMap((t) =>
  t.reviews.slice(0, 3).map((r) => ({
    ...r,
    teacherSlug: t.slug,
    teacherName: t.name,
    teacherShortName: t.shortName,
    color: t.color,
  })),
);
