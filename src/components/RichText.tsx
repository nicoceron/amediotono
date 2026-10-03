import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import type { ReactNode } from "react";
import type { RichBlock } from "@/lib/content-types";
import { resolveContentHref } from "@/lib/content-links";
import { ChordsBlock } from "@/components/music/ChordsBlock";
import { chordsSummary } from "@/lib/music-pages";

const INLINE_PATTERN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders `**bold**` and `[label](/href)` inside a plain string. */
export function Inline({ text: sourceText }: { text: string }) {
  const tx = useText();
  const text = tx(sourceText);
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(INLINE_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));

    const [, bold, label, href] = match;
    const key = `${index}-${match[0].length}`;

    if (bold) {
      nodes.push(
        <strong key={key}>
          <Inline text={bold} />
        </strong>,
      );
    } else if (href.startsWith("/") || href.startsWith("#")) {
      nodes.push(
        <Link key={key} href={resolveContentHref(href)} prefetch={false}>
          {tx(label)}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={key} href={href} target="_blank" rel="noopener">
          {tx(label)}
        </a>,
      );
    }

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}

/** Strips the inline syntax, for meta tags, feeds and structured data. */
export function plainText(text: string): string {
  const stripped = text.replace(INLINE_PATTERN, (_match, bold, label) => bold ?? label ?? "");
  // Bold text may itself contain a link: strip again until nothing is left.
  return stripped === text ? stripped : plainText(stripped);
}

export function RichBlocks({ blocks }: { blocks: RichBlock[] }) {
  const tx = useText();
  return blocks.map((block, index) => {
    switch (block.type) {
      case "p":
        return (
          <p key={index}>
            <Inline text={block.text} />
          </p>
        );
      case "h3":
        return (
          <h3 key={index}>
            <Inline text={block.text} />
          </h3>
        );
      case "ul":
        return (
          <ul key={index}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Inline text={item} />
              </li>
            ))}
          </ul>
        );
      case "ol":
        return (
          <ol key={index}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Inline text={item} />
              </li>
            ))}
          </ol>
        );
      case "callout":
        return (
          <aside className="prose-callout" key={index}>
            {block.title && (
              <strong className="prose-callout-title">
                <Inline text={block.title} />
              </strong>
            )}
            <p>
              <Inline text={block.text} />
            </p>
          </aside>
        );
      case "quote":
        return (
          <blockquote key={index}>
            <p>
              <Inline text={block.text} />
            </p>
            {block.cite && <cite>{tx(block.cite)}</cite>}
          </blockquote>
        );
      case "table":
        return (
          <div className="prose-table-wrap" key={index} role="region" aria-label={tx(block.caption ?? tx.template("Tabla: {p0}", {p0: tx(block.head.filter((cell) => cell.trim()).map(plainText).join(", "))}))} tabIndex={0}>
            <table>
              {block.caption && <caption>{tx(block.caption)}</caption>}
              <thead>
                <tr>
                  {block.head.map((cell, cellIndex) =>
                    // An empty corner cell (row labels below it) is not a header.
                    cell.trim() ? (
                      <th scope="col" key={cellIndex}>
                        <Inline text={cell} />
                      </th>
                    ) : (
                      <td key={cellIndex} />
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) =>
                      cellIndex === 0 ? (
                        <th scope="row" key={cellIndex}>
                          <Inline text={cell} />
                        </th>
                      ) : (
                        <td key={cellIndex}>
                          <Inline text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "chords":
        return <ChordsBlock key={index} slugs={block.chords} caption={block.caption} />;
      default:
        return null;
    }
  });
}

export function blocksToPlainText(blocks: RichBlock[]) {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "p":
        case "h3":
        case "callout":
        case "quote":
          return plainText(block.type === "callout" && block.title ? `${block.title}. ${block.text}` : block.text);
        case "ul":
        case "ol":
          return block.items.map((item) => `- ${plainText(item)}`).join("\n");
        case "table":
          return [block.head, ...block.rows].map((row) => row.map(plainText).join(" | ")).join("\n");
        case "chords":
          return chordsSummary(block.chords).map((line) => `- ${line.name}: ${line.frets}`).join("\n");
        default:
          return "";
      }
    })
    .join("\n\n");
}
