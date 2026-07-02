import { HeroEntrance } from "./HeroEntrance";

function HeroBackground() {
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
        src="/hero-bg-mobile-art-hd.webp"
        width={1024}
        height={1536}
        decoding="async"
        loading="eager"
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
    </section>
  );
}
