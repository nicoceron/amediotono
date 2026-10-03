import { jsonLd, type JsonLdNode } from "@/lib/seo";
import {localizeStructuredData} from "@/i18n/server";

export async function JsonLdScript({ nodes }: { nodes: JsonLdNode | JsonLdNode[] }) {
  const translated = await localizeStructuredData(nodes) as JsonLdNode | JsonLdNode[];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(translated) }}
    />
  );
}
