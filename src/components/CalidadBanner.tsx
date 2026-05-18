import { Reveal } from "@/components/Reveal";

export function CalidadBanner() {
  return (
    <section
      className="calidad-banner"
      data-screen-label="Calidad garantizada"
      aria-label="Calidad garantizada"
    >
      <Reveal className="calidad-banner-inner">
        <h2 className="calidad-banner-title">
          Profes elegidos a{" "}
          <span className="calidad-banner-accent">mano</span>, y{" "}
          <span className="calidad-banner-accent">oído</span>.
        </h2>
        <p className="calidad-banner-sub">
          Evaluamos a los profes antes de su primera clase.
        </p>
      </Reveal>
    </section>
  );
}
