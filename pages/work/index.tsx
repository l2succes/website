import type { NextPage } from "next"
import Link from "next/link"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { Flip } from "gsap/Flip"
import { SiteShell } from "../../components/Site/SiteShell"
import { Phone } from "../../components/Site/Phone"
import { gsap, MOTION_OK, ScrollTrigger, useIsomorphicLayoutEffect } from "../../lib/site/motion"
import { projects, Project, skillGroups } from "../../lib/site/content"

if (typeof window !== "undefined") gsap.registerPlugin(Flip)

const FILTERS = [
  { id: "all", label: "Everything" },
  { id: "started", label: "Companies I started" },
  { id: "joined", label: "Teams I joined" },
] as const
type FilterId = (typeof FILTERS)[number]["id"]

const isStarted = (p: Project) => /founder\b|creator/i.test(p.role)
const matches = (p: Project, filter: FilterId) =>
  filter === "all" || (filter === "started" ? isStarted(p) : !isStarted(p))

// Column spans on a 12-column grid, cycling wide/narrow/thirds. The last row always closes flush.
const PATTERN = [7, 5, 4, 4, 4]
function spansFor(count: number) {
  const spans: number[] = []
  let row = 0
  for (let i = 0; i < count; i++) {
    let span = PATTERN[i % PATTERN.length]
    if (row + span > 12) row = 0
    row += span
    if (i === count - 1 && row < 12) span += 12 - row
    spans.push(span)
    if (row === 12) row = 0
  }
  return spans
}

const Card = ({ project, span }: { project: Project; span: number }) => {
  const visual = project.image || project.video
  const media = (
    <div className="ls-card__media" style={{ backgroundColor: project.bg, color: project.fg }}>
      {visual ? (
        <Phone project={project} className="ls-card__phone" />
      ) : project.logo ? (
        <span className="ls-card__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.logo} alt={`${project.title} logo`} />
          <span className="ls-mono">{project.title}</span>
        </span>
      ) : (
        <span className="ls-card__wordmark ls-display" aria-hidden="true">
          {project.title}
        </span>
      )}
    </div>
  )

  return (
    <article className="ls-card" data-flip-id={project.slug} data-span={span}>
      {project.href ? (
        <Link href={project.href} className="ls-card__mediaLink" data-cursor="Case study" aria-label={`${project.title} case study`}>
          {media}
        </Link>
      ) : (
        media
      )}
      <div className="ls-card__body">
        <header className="ls-card__head">
          <h2 className="ls-display">{project.title}</h2>
          <span className="ls-mono">{project.years}</span>
        </header>
        <p className="ls-card__role ls-mono">{project.role}</p>
        <p className="ls-card__desc">{project.description}</p>
        {project.tech && <p className="ls-card__tech ls-mono">{project.tech.join(" · ")}</p>}
        {project.href && (
          <Link href={project.href} className="ls-card__cta ls-mono">
            Read the case study <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  )
}

const WorkPage: NextPage = () => {
  const root = useRef<HTMLElement>(null)
  const grid = useRef<HTMLDivElement>(null)
  const flipState = useRef<Flip.FlipState | null>(null)
  const [filter, setFilter] = useState<FilterId>("all")

  const visible = useMemo(() => projects.filter((p) => matches(p, filter)), [filter])
  const spans = spansFor(visible.length)

  const choose = (next: FilterId) => {
    if (next === filter) return
    if (grid.current) flipState.current = Flip.getState(grid.current.querySelectorAll(".ls-card"))
    setFilter(next)
  }

  // Animate from the captured layout to the new one.
  useIsomorphicLayoutEffect(() => {
    const state = flipState.current
    if (!state) return
    flipState.current = null
    Flip.from(state, {
      duration: 0.9,
      ease: "expo.inOut",
      absolute: true,
      scale: false,
      stagger: 0.02,
      onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "expo.out", delay: 0.3 }),
      onComplete: () => ScrollTrigger.refresh(),
    })
  }, [filter])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from(".ls-workHero__title .ls-line > span", { yPercent: 105, duration: 1.3, stagger: 0.09, ease: "expo.out", delay: 0.15 })
        gsap.from(".ls-workHero__intro, .ls-filters", { autoAlpha: 0, y: 20, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.6 })

        ScrollTrigger.batch(".ls-card", {
          start: "top 88%",
          once: true,
          onEnter: (els) => gsap.from(els, { y: 80, autoAlpha: 0, duration: 1.1, stagger: 0.1, ease: "expo.out" }),
        })

        gsap.from(".ls-skills__col", {
          y: 40,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ls-skills", start: "top 75%" },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  // Phones drift up through their color fields. Rebuilt whenever the filter swaps cards in.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>(".ls-card__media").forEach((media) => {
          const subject = media.querySelector(".ls-card__phone, .ls-card__logo, .ls-card__wordmark")
          if (!subject) return
          gsap.fromTo(
            subject,
            { yPercent: 14 },
            { yPercent: -6, ease: "none", scrollTrigger: { trigger: media, start: "top bottom", end: "bottom top", scrub: true } }
          )
        })
      })
    }, grid)
    return () => ctx.revert()
  }, [filter])

  return (
    <SiteShell
      title="Work — Luc Succès"
      description="Every product Luc Succès has built or helped build: Blaze, Claire, Vibed, Catching Feelings, Seasons, Artsy, Spotify and more."
      path="/work"
    >
      <main ref={root} className="ls-workPage">
        <header className="ls-workHero">
          <p className="ls-mono">Work · 2012—2026</p>
          <h1 className="ls-workHero__title ls-display">
            <span className="ls-line">
              <span>Everything</span>
            </span>
            <span className="ls-line">
              <span>
                I&apos;ve <em className="ls-italic">built,</em>
              </span>
            </span>
            <span className="ls-line">
              <span>in full.</span>
            </span>
          </h1>
          <div className="ls-workHero__intro">
            <p>
              I&apos;m a serial entrepreneur, software engineer and product designer, currently building Blaze. Before
              that I built keyboard apps that hit millions of downloads, worked on Spotify&apos;s discovery features and
              helped bring art to more people at Artsy.
            </p>
          </div>
        </header>

        <div className="ls-filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => {
            const count = projects.filter((p) => matches(p, f.id)).length
            return (
              <button
                key={f.id}
                className="ls-filter ls-mono"
                aria-pressed={filter === f.id}
                onClick={() => choose(f.id)}
              >
                {f.label} <sup>{count}</sup>
              </button>
            )
          })}
        </div>

        <div ref={grid} className="ls-grid">
          {visible.map((project, i) => (
            <Card key={project.slug} project={project} span={spans[i]} />
          ))}
        </div>

        <section className="ls-skills" aria-labelledby="skills-title">
          <h2 id="skills-title" className="ls-display">
            How I <em className="ls-italic">work.</em>
          </h2>
          <div className="ls-skills__cols">
            {skillGroups.map((group) => (
              <div key={group.title} className="ls-skills__col">
                <h3 className="ls-mono">{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  )
}

export default WorkPage
