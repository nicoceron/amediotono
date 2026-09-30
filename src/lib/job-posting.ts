export const JOB_TITLE = "Profesor/a de música";

/** First published with structured data; keep it when editing the copy. */
export const JOB_POSTED_AT = "2026-09-30";
/** Google drops expired postings automatically: extend this while hiring continues. */
export const JOB_VALID_THROUGH = "2027-03-31T23:59:59-05:00";

export const JOB_OVERVIEW_ITEMS = [
  {
    title: "Sobre el rol",
    body: "Buscamos profes de música para acompañar estudiantes en clases virtuales y a domicilio en Bogotá y alrededores.",
  },
  {
    title: "Qué harás",
    body: "Planear clases claras, adaptar repertorio al nivel de cada estudiante y mantener una comunicación cercana con familias y equipo.",
  },
  {
    title: "Lo que valoramos",
    body: "Valoramos sobre todo resultados: progreso visible en los estudiantes, clases bien preparadas, puntualidad y comunicación clara con familias y equipo.",
  },
  {
    title: "Modalidad",
    body: "Clases virtuales y presenciales a domicilio.",
  },
];

export function jobDescriptionHtml() {
  return JOB_OVERVIEW_ITEMS.map((item) => `<h3>${item.title}</h3><p>${item.body}</p>`).join("");
}
