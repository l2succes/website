import React from "react"
import Link from "next/link"

interface FeaturedProject {
  title: string
  role: string
  year: string
  image: string
  slug: string
  backgroundColor: string
}

interface GridProject {
  title: string
  role: string
  year: string
  logo: string
  image: string
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "Blaze",
    role: "Co-Founder + Designer",
    year: "2024",
    image: "/images/blaze/feed.png",
    slug: "blaze",
    backgroundColor: "#FAF000",
  },
  {
    title: "Catching Feelings",
    role: "Featured, Co-Founder + Designer",
    year: "2017",
    image: "/images/drizzy/screenshots/drizzy-4.png",
    slug: "catching-feelings",
    backgroundColor: "#FF6B6B",
  },
]

const gridProjects: GridProject[] = [
  {
    title: "Spotify",
    role: "Product Designer",
    year: "2013-2015",
    logo: "/images/spotify/icon.png",
    image: "/images/spotify/spotify-1.png",
  },
  {
    title: "Drizzy",
    role: "Co-Founder",
    year: "2015",
    logo: "/images/drizzy/icon.png",
    image: "/images/drizzy/screenshots/drizzy-4.png",
  },
  {
    title: "October",
    role: "Co-Founder",
    year: "2016",
    logo: "/images/october/icon.png",
    image: "/images/october/october-2.png",
  },
  {
    title: "Often",
    role: "Co-Founder",
    year: "2016",
    logo: "/images/often/icon.png",
    image: "/images/often/often-1.png",
  },
  {
    title: "Sundial",
    role: "Co-Creator",
    year: "2016",
    logo: "/images/sundial/icon.png",
    image: "/images/sundial/sundial-1.png",
  },
  {
    title: "Artsy",
    role: "Software Engineer",
    year: "2017-2018",
    logo: "/images/artsy/icon.jpg",
    image: "/images/artsy/artsy-1.png",
  },
]

export const NewWorkSection: React.FC = () => {
  return (
    <div className="my-10">
      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featuredProjects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`}>
            <div
              className="rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <div className="p-8 flex flex-col items-center">
                <div className="mb-6">
                  <div className="relative" style={{ width: "280px", height: "560px" }}>
                    {/* Modern iPhone Frame */}
                    <div className="absolute inset-0 bg-black rounded-[45px] shadow-2xl p-3">
                      <div className="w-full h-full bg-white rounded-[35px] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                        {/* Screenshot */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lg opacity-80">{project.role}</p>
                <p className="text-sm opacity-60 mt-1">{project.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gridProjects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300 flex items-center gap-4 h-32"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.role}</p>
                <p className="text-sm text-gray-400 mt-1">{project.year}</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-24 h-32 -my-6 -mr-6 rounded-r-2xl overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}