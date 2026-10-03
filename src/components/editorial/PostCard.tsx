import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { BLOG_CATEGORIES, postPath, readingMinutes } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";

export function PostCard({ post, showCategory = true }: { post: BlogPost; showCategory?: boolean }) {
  const tx = useText();
  const category = BLOG_CATEGORIES[post.category];

  return (
    <li>
      <Link
        className="blog-card"
        href={postPath(post.slug)}
        prefetch={false}
        style={{ ["--ed-accent" as string]: category.accent }}
      >
        {showCategory && <span className="blog-card-category">{tx(category.label)}</span>}
        <h3>{tx(post.title)}</h3>
        <p>{tx(post.excerpt)}</p>
        <span className="blog-card-meta">{tx(readingMinutes(post))} {tx(" min de lectura")}</span>
        <span className="blog-card-more">
          {tx("Leer artículo")}<ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </Link>
    </li>
  );
}
