export type Lang = 'es' | 'en';

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
  };
  skipLink: string;
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
    contactNav: string;
    legalNav: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}
