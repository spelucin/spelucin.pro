# Project instructions

Read [brand/positioning.md](brand/positioning.md) before changing product copy, service scope, pricing, platform claims, diagrams, or visual identity.

## Project conventions

- This is an Astro static site with Spanish and English routes. Keep both languages and update `src/utils/lang.ts`, `src/data/commercialRoutes.ts`, route files, breadcrumbs, and redirects together when slugs change.
- Extend the shared components and content in `src/components/CommercialPage.astro`, `src/components/HubPage.astro`, `src/i18n/commercial-es.ts`, and `src/i18n/commercial-en.ts` before creating one-off service templates.
- Preserve useful pages, case studies, tracking, calendar, language-switching, canonical, and sitemap behavior. Do not remove existing functionality as a side effect of positioning work.
- Do not add dependencies for ordinary content or layout changes.
- Prices in the site are commercial hypotheses. Keep the corresponding scope and exclusions beside each price and avoid language that turns a hypothesis into a guarantee.
- Never invent clients, logos, testimonials, integrations, platform capabilities, or business results. Clearly label illustrative data and diagrams.
- Run `npm run build` and `npx astro check` after route, content-model, or component changes. There is no configured test or lint script; report that rather than implying those checks ran.
