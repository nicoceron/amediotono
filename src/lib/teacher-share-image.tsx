/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  getTeacherBySlug,
  primaryTeacherRole,
  type Teacher,
} from "@/lib/teachers";

export const TEACHER_SHARE_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

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

function publicAssetPath(path: string) {
  return join(process.cwd(), "public", path.replace(/^\/+/, ""));
}

function imageType(path: string) {
  const extension = path.slice(path.lastIndexOf(".")).toLowerCase();
  return IMAGE_TYPES[extension] ?? "image/png";
}

async function imageDataUrl(path: string) {
  const data = await readFile(publicAssetPath(path), "base64");
  return `data:${imageType(path)};base64,${data}`;
}

function teacherColor(teacher: Teacher) {
  return COLOR_VALUES[teacher.color] ?? teacher.color;
}

function compact(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const slice = normalized.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : maxLength - 1).trim()}…`;
}

function socialCardText(value: string) {
  return value
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateTeacherShareImage(slug: string) {
  const teacher = getTeacherBySlug(slug);
  const logoSrc = await imageDataUrl("/logo-mark-transparent.png");

  if (!teacher) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logoSrc} alt="" width={360} />
        </div>
      ),
      TEACHER_SHARE_IMAGE_SIZE,
    );
  }

  const accent = teacherColor(teacher);
  const photoSrc = await imageDataUrl(`/profes-share/${teacher.slug}.jpg`);
  const role = primaryTeacherRole(teacher);
  const roleLabel = `Profe de ${compact(role, 44)}`;
  const formats = teacher.classFormats?.join(" y ") || "virtuales y a domicilio";
  const nameSize = teacher.name.length > 24 ? 50 : 58;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          color: "#2A1B3D",
          display: "flex",
          padding: "58px 64px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderTop: `18px solid ${accent}`,
          }}
        />
        <div
          style={{
            width: 450,
            height: 450,
            border: `14px solid ${accent}`,
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            background: accent,
            marginTop: 32,
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={450}
            height={450}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: teacher.photoPosition || "50% 38%",
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 68,
            paddingRight: 12,
          }}
        >
          <img src={logoSrc} alt="" width={136} />
          <div
            style={{
              alignSelf: "flex-start",
              marginTop: 24,
              padding: "9px 16px",
              borderRadius: 999,
              color: accent,
              background: "#F8F4FB",
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {roleLabel}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: nameSize,
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            {teacher.name}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 24,
              lineHeight: 1.2,
              color: "#5C4A6E",
              fontWeight: 600,
            }}
          >
            {compact(socialCardText(teacher.bio), 102)}
          </div>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              fontSize: 22,
              lineHeight: 1,
              color: "#2A1B3D",
              fontWeight: 800,
            }}
          >
            <span>{teacher.location}</span>
            <span style={{ margin: "0 14px", color: accent }}>•</span>
            <span>Clases {formats}</span>
          </div>
        </div>
      </div>
    ),
    TEACHER_SHARE_IMAGE_SIZE,
  );
}
