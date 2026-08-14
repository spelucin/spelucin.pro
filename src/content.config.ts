import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trabajoSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  category: z.enum(['Analytics', 'Reporting', 'Data Infrastructure', 'SEO', 'Marketing Data']),
  industry: z.string().optional(),
  year: z.string().optional(),
  client: z.string().optional(),
  scope: z.string().optional(),
  context: z.string().optional(),
  problem: z.string(),
  solution: z.string(),
  tools: z.array(z.string()).default([]),
  results: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .default([]),
  lessons: z.array(z.string()).default([]),
  gallery: z
    .array(
      z.object({
        label: z.string(),
        type: z.enum(['dashboard', 'events', 'docs', 'image']),
        src: z.string().optional(),
      })
    )
    .default([]),
  published: z.boolean().default(true),
  featured: z.boolean().default(false),
});

const productoSchema = z.object({
  title: z.string(),
  tagline: z.string(),
  image: z.string().optional(),
  category: z.string(),
  status: z.enum(['available', 'coming-soon']),
  price: z.string().nullable().default(null),
  period: z.string().optional(),
  problem: z.string(),
  audience: z.array(z.string()).default([]),
  includes: z.array(z.string()).default([]),
  howItWorks: z.array(z.string()).default([]),
  requirements: z.array(z.string()).default([]),
  faqs: z
    .array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    )
    .default([]),
  tools: z.array(z.string()).default([]),
  order: z.number().default(0),
  published: z.boolean().default(true),
});

const notaSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  relatedProducts: z.array(z.string()).default([]),
  relatedWork: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

export const collections = {
  trabajos: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/trabajos' }),
    schema: trabajoSchema,
  }),
  productos: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
    schema: productoSchema,
  }),
  notas: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
    schema: notaSchema,
  }),
};

export type Trabajo = z.infer<typeof trabajoSchema>;
export type Producto = z.infer<typeof productoSchema>;
export type Nota = z.infer<typeof notaSchema>;
