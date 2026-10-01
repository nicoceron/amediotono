import Image from "next/image";

export function HeroEntrance() {
  return (
    <div className="hero-logo-stage">
      <h1 className="visually-hidden">
        A medio tono: clases de música a domicilio en Bogotá y virtuales para todas las edades
      </h1>
      <Image
        className="hero-logo-main"
        src="/logo-hero-hd.webp"
        alt="A medio tono (A ½ tono), escuela de artes"
        width={2276}
        height={1707}
        loading="eager"
        sizes="(max-width: 380px) 99vw, (max-width: 700px) 124vw, (max-width: 1100px) 64vw, 688px"
      />
    </div>
  );
}
