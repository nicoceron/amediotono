import { ShieldCheck } from "lucide-react";
import { B2BLeadForm } from "@/components/B2BLeadForm";
import { B2B_INSTITUTION_TYPES, B2B_SERVICES } from "@/lib/b2b";

export function B2BLeadSection({
  title = "Solicita una propuesta",
  defaultService,
}: {
  title?: string;
  defaultService?: string;
}) {
  return (
    <section className="block ed-section b2b-lead-section" id="propuesta" aria-labelledby="propuesta-title">
      <div className="container">
        <div className="b2b-lead-card">
          <div className="b2b-lead-copy">
            <h2 className="ed-h2" id="propuesta-title">
              {title}
            </h2>
            <p>
              Cuéntanos qué profe necesitas o a quién quieres evaluar. Te respondemos con una
              propuesta ajustada a tu institución, sin compromiso.
            </p>
            <p className="b2b-lead-note">
              <ShieldCheck size={20} strokeWidth={2.4} aria-hidden="true" />
              Tus datos se usan solo para responder tu solicitud.
            </p>
          </div>
          <B2BLeadForm
            institutionTypes={B2B_INSTITUTION_TYPES}
            services={B2B_SERVICES.map(({ slug, name }) => ({ slug, name }))}
            defaultService={defaultService}
          />
        </div>
      </div>
    </section>
  );
}
