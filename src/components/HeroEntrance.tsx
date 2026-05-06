"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Squiggle } from "./Ornaments";

export function HeroEntrance() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      // Eyebrow
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );

      // Title words - staggered
      tl.fromTo(
        ".hero-word",
        { opacity: 0, y: 50, rotateX: -40 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );

      // Squiggle
      tl.fromTo(
        ".hero-squiggle",
        { opacity: 0, scaleX: 0, transformOrigin: "left center" },
        { opacity: 1, scaleX: 1, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );

      // Subtitle
      tl.fromTo(
        ".hero-sub",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <span className="hero-eyebrow" style={{ opacity: 0 }}>✦ Escuela de artes ✦</span>
      <h1>
        <span className="hero-word word c-orange" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>Descubre</span><br />
        <span className="hero-word word c-pink" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>tu</span>{" "}
        <span className="hero-word word c-blue" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>pasión</span>{" "}
        <span className="hero-word word c-green" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>por</span><br />
        <span className="hero-word word c-red" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>el arte.</span>
      </h1>
      <div className="hero-squiggle" style={{ marginTop: 12, maxWidth: 320, width: "60%", opacity: 0 }}>
        <Squiggle color="var(--accent)" style={{ width: "100%" }} />
      </div>
      <p className="hero-sub" style={{ opacity: 0 }}>
        En <strong>A ½ tono</strong> aprendes música y arte en grupos pequeños,
        con profes que te acompañan a tu ritmo. Para todas las edades.
      </p>
    </div>
  );
}
