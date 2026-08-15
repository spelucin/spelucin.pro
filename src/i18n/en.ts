import type { Translations } from './types';

export const t: Translations = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'Alex Spelucin — Digital Analyst',
    description:
      'Digital Analyst focused on marketing analytics, measurement, reporting and data. Works with GA4, Google Tag Manager, Looker Studio, BigQuery and SQL.',
  },
  skipLink: 'Skip to content',
  nav: [
    { label: 'About', href: '#about', index: '01' },
    { label: 'Focus', href: '#focus', index: '02' },
    { label: 'Tools', href: '#tools', index: '03' },
    { label: 'Projects', href: '#projects', index: '04' },
    { label: 'Contact', href: '#contact', index: '05' },
  ],
  header: {
    aria: 'Main navigation',
    navAria: 'Sections',
    langLabel: 'Change language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    badge: 'Digital Analyst',
    headline: 'Use marketing data',
    highlight: 'to your advantage.',
    sub: 'I build measurement, reporting and analytics systems for digital marketing teams and agencies.',
    cta: 'See projects',
    role: 'Digital Analyst',
    dashboardAlt: 'View of a marketing reporting system',
    stripLabel: 'They trusted me:',
  },
  about: {
    id: 'about',
    index: '01',
    heading: 'About',
    kicker: 'Who I am',
    paragraphs: [
      'I work at the intersection of marketing and data. My focus is digital analytics and the systems underneath it: measurement you can trust, reporting that scales, and data teams can use without depending on a single person.',
      'I started in enterprise technical SEO (Ripley, Intercorp Retail) and led analytics at agencies in Canada, Mexico, Argentina and Peru. Everywhere the pattern is the same: teams do not need more data, they need the reliable, usable version of the data they already have.',
    ],
    meta: [
      { label: 'Based in', value: 'Lima, Peru' },
      { label: 'Languages', value: 'Spanish · English' },
      { label: 'Focus', value: 'Marketing analytics & data' },
    ],
    portraitAlt: 'Portrait of Alex Spelucin',
  },
  focus: {
    id: 'focus',
    index: '02',
    kicker: 'What I do',
    heading: 'Technical experience in',
    highlight: 'analytics and data.',
    intro:
      'Nine areas where I apply technical judgment to real marketing problems. Craft, not theory.',
    items: [
      {
        name: 'Measurement Planning',
        tagline: 'Metrics, funnels and attribution',
        detail:
          'I define which metric answers each business question, where it comes from, and what action it should trigger when it moves.',
        tags: ['KPI frameworks', 'Attribution', 'Funnels'],
      },
      {
        name: 'Event and Conversion Tagging',
        tagline: 'Data layer, events and conversions',
        detail:
          'I design data layers and events that capture what matters to the business, with consistent naming and QA before publishing.',
        tags: ['Data Layer', 'Event design', 'QA'],
      },
      {
        name: 'Digital Measurement',
        tagline: 'GA4, GTM and reliable tracking',
        detail:
          'I implement GA4 and GTM with consistency: consent, versioned containers and QA. I find why numbers do not add up across platforms and fix it at the source.',
        tags: ['GA4', 'GTM', 'Consent'],
      },
      {
        name: 'Executive and Operational Dashboards',
        tagline: 'Reporting that runs at scale',
        detail:
          'I build reusable dashboards with shared KPIs: executive views to decide and operational views for day-to-day work.',
        tags: ['Looker Studio', 'KPIs', 'Templates'],
      },
      {
        name: 'Recurring Reports',
        tagline: 'Consistent outputs, on time',
        detail:
          'Recurring reports with the same logic across multiple clients: less manual work and on-time deliveries.',
        tags: ['Reporting systems', 'Automation'],
      },
      {
        name: 'Data-driven Tools',
        tagline: 'SQL and reliable queries',
        detail:
          'I extract, transform and validate data to answer real questions. Documented and reproducible, so it does not depend on a single person.',
        tags: ['SQL', 'Transformation', 'Validation'],
      },
      {
        name: 'Marketing Data Warehouses',
        tagline: 'Marketing data warehouse',
        detail:
          'I consolidate marketing data in one place: ads, CRM and web pipelines with models the team can query directly.',
        tags: ['BigQuery', 'GCP', 'Data warehouse'],
      },
      {
        name: 'Marketing Integrations',
        tagline: 'Data flows between platforms',
        detail:
          'I automate data flows between platforms with Dataform and Python: scheduling, transformations, and reliable data available on time.',
        tags: ['Dataform', 'Python', 'Pipelines'],
      },
      {
        name: 'Metric Observability',
        tagline: 'Monitoring data quality',
        detail:
          'I make sure metrics stay reliable over time: quality alerts, consistency and traceability of the data.',
        tags: ['Monitoring', 'QA', 'Alerts'],
      },
    ],
    practice: {
      groups: [
        { name: 'Measurement', itemIndexes: [0, 1, 2] },
        { name: 'Reporting', itemIndexes: [3, 4, 5] },
        { name: 'Systems', itemIndexes: [6, 7, 8] },
      ],
      images: [
        { alt: 'View of the data source audit' },
        { alt: 'View of corrected event and conversion measurement' },
        { alt: 'View of the reporting system and team documentation' },
      ],
    },
  },
  tools: {
    id: 'tools',
    index: '03',
    kicker: 'Stack',
    heading: 'Tools',
    highlight: 'and Stack',
    intro: 'The stack I use to solve measurement, reporting and marketing data from origin to the end of the data journey.',
    groups: [
      {
        name: 'Measurement',
        items: [
          { name: 'Google Analytics 4', icon: 'simple-icons:googleanalytics' },
          { name: 'Google Tag Manager', icon: 'simple-icons:googletagmanager' },
          { name: 'JavaScript', icon: 'simple-icons:javascript' },
        ],
      },
      {
        name: 'Reporting & Visualization',
        items: [
          { name: 'Google Data Studio', icon: 'simple-icons:googledatastudio' },
          { name: 'Google Sheets', icon: 'simple-icons:googlesheets' },
        ],
      },
      {
        name: 'Data Analysis',
        items: [
          { name: 'Python', icon: 'simple-icons:python' },
          { name: 'R', icon: 'simple-icons:r' },
          { name: 'SQL', icon: 'tabler:sql' },
          { name: 'BigQuery', icon: 'simple-icons:googlebigquery' },
        ],
      },
      {
        name: 'ETL & Pipelines',
        items: [
          { name: 'Dataform', icon: 'tabler:database' },
          { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    index: '04',
    kicker: 'Projects',
    heading: 'Real',
    highlight: 'cases.',
    intro: 'Measurement and reporting systems I built for agencies. Images of the actual work.',
    sliderAria: 'Projects gallery',
    prevLabel: 'Previous project',
    nextLabel: 'Next project',
    pageLabel: 'Page',
    items: [
      {
        title: 'Reports for a growth marketing agency',
        scope: '',
        year: '2026',
        alt: 'View of the organic and paid traffic reports for Torices Digital',
        description: 'With Torices Digital, we worked on a series of reports to show the impact of organic and paid traffic side by side, and audited their main data sources for greater accuracy in the numbers.',
        results: [
          { label: 'Clients', value: '10+' },
          { label: 'Accounts audited', value: '12+' },
          { label: 'Hours/week saved', value: '12' },
        ],
      },
      {
        title: 'Dashboards for a growth agency for e-commerce',
        scope: '',
        year: '2024',
        alt: 'View of the Owlbox e-commerce dashboards',
        description: 'Owlbox specializes in e-commerce for different clients across LATAM. The mission was to build a set of dashboards that show the main metrics for their clients: ROAS, paid revenue, spend and top products.',
        results: [
          { label: 'Clients', value: '12+' },
          { label: 'Hours/week saved', value: '10' },
          { label: 'Data sources', value: '05' },
        ],
      },
      {
        title: 'Measurement at scale for a premier SEO agency',
        scope: '',
        year: '2025',
        alt: 'View of the Notebook Agency measurement and reporting system',
        description: 'With Notebook Agency, we built a measurement and reporting system that lets the agency show results to their B2B/SaaS clients. We also set up a page-measurement system wired into every report, and built 2 custom Data Studio connectors to feed the dashboard with SEO query tracking.',
        results: [
          { label: 'Clients', value: '20+' },
          { label: 'Hours saved/month', value: '60' },
          { label: 'Custom Data Studio connectors', value: '02' },
        ],
      },
    ],
  },
  contact: {
    id: 'contact',
    index: '06',
    kicker: "Let's talk",
    heading: 'Every marketing team or agency needs data. Do not let it work against you.',
    emailLabel: 'Write to me',
    calLabel: 'Book a call',
  },
  footer: {
    tagline: 'Digital Analyst. Marketing analytics, measurement, reporting and data.',
    contactNav: 'Contact',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    privacy: 'Privacy',
    terms: 'Terms',
  },
};
