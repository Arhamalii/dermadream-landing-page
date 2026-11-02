# JawGlow Landing Page

Pixel-close recreation of the JawGlow™ “Korean Jawline Snatcher” sales landing page. Built for desktop and mobile from the design reference.

## Live demo

_Add your deployed URL here after you push (e.g. Vercel)._

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the build
```

## Folder structure

```
src/
  app/                 # layout, page, global styles, favicons
  components/
    sections/          # one file per page section
    *.tsx              # shared UI (CTA, countdown, cropped photos, etc.)
  data/
    content.ts         # copy, reviews, FAQs
    photos.ts          # named image crop catalog
public/images/         # product & review images
```

## Responsive breakpoints

Tailwind defaults; layout mainly switches at:

| Breakpoint | Width | Role |
|---|---|---|
| default | &lt; 640px | Mobile layout (Figma ~390px frame) |
| `sm` | ≥ 640px | Small tweaks (hero photo height, tube size) |
| `md` | ≥ 768px | Minor type/spacing |
| `lg` | ≥ 1024px | Desktop layout (Figma ~1440px frame) |

Most section reorders and desktop-only elements use `lg:`.

## Design notes / assumptions

- Matched the provided Figma frames and reference crops as closely as practical; not every micro-spacing on the full-length page is guaranteed pixel-identical.
- Images use a named crop catalog (`photos.ts`) instead of Figma node IDs.
- Two press logos were unnamed in the artwork (`pressLogoFive` / `pressLogoSix`); they still render on the teal “AS SEEN ON” bar.
- Sale countdown is a client timer for UI demo purposes, not a real server clock.
- CTAs are visual only (no live checkout / payment).
- No backend, CMS, or analytics wired up.
