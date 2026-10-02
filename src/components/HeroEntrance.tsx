import Image from "next/image";
import heroLogo from "../../public/logo-hero-hd.webp";

export function HeroEntrance() {
  return (
    <div className="hero-logo-stage">
      <h1 className="visually-hidden">
        A medio tono: clases de música a domicilio en Bogotá y virtuales para todas las edades
      </h1>
      <Image
        className="hero-logo-main"
        src={heroLogo}
        alt="A medio tono (A ½ tono), escuela de artes"
        width={2276}
        height={1707}
        preload
        sizes="(max-width: 380px) 99vw, (max-width: 700px) min(124vw, 660px), 853px"
      />
    </div>
  );
}
