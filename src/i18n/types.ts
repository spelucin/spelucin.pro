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

export interface Pillar {
  title: string;
  text: string;
  tags: string[];
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

/* Existing single-page surface (kept until the multi-page rebuild removes it) */
export interface FocusItem {
  name: string;
  tagline: string;
  detail: string;
  tags: string[];
}

export interface PracticeImage {
  alt: string;
}

export interface PracticeGroup {
  name: string;
  itemIndexes: number[];
}

export interface ToolItem {
  name: string;
  icon: string;
}

export interface ToolGroup {
  name: string;
  items: ToolItem[];
}

export interface ProjectResult {
  label: string;
  value: string;
}

export interface ProjectCard {
  title: string;
  scope: string;
  year: string;
  alt: string;
  description: string;
  results: ProjectResult[];
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

  home: {
    hero: {
      badge: string;
      headline: string;
      highlight: string;
      sub: string;
      ctaSecondary: string;
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
      pillars: Pillar[];
    };
    proof: {
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      stats: StatBlock[];
      featured: string[];
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

  agencies: {
    seo: Seo;
    hero: {
      badge: string;
      headline: string;
      highlight: string;
      sub: string;
      ctaSecondary: string;
      visualAlt: string;
    };
    takeover: {
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      items: PainItem[];
    };
    proof: {
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      stats: StatBlock[];
    };
    sprint: {
      index: string;
      heading: string;
      highlight: string;
      intro: string;
      weeks: ProcessStep[];
      includeHeading: string;
      include: string[];
    };
    fit: {
      index: string;
      heading: string;
      highlight: string;
      goodHeading: string;
      good: string[];
      poorHeading: string;
      poor: string[];
    };
    faq: {
      index: string;
      heading: string;
      highlight: string;
      items: FaqItem[];
    };
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
    torices: CaseStudy;
    owlbox: CaseStudy;
    notebook: CaseStudy;
  };

  /* Existing single-page surface (kept until the multi-page rebuild removes it) */
  nav: { label: string; href: string; index: string }[];
  header: {
    aria: string;
    navAria: string;
    langLabel: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    badge: string;
    headline: string;
    highlight: string;
    sub: string;
    cta: string;
    role: string;
    dashboardAlt: string;
    stripLabel: string;
  };
  about: {
    id: string;
    index: string;
    heading: string;
    kicker: string;
    paragraphs: string[];
    meta: { label: string; value: string }[];
    portraitAlt: string;
  };
  focus: {
    id: string;
    index: string;
    kicker: string;
    heading: string;
    highlight: string;
    intro: string;
    items: FocusItem[];
    practice: {
      groups: PracticeGroup[];
      images: PracticeImage[];
    };
  };
  tools: {
    id: string;
    index: string;
    kicker: string;
    heading: string;
    highlight: string;
    intro: string;
    groups: ToolGroup[];
  };
  projects: {
    id: string;
    index: string;
    kicker: string;
    heading: string;
    highlight: string;
    intro: string;
    sliderAria: string;
    prevLabel: string;
    nextLabel: string;
    pageLabel: string;
    items: ProjectCard[];
  };
  contact: {
    id: string;
    index: string;
    kicker: string;
    heading: string;
    emailLabel: string;
    calLabel: string;
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