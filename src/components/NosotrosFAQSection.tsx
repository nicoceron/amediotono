import { NOSOTROS_FAQS } from "@/lib/nosotros-faq";

export function NosotrosFAQSection() {
  return (
    <section
      className="block nosotros-faq-section"
      id="preguntas-frecuentes"
      data-screen-label="Preguntas frecuentes"
    >
      <div className="container">
        <div className="sec-head nosotros-faq-head">
          <h2>Preguntas frecuentes</h2>
          <p className="sec-sub">
            Respuestas rápidas sobre A medio tono, las clases y la forma de empezar.
          </p>
        </div>

        <div className="nosotros-faq-list">
          {NOSOTROS_FAQS.map((item, index) => (
            <details className="nosotros-faq-item" key={item.question} open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
