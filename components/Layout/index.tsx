import React from "react"
import { Footer } from "../Footer"
import { StickyNav } from "../StickyNav"
import { SeoHead } from "./SeoHead"

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <SeoHead />
    <StickyNav />
    {children}
    <Footer />
  </>
)
