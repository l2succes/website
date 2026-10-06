import "../styles/globals.css"
import "../styles/devices.css"
import "../styles/site.css"

import type { AppProps } from "next/app"
import { defaultFont, demiboldFont, italicFont, monoFont } from "typography"

// Only the landing page has an intro (the LS portal in PortalHero); every other page opens straight away.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${defaultFont.variable} ${demiboldFont.variable} ${italicFont.variable} ${monoFont.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
