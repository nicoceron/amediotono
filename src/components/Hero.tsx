import { HeroEntrance } from "./HeroEntrance";

export function Hero() {
  return (
    <section className="hero hero-with-bg" data-screen-label="Hero">
      <div className="hero-bg-layer" aria-hidden="true" />
      <div className="container hero-grid">
        <HeroEntrance />
      </div>
    </section>
  );
}
