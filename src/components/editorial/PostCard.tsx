import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_CATEGORIES, postPath, readingMinutes } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";

export function PostCard({ post, showCategory = true }: { post: BlogPost; showCategory?: boolean }) {
  const category = BLOG_CATEGORIES[post.category];

  return (
    <li>
      <Link
        className="blog-card"
        href={postPath(post.slug)}
        prefetch={false}
        style={{ ["--ed-accent" as string]: category.accent }}
      >
        {showCategory && <span className="blog-card-category">{category.label}</span>}
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="blog-card-meta">{readingMinutes(post)} min de lectura</span>
        <span className="blog-card-more">
          Leer artículo
          <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </Link>
    </li>
  );
}
