import localFont from "next/font/local"
import { Fragment_Mono } from "next/font/google"

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
export const monoFont = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
})
