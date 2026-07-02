"use client";

import { useEffect, useState } from "react";
import { Share } from "lucide-react";

type ShareTeacherButtonProps = {
  className?: string;
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

export function ShareTeacherButton({
  className,
  title,
  text,
  url,
  showLabel = true,
}: ShareTeacherButtonProps) {
  const [copied, setCopied] = useState(false);
  const label = copied ? "Enlace copiado" : "Compartir perfil";

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleShare = async () => {
    const shareData = { title, text, url };

    try {
      if (navigator.share) {
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
