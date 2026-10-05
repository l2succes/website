import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap, MOTION_OK } from "../../lib/site/motion"
import { projects, Project } from "../../lib/site/content"

// Every company, in order. Hovering a row floats its product after the cursor.
export const Timeline = () => {
  const root = useRef<HTMLElement>(null)
  const preview = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>(".ls-row").forEach((row) => {
          gsap
            .timeline({ scrollTrigger: { trigger: row, start: "top 90%" } })
            .from(row, { "--rule": 0, duration: 1.2, ease: "expo.out" })
            .from(row.querySelectorAll(".ls-line > span"), { yPercent: 105, duration: 0.9, stagger: 0.05, ease: "expo.out" }, 0.05)
        })
      })

      if (!window.matchMedia("(pointer: fine)").matches) return
      const node = preview.current!
      const xTo = gsap.quickTo(node, "x", { duration: 0.6, ease: "power3.out" })
      const yTo = gsap.quickTo(node, "y", { duration: 0.6, ease: "power3.out" })
      const rTo = gsap.quickTo(node, "rotate", { duration: 0.8, ease: "power3.out" })
      let lastX = 0
      const onMove = (e: PointerEvent) => {
        xTo(e.clientX)
        yTo(e.clientY)
        rTo(gsap.utils.clamp(-14, 14, (e.clientX - lastX) * 0.6))
        lastX = e.clientX
      }
      window.addEventListener("pointermove", onMove)
      return () => window.removeEventListener("pointermove", onMove)
    }, root)
    return () => ctx.revert()
  }, [])

  const visual = active?.image || active?.video || active?.logo

  return (
    <section ref={root} id="timeline" className="ls-timeline">
      <header className="ls-timeline__head">
        <p className="ls-mono">Timeline</p>
        <h2 className="ls-display">
          Fourteen years,
          <br />
          <em className="ls-italic">ten</em> teams.
        </h2>
      </header>

      <ol className="ls-rows" onPointerLeave={() => setActive(null)}>
        {projects.map((entry) => (
          <li key={entry.slug} className="ls-row" onPointerEnter={() => setActive(entry)}>
            <span className="ls-row__years ls-mono ls-line">
              <span>{entry.years}</span>
            </span>
            <span className="ls-row__company ls-display ls-line">
              <span>{entry.title}</span>
            </span>
            <span className="ls-row__role ls-line">
              <span>{entry.role}</span>
            </span>
          </li>
        ))}
      </ol>

      <nav className="ls-timeline__more" aria-label="More about my work">
        <Link href="/work" className="ls-bigLink ls-display" data-cursor="Open">
          Full portfolio <span aria-hidden="true">→</span>
        </Link>
        <Link href="/resume" className="ls-bigLink ls-display" data-cursor="Open">
          Résumé <span aria-hidden="true">→</span>
        </Link>
      </nav>

      <div ref={preview} className={`ls-preview ${visual ? "is-on" : ""}`} aria-hidden="true">
        <div className="ls-preview__inner">
          {projects.map((entry) =>
            entry.video ? (
              <video
                key={entry.slug}
                src={entry.video}
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                className={active === entry ? "is-current" : ""}
              />
            ) : entry.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={entry.slug}
                src={entry.image}
                alt=""
                loading="lazy"
                className={active === entry ? "is-current" : ""}
              />
            ) : entry.logo ? (
              <div
                key={entry.slug}
                className={`ls-preview__logo ${active === entry ? "is-current" : ""}`}
                style={{ backgroundColor: entry.bg }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={entry.logo} alt="" loading="lazy" />
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  )
}
