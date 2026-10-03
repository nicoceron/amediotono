# Homepage scroll sticking — 2026-10-02

## Cause and fix

`SmoothScrollProvider` excluded every gesture over `.cf-grid` from Lenis,
including vertical gestures on the desktop layout. Lenis returns early for an
excluded event without stopping its current animation, so the native scroll
input competes with the existing animation and loses distance.

Remove the blanket `.cf-grid` exclusion and give the card region the documented
`data-lenis-prevent-horizontal` attribute. Vertical gestures stay with Lenis;
horizontal and predominantly horizontal diagonal gestures remain native for
the mobile carousel. Layout, artwork, videos, and animation timing are unchanged.

Documentation consulted: installed Next.js 16.3.8 guides for client components,
pathname effects and CSS; installed Lenis 1.3.23 README, nested-scroll attribute
table, and `onVirtualScroll` implementation. [Lenis documentation](https://github.com/darkroomengineering/lenis#nested-scroll).

## Verified

Browser tests used Chrome's trusted scroll gestures through CDP. To reproduce,
position the card grid 350 CSS pixels below the viewport top, then scroll down
700 pixels with the pointer at (700, 250). The grid crosses underneath the
pointer while the scroll animation is still running.

| Check | Result |
| --- | --- |
| Existing production, Spanish desktop | 700 pixels of wheel input moved the page only 282.78 pixels. Card events bypassed Lenis. |
| Unchanged local baseline, English desktop | Same gesture moved the page only 270 pixels. |
| Fixed local English and Spanish desktop | Same gesture moved the page 700 pixels, with no backwards frames; vertical card events stayed with Lenis. |
| Fixed local upward gesture crossing onto cards | -700 pixels of input moved the page -700 pixels. |
| Mobile, 390 × 844, horizontal wheel gesture | Carousel advanced 302 pixels; page vertical position stayed unchanged. |
| Mobile, predominantly horizontal diagonal gesture | Carousel advanced another 234 pixels; page vertical position stayed unchanged. |
| Mobile vertical wheel gesture over cards | Page followed the recorded vertical input; carousel horizontal position stayed unchanged. |
| Mobile vertical touch gesture | Page advanced 350.5 pixels; carousel horizontal position stayed unchanged. |
| Reduced motion | No Lenis instance; native 700-pixel input moved the page 700 pixels. |
| Spanish Contacto navigation | Reached `#contacto`; contact panel was visible in the viewport. |
| Static validation | Scoped ESLint, `npx tsc --noEmit`, `git diff --check`, and `npm run build` passed. Build generated all 3,061 static pages. |

Temporary viewport, touch, and reduced-motion overrides were reset. Test event
listeners and animation-frame recorders were removed.

## Tracking and follow-up

The initial Linear lookup required reauthentication. The existing connection
has since been refreshed, and this work is tracked in
[CEN-96](https://linear.app/central-lab/issue/CEN-96/fix-homepage-scrolling-sticking-over-como-funciona-cards).
The release includes the current main branch's navigation updates. The full
OpenNext Worker build and Wrangler deployment dry run passed. Production
deployment and live verification are in progress.

Follow-up [CEN-97](https://linear.app/central-lab/issue/CEN-97/make-reduced-motion-reveals-hydration-safe)
(Bug): **Make reduced-motion reveals hydration-safe.** A reduced-
motion reload logs a React hydration mismatch in the existing `Reveal` and
`FooterReveal` components: server-rendered opacity/transform attributes disagree
with the client's `initial={false}`. Those components are untouched by this fix.
Reproduce and verify visibility separately before closing that follow-up.
