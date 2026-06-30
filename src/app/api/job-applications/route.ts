import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/contact";

export const runtime = "nodejs";

const MAX_CV_SIZE_BYTES = 4 * 1024 * 1024;

const ACCEPTED_CV_EXTENSIONS = new Set(["pdf", "doc", "docx"]);
const ACCEPTED_CV_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const FIELD_LABELS = {
  nombre: "Nombre",
  correo: "Correo electrónico",
  whatsapp_country_code: "País",
  whatsapp: "Teléfono",
  instrumento: "Instrumento que interpreta",
  pedagogia_musical: "Experiencia en pedagogía musical",
  formacion_preuniversitaria: "Experiencia en formación preuniversitaria",
  tipo_residencia: "Tipo de residencia",
  residencia: "Residencia",
} as const;

class RequestValidationError extends Error {
  status = 400;
}

function getRequiredText(formData: FormData, name: keyof typeof FIELD_LABELS) {
  const value = formData.get(name);

  if (typeof value !== "string" || !value.trim()) {
    throw new RequestValidationError(`Falta el campo: ${FIELD_LABELS[name]}.`);
  }

  return value.trim();
}

function getOptionalList(formData: FormData, name: string) {
  return formData
    .getAll(name)
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);
}

function getFileExtension(fileName: string) {
  const extension = fileName.split(".").pop();
  return extension ? extension.toLowerCase() : "";
}

function validateCvFile(formData: FormData) {
  const cv = formData.get("cv");

  if (!(cv instanceof File) || cv.size === 0) {
    throw new RequestValidationError("Debes adjuntar tu CV.");
  }

  if (cv.size > MAX_CV_SIZE_BYTES) {
    throw new RequestValidationError("El CV no puede pesar más de 4 MB.");
  }

  const extension = getFileExtension(cv.name);
  const hasAcceptedExtension = ACCEPTED_CV_EXTENSIONS.has(extension);
  const hasAcceptedMimeType = cv.type ? ACCEPTED_CV_MIME_TYPES.has(cv.type) : false;

  if (!hasAcceptedExtension && !hasAcceptedMimeType) {
    throw new RequestValidationError("El CV debe ser PDF, DOC o DOCX.");
  }

  return cv;
}

async function readFormData(request: Request) {
  try {
    return await request.formData();
  } catch {
    throw new RequestValidationError("La aplicación debe enviarse como formulario.");
  }
}

function getSmtpConfig() {
  const user = process.env.SMTP_USER?.trim();
  const rawPassword = process.env.SMTP_PASSWORD?.trim();
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";

  if (!user || !rawPassword) {
    throw new Error("Email delivery is not configured.");
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const password =
    host.toLowerCase() === "smtp.gmail.com"
      ? rawPassword.replace(/\s+/g, "")
      : rawPassword;

  return {
    host,
    port: Number.isFinite(port) ? port : 465,
    secure: (process.env.SMTP_SECURE ?? "true").toLowerCase() !== "false",
    auth: {
      user,
      pass: password,
    },
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatBooleanAnswer(value: string) {
  if (value === "si") return "Sí";
  if (value === "no") return "No";
  return value;
}

function buildEmailBody({
  nombre,
  correo,
  whatsappCountryCode,
  whatsapp,
  instrumento,
  pedagogiaMusical,
  formacionPreuniversitaria,
  tipoResidencia,
  residencia,
  idiomas,
}: {
  nombre: string;
  correo: string;
  whatsappCountryCode: string;
  whatsapp: string;
  instrumento: string;
  pedagogiaMusical: string;
  formacionPreuniversitaria: string;
  tipoResidencia: string;
  residencia: string;
  idiomas: string[];
}) {
  const rows = [
    ["Nombre", nombre],
    ["Correo electrónico", correo],
    ["WhatsApp", `${whatsappCountryCode} ${whatsapp}`],
    ["Instrumento", instrumento],
    ["Pedagogía musical", formatBooleanAnswer(pedagogiaMusical)],
    ["Formación preuniversitaria", formatBooleanAnswer(formacionPreuniversitaria)],
    ["Residencia", tipoResidencia === "bogota" ? "Bogotá" : "Municipio cercano"],
    ["Ubicación", residencia],
    ["Idiomas adicionales", idiomas.length ? idiomas.join(", ") : "No indicó"],
  ];

  const text = [
    "Nueva aplicación desde trabaja-con-nosotros.",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "El CV está adjunto a este correo.",
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#4f596d;">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#373e4d;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#373e4d;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 16px;">Nueva aplicación</h1>
      <p style="margin:0 0 16px;">Aplicación recibida desde <strong>trabaja-con-nosotros</strong>.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;">${htmlRows}</table>
      <p style="margin:16px 0 0;">El CV está adjunto a este correo.</p>
    </div>
  `;

  return { text, html };
}

export async function POST(request: Request) {
  try {
    const formData = await readFormData(request);
    const cv = validateCvFile(formData);

    const nombre = getRequiredText(formData, "nombre");
    const correo = getRequiredText(formData, "correo");
    const whatsappCountryCode = getRequiredText(formData, "whatsapp_country_code");
    const whatsapp = getRequiredText(formData, "whatsapp");
    const instrumento = getRequiredText(formData, "instrumento");
    const pedagogiaMusical = getRequiredText(formData, "pedagogia_musical");
    const formacionPreuniversitaria = getRequiredText(formData, "formacion_preuniversitaria");
    const tipoResidencia = getRequiredText(formData, "tipo_residencia");
    const residencia = getRequiredText(formData, "residencia");
    const idiomas = getOptionalList(formData, "idiomas");

    const cvBuffer = Buffer.from(await cv.arrayBuffer());
    const smtpConfig = getSmtpConfig();
    const transporter = nodemailer.createTransport(smtpConfig);
    const to = process.env.JOB_APPLICATION_EMAIL_TO?.trim() || CONTACT_EMAIL;
    const { text, html } = buildEmailBody({
      nombre,
      correo,
      whatsappCountryCode,
      whatsapp,
      instrumento,
      pedagogiaMusical,
      formacionPreuniversitaria,
      tipoResidencia,
      residencia,
      idiomas,
    });

    await transporter.sendMail({
      from: `"A Medio Tono" <${smtpConfig.auth.user}>`,
      to,
      replyTo: correo,
      subject: `Nueva aplicación de ${nombre}`,
      text,
      html,
      attachments: [
        {
          filename: cv.name || `cv-${nombre}.pdf`,
          content: cvBuffer,
          contentType: cv.type || undefined,
        },
      ],
    });

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof RequestValidationError) {
      return Response.json({ ok: false, message: error.message }, { status: error.status });
    }

    console.error("Failed to send job application email", error);
    return Response.json(
      {
        ok: false,
        message: "No pudimos enviar la aplicación. Inténtalo de nuevo en unos minutos.",
      },
      { status: 500 },
    );
  }
}
