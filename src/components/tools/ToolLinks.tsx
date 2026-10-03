import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function ToolLinks({ links }: { links: Array<{ href: string; title: string; text: string }> }) {
  const tx = useText();
  return (
    <ul className="ed-link-list">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} prefetch={false}>
            <strong>{tx(link.title)}</strong>
            <span>{tx(link.text)}</span>
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
