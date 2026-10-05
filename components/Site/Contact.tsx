import React, { useEffect, useRef } from "react"
import { gsap, MOTION_OK, scrollToTarget } from "../../lib/site/motion"
import { EMAIL, socials } from "../../lib/site/content"
import { LS_PATH } from "../../lib/site/ls-path"
import { useMexicoCityTime } from "./SiteNav"

export const Contact = () => {
  const root = useRef<HTMLElement>(null)
  const magnet = useRef<HTMLAnchorElement>(null)
  const time = useMexicoCityTime()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from(".ls-contact__title .ls-line > span", {
          yPercent: 105,
          duration: 1.2,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ls-contact__title", start: "top 80%" },
        })

        // The monogram draws itself as the page runs out, then fills in.
        gsap
          .timeline({
            scrollTrigger: { trigger: ".ls-footer__mark", start: "top 95%", end: "bottom bottom", scrub: true },
          })
          .fromTo(".ls-footer__mark path", { attr: { "stroke-dashoffset": 1 } }, { attr: { "stroke-dashoffset": 0 }, ease: "none", duration: 1 })
          .fromTo(".ls-footer__mark path", { fillOpacity: 0 }, { fillOpacity: 1, ease: "none", duration: 0.35 }, 0.75)
      })

      // Magnetic call to action.
      const button = magnet.current!
      if (!window.matchMedia("(pointer: fine)").matches) return
      const xTo = gsap.quickTo(button, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" })
      const yTo = gsap.quickTo(button, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" })
      const onMove = (e: PointerEvent) => {
        const r = button.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * 0.4)
        yTo((e.clientY - (r.top + r.height / 2)) * 0.4)
      }
      const onLeave = () => {
        xTo(0)
        yTo(0)
      }
      button.addEventListener("pointermove", onMove)
      button.addEventListener("pointerleave", onLeave)
      return () => {
        button.removeEventListener("pointermove", onMove)
        button.removeEventListener("pointerleave", onLeave)
      }
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="contact" className="ls-contact">
      <p className="ls-mono">Contact</p>
      <h2 className="ls-contact__title ls-display">
        <span className="ls-line">
          <span>Got something</span>
        </span>
        <span className="ls-line">
          <span>
            worth <em className="ls-italic">building?</em>
          </span>
        </span>
      </h2>

      <div className="ls-contact__actions">
        <p className="ls-contact__note">
          I like talking to founders early — before the deck, before the team. Tell me what you&apos;re working on.
        </p>
        <a ref={magnet} href={`mailto:${EMAIL}`} className="ls-magnet" data-cursor="">
          <span className="ls-mono">Write to me</span>
        </a>
      </div>

      <a href={`mailto:${EMAIL}`} className="ls-contact__email ls-display" data-cursor="Email">
        {EMAIL}
      </a>

      <footer className="ls-footer">
        <ul className="ls-footer__socials ls-mono">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="ls-mono">Mexico City · {time}</p>
        <p className="ls-mono">© {new Date().getFullYear()} Luc Succès</p>
        <button className="ls-mono ls-footer__top" onClick={() => scrollToTarget(0)}>
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </footer>

      <svg className="ls-footer__mark" viewBox="290 190 462 670" aria-hidden="true">
        <path d={LS_PATH} pathLength={1} strokeDasharray="1" strokeDashoffset="0" />
      </svg>
    </section>
  )
}
