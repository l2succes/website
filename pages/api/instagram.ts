import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const username = "l2succes"
    const response = await fetch(`https://www.instagram.com/${username}/?__a=1&__d=dis`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram data")
    }

    const data = await response.json()
    const posts = data?.graphql?.user?.edge_owner_to_timeline_media?.edges || []

    const recentPosts = posts.slice(0, 5).map((edge: any) => ({
      id: edge.node.id,
      media_url: edge.node.display_url,
      permalink: `https://www.instagram.com/p/${edge.node.shortcode}/`,
      caption: edge.node.edge_media_to_caption?.edges?.[0]?.node?.text || "",
    }))

    res.status(200).json({ posts: recentPosts })
  } catch (error) {
    console.error("Error fetching Instagram posts:", error)
    res.status(500).json({ error: "Failed to fetch Instagram posts" })
  }
}