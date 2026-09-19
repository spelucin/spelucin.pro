export type Lang = 'es' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface Seo {
  title: string;
  description: string;
}

export interface PainItem {
  title: string;
  text: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface StackItem {
  name: string;
  icon: string;
}

export interface StackLayer {
  name: string;
  items: StackItem[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface StatBlock {
  value: string;
  label: string;
}

export interface ServiceComponent {
  title: string;
  text: string;
  tags: string[];
}

export interface SystemStep {
  title: string;
  text: string;
  detail: string;
  image: { alt: string; caption: string };
}

export interface CaseTeaser {
  slug: string;
  client: string;
  sector: string;
  year: string;
  title: string;
  summary: string;
  alt: string;
}

export interface CaseProblemItem {
  title: string;
  text: string;
}

export interface CaseBuiltItem {
  title: string;
  text: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  year: string;
  kicker: string;
  title: string;
  heroResult: string;
  alt: string;
  imagesAlt: string[];
  context: string[];
  problems: CaseProblemItem[];
  built: {
    heading: string;
    items: CaseBuiltItem[];
  };
  results: {
    heading: string;
    stats: StatBlock[];
  };
}

export type CaseStudyKey = Exclude<
  keyof Translations['caseStudies'],
  'challengeHeading' | 'contextHeading' | 'galleryHeading' | 'moreHeading' | 'backToWork'
>;

export interface FocusItem {
  name: string;
  tagline: string;
  detail: string;
  tags: string[];
}

export interface Translations {
  lang: Lang;
  htmlLang: string;
  ogLocale: string;
  meta: {
    title: string;
    description: string;
    imageAlt: string;
  };
  skipLink: string;

  /* Multi-page navigation and persistent labels */
  siteNav: NavItem[];
  ctaLabel: string;
  ctaSeeWork: string;
  calModal: {
    label: string;
    close: string;
  };

  home: {
    hero: {
      headline: string;
      highlight: string;
      sub: string;
      visualAlt: string;
    };
    trust: {
      label: string;
    };
    problem: {
      heading: string;
      highlight: string;
      intro: string;
      items: PainItem[];
    };
    service: {
      heading: string;
      highlight: string;
      intro: string;
      weeks: ProcessStep[];
      includeHeading: string;
      include: string[];
      fit: {
        goodHeading: string;
        good: string[];
        poorHeading: string;
        poor: string[];
      };
    };
    proof: {
      heading: string;
      highlight: string;
      intro: string;
      stats: StatBlock[];
      featured: CaseStudyKey[];
      caseCta: string;
    };
    faq: {
      heading: string;
      highlight: string;
      items: FaqItem[];
    };
  };

  seoAgencies: {
    seo: Seo;
    hero: {
      eyebrow: string;
      headline: string;
      highlight: string;
      sub: string;
      visualAlt: string;
      ctaPrimary: string;
    };
    credibility: {
      label: string;
      text: string;
    };
    problem: {
      heading: string;
      highlight: string;
      intro: string;
      items: PainItem[];
    };
    system: {
      heading: string;
      highlight: string;
      intro: string;
      blocks: SystemStep[];
    };
    caseStudy: {
      heading: string;
      highlight: string;
      intro: string;
      points: string[];
      cta: string;
    };
    offer: {
      name: string;
      tag: string;
      paragraphs: string[];
      items: string[];
      cta: string;
      ctaHint: string;
    };
    engagement: {
      heading: string;
      highlight: string;
      intro: string;
      steps: ProcessStep[];
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
    finalCta: {
      heading: string;
      highlight: string;
      sub: string;
      ctaPrimary: string;
    };
  };

  process: {
    heading: string;
    intro: string;
    steps: ProcessStep[];
  };

  stack: {
    heading: string;
    highlight: string;
    intro: string;
    layers: StackLayer[];
  };

  ctaSection: {
    heading: string;
    sub: string;
    hint: string;
  };

  services: {
    seo: Seo;
    hero: {
      badge: string;
      headline: string;
      highlight: string;
      sub: string;
    };
    components: {
      heading: string;
      highlight: string;
      intro: string;
      items: ServiceComponent[];
    };
    faq: {
      heading: string;
      highlight: string;
      items: FaqItem[];
    };
  };

  work: {
    seo: Seo;
    hero: {
      eyebrow: string;
      heading: string;
      highlight: string;
      sub: string;
    };
    caseCta: string;
    cases: CaseTeaser[];
  };

  aboutPage: {
    seo: Seo;
    hero: {
      headline: string;
      highlight: string;
      sub: string;
    };
    capabilities: {
      heading: string;
      highlight: string;
      intro: string;
    };
  };

  contactPage: {
    seo: Seo;
    heading: string;
    sub: string;
    emailLabel: string;
    calLabel: string;
    linkedinLabel: string;
    availability: string;
  };

  caseStudies: {
    challengeHeading: string;
    contextHeading: string;
    galleryHeading: string;
    moreHeading: string;
    backToWork: string;
    torices: CaseStudy;
    owlbox: CaseStudy;
    notebook: CaseStudy;
  };

  header: {
    langLabel: string;
  };
  hero: {
    role: string;
  };
  about: {
    heading: string;
    kicker: string;
    paragraphs: string[];
    meta: { label: string; value: string }[];
    portraitAlt: string;
  };
  focus: {
    items: FocusItem[];
  };
  footer: {
    tagline: string;
    exploreNav: string;
    contactNav: string;
    legalNav: string;
    rights: string;
    legal: string;
  };
}
