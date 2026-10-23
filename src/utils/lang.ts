export type Lang = 'es' | 'en';

export function localizeHref(path: string, lang: Lang): string {
  if (lang === 'es') return path === '/' ? '/' : path;
  return path === '/' ? '/en/' : `/en${path}`;
}

// Pages whose slug differs across languages. Keys are the language-specific
// path (no trailing slash); `equivalentPath` uses this so the lang switcher
// and hreflang alternate links stay correct for those routes.
const slugPairs: { es: string; en: string }[] = [
  { es: '/servicios', en: '/services' },
  { es: '/servicios/implementacion-tracking', en: '/services/tracking-implementation' },
  { es: '/servicios/auditoria-correccion-tracking', en: '/services/tracking-audit' },
  { es: '/servicios/dashboards', en: '/services/dashboards' },
  { es: '/servicios/analisis-negocio', en: '/services/business-analysis' },
  { es: '/plataformas', en: '/platforms' },
  { es: '/plataformas/shopify', en: '/platforms/shopify' },
  { es: '/plataformas/tiendanube', en: '/platforms/tiendanube' },
];

export function equivalentPath(pathname: string, toLang: Lang): string {
  const trailingSlash = pathname.endsWith('/') ? '/' : '';
  const stripped = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const sourceLang: Lang = stripped === '/en' || stripped.startsWith('/en/') ? 'en' : 'es';
  const base = sourceLang === 'en' ? (stripped === '/en' ? '/' : stripped.slice(3)) : stripped;

  if (toLang === sourceLang) return pathname;

  const pair = slugPairs.find((item) => item[sourceLang] === base);
  if (pair) {
    const target = pair[toLang];
    return toLang === 'en' ? `/en${target}${trailingSlash}` : `${target}${trailingSlash}`;
  }

  if (toLang === 'es') {
    if (stripped === '/' || stripped === '/en') return '/';
    if (stripped.startsWith('/en/')) return `${stripped.slice(3) || '/'}${trailingSlash}`;
    return `${stripped}${trailingSlash}`;
  }
  if (stripped === '/') return '/en/';
  if (stripped.startsWith('/en/')) return `${stripped}${trailingSlash}`;
  return `/en${stripped}${trailingSlash}`;
}
