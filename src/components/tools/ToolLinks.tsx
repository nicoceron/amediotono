import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ToolLinks({ links }: { links: Array<{ href: string; title: string; text: string }> }) {
  return (
    <ul className="ed-link-list">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} prefetch={false}>
            <strong>{link.title}</strong>
            <span>{link.text}</span>
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
