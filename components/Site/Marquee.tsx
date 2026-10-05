import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/site/motion"
import { capabilities } from "../../lib/site/content"

// Two counter-running rows of capabilities. Scroll speed pushes them faster and leans them over.
export const Marquee = () => {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const rows = gsap.utils.toArray<HTMLElement>(".ls-marquee__row", root.current)
    const offsets = rows.map(() => 0)
    const wrap = gsap.utils.wrap(-50, 0)
    const skewTo = rows.map((row) => gsap.quickTo(row, "skewX", { duration: 0.5, ease: "power3.out" }))
    let boost = 0

    const tick = (_t: number, delta: number) => {
      boost += (0 - boost) * 0.06
      rows.forEach((row, i) => {
        const dir = i % 2 === 0 ? -1 : 1
        offsets[i] = wrap(offsets[i] + dir * (0.0035 + Math.abs(boost) * 0.00002) * delta)
        gsap.set(row, { xPercent: offsets[i] })
      })
    }

    const trigger = ScrollTrigger.create({
      trigger: root.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = self.getVelocity()
        boost = v
        const skew = gsap.utils.clamp(-12, 12, v / -260)
        skewTo.forEach((to) => to(skew))
      },
    })

    gsap.ticker.add(tick)
    return () => {
      gsap.ticker.remove(tick)
      trigger.kill()
    }
  }, [])

  const items = [...capabilities, ...capabilities]

  return (
    <div ref={root} className="ls-marquee" aria-label={`Capabilities: ${capabilities.join(", ")}`}>
      {[0, 1].map((r) => (
        <div key={r} className={`ls-marquee__row ${r === 1 ? "ls-marquee__row--alt" : ""}`} aria-hidden="true">
          {items.map((item, i) => (
            <span key={i} className="ls-marquee__item ls-display">
              {item}
              <svg viewBox="0 0 10 10" className="ls-marquee__sep">
                <circle cx="5" cy="5" r="5" />
              </svg>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
