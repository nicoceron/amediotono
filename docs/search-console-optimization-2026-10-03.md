# Search Console optimization — CEN-104

## Evidence observed on October 3

- The selected three-month Web report covered June 30–September 29: 34 clicks, 354 impressions, 9.6% CTR, average position 6.5.
- Homepage: 30 clicks / 247 impressions / 12.1% CTR / position 4.5. `/profes`: 3 / 161 / 1.9% / 8.0. Page impression counts can overlap; do not sum them as property impressions.
- Only nine non-anonymized queries were exposed, all with zero recorded clicks. The property total includes searches omitted from the query table. `profesores de musica a domicilio` had five impressions / position 12.8; `profesor especializado en entrenamiento auditivo y solfeo` had four / position 81.5. These are directional, very small samples.
- The aggregate indexing report was last updated September 20: four indexed pages, three redirect exclusions, two proper-canonical exclusions. That is stale coverage, not a count of today's index.
- Individual inspection confirmed `/clases-de-musica-a-domicilio-bogota` is indexed, last crawled September 30, with Google selecting the declared canonical. Google's October 3 live test said the page can be indexed and detected a valid breadcrumb.
- Google successfully read the sitemap on October 2 and reported 537 discovered pages. The current live sitemap had 2,148 URLs after localization. Resubmission succeeded October 3; Google's displayed last-read date and discovery count had not yet advanced.
- A full production HTTP crawl passed the existing canonical, title, description, H1, language, indexability, JSON parsing and internal-link checks for all 2,148 pages.

## Changes

- Shorter, clearer directory title and description; contextual links to the 20 available course pages and the home/online class formats. Course coverage comes from `COURSE_PAGES`, which only publishes classes with teachers. Existing footer links remain useful and were already crawlable.
- Expand the existing theory page's introduction, metadata and FAQ to explain solfeo and ear training with a teacher. Link to the free practice tool and admission preparation without creating another overlapping landing page.
- Reviewed English, Portuguese and French translations for the revised copy. Branded metadata can translate its source title without requiring another prerender extraction.
- Localize typed entity definitions and references consistently, including Persons and Organizations, and localize breadcrumb/service destinations. Preserve personal, school and geographic names. Translate course FAQ source before stripping Markdown so visible answers and schema agree.
- Pass raw nodes to `JsonLdScript` in teacher pages, chord/scale directories and the job page, avoiding a second graph wrapper.
- Preserve later source updates in translated sitemap `lastmod`, rather than fixing every translated URL permanently to October 2.
- Extend `seo:check` to check graph shape, matching entity IDs/references and breadcrumb destinations, beyond successful JSON parsing.

## Validation and limits

Lint, TypeScript, 217-article content validation, four-locale catalogue checks, and the Next/OpenNext production build passed. The expanded HTTP SEO checks passed all 2,148 pages against the local Next production server. The local Wrangler bulk crawl encountered existing static-cache/`NoFallbackError` problems; that preview does not establish a production failure or a passing Worker HTTP crawl.

The broader translated catalogue has substantial existing corruption, including repeated characters, wrong identities/locations and malformed Markdown labels. It remains tracked in CEN-101 with new audit evidence and High priority. Catalogue completeness does not certify translation quality.

Publishing these changes and submitting a sitemap do not establish new indexing, higher rankings or more inquiries. Compare equivalent 28-day windows after Google recrawls; record individual URL inspection and sitemap freshness separately from the delayed aggregate coverage report.
