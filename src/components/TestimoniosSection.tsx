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

const TESTIMONIALS = [
  { quote: "Mi hijo de 7 años llega feliz a cada clase de piano. Los profes son una ternura y de verdad le enseñan.", name: "Laura M.", meta: "mamá de un estudiante" },
  { quote: "Llevaba años queriendo aprender guitarra y aquí por fin lo logré. Adultos: vengan sin miedo.", name: "Carlos R.", meta: "estudiante de guitarra" },
  { quote: "El ambiente es súper creativo. Mi hija no quiere que termine el semestre.", name: "Andrea P.", meta: "mamá de una artista de 9" },
  { quote: "Los grupos pequeños hacen toda la diferencia. Sentí progreso desde la segunda clase.", name: "Daniela S.", meta: "estudiante de canto" },
];

const avatarColors = ["var(--orange)", "var(--pink)", "var(--blue)", "var(--green)", "var(--red)"];

function initials(name: string) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

export function TestimoniosSection() {
  return (
    <section className="block" id="testimonios" data-screen-label="Testimonios">
      <div className="container">
        <SectionHeader
          eyebrow="Lo que dicen las familias"
          title="Voces de la escuela"
          titleColors={["var(--green)", "var(--blue)"]}
        />
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="quote-mark">&ldquo;</div>
              <p>{t.quote}</p>
              <div className="who">
                <div className="avatar" style={{ background: avatarColors[i % avatarColors.length] }}>{initials(t.name)}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}