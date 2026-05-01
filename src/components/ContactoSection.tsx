const WA_NUMBER = "573228725396";
const WA_MSG = encodeURIComponent("¡Hola! Quiero más información sobre los cursos.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export function ContactoSection() {
  return (
    <section className="block contact-section" id="contacto" data-screen-label="Contacto">
      <div className="container">
        <div className="contact-card">
          <div className="sec-eyebrow" style={{ color: "var(--red)" }}>¿Listo para empezar?</div>
          <h2>
            <span style={{ color: "var(--orange)" }}>Hablemos</span>{" "}
            <span style={{ color: "var(--pink)" }}>por</span>{" "}
            <span style={{ color: "var(--green)" }}>WhatsApp</span>
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.1rem", marginTop: 12 }}>
            Te respondemos rápido. Te contamos sobre clases, horarios y inscripciones.
          </p>
          <div style={{ marginTop: 28 }}>
            <a className="btn btn-wa" href={WA_URL} target="_blank" rel="noopener" style={{ fontSize: "1.15rem", padding: "18px 32px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.48 0 .15 5.33.15 11.89c0 2.1.55 4.14 1.6 5.94L.05 24l6.34-1.66a11.86 11.86 0 0 0 5.65 1.43h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.42-8.4Z"/>
              </svg>
              Escríbenos al 322 8725396
            </a>
          </div>

          <div className="contact-row">
            <a className="contact-pill" href="https://instagram.com/amediotonomusic" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              @amediotonomusic
            </a>
            <a className="contact-pill" href="https://facebook.com/amediotonomusic" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 14.5 6H17V2h-3.5C11 2 9 4 9 6.5V10H6v4h3v8h4Z"/></svg>
              Facebook
            </a>
            <a className="contact-pill" href="mailto:amediotono1@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
              amediotono1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}