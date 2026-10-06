import React, { useEffect, useId, useRef } from "react"
import Image from "next/image"
import { gsap, getLenis, prefersReducedMotion } from "../../lib/site/motion"
import { LS_BOX, LS_PATH, LS_PORTAL } from "../../lib/site/ls-path"

const NAME = ["Luc", "Succès"]

// Three moments at the desk, side by side behind the monogram.
const SHOTS = [
  { src: "/images/working/design.jpg", alt: "Luc designing Blaze screens in Figma", position: "50% 8%" },
  { src: "/images/working/phone.jpg", alt: "Luc holding the Blaze app beside his laptop", position: "40% 55%" },
  { src: "/images/working/code.jpg", alt: "Luc writing code at a café table", position: "62% 50%" },
]

interface PortalHeroProps {
  onIntroDone: () => void
}

// The LS monogram is cut out of an ink sheet. Scrolling zooms the camera through the
// L's stem until the sheet is gone and the photos behind it fill the screen.
export const PortalHero = ({ onIntroDone }: PortalHeroProps) => {
  const root = useRef<HTMLElement>(null)
  const inkSvg = useRef<SVGSVGElement>(null)
  const maskMark = useRef<SVGGElement>(null)
  const strokeMark = useRef<SVGGElement>(null)
  const maskPath = useRef<SVGPathElement>(null)
  const strokePath = useRef<SVGPathElement>(null)
  const counter = useRef<HTMLSpanElement>(null)
  const photo = useRef<HTMLDivElement>(null)
  const maskId = `ls-portal-${useId().replace(/:/g, "")}`
  const doneRef = useRef(onIntroDone)
  doneRef.current = onIntroDone

  useEffect(() => {
    const el = root.current!
    const reduced = prefersReducedMotion()

    const view = { w: window.innerWidth, h: window.innerHeight }
    const state = { p: 0, intro: reduced ? 1 : 0.82 }
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
    const cx0 = LS_BOX.x + LS_BOX.w / 2
    const cy0 = LS_BOX.y + LS_BOX.h / 2

    const restScale = () => (Math.min(view.w, view.h) * (view.w < 768 ? 0.44 : 0.5)) / LS_BOX.h
    const coverScale = () => (Math.hypot(view.w, view.h) / 2 / LS_PORTAL.r) * 1.2

    const render = () => {
      // Refs are cleared before effect cleanup runs on unmount; a late tween update must not touch them.
      const maskEl = maskMark.current
      const strokeEl = strokeMark.current
      const pathEl = strokePath.current
      const svgEl = inkSvg.current
      if (!maskEl || !strokeEl || !pathEl || !svgEl) return
      const { p } = state
      const rest = restScale() * state.intro
      // Exponential zoom reads as constant speed to the eye.
      const scale = rest * Math.pow(coverScale() / rest, p)
      const k = 1 - Math.pow(1 - Math.min(1, p * 2.4), 3)
      const ax = cx0 + (LS_PORTAL.x - cx0) * k
      const ay = cy0 + (LS_PORTAL.y - cy0) * k
      const drift = 1 - Math.min(1, p * 4)
      const x = view.w / 2 + mouse.x * 18 * drift
      const y = view.h * 0.5 + mouse.y * 12 * drift
      const transform = `translate(${x} ${y}) scale(${scale}) translate(${-ax} ${-ay})`
      maskEl.setAttribute("transform", transform)
      strokeEl.setAttribute("transform", transform)
      pathEl.setAttribute("stroke-width", String(1.25 / scale))
      svgEl.style.visibility = p > 0.995 ? "hidden" : "visible"
    }

    const onResize = () => {
      view.w = window.innerWidth
      view.h = window.innerHeight
      render()
    }
    const onPointer = (e: PointerEvent) => {
      mouse.tx = (e.clientX / view.w - 0.5) * 2
      mouse.ty = (e.clientY / view.h - 0.5) * 2
    }
    const tick = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.06
      mouse.y += (mouse.ty - mouse.y) * 0.06
      if (state.p < 0.25) render()
    }

    render()
    window.addEventListener("resize", onResize)

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".ls-hero__char")

      if (reduced) {
        gsap.set(maskPath.current, { attr: { "fill-opacity": 1 } })
        gsap.set(strokePath.current, { attr: { "stroke-dashoffset": 0 } })
        gsap.set(chars, { y: 0 })
        gsap.set(".ls-hero__loader", { autoAlpha: 0 })
        doneRef.current()
        return
      }

      window.addEventListener("pointermove", onPointer)
      gsap.ticker.add(tick)

      // Intro: draw the monogram, count to 100, open the window, raise the name.
      if ("scrollRestoration" in history) history.scrollRestoration = "manual"
      window.scrollTo(0, 0)
      getLenis()?.stop()
      const count = { v: 0 }
      // Coming back from another page: same intro, played fast.
      let repeat = false
      try {
        repeat = sessionStorage.getItem("ls-intro-seen") === "1"
        sessionStorage.setItem("ls-intro-seen", "1")
      } catch {}
      gsap
        .timeline({
          delay: 0.2,
          onComplete: () => {
            getLenis()?.start()
            doneRef.current()
          },
        })
        .to(strokePath.current, { attr: { "stroke-dashoffset": 0 }, duration: 1.7, ease: "power2.inOut" }, 0)
        .to(
          count,
          {
            v: 100,
            duration: 1.7,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counter.current) counter.current.textContent = String(Math.round(count.v)).padStart(3, "0")
            },
          },
          0
        )
        .to(state, { intro: 1, duration: 1.6, ease: "expo.inOut", onUpdate: render }, 0.6)
        .to(maskPath.current, { attr: { "fill-opacity": 1 }, duration: 0.9, ease: "power2.out" }, 1.55)
        .to(".ls-hero__loader", { yPercent: -100, autoAlpha: 0, duration: 0.5, ease: "power2.in" }, 1.75)
        .to(chars, { y: 0, duration: 1.2, stagger: 0.04, ease: "expo.out" }, 1.8)
        .fromTo(
          ".ls-hero__meta",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" },
          2.1
        )
        .timeScale(repeat ? 2.4 : 1)

      // Scroll: zoom through the stem, scatter the name, settle the photo.
      gsap
        .timeline({
          scrollTrigger: { trigger: el, start: "top top", end: "+=200%", scrub: 0.6, pin: true },
        })
        .to(state, { p: 1, duration: 1, ease: "power1.in", onUpdate: render }, 0)
        .to(strokeMark.current, { opacity: 0, duration: 0.12, ease: "none" }, 0)
        .to(chars, { yPercent: -110, duration: 0.22, stagger: { each: 0.025, from: "edges" }, ease: "power2.in" }, 0)
        .to(".ls-hero__meta", { autoAlpha: 0, y: -24, duration: 0.15 }, 0)
        .fromTo(photo.current, { scale: 1.5 }, { scale: 1, duration: 1, ease: "power2.out" }, 0)
        // The outer panes settle at their own speeds.
        .fromTo(".ls-hero__paneInner", { yPercent: (i: number) => [-9, 0, 9][i % 3] }, { yPercent: 0, duration: 1, ease: "power2.out" }, 0)
        .fromTo(
          ".ls-hero__greeting .ls-line > span",
          { yPercent: 105 },
          { yPercent: 0, duration: 0.18, stagger: 0.04, ease: "power3.out" },
          0.8
        )
        .to({}, { duration: 0.15 })
    }, el)

    return () => {
      // Detach the per-frame and window hooks first so nothing renders mid-revert.
      gsap.ticker.remove(tick)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("pointermove", onPointer)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={root} className="ls-hero" aria-label="Introduction">
      <div ref={photo} className="ls-hero__photo">
        {SHOTS.map((shot) => (
          <div key={shot.src} className="ls-hero__pane">
            <div className="ls-hero__paneInner">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                priority
                // Each pane is a third of the width, but a 3:4 photo covering a pane 124% of the
                // screen's height draws about 93vh wide, so size for whichever is larger.
                sizes="max(34vw, 93vh)"
                quality={85}
                className="ls-hero__img"
                style={{ objectPosition: shot.position }}
              />
            </div>
          </div>
        ))}
        <div className="ls-hero__shade" />
      </div>

      <div className="ls-hero__greeting">
        <p className="ls-mono ls-line">
          <span>Hola · Bonjour · Hello</span>
        </p>
        <h2 className="ls-display">
          <span className="ls-line">
            <span>I make products</span>
          </span>
          <span className="ls-line">
            <span>
              and the <em className="ls-italic">companies</em>
            </span>
          </span>
          <span className="ls-line">
            <span>around them.</span>
          </span>
        </h2>
      </div>

      <svg ref={inkSvg} className="ls-hero__ink" aria-hidden="true">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="#fff" />
            <g ref={maskMark}>
              <path ref={maskPath} d={LS_PATH} fill="#000" fillOpacity={0} />
            </g>
          </mask>
        </defs>
        <rect className="ls-hero__sheet" width="100%" height="100%" mask={`url(#${maskId})`} />
        <g ref={strokeMark}>
          <path
            ref={strokePath}
            className="ls-hero__stroke"
            d={LS_PATH}
            fill="none"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset="1"
          />
        </g>
      </svg>

      <div className="ls-hero__fg">
        <div className="ls-hero__loader ls-mono">
          <span ref={counter}>000</span>
        </div>
        <p className="ls-hero__meta ls-hero__meta--l ls-mono">
          Engineer
          <br />
          Designer
          <br />
          Founder
        </p>
        <p className="ls-hero__meta ls-hero__meta--r ls-mono">
          Now building Blaze
          <br />
          Y Combinator S24
          <br />
          Mexico City
        </p>
        <h1 className="ls-hero__name ls-display" aria-label="Luc Succès">
          {NAME.map((word) => (
            <span key={word} className="ls-hero__word" aria-hidden="true">
              {Array.from(word).map((char, i) => (
                <span key={i} className="ls-hero__char">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="ls-hero__meta ls-hero__scroll ls-mono">
          Scroll to enter <span className="ls-hero__tick" />
        </p>
      </div>
    </section>
  )
}
