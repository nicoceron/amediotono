import { MCP_PATH } from "@/lib/mcp";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * API catalog (RFC 9727) as a linkset: the MCP server and the Markdown
 * collection for AI assistants, each with its description and docs.
 */
export function GET() {
  const catalog = absoluteUrl("/.well-known/api-catalog");
  const mcp = absoluteUrl(MCP_PATH);
  const llms = absoluteUrl("/llms.txt");
  return new Response(
    JSON.stringify({
      linkset: [
        { anchor: catalog, item: [{ href: mcp }, { href: llms }] },
        {
          anchor: mcp,
          "service-desc": [{ href: absoluteUrl("/.well-known/mcp/server-card.json"), type: "application/json" }],
          "service-doc": [{ href: llms, type: "text/markdown" }],
        },
        { anchor: llms, "service-doc": [{ href: "https://llmstxt.org/", type: "text/html" }] },
      ],
    }),
    {
      headers: {
        "Content-Type": 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
        Link: `<${catalog}>; rel="api-catalog"`,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
  );
}
