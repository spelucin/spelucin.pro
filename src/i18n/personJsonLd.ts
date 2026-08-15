import type { Translations } from './types';
import { site } from '../data/site';

export function personJsonLd(t: Translations) {
  const canonical = new URL(t.lang === 'es' ? '/' : '/en/', site.url).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: canonical,
    image: new URL(site.ogImage, site.url).toString(),
    email: `mailto:${site.email}`,
    jobTitle: t.hero.role,
    description: t.meta.description,
    sameAs: [site.linkedin, site.github],
    knowsAbout: t.focus.items.map((item) => item.name),
  };
}