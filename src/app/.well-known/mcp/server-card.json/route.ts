import { MCP_INSTRUCTIONS, MCP_PATH, MCP_SERVER_INFO, mcpToolDefinitions } from "@/lib/mcp";
import { SITE_DESCRIPTION, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** MCP server card (SEP-1649): lets agents discover /mcp before connecting. */
export function GET() {
  return Response.json(
    {
      version: "1.0",
      protocolVersion: "2025-06-18",
      serverInfo: MCP_SERVER_INFO,
      description: SITE_DESCRIPTION,
      iconUrl: absoluteUrl("/icon.png"),
      documentationUrl: absoluteUrl("/llms.txt"),
      websiteUrl: absoluteUrl("/"),
      transport: { type: "streamable-http", endpoint: absoluteUrl(MCP_PATH) },
      capabilities: { tools: { listChanged: false } },
      authentication: { required: false, schemes: [] },
      instructions: MCP_INSTRUCTIONS,
      tools: mcpToolDefinitions(),
      resources: [],
      prompts: [],
    },
    { headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "public, max-age=3600, s-maxage=86400" } },
  );
}
