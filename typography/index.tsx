import localFont from "next/font/local"

export const defaultFont = localFont({
  src: "../public/fonts/TTNormsProNormal.woff2",
  variable: "--font-sans",
})
export const demiboldFont = localFont({
  src: "../public/fonts/TTNormsProDemiBold.woff2",
  variable: "--font-demibold",
})
export const italicFont = localFont({
  src: "../public/fonts/TTNormsProItalic.woff2",
  variable: "--font-italic",
})
