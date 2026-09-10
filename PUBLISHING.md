# Publishing notes

## Release: multi-page rebuild + event tracking (GTM + Cal.com)

What shipped:
- Full bilingual rebuild (Astro): home `/`, `/en`, plus work, services, agencies, about, contact, case studies (`/case-studies/<slug>` ×3), both languages, breadcrumb JSON-LD + per-page hreflang/canonical, `astro:assets` screenshots.
- Google Tag Manager container `GTM-K7VLRW2S` loaded via `astro-gtm-lite` (config in `astro.config.mjs`). JS snippet comes from the integration; `Layout.astro` adds only the manual `<noscript>` fallback.
- Events tracked (all via GTM → GA4, property `G-11D3VHBVKW`, GA4 UI property `547715850`):
  - `cta_click` — `cta_text`, `cta_location` (all `data-cta` elements)
  - `calendar_open` — `calendar_location` (header/book call)
  - `generate_lead` — single `lead_source`: `email` (mailto via `data-lead`) | `calendar` (Cal `bookingSuccessfulV2`)
  - `case_study_click` — `case_study_slug`, `case_study_name`, `case_study_industry` (work page + home featured cards)
  - `language_switch` — `lang_to` (`es`|`en`), pushed on nav ES/EN links
- Cal.com embed modal: namespace `spelucin`, official loader snippet, `data-cal-link`/`data-cal-namespace` on trigger elements, `cal.com/spelucin` kept as no-JS fallback href.

## GTM: `language_switch` still on version 8 — requires manual tag build

The GTM API token is read-only, so the `language_switch` resources were NOT created. Add manually in the container (Default Workspace):

1. **Variable** `dlv - lang_to`
   - Type: Data Layer Variable, Data Layer Version 2, name `lang_to`.
2. **Trigger** `Event - language_switch`
   - Type: Custom Event; condition `{{_event}}` equals `language_switch`.
3. **Tag** `GA4 - language_switch`
   - Type: Google Analytics: GA4 Event; event name `language_switch`;
   - Event parameter `lang_to` = `{{dlv - lang_to}}`;
   - Configuration tag override: `{{Const - GA4 Measurement ID}}`;
   - Fires on `Event - language_switch`.
4. Submit + publish → container live version becomes `9`.

## Before deploy

1. Build: `npm run build` (must pass; `npx astro check` must stay at 0 errors).
2. GTM container live version must be `>= 9` and include the tags: `GA4 - cta_click`, `GA4 - calendar_open`, `GA4 - generate_lead`, `GA4 - case_study_click`, `GA4 - language_switch`.

## Deploy

1. `npm run build`
2. Publish the `dist/` output to the host (GitHub Actions on master handles GP; local commits only, never `git push`).
3. Hard refresh / clear cache after deploy.

## Post-deploy verification

1. Open GTM Preview and load the site.
2. Click the hero CTA → `cta_click` fires with `cta_text` + `cta_location`.
3. Click a work/featured case card → `case_study_click` fires with slug/name/industry.
4. Switch language in the nav → `language_switch` fires with `lang_to`.
5. Open the Cal.com popup → `calendar_open` fires with `calendar_location`; complete a test booking → `generate_lead` with `lead_source=calendar`.
6. Click the contact email link → `generate_lead` with `lead_source=email`.
7. Cross-check events arrive in GA4 DebugView.

## Notes

- `bookingSuccessfulV2` from the Cal embed exposes no attendee email → booking leads carry no PII. Keep it that way.
- Data-layer variables use `dataLayerVersion: 2`.
- Container naming convention: tags `GA4 - <event>`, triggers `Event - <event>`, variables `dlv - <key>`.