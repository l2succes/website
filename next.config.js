/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The résumé PDF export runs its own dev server in a separate build dir.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async rewrites() {
    return [
      {
        source: "/greenchip-proposal",
        destination: "/greenchip-proposal/index.html",
      },
    ]
  },
}

module.exports = nextConfig
