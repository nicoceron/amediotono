import {useText} from "@/i18n/use-text";
import { FaqList } from "@/components/editorial/FaqList";
import { NOSOTROS_FAQS } from "@/lib/nosotros-faq";

export function NosotrosFAQSection() {
  const tx = useText();
  return (
    <section
      className="block nosotros-faq-section"
      id="preguntas-frecuentes"
      data-screen-label={tx("Preguntas frecuentes")}
    >
      <div className="container">
        <div className="sec-head nosotros-faq-head">
          <h2>{tx("Preguntas frecuentes")}</h2>
          <p className="sec-sub">
            {tx("Respuestas rápidas sobre A medio tono, las clases y la forma de empezar.")}</p>
        </div>

        <FaqList items={NOSOTROS_FAQS} />
      </div>
    </section>
  );
}
