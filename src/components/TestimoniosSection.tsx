"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import type { CSSProperties } from "react";
import { FEATURED_QUOTES } from "@/lib/teachers";

function ColoredEscuela() {
  const letters = [
    { char: "e", color: "var(--orange)" },
    { char: "s", color: "var(--green)" },
    { char: "c", color: "var(--red)" },
    { char: "u", color: "var(--blue)" },
    { char: "e", color: "var(--pink)" },
    { char: "l", color: "var(--purple)" },
    { char: "a", color: "var(--yellow)" },
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

function trimQuote(text: string, maxChars = 220): string {
  if (text.length <= maxChars) return text;
  const slice = text.slice(0, maxChars);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : maxChars).trim()}…`;
}

export function TestimoniosSection() {
  return (
    <section className="block" id="testimonios" data-screen-label="Testimonios">
      <div className="container">
        <div className="sec-head">
          <div className="sec-eyebrow">Lo que dicen las familias</div>
          <h2>
            <span style={{ color: "var(--green)", marginRight: 12, display: "inline-block" }}>Voces</span>
            <span style={{ color: "var(--blue)", marginRight: 12, display: "inline-block" }}>de</span>
            <span style={{ color: "var(--purple)", marginRight: 12, display: "inline-block" }}>la</span>
            <ColoredEscuela />
          </h2>
        </div>

        <div className="testimonials-marquee testimonials-marquee--contained">
          <Marquee
            autoFill
            direction="right"
            speed={34}
            gradient={false}
            pauseOnHover
            className="testimonials-marquee-wrap"
          >
            {FEATURED_QUOTES.map((q) => (
              <Link
                href={`/profes/${q.teacherSlug}`}
                key={q.id}
                className="testi-marquee-card-link"
                aria-label={`Ver perfil de ${q.teacherName}`}
              >
                <article
                  className="testi-marquee-card"
                  style={{ "--voice-color": q.color } as CSSProperties & Record<"--voice-color", string>}
                >
                  <div className="testi-marquee-copy">
                    <p>“{trimQuote(q.quote)}”</p>
                    <strong>{q.author}</strong>
                    <span>
                      Estudiante de {q.teacherShortName}
                      {q.instrument ? ` · ${q.instrument}` : ""}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
