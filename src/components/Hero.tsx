import Image from "next/image";
import { Squiggle } from "./Ornaments";
import { HeroEntrance } from "./HeroEntrance";

export function Hero() {
  return (
    <section className="hero hero-with-bg" data-screen-label="Hero">
      <Image
        src="/hero-bg.svg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />
      <div className="container hero-grid" style={{ position: "relative", zIndex: 2 }}>
        <HeroEntrance />
      </div>
    </section>
  );
}
