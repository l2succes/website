import React, { useEffect, useState } from "react"
import { Logo } from "./Home/Logo"
import { SocialLinks } from "./SocialLinks"
import { ThemeToggle } from "./ThemeToggle"
import Link from "next/link"
import { useRouter } from "next/router"

export const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

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
      const offset = 120 // Height of sticky nav + padding to show section title
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handleServicesClick = () => {
    const element = document.getElementById("services")
    if (element) {
      scrollToSection("services")
    } else {
      window.location.href = "/services"
    }
  }

  const handleNavClick = (sectionId: string) => {
    // If we're on the blog page, navigate to home first
    if (router.pathname.startsWith("/blog")) {
      window.location.href = `/#${sectionId}`
    } else {
      scrollToSection(sectionId)
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-black dark:bg-gray-900 border-b border-white/10 dark:border-gray-700 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Logo size="small" />
          </Link>
        </div>
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
          <button
            onClick={() => handleNavClick("about")}
            className="text-white dark:text-gray-200 hover:text-gray-300 dark:hover:text-white transition-colors text-sm"
          >
            About Me
          </button>
          <button
            onClick={() => handleNavClick("work")}
            className="text-white dark:text-gray-200 hover:text-gray-300 dark:hover:text-white transition-colors text-sm"
          >
            Work
          </button>
          <button
            onClick={handleServicesClick}
            className="text-white dark:text-gray-200 hover:text-gray-300 dark:hover:text-white transition-colors text-sm"
          >
            Services
          </button>
          <Link
            href="/blog"
            className="text-white dark:text-gray-200 hover:text-gray-300 dark:hover:text-white transition-colors text-sm"
          >
            Blog
          </Link>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-white dark:text-gray-200 hover:text-gray-300 dark:hover:text-white transition-colors text-sm"
          >
            Contact
          </button>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <SocialLinks color="white" hoverColor="gray-300" size="small" />
        </div>
      </div>
    </div>
  )
}
