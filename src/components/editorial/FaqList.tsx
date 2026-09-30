import type { FaqItem } from "@/lib/content-types";
import { Inline } from "@/components/RichText";

export function FaqList({
  items,
  openFirst = true,
}: {
  items: FaqItem[];
  openFirst?: boolean;
}) {
  return (
    <div className="nosotros-faq-list">
      {items.map((item, index) => (
        <details
          className="nosotros-faq-item"
          key={item.question}
          open={openFirst && index === 0}
        >
          <summary>
            <h3 className="nosotros-faq-question">{item.question}</h3>
          </summary>
          <p>
            <Inline text={item.answer} />
          </p>
        </details>
      ))}
    </div>
  );
}
