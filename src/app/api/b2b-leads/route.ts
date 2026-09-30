import { B2B_INSTITUTION_TYPES, getB2BService } from "@/lib/b2b";
import { CONTACT_EMAIL } from "@/lib/contact";
import { emailTableHtml, sendFormEmail } from "@/lib/mailer";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LIMITS = {
  nombre: 120,
  cargo: 120,
  institucion: 160,
  tipo: 80,
  correo: 160,
  telefono: 40,
  ciudad: 80,
  servicio: 80,
  necesidad: 2000,
} as const;

type LeadField = keyof typeof FIELD_LIMITS;

class LeadValidationError extends Error {}

function readField(body: Record<string, unknown>, name: LeadField, required: boolean) {
  const raw = body[name];
  const value = typeof raw === "string" ? raw.trim() : "";

  if (required && !value) {
    throw new LeadValidationError("Completa todos los campos obligatorios.");
  }

  return value.slice(0, FIELD_LIMITS[name]);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, message: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field.
  if (typeof body.sitio_web === "string" && body.sitio_web.trim()) {
    return Response.json({ ok: true });
  }

  try {
    const nombre = readField(body, "nombre", true);
    const cargo = readField(body, "cargo", false);
    const institucion = readField(body, "institucion", true);
    const tipo = readField(body, "tipo", true);
    const correo = readField(body, "correo", true);
    const telefono = readField(body, "telefono", true);
    const ciudad = readField(body, "ciudad", true);
    const servicio = readField(body, "servicio", false);
    const necesidad = readField(body, "necesidad", true);

    if (!EMAIL_PATTERN.test(correo)) {
      throw new LeadValidationError("Revisa el correo electrónico.");
    }

    if (!B2B_INSTITUTION_TYPES.includes(tipo)) {
      throw new LeadValidationError("Selecciona el tipo de institución.");
    }

    if (body.consentimiento !== "si") {
      throw new LeadValidationError("Necesitamos tu autorización para tratar los datos.");
    }

    const serviceName = servicio ? getB2BService(servicio)?.name ?? "Aún no lo sabe" : "Aún no lo sabe";
    const rows = [
      ["Nombre", nombre],
      ["Cargo", cargo || "No indicó"],
      ["Institución", institucion],
      ["Tipo de institución", tipo],
      ["Correo", correo],
      ["Teléfono", telefono],
      ["Ciudad", ciudad],
      ["Servicio", serviceName],
      ["Necesidad", necesidad],
    ];

    const to =
      process.env.B2B_LEADS_EMAIL_TO?.trim() ||
      process.env.JOB_APPLICATION_EMAIL_TO?.trim() ||
      CONTACT_EMAIL;

    await sendFormEmail({
      to,
      replyTo: correo,
      subject: `Nueva solicitud B2B: ${institucion} (${serviceName})`,
      text: [
        "Nueva solicitud desde /academias.",
        "",
        ...rows.map(([label, value]) => `${label}: ${value}`),
      ].join("\n"),
      html: emailTableHtml(
        "Nueva solicitud de institución",
        "Solicitud recibida desde <strong>/academias</strong>.",
        rows,
      ),
    });

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof LeadValidationError) {
      return Response.json({ ok: false, message: error.message }, { status: 400 });
    }

    console.error("Failed to send B2B lead email", error);
    return Response.json(
      { ok: false, message: "No pudimos enviar tu solicitud en este momento." },
      { status: 500 },
    );
  }
}
