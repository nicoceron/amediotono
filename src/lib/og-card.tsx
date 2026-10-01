/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_CARD_SIZE = { width: 1200, height: 630 };

const COLOR_VALUES: Record<string, string> = {
  "var(--orange)": "#FD9804",
  "var(--pink)": "#FA60A2",
  "var(--green)": "#13A272",
  "var(--blue)": "#046FC9",
  "var(--red)": "#F94517",
  "var(--purple)": "#8B5CF6",
};

const IMAGE_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

async function publicImageDataUrl(path: string) {
  const extension = path.slice(path.lastIndexOf(".")).toLowerCase();
  const data = await readFile(join(process.cwd(), "public", path.replace(/^\/+/, "")), "base64");
  return `data:${IMAGE_TYPES[extension] ?? "image/png"};base64,${data}`;
}

function compact(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const slice = normalized.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : maxLength - 1).trim()}…`;
}

/**
 * Branded 1200×630 social card used by blog posts and course pages, matching
 * the look of the teacher share images (white card, accent top border, logo).
 */
export async function renderOgCard({
  eyebrow,
  title,
  subtitle,
  accent = "var(--pink)",
  icon,
  footer = "amediotonomusic.com",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  accent?: string;
  icon?: string;
  footer?: string;
}) {
  const color = COLOR_VALUES[accent] ?? accent;
  const logoSrc = await publicImageDataUrl("/logo-mark-transparent.png");
  const wordmarkSrc = await publicImageDataUrl("/logo-wordmark-og.png");
  const iconSrc = icon ? await publicImageDataUrl(icon) : undefined;
  const safeTitle = compact(title, 96);
  const titleSize = safeTitle.length > 70 ? 54 : safeTitle.length > 44 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          color: "#2A1B3D",
          display: "flex",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 18,
            background: color,
          }}
        />
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logoSrc} alt="" width={120} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "10px 18px",
                borderRadius: 999,
                background: "#F8F4FB",
                color,
                fontSize: 26,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                marginTop: 24,
                maxWidth: iconSrc ? 760 : 1040,
                fontSize: titleSize,
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: -1,
              }}
            >
              {safeTitle}
            </div>
            {subtitle && (
              <div
                style={{
                  marginTop: 20,
                  maxWidth: iconSrc ? 760 : 1000,
                  fontSize: 26,
                  lineHeight: 1.25,
                  color: "#5C4A6E",
                  fontWeight: 600,
                }}
              >
                {compact(subtitle, 120)}
              </div>
            )}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", fontSize: 22, fontWeight: 800, color: "#2A1B3D" }}
          >
            <img src={wordmarkSrc} alt="" width={121} height={30} />
            <span style={{ margin: "0 14px", color }}>•</span>
            <span style={{ color: "#5C4A6E" }}>{footer}</span>
          </div>
        </div>
        {iconSrc && (
          <div
            style={{
              width: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                border: `12px solid ${color}`,
                background: "#F8F4FB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={iconSrc} alt="" width={190} height={190} />
            </div>
          </div>
        )}
      </div>
    ),
    OG_CARD_SIZE,
  );
}
