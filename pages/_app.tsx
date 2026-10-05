import "../styles/globals.css"
import "../styles/devices.css"
import "../styles/site.css"

import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { defaultFont, demiboldFont, italicFont, monoFont } from "typography"
import { useState, useEffect } from "react"
import { SplashScreen } from "../components/SplashScreen"

function MyApp({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  // The home page runs its own intro.
  const isHome = useRouter().pathname === "/"

  useEffect(() => {
    // Check if this is the first load
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash")
    if (hasSeenSplash) {
      setShowSplash(false)
      setIsFirstLoad(false)
    } else {
      sessionStorage.setItem("hasSeenSplash", "true")
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <main
      className={`${defaultFont.variable} ${demiboldFont.variable} ${italicFont.variable} ${monoFont.variable} font-sans`}
    >
      {showSplash && isFirstLoad && !isHome && <SplashScreen onComplete={handleSplashComplete} />}
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
