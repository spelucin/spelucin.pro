import type { APIRoute } from "astro"
import { services } from "../data"
import { getCaseStudies } from "../lib/content"

const BASE = "https://spelucin.pro"

function url(loc: string, lastmod?: string) {
  const parts = [`<url><loc>${BASE}${loc}</loc>`]
  if (lastmod) parts.push(`<lastmod>${lastmod}</lastmod>`)
  parts.push("</url>")
  return parts.join("")
}

export const GET: APIRoute = async () => {
  const now = new Date().toISOString().split("T")[0]

  const staticPages = ["/", "/sobre-mi/", "/contacto/", "/casos-de-estudio/", "/servicios/"]
  const servicePages = services.map((s) => `/servicios/${s.slug}/`)

  let caseStudyPages: string[] = []
  try {
    const studies = await getCaseStudies()
    caseStudyPages = studies.map((s) => `/casos-de-estudio/${s.slug}/`)
  } catch {
    // Keystatic content may not exist at build time
  }

  const urls = [...staticPages, ...servicePages, ...caseStudyPages]
    .map((loc) => url(loc, now))
    .join("\n")

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
