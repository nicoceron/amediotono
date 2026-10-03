import { MCP_SERVER_INFO, handleMcpMessage } from "@/lib/mcp";
import { absoluteUrl } from "@/lib/seo";

// Public and read-only, so any origin may call it (browser MCP clients, WebMCP).
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version, Last-Event-ID",
  "Access-Control-Expose-Headers": "Mcp-Session-Id",
};
const MAX_BODY_BYTES = 64 * 1024;

function json(body: unknown, status = 200) {
  return Response.json(body, { status, headers: { ...CORS, "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return json({ jsonrpc: "2.0", id: null, error: { code: -32600, message: "Request too large" } }, 413);
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, 400);
  }

  const messages = Array.isArray(body) ? body : [body];
  const responses = messages.map(handleMcpMessage).filter(Boolean);
  // Only notifications (e.g. notifications/initialized): accepted, no body.
  if (!responses.length) return new Response(null, { status: 202, headers: CORS });
  return json(Array.isArray(body) ? responses : responses[0]);
}

/** The server has no SSE stream; a GET explains how to connect instead. */
export function GET() {
  return new Response(
    `${MCP_SERVER_INFO.title}\n\nServidor MCP de solo lectura (Streamable HTTP). Conéctalo en tu asistente con la URL ${absoluteUrl("/mcp")}.\nDescripción: ${absoluteUrl("/.well-known/mcp/server-card.json")}\n`,
    { status: 405, headers: { ...CORS, Allow: "POST, OPTIONS", "Content-Type": "text/plain; charset=utf-8" } },
  );
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}
