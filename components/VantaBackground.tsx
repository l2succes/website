"use client"

import { useEffect, useRef } from "react"

interface VantaBackgroundProps {
  enabled?: boolean
}

export const VantaBackground = ({ enabled = true }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    if (!enabled || !vantaRef.current) return

    // Dynamically import Vanta and Three.js to avoid SSR issues
    const loadVanta = async () => {
      const THREE = await import("three")
      const VANTA = await import("vanta/dist/vanta.net.min")

      if (vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = (VANTA as any).default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3a3a3a, // Dark grey lines
          backgroundColor: 0x0, // Black background
          points: 8.0,
          maxDistance: 20.0,
          spacing: 15.0,
        })
      }
    }

    loadVanta()

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  )
}