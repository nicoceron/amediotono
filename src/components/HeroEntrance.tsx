import Image from "next/image";

export function HeroEntrance() {
  return (
    <div className="hero-logo-stage">
      <h1 className="visually-hidden">
        Clases de música en Bogotá y virtuales para todas las edades
      </h1>
      <Image
        className="hero-logo-main"
        src="/logo-hero-hd.webp"
        alt="A ½ tono — Escuela de artes"
        width={2276}
        height={1707}
        loading="eager"
        fetchPriority="high"
        sizes="(max-width: 700px) 105vw, (max-width: 1100px) 64vw, 688px"
      />
    </div>
  );
}
