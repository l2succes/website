import type { NextPage } from "next"
import { useState } from "react"
import { SiteShell } from "../components/Site/SiteShell"
import { PortalHero } from "../components/Site/PortalHero"
import { Manifesto } from "../components/Site/Manifesto"
import { WorkReel } from "../components/Site/WorkReel"
import { Timeline } from "../components/Site/Timeline"
import { Marquee } from "../components/Site/Marquee"

const Home: NextPage = () => {
  const [introDone, setIntroDone] = useState(false)

  return (
    <SiteShell navVisible={introDone}>
      <PortalHero onIntroDone={() => setIntroDone(true)} />
      <Manifesto />
      <WorkReel />
      <Timeline />
      <Marquee />
    </SiteShell>
  )
}

export default Home
