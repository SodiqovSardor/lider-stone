# Lider Stone — Premium Natural Stone Atelier

Multi-page marketing + catalog website for **Lider Stone**, a premium natural stone atelier in Tashkent, Uzbekistan.

Built with Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and TypeScript.

## Tech Stack

- **Framework:** Next.js 16 (App Router, `src/` directory)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` tokens)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **SEO:** next-sitemap (sitemap + robots.txt on build)
- **Fonts:** Playfair Display (headings), Inter (body) via `next/font/google`

## Routes

| Route | Page |
|---|---|
| `/` | Home — hero, featured stones, about, material categories, projects |
| `/sklad` | Inventory — all stones, filterable by material, searchable |
| `/sklad/[material]` | Inventory filtered by one material (Marble, Quartzite, Granite, Onyx, Travertine) |
| `/sklad/[material]/[slug]` | Individual stone detail page with gallery, specs, related stones |
| `/projects` | All projects, filterable by room type |
| `/projects/[slug]` | Single project case study |
| `/contact` | Contact page with map, form, Telegram/WhatsApp CTAs |
| `/*` | Custom 404 |

## Placeholder Data

All stone and project data lives in:

- `src/lib/data/stones.ts` — 15 stones across 5 materials
- `src/lib/data/projects.ts` — 6 projects

**To replace placeholder data:**

1. Replace the `images` arrays with actual image paths under `public/stones/` and `public/projects/`
2. Update `remotePatterns` in `next.config.ts` (remove Unsplash, add your domain)
3. Edit the stone/project objects with real content, dimensions, and descriptions

## Image Placeholders

Current images are from Unsplash via remote URLs. For production:

1. Download or place your images in `public/stones/` and `public/projects/`
2. Update paths in `src/lib/data/stones.ts` and `src/lib/data/projects.ts`
3. Remove `images.remotePatterns` from `next.config.ts`

## Development

```bash
npm run dev     # Start dev server
npm run build   # Production build (generates sitemap)
npm run start   # Start production server
```

## Building for Production

Build script includes `next-sitemap` as postbuild:

```bash
npm run build
```

Generates:
- Optimized Next.js build (`.next/`)
- `public/sitemap.xml`
- `public/robots.txt`
# lider-stone
