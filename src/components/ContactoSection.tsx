"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { whatsappHref } from "@/lib/contact";

const HEADLINE_WORDS = ["Únete", "a", "nuestra", "comunidad", "musical"];
const PANEL_FOLDED = { opacity: 1, scale: 0.5, rotateX: 90 };
const PANEL_OPEN = { opacity: 1, scale: 1, rotateX: 0 };
const PANEL_OPEN_SPRING = { damping: 60, mass: 1, stiffness: 360 };
const PANEL_CLOSE_SPRING = { damping: 60, mass: 1, stiffness: 240 };
const WORD_SPRING = { damping: 50, mass: 1, stiffness: 300 };
const BUTTON_SPRING = { damping: 80, mass: 1, stiffness: 200 };

const FLOATING_ASSETS = [
  {
    src: "/voces-icon-1.png",
    alt: "",
    className: "contact-float contact-float-1",
    width: 1254,
    height: 1254,
    loopScale: 1.1,
  },
  {
    src: "/voces-icon-2.png",
    alt: "",
    className: "contact-float contact-float-2",
    width: 1254,
    height: 1254,
    loopScale: 1.2,
  },
  {
    src: "/voces-icon-3.png",
    alt: "",
    className: "contact-float contact-float-3",
    width: 1254,
    height: 1254,
    loopScale: 0.9,
  },
  {
    src: "/voces-icon-4.png",
    alt: "",
    className: "contact-float contact-float-4",
    width: 1254,
    height: 1254,
    loopScale: 0.9,
  },
];

type CtaBreakpoint = "desktop" | "tablet" | "phone";

function getCtaBreakpoint(): CtaBreakpoint {
  if (window.innerWidth >= 1380) return "desktop";
  if (window.innerWidth >= 810) return "tablet";
  return "phone";
}

function subscribeCtaBreakpoint(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
}

function getServerCtaBreakpoint(): CtaBreakpoint {
  return "desktop";
}

function useCtaBreakpoint() {
  return useSyncExternalStore(
    subscribeCtaBreakpoint,
    getCtaBreakpoint,
    getServerCtaBreakpoint,
  );
}

function subscribeHydrated(onStoreChange: () => void) {
  const timeout = window.setTimeout(onStoreChange, 0);
  return () => window.clearTimeout(timeout);
}

function getHydratedSnapshot() {
  return true;
}

function getServerHydratedSnapshot() {
  return false;
}

function useHasMounted() {
  return useSyncExternalStore(
    subscribeHydrated,
    getHydratedSnapshot,
    getServerHydratedSnapshot,
  );
}

export function ContactoSection() {
  const reduce = useReducedMotion();
  const breakpoint = useCtaBreakpoint();
  const hasMounted = useHasMounted();
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const animateContainer = hasMounted && !reduce && breakpoint === "desktop";
  const animateTitle = hasMounted && !reduce && breakpoint !== "tablet";

  useEffect(() => {
    if (!animateContainer) {
      return;
    }

    lastScrollYRef.current = window.scrollY;

    const updatePanelState = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY >= lastScrollYRef.current;

      lastScrollYRef.current = currentScrollY;

      setPanelOpen((wasOpen) => {
        if (rect.top > viewportHeight + 80) return false;
        if (rect.bottom < 0) return false;
        if (scrollingDown && rect.top <= viewportHeight * 0.72) return true;
        if (!scrollingDown && rect.top >= viewportHeight * 0.42) return false;
        if (rect.top <= viewportHeight * 0.45 && rect.bottom >= 0) return true;
        return wasOpen;
      });
    };

    updatePanelState();
    window.addEventListener("scroll", updatePanelState, { passive: true });
    window.addEventListener("resize", updatePanelState);

    return () => {
      window.removeEventListener("scroll", updatePanelState);
      window.removeEventListener("resize", updatePanelState);
    };
  }, [animateContainer]);

  return (
    <section
      ref={sectionRef}
      className="contact-cta-section"
      id="contacto"
      data-screen-label="Contacto"
    >
      <motion.article
        key={hasMounted ? breakpoint : "static"}
        className="contact-cta-panel"
        initial={animateContainer ? PANEL_FOLDED : false}
        animate={animateContainer ? (panelOpen ? PANEL_OPEN : PANEL_FOLDED) : undefined}
        transition={{
          ...(panelOpen ? PANEL_OPEN_SPRING : PANEL_CLOSE_SPRING),
          delay: panelOpen ? 0 : 0.08,
          type: "spring",
        }}
      >
        <Image
          className="contact-cta-bg"
          src="/hero-bg.webp"
          alt=""
          fill
          sizes="(max-width: 809px) calc(100vw - 40px), min(calc(100vw - 60px), 1300px)"
          priority={false}
        />

        <div className="contact-cta-content">
          <motion.h2
            className="contact-cta-title"
            aria-label="Únete a nuestra comunidad musical"
            initial={animateTitle ? "hidden" : false}
            whileInView={animateTitle ? "show" : undefined}
            viewport={{ once: true, amount: 0.5 }}
          >
            {HEADLINE_WORDS.map((word, index) => (
              <motion.span
                aria-hidden="true"
                key={word}
                variants={{
                  hidden: {
                    opacity: reduce ? 1 : 0.001,
                    y: reduce ? 0 : 10,
                    filter: reduce ? "blur(0px)" : "blur(10px)",
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      ...WORD_SPRING,
                      delay: 0.4 + index * 0.05,
                      type: "spring",
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <p className="contact-cta-copy">
            Acompañamos el crecimiento artístico con clases cercanas, creativas y llenas de confianza.
          </p>

          <motion.a
            className="kidora-pill contact-cta-button"
            href={whatsappHref("¡Hola! Quiero más información sobre las clases de A medio tono.")}
            target="_blank"
            rel="noopener"
            initial={animateContainer ? { opacity: 0, y: 24, scale: 0.8 } : false}
            whileInView={animateContainer ? { opacity: 1, y: 0, scale: 1 } : undefined}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...BUTTON_SPRING, delay: 0.2, type: "spring" }}
          >
            <span className="kidora-pill-text" aria-hidden="true">
              <span>Escríbenos</span>
              <span>Escríbenos</span>
            </span>
            <span className="kidora-pill-icon" aria-hidden="true">
              <span>
                <ArrowRight size={20} strokeWidth={2.6} />
              </span>
              <span>
                <ArrowRight size={20} strokeWidth={2.6} />
              </span>
            </span>
            <span className="visually-hidden">Escríbenos por WhatsApp</span>
          </motion.a>
        </div>

        {FLOATING_ASSETS.map((asset) => (
          <motion.div
            className={asset.className}
            aria-hidden="true"
            key={asset.src}
            whileInView={reduce ? undefined : { scale: asset.loopScale }}
            viewport={{ amount: 0, once: false }}
            transition={
              reduce
                ? undefined
                : { duration: 2, ease: "linear", repeat: Infinity, repeatType: "mirror" }
            }
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              sizes="60px"
            />
          </motion.div>
        ))}
      </motion.article>

      <div className="contact-cta-black-band" aria-hidden="true" />
    </section>
  );
}
