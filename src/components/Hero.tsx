import {useText} from "@/i18n/use-text";
import { HeroEntrance } from "./HeroEntrance";

export const HERO_MOBILE_AVIF_SRCSET =
  "/hero/hero-mobile-480.avif 480w, /hero/hero-mobile-720.avif 720w, /hero/hero-mobile-1024.avif 1024w";
export const HERO_DESKTOP_AVIF_SRCSET =
  "/hero/hero-desktop-1280.avif 1280w, /hero/hero-desktop-1672.avif 1672w, /hero/hero-desktop-2560.avif 2560w, /hero/hero-desktop-3344.avif 3344w";

/**
 * Responsive AVIF first (roughly 5x lighter than the original WebP), WebP as
 * the fallback. The first <source> whose media matches wins, so desktop
 * sources come first and the unconditioned mobile sources cover the rest.
 */
function HeroBackground() {
  const tx = useText();
  return (
    <picture className="hero-bg-layer">
      <source media="(min-width: 881px)" srcSet={HERO_DESKTOP_AVIF_SRCSET} sizes="100vw" type="image/avif" />
      <source
        media="(min-width: 881px)"
        srcSet="/hero/hero-desktop-1280.webp 1280w, /hero-bg-hd.webp 1672w, /hero-bg-hd-2x.webp 3344w"
        sizes="100vw"
        type="image/webp"
      />
      <source media="(min-width: 881px)" srcSet="/hero-bg.svg" type="image/svg+xml" />
      <source srcSet={HERO_MOBILE_AVIF_SRCSET} sizes="100vw" type="image/avif" />
      <source
        srcSet="/hero/hero-mobile-480.webp 480w, /hero/hero-mobile-720.webp 720w, /hero/hero-mobile-1024.webp 1024w"
        sizes="100vw"
        type="image/webp"
      />
      <img
        src="/hero-bg-mobile-art-hd.webp"
        width={1024}
        height={1536}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        alt={tx("")}
        className="hero-bg-image"
        draggable={false}
      />
    </picture>
  );
}

export function Hero() {
  const tx = useText();
  return (
    <section className="hero hero-with-bg" data-screen-label={tx("Hero")}>
      <HeroBackground />
      <div className="container hero-grid">
        <HeroEntrance />
      </div>
      <a className="hero-scroll-cue" href="#cursos" aria-label={tx("Ir a cursos")}>
        <span className="hero-scroll-arrow-wrap" aria-hidden="true">
          <svg className="hero-scroll-arrow" viewBox="0 0 44 38" focusable="false">
            <path d="M22 6V28" />
            <path d="M8 18C14.2 24.1 18.4 28.5 22 30C25.6 28.5 29.8 24.1 36 18" />
          </svg>
        </span>
      </a>
    </section>
  );
}
