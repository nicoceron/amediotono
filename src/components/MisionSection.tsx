"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

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

const FOUNDERS = [
  { name: "Daniela Cárdenas", role: "Iniciación Musical", color: "var(--purple)", bio: "Soy la profe de los mil recursos: convierto colores, burbujas, pañuelos y cuentos en experiencias donde la música se vive antes de aprenderse.", photo: "/profes/daniela-cardenas.svg" },
  { name: "Gisselle Torres", role: "Flauta", color: "var(--green)", bio: "Tu profe de flauta que no omite lo gracioso que es equivocarse en clases. Soy Gisselle, ¡si no te ríes pierdes!", photo: "/profes/gisselle-torres.svg" },
];

export function MisionSection() {
  const missionRef = useRef<HTMLElement>(null);
  const foundersRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mission section
      const mHeader = missionRef.current!.querySelector(".sec-head");
      const mCards = missionRef.current!.querySelectorAll(".mvo-card");

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (mHeader) {
        const parts = [mHeader.querySelector(".sec-eyebrow"), mHeader.querySelector("h2"), mHeader.querySelector(".sec-sub")].filter(Boolean);
        tl1.from(parts, { opacity: 0, y: 30, duration: 0.7, stagger: 0.1, ease: "power3.out" });
      }

      tl1.from(mCards, {
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
      }, "-=0.4");

      // Founders section
      const fHeader = foundersRef.current!.querySelector(".sec-head");
      const fCards = foundersRef.current!.querySelectorAll(".teacher-card");

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: foundersRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (fHeader) {
        const parts = [fHeader.querySelector(".sec-eyebrow"), fHeader.querySelector("h2")].filter(Boolean);
        tl2.from(parts, { opacity: 0, y: 30, duration: 0.7, stagger: 0.1, ease: "power3.out" });
      }

      tl2.from(fCards, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={missionRef} className="block alt" id="mision" data-screen-label="Misión / Visión">
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

      <section ref={foundersRef} className="block" id="fundadoras" data-screen-label="Fundadoras">
        <div className="container">
          <SectionHeader
            eyebrow="Las fundadoras"
            title="Quienes lo empezaron todo"
            titleColors={["var(--purple)", "var(--green)"]}
          />
          <div className="founders-grid">
            {FOUNDERS.map((f, i) => (
              <div className="teacher-card" key={i}>
                <div className="teacher-photo">
                  <div className="bg" style={{ background: f.color, opacity: 0.55 }}></div>
                  <img src={f.photo} alt={f.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit", zIndex: 1 }} />
                </div>
                <h3 style={{ color: f.color }}>{f.name}</h3>
                <div className="role">{f.role}</div>
                <p className="bio">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
