import { getImageProps } from "next/image";
import { HeroEntrance } from "./HeroEntrance";

const HERO_BACKGROUND_QUALITY = 100;

function HeroBackground() {
  const common = {
    alt: "",
    decoding: "async" as const,
    fetchPriority: "low" as const,
    loading: "eager" as const,
    sizes: "100vw",
  };
  const {
    props: { srcSet: mobileSrcSet, ...imageProps },
  } = getImageProps({
    ...common,
    src: "/hero-bg-mobile-art-hd.webp",
    width: 1024,
    height: 1536,
    quality: HERO_BACKGROUND_QUALITY,
  });

  return (
    <picture className="hero-bg-layer">
      <source
        media="(min-width: 881px)"
        srcSet="/hero-bg-hd.webp 1672w, /hero-bg-hd-2x.webp 3344w"
        sizes="100vw"
        type="image/webp"
      />
      <source media="(min-width: 881px)" srcSet="/hero-bg.svg" type="image/svg+xml" />
      <img
        {...imageProps}
        srcSet={mobileSrcSet}
        alt=""
        className="hero-bg-image"
        draggable={false}
      />
    </picture>
  );
}

export function Hero() {
  return (
    <section className="hero hero-with-bg" data-screen-label="Hero">
      <HeroBackground />
      <div className="container hero-grid">
        <HeroEntrance />
      </div>
      <a className="hero-scroll-cue" href="#cursos" aria-label="Ir a cursos">
        <span className="hero-scroll-mouse" aria-hidden="true">
          <span className="hero-scroll-wheel" />
        </span>
      </a>
    </section>
  );
}
