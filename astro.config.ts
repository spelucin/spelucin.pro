import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://spelucin.pro",
  trailingSlash: "always",
  integrations: [astroIcon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
