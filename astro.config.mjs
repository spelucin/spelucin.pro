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
       filter: (page) => !page.includes('/404') && !page.includes('/legal') && !page.endsWith('/work/'),
    }),
  ],
  redirects: {
    '/services': '/servicios',
    '/agencias-seo': '/servicios',
    '/en/seo-agencies': '/en/services',
    '/servicios/auditoria-tracking': '/servicios/auditoria-correccion-tracking',
    '/servicios/analisis-periodico': '/servicios/analisis-negocio',
    '/en/services/ongoing-analysis': '/en/services/business-analysis',
    '/case-studies/torices': '/case-studies',
    '/case-studies/notebook': '/case-studies',
    '/en/case-studies/torices': '/en/case-studies',
    '/en/case-studies/notebook': '/en/case-studies',
    '/privacidad': '/legal',
    '/terminos': '/legal',
    '/en/privacy': '/en/legal',
    '/en/terms': '/en/legal',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
