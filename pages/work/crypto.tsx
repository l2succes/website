import type { NextPage } from "next"
import { SiteShell } from "../../components/Site/SiteShell"
import { CryptoStory } from "../../components/Site/CryptoStory"

const Crypto: NextPage = () => (
  <SiteShell
    title="Crypto & mobile wallets — Luc Succès"
    description="Case study: the Solana mobile app for Mango Markets, the Rainbow wallet, and Blaze — crypto trading and wallet apps since 2021."
    path="/work/crypto"
  >
    <CryptoStory variant="crypto" />
  </SiteShell>
)

export default Crypto
