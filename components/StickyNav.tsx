import React, { useEffect, useState } from "react"
import { Logo } from "./Home/Logo"
import { SocialLinks } from "./SocialLinks"

export const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav when scrolled past the viewport (hero section)
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight

      setIsVisible(scrollPosition > viewportHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Logo size="small" />
        </div>
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-gray-300 transition-colors text-sm"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-white hover:text-gray-300 transition-colors text-sm"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-gray-300 transition-colors text-sm"
          >
            Contact
          </button>
        </nav>
        <div>
          <SocialLinks color="white" hoverColor="gray-300" size="small" />
        </div>
      </div>
    </div>
  )
}
