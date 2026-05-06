const TEACHERS = [
  {
    name: "Gisselle Torres",
    role: "Flauta",
    color: "var(--green)",
    bio: "Tu profe de flauta que no omite lo gracioso que es equivocarse en clases. Soy Gisselle, ¡si no te ríes pierdes!",
    photo: "/profes/gisselle-torres.svg",
  },
  {
    name: "Daniela Cárdenas",
    role: "Violín",
    color: "var(--purple)",
    bio: "Soy la profe de los mil recursos: convierto colores, burbujas, pañuelos y cuentos en experiencias donde la música se vive antes de aprenderse.",
    photo: "/profes/daniela-cardenas.svg",
  },
  {
    name: "Sara Alfonso",
    role: "Piano",
    color: "var(--pink)",
    bio: "Soy Sara, pianista que no tiene tan buenos chistes, pero aprendemos divirtiéndonos. \"Music is medicine\"",
    photo: "/profes/sara-alfonso.svg",
  },
  {
    name: "Valentina Fernández",
    role: "Violín y Cuerdas",
    color: "var(--blue)",
    bio: "Soy Valentina, la violinista del color y con nuestros violines pintaremos de sonido nuestro corazón. Una sonrisa dibujada es lo más bello de la educación.",
    photo: "/profes/valentina-fernandez.svg",
  },
];

function ColoredProfes() {
  const letters = [
    { char: "p", color: "var(--orange)" },
    { char: "r", color: "var(--green)" },
    { char: "o", color: "var(--red)" },
    { char: "f", color: "var(--blue)" },
    { char: "e", color: "var(--pink)" },
    { char: "s", color: "var(--purple)" },
  ];
  return (
    <span>
      {letters.map((l, i) => (
        <span key={i} style={{ color: l.color }}>
          {l.char}
        </span>
      ))}
    </span>
  );
}

export function ProfesSection() {
  return (
    <section className="block alt" id="profes" data-screen-label="Profesores">
      <div className="container">
        <div className="profes-layout">
          {/* Left: Title */}
          <div className="profes-left">
            <h2 className="profes-title">
              <span style={{ color: "var(--blue)" }}>Nuestros</span>{" "}
              <ColoredProfes />
            </h2>
          </div>
        </div>

        {/* Minimalist 2x2 grid */}
        <div className="profes-grid">
          {TEACHERS.map((t) => (
            <div className="profes-grid-item" key={t.name}>
              <div className="profes-grid-photo" style={{ borderColor: t.color }}>
                <div className="profes-grid-photo-bg" style={{ background: t.color }} />
                <img src={t.photo} alt={t.name} />
              </div>
              <div className="profes-grid-body">
                <h3 className="profes-grid-name" style={{ color: t.color }}>
                  {t.name}
                </h3>
                <p className="profes-grid-role">{t.role}</p>
                <p className="profes-grid-bio">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
