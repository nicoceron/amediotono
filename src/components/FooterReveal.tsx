"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const REVEAL_INITIAL = { opacity: 0, y: 42 };

/** Spring-in on scroll for the footer blocks; static when reduced motion is on. */
export function FooterReveal({
  as = "div",
  className,
  delay,
  label,
  children,
}: {
  as?: "div" | "nav";
  className?: string;
  delay: number;
  label?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const Component = as === "nav" ? motion.nav : motion.div;

  return (
    <Component
      className={className}
      aria-label={label}
      initial={reduce ? false : REVEAL_INITIAL}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ damping: 48, delay, mass: 1, stiffness: 420, type: "spring" }}
    >
      {children}
    </Component>
  );
}
