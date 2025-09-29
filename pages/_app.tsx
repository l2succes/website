import "../styles/globals.css"
import "../styles/devices.css"

import type { AppProps } from "next/app"
import { defaultFont } from "typography"
import { useState, useEffect } from "react"
import { SplashScreen } from "../components/SplashScreen"

function MyApp({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

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
    <main className={`${defaultFont.variable} font-sans`}>
      {showSplash && isFirstLoad && <SplashScreen onComplete={handleSplashComplete} />}
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
