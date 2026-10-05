import React, { useEffect, useRef, useState } from "react"
import { gsap } from "../../lib/site/motion"

// A blend-mode dot that swells into a labelled disc over anything tagged with data-cursor.
export const Cursor = () => {
  const el = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState("")

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    const node = el.current!
    const xTo = gsap.quickTo(node, "x", { duration: 0.35, ease: "power3.out" })
    const yTo = gsap.quickTo(node, "y", { duration: 0.35, ease: "power3.out" })

    const last = { x: -100, y: -100 }
    const inspect = (hit: Element | null) => {
      const target = hit?.closest<HTMLElement>("[data-cursor], a, button")
      const next = target ? target.dataset.cursor ?? "" : null
      node.classList.toggle("is-active", next !== null)
      node.classList.toggle("has-label", !!next)
      if (next) setLabel(next)
    }
    const onMove = (e: PointerEvent) => {
      node.classList.add("is-live")
      last.x = e.clientX
      last.y = e.clientY
      xTo(e.clientX)
      yTo(e.clientY)
      inspect(e.target as Element)
    }
    // Content scrolls under a still pointer, so re-check what it sits on.
    const onScroll = () => inspect(document.elementFromPoint(last.x, last.y))
    const onLeave = () => node.classList.remove("is-live")

    window.addEventListener("pointermove", onMove)
    window.addEventListener("scroll", onScroll, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("scroll", onScroll)
      document.documentElement.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div ref={el} className="ls-cursor" aria-hidden="true">
      <div className="ls-cursor__disc">
        <span className="ls-cursor__label ls-mono">{label}</span>
      </div>
    </div>
  )
}
