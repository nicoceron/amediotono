import Link from "next/link";
import { TEACHERS } from "@/lib/teachers";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "1",
    chip: "var(--green)",
    title: "Encuentra tu profe.",
    body: "Conoce a las profes de A ½ tono y elige con quién quieres empezar — desde la primera clase vas a sentirte en confianza.",
    accent: "var(--green)",
  },
  {
    number: "2",
    chip: "var(--yellow)",
    title: "Comienza a aprender.",
    body: "Tu profe adapta cada clase a tus objetivos — sin importar si llegas con miedo, sin saber leer una nota o queriendo perfeccionar tu técnica.",
    accent: "var(--orange)",
  },
  {
    number: "3",
    chip: "var(--blue)",
    title: "Avanza cada semana.",
    body: "Clases presenciales o virtuales, en grupos pequeños y con seguimiento real — para que cada semana suene un poquito mejor que la anterior.",
    accent: "var(--blue)",
  },
];

export function ComoFuncionaSection() {
  const featured = TEACHERS.slice(0, 3);

  return (
    <section
      className="block alt"
      id="como-funciona"
      data-screen-label="Cómo funciona"
    >
      <div className="container">
        <div className="cf-head">
          <h2 className="cf-title">
            <span style={{ color: "var(--orange)", marginRight: 12 }}>
              Cómo
            </span>
            <span style={{ color: "var(--ink)", marginRight: 12 }}>
              funciona
            </span>
            <span style={{ color: "var(--pink)" }}>A ½ tono</span>
          </h2>
        </div>

        <div className="cf-grid">
          {STEPS.map((step, i) => (
            <Reveal as="article" className="cf-card" key={step.number} delay={i * 120}>
              <span
                className="cf-step-chip"
                style={{ background: step.chip }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="cf-card-title">{step.title}</h3>
              <p className="cf-card-body">{step.body}</p>

              {i === 0 && (
                <div className="cf-card-visual cf-visual-profes">
                  {featured.map((t, idx) => (
                    <Link
                      key={t.slug}
                      href={`/profes/${t.slug}`}
                      className="cf-mini-profe"
                      style={{
                        borderColor: t.color,
                        zIndex: featured.length - idx,
                      }}
                    >
                      <div
                        className="cf-mini-profe-photo"
                        style={{ borderColor: t.color }}
                      >
                        <div
                          className="cf-mini-profe-bg"
                          style={{ background: t.color }}
                        />
                        <img src={t.photo} alt={t.shortName} />
                      </div>
                      <div className="cf-mini-profe-body">
                        <strong style={{ color: t.color }}>
                          {t.shortName}
                        </strong>
                        <span>Profe de {t.role.split("·")[0].trim()}</span>
                      </div>
                    </Link>
                  ))}
                  <Link href="/profes" className="cf-mini-profe-more">
                    Ver todas →
                  </Link>
                </div>
              )}

              {i === 1 && (
                <div className="cf-card-visual cf-visual-class">
                  <div className="cf-class-images">
                    <div className="cf-class-img-wrap" style={{ borderColor: "var(--orange)" }}>
                      <img src="/profes/gisselle-torres.svg" alt="Giselle - Profe de Flauta" />
                      <span style={{ color: "var(--orange)" }}>Giselle</span>
                    </div>
                    <div className="cf-class-img-wrap" style={{ borderColor: "var(--blue)" }}>
                      <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop&crop=face" alt="Estudiante" />
                      <span style={{ color: "var(--blue)" }}>Tú</span>
                    </div>
                  </div>
                </div>
              )}

              {i === 2 && (
                <div className="cf-card-visual cf-visual-progress">
                  <div className="cf-progress-img-wrap">
                    <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=600&h=300&fit=crop" alt="Estudiante progressando" />
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
