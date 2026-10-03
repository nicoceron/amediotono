# Analytics and Search Console audit — 2026-10-02

## Provider evidence before release

- Cloudflare, last 24 hours, bots excluded: 20 visits, 29 pageviews, LCP 95% good, INP 50% good / 17% needs improvement / 33% poor, CLS 95% good. The debug view showed two navigation-link observations at 15,016 ms and one article-layout shift at 0.111. These are small field samples, not controlled benchmarks.
- Search performance, selected three-month window: 34 clicks, 354 impressions, 9.6% CTR, average position 6.5. The displayed chart ended September 29.
- Page indexing summary dated September 20: four indexed pages, three redirected home origins and two filtered directory variants with proper canonicals. Direct requests confirmed all three home variants return 301 to HTTPS/www; the filtered URLs correctly canonicalize to `/profes`.
- Sitemap submitted and read October 2: success, 537 discovered pages. Discovery does not establish indexing.
- URL Inspection confirmed `/clases` and `/clases-de-musica-a-domicilio-bogota` are indexed. `/academias/seleccion-de-profesores` was discovered but had not been crawled. Google's live test confirmed it can be indexed, with a valid breadcrumb item; an indexing request was accepted into the priority crawl queue.
- Google's Breadcrumbs report: zero invalid items, six valid; HTTPS report: zero non-HTTPS issues. Google's Core Web Vitals report has insufficient field data for both device types.

## Changes

- Enable Next's full prefetching for the five primary navigation destinations, including the mobile teacher shortcut. `useLinkStatus` adds an immediate pending underline without moving the label.
- Remove the synchronous whole-document style scan from Lenis setup. The documented `prevent` callback handles nested tables and the steps carousel; existing `data-lenis-prevent` attributes continue to own directory filters and music diagrams.
- Load Satoshi through `next/font/local`, including its original weights and italics, with automatic Arial fallback metrics and font preloads. Optional font display prevents late font downloads from moving already-painted text. On a very slow first visit, the metric-adjusted fallback can remain until the next navigation. The music accidental subset remains ahead of the fallback.
- Add `npm run seo:check`, which validates the complete sitemap and internal page-link coverage against a local Worker or production.

## Validation before release

- Next production build and OpenNext Cloudflare build passed, along with TypeScript, lint and the content check for 217 articles.
- All 537 live sitemap pages returned 200, with one H1, unique titles, descriptions, self-canonicals, indexable metadata and parseable JSON-LD. The home URL's absent trailing slash is equivalent after URL normalization.
- `npm run seo:check -- http://localhost:8787`: 537 pages, 537 linked internal paths, zero failures.
- `npm run seo:check-ai -- http://localhost:8787 --worker`: 541 discovery links, 17 indices and 514 Markdown pages passed, including content negotiation and missing-resource 404 behavior.
- Controlled local production-build test: 4x CPU slowdown, 150 ms network latency, approximately 1.6 Mbps download, cold cache. The affected article recorded LCP 1,268 ms and no layout shifts; navigation events across all five primary destinations were 24–40 ms. These lab observations are separate from Cloudflare's historical field data. The exact 15-second outliers were not reproduced in the baseline session, so the source changes address verified performance bottlenecks without claiming a measured field recovery.
- Mobile Worker testing at 390 × 844: no horizontal page overflow, menu closed after navigation, directory filtering returned the expected teacher, and the contact anchor remained functional. No browser console errors were observed in the navigation test.

## Documentation consulted

- Installed Next 16.3.8 guides: linking and navigating, prefetching, `useLinkStatus`, `Link`, `loading.js` and `next/font/local`, under `node_modules/next/dist/docs/`.
- Installed Lenis README: `prevent` and nested-scroll handling.
- [Cloudflare Core Web Vitals](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/) and [soft-navigation measurement change](https://developers.cloudflare.com/changelog/post/2026-08-21-improved-soft-navigation-measurement-for-single-page-applications/).
- [Google canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [INP optimization](https://web.dev/articles/optimize-inp), and [OpenNext SSG caching](https://opennext.js.org/cloudflare/caching).

## Remaining measurement boundary

Search ranking, impressions, crawl scheduling and historical Core Web Vitals cannot be rewritten by a deployment. Review fresh field samples and Google's updated reports after visitors and crawlers encounter the release. Keep the HTTPS redirects and directory canonicals in place; their expected exclusions should not be marked as broken pages or removed from canonicalization.
