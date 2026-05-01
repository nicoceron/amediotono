function SectionHeader({ eyebrow, title, sub, titleColors }: { eyebrow?: string; title: string; sub?: string; titleColors?: string[] }) {
  const words = title.split(" ");
  return (
    <div className="sec-head">
      {eyebrow && <div className="sec-eyebrow">{eyebrow}</div>}
      <h2>
        {titleColors
          ? words.map((w, i) => <span key={i} style={{ color: titleColors[i] || "inherit", marginRight: 12, display: "inline-block" }}>{w}</span>)
          : title}
      </h2>
      {sub && <div className="sec-sub">{sub}</div>}
    </div>
  );
}

const COURSES = [
  { name: "Música", desc: "Teoría, lectura, ritmo y conjunto.", color: "var(--orange)", tag: "Todas las edades", icon: "🎼" },
  { name: "Canto", desc: "Técnica vocal, respiración y repertorio.", color: "var(--pink)", tag: "Desde 6 años", icon: "🎤" },
  { name: "Piano", desc: "Desde tus primeras notas hasta tu primera pieza.", color: "var(--blue)", tag: "Niños y adultos", icon: "🎹" },
  { name: "Violín", desc: "Postura, afinación y sensibilidad musical.", color: "var(--green)", tag: "Desde 7 años", icon: "🎻" },
  { name: "Flauta", desc: "Sonido, articulación y obras solistas.", color: "var(--red)", tag: "Desde 8 años", icon: "🎶" },
  { name: "Guitarra", desc: "Acordes, ritmo y tus canciones favoritas.", color: "var(--purple)", tag: "Todas las edades", icon: "🎸" },
  { name: "Batería", desc: "Coordinación, groove y bandas en vivo.", color: "var(--orange)", tag: "Desde 8 años", icon: "🥁" },
  { name: "Arte", desc: "Dibujo, pintura y experimentación visual.", color: "var(--yellow)", tag: "Todas las edades", icon: "🎨" },
];

const WA_NUMBER = "573228725396";
const WA_MSG = encodeURIComponent("¡Hola! Quiero más información sobre los cursos.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export function CursosSection() {
  return (
    <section className="block alt" id="cursos" data-screen-label="Cursos">
      <div className="container">
        <SectionHeader
          eyebrow="¿Qué te gustaría aprender?"
          title="Nuestros cursos"
          titleColors={["var(--pink)", "var(--blue)"]}
          sub="Clases para todas las edades, en grupos pequeños y con atención personalizada."
        />
        <div className="courses-grid">
          {COURSES.map((c) => (
            <div className="course-card" key={c.name}>
              <div className="course-icon" style={{ background: c.color }}>{c.icon}</div>
              <h3 style={{ color: c.color }}>{c.name}</h3>
              <p className="desc">{c.desc}</p>
              <span className="tag">{c.tag}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a className="btn btn-pink" href={WA_URL} target="_blank" rel="noopener">
            ¡Quiero inscribirme! →
          </a>
        </div>
      </div>
    </section>
  );
}