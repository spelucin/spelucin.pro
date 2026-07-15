import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import astroIcon from "astro-icon"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import keystatic from "@keystatic/astro"

// Config de solo-desarrollo para editar contenido en /keystatic.
// Separado de astro.config.ts porque cargar @keystatic/astro rompe el build
// de producción (Rolldown/Vite 8 no resuelve el virtual module de astro-icon
// si el paquete de Keystatic llega a importarse en ese proceso). Se usa vía
// `pnpm cms`, nunca en `pnpm build`/`pnpm dev`.
export default defineConfig({
  site: "https://spelucin.pro",
  integrations: [astroIcon(), sitemap(), react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
})
