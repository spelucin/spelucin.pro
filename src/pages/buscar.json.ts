import { getCollection } from "astro:content"

export async function GET() {
  const posts = await getCollection("blog", ({ data }) => !data.draft)
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )

  const searchData = sortedPosts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    summary: post.data.summary || "",
    category: post.data.category,
    tags: post.data.tags,
    slug: post.id,
    pubDate: post.data.pubDate.toISOString(),
  }))

  return new Response(JSON.stringify(searchData), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
