# A medio tono

Sitio de [A medio tono](https://www.amediotonomusic.com): clases de música virtuales y a domicilio en Bogotá, directorio de profes, blog y servicios de selección de profes para academias y colegios.

## Contenido y SEO

| Qué | Dónde | Notas |
| --- | --- | --- |
| Páginas de instrumento (`/clases/<id>`) | `src/content/courses/guides-*.ts` | Una guía por curso de `src/data/courses.json`. La página solo se publica si el curso tiene al menos un profe. |
| Artículos del blog (`/blog/<slug>`) | `src/content/blog/<slug>.ts` | Crea el archivo y regístralo en `src/content/blog/index.ts`. Sitemap, RSS, `llms.txt` e imagen para redes se generan solos. |
| Servicios para academias (`/academias/*`) | `src/lib/b2b.ts` | Textos, pasos, entregables y preguntas frecuentes. |
| Profes | `src/data/teachers.json` | Alimenta perfiles, páginas de instrumento, directorio y datos estructurados. |
| Vacante de profe (JobPosting) | `src/lib/job-posting.ts` | Extiende `JOB_VALID_THROUGH` mientras sigan contratando. |
| Metadatos y datos estructurados | `src/lib/seo.ts` | Actualiza `SITE_CONTENT_UPDATED_AT` cuando cambien textos de páginas generales. |

En el texto de guías y artículos se puede usar `**negrita**` y `[enlace](/ruta)`. Los enlaces a `/clases/<id>` de cursos sin página llevan automáticamente al directorio filtrado.

Después de publicar, envía las URLs nuevas a Bing/Yandex con `npm run indexnow` (lee el sitemap en producción).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
