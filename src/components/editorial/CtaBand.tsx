import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="block ed-cta-section" aria-label={title}>
      <div className="container">
        <div className="ed-cta-band">
          <div className="ed-cta-copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="ed-cta-actions">
            {primary.external ? (
              <a className="ed-button ed-button--light" href={primary.href} target="_blank" rel="noopener">
                <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                {primary.label}
              </a>
            ) : (
              <Link className="ed-button ed-button--light" href={primary.href} prefetch={false}>
                {primary.label}
                <ArrowRight size={20} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            )}
            {secondary && (
              <Link className="ed-cta-secondary" href={secondary.href} prefetch={false}>
                {secondary.label}
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
