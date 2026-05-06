"use client";

import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const ITEMS = [
  { word: "Iniciación Musical", icon: "/instruments/blue-note.svg" },
  { word: "Todos los Instrumentos", icon: "/instruments/orange-note.svg" },
  { word: "Presencial & Virtual", icon: "/instruments/pink-treble.svg" },
];

export function VocesStrip() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="voces-strip" aria-hidden="true">
      <Marquee
        autoFill
        speed={45}
        gradient={false}
        pauseOnHover={false}
        className="voces-marquee-wrap"
      >
        {ITEMS.map((item, i) => (
          <span className="voces-badge" key={i}>
            <img
              src={item.icon}
              alt=""
              className="voces-icon"
            />
            <span className="voces-word">{item.word}</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
