# Sitewide scroll regression — 2026-10-03

Tracked in [CEN-99](https://linear.app/central-lab/issue/CEN-99/fix-sitewide-scrolling-stalls-over-tables-and-nested-content).

## Cause and shared fix

The previous homepage fix left a blanket `prose-table-wrap` exclusion in
`SmoothScrollProvider`. On the reported article, 700 CSS pixels of trusted
vertical wheel input moved the page only 282.22 pixels. The 25 events that
entered the table bypassed Lenis while its existing animation continued.

Use Lenis 1.3.23's documented `allowNestedScroll` option instead. A region must
actually have scrollable content in the gesture's direction to consume native
input. A table with horizontal overflow keeps vertical page input with Lenis.
This applies to every page using the shared provider, including `RichText`,
chord pages and all tool tables, without a list of page-specific exceptions.

Music index tables and scale fretboards also had blanket exclusions. Change
those to `data-lenis-prevent-horizontal`, matching the homepage carousel.
The remaining full exclusions belong to vertical directory dropdowns, the
mobile filter panel/sheet and navigation menus. Their own scrolling is retained.
The application page retains its existing native scrolling behavior.

Documentation: installed Next.js client-component and CSS guides; installed
Lenis README and `onVirtualScroll` / `hasNestedScroll` implementation;
[Lenis nested scrolling](https://github.com/darkroomengineering/lenis#nested-scroll).
Lenis caches nested-container geometry, while the existing explicit attributes
continue to handle the known horizontal carousels and menus.

## Browser verification

Tests use Chrome's trusted `Input.synthesizeScrollGesture`, not dispatched
`WheelEvent` objects. Position the first table or horizontal region 350 CSS
pixels below the viewport top, then send a 700-pixel downward gesture with the
pointer 250 pixels below the top and horizontally centered over the region.
The moving region enters underneath the pointer during the Lenis animation.
Record actual wheel deltas, page displacement, event cancellation and frame
direction. Allow animation frames to settle before evaluating displacement.

All 28 page templates passed this vertical regression locally in Spanish.
The article, chord index, scale index, scale detail, metronome and instrument
tuner templates also passed in English, Portuguese and French: 46 route
checks, each moving the expected 700 pixels with zero reversals.

| Template coverage | Representative routes |
| --- | --- |
| Homepage and lessons | `/`, `/clases`, `/clases/piano` |
| Teachers | `/profes`, `/profes/niko-ferro` |
| Academies | `/academias`, `/academias/seleccion-de-profesores` |
| Information | `/nosotros`, `/preuniversitario-musica`, `/clases-de-musica-online`, `/clases-de-musica-a-domicilio-bogota` |
| Application | `/trabaja-con-nosotros` |
| Editorial | `/blog`, `/blog/como-aprender-musica-desde-cero`, `/blog/categoria/aprender-musica`, `/glosario-musical` |
| Music references | `/acordes`, `/acordes/do-mayor`, `/escalas`, `/escalas/do-mayor` |
| Tools | `/herramientas`, `/herramientas/metronomo`, `/herramientas/metronomo/bambuco`, `/herramientas/afinador`, `/herramientas/afinador/guitarra`, `/herramientas/tipo-de-voz`, `/herramientas/entrenamiento-auditivo`, `/herramientas/circulo-de-quintas` |

Additional local checks:

- All three tables in the reported article: full 700-pixel movement, including
  an upward gesture, without reversals or native vertical table events.
- Mobile 390 × 844 article table: horizontal input moved the table 180 pixels
  without moving the page; diagonal input moved it back 120 pixels without
  moving the page. Vertical input moved the page 700 pixels with no table shift.
- Mobile touch: a 350-pixel gesture moved the page 353.5 pixels with no table
  shift. Touch scrolling remains native.
- Mobile chord index and scale fretboard: each accepted a horizontal 160-pixel
  gesture without page movement, followed by full vertical movement.
- Directory course dropdown: native input moved its scroll position 180 pixels
  while the page stayed at zero.
- Reduced motion: no Lenis class/instance; native vertical input moved the page
  700 pixels. The existing reveal hydration warning is tracked in CEN-97.
- Article table-of-contents anchor: target visible at 112.66 pixels below the
  viewport top, respecting the fixed navigation offset.
- Three consecutive article → directory → Back cycles: each subsequent
  700-pixel article gesture moved the page 700 pixels without reversals.

Viewport, touch and reduced-motion overrides were reset. Temporary wheel
listeners and animation-frame recorders were removed after each probe.

## Release validation

Scoped ESLint, TypeScript, `git diff --check`, the Next production build and
the full OpenNext Worker build passed. Deployment dry-run and live results
are recorded on CEN-99 as they complete.
