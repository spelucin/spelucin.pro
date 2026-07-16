import { createReader } from "@keystatic/core/reader"
import keystaticConfig from "../../keystatic.config"
import type { CaseStudy } from "../data"

const reader = createReader(process.cwd(), keystaticConfig)

const DEFAULT_SITE_SEO = {
  siteName: "Alex Spelucin",
  defaultTitle: "Alex Spelucin - SEO técnico para Shopify",
  defaultDescription:
    "Consultor independiente de SEO técnico para Shopify. Auditorías, estrategia de catálogo y capacitaciones.",
  defaultOgImage: "/og/default.jpg",
  locale: "es_MX",
  founderName: "Alex Spelucin",
  founderJobTitle: "Consultor SEO técnico para Shopify",
  email: "alex@spelucin.pro",
  sameAs: ["https://linkedin.com/in/spelucin"],
  areaServed: ["MX", "AR", "US", "ES"],
}

export async function getSiteSeo() {
  const entry = await reader.singletons.siteSeo.read()
  return {
    siteName: entry?.siteName || DEFAULT_SITE_SEO.siteName,
    defaultTitle: entry?.defaultTitle || DEFAULT_SITE_SEO.defaultTitle,
    defaultDescription:
      entry?.defaultDescription || DEFAULT_SITE_SEO.defaultDescription,
    defaultOgImage: entry?.defaultOgImage || DEFAULT_SITE_SEO.defaultOgImage,
    locale: entry?.locale || DEFAULT_SITE_SEO.locale,
    founderName: entry?.founderName || DEFAULT_SITE_SEO.founderName,
    founderJobTitle: entry?.founderJobTitle || DEFAULT_SITE_SEO.founderJobTitle,
    email: entry?.email || DEFAULT_SITE_SEO.email,
    sameAs: entry?.sameAs?.length ? entry.sameAs : DEFAULT_SITE_SEO.sameAs,
    areaServed: entry?.areaServed?.length
      ? entry.areaServed
      : DEFAULT_SITE_SEO.areaServed,
  }
}

export type CaseStudySeo = {
  title?: string
  description?: string
  image?: string
}

export type CaseStudyWithSeo = CaseStudy & { seo: CaseStudySeo }

function mapCaseStudyEntry(
  slug: string,
  entry: Awaited<ReturnType<typeof reader.collections.caseStudies.read>>,
): CaseStudyWithSeo {
  const e = entry as NonNullable<typeof entry>
  return {
    slug,
    headline: e.headline,
    store: e.store,
    industry: e.industry,
    country: e.country,
    periodStart: e.periodStart,
    periodEnd: e.periodEnd,
    serviceSlug: e.serviceSlug,
    serviceName: e.serviceName,
    summary: e.summary,
    metrics: e.metrics,
    context: e.context,
    problems: e.problems,
    phases: e.phases,
    otherWins: e.otherWins,
    testimonial: e.testimonial.discriminant ? e.testimonial.value : null,
    learnings: e.learnings,
    seo: {
      title: e.seoTitle || undefined,
      description: e.seoDescription || undefined,
      image: e.ogImage || undefined,
    },
  }
}

export async function getCaseStudies(): Promise<CaseStudyWithSeo[]> {
  const all = await reader.collections.caseStudies.all()
  return all.map(({ slug, entry }) => mapCaseStudyEntry(slug, entry))
}

export async function getCaseStudy(
  slug: string,
): Promise<CaseStudyWithSeo | null> {
  const entry = await reader.collections.caseStudies.read(slug)
  if (!entry) return null
  return mapCaseStudyEntry(slug, entry)
}
