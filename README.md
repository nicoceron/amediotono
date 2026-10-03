# A medio tono

Sitio de [A medio tono](https://www.amediotonomusic.com): clases de música virtuales y a domicilio en Bogotá, directorio de profes, blog y servicios de selección de profes para academias y colegios.

## Contenido y SEO

| Qué | Dónde | Notas |
| --- | --- | --- |
| Páginas de instrumento (`/clases/<id>`) | `src/content/courses/guides-*.ts` | Una guía por curso de `src/data/courses.json`. La página solo se publica si el curso tiene al menos un profe. |
| Artículos del blog (`/blog/<slug>`) | `src/content/blog/<slug>.ts` | Crea el archivo y listo: `npm run content:index` (se ejecuta solo antes de `dev` y `build`) regenera el índice. Sitemap, RSS, `llms.txt`, categorías e imagen para redes se generan solos. |
| Categorías del blog | `src/lib/blog.ts` | Títulos y descripciones de `/blog/categoria/<id>`. |
| Glosario (`/glosario-musical`) | `src/content/glossary.ts` | Términos con anclas propias. |
| Herramientas (`/herramientas`) | `src/lib/music-tools.ts`, `src/components/tools/` | Metrónomo, afinador, test de tipo de voz y entrenamiento auditivo. Los afinadores por instrumento se definen en `TUNER_PRESETS`, los rangos de voz en `VOICE_TYPES` y los intervalos en `INTERVALS`. La detección de tono está en `src/lib/pitch.ts`. |
| Páginas de formato (`/clases-de-musica-online`, `/clases-de-musica-a-domicilio-bogota`, `/preuniversitario-musica`) | `src/app/[locale]/<ruta>/page.tsx` | Textos, preguntas frecuentes y guías enlazadas en cada archivo. |
| Preguntas frecuentes del inicio | `src/components/HomeFaqSection.tsx` | Se muestran en el inicio y alimentan sus datos estructurados. |
| Imágenes para redes de páginas generales (`/og/<clave>.png`) | `src/lib/share-cards.ts` | Artículos, cursos y profes tienen su propia `share-image.png`. |
| Servicios para academias (`/academias/*`) | `src/lib/b2b.ts` | Textos, pasos, entregables y preguntas frecuentes. |
| Profes | `src/data/teachers.json` | Alimenta perfiles, páginas de instrumento, directorio, «Nosotros» y datos estructurados. |
| Vacante de profe (JobPosting) | `src/lib/job-posting.ts` | Extiende `JOB_VALID_THROUGH` mientras sigan contratando. |
| Metadatos y datos estructurados | `src/lib/seo.ts` | Actualiza `SITE_CONTENT_UPDATED_AT` cuando cambien textos de páginas generales. |

En el texto de guías y artículos se puede usar `**negrita**` y `[enlace](/ruta)`. Los enlaces a `/clases/<id>` de cursos sin página llevan automáticamente al directorio filtrado.

Antes de publicar artículos nuevos, valida el contenido con `npm run content:check` (campos, longitudes, enlaces internos y afirmaciones prohibidas).

`npm run seo:check -- http://localhost:8787` valida todas las páginas del sitemap en el Worker local: estado HTTP, canonical, título único, descripción, un solo h1, indexabilidad, JSON-LD y enlaces internos. Sin URL valida producción. Las páginas deben pasar estas comprobaciones antes de interpretar los avisos de Search Console como errores del sitio; los redirects HTTP/HTTPS y las variantes filtradas del directorio son exclusiones esperadas.

Cada despliegue a producción (`scripts/deploy-production.sh`) avisa por IndexNow a Bing, Yandex, Seznam, Naver y Yep las URLs nuevas o modificadas en ese despliegue (compara con el sitemap publicado justo antes; si no lo puede leer, envía todas). `npm run indexnow` envía el sitemap completo a mano. La clave IndexNow es pública por diseño y está en `src/data/indexnow.json` (`INDEXNOW_KEY` la reemplaza).

Para asistentes de IA: `/llms.txt` es un índice breve con datos clave y enlaces a los índices de clases, profes, academias, blog, herramientas, acordes y escalas (`/<sección>/llms.txt`). El blog enlaza los índices de cada categoría (`/blog/categoria/<id>/llms.txt`). Todos se generan desde el contenido publicado en `src/lib/ai-discovery.ts`. `/llms-full.txt` reúne clases, profes, servicios, glosario e índice del blog; cada artículo se lee completo en su propia URL Markdown. Artículos, clases, servicios para academias, perfiles de profes, acordes, escalas, afinadores por instrumento, metrónomos por ritmo y el glosario tienen versión Markdown agregando `.md` a la URL. Las páginas HTML enlazan `/llms.txt` con `rel="describedby"` y su versión Markdown con `rel="alternate"`; las versiones Markdown incluyen ese enlace y el canonical HTML en la cabecera HTTP `Link`. Si un agente pide `Accept: text/markdown`, `worker.ts` responde en la misma URL con la versión Markdown (o con el índice `llms.txt` en la portada y los hubs de sección) y las respuestas llevan `Vary: Accept`. `robots.txt` permite a los rastreadores de buscadores y de IA y declara Content Signals (`search=yes, ai-input=yes, ai-train=yes`).

Para agentes: `/mcp` es un servidor MCP público de solo lectura (Streamable HTTP, sin sesiones) con las herramientas `search`, `fetch`, `find_teachers`, `school_info` y `whatsapp_link`, definidas en `src/lib/mcp.ts` sobre el registro de páginas de `src/lib/agent-resources.ts`. Se anuncia en `/.well-known/mcp/server-card.json`, en el catálogo `/.well-known/api-catalog` (RFC 9727), en `llms.txt` y en la cabecera `Link` de cada página HTML. Los navegadores con WebMCP (`navigator.modelContext`) reciben las mismas herramientas desde `src/app/[locale]/layout.tsx`. Después de compilar, valida el grafo completo con `npm run seo:check-ai`; con `npm run preview` agrega `-- http://localhost:8787 --worker` para probar también la negociación de Markdown; tras desplegar, usa `npm run seo:check-ai -- https://www.amediotonomusic.com`.

La verificación pública de Bing está en `src/data/search-verification.json`; `BING_SITE_VERIFICATION` permite reemplazarla. Google Search Console verifica el dominio por DNS. Las verificaciones y las respuestas de IndexNow no garantizan indexación: comprueba la fecha del informe y el estado de cada URL en las herramientas del buscador. Si se abren otros perfiles oficiales (Google Business Profile, Facebook, TikTok…), agrégalos en `OTHER_PROFILE_URLS` de `src/lib/contact.ts` solo tras verificar su identidad y URL.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/[locale]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare

The site runs on Cloudflare Workers through [OpenNext](https://opennext.js.org/cloudflare) (`wrangler.jsonc`, `open-next.config.ts`). Cloudflare Workers Builds is connected to this repository: every push to `main` runs `npx opennextjs-cloudflare build`, then `npm run deploy:production` (deploy plus IndexNow).

- `npm run preview` builds the Worker and runs it locally with Wrangler.
- `npm run deploy` builds and deploys it from your machine.
- Form emails go through Cloudflare Email Sending (the `EMAIL` binding); locally Wrangler writes them to `.wrangler/tmp/email` instead of sending them.

## Languages and appearance

The site uses Next.js 16.3 and [Next-intl](https://next-intl.dev/docs/routing/setup).
Spanish is the default and keeps its existing URLs. English (`/en`), Portuguese
(`/pt`) and French (`/fr`) cover the page copy, editorial content, forms and tools.
Slugs remain stable across languages. The picker preserves the current path,
query and anchor. Only a manual language choice is remembered in `TONO_LOCALE`;
otherwise the next visit uses the browser's preferred supported language. Choose
“System language” to clear that override. Unsupported languages fall back to Spanish.

Theme follows `prefers-color-scheme` on first paint and when the OS preference
changes. The theme picker can save Light or Dark, or return to System. Both
preferences work independently.

Messages are saved in `messages/{es,en,pt,fr}.json`. Source text has a stable key
from `src/i18n/key.ts`; `useText` / `getText` access these messages through
Next-intl. Components translate their own copy, and `Inline` translates its full
Markdown string before parsing it. Interpolation uses Next-intl's ICU formatter.
Editorial catalogs stay on the server; the browser receives the UI namespace.
Canonicals, language alternates, structured data and the sitemap use the locale.
Routing uses the Edge `middleware.ts` convention for OpenNext 1.20 compatibility;
the new Node `proxy.ts` bundler currently expects a trace file absent from Next
16.3. The application itself keeps the Node runtime.
Spanish Markdown/RSS/discovery and share-image endpoints retain their existing
URLs. Non-Spanish pages do not advertise a translated Markdown twin.

The initial non-Spanish catalogs were machine translated locally with
[Argos Translate](https://argos-translate.readthedocs.io/). French uses the
Spanish → English → French path. No visitor-triggered translation request, paid
API, hosted translation service or API key is needed. The editorial translations
still benefit from human copy review. Reviewed control wording is kept in
`messages/overrides.json` and reapplied without replacing other edits.

To update translations after changing Spanish copy:

```sh
npm run i18n:extract
# Python 3.12 is recommended for the translation dependencies.
python3.12 -m venv .venv-translations
.venv-translations/bin/pip install -r scripts/translation-requirements.txt
.venv-translations/bin/python scripts/setup-translation-models.py
.venv-translations/bin/python scripts/translate-catalogs.py
npm run i18n:overrides
npm run i18n:check
npm run build
```

Model setup downloads public model files; translating the website runs locally.
Generation preserves existing nonempty translations and checkpoints each batch.
`i18n:check` rejects missing messages, changed interpolation arguments, damaged
Markdown destinations and lost bold markers. It also runs before a production
build. For composed metadata or generated music labels, run
`node scripts/extract-translations.mjs --prerender` after a build; it reads only
Spanish pages and retains those messages on later normal extraction runs.
