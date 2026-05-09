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
          Profes elegidas a mano.
          <br />
          Y con oído.
        </h2>
        <p className="calidad-banner-sub">
          Evaluamos su técnica, su pedagogía y su calidez humana antes de su
          primera clase contigo — porque tu tiempo y tu emoción merecen un
          buen profe.
        </p>
      </Reveal>
    </section>
  );
}
