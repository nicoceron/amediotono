"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

export type BlogSearchItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  keywords: string;
};

const MAX_RESULTS = 12;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function BlogSearch({ items }: { items: BlogSearchItem[] }) {
  const [query, setQuery] = useState("");
  const index = useMemo(
    () =>
      items.map((item) => ({
        item,
        haystack: normalize(`${item.title} ${item.excerpt} ${item.category} ${item.keywords}`),
        title: normalize(item.title),
      })),
    [items],
  );

  const terms = normalize(query).split(/\s+/).filter((term) => term.length > 1);
  const results = terms.length
    ? index
        .filter(({ haystack }) => terms.every((term) => haystack.includes(term)))
        .sort(
          (a, b) =>
            terms.filter((term) => b.title.includes(term)).length -
            terms.filter((term) => a.title.includes(term)).length,
        )
        .map(({ item }) => item)
    : [];

  return (
    <div className="blog-search">
      <form className="blog-search-field" role="search" onSubmit={(event) => event.preventDefault()}>
        <Search size={20} strokeWidth={2.4} aria-hidden="true" />
        <label className="visually-hidden" htmlFor="blog-search-input">
          Buscar en el blog
        </label>
        <input
          id="blog-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busca: violín para niños, afinar guitarra, admisión…"
          autoComplete="off"
        />
        {query && (
          <button type="button" onClick={() => setQuery("")} aria-label="Borrar búsqueda">
            <X size={18} strokeWidth={2.4} aria-hidden="true" />
          </button>
        )}
      </form>

      {terms.length > 0 && (
        <div className="blog-search-results" aria-live="polite">
          <p className="blog-search-count">
            {results.length === 0
              ? "No encontramos artículos con esas palabras. Prueba con otra búsqueda."
              : `${results.length} ${results.length === 1 ? "artículo" : "artículos"}`}
          </p>
          {results.length > 0 && (
            <ul>
              {results.slice(0, MAX_RESULTS).map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} prefetch={false}>
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
