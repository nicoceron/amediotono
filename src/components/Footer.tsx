"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%",
          once: true,
        },
      });

      tl.from(ref.current!.querySelectorAll(".foot-logo, .hand, p"), {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="foot">
      <div className="foot-logo">
        <span style={{ color: "var(--orange)" }}>A</span>
        <span style={{ color: "var(--green)" }}>½</span>
        <span style={{ color: "var(--red)" }}>t</span>
        <span style={{ color: "var(--blue)" }}>o</span>
        <span style={{ color: "var(--pink)" }}>n</span>
        <span style={{ color: "var(--green)" }}>o</span>
      </div>
      <div className="hand" style={{ fontSize: "1.2rem", color: "var(--red)" }}>Escuela de artes</div>
      <p style={{ marginTop: 12 }}>© {new Date().getFullYear()} A medio tono · Hecho con cariño 🎶</p>
    </footer>
  );
}
