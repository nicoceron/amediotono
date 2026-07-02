"use client";

import { useEffect, useState } from "react";
import { Share } from "lucide-react";

type ShareTeacherButtonProps = {
  className?: string;
  imageFileName?: string;
  imageUrl?: string;
  title: string;
  text: string;
  url: string;
  showLabel?: boolean;
};

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

async function createShareFile(url: string, fileName: string) {
  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) throw new Error("Unable to load share image");

  const blob = await response.blob();
  if (!blob.type.startsWith("image/")) throw new Error("Invalid share image");

  return new File([blob], fileName, { type: blob.type || "image/png" });
}

function canShareFiles(file: File) {
  return navigator.canShare?.({ files: [file] }) ?? false;
}

export function ShareTeacherButton({
  className,
  imageFileName = "a-medio-tono-profe.png",
  imageUrl,
  title,
  text,
  url,
  showLabel = true,
}: ShareTeacherButtonProps) {
  const [copied, setCopied] = useState(false);
  const [shareFile, setShareFile] = useState<File | null>(null);
  const label = copied ? "Enlace copiado" : "Compartir perfil";

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    if (!imageUrl || typeof File === "undefined" || !navigator.canShare) {
      return;
    }

    let cancelled = false;

    createShareFile(imageUrl, imageFileName)
      .then((file) => {
        if (!cancelled && navigator.canShare?.({ files: [file] })) {
          setShareFile(file);
        }
      })
      .catch(() => {
        if (!cancelled) setShareFile(null);
      });

    return () => {
      cancelled = true;
    };
  }, [imageFileName, imageUrl]);

  async function getShareFile() {
    if (shareFile) return shareFile;
    if (!imageUrl || typeof File === "undefined" || !navigator.canShare) {
      return null;
    }

    const file = await createShareFile(imageUrl, imageFileName);
    if (!canShareFiles(file)) return null;

    setShareFile(file);
    return file;
  }

  const handleShare = async () => {
    const shareData = { title, text, url };

    try {
      if (navigator.share) {
        const file = await getShareFile();

        if (file) {
          const shareDataWithUrl = { ...shareData, files: [file] };
          if (navigator.canShare?.(shareDataWithUrl)) {
            await navigator.share(shareDataWithUrl);
            return;
          }

          const shareDataWithTextUrl = {
            title,
            text: `${text}\n\n${url}`,
            files: [file],
          };
          if (navigator.canShare?.(shareDataWithTextUrl)) {
            await navigator.share(shareDataWithTextUrl);
            return;
          }
        }

        await navigator.share(shareData);
        return;
      }

      await copyToClipboard(url);
      setCopied(true);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;

      await copyToClipboard(url);
      setCopied(true);
    }
  };

  return (
    <button
      type="button"
      className={["pd-share-button", className].filter(Boolean).join(" ")}
      onClick={handleShare}
      aria-label={label}
    >
      <Share size={18} strokeWidth={2.4} aria-hidden="true" />
      <span className={showLabel ? undefined : "visually-hidden"}>
        {label}
      </span>
    </button>
  );
}
