import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import gtm from 'astro-gtm-lite';

export default defineConfig({
  site: 'https://spelucin.pro',
  integrations: [
    icon(),
    gtm({ id: 'GTM-K7VLRW2S' }),
    sitemap({
       filter: (page) => !page.includes('/404') && !page.includes('/privacidad') && !page.includes('/terminos'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
