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
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'For Agencies', href: '/agencies' },
    { label: 'About', href: '/about' },
  ],
  ctaLabel: 'Book a call',
  ctaSeeWork: 'See the work',
  home: {
    hero: {
      badge: 'Agency reporting systems',
      headline: 'Client reports that',
      highlight: 'build themselves.',
      sub: 'I design the data and reporting system behind your client-facing reports, so your team stops rebuilding them every month.',
      ctaSecondary: 'See the work',
      visualAlt: 'View of a marketing reporting system',
    },
    trust: {
      label: 'Working with:',
    },
    problem: {
      index: '01',
      heading: 'Reporting should not',
      highlight: 'duplicate with every client.',
      intro:
        'When reports are built by hand each month, errors, waiting and inconsistency become part of the operation.',
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
      heading: 'One service:',
      highlight: 'the system behind your reports.',
      intro: 'Dashboards, warehouse, delivery and automation as one system, not scattered files.',
      pillars: [
        {
          title: 'Dashboards & Reporting',
          text: 'Looker Studio dashboards your clients open daily: performance, paid and organic side by side, ROAS and top products.',
          tags: ['Looker Studio', 'KPIs', 'GA4 · Ads · SEO'],
        },
        {
          title: 'Warehouse & Pipelines',
          text: 'A clean data layer in BigQuery, with Dataform and Google Cloud, so every number comes from the same source of truth.',
          tags: ['BigQuery', 'Dataform', 'Google Cloud'],
        },
        {
          title: 'Automation & Delivery',
          text: 'Google Sheets delivery and Apps Script automation: reports scheduled, formatted and sent without a person in the loop.',
          tags: ['Google Sheets', 'Apps Script', 'Scheduling'],
        },
      ],
    },
    proof: {
      index: '03',
      heading: 'Built for',
      highlight: 'growth, ecommerce and SEO agencies.',
      intro: 'Systems already running in agencies, with real hours given back to the teams.',
      stats: [
        { value: '20+', label: 'clients reporting on these systems' },
        { value: '60 hrs', label: 'saved per month at an SEO agency' },
        { value: '12 hrs', label: 'saved per week at a growth agency' },
        { value: '10 hrs', label: 'saved per week at an ecommerce agency' },
      ],
      featured: ['notebook', 'torices', 'owlbox'],
    },
  },
  process: {
    index: '04',
    heading: 'How it works,',
    highlight: 'start to finish.',
    intro: 'Four stages, each with clear deliverables. Nothing gets built until the model is agreed.',
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
    heading: 'The stack,',
    highlight: 'all in Google.',
    intro: 'One ecosystem, from source to delivery. If your clients report in Looker Studio, this slots straight in.',
    layers: [
      {
        name: 'Data sources',
        items: [
          { name: 'Google Analytics 4', icon: 'simple-icons:googleanalytics' },
          { name: 'Google Ads', icon: 'simple-icons:googleads' },
          { name: 'Meta Ads', icon: 'simple-icons:meta' },
          { name: 'Search Console', icon: 'simple-icons:googlesearchconsole' },
          { name: 'APIs and other sources', icon: 'tabler:api' },
        ],
      },
      {
        name: 'Warehouse & transformation',
        items: [
          { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
          { name: 'BigQuery', icon: 'simple-icons:googlebigquery' },
          { name: 'Dataform', icon: 'tabler:database' },
        ],
      },
      {
        name: 'Reporting & delivery',
        items: [
          { name: 'Looker Studio', icon: 'simple-icons:googledatastudio' },
          { name: 'Google Sheets', icon: 'simple-icons:googlesheets' },
        ],
      },
      {
        name: 'Automation',
        items: [
          { name: 'Apps Script', icon: 'simple-icons:googleappsscript' },
          { name: 'Google Tag Manager', icon: 'simple-icons:googletagmanager' },
          { name: 'APIs', icon: 'tabler:plug-connected' },
        ],
      },
    ],
  },
  ctaSection: {
    heading: 'See what one call could save you.',
    sub: '20 minutes, no pitch. Bring one report you ship regularly and we find the first thing to automate.',
    hint: 'Available in English and Spanish.',
  },
  agencies: {
    seo: {
      title: 'For Agencies · Reporting Systems | Alex Spelucin',
      description:
        'Data and reporting systems for agencies: one model, every client, zero manual rebuilds. Dashboards, warehouse and automation on Google.',
    },
    hero: {
      badge: 'For agency owners',
      headline: 'Add clients without',
      highlight: 'the reporting work.',
      sub: 'A data and reporting system built for agencies: one model, every client, no manual rebuilds.',
      ctaSecondary: 'See the system',
      visualAlt: 'View of a marketing reporting system',
    },
    takeover: {
      index: '01',
      heading: 'The pains that',
      highlight: 'change with a system.',
      intro: 'The real operation of an agency growing from 5 to 15 clients.',
      items: [
        {
          title: 'New client, new template',
          text: 'Your analyst rebuilds the same dashboard for the fifth time, by hand.',
        },
        {
          title: 'Numbers that contradict each other',
          text: 'Ads, Search Console and the client\'s own data never quite agree, and you feel it in every review.',
        },
        {
          title: 'Delivery is a recurring emergency',
          text: 'The client asks again at month-end and the scramble starts over.',
        },
        {
          title: 'The report undersells the work',
          text: 'Great work shipped in a spreadsheet that makes it look smaller.',
        },
        {
          title: 'Retainers run on reports',
          text: 'The value you deliver monthly shows up as a file, not as a system.',
        },
        {
          title: 'Growth means more of the same',
          text: 'Going from 5 to 15 clients should not mean 3x the reporting hours.',
        },
      ],
    },
    proof: {
      index: '02',
      heading: 'Systems already running',
      highlight: 'in agencies.',
      intro: 'Three agencies, three sectors, the same hours given back to the team.',
      stats: [
        { value: '20+', label: 'clients reporting on these systems' },
        { value: '60 hrs', label: 'saved per month at an SEO agency' },
        { value: '12 hrs', label: 'saved per week at a growth agency' },
        { value: '10 hrs', label: 'saved per week at an ecommerce agency' },
      ],
    },
    sprint: {
      index: '03',
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
    },
    fit: {
      index: '04',
      heading: 'Is this',
      highlight: 'a fit?',
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
    faq: {
      index: '05',
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
  services: {
    seo: {
      title: 'Services · Agency Reporting System | Alex Spelucin',
      description:
        'One service end to end: audit, data model, warehouse, dashboards, delivery and automation for your client reporting.',
    },
    hero: {
      badge: 'Services',
      headline: 'The system behind your',
      highlight: 'client reports.',
      sub: 'One service, end to end: audit, data model, warehouse, dashboards, delivery and automation.',
    },
    components: {
      index: '01',
      heading: 'What the system',
      highlight: 'includes.',
      intro: 'Six pieces that ship together. No loose files, no hidden dependencies.',
      items: [
        {
          title: 'Source audit',
          text: 'Every platform your clients\' numbers come from, audited for accuracy.',
          tags: ['Sources', 'QA', 'Accuracy'],
        },
        {
          title: 'Model & warehouse',
          text: 'BigQuery with Dataform transformations. One source of truth.',
          tags: ['BigQuery', 'Dataform'],
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
          text: 'So your team runs the system, not me.',
          tags: ['Docs', 'Training'],
        },
      ],
    },
    proof: {
      index: '02',
      heading: 'Proven in',
      highlight: 'real agencies.',
      intro: 'The hours these systems gave back to the teams.',
      stats: [
        { value: '20+', label: 'clients reporting on these systems' },
        { value: '60 hrs', label: 'saved per month at an SEO agency' },
        { value: '12 hrs', label: 'saved per week at a growth agency' },
        { value: '10 hrs', label: 'saved per week at an ecommerce agency' },
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
      title: 'Work · Real Reporting Systems | Alex Spelucin',
      description:
        'Three measurement and reporting systems built for agencies: the real dashboards and the hours they saved.',
    },
    hero: {
      index: '01',
      heading: 'Real reporting',
      highlight: 'systems.',
      sub: 'Three systems built for agencies. Look at the actual dashboards and the hours they saved.',
    },
    cases: [
      {
        slug: 'torices',
        client: 'Torices Digital',
        sector: 'Growth marketing',
        year: '2026',
        title: 'Organic and paid reporting, side by side',
        summary:
          'A report series that shows the impact of organic and paid traffic face to face, with audited data sources.',
        result: '12 hrs saved / week',
        alt: 'View of the organic and paid traffic reports for Torices Digital',
        imagesAlt: [
          'View of the organic and paid report: cover',
          'View of the report: traffic metrics',
          'View of the report: sessions and pages',
          'View of the report: acquisition channels',
          'View of the report: monthly summary',
        ],
      },
      {
        slug: 'notebook',
        client: 'Notebook Agency',
        sector: 'SEO · B2B/SaaS',
        year: '2025',
        title: 'Measurement wired into every report',
        summary:
          'A measurement and reporting system that lets the agency show results to B2B/SaaS clients, with page measurement per report and 2 custom connectors.',
        result: '60 hrs saved / month',
        alt: 'View of the Notebook Agency measurement and reporting system',
        imagesAlt: [
          'View of the measurement system: overview',
          'View of the measurement system: key metrics',
          'View of the measurement system: page detail',
          'View of the measurement system: SEO queries',
          'View of the measurement system: summaries',
          'View of the measurement system: final report',
        ],
      },
      {
        slug: 'owlbox',
        client: 'Owlbox',
        sector: 'Ecommerce',
        year: '2024',
        title: 'Ecommerce dashboards for LATAM clients',
        summary:
          'A set of dashboards with the metrics their clients need: ROAS, paid revenue, spend and top products.',
        result: '10 hrs saved / week',
        alt: 'View of the Owlbox e-commerce dashboards',
        imagesAlt: [
          'View of the Owlbox ecommerce dashboard: overview',
          'View of the Owlbox ecommerce dashboard: revenue and spend',
          'View of the Owlbox ecommerce dashboard: top products',
          'View of the Owlbox ecommerce dashboard: executive summary',
        ],
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
      index: '01',
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
    heading: 'Let\'s talk.',
    sub: '20 minutes, no pitch. Bring a report you ship regularly.',
    emailLabel: 'Write to me',
    calLabel: 'Book a call',
    linkedinLabel: 'LinkedIn',
    availability: 'Available for agencies in LATAM, Spain and the US.',
  },
  caseStudies: {
    challengeHeading: 'The challenge',
    backToWork: 'Back to work',
    torices: {
      slug: 'torices',
      client: 'Torices Digital',
      sector: 'Growth marketing',
      year: '2026',
      kicker: 'Case study',
      title: 'Organic and paid reporting, side by side',
      heroResult: '12 hrs saved / week',
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
            text: '12+ accounts audited so the numbers reached the reports clean.',
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
          { value: '12+', label: 'accounts audited' },
          { value: '12 hrs', label: 'saved per week' },
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
      heroResult: '10 hrs saved / week',
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
          title: 'The report did not tell the story',
          text: 'The numbers were there; the story of the quarter was not.',
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
            title: '5 sources in one place',
            text: 'Data converges in a single view per client.',
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
          { value: '12+', label: 'clients reporting' },
          { value: '10 hrs', label: 'saved per week' },
          { value: '05', label: 'data sources' },
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
      heroResult: '60 hrs saved / month',
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
        'Notebook is a premier SEO agency with B2B and SaaS clients. Its reporting had to justify strategy with data, every month, at scale.',
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
            text: 'Wired into every report, so each deliverable carries the data it talks about.',
          },
          {
            title: '2 custom Data Studio connectors',
            text: 'Feeding the dashboard with SEO query tracking.',
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
          { value: '20+', label: 'clients reporting' },
          { value: '60 hrs', label: 'saved per month' },
          { value: '02', label: 'custom connectors' },
        ],
      },
    },
  },
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
    exploreNav: 'Explore',
    contactNav: 'Contact',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    privacy: 'Privacy',
    terms: 'Terms',
  },
};
