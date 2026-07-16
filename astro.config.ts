import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import astroIcon from "astro-icon"

export default defineConfig({
  site: "https://spelucin.pro",
  trailingSlash: "always",
  integrations: [astroIcon()],
  vite: {
    plugins: [tailwindcss()],
  },
})
