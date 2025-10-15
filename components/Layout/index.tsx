import React from "react"
import Head from "next/head"
import { Footer } from "../Footer"
import { StickyNav } from "../StickyNav"

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Head>
      <title>Luc Succès - Software Engineer, Product Designer & Entrepreneur</title>
      <meta name="description" content="Serial entrepreneur and full-stack engineer building Blaze. Expert in React, Next.js, TypeScript, product design, and startup strategy. Based in Mexico City." />
      <meta name="keywords" content="Luc Succès, software engineer, entrepreneur, product designer, full-stack developer, React, Next.js, TypeScript, startup founder, Blaze, Mexico City, web development, UX design" />
      <meta name="author" content="Luc Succès" />
      <meta property="og:title" content="Luc Succès - Software Engineer, Product Designer & Entrepreneur" />
      <meta property="og:description" content="Serial entrepreneur and full-stack engineer building Blaze. Expert in React, Next.js, TypeScript, product design, and startup strategy." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lucsucces.com" />
      <meta property="og:image" content="https://lucsucces.com/images/profile-photo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Luc Succès - Software Engineer, Product Designer & Entrepreneur" />
      <meta name="twitter:description" content="Serial entrepreneur and full-stack engineer building Blaze. Expert in React, Next.js, TypeScript, product design, and startup strategy." />
      <meta name="twitter:image" content="https://lucsucces.com/images/profile-photo.jpg" />
      <link rel="canonical" href="https://lucsucces.com" />
      <link rel="icon" type="image/png" href="/images/ls-icon-solid.png" />
    </Head>
    <StickyNav />
    {children}
    <Footer />
  </>
)
