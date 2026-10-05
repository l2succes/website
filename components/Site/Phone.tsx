import React from "react"
import Image from "next/image"
import type { Project } from "../../lib/site/content"

// The frame follows the capture: home-button iPhones for the 2013–2018 screenshots, notched phones after.
export const Phone = ({ project, className = "" }: { project: Project; className?: string }) => (
  <div className={`ls-phone ls-phone--${project.device ?? "modern"} ${className}`}>
    <div className="ls-phone__screen">
      {project.video ? (
        <video src={project.video} autoPlay loop muted playsInline preload="metadata" aria-label={`${project.title} demo`} />
      ) : (
        <Image src={project.image!} alt={`${project.title} app screen`} fill sizes="300px" />
      )}
    </div>
  </div>
)
