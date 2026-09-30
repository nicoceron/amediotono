import { getCloudflareContext } from "@opennextjs/cloudflare";

/** Sender for form notifications; the domain is verified in Cloudflare Email Sending. */
const FORM_EMAIL_FROM = { name: "A Medio Tono", email: "formularios@amediotonomusic.com" };

type FormEmail = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  attachments?: { filename: string; type: string; content: ArrayBuffer }[];
};

/** Sends a form notification through the Worker's Cloudflare Email Sending binding. */
export async function sendFormEmail({ attachments, ...email }: FormEmail) {
  const { env } = await getCloudflareContext({ async: true });

  await env.EMAIL.send({
    ...email,
    from: FORM_EMAIL_FROM,
    attachments: attachments?.map((attachment) => ({
      ...attachment,
      disposition: "attachment" as const,
    })),
  });
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function emailTableHtml(title: string, intro: string, rows: string[][]) {
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#4f596d;vertical-align:top;">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#373e4d;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#373e4d;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 16px;">${escapeHtml(title)}</h1>
      <p style="margin:0 0 16px;">${intro}</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;">${htmlRows}</table>
    </div>
  `;
}
