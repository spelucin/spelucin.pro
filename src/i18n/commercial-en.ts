import type { CommercialContent } from './commercialTypes';

export const commercialEn: CommercialContent = {
  servicesHub: {
    seo: {
      title: 'Ecommerce analytics and data services | Alex Spelucin',
      description:
        'Tracking implementation and audits, connected data systems, dashboards and business analysis for growing online stores.',
    },
    eyebrow: 'SERVICES FOR ECOMMERCE',
    hero: {
      headline: 'Four ways to put',
      highlight: 'your store data in order.',
      sub: 'From measuring a purchase to connecting sales, paid media and analytics. Choose the work that addresses your current need; you do not need to buy everything.',
    },
    cardsHeading: 'Services for',
    cardsHighlight: 'where your store is now.',
    cardsIntro: 'Clear starting scope and price. Each service can be hired on its own.',
    cards: [
      {
        key: 'implementation',
        title: 'Tracking implementation',
        text: 'I configure GA4 and Google Tag Manager to measure ecommerce events and purchases across a standard journey.',
        tags: ['From US$300', 'One-time', 'GA4 · GTM'],
      },
      {
        key: 'audit',
        title: 'Tracking audit and fixes',
        text: 'I find measurement issues, prioritize risk and fix a limited set of problems agreed in advance.',
        tags: ['From US$500', 'Audit + agreed fixes'],
      },
      {
        key: 'dashboards',
        title: 'Dashboards and reporting',
        text: 'I connect store, analytics and advertising data in a reporting system with validated metrics.',
        tags: ['From US$1,200', 'Up to 3 sources', 'One-time'],
      },
      {
        key: 'analysis',
        title: 'Business analysis',
        text: 'I investigate a performance question and turn the findings into actions for the business.',
        tags: ['US$400–700', 'Defined project'],
      },
    ],
    faq: {
      heading: 'Before you',
      highlight: 'choose a service.',
      items: [
        {
          q: 'Do I have to start with an audit?',
          a: 'No. You can hire implementation, reporting or analysis directly if you already know what you need. The first call clarifies scope; it does not force an audit.',
        },
        {
          q: 'Can I hire just one service?',
          a: 'Yes. Each service solves a different problem and can be hired on its own or combined when that makes sense.',
        },
        {
          q: 'How is the final price set?',
          a: 'Published prices are starting hypotheses for the scopes described. I confirm sources, access, fixes and deliverables before sending a fixed proposal.',
        },
        {
          q: 'Do you only work with Shopify?',
          a: 'Shopify is the initial focus. I am also validating Tiendanube scope with LATAM stores and can review other platforms based on access and available data.',
        },
      ],
    },
  },

  platformsHub: {
    seo: {
      title: 'Shopify and Tiendanube ecommerce analytics | Alex Spelucin',
      description:
        'Platform-specific entry points to review tracking, connect sales with GA4 and advertising, and choose a data service for your store.',
    },
    eyebrow: 'PLATFORMS',
    hero: {
      headline: 'Your store platform,',
      highlight: 'with data you can use.',
      sub: 'Shopify is the initial focus. Tiendanube is the secondary platform I am validating with LATAM stores. In both cases, we first confirm access and data availability.',
    },
    cardsHeading: 'Choose your store',
    cardsHighlight: 'platform.',
    cardsIntro: 'Each page explains what to review and how to choose between tracking, reporting and analysis.',
    cards: [
      {
        key: 'shopify',
        title: 'Shopify',
        text: 'The initial focus for reviewing measurement and connecting order data with analytics and paid media.',
        tags: ['Initial focus', 'Tracking · sales · reporting'],
      },
      {
        key: 'tiendanube',
        title: 'Tiendanube',
        text: 'Scope under validation with LATAM stores. The connection path is set after reviewing access and available data.',
        tags: ['LATAM validation', 'Scope by store'],
      },
    ],
    faq: {
      heading: 'Platforms and',
      highlight: 'technical scope.',
      items: [
        {
          q: 'Does the connection work the same way for both platforms?',
          a: 'I do not assume that. I review permissions, plan, available fields and source limits before proposing an integration path.',
        },
        {
          q: 'Can you evaluate other platforms?',
          a: 'We can review other stores and sources. I confirm technical feasibility and connector or development costs before including them in scope.',
        },
        {
          q: 'Which service do I need?',
          a: 'It depends on the question: implement new tracking, fix an existing setup, connect sources for reporting or analyze performance.',
        },
      ],
    },
  },

  pages: {
    implementation: {
      key: 'implementation',
      seo: {
        title: 'Ecommerce tracking implementation: GA4 and GTM | Alex Spelucin',
        description:
          'GA4 and Google Tag Manager setup, standard ecommerce events, purchase validation and documentation for one store.',
      },
      eyebrow: 'TRACKING IMPLEMENTATION',
      hero: {
        headline: 'Measure the purchase journey',
        highlight: 'from the first visit.',
        sub: 'I configure GA4 and Google Tag Manager for one store and a standard purchase journey. Shopify is the initial focus; Tiendanube scope is confirmed against each store’s access and setup.',
        ctaPrimary: 'Book a project call',
      },
      problem: {
        heading: 'A purchase should be',
        highlight: 'measured from start to finish.',
        intro: 'A clear setup makes it possible to see which events are sent and validate that a purchase reaches GA4 once.',
        items: [
          { title: 'An orderly setup', text: 'One GA4 property and one GTM container for the store in scope.' },
          { title: 'Ecommerce events', text: 'Standard events for available journey steps and purchase tracking.' },
          { title: 'Validation and notes', text: 'A basic purchase journey check and documentation of the implementation.' },
        ],
      },
      scope: {
        heading: 'Implementation',
        highlight: 'scope.',
        intro: 'The starting price covers a defined setup agreed before work begins.',
        items: [
          { title: 'GA4 and GTM', text: 'One store, one GA4 property and one Google Tag Manager container.' },
          { title: 'Standard events', text: 'Ecommerce events and purchase for steps available in the standard purchase journey.' },
          { title: 'Test and handover', text: 'Basic purchase validation, a visible duplicate check and notes on the delivered setup.' },
        ],
      },
      pricing: {
        heading: 'Price and',
        highlight: 'scope boundaries.',
        intro: 'A new implementation with a standard journey and available access.',
        amount: 'From US$300',
        cadence: 'one-time',
        scopeHeading: 'Starting scope',
        scope: [
          'One store, one GA4 property and one GTM container.',
          'Standard purchase journey and available ecommerce events.',
          'Basic validation and implementation documentation.',
        ],
        note: 'Initial price to validate with customers. I confirm platform, access and journey before finalizing the proposal.',
        boundariesHeading: 'Quoted separately',
        boundaries: [
          'Complex or custom data-layer development.',
          'Custom checkout or steps outside the standard journey.',
          'Server-side tracking.',
          'Extensive integrations, multiple stores, properties or containers.',
        ],
      },
      process: {
        heading: 'From setup',
        highlight: 'to a validated purchase.',
        intro: 'First I confirm that the journey and access fit the standard scope.',
        steps: [
          { title: 'Review access', text: 'We confirm the store, GA4, GTM and the checkout steps available for testing.' },
          { title: 'Configure events', text: 'I implement the agreed structure for the standard journey and purchase.' },
          { title: 'Test and document', text: 'I validate the purchase event and hand over setup documentation.' },
        ],
      },
      deliverables: {
        heading: 'What',
        highlight: 'you receive.',
        intro: 'The implementation is documented so the team knows what is being measured.',
        items: ['Agreed GA4 and GTM setup', 'Standard ecommerce events', 'Basic purchase test', 'Implementation notes'],
      },
      fit: {
        heading: 'When it',
        highlight: 'fits.',
        goodHeading: 'A good starting point',
        good: ['The store needs an initial GA4 and GTM setup.', 'The purchase journey is standard and can be tested.', 'There is one property and one container the team can share.'],
        poorHeading: 'Needs a different scope',
        poor: ['A highly customized checkout or data layer.', 'Server-side tracking or extensive integrations.', 'Multiple stores, containers or properties in one project.'],
      },
      faq: {
        heading: 'Frequently',
        highlight: 'asked questions.',
        items: [
          { q: 'Does this include a full audit?', a: 'No. It includes a basic implementation and purchase check. If you need a deeper review of an existing setup, we can scope an audit separately.' },
          { q: 'Does it include a custom checkout?', a: 'Not in the starting price. We review the journey first and quote custom work separately.' },
          { q: 'Does it include server-side tracking?', a: 'No. The standard scope is a web implementation with GA4 and GTM; server-side work needs a separate project and quote.' },
        ],
      },
      relatedHeading: 'You can also',
      relatedIntro: 'Hire only the service that addresses your current need.',
      related: ['audit', 'dashboards', 'analysis'],
    },

    audit: {
      key: 'audit',
      seo: {
        title: 'Ecommerce tracking audit and corrections | Alex Spelucin',
        description:
          'Review GA4, GTM and ecommerce measurement with prioritized findings, limited agreed fixes and post-fix validation.',
      },
      eyebrow: 'TRACKING AUDIT AND CORRECTIONS',
      hero: {
        headline: 'Find out why',
        highlight: 'your measurement does not line up.',
        sub: 'I review GA4, GTM and ecommerce measurement, prioritize issues and fix a limited set agreed before work begins. An audit is not a new implementation or a full rebuild.',
        ctaPrimary: 'Discuss my tracking',
      },
      problem: {
        heading: 'Find the issue',
        highlight: 'before rebuilding everything.',
        intro: 'A review separates critical errors from expected differences between tools and helps decide what to fix first.',
        items: [
          { title: 'Missing or duplicated events', text: 'I identify incomplete purchase steps, repeated events or parameters that do not arrive as expected.' },
          { title: 'Sources that disagree', text: 'I review metric definitions and origins before comparing GA4, store and advertising platforms.' },
          { title: 'A defined set of fixes', text: 'We agree on the number and complexity of included corrections; additional work is estimated separately.' },
        ],
      },
      scope: {
        heading: 'Audit,',
        highlight: 'findings and fixes.',
        intro: 'This service starts from an existing setup. If there is nothing to audit, an implementation may be a better fit.',
        items: [
          { title: 'Source review', text: 'GA4, GTM, purchase events and ecommerce measurement available within the agreed scope.' },
          { title: 'Prioritized report', text: 'Findings, likely impact and recommendations for resolving the most important issues first.' },
          { title: 'Limited corrections', text: 'A limited set of fixes agreed by number and complexity before the quote.' },
          { title: 'Post-fix validation', text: 'I test the agreed corrections and document the final state.' },
        ],
      },
      pricing: {
        heading: 'Price and',
        highlight: 'agreed scope.',
        intro: 'The starting price covers an audit, report and a limited number of corrections defined in the proposal.',
        amount: 'From US$500',
        cadence: 'one-time',
        scopeHeading: 'Before work starts',
        scope: [
          'Confirm sources, access, purchase journey and review objective.',
          'Define in writing how many fixes are included and their complexity.',
          'Validate the corrections included in that scope.',
        ],
        note: 'Initial price to validate with customers. An audit identifies issues; it does not imply a full measurement rebuild.',
        boundariesHeading: 'Outside the agreed scope',
        boundaries: [
          'Full rebuild or new tracking implementation.',
          'Additional or unexpected complex corrections.',
          'Custom data-layer, checkout or server-side development.',
        ],
        alternative: {
          heading: 'Option: audit only',
          amount: 'US$250–300',
          detail: 'Review and prioritized report. No changes to GA4, GTM or code are included.',
        },
      },
      process: {
        heading: 'Understand first,',
        highlight: 'then correct.',
        intro: 'I do not make changes until the findings and included fixes are clear.',
        steps: [
          { title: 'Define scope', text: 'We confirm sources, access, objective and the limit on corrections.' },
          { title: 'Audit and prioritize', text: 'I review measurement and share prioritized findings and recommendations.' },
          { title: 'Fix and validate', text: 'I apply only agreed changes and test them again.' },
        ],
      },
      deliverables: {
        heading: 'What gets',
        highlight: 'documented.',
        intro: 'A useful record for your team or for scoping a second phase.',
        items: ['Map of reviewed sources and events', 'Prioritized findings', 'Written limit for included corrections', 'Validation of agreed fixes'],
      },
      fit: {
        heading: 'When an',
        highlight: 'audit makes sense.',
        goodHeading: 'A good fit',
        good: ['An existing GA4/GTM setup produces doubtful results.', 'You want to understand risk before making changes.', 'You need to resolve specific errors without rebuilding everything.'],
        poorHeading: 'A different service may fit better',
        poor: ['There is no tracking setup yet: see implementation.', 'You need a full rebuild.', 'Connectors or business analysis need to be included in the same price.'],
      },
      faq: {
        heading: 'Frequently',
        highlight: 'asked questions.',
        items: [
          { q: 'Does an audit fix everything?', a: 'No. The audit delivers findings and priorities. This option adds only the limited corrections written into the proposal.' },
          { q: 'Can I hire the report only?', a: 'Yes. The US$250–300 option is a starting hypothesis for an audit and report without implementation.' },
          { q: 'What if more issues appear?', a: 'I document and prioritize them. Additional fixes are quoted separately before they are done.' },
        ],
      },
      relatedHeading: 'If you need',
      relatedIntro: 'An audit is one option. You can also hire implementation, reporting or analysis directly.',
      related: ['implementation', 'dashboards', 'analysis'],
    },

    dashboards: {
      key: 'dashboards',
      seo: {
        title: 'Ecommerce dashboards and data systems | Alex Spelucin',
        description:
          'Ecommerce reporting system connecting store, analytics and advertising data, validating metrics and documenting the setup.',
      },
      eyebrow: 'DATA SYSTEMS AND REPORTING',
      hero: {
        headline: 'Connect sales, paid media',
        highlight: 'and analytics in one view.',
        sub: 'I build a data system with a primary performance view: connected sources, agreed metrics and documentation your team can use.',
        ctaPrimary: 'Define my project scope',
      },
      problem: {
        heading: 'A useful dashboard',
        highlight: 'starts before the dashboard.',
        intro: 'First we agree which source answers each question and how the metrics are calculated.',
        items: [
          { title: 'Unconnected sources', text: 'Orders, advertising spend and analytics live in separate tools.' },
          { title: 'Different definitions', text: 'Revenue, orders, spend and conversions need documented rules before they can be compared.' },
          { title: 'Repeated manual work', text: 'A shared view reduces manual assembly only when its connections and checks can be maintained.' },
        ],
      },
      scope: {
        heading: 'A reporting system,',
        highlight: 'not just a screen.',
        intro: 'The technical design follows the sources and use case. BigQuery and SQL are added when useful, not required by default.',
        items: [
          { title: 'Up to three agreed sources', text: 'Standard scope: store, one analytics source and one advertising platform, subject to availability.' },
          { title: 'Model and transformations', text: 'I use a warehouse and transformations when scale and sources justify them, choosing the simplest reliable architecture.' },
          { title: 'Primary dashboard', text: 'Revenue, orders, spend, ROAS, CPA, average order value and channel/product performance when sources support clear definitions.' },
          { title: 'Reconciliation and handover', text: 'I validate key metrics, document assumptions and hand the system over to the team.' },
        ],
      },
      pricing: {
        heading: 'Starting price',
        highlight: 'with defined sources.',
        intro: 'An initial system with one primary view and up to three agreed sources: store, analytics and one ad platform.',
        amount: 'From US$1,200',
        cadence: 'one-time',
        scopeHeading: 'Included in standard scope',
        scope: [
          'Up to three sources; names and availability are confirmed before the quote.',
          'Store sales/orders connected with analytics and advertising where access allows.',
          'A model and transformations when needed for a reliable solution.',
          'Primary dashboard, key metric checks, documentation and handover.',
        ],
        note: 'Initial price to validate with customers. Revenue, orders, spend, ROAS, CPA, average order value and channel/product cuts depend on available data and agreed definitions.',
        boundariesHeading: 'Quoted separately',
        boundaries: [
          'Connector subscriptions, cloud usage and third-party costs.',
          'Additional sources, custom integrations or complex infrastructure.',
          'Ongoing maintenance and post-delivery changes.',
          'Advanced cohorts, CAC/LTV and bespoke business analysis.',
        ],
      },
      process: {
        heading: 'From questions',
        highlight: 'to a usable system.',
        intro: 'We agree on sources and rules before building the view.',
        steps: [
          { title: 'Agree sources and metrics', text: 'We confirm up to three sources, access and definitions for each metric.' },
          { title: 'Connect and model', text: 'I choose the simplest architecture that keeps the data and rules clear.' },
          { title: 'Validate and hand over', text: 'I compare metrics with their sources, document limits and hand the work over.' },
        ],
      },
      deliverables: {
        heading: 'A system the team',
        highlight: 'can maintain.',
        intro: 'The dashboard is one part of the work; the logic behind it is documented too.',
        items: ['Up to three agreed source connections', 'Model/transformations when justified', 'Primary dashboard', 'Key metric reconciliation', 'Technical documentation and handover'],
      },
      fit: {
        heading: 'When it makes',
        highlight: 'sense to build.',
        goodHeading: 'A good fit',
        good: ['You invest in advertising and need to compare sales with spend.', 'You can access the store, analytics and at least one ad source.', 'You want repeatable reporting the team can understand.'],
        poorHeading: 'Outside standard scope',
        poor: ['Advanced CAC/LTV or cohort modeling.', 'A full profitability model without costs and margins.', 'Many sources, custom development or unlimited support.'],
      },
      faq: {
        heading: 'Frequently',
        highlight: 'asked questions.',
        items: [
          { q: 'Do you always use BigQuery?', a: 'No. I add it with SQL when source count, history or transformations justify it. If a simpler option is reliable, I use that.' },
          { q: 'Does ROAS mean profitability?', a: 'No. Revenue-based ROAS compares attributed revenue with ad spend; it does not subtract product, margin or operating costs.' },
          { q: 'What about paid connectors?', a: 'Connector subscriptions and cloud usage are not included in the implementation price; we identify and approve them first.' },
          { q: 'Does it include CAC, LTV or cohorts?', a: 'Not in standard scope. We can define a separate analysis if the history and sources support defensible calculations.' },
        ],
      },
      relatedHeading: 'You can hire',
      relatedIntro: 'This system is separate from an audit or later analysis.',
      related: ['implementation', 'audit', 'analysis'],
    },

    analysis: {
      key: 'analysis',
      seo: {
        title: 'Ecommerce business and performance analysis | Alex Spelucin',
        description:
          'Defined analysis of acquisition, conversion, customers and products to turn available data into business decisions.',
      },
      eyebrow: 'BUSINESS AND PERFORMANCE ANALYSIS',
      hero: {
        headline: 'More than seeing metrics:',
        highlight: 'understand what to do.',
        sub: 'I investigate a specific question about acquisition, conversion, customers or products. Price and method depend on history, data quality and the decision you need to make.',
        ctaPrimary: 'Discuss an analysis project',
      },
      problem: {
        heading: 'A metric describes.',
        highlight: 'Analysis explains and recommends.',
        intro: 'I work on one priority question to understand what changed, what evidence exists and what to test next.',
        items: [
          { title: 'Acquisition and ROAS', text: 'Compare channels and spend with attributed revenue; ROAS is not profitability.' },
          { title: 'Products and conversion', text: 'Look for patterns by product, category and funnel stage where data coverage allows.' },
          { title: 'Customers and repeat orders', text: 'Cohorts, repeat purchase, retention, frequency, CAC or LTV only when history and definitions support them.' },
        ],
      },
      scope: {
        heading: 'Performance questions',
        highlight: 'we can analyze.',
        intro: 'Analysis adapts to available data; I do not present revenue as profit or estimates as certainty.',
        items: [
          { title: 'Acquisition', text: 'ROAS and spend by channel with period, attribution and sources defined.' },
          { title: 'Products and funnel', text: 'Product/category performance and stage conversion where event coverage is sufficient.' },
          { title: 'Customers and retention', text: 'Repeat purchase, frequency and cohorts; CAC/LTV need a compatible order and cost history.' },
          { title: 'Profitability', text: 'Only when relevant costs, margins and other inputs are available and agreed.' },
        ],
      },
      pricing: {
        heading: 'Price depends on',
        highlight: 'the question and data.',
        intro: 'One primary question, a defined scope and recommendations based on what the data can support.',
        amount: 'US$400–700',
        cadence: 'per defined project',
        scopeHeading: 'Analysis project',
        scope: [
          'One priority question and the sources agreed to answer it.',
          'Analysis, evidence, limitations and actionable recommendations.',
          'Final scope depends on data access, complexity and quality.',
        ],
        note: 'Initial range to validate with customers. I do not promise accurate LTV without enough customer/order history. Revenue-based ROAS is not profit; profitability analysis needs costs and margins.',
        boundariesHeading: 'Needs its own scope',
        boundaries: [
          'More than one primary question or additional sources.',
          'Custom CAC/LTV or cohort modeling.',
          'Profitability analysis without verifiable costs and margins.',
        ],
        alternative: {
          heading: 'Monthly option under validation',
          amount: 'US$400–600/month',
          detail: 'One performance review, one primary analysis focus and actionable recommendations each month. No unlimited analyst access or uncapped ad hoc requests.',
        },
      },
      process: {
        heading: 'One question,',
        highlight: 'one bounded analysis.',
        intro: 'Before estimating an answer, we check whether the information can support it.',
        steps: [
          { title: 'Define the decision', text: 'We agree on the primary question, period and how the result will be used.' },
          { title: 'Review the data', text: 'I confirm availability, definitions, bias and limits of the analysis.' },
          { title: 'Share findings', text: 'I deliver evidence, explanation and possible actions with assumptions.' },
        ],
      },
      deliverables: {
        heading: 'A reading',
        highlight: 'that leads to action.',
        intro: 'Depending on the project, delivery can be a short report and a review conversation.',
        items: ['Defined question and scope', 'Evidence-backed findings and limits', 'Prioritized recommendations', 'Analysis handover session'],
      },
      fit: {
        heading: 'When analysis',
        highlight: 'makes sense.',
        goodHeading: 'A good fit',
        good: ['You have sales history to observe patterns.', 'You need to explain a change or choose where to focus resources.', 'You can share costs/margins if the question is about profitability.'],
        poorHeading: 'First, you may need',
        poor: ['More history to estimate repeat purchase or LTV.', 'Clear revenue, attribution, cost or margin definitions.', 'An audit or implementation if the data is not usable yet.'],
      },
      faq: {
        heading: 'Frequently',
        highlight: 'asked questions.',
        items: [
          { q: 'Does ROAS analysis show profitability?', a: 'No. ROAS relates attributed revenue to advertising spend. Profitability needs costs, margins and other agreed expenses.' },
          { q: 'Can I ask for LTV?', a: 'Yes, if customer and order history supports a defensible estimate. If not, I explain the limit and suggest a question the data can answer.' },
          { q: 'What is included in the monthly option?', a: 'One recurring performance review, one primary analysis focus and actionable recommendations per period. It is not unlimited analyst access.' },
        ],
      },
      relatedHeading: 'Analysis can be',
      relatedIntro: 'Hired on its own or after improving tracking or reporting.',
      related: ['implementation', 'audit', 'dashboards'],
    },

    shopify: {
      key: 'shopify',
      seo: {
        title: 'Analytics and tracking for Shopify stores | Alex Spelucin',
        description:
          'Review Shopify store measurement and connect orders with GA4 and advertising where access allows.',
      },
      eyebrow: 'SHOPIFY · INITIAL FOCUS',
      hero: {
        headline: 'Shopify data',
        highlight: 'ready for a useful read.',
        sub: 'Shopify is the initial focus. I review which store data is available and how to relate it to GA4 and advertising, without assuming unverified connectors or outcomes.',
        ctaPrimary: 'Review my Shopify store',
      },
      problem: {
        heading: 'The store records sales.',
        highlight: 'The challenge is connecting them.',
        intro: 'Orders, analytics and paid media use different sources and definitions. The actual connection depends on permission, plan and available data.',
        items: [
          { title: 'Purchase tracking', text: 'We review which purchase steps and events are measured in GA4 and GTM.' },
          { title: 'Reading sales data', text: 'We confirm which order, product and period fields are available for the project.' },
          { title: 'Connected performance', text: 'We define how to compare revenue, orders, spend and acquisition without treating attribution as accounting.' },
        ],
      },
      scope: {
        heading: 'First we validate',
        highlight: 'what can be connected.',
        intro: 'The proposal defines a verified connection method for your store; it does not assume a native integration or access to every field.',
        items: [
          { title: 'Store data', text: 'I review access and availability of orders, products and fields relevant to the question.' },
          { title: 'GA4 and tracking', text: 'I review events and definitions already configured in the available property.' },
          { title: 'Advertising', text: 'I select ad sources based on access and the agreed source count.' },
          { title: 'Integration method', text: 'I confirm the technical path and any subscription or third-party costs before including it.' },
        ],
      },
      process: {
        heading: 'A clear scope',
        highlight: 'for your Shopify store.',
        intro: 'I start by validating the business question and actual data availability.',
        steps: [
          { title: 'Review access', text: 'We confirm the store, analytics, advertising, permissions and available fields.' },
          { title: 'Choose the service', text: 'We define whether you need implementation, corrections, reporting or analysis.' },
          { title: 'Propose the connection', text: 'I quote sources, method, external costs and deliverables before work starts.' },
        ],
      },
      deliverables: {
        heading: 'The proposal',
        highlight: 'defines what gets connected.',
        intro: 'The result depends on the selected service and prior source/access checks.',
        items: ['Agreed sources and metrics', 'Connection method checked before the project', 'External costs identified separately', 'Documented data limitations'],
      },
      fit: {
        heading: 'For stores',
        highlight: 'investing in acquisition.',
        goodHeading: 'A good fit',
        good: ['You sell through Shopify and run paid campaigns.', 'You need to review tracking or compare sales with GA4 and ads.', 'You can provide access or coordinate with its administrator.'],
        poorHeading: 'Needs review first',
        poor: ['A specific integration is expected before permissions are checked.', 'Checkout, data layer or API work needs custom development.', 'The question depends on unavailable fields or unknown costs.'],
      },
      faq: {
        heading: 'Questions',
        highlight: 'about Shopify.',
        items: [
          { q: 'Is Shopify the only platform?', a: 'No. It is the initial focus. I am also validating Tiendanube and can review other platforms case by case.' },
          { q: 'Are GA4 or Ads connections ready-made?', a: 'I do not assume that. I review setup, permissions and sources; the proposal states which connection and validation are included.' },
          { q: 'Will the dashboard make Shopify and GA4 revenue match?', a: 'Sources can use different definitions. We agree on periods, time zones and comparison rules, then document differences.' },
        ],
      },
      relatedHeading: 'Choose a service',
      relatedIntro: 'These four options are independent services for your Shopify store.',
      related: ['implementation', 'audit', 'dashboards', 'analysis'],
    },

    tiendanube: {
      key: 'tiendanube',
      seo: {
        title: 'Analytics and measurement for Tiendanube | Alex Spelucin',
        description:
          'Evaluate tracking, sales sources and reporting options for a Tiendanube store. Technical scope is confirmed for each store.',
      },
      eyebrow: 'TIENDANUBE · LATAM VALIDATION',
      hero: {
        headline: 'Tiendanube data',
        highlight: 'you can compare.',
        sub: 'I am validating scope with LATAM stores. We review access, order data, GA4 setup and ad sources before proposing an implementation.',
        ctaPrimary: 'Discuss my Tiendanube store',
      },
      problem: {
        heading: 'Each store needs',
        highlight: 'its data path checked.',
        intro: 'Plan, permissions and source availability can change how sales, analytics and advertising data are connected.',
        items: [
          { title: 'Purchase events', text: 'We confirm which events reach GA4 and which part of the journey can be tested.' },
          { title: 'Order data', text: 'We review access and available fields before defining reports or analysis.' },
          { title: 'Advertising spend', text: 'We agree which ad platforms are in scope and how to compare them with sales.' },
        ],
      },
      scope: {
        heading: 'Scope is set',
        highlight: 'after access is checked.',
        intro: 'I do not promise a specific integration before reviewing the store, plan and available access paths.',
        items: [
          { title: 'Store access', text: 'We validate which order and product data is available for the project.' },
          { title: 'GA4/GTM measurement', text: 'We review existing setup or define a standard implementation.' },
          { title: 'Paid media sources', text: 'We choose the ad accounts in scope and review permissions and history.' },
          { title: 'Verified connection', text: 'We define a feasible method and any connector or development costs before quoting.' },
        ],
      },
      process: {
        heading: 'Validate first,',
        highlight: 'then propose.',
        intro: 'The first step is to learn which data is actually available to your store.',
        steps: [
          { title: 'Review platform and access', text: 'We check plan, permissions, fields and sources in the purchase journey.' },
          { title: 'Define the question', text: 'We agree whether you need implementation, fixes, reporting or analysis.' },
          { title: 'Set scope and price', text: 'I document connection method, limits, external costs and deliverables.' },
        ],
      },
      deliverables: {
        heading: 'The review',
        highlight: 'reduces assumptions.',
        intro: 'Before a project starts, the viable sources and metrics are written down.',
        items: ['Data availability reviewed', 'Sources and permissions documented', 'Connection method proposed with limits', 'Service and deliverables agreed'],
      },
      fit: {
        heading: 'For Tiendanube',
        highlight: 'stores in LATAM.',
        goodHeading: 'A good fit',
        good: ['You already sell and invest in advertising.', 'You can provide access or coordinate with the store administrator.', 'You are open to validating scope before committing to an integration.'],
        poorHeading: 'Needs a separate quote',
        poor: ['A specific connector is required before compatibility is reviewed.', 'The solution needs custom or server-side development.', 'Required sources are unavailable or lack enough history.'],
      },
      faq: {
        heading: 'Questions',
        highlight: 'about Tiendanube.',
        items: [
          { q: 'Is the integration validated for every store?', a: 'No. I am validating scope with LATAM customers. I confirm plan, permissions, fields and method before quoting.' },
          { q: 'Can I hire only an audit?', a: 'Yes. You can also hire implementation, reporting or analysis if the question and data are clear.' },
          { q: 'Could connectors add cost?', a: 'If a solution needs a subscription, cloud usage or third-party development, I identify and approve it separately before work starts.' },
        ],
      },
      relatedHeading: 'Choose a service',
      relatedIntro: 'You can hire one part; first we validate which sources your store can support.',
      related: ['implementation', 'audit', 'dashboards', 'analysis'],
    },
  },
};
