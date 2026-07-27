import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { getPageMeta } from "../lib/content"

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => !data.draft)
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )

  return rss({
    title: "Blog - Alex Spelucin",
    description:
      "Artículos sobre SEO técnico, Shopify, AI Search y estrategia de comercio electrónico.",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: "<language>es</language>",
  })
}
