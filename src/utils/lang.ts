export type Lang = 'es' | 'en';

export function localizeHref(path: string, lang: Lang): string {
  if (lang === 'es') return path === '/' ? '/' : path;
  return path === '/' ? '/en/' : `/en${path}`;
}

export function equivalentPath(pathname: string, toLang: Lang): string {
  if (toLang === 'es') {
    if (pathname === '/' || pathname === '/en/') return '/';
    if (pathname.startsWith('/en/')) return pathname.slice(4) || '/';
    return pathname;
  }
  if (pathname === '/') return '/en/';
  if (pathname.startsWith('/en/')) return pathname;
  return `/en${pathname}`;
}