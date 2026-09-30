import { jsonLd, type JsonLdNode } from "@/lib/seo";

export function JsonLdScript({ nodes }: { nodes: JsonLdNode | JsonLdNode[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(nodes) }}
    />
  );
}
