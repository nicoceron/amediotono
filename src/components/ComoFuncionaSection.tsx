import {useText} from "@/i18n/use-text";
import Image from "next/image";
import {
  BadgeCheck,
  GraduationCap,
  Languages,
} from "lucide-react";
import { TEACHERS } from "@/lib/teachers";
import { BrandText, BrandWordmark } from "@/components/BrandWordmark";
import { LazyVideo } from "@/components/LazyVideo";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "1",
    title: "Encuentra tu profe.",
    body: "Conoce a los profes de A ½ tono y elige con quién quieres empezar.",
    accent: "var(--pink)",
  },
  {
    number: "2",
    title: "Comienza a aprender.",
    body: "Tu profe ajusta la clase a tu objetivo, estés empezando o puliendo técnica.",
    accent: "var(--orange)",
  },
  {
    number: "3",
    title: "Avanza cada semana.",
    body: "Virtual o a domicilio, en grupos pequeños y con seguimiento para avanzar cada semana.",
    accent: "var(--blue)",
  },
];

export function ComoFuncionaSection() {
  const tx = useText();
  const featured = TEACHERS.slice(0, 3);

  return (
    <section
      className="block alt"
      id="como-funciona"
      data-screen-label={tx("Cómo funciona")}
    >
      <div className="container cf-container">
        <div className="cf-head">
          <h2 className="cf-title">
            <span className="cf-title-first" style={{ color: "var(--orange)" }}>{tx("Cómo")}</span>{tx(" ")}
            <span className="cf-title-rest">
              <span style={{ color: "var(--ink)" }}>{tx("funciona")}</span>
              <BrandWordmark className="cf-title-logo" />
            </span>
          </h2>
        </div>

        <div
          className="cf-grid"
          role="region"
          aria-label={tx("Pasos para empezar")}
          tabIndex={0}
          data-lenis-prevent-horizontal
        >
          {STEPS.map((step, i) => (
            <Reveal as="article" className="cf-card" key={step.number} delay={i * 120}>
              <span
                className="cf-step-chip"
                style={{ background: step.accent }}
                aria-hidden="true"
              >
                {tx(step.number)}
              </span>
              <h3 className="cf-card-title">{tx(step.title)}</h3>
              <p className="cf-card-body">
                <BrandText text={step.body} />
              </p>

              {i === 0 && (
                <div className="cf-card-visual cf-visual-profes">
                  {featured.map((t, idx) => (
                    <div
                      key={t.slug}
                      className="cf-mini-profe"
                      style={{
                        ["--cf-mini-accent" as string]: t.color,
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
                        <Image
                          src={t.photo}
                          alt={tx(t.shortName)}
                          fill
                          sizes="(max-width: 700px) 112px, 130px"
                          style={
                            t.photoPosition
                              ? { objectPosition: t.photoPosition }
                              : undefined
                          }
                        />
                      </div>
                      <div className="cf-mini-profe-body">
                        <div className="cf-mini-profe-head">
                          <strong>{tx(t.shortName)}</strong>
                          <BadgeCheck
                            size={18}
                            strokeWidth={2.4}
                            style={{ color: t.color }}
                            aria-label={tx("Profe verificado")}
                          />
                          {t.countryFlag && (
                            <span
                              className="cf-mini-profe-flag"
                              aria-label={tx(t.country)}
                              title={tx(t.country)}
                            >
                              {tx(t.countryFlag)}
                            </span>
                          )}
                        </div>
                        <span className="cf-mini-profe-line">
                          <GraduationCap size={18} strokeWidth={2.4} aria-hidden="true" />
                          <span>{tx("Profe de ")}{tx(t.skills[0]?.label ?? t.role)}</span>
                        </span>
                        <span className="cf-mini-profe-line">
                          <Languages size={18} strokeWidth={2.4} aria-hidden="true" />
                          <span>{tx((t.classLanguages ?? ["Español"]).join(" · "))}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {i === 1 && (
                <div className="cf-card-visual cf-visual-class">
                  <div className="cf-lesson-frame">
                    <LazyVideo
                      className="cf-lesson-video"
                      loadGroup="como-funciona-videos"
                      src="/comienza-a-aprender-guitarra.mp4"
                      loop
                      muted
                      playsInline
                      poster="/comienza-a-aprender-guitarra-poster.webp"
                      aria-label={tx("Estudiante tocando guitarra en clase")}
                    />
                  </div>
                </div>
              )}

              {i === 2 && (
                <div className="cf-card-visual cf-visual-progress">
                  <div className="cf-progress-frame">
                    <LazyVideo
                      className="cf-progress-video"
                      loadGroup="como-funciona-videos"
                      src="/avanza-cada-semana.mp4"
                      poster="/avanza-cada-semana-poster.webp"
                      loop
                      muted
                      playsInline
                      aria-label={tx("Presentación musical de estudiantes")}
                    />
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
