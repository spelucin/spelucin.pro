import type { Translations } from './types';

export const en: Translations = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'Alex Spelucin · Ecommerce data',
    description:
      'Ecommerce analytics and data systems for growing LATAM stores investing in paid advertising: tracking, reporting and business analysis.',
    imageAlt: 'Alex Spelucin, ecommerce data and analytics',
  },
  skipLink: 'Skip to content',

  siteNav: [
    { label: 'Services', href: '/services' },
    { label: 'Platforms', href: '/platforms' },
    { label: 'Work', href: '/case-studies' },
    { label: 'About', href: '/about' },
  ],
  ctaLabel: 'Book a call',
  ctaSeeWork: 'View work',
  calModal: {
    label: 'Book a call',
    close: 'Close',
  },

  home: {
    hero: {
      headline: 'Ecommerce measurement',
      highlight: 'built for better decisions.',
      sub: 'Tracking implementation and audits, connected reporting and performance analysis for growing LATAM stores investing in paid media. Shopify is the initial focus; Tiendanube is being validated with local stores.',
    },
    problem: {
      heading: 'The problem is not a lack of data.',
      highlight: 'It is a lack of clarity.',
      intro: 'The store, analytics and advertising speak different languages. The team ends up deciding with whichever version is closest at hand.',
      items: [
        {
          title: 'Numbers that do not match',
          text: 'Shopify, GA4 and ads show different results for the same period.',
        },
        {
          title: 'Reports built by hand',
          text: 'Every review starts by exporting, cleaning and assembling the same view again.',
        },
        {
          title: 'Decisions in the dark',
          text: 'Changes are sensed, but there is no evidence to confirm what worked.',
        },
        {
          title: 'Incomplete measurement',
          text: 'Events, pixels and consent leave gaps that distort the reading.',
        },
      ],
    },
    offers: {
      heading: 'What I can',
      highlight: 'put in order.',
      intro: 'Four independent services. Start with the one that answers your current question; combine them only when useful.',
    },
    process: {
      heading: 'A process',
      highlight: 'without black boxes.',
      intro: 'First I understand the business, then I build what is needed.',
      weeks: [
        {
          title: 'Context',
          text: 'We review the store, available sources and the decision you need to make.',
        },
        {
          title: 'Choose the scope',
          text: 'We select implementation, corrections, reporting or analysis based on the actual need.',
        },
        {
          title: 'Do the agreed work',
          text: 'I configure, correct, connect or analyze only the work included in the project.',
        },
        {
          title: 'Handover',
          text: 'I document assumptions and deliverables so the team can use the result.',
        },
      ],
      includeHeading: 'What it includes',
      include: [
        'Tracking configured or reviewed',
        'Metrics with documented definitions',
        'Connected reporting when needed',
        'Key data checks',
        'Clear handover',
      ],
      fit: {
        goodHeading: 'A good fit if',
        good: [
          'You already sell and have traffic',
          'You use Shopify, Tiendanube, GA4 or ads',
          'You want decisions based on data',
          'You need a reading that holds up',
        ],
        poorHeading: 'Not a fit if',
        poor: [
          'You do not have operations yet',
          'You are looking for a sales guarantee',
          'You only need a screenshot for a presentation',
        ],
      },
    },
    proof: {
      heading: 'Data in order,',
      highlight: 'different decisions.',
      intro: 'An ecommerce case where the work was bringing scattered metrics into one shared view.',
      stats: [
        { value: '10+', label: 'clients supported in the case' },
        { value: '03', label: 'source types reviewed' },
        { value: '01', label: 'reporting view per client' },
      ],
      featured: ['owlbox'],
      caseCta: 'Read the case',
    },
    faq: {
      heading: 'Frequent',
      highlight: 'questions.',
      items: [
        {
          q: 'Do you work with small stores?',
          a: 'Yes, as long as there are already sales, traffic and data worth reviewing. Scope adapts to the size of the operation.',
        },
        {
          q: 'Can I hire only one part?',
          a: 'Yes. Tracking implementation, corrections, reporting and analysis are independent. You do not need an audit unless it answers your need.',
        },
        {
          q: 'Do you work with Shopify and Tiendanube?',
          a: 'Shopify is the initial focus. Tiendanube is being validated with LATAM stores. In either case, scope depends on permissions and available data.',
        },
        {
          q: 'Do you guarantee more sales?',
          a: 'No. I improve the quality of data and decisions. I do not promise sales, ROAS or revenue recovery.',
        },
      ],
    },
  },

  process: {
    heading: 'How the work starts.',
    intro: 'A short conversation to understand the context and decide what should be solved first.',
    steps: [
      {
        title: 'Call',
        text: 'We review the store, the sources and the question you cannot answer today.',
      },
      {
        title: 'Scope',
        text: 'We choose implementation, corrections, reporting or analysis as needed; an audit is optional.',
      },
      {
        title: 'Work',
        text: 'I build on the sources and tools your team already uses.',
      },
      {
        title: 'Delivery',
        text: 'I document the system and make clear how to use it afterwards.',
      },
    ],
  },

  stack: {
    heading: 'Under the hood',
    highlight: 'of the data.',
    intro: 'I choose the simplest reliable setup for the sources and question. BigQuery is used when the scale and transformations justify it.',
    layers: [
      {
        name: 'Store and measurement',
        items: [
          { name: 'Shopify', icon: 'simple-icons:shopify' },
          { name: 'Tiendanube' },
          { name: 'GA4', icon: 'simple-icons:googleanalytics' },
          { name: 'GTM', icon: 'simple-icons:googletagmanager' },
        ],
      },
      {
        name: 'Acquisition and reporting',
        items: [
          { name: 'Meta Ads', icon: 'simple-icons:meta' },
          { name: 'Google Ads', icon: 'simple-icons:googleads' },
          { name: 'Looker Studio', icon: 'simple-icons:googledatastudio' },
          { name: 'BigQuery', icon: 'simple-icons:googlecloud' },
        ],
      },
    ],
  },

  ctaSection: {
    heading: 'Do your ecommerce numbers fail to match?',
    sub: 'In 20 minutes we review which sources you have and where to start.',
    hint: 'Available in Spanish and English.',
  },

  work: {
    seo: {
      title: 'Ecommerce data case studies | Alex Spelucin',
      description:
        'An ecommerce case where dashboards and connected sources replaced a manual metric review.',
    },
    hero: {
      eyebrow: 'WORK',
      heading: 'Data that ended',
      highlight: 'in a decision.',
      sub: 'A look at the problem, the work and what was left running.',
    },
    caseCta: 'View full case',
    cases: [
      {
        slug: 'owlbox',
        client: 'Owlbox',
        sector: 'Ecommerce',
        year: '2024',
        title: 'Ecommerce dashboards for LATAM clients',
        summary:
          'Dashboards with the metrics their clients needed: ROAS, paid revenue, spend and top products.',
        alt: 'View of Owlbox ecommerce dashboards',
      },
    ],
  },

  aboutPage: {
    seo: {
      title: 'About · Ecommerce data | Alex Spelucin',
      description:
        'I work between ecommerce and data: reliable measurement, clear dashboards and analysis the team can use.',
    },
    hero: {
      headline: 'From measurement',
      highlight: 'to decision.',
      sub: 'A data analyst focused on ecommerce. I organize measurement, build dashboards and help teams read their results.',
    },
    capabilities: {
      heading: 'How I help',
      highlight: 'ecommerce teams.',
      intro: 'Four independent services that connect measurement, reporting and business decisions.',
    },
  },

  contactPage: {
    seo: {
      title: 'Contact · Let’s talk about your data | Alex Spelucin',
      description: 'A 20-minute call to review your sources and see what should be organized first.',
    },
    heading: 'Let’s talk about your store’s data.',
    sub: 'In 20 minutes we review which sources you have, what does not match and where to start.',
    emailLabel: 'Email me',
    calLabel: 'Book a call',
    linkedinLabel: 'LinkedIn',
    availability: 'Available for stores in LATAM, Spain and the United States.',
  },

  caseStudies: {
    challengeHeading: 'The challenge',
    contextHeading: 'Context',
    galleryHeading: 'The work',
    moreHeading: 'More cases',
    backToWork: 'Back to work',
    outcomeLabel: 'Key outcome',
    owlbox: {
      slug: 'owlbox',
      client: 'Owlbox',
      sector: 'Ecommerce',
      year: '2024',
      kicker: 'Case study',
      title: 'Ecommerce dashboards for LATAM clients',
      heroResult: 'Reporting for 10+ clients',
      alt: 'View of Owlbox ecommerce dashboards',
      imagesAlt: [
        'View of the Owlbox ecommerce dashboard: overview',
        'View of the Owlbox ecommerce dashboard: revenue and spend',
        'View of the Owlbox ecommerce dashboard: top products',
        'View of the Owlbox ecommerce dashboard: executive summary',
      ],
      context: [
        'Owlbox is a growth agency for ecommerce with clients across LATAM. It needed to have the main metrics in one place during reviews.',
      ],
      problems: [
        {
          title: 'Key metrics scattered',
          text: 'ROAS, paid revenue, spend and top products were spread across several views.',
        },
        {
          title: 'No shared view per client',
          text: 'Every review started by gathering numbers from different places.',
        },
        {
          title: 'Metrics were not together',
          text: 'The review depended on putting the data back together every time.',
        },
      ],
      built: {
        heading: 'What we built',
        items: [
          {
            title: 'Dashboard set per client',
            text: 'Dashboards with ROAS, paid revenue, spend and top products per client.',
          },
          {
            title: 'One shared view per client',
            text: 'Meta Ads, CRM and GA4 appear in the same context for each client.',
          },
          {
            title: 'A repeatable template',
            text: 'The same structure for every new client.',
          },
        ],
      },
      results: {
        heading: 'Results',
        stats: [
          { value: '10+', label: 'clients supported' },
          { value: '03', label: 'platforms compared' },
          { value: '01', label: 'reporting view per client' },
        ],
      },
    },
  },

  header: {
    langLabel: 'Change language',
  },
  hero: {
    role: 'Ecommerce data analyst',
  },
  about: {
    heading: 'About me',
    kicker: 'Who I am',
    paragraphs: [
      'I work between ecommerce and data. I organize measurement, build dashboards and help teams read their results without relying on spreadsheets.',
      'I started in digital analytics and later led measurement and analytics for ecommerce growth teams. The problem tends to repeat: the data exists, but it is not always clear which number to use.',
    ],
    meta: [
      { label: 'Based in', value: 'Lima, Peru' },
      { label: 'Languages', value: 'Spanish · English' },
      { label: 'Focus', value: 'Ecommerce analytics' },
    ],
    portraitAlt: 'Portrait of Alex Spelucin',
  },
  focus: {
    items: [
      {
        name: 'Tracking implementation',
        tagline: 'GA4, GTM and ecommerce events',
        detail:
          'I configure standard ecommerce events and purchase tracking, then validate the standard journey and document the setup.',
        tags: ['GA4', 'GTM', 'Purchase'],
      },
      {
        name: 'Tracking audit and corrections',
        tagline: 'Findings, priorities and agreed fixes',
        detail:
          'I review existing measurement, define what needs correction and validate only the limited fixes included in scope.',
        tags: ['GA4', 'GTM', 'QA'],
      },
      {
        name: 'Data systems and reporting',
        tagline: 'A connected view the team can use',
        detail:
          'I connect store, analytics and advertising data, choosing a simple reliable architecture and documenting the metric rules.',
        tags: ['Sources', 'Dashboards', 'SQL when needed'],
      },
      {
        name: 'Business analysis',
        tagline: 'Evidence, explanation and next steps',
        detail:
          'I investigate a defined performance question. CAC, LTV and profitability require enough history and relevant cost data.',
        tags: ['Acquisition', 'Retention', 'Products'],
      },
    ],
  },
  footer: {
    tagline: 'Ecommerce tracking, data systems and analysis.',
    exploreNav: 'Explore',
    contactNav: 'Contact',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    legal: 'Privacy and terms',
  },
};

export const t = en;
