# spelucin.pro

Sitio web personal y consultoría SEO de Alex Spelucin. Construido con Astro 7 + Tailwind CSS v4.

## Stack

- Astro 7 (static, SSG)
- Tailwind CSS v4 vía `@tailwindcss/vite`
- astro-icon, @astrojs/sitemap
- React 18 (islas) + Keystatic (CMS en `astro.config.keystatic.ts`)

## Scripts

```bash
pnpm dev       # servidor de desarrollo (host: true)
pnpm build     # build de producción a ./dist
pnpm preview   # preview del build
pnpm cms       # dev con Keystatic habilitado
pnpm format    # formateo con oxfmt
```

## Estructura

- `src/pages/` — rutas (Home, Servicios, Casos de estudio, Sobre mí, Contacto)
- `src/components/` — componentes Astro
- `src/layouts/Base.astro` — layout base
- `src/data.ts` — tipos, servicios y casos de estudio
- `astro.config.ts` — configuración de Astro

## Despliegue

GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`).
Dominio propio: `spelucin.pro` (definido en `public/CNAME` y `site` en `astro.config.ts`).

CI: push a `main` → build con pnpm → deploy a GitHub Pages.
Requiere en Settings → Pages: Source = "GitHub Actions" y Custom domain = `spelucin.pro`.
