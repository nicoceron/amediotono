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

export function MisionSection() {
  return (
    <section className="block alt" id="mision" data-screen-label="Misión / Visión">
      <div className="container">
        <SectionHeader
          eyebrow="Quiénes somos"
          title="Nuestro corazón"
          titleColors={["var(--orange)", "var(--red)"]}
          sub="Una escuela donde el arte se vive, se siente y se comparte — sin importar la edad."
        />
        <div className="mission-grid">
          <div className="mvo-card">
            <span className="label">Misión</span>
            <p>Formar personas a través del arte y la música, en un espacio cálido donde cada estudiante encuentre su voz, su ritmo y su forma de expresarse.</p>
          </div>
          <div className="mvo-card">
            <span className="label">Visión</span>
            <p>Ser la escuela de artes referente de la región: un lugar donde niños, jóvenes y adultos descubran que aprender arte puede ser la mejor parte de su semana.</p>
          </div>
          <div className="mvo-card">
            <span className="label">Objetivo</span>
            <p>Ofrecer clases de altísima calidad humana y técnica, con grupos pequeños, profes apasionados y ambientes creativos que despierten la pasión por el arte.</p>
          </div>
        </div>
      </div>
    </section>
  );
}