import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Alex Spelucin"),
    category: z.enum([
      "SEO Técnico",
      "Shopify",
      "AI Search",
      "Estrategia",
      "Procesos",
      "Automatización",
      "Analítica",
    ]),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
})

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Checklists",
      "Frameworks",
      "Templates",
      "Guías",
      "Prompt Libraries",
      "Dashboards",
    ]),
    thumbnail: z.string(),
    downloadLink: z.string(),
    externalLink: z.string().optional(),
    pubDate: z.coerce.date(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
})

export const collections = { blog, resources }
