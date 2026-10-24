import type { FaqItem, PainItem, ProcessStep, Seo } from './types';

export type ServiceKey = 'implementation' | 'audit' | 'dashboards' | 'analysis';
export type PlatformKey = 'shopify' | 'tiendanube';
export type CommercialKey = ServiceKey | PlatformKey;

export interface CommercialCard {
  key: CommercialKey;
  title: string;
  text: string;
  tags: string[];
}

export interface CommercialSection {
  heading: string;
  highlight: string;
  intro: string;
  items: PainItem[];
}

export interface CommercialPricingOption {
  heading: string;
  amount: string;
  detail: string;
  cadence?: string;
  scopeHeading?: string;
  scope?: string[];
  boundariesHeading?: string;
  boundaries?: string[];
}

export interface CommercialPricing {
  heading: string;
  highlight: string;
  intro: string;
  amount: string;
  cadence: string;
  scopeHeading: string;
  scope: string[];
  note: string;
  boundariesHeading: string;
  boundaries: string[];
  alternative?: CommercialPricingOption;
}

export interface CommercialPageContent {
  key: CommercialKey;
  seo: Seo;
  eyebrow: string;
  hero: {
    headline: string;
    highlight: string;
    sub: string;
    ctaPrimary: string;
  };
  problem: CommercialSection;
  scope: CommercialSection;
  pricing?: CommercialPricing;
  process: {
    heading: string;
    highlight: string;
    intro: string;
    steps: ProcessStep[];
  };
  deliverables: {
    heading: string;
    highlight: string;
    intro: string;
    items: string[];
  };
  fit: {
    heading: string;
    highlight: string;
    goodHeading: string;
    good: string[];
    poorHeading: string;
    poor: string[];
  };
  faq: {
    heading: string;
    highlight: string;
    items: FaqItem[];
  };
  relatedHeading: string;
  relatedIntro: string;
  related: CommercialKey[];
}

export interface HubContent {
  seo: Seo;
  eyebrow: string;
  hero: {
    headline: string;
    highlight: string;
    sub: string;
  };
  cardsHeading: string;
  cardsHighlight: string;
  cardsIntro: string;
  cards: CommercialCard[];
  faq: {
    heading: string;
    highlight: string;
    items: FaqItem[];
  };
}

export interface CommercialContent {
  pages: Record<CommercialKey, CommercialPageContent>;
  servicesHub: HubContent;
  platformsHub: HubContent;
}
