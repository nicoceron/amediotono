"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import type { CSSProperties } from "react";

function SectionHeader({ eyebrow, title, sub, titleColors }: { eyebrow?: string; title: string; sub?: string; titleColors?: string[] }) {
  const words = title.split(" ");
  return (
    <div className="sec-head">
      {eyebrow && <div className="sec-eyebrow">{eyebrow}</div>}
      <h2>
        {titleColors
          ? words.map((w, i) => (
            <span
              key={i}
              style={{
                color: titleColors[i] || "inherit",
                marginRight: i === words.length - 1 ? 0 : 12,
                display: "inline-block",
              }}
            >
              {w}{i === words.length - 1 ? "" : " "}
            </span>
          ))
          : title}
      </h2>
      {sub && <div className="sec-sub">{sub}</div>}
    </div>
  );
}

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

const TESTIMONIALS = [
  {
    quote: "Mi hijo de 7 años llega feliz a cada clase de piano. Los profes son una ternura y de verdad le enseñan.",
    name: "Laura M.",
    meta: "mamá de un estudiante",
    image: "/voces-icon-1.png",
    color: "var(--orange)",
  },
  {
    quote: "Llevaba años queriendo aprender guitarra y aquí por fin lo logré. Adultos: vengan sin miedo.",
    name: "Carlos R.",
    meta: "estudiante de guitarra",
    image: "/voces-icon-2.png",
    color: "var(--green)",
  },
  {
    quote: "El ambiente es súper creativo. Mi hija no quiere que termine el semestre.",
    name: "Andrea P.",
    meta: "mamá de una artista de 9",
    image: "/voces-icon-3.png",
    color: "var(--pink)",
  },
  {
    quote: "Los grupos pequeños hacen toda la diferencia. Sentí progreso desde la segunda clase.",
    name: "Daniela S.",
    meta: "estudiante de canto",
    image: "/voces-icon-4.png",
    color: "var(--blue)",
  },
];

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
      </div>

      <div className="testimonials-marquee">
        <Marquee
          autoFill
          direction="right"
          speed={34}
          gradient={false}
          pauseOnHover
          className="testimonials-marquee-wrap"
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              className="testi-marquee-card"
              key={`${t.name}-${i}`}
              style={{ "--voice-color": t.color } as CSSProperties & Record<"--voice-color", string>}
            >
              <div className="testi-marquee-photo">
                <Image
                  src={t.image}
                  alt=""
                  width={1254}
                  height={1254}
                  sizes="72px"
                />
              </div>
              <div className="testi-marquee-copy">
                <p>{t.quote}</p>
                <strong>{t.name}</strong>
                <span>{t.meta}</span>
              </div>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
