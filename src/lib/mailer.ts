export function getSmtpConfig() {
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
