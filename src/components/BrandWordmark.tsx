import Image from "next/image";
import { Fragment } from "react";

/**
 * The hand-drawn "A ½ tono" wordmark, sized to the surrounding text. Its alt
 * is the plain brand name so headings read "Explora A medio tono" to crawlers
 * and screen readers (searches for "A medio tono" don't match "A ½ tono").
 */
export function BrandWordmark({ className }: { className?: string }) {
  return (
    <Image
      className={className ? `brand-wordmark ${className}` : "brand-wordmark"}
      src="/logo-nav.webp"
      alt="A medio tono"
      width={1205}
      height={300}
      sizes="(max-width: 700px) 160px, 260px"
    />
  );
}

const BRAND_PATTERN = /A (?:½|1\/2) ?tono/g;

/** Renders `text` with every "A ½ tono" swapped for the wordmark. */
export function BrandText({ text }: { text: string }) {
  const parts = text.split(BRAND_PATTERN);
  if (parts.length === 1) return text;

  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <BrandWordmark />}
      {part}
    </Fragment>
  ));
}
