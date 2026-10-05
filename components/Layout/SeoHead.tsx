import React from "react"
import Head from "next/head"

const DEFAULT_TITLE = "Luc Succès - Software Engineer, Product Designer & Entrepreneur"
const DEFAULT_DESCRIPTION =
  "Serial entrepreneur and full-stack engineer building Blaze. Expert in React, Next.js, TypeScript, product design, and startup strategy. Based in Mexico City."

interface SeoHeadProps {
  title?: string
  description?: string
  path?: string
  noindex?: boolean
}

export const SeoHead = ({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, path = "", noindex }: SeoHeadProps) => {
  const url = `https://lucsucces.com${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Luc Succès, software engineer, entrepreneur, product designer, full-stack developer, React, Next.js, TypeScript, startup founder, Blaze, Mexico City, web development, UX design" />
      <meta name="author" content="Luc Succès" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://lucsucces.com/images/profile-photo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lucsucces.com/images/profile-photo.jpg" />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" href="/images/ls-icon-solid.png" />
    </Head>
  )
}
