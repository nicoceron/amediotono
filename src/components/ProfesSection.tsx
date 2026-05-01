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

const TEACHERS = [
  { name: "Profe 01", role: "Piano y Canto", color: "var(--orange)", bio: "Pianista y cantante con experiencia en formación musical infantil y de adultos." },
  { name: "Profe 02", role: "Violín y Cuerdas", color: "var(--pink)", bio: "Violinista de orquesta. Ama enseñar técnica con paciencia y mucho juego." },
  { name: "Profe 03", role: "Guitarra", color: "var(--blue)", bio: "Guitarrista versátil. Te enseña tus canciones favoritas mientras aprendes lo importante." },
  { name: "Profe 04", role: "Arte", color: "var(--green)", bio: "Artista visual. Cree que todos podemos dibujar — solo hay que perderle el miedo al papel en blanco." },
];

export function ProfesSection() {
  return (
    <section className="block" id="profes" data-screen-label="Profesores">
      <div className="container">
        <SectionHeader
          eyebrow="Las personas detrás"
          title="Nuestros profes"
          titleColors={["var(--blue)", "var(--green)"]}
          sub="Apasionados por lo que hacen y, sobre todo, por enseñarlo."
        />
        <div className="teachers-grid">
          {TEACHERS.map((t, i) => (
            <div className="teacher-card" key={i}>
              <div className="teacher-photo">
                <div className="bg" style={{ background: t.color, opacity: 0.55 }}></div>
                <div className="stripes"></div>
                <div className="label">foto del profe — {t.role.toLowerCase()}</div>
              </div>
              <h3 style={{ color: t.color }}>{t.name}</h3>
              <div className="role">{t.role}</div>
              <p className="bio">{t.bio}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 32, fontFamily: "var(--font-hand)", fontSize: "1.3rem", color: "var(--ink-soft)" }}>
          ✶ Pronto agregamos a todo el equipo ✶
        </p>
      </div>
    </section>
  );
}