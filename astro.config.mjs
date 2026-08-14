import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://spelucin.pro',
  integrations: [
    icon(),
    sitemap({
       filter: (page) => !page.includes('/404') && !page.includes('/privacidad') && !page.includes('/terminos'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
