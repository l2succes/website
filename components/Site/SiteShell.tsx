import React, { useEffect } from "react"
import { SeoHead } from "../Layout/SeoHead"
import { SiteNav } from "./SiteNav"
import { Cursor } from "./Cursor"
import { Contact } from "./Contact"
import { ScrollTrigger, useSmoothScroll } from "../../lib/site/motion"

interface SiteShellProps {
  children: React.ReactNode
  navVisible?: boolean
  title?: string
  description?: string
  path?: string
}

// Chrome shared by every page in the new design: smooth scroll, nav, cursor, grain and the contact footer.
export const SiteShell = ({ children, navVisible = true, title, description, path }: SiteShellProps) => {
  useSmoothScroll()

  useEffect(() => {
    document.documentElement.classList.add("ls-root")
    // Pins change the page height; measure again once the real fonts are in.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => document.documentElement.classList.remove("ls-root")
  }, [])

  return (
    <div className="ls">
      <SeoHead title={title} description={description} path={path} />
      <SiteNav visible={navVisible} />
      <Cursor />
      <div className="ls-grain" aria-hidden="true" />
      {children}
      <Contact />
    </div>
  )
}
