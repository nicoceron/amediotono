import type { FaqItem } from "@/lib/content-types";

export const TOOLS_PATH = "/herramientas";
export const METRONOME_PATH = `${TOOLS_PATH}/metronomo`;
export const TUNER_PATH = `${TOOLS_PATH}/afinador`;

export const NOTE_NAMES_ES = ["Do", "Do♯", "Re", "Re♯", "Mi", "Fa", "Fa♯", "Sol", "Sol♯", "La", "La♯", "Si"];
export const NOTE_NAMES_EN = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];

export function midiToFrequency(midi: number, a4 = 440) {
  return a4 * 2 ** ((midi - 69) / 12);
}

export function frequencyToMidi(frequency: number, a4 = 440) {
  return 69 + 12 * Math.log2(frequency / a4);
}

export function noteLabel(midi: number) {
  const index = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  return {
    es: NOTE_NAMES_ES[index],
    en: NOTE_NAMES_EN[index],
    octave,
    scientific: `${NOTE_NAMES_EN[index]}${octave}`,
  };
}

export type TunerString = {
  /** e.g. "6.ª cuerda". */
  label: string;
  midi: number;
};

export type TunerPreset = {
  slug: string;
  /** Instrument name, e.g. "guitarra". */
  name: string;
  /** "Afinador de guitarra" */
  headline: string;
  metaDescription: string;
  intro: string;
  /** Strings from lowest to highest pitch. */
  strings: TunerString[];
  tuningName: string;
  tips: string[];
  faqs: FaqItem[];
  /** Course landing page (course id). */
  courseId?: string;
  relatedPostSlugs: string[];
};

export const TUNER_PRESETS: TunerPreset[] = [
  {
    slug: "guitarra",
    name: "guitarra",
    headline: "Afinador de guitarra online",
    metaDescription:
      "Afina tu guitarra gratis con el micrófono: afinación estándar Mi La Re Sol Si Mi, notas de referencia y consejos de profes. Para acústica y eléctrica.",
    intro:
      "Toca una cuerda al aire y el afinador te dice qué nota suena y si debes subirla o bajarla. Funciona con guitarra acústica, clásica y eléctrica, directo en tu navegador.",
    strings: [
      { label: "6.ª cuerda", midi: 40 },
      { label: "5.ª cuerda", midi: 45 },
      { label: "4.ª cuerda", midi: 50 },
      { label: "3.ª cuerda", midi: 55 },
      { label: "2.ª cuerda", midi: 59 },
      { label: "1.ª cuerda", midi: 64 },
    ],
    tuningName: "Afinación estándar (Mi La Re Sol Si Mi)",
    tips: [
      "Afina siempre subiendo hacia la nota: si te pasas, baja un poco la cuerda y vuelve a subir. Así el engranaje de la clavija queda firme y la afinación dura más.",
      "Toca la cuerda con fuerza media y deja que suene; el primer golpe siempre sale un poco más agudo.",
      "Las cuerdas nuevas se estiran durante varios días: revisa la afinación más seguido la primera semana.",
      "Después de afinar las seis cuerdas, repasa todas otra vez: el cambio de tensión de unas mueve un poco a las otras.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas de la guitarra al aire?",
        answer:
          "En afinación estándar, de la sexta cuerda (la más gruesa) a la primera: Mi, La, Re, Sol, Si, Mi (E A D G B E en cifrado americano).",
      },
      {
        question: "¿Sirve para guitarra eléctrica?",
        answer:
          "Sí. Toca cerca del micrófono de tu celular o computador con el amplificador a volumen moderado, o sin amplificar si el sonido alcanza a escucharse.",
      },
      {
        question: "¿Por qué se desafina tan rápido mi guitarra?",
        answer:
          "Las causas más comunes son cuerdas nuevas que aún se estiran, cambios de temperatura y humedad, y clavijas flojas. En nuestra [guía para cambiar las cuerdas](/blog/como-cambiar-las-cuerdas-de-la-guitarra) te explicamos cómo estabilizarlas.",
      },
    ],
    courseId: "guitarra-acustica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "como-cambiar-las-cuerdas-de-la-guitarra", "acordes-basicos-de-guitarra-para-principiantes"],
  },
  {
    slug: "violin",
    name: "violín",
    headline: "Afinador de violín online",
    metaDescription:
      "Afina tu violín gratis con el micrófono: cuerdas Sol Re La Mi, notas de referencia y consejos para clavijas y microafinadores. Directo en el navegador.",
    intro:
      "Pasa el arco o pulsa cada cuerda al aire y el afinador te muestra cuánto te falta para llegar a Sol, Re, La o Mi. Ideal para practicar en casa entre clase y clase.",
    strings: [
      { label: "4.ª cuerda", midi: 55 },
      { label: "3.ª cuerda", midi: 62 },
      { label: "2.ª cuerda", midi: 69 },
      { label: "1.ª cuerda", midi: 76 },
    ],
    tuningName: "Afinación estándar en quintas (Sol Re La Mi)",
    tips: [
      "Para ajustes pequeños usa los microafinadores del cordal; deja las clavijas para cambios grandes.",
      "Empuja la clavija ligeramente hacia adentro mientras la giras para que no se devuelva.",
      "Afina primero el La y después Re, Sol y Mi: es el orden que usan las orquestas.",
      "Revisa que el puente siga derecho después de afinar; si se inclina, pide ayuda a tu profe.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las cuerdas del violín?",
        answer:
          "De la más grave a la más aguda: Sol, Re, La y Mi (G D A E). Están separadas por intervalos de quinta.",
      },
      {
        question: "¿Es mejor afinar con arco o pulsando la cuerda?",
        answer:
          "Con arco el sonido es más estable y el afinador lo lee mejor. Si estás empezando y te cuesta, puedes pulsar la cuerda (pizzicato) cerca del micrófono.",
      },
      {
        question: "¿Qué hago si una clavija no se queda quieta?",
        answer:
          "Suele ser por humedad o desgaste. No la fuerces: consulta a tu profe o a un luthier. Te contamos más en la [guía para cuidar tu violín](/blog/como-limpiar-y-cuidar-un-violin).",
      },
    ],
    courseId: "violin",
    relatedPostSlugs: ["como-afinar-el-violin", "como-limpiar-y-cuidar-un-violin", "como-sostener-el-arco-del-violin"],
  },
  {
    slug: "viola",
    name: "viola",
    headline: "Afinador de viola online",
    metaDescription:
      "Afina tu viola gratis con el micrófono: cuerdas Do Sol Re La, notas de referencia y consejos para afinar en quintas. Sin instalar nada.",
    intro:
      "La viola se afina una quinta por debajo del violín: Do, Sol, Re y La. Toca cada cuerda al aire y sigue la aguja hasta que quede en el centro.",
    strings: [
      { label: "4.ª cuerda", midi: 48 },
      { label: "3.ª cuerda", midi: 55 },
      { label: "2.ª cuerda", midi: 62 },
      { label: "1.ª cuerda", midi: 69 },
    ],
    tuningName: "Afinación estándar en quintas (Do Sol Re La)",
    tips: [
      "La cuerda de Do es gruesa y tarda en estabilizarse: pasa el arco con un sonido largo y parejo.",
      "Usa microafinadores para ajustes finos y clavijas solo para cambios grandes.",
      "Comprueba las quintas entre cuerdas vecinas tocándolas juntas: cuando están afinadas el sonido deja de 'vibrar'.",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia la afinación de la viola y el violín?",
        answer:
          "Comparten tres cuerdas (Sol, Re, La), pero la viola cambia el Mi agudo por un Do grave. Lee nuestra comparación [violín o viola](/blog/violin-o-viola-diferencias).",
      },
      {
        question: "¿Puedo usar un afinador de violín para la viola?",
        answer:
          "Sí, si es cromático como este. Solo asegúrate de buscar Do, Sol, Re y La en vez de Sol, Re, La y Mi.",
      },
      {
        question: "¿Cada cuánto debo afinar la viola?",
        answer:
          "Antes de cada práctica. Los cambios de clima, sobre todo entre Bogotá y tierra caliente, mueven la afinación de los instrumentos de madera.",
      },
    ],
    courseId: "viola",
    relatedPostSlugs: ["violin-o-viola-diferencias", "como-limpiar-y-cuidar-un-violin", "como-afinar-el-violin"],
  },
  {
    slug: "violonchelo",
    name: "violonchelo",
    headline: "Afinador de violonchelo online",
    metaDescription:
      "Afina tu violonchelo (chelo) gratis con el micrófono: cuerdas Do Sol Re La, notas de referencia y consejos de afinación. Directo en el navegador.",
    intro:
      "El violonchelo se afina en quintas: Do, Sol, Re y La. Pasa el arco por cada cuerda al aire cerca del micrófono y ajusta hasta que la aguja quede en el centro.",
    strings: [
      { label: "4.ª cuerda", midi: 36 },
      { label: "3.ª cuerda", midi: 43 },
      { label: "2.ª cuerda", midi: 50 },
      { label: "1.ª cuerda", midi: 57 },
    ],
    tuningName: "Afinación estándar en quintas (Do Sol Re La)",
    tips: [
      "Las notas graves del chelo necesitan un sonido largo y estable: usa arcos completos al afinar.",
      "Afina primero el La con el microafinador y luego baja cuerda por cuerda comparando las quintas.",
      "Si tienes que girar una clavija, afloja un poco la cuerda antes de subirla y no la sobrepases.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las cuerdas del violonchelo?",
        answer:
          "De la más grave a la más aguda: Do, Sol, Re y La (C G D A), una octava por debajo de la viola.",
      },
      {
        question: "¿Por qué el afinador no reconoce mi cuerda de Do?",
        answer:
          "Las frecuencias muy graves son difíciles de captar para algunos micrófonos de celular. Acerca el micrófono al instrumento y toca con un arco firme y parejo.",
      },
      {
        question: "¿Qué hago si el puente se inclina al afinar?",
        answer:
          "Es normal que se mueva un poco con la tensión. Si se inclina de forma visible, pide a tu profe que lo enderece. Más en nuestra [guía de cuidado del violonchelo](/blog/como-cuidar-un-violonchelo).",
      },
    ],
    courseId: "violoncello",
    relatedPostSlugs: ["como-cuidar-un-violonchelo", "violin-o-violonchelo-cual-elegir", "por-que-aprender-violonchelo"],
  },
  {
    slug: "contrabajo",
    name: "contrabajo",
    headline: "Afinador de contrabajo online",
    metaDescription:
      "Afina tu contrabajo gratis con el micrófono: afinación orquestal Mi La Re Sol, notas de referencia y trucos para notas muy graves. Sin descargar nada.",
    intro:
      "El contrabajo se afina en cuartas: Mi, La, Re y Sol, con las notas más graves de la orquesta. Toca cada cuerda al aire cerca del micrófono y sigue la aguja.",
    strings: [
      { label: "4.ª cuerda", midi: 28 },
      { label: "3.ª cuerda", midi: 33 },
      { label: "2.ª cuerda", midi: 38 },
      { label: "1.ª cuerda", midi: 43 },
    ],
    tuningName: "Afinación orquestal en cuartas (Mi La Re Sol)",
    tips: [
      "Los armónicos facilitan afinar: toca suavemente el armónico en la mitad de la cuerda y afina esa nota, una octava más aguda y más fácil de leer.",
      "Acerca el micrófono al instrumento: los celulares captan mal las frecuencias muy graves.",
      "Revisa el puente después de afinar; con tanta tensión puede inclinarse.",
    ],
    faqs: [
      {
        question: "¿Cuál es la afinación del contrabajo?",
        answer:
          "La afinación orquestal más común es Mi, La, Re, Sol (E A D G), igual a las cuatro cuerdas del bajo eléctrico. Existe también la afinación solista, un tono más aguda.",
      },
      {
        question: "¿Este afinador sirve para contrabajo con arco y pizzicato?",
        answer:
          "Sí. Con arco el sonido es más estable; en pizzicato toca con fuerza y deja sonar la nota.",
      },
      {
        question: "¿Cómo transporto un contrabajo sin desafinarlo?",
        answer:
          "Protégelo con una funda acolchada y evita cambios bruscos de temperatura. Te lo contamos en la [guía de cuidado del contrabajo](/blog/como-cuidar-un-contrabajo).",
      },
    ],
    courseId: "contrabajo",
    relatedPostSlugs: ["como-cuidar-un-contrabajo", "por-que-aprender-contrabajo", "como-elegir-un-contrabajo-para-empezar"],
  },
  {
    slug: "bajo",
    name: "bajo eléctrico",
    headline: "Afinador de bajo online",
    metaDescription:
      "Afina tu bajo eléctrico gratis con el micrófono: afinación estándar Mi La Re Sol de 4 cuerdas, notas de referencia y consejos para notas graves.",
    intro:
      "El bajo de cuatro cuerdas se afina Mi, La, Re y Sol, una octava por debajo de las cuatro cuerdas graves de la guitarra. Toca cada cuerda al aire y ajusta hasta el centro.",
    strings: [
      { label: "4.ª cuerda", midi: 28 },
      { label: "3.ª cuerda", midi: 33 },
      { label: "2.ª cuerda", midi: 38 },
      { label: "1.ª cuerda", midi: 43 },
    ],
    tuningName: "Afinación estándar de 4 cuerdas (Mi La Re Sol)",
    tips: [
      "Afina con el bajo conectado al amplificador a volumen moderado: el micrófono capta mejor las notas graves.",
      "Usa el armónico del traste 12 si la nota al aire es muy grave para tu micrófono.",
      "Afina subiendo hacia la nota para que la cuerda se asiente en la clavija.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas del bajo de 4 cuerdas?",
        answer: "De la más grave a la más aguda: Mi, La, Re y Sol (E A D G).",
      },
      {
        question: "¿Sirve para bajo de 5 cuerdas?",
        answer:
          "Sí: el afinador es cromático. La quinta cuerda grave suele afinarse en Si (B0), una nota muy grave; acerca bien el micrófono o usa su armónico.",
      },
      {
        question: "¿Por qué el afinador salta entre notas en la cuerda de Mi?",
        answer:
          "Las notas muy graves tienen armónicos fuertes. Toca la cuerda con suavidad cerca del mástil y espera a que el sonido se estabilice.",
      },
    ],
    courseId: "bajo-electrico",
    relatedPostSlugs: ["como-cuidar-un-bajo-electrico", "como-elegir-tu-primer-bajo-electrico", "como-leer-tablaturas-de-guitarra-y-bajo"],
  },
  {
    slug: "ukelele",
    name: "ukelele",
    headline: "Afinador de ukelele online",
    metaDescription:
      "Afina tu ukelele gratis con el micrófono: afinación estándar Sol Do Mi La (GCEA), notas de referencia y consejos. Para soprano, concierto y tenor.",
    intro:
      "La afinación estándar del ukelele soprano, concierto y tenor es Sol, Do, Mi, La (G C E A), con la cuarta cuerda más aguda que la tercera. Toca cada cuerda y sigue la aguja.",
    strings: [
      { label: "4.ª cuerda", midi: 67 },
      { label: "3.ª cuerda", midi: 60 },
      { label: "2.ª cuerda", midi: 64 },
      { label: "1.ª cuerda", midi: 69 },
    ],
    tuningName: "Afinación estándar reentrante (Sol Do Mi La)",
    tips: [
      "La cuarta cuerda (Sol) es más aguda que la tercera: es la afinación 'reentrante' que da el sonido típico del ukelele.",
      "Las cuerdas de nailon se estiran mucho al principio; afina varias veces por práctica la primera semana.",
      "Si el ukelele pasa de un sitio frío a uno caliente, espera unos minutos antes de afinar.",
    ],
    faqs: [
      {
        question: "¿Cuál es la afinación estándar del ukelele?",
        answer: "Sol, Do, Mi, La (G C E A), de la cuarta cuerda a la primera.",
      },
      {
        question: "¿Y el ukelele barítono?",
        answer:
          "Se afina Re, Sol, Si, Mi (D G B E), como las cuatro cuerdas agudas de la guitarra. El afinador es cromático, así que funciona igual.",
      },
      {
        question: "¿Aprender ukelele ayuda para la guitarra?",
        answer:
          "Sí: comparte la lógica de acordes y trastes. Si quieres dar el paso, mira nuestras [clases de guitarra](/clases/guitarra-acustica).",
      },
    ],
    relatedPostSlugs: ["acordes-basicos-de-guitarra-para-principiantes", "guitarra-o-tiple", "como-afinar-la-guitarra"],
  },
];

const PRESET_BY_SLUG = new Map(TUNER_PRESETS.map((preset) => [preset.slug, preset]));

export function getTunerPreset(slug: string) {
  return PRESET_BY_SLUG.get(slug);
}

export function tunerPresetPath(slug: string) {
  return `${TUNER_PATH}/${slug}`;
}

export const TEMPO_MARKINGS = [
  { name: "Grave", min: 30, max: 44, feel: "Muy lento y solemne" },
  { name: "Largo", min: 45, max: 59, feel: "Lento y amplio" },
  { name: "Adagio", min: 60, max: 72, feel: "Lento y tranquilo" },
  { name: "Andante", min: 73, max: 107, feel: "Al paso, caminando" },
  { name: "Moderato", min: 108, max: 119, feel: "Moderado" },
  { name: "Allegro", min: 120, max: 155, feel: "Rápido y alegre" },
  { name: "Vivace", min: 156, max: 175, feel: "Vivo y enérgico" },
  { name: "Presto", min: 176, max: 250, feel: "Muy rápido" },
];

export function tempoMarking(bpm: number) {
  return TEMPO_MARKINGS.find((marking) => bpm >= marking.min && bpm <= marking.max) ?? TEMPO_MARKINGS[0];
}

/** Tuner preset for each course with a standard string tuning. */
const TUNER_BY_COURSE: Record<string, string> = {
  "guitarra-acustica": "guitarra",
  "guitarra-electrica": "guitarra",
  violin: "violin",
  viola: "viola",
  violoncello: "violonchelo",
  contrabajo: "contrabajo",
  "bajo-electrico": "bajo",
};

export function tunerPresetForCourse(courseId: string) {
  const slug = TUNER_BY_COURSE[courseId];
  return slug ? getTunerPreset(slug) : undefined;
}

export const VOICE_TYPE_PATH = `${TOOLS_PATH}/tipo-de-voz`;
export const EAR_TRAINING_PATH = `${TOOLS_PATH}/entrenamiento-auditivo`;

/** Typical comfortable ranges (orientative, adult voices). */
/** Typical choral ranges (MIDI; 60 = Do4). Same values as /blog/como-saber-mi-tipo-de-voz. */
export const VOICE_TYPES = [
  { name: "Bajo", low: 40, high: 64, description: "La voz masculina más grave." },
  { name: "Barítono", low: 45, high: 65, description: "Voz masculina intermedia." },
  { name: "Tenor", low: 48, high: 69, description: "La voz masculina más aguda." },
  { name: "Contralto", low: 53, high: 74, description: "La voz femenina más grave." },
  { name: "Mezzosoprano", low: 57, high: 77, description: "Voz femenina intermedia." },
  { name: "Soprano", low: 60, high: 81, description: "La voz femenina más aguda." },
];

/** Closest voice type by comparing the singer's range with each typical range. */
export function estimateVoiceType(low: number, high: number) {
  return VOICE_TYPES.map((type) => ({
    type,
    distance: Math.abs(type.low - low) + Math.abs(type.high - high),
  })).sort((a, b) => a.distance - b.distance)[0].type;
}

export const INTERVALS = [
  { semitones: 1, name: "Segunda menor", short: "2m", hint: "El tema de «Tiburón»" },
  { semitones: 2, name: "Segunda mayor", short: "2M", hint: "Las dos primeras notas distintas de «Cumpleaños feliz»" },
  { semitones: 3, name: "Tercera menor", short: "3m", hint: "El inicio de «Greensleeves»" },
  { semitones: 4, name: "Tercera mayor", short: "3M", hint: "El inicio de «When the Saints Go Marching In»" },
  { semitones: 5, name: "Cuarta justa", short: "4J", hint: "El inicio de la marcha nupcial de Wagner" },
  { semitones: 6, name: "Tritono", short: "4A/5d", hint: "El inicio del tema de «Los Simpson»" },
  { semitones: 7, name: "Quinta justa", short: "5J", hint: "El salto de «Estrellita, ¿dónde estás?»" },
  { semitones: 8, name: "Sexta menor", short: "6m", hint: "" },
  { semitones: 9, name: "Sexta mayor", short: "6M", hint: "El inicio de «My Bonnie»" },
  { semitones: 10, name: "Séptima menor", short: "7m", hint: "" },
  { semitones: 11, name: "Séptima mayor", short: "7M", hint: "" },
  { semitones: 12, name: "Octava", short: "8J", hint: "El inicio de «Somewhere Over the Rainbow»" },
];
