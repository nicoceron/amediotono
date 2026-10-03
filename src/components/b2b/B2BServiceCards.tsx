import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import { ArrowRight, ChartColumnIncreasing, ClipboardCheck, SearchCheck } from "lucide-react";
import type { B2BService, B2BServiceIcon } from "@/lib/b2b";

const ICONS: Record<B2BServiceIcon, typeof SearchCheck> = {
  search: SearchCheck,
  clipboard: ClipboardCheck,
  chart: ChartColumnIncreasing,
};

export function B2BServiceCards({ services }: { services: B2BService[] }) {
  const tx = useText();
  return (
    <ul className="b2b-service-grid">
      {services.map((service) => {
        const Icon = ICONS[service.icon];

        return (
          <li key={service.slug}>
            <Link
              className="b2b-service-card"
              href={service.path}
              prefetch={false}
              style={{ ["--ed-accent" as string]: service.accent }}
            >
              <span className="b2b-service-icon" aria-hidden="true">
                <Icon size={26} strokeWidth={2.4} />
              </span>
              <h3>{tx(service.name)}</h3>
              <p>{tx(service.summary)}</p>
              <span className="b2b-service-more">
                {tx("Ver servicio")}<ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
