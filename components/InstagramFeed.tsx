import React, { useEffect, useState } from "react"
import Image from "next/image"

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption?: string
}

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [hasApiKey, setHasApiKey] = useState(false)

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // Check if API key exists
      if (!process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN) {
        setHasApiKey(false)
        setLoading(false)
        return
      }

      setHasApiKey(true)

      try {
        const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${accessToken}&limit=5`
        )
        const data = await response.json()

        if (data.data) {
          setPosts(data.data)
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching Instagram posts:", error)
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  // Hide component if no API key
  if (!hasApiKey) {
    return null
  }

  if (loading) {
    return <div className="text-gray-500">Loading Instagram feed...</div>
  }

  if (posts.length === 0) {
    return null
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-5 gap-2">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden rounded-lg hover:opacity-80 transition-opacity"
          >
            <Image
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a
          href="https://www.instagram.com/l2succes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          @l2succes on Instagram
        </a>
      </div>
    </div>
  )
}
