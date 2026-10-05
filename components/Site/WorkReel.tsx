import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap, ScrollTrigger, MOTION_OK } from "../../lib/site/motion"
import { countWord, visualProjects } from "../../lib/site/content"
import { Phone } from "./Phone"

const INTRO_COLORS = { bg: "#EDEDE9", fg: "#0B0B0A" }

// A pinned horizontal reel. The section floods with each product's brand color as its panel takes the stage.
export const WorkReel = () => {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = root.current!
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".ls-panel")
      const paint = (panel: HTMLElement) =>
        gsap.to(section, {
          backgroundColor: panel.dataset.bg,
          color: panel.dataset.fg,
          duration: 0.7,
          ease: "power2.out",
          overwrite: "auto",
        })

      const mm = gsap.matchMedia()

      mm.add(`(min-width: 768px) and ${MOTION_OK}`, () => {
        const distance = () => track.current!.scrollWidth - window.innerWidth
        const slide = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })

        panels.forEach((panel) => {
          ScrollTrigger.create({
            trigger: panel,
            containerAnimation: slide,
            start: "left 55%",
            end: "right 55%",
            onToggle: (self) => self.isActive && paint(panel),
          })

          const phone = panel.querySelector(".ls-phone")
          const title = panel.querySelector(".ls-panel__title")
          const meta = panel.querySelector(".ls-panel__meta")
          const along = { trigger: panel, containerAnimation: slide, start: "left right", end: "right left", scrub: true }
          if (phone) gsap.fromTo(phone, { xPercent: 22, rotate: 6 }, { xPercent: -22, rotate: -6, ease: "none", scrollTrigger: along })
          if (title) gsap.fromTo(title, { xPercent: 6 }, { xPercent: -6, ease: "none", scrollTrigger: along })
          if (meta) gsap.fromTo(meta, { xPercent: 20 }, { xPercent: -8, ease: "none", scrollTrigger: along })
        })

        // The reel progress bar.
        gsap.fromTo(
          ".ls-reel__progress span",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", scrollTrigger: { trigger: section, start: "top top", end: () => `+=${distance()}`, scrub: true } }
        )
      })

      mm.add(`(max-width: 767px), (prefers-reduced-motion: reduce)`, () => {
        panels.forEach((panel) =>
          ScrollTrigger.create({
            trigger: panel,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => self.isActive && paint(panel),
          })
        )
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="work" className="ls-reel" style={{ backgroundColor: INTRO_COLORS.bg, color: INTRO_COLORS.fg }}>
      <div ref={track} className="ls-reel__track">
        <div className="ls-panel ls-panel--intro" data-bg={INTRO_COLORS.bg} data-fg={INTRO_COLORS.fg}>
          <p className="ls-mono">Selected work · 2013—2026</p>
          <h2 className="ls-panel__title ls-display">
            Things
            <br />
            I&apos;ve <em className="ls-italic">shipped.</em>
          </h2>
          <p className="ls-panel__hint ls-mono">
            {countWord(visualProjects.length, true)} products, newest first <span aria-hidden="true">→</span>
          </p>
        </div>

        {visualProjects.map((project) => {
          const featured = !!project.href
          const body = (
            <>
              <div className="ls-panel__text">
                <div className="ls-panel__meta ls-mono">
                  <span>{project.years}</span>
                  <span>{project.role}</span>
                </div>
                <h3 className="ls-panel__title ls-display">{project.title}</h3>
                {project.blurb && <p className="ls-panel__blurb">{project.blurb}</p>}
                {featured && (
                  <span className="ls-panel__cta ls-mono">
                    Read the case study <span aria-hidden="true">→</span>
                  </span>
                )}
              </div>
              <Phone project={project} />
            </>
          )
          return (
            <article
              key={project.title}
              className={`ls-panel ${featured ? "ls-panel--featured" : "ls-panel--past"}`}
              data-bg={project.bg}
              data-fg={project.fg}
              aria-label={`${project.title}, ${project.years}`}
            >
              {featured ? (
                <Link href={project.href!} className="ls-panel__link" data-cursor="View">
                  {body}
                </Link>
              ) : (
                <div className="ls-panel__link">{body}</div>
              )}
            </article>
          )
        })}
      </div>
      <div className="ls-reel__progress" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
