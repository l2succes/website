"use client"

import { useEffect, useState } from "react"
import { Logo } from "./Home/Logo"
import { VantaBackground } from "./VantaBackground"

interface SplashScreenProps {
  onComplete: () => void
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start fade out after 2 seconds (after animation completes)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2200)

    // Call onComplete after fade out
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 px-4 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <VantaBackground enabled={true} />
      <div className="relative z-10">
        <Logo size="large" animated={true} />
      </div>
    </div>
  )
}