const CLOSET_ORIGIN = "https://luc-closet.agreeablemoss-eb6e0eb3.eastus.azurecontainerapps.io"
const TO_DAYANA_ORIGIN = "https://to-dayana.vercel.app"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The résumé PDF export runs its own dev server in a separate build dir.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async rewrites() {
    return [
      // The wardrobe backend authenticates all pages, APIs and media.
      { source: "/closet", destination: `${CLOSET_ORIGIN}/closet` },
      { source: "/closet/:path*", destination: `${CLOSET_ORIGIN}/closet/:path*` },
      {
        source: "/greenchip-proposal",
        destination: "/greenchip-proposal/index.html",
      },
      {
        source: "/austin-library",
        destination: "/austin-library/index.html",
      },
      // A private letter, deployed as its own Vercel project (to-dayana) with
      // basePath "/to-dayana" and served here (Next.js multi-zones).
      {
        source: "/to-dayana",
        destination: `${TO_DAYANA_ORIGIN}/to-dayana`,
      },
      {
        source: "/to-dayana/:path*",
        destination: `${TO_DAYANA_ORIGIN}/to-dayana/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
