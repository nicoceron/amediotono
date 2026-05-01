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

const FEED_TILES = [
  { color: "var(--pink)", label: "clase de piano · jueves", video: false },
  { color: "var(--blue)", label: "ensayo de violín", video: true },
  { color: "var(--orange)", label: "muestra de fin de semestre", video: false },
  { color: "var(--green)", label: "taller de arte infantil", video: false },
  { color: "var(--red)", label: "concierto de canto", video: true },
  { color: "var(--yellow)", label: "guitarra grupal", video: false },
  { color: "var(--purple)", label: "batería en sala", video: true },
  { color: "var(--blue)", label: "flauta · tarde lluviosa", video: false },
];

export function FeedSection() {
  return (
    <section className="block" id="feed" data-screen-label="Feed Instagram">
      <div className="container">
        <SectionHeader
          eyebrow="Lo que pasa en clase"
          title="Nuestro feed"
          titleColors={["var(--pink)", "var(--orange)"]}
          sub="Síguenos en @amediotonomusic — fotos y videos de las clases y conciertos."
        />
        <div className="feed-grid">
          {FEED_TILES.map((t, i) => (
            <div className="feed-tile" key={i}>
              <div className="stripes-bg" style={{ background: t.color, opacity: 0.6 }}></div>
              <div style={{
                position: "absolute", inset: 0,
                background: "repeating-linear-gradient(-45deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 8px, transparent 8px, transparent 22px)"
              }}></div>
              {t.video && (
                <div className="play-icon">
                  <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1 L9 5 L2 9 Z" fill="var(--ink)" /></svg>
                </div>
              )}
              <div className="label">{t.label}</div>
            </div>
          ))}
        </div>
        <div className="feed-cta">
          <a className="btn" href="https://instagram.com/amediotonomusic" target="_blank" rel="noopener" style={{ background: "var(--paper)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
            Síguenos en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}