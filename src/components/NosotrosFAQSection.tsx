import { FaqList } from "@/components/editorial/FaqList";
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

        <FaqList items={NOSOTROS_FAQS} />
      </div>
    </section>
  );
}
