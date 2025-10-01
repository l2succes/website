import React from "react"
import Image from "next/image"
import { TypewriterHeader } from "../TypewriterHeader"

export const AboutSection: React.FC = () => {
  return (
    <div id="about">
      <TypewriterHeader />
      <div className="flex items-center gap-2 mx-4 mt-2 mb-8 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <span>Currently based in Mexico City</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 my-10 mx-4 items-start">
        <div className="flex-shrink-0 w-full md:w-80">
          <Image
            src="/images/profile-photo.jpg"
            alt="Luc Succes"
            width={320}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <p className="text-2xl leading-relaxed mb-6">
            I&apos;m a serial entrepreneur, software engineer, and product designer. Currently building Blaze, my
            latest startup venture, while helping other founders bring their ideas to life through technology and
            design.
          </p>
          <div className="text-lg leading-relaxed">
            <p className="mb-6">
              I&apos;ve spent the last few years between Mexico City, New York, and San Francisco building products
              and companies. My background is in computer science, but I&apos;ve always been drawn to the
              intersection of design, technology, and entrepreneurship.
            </p>
            <p>
              Before Blaze, I built keyboard apps that hit millions of downloads, worked on Spotify&apos;s discovery
              features, and helped bring art to more people at Artsy. Always down to connect with fellow founders
              and creators.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
