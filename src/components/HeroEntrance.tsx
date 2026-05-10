"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function HeroEntrance() {
  const reduce = useReducedMotion();

  return (
    <div className="hero-logo-stage">
      <motion.div
        className="hero-logo-wrap"
        initial={reduce ? false : { opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -6, 0],
                  rotate: [0, -0.4, 0],
                }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }
          }
          style={{ display: "block", willChange: "transform" }}
        >
          <Image
            className="hero-logo-main"
            src="/logo.svg"
            alt="A ½ tono — Escuela de artes"
            width={1448}
            height={1086}
            priority
            sizes="(max-width: 700px) 76vw, (max-width: 1100px) 46vw, 500px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
