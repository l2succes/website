import type { NextPage } from "next"
import { SiteShell } from "../../components/Site/SiteShell"
import { CryptoStory } from "../../components/Site/CryptoStory"

// A pitch for one company, shared by link only — kept out of search and site navigation.
const Arcade: NextPage = () => (
  <SiteShell
    title="Luc Succès × Arcade"
    description="Why I'm a fit for Arcade's founding mobile engineer role: Mango Markets on Solana, the Rainbow wallet, and Blaze."
    path="/work/arcade"
    noindex
  >
    <CryptoStory variant="arcade" />
  </SiteShell>
)

export default Arcade
