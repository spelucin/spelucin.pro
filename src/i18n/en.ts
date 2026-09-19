import type { Translations } from './types';

export const t: Translations = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'Alex Spelucin · Marketing Data Analyst',
    description:
      'I help marketing teams and agencies work with data they can trust. I build measurement and reporting the team can use every day.',
    imageAlt: 'Alex Spelucin · Marketing data analyst',
  },
  skipLink: 'Skip to content',
  siteNav: [
    { label: 'Case studies', href: '/case-studies' },
    { label: 'SEO Agencies', href: '/seo-agencies' },
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
      sub: 'I build measurement and reporting systems so agencies can deliver without relying on whoever owns the spreadsheet.',
      visualAlt: 'View of a marketing reporting system',
    },
    trust: {
      label: 'Clients I have worked with:',
    },
    problem: {
      heading: 'The cost of building',
      highlight: 'reports by hand.',
      intro:
        'When every report starts from scratch, errors and waiting become part of the job.',
      items: [
        {
          title: 'The same work every month',
          text: 'Export, paste data and fix formats for every client. That is time the team could spend elsewhere.',
        },
        {
          title: 'Numbers that do not add up',
          text: 'Ads says one thing and the client\'s console says another. Before discussing results, someone has to decide which number counts.',
        },
        {
          title: 'Every client adds work',
          text: 'A new client means another workbook, another template and more hours from your analyst.',
        },
      ],
    },
    service: {
      heading: 'Four weeks, one',
      highlight: 'reporting system.',
      intro: 'In four weeks we sort the sources, define the metrics and leave the system behind your reports working.',
      weeks: [
        { title: 'Week 1 · Audit', text: 'We review the sources and reports, then note where they differ.' },
        { title: 'Week 2 · Model & design', text: 'We define the metrics and sketch the dashboards before building them.' },
        { title: 'Week 3 · Build', text: 'We work on the warehouse, transformations and first dashboards.' },
        { title: 'Week 4 · Handover', text: 'We automate, document and leave the team ready to run it.' },
      ],
      includeHeading: 'What is included',
      include: ['A documented data model', 'Looker Studio dashboards', 'Automated delivery', 'Handover docs'],
      fit: {
        goodHeading: 'Good fit',
        good: [
          'You report for 5+ clients',
          'You already use (or want) Looker Studio',
          'Numbers never quite match up',
          'You want to stop firefighting every report',
        ],
        poorHeading: 'Not a fit if',
        poor: [
          'You want a free single-channel dashboard',
          'You are a team of one after a one-off report',
          'You want to replace the team, not improve how it works',
        ],
      },
    },
    proof: {
      heading: 'Reporting for',
      highlight: 'growth, ecommerce and SEO agencies.',
      intro: 'For teams reporting across several clients that need the same logic in every delivery.',
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
      heading: 'Frequently asked',
      highlight: 'questions.',
      items: [
        {
          q: 'Do you replace our tools?',
          a: 'No. If you already use Looker Studio, we build on it. BigQuery and Apps Script stay behind it.',
        },
        {
          q: 'How long until the first dashboard?',
          a: 'The first client dashboard arrives during the sprint, usually in week 3.',
        },
        {
          q: 'Do you work with the connectors we already use?',
          a: 'Usually. Google sources connect natively. Other platforms can come through APIs into the warehouse.',
        },
        {
          q: 'What do you need from us?',
          a: 'Read access to the sources and 30 minutes a week with whoever owns reporting today.',
        },
        {
          q: 'What happens after the sprint?',
          a: 'The system stays documented and automated. You can request changes later, or your team can run it.',
        },
      ],
    },
  },
  seoAgencies: {
    seo: {
      title: 'Measurement Systems for SEO Agencies | Alex Spelucin',
      description:
        'Measurement and reporting for SEO agencies: page tracking, GA4, Search Console, BigQuery and Looker Studio in a system you can repeat for every client.',
    },
    hero: {
      eyebrow: 'SEO AGENCIES',
      headline: 'Measurement systems for',
      highlight: 'SEO agencies.',
      sub: 'A measurement and reporting system your agency can repeat across every client.',
      visualAlt: 'View of the reporting system the agency repeats for every client',
      ctaPrimary: 'Book a measurement teardown',
    },
    credibility: {
      label: 'Built for agency reporting',
      text: "I'm Alex Spelucin. I build the measurement systems agencies report from.",
    },
    problem: {
      heading: 'Why agencies burn out',
      highlight: 'on measurement.',
      intro: "Many agencies do not need another tool. They need to stop rebuilding the same report by hand every month.",
      items: [
        {
          title: 'Reports built by hand',
          text: 'Export, paste data and fix formats. The numbers end up depending on whoever built the sheet.',
        },
        {
          title: 'Numbers that do not add up',
          text: 'GA4, Search Console and the client\'s tools do not always tell the same story.',
        },
        {
          title: 'Every client starts from zero',
          text: 'Without a shared base, every client means rebuilding the measurement setup.',
        },
        {
          title: 'Growth means more manual work',
          text: 'The work grows with the client list, and your analysts absorb the extra hours.',
        },
        {
          title: 'Knowledge locked in one person',
          text: 'If the only documentation is the person who built the reports, the agency is exposed when that person is away.',
        },
        {
          title: 'Competitors are one step ahead',
          text: 'A repeatable measurement setup makes proposals and deliveries less manual.',
        },
      ],
    },
    system: {
      heading: 'One system,',
      highlight: 'three parts.',
      intro: 'The three steps connect. When a new client arrives, you do not have to invent the system again.',
      blocks: [
        {
          title: 'Track',
          text: 'We check the measurement where the data starts.',
          detail:
            'Each source gets audited once: GA4 events, Search Console pages and queries, and page-level tracking end up documented and working from day one.',
          image: {
            alt: 'Audit of the data sources feeding the measurement system',
            caption: 'Source audit',
          },
        },
        {
          title: 'Model',
          text: 'We write down what each metric means.',
          detail:
            'With the base documented, we define a metric dictionary and a KPI framework the team can reference. Every number in a report has a source and a definition.',
          image: {
            alt: 'Structure of the database and the metric tagging setup',
            caption: 'Database & tagging',
          },
        },
        {
          title: 'Report & scale',
          text: 'Reports with the same logic, ready to scale.',
          detail:
            'Looker Studio dashboards are built once and reused. Recurring reporting stays documented, and every new client starts from a base that already works.',
          image: {
            alt: 'Reporting dashboards in Looker Studio',
            caption: 'Dashboards',
          },
        },
      ],
    },
    caseStudy: {
      heading: 'Notebook now reports from',
      highlight: 'one system.',
      intro: 'Notebook Agency needed to use data consistently in monthly reporting across several clients. The system now feeds every report.',
      points: [
        '30+ SEO clients served by the system',
        'GA4 audit-first approach',
        'A reporting base the team can repeat',
        'Page-level measurement',
        'Query-level measurement',
        'New reports without starting from scratch',
      ],
      cta: 'Read the Notebook case study',
    },
    offer: {
      name: 'Measurement Teardown',
      tag: 'Starting point',
      paragraphs: [
        'We take one client and one report. I review how the measurement works, where the numbers split and which pages or queries explain the result.',
        'You get a written review to share with the client and a clear list of what to fix next.',
      ],
      items: [
        'A review of your current GA4 and Search Console setup',
        'Differences between platforms',
        'Pages and queries that explain the result',
        'A page-level view of what drives the result',
        'A document you can share with the client',
        'Clear next steps',
      ],
      cta: 'Book a measurement teardown',
      ctaHint: '30 minutes, no pitch.',
    },
    engagement: {
      heading: 'Try it on one client,',
      highlight: 'then the whole list.',
      intro: 'We start with one client. If it works for the team, we roll it out to the rest.',
      steps: [
        {
          title: 'Audit',
          text: 'We review sources, events, pages and queries for one client. That shows what is happening before we change anything.',
        },
        {
          title: 'Model & design',
          text: 'We define the metrics and write down what each number means for your team.',
        },
        {
          title: 'Build',
          text: 'We fix the source and build the reporting. The first dashboard arrives during the first couple of weeks.',
        },
        {
          title: 'Handover',
          text: 'We document the model, sources and automation so the next client starts from the same base.',
        },
      ],
    },
    fit: {
      heading: 'Where it',
      highlight: 'fits.',
      goodHeading: 'This may be useful if:',
      good: [
        'You report for SEO clients and the numbers do not quite line up',
        'You want to connect strategy with what pages and queries actually do',
        'You want new clients to start from a shared base',
      ],
      poorHeading: 'It is probably not for you if:',
      poor: [
        'You work alone with one client',
        'You want a free dashboard for a one-off problem',
        'You want to hire an analyst, not improve the team\'s system',
      ],
    },
    faq: {
      heading: 'Common',
      highlight: 'questions.',
      items: [
        {
          q: 'Do you replace our current tools?',
          a: 'No. We work with your tools, usually GA4, Search Console and Looker Studio. BigQuery and Apps Script stay behind them.',
        },
        {
          q: 'How is this different from hiring an analyst?',
          a: 'An analyst can solve this month\'s report. A documented system lets the team repeat the work.',
        },
        {
          q: 'Do we need to have everything in BigQuery?',
          a: 'No. We meet you where your data lives and move only what needs to move.',
        },
        {
          q: 'Which agencies is this for?',
          a: 'SEO agencies with B2B or SaaS clients that report every month for several accounts. If you have one client, it may be more than you need.',
        },
        {
          q: 'How do we start?',
          a: 'In a 20-minute call we look at one report you already send and choose the first problem to solve.',
        },
      ],
    },
    finalCta: {
      heading: 'Is your reporting system ready',
      highlight: 'for the next 20 clients?',
      sub: 'We start with one client and leave a base the team can repeat.',
      ctaPrimary: 'Book a measurement teardown',
    },
  },
  process: {
    heading: 'This is how the work starts.',
    intro: 'First we look at how the work happens. Then we decide what is worth building.',
    steps: [
      {
        title: 'Audit',
        text: 'We review your sources, reports and where the differences come from.',
      },
      {
        title: 'Model & design',
        text: 'We agree on the metrics, model and dashboards before building.',
      },
      {
        title: 'Build',
        text: 'We build the warehouse, transformations and dashboards using your team\'s names and processes.',
      },
      {
        title: 'Handover',
        text: 'We document and automate the work so the team can run it.',
      },
    ],
  },
  stack: {
    heading: 'Under the hood',
    highlight: 'of the reporting.',
    intro: 'Data lives in BigQuery, gets shaped with SQL and reaches the dashboards through Looker Studio.',
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
          { name: 'Looker Studio', icon: 'simple-icons:googledatastudio' },
        ],
      },
    ],
  },
  ctaSection: {
    heading: 'Bring a report that takes too long.',
    sub: 'In 20 minutes we can see where the work gets stuck and what to automate first.',
    hint: 'Available in English and Spanish.',
  },
  services: {
    seo: {
      title: 'Services · Agency Reporting System | Alex Spelucin',
      description:
        'Reporting and measurement for agencies: reviewed sources, clear KPIs, dashboards and documentation the team can use across clients.',
    },
    hero: {
      badge: 'Services',
      headline: 'Reporting for',
      highlight: 'growing agencies.',
      sub: 'I review the sources, sort out the metrics and leave dashboards and documentation the team can maintain.',
    },
    components: {
      heading: 'What your',
      highlight: 'reporting needs.',
      intro: 'The parts that keep reporting from depending on one person.',
      items: [
        {
          title: 'Source audit',
          text: 'I review the platforms your clients\' numbers come from.',
          tags: ['Sources', 'QA', 'Accuracy'],
        },
        {
          title: 'Sources & data model',
          text: 'A clear record of where each number comes from and how it enters the report.',
          tags: ['KPIs', 'Sources', 'Model'],
        },
        {
          title: 'Dashboards',
          text: 'Looker Studio views for decisions and day-to-day work.',
          tags: ['Looker Studio', 'KPIs'],
        },
        {
          title: 'Automated delivery',
          text: 'Google Sheets and scheduled sends through Apps Script.',
          tags: ['Sheets', 'Apps Script'],
        },
        {
          title: 'Quality checks',
          text: 'Alerts when a metric changes or stops lining up.',
          tags: ['Alerts', 'Monitoring'],
        },
        {
          title: 'Documentation & handover',
          text: 'Documentation so your team can maintain the reporting.',
          tags: ['Docs', 'Training'],
        },
      ],
    },
    faq: {
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
          a: 'A 20-minute call. If it makes sense, we define a sprint with fixed scope and price.',
        },
      ],
    },
  },
  work: {
    seo: {
      title: 'Case studies · Reporting systems | Alex Spelucin',
      description:
        'Case studies of measurement and reporting for agencies, with dashboards and documented technical decisions.',
    },
    hero: {
      eyebrow: 'Case Studies',
      heading: 'Case studies',
      highlight: 'from the work.',
      sub: 'Cases from agency work: the problem, what shipped and how the work changed.',
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
          'A report series that puts organic and paid traffic side by side, with the sources checked.',
        alt: 'View of the organic and paid traffic reports for Torices Digital',
      },
      {
        slug: 'notebook',
        client: 'Notebook Agency',
        sector: 'SEO · B2B/SaaS',
        year: '2025',
        title: 'Measurement wired into every report',
        summary:
          'A measurement and reporting system for B2B/SaaS clients, with page data inside every report.',
        alt: 'View of the Notebook Agency measurement and reporting system',
      },
      {
        slug: 'owlbox',
        client: 'Owlbox',
        sector: 'Ecommerce',
        year: '2024',
        title: 'Ecommerce dashboards for LATAM clients',
        summary:
          'Dashboards with the metrics their clients need: ROAS, paid revenue, spend and top products.',
        alt: 'View of the Owlbox e-commerce dashboards',
      },
    ],
  },
  aboutPage: {
    seo: {
      title: 'About · Marketing Data Analyst | Alex Spelucin',
      description:
        'I work between marketing and data: measurement you can trust, reporting the team can maintain and systems people use every day.',
    },
    hero: {
      headline: 'From enterprise SEO to agency',
      highlight: 'reporting systems.',
      sub: 'Marketing data analyst building the systems agencies use to report.',
    },
    capabilities: {
      heading: 'What I know how',
      highlight: 'to do.',
      intro: 'Three areas where I work with marketing teams.',
    },
  },
  contactPage: {
    seo: {
      title: 'Contact · Let\'s Talk | Alex Spelucin',
      description: 'A 20-minute call to see whether a reporting system could help your agency.',
    },
    heading: 'Let\'s talk about how your team works.',
    sub: 'In 20 minutes we can look at a report you send regularly and see where the time goes.',
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
        'Torices Digital is a growth marketing agency managing organic and paid. It needed to compare both channels without pulling the numbers together by hand.',
      ],
      problems: [
        {
          title: 'Organic and paid in silos',
          text: 'Two views of the same funnel that could not be compared quickly.',
        },
        {
          title: 'Sources audited by hand',
          text: 'Each source could show a different number, and there was no shared rule.',
        },
        {
          title: 'Reporting stacked on top of ops',
          text: 'The report happened at the end of the month, when the team was already busy with operations.',
        },
      ],
      built: {
        heading: 'What we built',
        items: [
          {
            title: 'Side-by-side reporting',
            text: 'A report series that puts organic and paid traffic side by side.',
          },
          {
            title: 'Source audit',
            text: 'We reviewed the sources and gave the reports one shared logic.',
          },
          {
            title: 'A reusable system',
            text: 'The same logic across 10+ clients, without rebuilding each report from scratch.',
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
        'Owlbox is a growth agency for ecommerce with clients across LATAM. It needed the main metrics in one place during client reviews.',
      ],
      problems: [
        {
          title: 'Key metrics scattered',
          text: 'ROAS, paid revenue, spend and top products were spread across different views.',
        },
        {
          title: 'No shared view per client',
          text: 'Every review began by pulling numbers from different places.',
        },
        {
          title: 'The metrics were not together',
          text: 'Every review depended on gathering the data again.',
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
            text: 'Meta Ads, CRM and GA4 data in the same context for each client.',
          },
          {
            title: 'A template that repeats',
            text: 'The same structure for every new client.',
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
        'Notebook is an SEO agency with B2B and SaaS clients. It needed consistent data in its monthly reporting.',
      ],
      problems: [
        {
          title: 'Reports rebuilt by hand',
          text: 'Every client report was assembled piece by piece.',
        },
        {
          title: 'No page-level visibility',
          text: 'The agency could not clearly see how each page performed per client.',
        },
        {
          title: 'SEO data stuck in vendor tools',
          text: 'Query performance was not connected to the rest of the report.',
        },
      ],
      built: {
        heading: 'What we built',
        items: [
          {
            title: 'Page measurement system',
            text: 'Each deliverable includes the page data it analyzes.',
          },
          {
            title: 'SEO query tracking',
            text: 'Query data connected to each client report.',
          },
          {
            title: 'A reporting architecture',
            text: 'One shared base for new reports, without starting from scratch.',
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
        'I work between marketing and data. My focus is digital analytics and the systems behind it: measurement you can trust, reporting the team can maintain and data people can use without relying on one person.',
      'I started in enterprise technical SEO (Ripley, Intercorp Retail) and led analytics at agencies in Canada, Mexico, Argentina and Peru. The problem is usually the same: teams have data, but do not always know which number to use.',
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
          'I define which metric answers each question, where it comes from and how the team will use it.',
        tags: ['KPI frameworks', 'Attribution', 'Funnels'],
      },
      {
        name: 'Digital Measurement',
        tagline: 'GA4, GTM and reliable tracking',
        detail:
          'I implement GA4 and GTM with consistent naming, consent, versions and QA. I also review why numbers do not match across platforms.',
        tags: ['GA4', 'GTM', 'Consent'],
      },
      {
        name: 'Marketing Data Warehouses',
        tagline: 'Marketing data warehouse',
        detail:
          'I bring ads, CRM and web data into models the team can query directly.',
        tags: ['BigQuery', 'GCP', 'Data warehouse'],
      },
    ],
  },
  footer: {
    tagline: 'Marketing data analyst. Reporting for agencies.',
    exploreNav: 'Explore',
    contactNav: 'Contact',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    legal: 'Privacy & terms',
  },
};
