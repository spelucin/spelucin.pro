# spelucin.pro

Astro 7 + Tailwind CSS personal portfolio site.

## Development Server

An Astro development server runs on `$PORT` (default 8443).

- Preview URL: http://localhost:8443
- Hot reload: Changes to source files are reflected immediately

## Key Files

- `src/pages/` - File-based routing (all pages)
- `src/components/` - Astro components (Nav, Footer, Hero, etc.)
- `src/layouts/Base.astro` - Base HTML layout
- `src/data.ts` - Types, services & case study data
- `src/styles/global.css` - Global styles and Tailwind CSS import
- `package.json` - Dependencies and scripts
- `astro.config.ts` - Astro configuration

## Routing

- `/` — Home page
- `/sobre-mi` — About page
- `/contacto` — Contact page
- `/casos-de-estudio` — Case studies list
- `/casos-de-estudio/[slug]` — Case study detail
- `/servicio/[slug]` — Service detail

## Styling

This project uses **Tailwind CSS v4** for styling. Tailwind is loaded via the Vite plugin in `astro.config.ts`.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm format` - Format code with oxfmt
