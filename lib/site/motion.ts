import { useEffect, useLayoutEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export const MOTION_OK = "(prefers-reduced-motion: no-preference)"

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

let lenis: Lenis | null = null

export const getLenis = () => lenis

// Smooth scrolling driven by GSAP's ticker so ScrollTrigger and Lenis share one clock.
export function useSmoothScroll() {
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return

    const instance = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 })
    lenis = instance
    instance.on("scroll", ScrollTrigger.update)

    const raf = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      instance.destroy()
      lenis = null
    }
  }, [])
}

export function scrollToTarget(target: string | number) {
  const el = typeof target === "string" ? document.getElementById(target) : null
  if (lenis) {
    lenis.scrollTo(el ?? (typeof target === "number" ? target : 0), { duration: 1.8 })
  } else if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  } else {
    window.scrollTo({ top: typeof target === "number" ? target : 0, behavior: "smooth" })
  }
}
