export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VERIFY_TOKEN_ENV = "WHATSAPP_WEBHOOK_VERIFY_TOKEN";

function getVerifyToken() {
  return process.env[VERIFY_TOKEN_ENV]?.trim();
}

function textResponse(body: string, status: number) {
  return new Response(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export async function GET(request: Request) {
  const verifyToken = getVerifyToken();

  if (!verifyToken) {
    console.error(`${VERIFY_TOKEN_ENV} is not configured.`);
    return textResponse("Webhook verification is not configured.", 500);
  }

  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === verifyToken && challenge !== null) {
    return textResponse(challenge, 200);
  }

  return textResponse("Forbidden", 403);
}

export async function POST(request: Request) {
  try {
    await request.json();
  } catch {
    return Response.json({ ok: false, message: "Invalid JSON payload." }, { status: 400 });
  }

  return Response.json({ ok: true });
}
