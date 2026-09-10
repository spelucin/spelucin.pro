import type { Translations } from './types';

export const t: Translations = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'Alex Spelucin · Marketing Data Analyst',
    description:
      'I help marketing teams and agencies make decisions on data they can trust. Measurement, reporting and analytics people actually use every day.',
    imageAlt: 'Alex Spelucin · Marketing data analyst',
  },
  skipLink: 'Skip to content',
  siteNav: [
    { label: 'Home', href: '/' },
    { label: 'Case studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel: 'Book a call',
  ctaSeeWork: 'See case studies',
  calModal: {
    label: 'Book a call',
    close: 'Close the calendar',
  },
  home: {
    hero: {
      headline: 'Your client reporting',
      highlight: 'should not restart every month.',
      sub: 'I build measurement and reporting systems for agencies that need to deliver without relying on one person.',
      visualAlt: 'View of a marketing reporting system',
    },
    trust: {
      label: 'Clients I have worked with:',
    },
    problem: {
      index: '01',
      heading: 'The cost of building',
      highlight: 'reports by hand.',
      intro:
        'When reports are built by hand each month, errors and waiting become part of the work.',
      items: [
        {
          title: 'Manual, month after month',
          text: 'Export here, paste there, adjust formats. Every client, every month, in the hands of someone with better things to do.',
        },
        {
          title: 'Numbers that do not add up',
          text: 'Ads says one thing and the client\'s own console says another. You lose the argument before you make it.',
        },
        {
          title: 'It does not scale as you grow',
          text: 'A new client means a new workbook, a new template, another month of your analyst\'s time.',
        },
      ],
    },
    service: {
      index: '02',
      heading: 'The Reporting',
      highlight: 'System Sprint.',
      intro: 'A fixed 4-week engagement to design and build the system behind your client reports.',
      weeks: [
        { title: 'Week 1 · Audit', text: 'All sources and reports mapped, inconsistencies listed.' },
        { title: 'Week 2 · Model & design', text: 'One metric model and the dashboard wireframes.' },
        { title: 'Week 3 · Build', text: 'Warehouse, transformations and the first dashboards live.' },
        { title: 'Week 4 · Handover', text: 'Automation, documentation and your team trained.' },
      ],
      includeHeading: 'What is included',
      include: ['A documented data model', 'Looker Studio dashboards', 'Automated delivery', 'Handover docs'],
      fit: {
        goodHeading: 'Good fit',
        good: [
          'You report for 5+ clients',
          'You already use (or want) Looker Studio',
          'Numbers never quite match up',
          'You want reporting to stop being a fire',
        ],
        poorHeading: 'Not a fit if',
        poor: [
          'You want a free single-channel dashboard',
          'You are a team of one after a one-off report',
          'You want to replace your team, not its system',
        ],
      },
    },
    proof: {
      index: '03',
      heading: 'Reporting for',
      highlight: 'growth, ecommerce and SEO agencies.',
      intro: 'Built so the same reporting runs for many clients, not one at a time.',
      stats: [
        { value: '6+', label: 'years in marketing analytics' },
        { value: '15-20', label: 'concurrent accounts at Notebook Agency' },
        { value: '10+', label: 'clients in Torices reporting systems' },
        { value: '20+', label: 'freelance dashboards delivered' },
      ],
      featured: ['notebook', 'torices', 'owlbox'],
      caseCta: 'View case',
    },
    faq: {
      index: '04',
      heading: 'Frequently asked',
      highlight: 'questions.',
      items: [
        {
          q: 'Do you replace our tools?',
          a: 'No. If your team reports in Looker Studio, we build on it. BigQuery and Apps Script sit behind it, invisible.',
        },
        {
          q: 'How long until the first dashboard?',
          a: 'The first client dashboard arrives during the sprint, usually in week 3.',
        },
        {
          q: 'Do you work with the connectors we already use?',
          a: 'Usually yes. Google sources connect natively; other platforms come in through APIs to the warehouse.',
        },
        {
          q: 'What do you need from us?',
          a: 'Read access to the sources and 30 minutes a week with whoever owns reporting today.',
        },
        {
          q: 'What happens after the sprint?',
          a: 'The system stays documented and automated. We can keep a change retainer, or your team runs it.',
        },
      ],
    },
  },
  process: {
    index: '04',
    heading: 'This is how the work starts.',
    intro: 'First we understand the problem. Then we decide what is worth building.',
    steps: [
      {
        title: 'Audit',
        text: 'We map your sources, your client reports and where the inconsistencies come from.',
      },
      {
        title: 'Design',
        text: 'We agree on metrics, the data model and dashboards before building anything.',
      },
      {
        title: 'Build',
        text: 'Warehouse, transformations and dashboards with your team\'s naming and processes.',
      },
      {
        title: 'Handover',
        text: 'Documentation and automation so the system runs without you.',
      },
    ],
  },
  stack: {
    index: '05',
    heading: 'The tech that supports',
    highlight: 'the reporting.',
    intro: 'Everything runs on the Google cloud: data lives in BigQuery, gets shaped with SQL and ships through Looker Studio.',
    layers: [
      {
        name: 'Data & transformation',
        items: [
          { name: 'Python', icon: 'simple-icons:python' },
          { name: 'SQL', icon: 'tabler:sql' },
          { name: 'Dataform', icon: 'tabler:transform' },
        ],
      },
      {
        name: 'Google Cloud & reporting',
        items: [
          { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
          { name: 'Apps Script', icon: 'simple-icons:googleappsscript' },
          { name: 'Data Studio', icon: 'simple-icons:googledatastudio' },
        ],
      },
    ],
  },
  ctaSection: {
    heading: 'See what one call could save you.',
    sub: '20 minutes, no pitch. Bring one report you ship regularly and we find the first thing to automate.',
    hint: 'Available in English and Spanish.',
  },
  services: {
    seo: {
      title: 'Services · Agency Reporting System | Alex Spelucin',
      description:
        'Reporting and measurement for agencies: audited sources, clear KPIs, dashboards and documentation you can repeat across clients.',
    },
    hero: {
      badge: 'Services',
      headline: 'Reporting for',
      highlight: 'growing agencies.',
      sub: 'Audit, measurement, KPIs, dashboards and documentation so the team can repeat the work across clients.',
    },
    components: {
      index: '01',
      heading: 'What your',
      highlight: 'reporting needs.',
      intro: 'The pieces that make measurement clear and the work repeatable.',
      items: [
        {
          title: 'Source audit',
          text: 'Every platform your clients\' numbers come from, audited for accuracy.',
          tags: ['Sources', 'QA', 'Accuracy'],
        },
        {
          title: 'Sources & data model',
          text: 'A model that explains where each number comes from and how it is used in reporting.',
          tags: ['KPIs', 'Sources', 'Model'],
        },
        {
          title: 'Dashboards',
          text: 'Looker Studio views for executives and for the operating team.',
          tags: ['Looker Studio', 'KPIs'],
        },
        {
          title: 'Automated delivery',
          text: 'Google Sheets and scheduled sends via Apps Script.',
          tags: ['Sheets', 'Apps Script'],
        },
        {
          title: 'Quality checks',
          text: 'Alerts when a number stops making sense.',
          tags: ['Alerts', 'Monitoring'],
        },
        {
          title: 'Documentation & handover',
          text: 'So your team can maintain the reporting without relying on one person.',
          tags: ['Docs', 'Training'],
        },
      ],
    },
    proof: {
      index: '02',
      heading: 'Work done for',
      highlight: 'real agencies.',
      intro: 'Reporting and measurement built for teams with several clients.',
      stats: [
        { value: '6+', label: 'years in marketing analytics' },
        { value: '15-20', label: 'concurrent accounts at Notebook Agency' },
        { value: '10+', label: 'clients in Torices reporting systems' },
        { value: '20+', label: 'freelance dashboards delivered' },
      ],
    },
    faq: {
      index: '03',
      heading: 'Frequently asked',
      highlight: 'questions.',
      items: [
        {
          q: 'What exactly do I get?',
          a: 'A documented data model, dashboards, automated delivery and the documentation to run it.',
        },
        {
          q: 'Do I need to change tools?',
          a: 'No. We build on Looker Studio; the heavy lifting happens in Google Cloud, behind it.',
        },
        {
          q: 'What if my data is a mess?',
          a: 'That is what the audit is for. We clean the sources before building anything.',
        },
        {
          q: 'Can you work with agencies outside LATAM?',
          a: 'Yes. English and Spanish, remote, with overlapping hours.',
        },
        {
          q: 'How do we start?',
          a: 'A 20-minute call. If it fits, the sprint has fixed scope and price.',
        },
      ],
    },
  },
  work: {
    seo: {
      title: 'Case studies · Reporting systems | Alex Spelucin',
      description:
        'Case studies of measurement and reporting built for agencies, with dashboards and documented technical decisions.',
    },
    hero: {
      eyebrow: 'Case Studies',
      heading: 'Case studies',
      highlight: 'from the work.',
      sub: 'Systems built for agencies. See the problem, what shipped and how the operation changed.',
    },
    caseCta: 'View full case',
    cases: [
      {
        slug: 'torices',
        client: 'Torices Digital',
        sector: 'Growth marketing',
        year: '2026',
        title: 'Organic and paid reporting, side by side',
        summary:
          'A report series that shows organic and paid traffic in parallel, with the sources reviewed to support the reading.',
        alt: 'View of the organic and paid traffic reports for Torices Digital',
      },
      {
        slug: 'notebook',
        client: 'Notebook Agency',
        sector: 'SEO · B2B/SaaS',
        year: '2025',
        title: 'Measurement wired into every report',
        summary:
          'A measurement and reporting system for B2B/SaaS clients, with page tracking wired into every report.',
        alt: 'View of the Notebook Agency measurement and reporting system',
      },
      {
        slug: 'owlbox',
        client: 'Owlbox',
        sector: 'Ecommerce',
        year: '2024',
        title: 'Ecommerce dashboards for LATAM clients',
        summary:
          'A set of dashboards with the metrics their clients need: ROAS, paid revenue, spend and top products.',
        alt: 'View of the Owlbox e-commerce dashboards',
      },
    ],
  },
  aboutPage: {
    seo: {
      title: 'About · Marketing Data Analyst | Alex Spelucin',
      description:
        'I work at the intersection of marketing and data: reliable measurement, reporting that scales and systems teams use every day.',
    },
    hero: {
      headline: 'From enterprise SEO to agency',
      highlight: 'reporting systems.',
      sub: 'Marketing data analyst building the systems that run agency reporting.',
    },
    capabilities: {
      index: '02',
      heading: 'What I have',
      highlight: 'craft in.',
      intro: 'Nine areas where I apply technical judgment to real marketing problems.',
    },
  },
  contactPage: {
    seo: {
      title: 'Contact · Let\'s Talk | Alex Spelucin',
      description: 'A 20-minute call, no pitch. See if a reporting system makes sense for your agency.',
    },
    heading: 'Let\'s build something your team can use.',
    sub: '20 minutes, no pitch. Bring a report you ship regularly and we will look at where the time goes.',
    emailLabel: 'Write to me',
    calLabel: 'Book a call',
    linkedinLabel: 'LinkedIn',
    availability: 'Available for agencies in LATAM, Spain and the United States.',
  },
  caseStudies: {
    challengeHeading: 'The challenge',
    contextHeading: 'Context',
    galleryHeading: 'The work',
    moreHeading: 'More case studies',
    backToWork: 'Back to case studies',
    torices: {
      slug: 'torices',
      client: 'Torices Digital',
      sector: 'Growth marketing',
      year: '2026',
      kicker: 'Case study',
      title: 'Organic and paid reporting, side by side',
      heroResult: 'System for 10+ clients',
      alt: 'View of the organic and paid traffic reports for Torices Digital',
      imagesAlt: [
        'View of the organic and paid report: cover',
        'View of the report: traffic metrics',
        'View of the report: sessions and pages',
        'View of the report: acquisition channels',
        'View of the report: monthly summary',
      ],
      context: [
        'Torices Digital is a growth marketing agency managing organic and paid for its clients. Its reports had to show the accumulated impact of both channels without leaving room for doubt about the numbers.',
      ],
      problems: [
        {
          title: 'Organic and paid in silos',
          text: 'Two views of the same funnel, impossible to compare at a glance.',
        },
        {
          title: 'Sources audited by hand',
          text: 'Numbers were only as good as whichever source was pulled that day; there was no consistency.',
        },
        {
          title: 'Reporting stacked on top of ops',
          text: 'Every month, after the work, when the team was already spent.',
        },
      ],
      built: {
        heading: 'What we built',
        items: [
          {
            title: 'Side-by-side reporting',
            text: 'A report series that shows the impact of organic and paid traffic in parallel.',
          },
          {
            title: 'Source audit',
            text: 'Sources reviewed so the numbers reached the reports with consistent logic.',
          },
          {
            title: 'A reusable system',
            text: 'The same logic across 10+ clients: a new client stops being a build from scratch.',
          },
        ],
      },
      results: {
        heading: 'Results',
        stats: [
          { value: '10+', label: 'clients reporting' },
          { value: '01', label: 'reporting system' },
          { value: '10+', label: 'clients supported' },
        ],
      },
    },
    owlbox: {
      slug: 'owlbox',
      client: 'Owlbox',
      sector: 'Ecommerce',
      year: '2024',
      kicker: 'Case study',
      title: 'Ecommerce dashboards for LATAM clients',
      heroResult: 'Reporting for 10+ clients',
      alt: 'View of the Owlbox e-commerce dashboards',
      imagesAlt: [
        'View of the Owlbox ecommerce dashboard: overview',
        'View of the Owlbox ecommerce dashboard: revenue and spend',
        'View of the Owlbox ecommerce dashboard: top products',
        'View of the Owlbox ecommerce dashboard: executive summary',
      ],
      context: [
        'Owlbox is a growth agency for e-commerce, working with clients across LATAM. Its reviews needed the key business metrics in front of them, without hunting for numbers across several screens.',
      ],
      problems: [
        {
          title: 'Key metrics scattered',
          text: 'ROAS, paid revenue, spend and top products lived in different views.',
        },
        {
          title: 'No shared view per client',
          text: 'Every review meant pulling numbers together from several places.',
        },
        {
          title: 'No shared view for reviews',
          text: 'The metrics were scattered, so every review started by pulling them together again.',
        },
      ],
      built: {
        heading: 'What we built',
        items: [
          {
            title: 'Dashboard set per client',
            text: 'Dashboards with ROAS, paid revenue, spend and top products for each client.',
          },
          {
            title: 'A shared view per client',
            text: 'Meta Ads, CRM and GA4 data reviewed in the same context for each client.',
          },
          {
            title: 'A template that repeats',
            text: 'The same structure for every new client, without starting from zero.',
          },
        ],
      },
      results: {
        heading: 'Results',
        stats: [
          { value: '03', label: 'platforms checked against each other' },
          { value: '01', label: 'reporting view per client' },
        ],
      },
    },
    notebook: {
      slug: 'notebook',
      client: 'Notebook Agency',
      sector: 'SEO · B2B/SaaS',
      year: '2025',
      kicker: 'Case study',
      title: 'Measurement wired into every SEO report',
      heroResult: 'System for 30+ clients',
      alt: 'View of the Notebook Agency measurement and reporting system',
      imagesAlt: [
        'View of the measurement system: overview',
        'View of the measurement system: key metrics',
        'View of the measurement system: page detail',
        'View of the measurement system: SEO queries',
        'View of the measurement system: summaries',
        'View of the measurement system: final report',
      ],
      context: [
        'Notebook is an SEO agency with B2B and SaaS clients. Its reporting had to support strategy with data every month, across several clients.',
      ],
      problems: [
        {
          title: 'Reports rebuilt by hand',
          text: 'Every client report meant putting it together piece by piece.',
        },
        {
          title: 'No page-level visibility',
          text: 'The agency could not show how each page performed per client.',
        },
        {
          title: 'SEO data stuck in vendor tools',
          text: 'There was no clean path for query performance beyond the dashboards.',
        },
      ],
      built: {
        heading: 'What we built',
        items: [
          {
            title: 'Page measurement system',
            text: 'Wired into every report so each deliverable includes the page data it analyzes.',
          },
          {
            title: 'SEO query tracking',
            text: 'Query data connected to the reporting for each client.',
          },
          {
            title: 'A reporting architecture',
            text: 'One shared approach across clients: new reports without building from scratch.',
          },
        ],
      },
      results: {
        heading: 'Results',
        stats: [
          { value: '30+', label: 'clients served by the system' },
          { value: '10', label: 'GA4 accounts audited' },
          { value: '15-20', label: 'concurrent accounts managed' },
        ],
      },
    },
  },
  header: {
    langLabel: 'Change language',
  },
  hero: {
    role: 'Digital Analyst',
  },
  about: {
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
  },
  footer: {
    tagline: 'Marketing data analyst. Reporting systems for agencies.',
    exploreNav: 'Explore',
    contactNav: 'Contact',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    privacy: 'Privacy',
    terms: 'Terms',
  },
};
