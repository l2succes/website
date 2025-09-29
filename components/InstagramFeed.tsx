import React, { useEffect, useState } from "react"

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption?: string
}

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram")
        const data = await response.json()

        if (data.posts) {
          setPosts(data.posts)
        } else {
          // Fallback to placeholder if API fails
          setPosts([
            {
              id: "1",
              media_url: "https://via.placeholder.com/400x400?text=Instagram+1",
              permalink: "https://www.instagram.com/l2succes/",
              caption: "Photo 1",
            },
            {
              id: "2",
              media_url: "https://via.placeholder.com/400x400?text=Instagram+2",
              permalink: "https://www.instagram.com/l2succes/",
              caption: "Photo 2",
            },
            {
              id: "3",
              media_url: "https://via.placeholder.com/400x400?text=Instagram+3",
              permalink: "https://www.instagram.com/l2succes/",
              caption: "Photo 3",
            },
            {
              id: "4",
              media_url: "https://via.placeholder.com/400x400?text=Instagram+4",
              permalink: "https://www.instagram.com/l2succes/",
              caption: "Photo 4",
            },
            {
              id: "5",
              media_url: "https://via.placeholder.com/400x400?text=Instagram+5",
              permalink: "https://www.instagram.com/l2succes/",
              caption: "Photo 5",
            },
          ])
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching Instagram posts:", error)
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  if (loading) {
    return <div className="text-gray-500">Loading Instagram feed...</div>
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
            <img
              src={post.media_url}
              alt={post.caption || "Instagram post"}
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