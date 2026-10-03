import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const tx = useText();
  return (
    <nav className="ed-breadcrumbs" aria-label={tx("Ruta de navegación")}>
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path}>
              {isLast ? (
                <span aria-current="page">{tx(item.name)}</span>
              ) : (
                <>
                  <Link href={item.path} prefetch={false}>
                    {tx(item.name)}
                  </Link>
                  <ChevronRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
