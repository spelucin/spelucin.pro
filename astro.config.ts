import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import astroIcon from "astro-icon"

export default defineConfig({
  site: "https://spelucin.pro",
  trailingSlash: "always",
  integrations: [astroIcon()],
  redirects: {
    "/tiendas-nuevas/": "/sprints/tiendas-nuevas/",
    "/servicios/shopify-seo-sprint/": "/sprints/shopify-seo-sprint/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
