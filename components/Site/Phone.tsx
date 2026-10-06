import React from "react"
import Image from "next/image"
import type { Project } from "../../lib/site/content"

interface PhoneProps {
  project: Project
  className?: string
  /** Show a different capture than the project's cover, e.g. in a case study gallery. */
  image?: string
  video?: string
  alt?: string
  sizes?: string
}

// The frame follows the capture: home-button iPhones for the 2013–2018 screenshots, notched phones after.
export const Phone = ({ project, className = "", image, video, alt, sizes = "300px" }: PhoneProps) => {
  const src = image || video ? { image, video } : { image: project.image, video: project.video }
  return (
    <div className={`ls-phone ls-phone--${project.device ?? "modern"} ${className}`}>
      <div className="ls-phone__screen">
        {src.video ? (
          <video src={src.video} autoPlay loop muted playsInline preload="metadata" aria-label={alt ?? `${project.title} demo`} />
        ) : (
          <Image src={src.image!} alt={alt ?? `${project.title} app screen`} fill sizes={sizes} />
        )}
      </div>
    </div>
  )
}
