import type { Lang } from '../i18n/types';
import type { CommercialKey } from '../i18n/commercialTypes';

export const commercialRoutes: Record<CommercialKey, Record<Lang, string>> = {
  implementation: {
    es: '/servicios/implementacion-tracking',
    en: '/en/services/tracking-implementation',
  },
  audit: {
    es: '/servicios/auditoria-correccion-tracking',
    en: '/en/services/tracking-audit',
  },
  dashboards: {
    es: '/servicios/dashboards',
    en: '/en/services/dashboards',
  },
  analysis: {
    es: '/servicios/analisis-negocio',
    en: '/en/services/business-analysis',
  },
  shopify: {
    es: '/plataformas/shopify',
    en: '/en/platforms/shopify',
  },
  tiendanube: {
    es: '/plataformas/tiendanube',
    en: '/en/platforms/tiendanube',
  },
};

export function commercialHref(key: CommercialKey, lang: Lang): string {
  return commercialRoutes[key][lang];
}
