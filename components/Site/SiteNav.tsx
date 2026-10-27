import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { scrollToTarget } from "../../lib/site/motion"
import { LS_PATH } from "../../lib/site/ls-path"

// `section` links scroll within the home page; `page` links route. Contact lives at the foot of every page.
const LINKS = [
  { label: "About", href: "/#about", section: "about" },
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact", section: "contact", everywhere: true },
]

export const useMexicoCityTime = () => {
  const [time, setTime] = useState("")
  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Mexico_City",
    })
    const update = () => setTime(format.format(new Date()))
    update()
    const id = window.setInterval(update, 15000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export const SiteNav = ({ visible }: { visible: boolean }) => {
  const time = useMexicoCityTime()
  const { pathname } = useRouter()
  const isHome = pathname === "/"

  return (
    <header className={`ls-nav ${visible ? "is-visible" : ""}`}>
      {isHome ? (
        <button className="ls-nav__mark" onClick={() => scrollToTarget(0)} aria-label="Back to top">
          <svg viewBox="290 190 462 670" aria-hidden="true">
            <path d={LS_PATH} fill="currentColor" />
          </svg>
        </button>
      ) : (
        <Link href="/" className="ls-nav__mark" aria-label="Home">
          <svg viewBox="290 190 462 670" aria-hidden="true">
            <path d={LS_PATH} fill="currentColor" />
          </svg>
        </Link>
      )}
      <nav className="ls-nav__links ls-mono" aria-label="Site">
        {LINKS.map((link) => {
          const inPage = link.section && (isHome || link.everywhere)
          return (
            <Link
              key={link.label}
              href={link.href}
              aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined}
              onClick={(e) => {
                if (!inPage) return
                e.preventDefault()
                scrollToTarget(link.section!)
              }}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
      <p className="ls-nav__time ls-mono">
        <span className="ls-nav__dot" /> CDMX {time}
      </p>
    </header>
  )
}
