import type { NextPage } from "next"
import { Layout } from "../../components/Layout"
import Link from "next/link"
import Image from "next/image"

/**
 * Crypto & mobile-wallet case study.
 * Tailored pitch for Arcade (founding mobile engineer, React Native crypto trading app).
 * Palette follows the site logo: #121212 ink, #FFFFFF, #979797 gray.
 */

const GRAY = "#979797"

// "Arcade needs X -> I've already shipped X"
const arcadeFit: { need: string; shipped: string; proof: string }[] = [
  {
    need: "React Native + Expo app from scratch",
    shipped: "Shipped RN wallets end-to-end",
    proof: "Rainbow (RN 0.81 / Expo 54) · Blaze (built from zero) · Mango mobile app",
  },
  {
    need: "Reanimated + Skia for 60fps UI",
    shipped: "Production Skia + Reanimated surfaces",
    proof: "Rainbow runs @shopify/react-native-skia + Reanimated + Shopify perf tooling",
  },
  {
    need: "Solana + perps trading UX",
    shipped: "Built the mobile app for a Solana DEX",
    proof: "Mango Markets — spot, perps, lending, cross-margin on Solana",
  },
  {
    need: "Crypto wallet + on/off-ramp + payments",
    shipped: "Shipped a full consumer crypto wallet",
    proof: "Mango mobile — Solana wallet, P2P payments, buy with cash, earn, bank withdraw",
  },
  {
    need: "viem / wallet signing / key management",
    shipped: "Wallet connect, signing, HD keys, Ledger",
    proof: "Rainbow (ethers, WalletConnect/Reown, Ledger BLE) · Mango (wallet-adapter)",
  },
  {
    need: "Scale to 25–50K+ DAU, PostHog + Sentry",
    shipped: "Consumer scale, and the tooling to run it",
    proof: "500K+ downloads in 2 weeks · #1 App Store in several countries · Spotify · Artsy",
  },
]

const StackChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-300">
    {children}
  </span>
)

const SectionLabel: React.FC<{ n: string; children: React.ReactNode }> = ({ n, children }) => (
  <div className="mb-4 flex items-center gap-3">
    <span className="font-mono text-sm text-white">{n}</span>
    <span className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent" />
    <span className="font-mono text-xs uppercase tracking-widest text-gray-500">{children}</span>
  </div>
)

// iPhone frame for the un-framed Rainbow screenshot
const PhoneFrame: React.FC<{ src: string; alt: string; w?: number; h?: number }> = ({
  src,
  alt,
  w = 280,
  h = 560,
}) => (
  <div className="relative" style={{ width: w, height: h }}>
    <div className="absolute inset-0 rounded-[44px] bg-black p-3 shadow-2xl ring-1 ring-white/15">
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-black">
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
        <Image src={src} alt={alt} width={w} height={h} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  </div>
)

const Crypto: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-[#121212] text-white">
        {/* subtle monochrome glow */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(60% 40% at 15% 0%, rgba(255,255,255,0.07), transparent 60%), radial-gradient(50% 35% at 85% 10%, rgba(151,151,151,0.08), transparent 60%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          {/* Back */}
          <Link href="/#work">
            <div className="mb-10 flex cursor-pointer items-center gap-2 text-gray-400 transition-colors hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Back to projects</span>
            </div>
          </Link>

          {/* ───────────── Hero ───────────── */}
          <section className="mb-20 md:mb-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-white" />
              Crypto · Mobile Wallets · Solana &amp; EVM
            </div>
            <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] md:text-7xl">
              I&apos;ve been building{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, #FFFFFF, ${GRAY})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                crypto trading &amp; wallet apps
              </span>{" "}
              since 2021.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              I built the Solana mobile app for Mango Markets, a DEX. I worked at Rainbow, one of the most-loved
              consumer crypto wallets — then left to build my own app, Blaze. Exactly the problem space{" "}
              <span className="text-white">Arcade</span> is building in: React Native, Solana, perps, and wallets that
              feel great.
            </p>

            <div className="mt-12 flex flex-wrap gap-10 text-lg">
              <div>
                <div className="mb-1 text-sm text-gray-500">Focus</div>
                <div className="font-semibold">Mobile crypto · Trading · Wallets</div>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-500">Years</div>
                <div className="font-semibold">2021 — Present</div>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-500">Platforms</div>
                <div className="font-semibold">iOS · Android · Web</div>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-500">Chains</div>
                <div className="font-semibold">Solana · Ethereum / EVM</div>
              </div>
            </div>
          </section>

          {/* ───────────── Who I am ───────────── */}
          <section className="mb-24">
            <SectionLabel n="01">Who I am</SectionLabel>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">Hi, I&apos;m Luc.</h2>
                <p className="mb-5 text-lg leading-relaxed text-gray-300">
                  I&apos;m a multi-time founder and mobile developer. I&apos;ve worked at companies like{" "}
                  <span className="text-white">Spotify</span> and <span className="text-white">Artsy</span>, where I
                  shipped consumer apps at scale and did React Native open-source work.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  I&apos;ve built apps that passed <span className="text-white">500,000 downloads in two weeks</span>{" "}
                  and went <span className="text-white">#1 in the App Store</span> globally in several countries. For
                  the last few years that&apos;s all been pointed at crypto — a Solana DEX app, a top consumer wallet,
                  and now my own payments company.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "500K+", v: "downloads in 2 weeks" },
                  { k: "#1", v: "App Store, several countries" },
                  { k: "Spotify · Artsy", v: "consumer apps at scale" },
                  { k: "Open source", v: "React Native contributions" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-1 text-2xl font-bold leading-tight">{s.k}</div>
                    <div className="text-sm text-gray-400">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────────── Arcade fit ───────────── */}
          <section className="mb-24">
            <SectionLabel n="02">Why this maps to Arcade</SectionLabel>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">The founding-engineer checklist, already shipped</h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-400">
              Arcade is a &ldquo;Robinhood for crypto&rdquo; — a React Native trading app on Solana &amp; Hyperliquid,
              scaling to tens of thousands of daily traders. Here&apos;s each thing the role needs, next to work
              I&apos;ve already put in users&apos; hands.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {arcadeFit.map((row) => (
                <div
                  key={row.need}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <div className="mb-2 text-sm font-medium text-gray-500">Arcade needs</div>
                  <div className="mb-4 text-lg font-semibold text-white">{row.need}</div>
                  <div className="mb-1 flex items-center gap-2 text-sm font-medium text-white">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 10.7a1 1 0 111.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {row.shipped}
                  </div>
                  <div className="text-sm leading-relaxed text-gray-400">{row.proof}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ───────────── Mango Markets ───────────── */}
          <section className="mb-28">
            <SectionLabel n="03">Solana DEX · mobile</SectionLabel>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">Mango Markets</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  Mango was one of Solana&apos;s flagship DeFi protocols — an on-chain exchange for spot, perpetual
                  futures, lending and borrowing, all cross-margined against a single account. I built the{" "}
                  <span className="text-white">Solana mobile app</span> for it, and worked on the V3 trading interface.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-gray-300">
                  This is the exact surface Arcade is building: a dense trading UI wired straight to a Solana program,
                  streaming order books and prices, plus a mobile wallet where every tap moves real money on-chain and
                  signing has to be bulletproof.
                </p>

                <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-gray-500">The protocol</h3>
                <ul className="mb-8 space-y-2 text-gray-300">
                  <li>• Spot trading + perpetual futures with leverage</li>
                  <li>• Cross-margin: one account, many positions</li>
                  <li>• Lending &amp; borrowing against collateral</li>
                  <li>• Live order books, fills and funding — streamed from Solana</li>
                  <li>• Jupiter-powered swaps for best-price routing</li>
                </ul>

                <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-gray-500">
                  What I built on mobile
                </h3>
                <ul className="mb-8 space-y-2 text-gray-300">
                  <li>• Non-custodial Solana wallet with a live portfolio across SOL, USDC and more</li>
                  <li>• Mango Earn — put long-term holds to work earning yield</li>
                  <li>• Convert / swap between coins (USDC ↔ BTC and friends)</li>
                  <li>• P2P payments by phone number or QR — pay people before they have the app</li>
                  <li>• Buy crypto with cash, and withdraw back to a bank account</li>
                </ul>

                <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-gray-500">
                  Architecture &amp; stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Solana",
                    "@blockworks-foundation/mango-client",
                    "@solana/wallet-adapter",
                    "Jupiter (@jup-ag)",
                    "Next.js",
                    "TypeScript",
                    "Zustand",
                    "Recharts",
                    "react-window",
                  ].map((t) => (
                    <StackChip key={t}>{t}</StackChip>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/l2succes/mango-ui-v3"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                  >
                    View the repo →
                  </a>
                </div>
              </div>

              {/* trading-terminal mock + app screenshots */}
              <div className="space-y-8">
                <div className="rounded-2xl border border-white/10 bg-[#0C0C0C] p-4 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/crypto/mango-markets/twitter-image.png"
                        alt="Mango Markets"
                        width={36}
                        height={36}
                        className="rounded-lg grayscale"
                      />
                      <div>
                        <div className="font-semibold">SOL-PERP</div>
                        <div className="text-xs text-gray-500">Mango Markets · Solana</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-lg text-white">$148.20</div>
                      <div className="text-xs text-gray-400">+4.21%</div>
                    </div>
                  </div>
                  <svg viewBox="0 0 400 90" className="mb-4 h-24 w-full">
                    <defs>
                      <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.30" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polyline
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      points="0,70 40,62 80,66 120,48 160,52 200,34 240,40 280,22 320,30 360,14 400,20"
                    />
                    <polygon
                      fill="url(#spark)"
                      points="0,70 40,62 80,66 120,48 160,52 200,34 240,40 280,22 320,30 360,14 400,20 400,90 0,90"
                    />
                  </svg>
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div>
                      <div className="mb-1 text-gray-500">Bids</div>
                      {[
                        ["148.18", "1,204"],
                        ["148.11", "3,980"],
                        ["148.04", "812"],
                        ["147.96", "6,540"],
                      ].map(([p, s]) => (
                        <div
                          key={p}
                          className="flex justify-between rounded px-2 py-1"
                          style={{ background: "rgba(255,255,255,0.07)" }}
                        >
                          <span className="text-white">{p}</span>
                          <span className="text-gray-500">{s}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="mb-1 text-gray-500">Asks</div>
                      {[
                        ["148.24", "2,110"],
                        ["148.31", "740"],
                        ["148.39", "4,205"],
                        ["148.46", "1,660"],
                      ].map(([p, s]) => (
                        <div
                          key={p}
                          className="flex justify-between rounded px-2 py-1"
                          style={{ background: "rgba(151,151,151,0.12)" }}
                        >
                          <span style={{ color: GRAY }}>{p}</span>
                          <span className="text-gray-500">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="rounded-lg bg-white py-2.5 text-sm font-semibold text-black">Buy / Long</button>
                    <button className="rounded-lg border border-white/25 py-2.5 text-sm font-semibold text-white">
                      Sell / Short
                    </button>
                  </div>
                  <p className="mt-3 text-center text-[11px] text-gray-600">
                    Illustrative rebuild of the Mango trading surface
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/images/crypto/mango-pay/mango-app-wallet-2.png"
                    alt="Mango mobile — portfolio and Mango Earn"
                    width={832}
                    height={1700}
                    className="w-[46%] max-w-[230px] drop-shadow-2xl"
                  />
                  <Image
                    src="/images/crypto/mango-pay/mango-app-wallet-1.png"
                    alt="Mango mobile — convert USDC to BTC"
                    width={832}
                    height={1700}
                    className="mt-10 w-[46%] max-w-[230px] drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ───────────── Rainbow ───────────── */}
          <section className="mb-28">
            <SectionLabel n="04">Consumer wallet at scale</SectionLabel>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">Rainbow</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  Rainbow is one of the most-loved consumer crypto wallets — known for making self-custody feel warm
                  and human instead of intimidating. I worked at Rainbow on the React Native app, in the same stack
                  Arcade listed almost line-for-line.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-gray-300">
                  Today Rainbow even runs <span className="text-white">perps</span> and{" "}
                  <span className="text-white">predictions</span> alongside swaps and sends — so the trading UX Arcade
                  wants is work I&apos;ve lived inside a wallet shipping to millions. I left Rainbow to build my own
                  app, Blaze.
                </p>

                <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-gray-500">
                  Stack (≈ Arcade&apos;s list)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native 0.81",
                    "Expo 54",
                    "@shopify/react-native-skia",
                    "Reanimated",
                    "Gesture Handler",
                    "ethers.js",
                    "WalletConnect / Reown",
                    "Ledger BLE",
                    "Firebase",
                    "PostHog",
                    "Sentry",
                    "Shopify RN Performance",
                  ].map((t) => (
                    <StackChip key={t}>{t}</StackChip>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://rainbow.me"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                  >
                    rainbow.me →
                  </a>
                  <a
                    href="https://github.com/rainbow-me/rainbow"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                  >
                    Open-source repo →
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <PhoneFrame
                  src="/images/crypto/rainbow/home-screen.png"
                  alt="Rainbow wallet home screen"
                  w={300}
                  h={650}
                />
              </div>
            </div>
          </section>

          {/* ───────────── Blaze ───────────── */}
          <section className="mb-28">
            <SectionLabel n="05">Built from scratch</SectionLabel>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Blaze</h2>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
              The app I left Rainbow to build, and my current company. Blaze is a stablecoin payments app I built from
              zero — send, request and spend money globally on crypto rails, with a card and a social feed, plus
              production AI agents under the hood. React Native, iOS + Android + web, shipping to real users.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                "https://blaze.money/images/features/blaze-payment.mp4",
                "https://blaze.money/images/features/blaze-feed.mp4",
                "https://blaze.money/images/features/blaze-card-payment.mp4",
                "https://blaze.money/images/features/blaze-request.mp4",
              ].map((src) => (
                <div key={src} className="h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#0C0C0C]">
                  {/* remote host not whitelisted for next/image; raw video as on the Blaze page */}
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video src={src} autoPlay loop muted playsInline className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-gray-500">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React Native",
                "Stablecoins / USDC",
                "TypeScript",
                "Node.js",
                "AI agents",
                "MCP servers",
                "iOS · Android · Web",
              ].map((t) => (
                <StackChip key={t}>{t}</StackChip>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://blaze.money"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
              >
                blaze.money →
              </a>
            </div>
          </section>

          {/* ───────────── Architecture deep-dive ───────────── */}
          <section className="mb-28">
            <SectionLabel n="06">The hard parts, already solved</SectionLabel>
            <h2 className="mb-10 text-4xl font-bold md:text-5xl">Crypto-mobile architecture I&apos;ve shipped</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  t: "Keys & signing",
                  d: "HD wallet generation, secure key storage, transaction signing, WalletConnect/Reown sessions, and Ledger hardware support. Every signature guarded because it moves real funds.",
                },
                {
                  t: "Real-time market data",
                  d: "Streaming order books, prices, funding and fills over RPC/websockets; Zustand stores and virtualized lists (react-window) so dense trading screens stay smooth.",
                },
                {
                  t: "On/off-ramps & payments",
                  d: "Buy with cash, convert between coins, P2P by phone/QR, and bank withdrawals — the full money-in, money-out loop on Solana and EVM.",
                },
                {
                  t: "60fps mobile UI",
                  d: "Reanimated + @shopify/react-native-skia for buttery charts, gestures and transitions, with Shopify's RN performance tooling to keep it fast on real devices.",
                },
                {
                  t: "Swaps & routing",
                  d: "Jupiter aggregation on Solana for best-price execution; swap flows that abstract slippage and routing away from the user.",
                },
                {
                  t: "Observability at scale",
                  d: "PostHog product analytics + Sentry crash/error monitoring, plus Firebase messaging and remote config — the toolkit for running a consumer app at 25–50K+ DAU.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-3 text-lg font-semibold">{c.t}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ───────────── CTA ───────────── */}
          <section className="mb-20">
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-10 md:p-14">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let&apos;s build Arcade.</h2>
              <p className="mb-8 max-w-2xl text-lg text-gray-300">
                Founding mobile engineer is exactly the job I&apos;ve been rehearsing for years — React Native, Solana,
                perps, wallets, payments. I&apos;d love to be your first and only front-end hire and architect the app
                from day one.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contact">
                  <span className="inline-block cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200">
                    Get in touch
                  </span>
                </Link>
                <a
                  href="https://github.com/l2succes"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/25 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Next project */}
          <div className="border-t border-white/10 pt-12">
            <Link href="/work/blaze">
              <div className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.07]">
                <div>
                  <div className="mb-2 text-gray-500">Next Project</div>
                  <div className="text-3xl font-bold">Blaze</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Crypto
