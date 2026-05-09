import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { TEACHERS } from "@/lib/teachers";

export const metadata: Metadata = {
  title: "Profes — A ½ tono",
  description:
    "Conoce a nuestras profes: paciencia, técnica y mucho cariño. Encuentra a tu profe ideal en A ½ tono.",
};

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

export default function ProfesPage() {
  return (
    <>
      <section
        className="block"
        id="profes-page"
        data-screen-label="Profesores"
      >
        <div className="container">
          <div className="sec-head">
            <div className="sec-eyebrow">El equipo</div>
            <h2>
              <span style={{ color: "var(--blue)", marginRight: 12 }}>
                Nuestras
              </span>
              <ColoredProfes />
            </h2>
            <div className="sec-sub">
              Cada profe trae su voz, su humor y su forma de enseñar. Conócelas
              y elige con quién quieres empezar.
            </div>
          </div>

          <div className="profes-grid">
            {TEACHERS.map((t) => (
              <Link
                href={`/profes/${t.slug}`}
                className="profes-card-link"
                key={t.slug}
              >
                <div className="profes-grid-item">
                  <div
                    className="profes-grid-photo"
                    style={{ borderColor: t.color }}
                  >
                    <div
                      className="profes-grid-photo-bg"
                      style={{ background: t.color }}
                    />
                    <img src={t.photo} alt={t.name} />
                  </div>
                  <div className="profes-grid-body">
                    <h3
                      className="profes-grid-name"
                      style={{ color: t.color }}
                    >
                      {t.name}
                    </h3>
                    <p className="profes-grid-role">{t.role}</p>
                    <p className="profes-grid-bio">{t.bio}</p>
                    <span
                      className="profes-card-cta"
                      style={{ color: t.color }}
                    >
                      Ver perfil →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
