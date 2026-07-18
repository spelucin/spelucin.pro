import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import * as yaml from "js-yaml"
import type { CaseStudy } from "../data"

function readYaml<T>(relativePath: string): T | null {
  const fullPath = join(process.cwd(), relativePath)
  if (!existsSync(fullPath)) return null
  const raw = readFileSync(fullPath, "utf-8")
  return yaml.load(raw) as T
}

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
  const entry = readYaml<Record<string, unknown>>("src/content/site-seo/index.yaml")
  return {
    siteName: (entry?.siteName as string) || DEFAULT_SITE_SEO.siteName,
    defaultTitle: (entry?.defaultTitle as string) || DEFAULT_SITE_SEO.defaultTitle,
    defaultDescription:
      (entry?.defaultDescription as string) || DEFAULT_SITE_SEO.defaultDescription,
    defaultOgImage: (entry?.defaultOgImage as string) || DEFAULT_SITE_SEO.defaultOgImage,
    locale: (entry?.locale as string) || DEFAULT_SITE_SEO.locale,
    founderName: (entry?.founderName as string) || DEFAULT_SITE_SEO.founderName,
    founderJobTitle: (entry?.founderJobTitle as string) || DEFAULT_SITE_SEO.founderJobTitle,
    email: (entry?.email as string) || DEFAULT_SITE_SEO.email,
    sameAs: (entry?.sameAs as string[] | undefined)?.length
      ? (entry.sameAs as string[])
      : DEFAULT_SITE_SEO.sameAs,
    areaServed: (entry?.areaServed as string[] | undefined)?.length
      ? (entry.areaServed as string[])
      : DEFAULT_SITE_SEO.areaServed,
  }
}

export type PageMeta = {
  title: string
  description: string
  image: string
}

export async function getPageMeta(slug: string): Promise<PageMeta> {
  const entry = readYaml<Record<string, string>>(`src/content/pages/${slug}.yaml`)
  return {
    title: entry?.title || "",
    description: entry?.description || "",
    image: entry?.image || "",
  }
}

export type CaseStudySeo = {
  title?: string
  description?: string
  image?: string
}

export type CaseStudyWithSeo = CaseStudy & { seo: CaseStudySeo }

function mapCaseStudyEntry(slug: string, entry: Record<string, unknown>): CaseStudyWithSeo {
  return {
    slug,
    headline: entry.headline as string,
    store: entry.store as string,
    industry: entry.industry as string,
    country: entry.country as string,
    periodStart: entry.periodStart as string,
    periodEnd: entry.periodEnd as string,
    serviceSlug: entry.serviceSlug as string,
    serviceName: entry.serviceName as string,
    summary: entry.summary as string,
    metrics: entry.metrics as CaseStudy["metrics"],
    context: entry.context as CaseStudy["context"],
    problems: entry.problems as CaseStudy["problems"],
    phases: entry.phases as CaseStudy["phases"],
    otherWins: entry.otherWins as string[],
    testimonial: (entry.testimonial as { discriminant?: boolean; value?: CaseStudy["testimonial"] })
      ?.discriminant
      ? (entry.testimonial.value as CaseStudy["testimonial"])
      : null,
    learnings: entry.learnings as string[],
    seo: {
      title: (entry.seoTitle as string) || undefined,
      description: (entry.seoDescription as string) || undefined,
      image: (entry.ogImage as string) || undefined,
    },
  }
}

function getCaseStudySlugs(): string[] {
  const dir = join(process.cwd(), "src/content/case-studies")
  if (!existsSync(dir)) return []
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

export async function getCaseStudies(): Promise<CaseStudyWithSeo[]> {
  const slugs = getCaseStudySlugs()
  return slugs
    .map((slug) => {
      const entry = readYaml<Record<string, unknown>>(
        `src/content/case-studies/${slug}/index.yaml`,
      )
      if (!entry) return null
      return mapCaseStudyEntry(slug, entry)
    })
    .filter((cs): cs is CaseStudyWithSeo => cs !== null)
}

export async function getCaseStudy(slug: string): Promise<CaseStudyWithSeo | null> {
  const entry = readYaml<Record<string, unknown>>(`src/content/case-studies/${slug}/index.yaml`)
  if (!entry) return null
  return mapCaseStudyEntry(slug, entry)
}
