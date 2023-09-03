import "../styles/globals.css"
import "../styles/devices.css"

import type { AppProps } from "next/app"
import { defaultFont } from "typography"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${defaultFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
