/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
