# Positioning and system guidance

## Positioning

**E-commerce analytics and data systems for growing Spanish-speaking LATAM stores.** The target customer already sells online and invests in paid advertising. The work makes measurement trustworthy, connects store, analytics, and advertising data, and turns the available evidence into better business decisions.

Do not describe the business as only a dashboard builder or as a generic digital marketing agency. Keep agency reporting experience and relevant agency case studies available as supporting experience, below the ecommerce offer.

Shopify is the initial platform focus. Tiendanube is a secondary platform to validate with LATAM stores. Neither is exclusive. For either platform, confirm plan, access, fields, source limits, and the feasible connection method before claiming an integration or committing to scope. Other platforms can be evaluated case by case.

## Four independent services

1. **Tracking implementation** — starting hypothesis US$300, one time. Standard scope: one store, one GA4 property, one Google Tag Manager container, standard ecommerce events and purchase tracking, basic purchase-journey validation, and implementation documentation. Server-side tracking is a separate option starting at US$500, one time, for one store, one GA4 property, a standard purchase flow, basic validation, and documentation, subject to confirming platform compatibility, data flow, infrastructure, and access. Hosting, cloud usage, connectors, and third-party costs are separate. Exclude complex data-layer work, custom checkout, extensive custom integrations, and extra stores/properties/containers unless separately scoped and quoted.
2. **Tracking audit and corrections** — starting hypothesis US$500, one time. Review existing GA4, GTM, and ecommerce measurement; deliver prioritized findings; include only a limited set of fixes whose number and complexity are agreed in writing; validate those fixes. An audit identifies issues and is not a new implementation or full rebuild. An audit-only report may be tested around US$250–300. Quote additional or complex fixes separately.
3. **Dashboards, data systems, and reporting** — starting hypothesis US$1,200, one time. Standard scope covers up to three agreed source systems (store, analytics, and one advertising platform), a primary performance view, metric reconciliation, documentation, and handover. Add a warehouse and transformations, potentially BigQuery and SQL, only when justified; prefer the simplest reliable architecture. Connector subscriptions, cloud usage, extra sources, custom integrations, and ongoing maintenance are separate. Advanced cohorts, CAC/LTV modeling, and bespoke analysis are outside the standard price.
4. **Business and performance analysis** — project hypothesis US$400–700 for a defined question. A separate monthly option around US$400–600 may be tested with one recurring performance review, one primary analysis focus, and actionable recommendations per period; it is not unlimited analyst access. Scope depends on data availability, business complexity, and the question. Do not promise accurate LTV without sufficient customer/order history. Revenue-based ROAS is not profit. Profitability analysis requires relevant costs and margins.

Prices are initial commercial hypotheses to validate with real customers, not guaranteed market rates. Show “desde” only when the starting scope is visible on the page. State exclusions and custom-project boundaries. A customer can purchase one service without buying the other three or going through an audit first.

## Brand and visual constraints

- Preserve the current font families and sources: DM Sans Variable for body/display text and JetBrains Mono Variable for technical labels. Keep the existing weights and type scale; do not swap fonts or add a new typography system.
- Preserve the existing dark-blue palette and theme tokens in `src/styles/global.css`: background `#0a0d14`, foreground `#f0f6ff`, primary `#60a5fa`, accent `#1560bd`, card `#0f1219`, plus their current opacity tokens. Do not change colors or add a new palette.
- Extend the established restrained technical/editorial design. Do not add new gradients, generic SaaS styling, unrelated shadows, decorative effects, or a new design system. Existing effects may remain; do not expand them without a clear need.
- Use `src/components/ServiceDiagram.astro` as the reference for SVG stroke, spacing, nodes, labels, and responsive behavior. Diagrams must explain a real data flow, remain lightweight, have accessible titles/captions, respect reduced motion, and use existing color tokens. Mark hypothetical connection paths as illustrative and conditional on available access/data.
- Use existing verified brand marks from the installed Simple Icons set for Shopify, GA4, Google Tag Manager, Google Ads, and Meta when relevant. Tiendanube has no verified logo asset in this repository; use the accurate text label “Tiendanube” instead of drawing a substitute.
- Use only real client marks already in the repository, such as Owlbox’s existing asset. Do not create client-logo placeholders for production; any future neutral placeholder strip must stay hidden until real assets are supplied.

## Claims and proof

- Reuse case study facts only when the same fact is present in the case-study content. Keep source and metric definitions clear.
- Do not fabricate client proof, testimonials, outcomes, counts, or integrations.
- A connection diagram is an explanatory example, not proof that an integration is already implemented. Confirm availability and cost before promising an API, connector, automated sync, or specific field.
- Do not describe revenue, ROAS, or ad efficiency as profit. State cost and margin requirements for profitability work.
- Do not imply that dashboards alone provide analysis, or that all customers need the same warehouse or tooling.
