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

export interface CaseTeaser {
  slug: string;
  client: string;
  sector: string;
  year: string;
  title: string;
  summary: string;
  result: string;
  alt: string;
  imagesAlt: string[];
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
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      items: PainItem[];
    };
    service: {
      index: string;
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
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      stats: StatBlock[];
      featured: CaseStudyKey[];
    };
    faq: {
      index: string;
      heading: string;
      highlight: string;
      items: FaqItem[];
    };
  };

  process: {
    index: string;
    heading: string;
    highlight: string;
    intro: string;
    steps: ProcessStep[];
  };

  stack: {
    index: string;
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
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      items: ServiceComponent[];
    };
    proof: {
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      stats: StatBlock[];
    };
    faq: {
      index: string;
      heading: string;
      highlight: string;
      items: FaqItem[];
    };
  };

  work: {
    seo: Seo;
    hero: {
      index: string;
      heading: string;
      highlight: string;
      sub: string;
    };
    cases: CaseTeaser[];
  };

  aboutPage: {
    seo: Seo;
    hero: {
      index: string;
      headline: string;
      highlight: string;
      sub: string;
    };
    capabilities: {
      index: string;
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
    privacy: string;
    terms: string;
  };
}