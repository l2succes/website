import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { gsap, MOTION_OK, prefersReducedMotion } from "../../lib/site/motion"
import { EMAIL } from "../../lib/site/content"

/**
 * Crypto & mobile-wallet case study, rendered two ways:
 * - "crypto": the public case study at /work/crypto
 * - "arcade": the same story pitched to Arcade (founding mobile engineer) at /work/arcade
 * Ink and bone like the rest of the site; each company's section takes that company's own color.
 */

export type CryptoVariant = "crypto" | "arcade"

const FACTS = [
  { k: "Focus", v: "Mobile crypto · Trading · Wallets" },
  { k: "Years", v: "2021 — Present" },
  { k: "Platforms", v: "iOS · Android · Web" },
  { k: "Chains", v: "Solana · Ethereum / EVM" },
]

const PROOF = [
  { k: "500K+", v: "downloads in two weeks" },
  { k: "#1", v: "in the App Store, in several countries" },
  { k: "Spotify · Artsy", v: "consumer apps at scale" },
  { k: "Open source", v: "React Native contributions" },
]

// "Arcade needs X -> I've already shipped X"
const ARCADE_FIT = [
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

const MANGO_PROTOCOL = [
  "Spot trading + perpetual futures with leverage",
  "Cross-margin: one account, many positions",
  "Lending & borrowing against collateral",
  "Live order books, fills and funding — streamed from Solana",
  "Jupiter-powered swaps for best-price routing",
]

const MANGO_MOBILE = [
  "Non-custodial Solana wallet with a live portfolio across SOL, USDC and more",
  "Mango Earn — put long-term holds to work earning yield",
  "Convert / swap between coins (USDC ↔ BTC and friends)",
  "P2P payments by phone number or QR — pay people before they have the app",
  "Buy crypto with cash, and withdraw back to a bank account",
]

const MANGO_STACK = [
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
]

const RAINBOW_STACK = [
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
]

const BLAZE_VIDEOS = [
  { src: "https://blaze.money/images/features/blaze-payment.mp4", label: "Send" },
  { src: "https://blaze.money/images/features/blaze-feed.mp4", label: "Feed" },
  { src: "https://blaze.money/images/features/blaze-card-payment.mp4", label: "Card" },
  { src: "https://blaze.money/images/features/blaze-request.mp4", label: "Request" },
]

const BLAZE_STACK = [
  "React Native",
  "Stablecoins / USDC",
  "TypeScript",
  "Node.js",
  "AI agents",
  "MCP servers",
  "iOS · Android · Web",
]

const ARCHITECTURE = [
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
    d: "PostHog product analytics + Sentry crash/error monitoring, plus Firebase messaging and remote config — the toolkit for running a consumer app at scale.",
  },
]

const Chips = ({ items }: { items: string[] }) => (
  <ul className="ls-cs-chips">
    {items.map((t) => (
      <li key={t} className="ls-mono">
        {t}
      </li>
    ))}
  </ul>
)

const Lines = ({ lines }: { lines: React.ReactNode[] }) => (
  <>
    {lines.map((line, i) => (
      <span key={i} className="ls-line">
        <span>{line}</span>
      </span>
    ))}
  </>
)

// A small random walk so the illustrative terminal feels live. Deterministic seed keeps SSR and first paint equal.
const BASE_PRICE = 148.2
function useTicker() {
  const [tick, setTick] = useState({ price: BASE_PRICE, dir: 0, series: [70, 62, 66, 48, 52, 34, 40, 22, 30, 14, 20] })
  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = window.setInterval(() => {
      setTick((prev) => {
        const step = Math.round((Math.random() - 0.48) * 14) / 100
        const price = Math.max(140, Math.min(156, prev.price + step))
        const y = Math.max(6, Math.min(84, 70 - (price - 144) * 5))
        return { price, dir: Math.sign(step), series: [...prev.series.slice(1), y] }
      })
    }, 1400)
    return () => window.clearInterval(id)
  }, [])
  return tick
}

const Terminal = () => {
  const { price, dir, series } = useTicker()
  const change = ((price - 142.21) / 142.21) * 100
  const points = series.map((y, i) => `${i * 40},${y}`).join(" ")
  const bids = [0.02, 0.09, 0.16, 0.24].map((d, i) => ({
    p: (price - d).toFixed(2),
    s: ["1,204", "3,980", "812", "6,540"][i],
    w: [28, 64, 18, 92][i],
  }))
  const asks = [0.04, 0.11, 0.19, 0.26].map((d, i) => ({
    p: (price + d).toFixed(2),
    s: ["2,110", "740", "4,205", "1,660"][i],
    w: [38, 14, 70, 30][i],
  }))

  return (
    <figure className="ls-terminal" aria-label="Illustrative rebuild of the Mango trading surface">
      <header className="ls-terminal__head">
        <div className="ls-terminal__pair">
          <Image src="/images/crypto/mango-markets/twitter-image.png" alt="" width={36} height={36} />
          <div>
            <strong>SOL-PERP</strong>
            <span className="ls-mono">Mango Markets · Solana</span>
          </div>
        </div>
        <div className="ls-terminal__price">
          <strong className={dir > 0 ? "is-up" : dir < 0 ? "is-down" : ""}>${price.toFixed(2)}</strong>
          <span className="ls-mono">
            {change >= 0 ? "+" : ""}
            {change.toFixed(2)}%
          </span>
        </div>
      </header>
      <svg viewBox="0 0 400 90" className="ls-terminal__chart" aria-hidden="true">
        <polyline points={points} />
      </svg>
      <div className="ls-terminal__book ls-mono">
        <div>
          <p>Bids</p>
          {bids.map((b) => (
            <div key={b.s} className="ls-terminal__row is-bid" style={{ "--depth": `${b.w}%` } as React.CSSProperties}>
              <span>{b.p}</span>
              <span>{b.s}</span>
            </div>
          ))}
        </div>
        <div>
          <p>Asks</p>
          {asks.map((a) => (
            <div key={a.s} className="ls-terminal__row is-ask" style={{ "--depth": `${a.w}%` } as React.CSSProperties}>
              <span>{a.p}</span>
              <span>{a.s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ls-terminal__actions ls-mono" aria-hidden="true">
        <span>Buy / Long</span>
        <span>Sell / Short</span>
      </div>
      <figcaption className="ls-mono">Illustrative rebuild of the Mango trading surface</figcaption>
    </figure>
  )
}

export const CryptoStory = ({ variant }: { variant: CryptoVariant }) => {
  const arcade = variant === "arcade"
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(".ls-cs-hero .ls-line > span", {
          yPercent: 105,
          duration: 1.3,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.15,
        })
        gsap.from(".ls-cs-hero__intro, .ls-cs-facts > div", {
          autoAlpha: 0,
          y: 20,
          duration: 1,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.55,
        })

        gsap.utils.toArray<HTMLElement>(".ls-cs-section .ls-cs-title").forEach((title) => {
          gsap.from(title.querySelectorAll(".ls-line > span"), {
            yPercent: 105,
            duration: 1.1,
            stagger: 0.07,
            ease: "expo.out",
            scrollTrigger: { trigger: title, start: "top 85%" },
          })
        })

        gsap.utils.toArray<HTMLElement>(".ls-cs-reveal").forEach((group) => {
          gsap.from(group.children, {
            y: 32,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.07,
            ease: "expo.out",
            scrollTrigger: { trigger: group, start: "top 85%" },
          })
        })

        gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
          const amount = Number(el.dataset.drift)
          gsap.fromTo(
            el,
            { yPercent: amount },
            {
              yPercent: -amount,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            }
          )
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root} className="ls-cs">
      {/* Hero */}
      <header className="ls-cs-hero">
        <Link href="/work" className="ls-cs-back ls-mono">
          <span aria-hidden="true">←</span> All work
        </Link>
        <p className="ls-mono ls-cs-eyebrow">
          {arcade ? "For Arcade · Founding mobile engineer" : "Case study · Crypto & mobile wallets"}
        </p>
        <h1 className="ls-display ls-cs-hero__title">
          <Lines
            lines={[
              "I've been building",
              <em key="a" className="ls-italic">
                crypto trading
              </em>,
              <>
                <em className="ls-italic">& wallet apps</em> since 2021.
              </>,
            ]}
          />
        </h1>
        <p className="ls-cs-hero__intro">
          I built the Solana mobile app for Mango Markets, a DEX. I worked at Rainbow, one of the most-loved consumer
          crypto wallets — then left to build my own app, Blaze.{" "}
          {arcade ? (
            <>
              Exactly the problem space <strong>Arcade</strong> is building in: React Native, Solana, perps, and wallets
              that feel great.
            </>
          ) : (
            <>React Native, Solana, perps, and wallets that feel great.</>
          )}
        </p>
        <dl className="ls-cs-facts">
          {FACTS.map((f) => (
            <div key={f.k}>
              <dt className="ls-mono">{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Who I am + Arcade fit */}
      <section className="ls-cs-section ls-cs-bone">
        <div className="ls-cs-who">
          <div>
            <p className="ls-mono ls-cs-eyebrow">Who I am</p>
            <h2 className="ls-display ls-cs-title">
              <Lines lines={["Hi, I'm Luc."]} />
            </h2>
            <div className="ls-cs-prose">
              <p>
                I&apos;m a multi-time founder and mobile developer. I&apos;ve worked at companies like{" "}
                <strong>Spotify</strong> and <strong>Artsy</strong>, where I shipped consumer apps at scale and did
                React Native open-source work.
              </p>
              <p>
                I&apos;ve built apps that passed <strong>500,000 downloads in two weeks</strong> and went{" "}
                <strong>#1 in the App Store</strong> globally in several countries. For the last few years that&apos;s
                all been pointed at crypto — a Solana DEX app, a top consumer wallet, and now my own payments company.
              </p>
            </div>
          </div>
          <dl className="ls-cs-proof ls-cs-reveal">
            {PROOF.map((p) => (
              <div key={p.k}>
                <dt className="ls-display">{p.k}</dt>
                <dd className="ls-mono">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {arcade && (
          <div className="ls-cs-fit">
            <p className="ls-mono ls-cs-eyebrow">Why this maps to Arcade</p>
            <h2 className="ls-display ls-cs-title">
              <Lines
                lines={[
                  "The founding-engineer",
                  <>
                    checklist, <em className="ls-italic">already shipped.</em>
                  </>,
                ]}
              />
            </h2>
            <p className="ls-cs-lede">
              Arcade is a &ldquo;Robinhood for crypto&rdquo; — a React Native trading app on Solana &amp; Hyperliquid,
              scaling to tens of thousands of daily traders. Here&apos;s each thing the role needs, next to work
              I&apos;ve already put in users&apos; hands.
            </p>
            <div className="ls-fit" role="table" aria-label="Arcade's needs and what I've shipped">
              <div className="ls-fit__row ls-fit__row--head ls-mono" role="row">
                <span role="columnheader">Arcade needs</span>
                <span role="columnheader">Already shipped</span>
                <span role="columnheader">Where</span>
              </div>
              <div className="ls-cs-reveal">
                {ARCADE_FIT.map((row) => (
                  <div key={row.need} className="ls-fit__row" role="row">
                    <span role="cell" className="ls-fit__need">
                      {row.need}
                    </span>
                    <span role="cell" className="ls-fit__shipped">
                      <svg viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {row.shipped}
                    </span>
                    <span role="cell" className="ls-fit__proof">
                      {row.proof}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Mango */}
      <section className="ls-cs-section ls-cs-brand ls-cs-mango">
        <div className="ls-cs-split">
          <div>
            <p className="ls-mono ls-cs-eyebrow">Solana DEX · mobile</p>
            <h2 className="ls-display ls-cs-title ls-cs-title--xl">
              <Lines lines={["Mango", "Markets"]} />
            </h2>
            <div className="ls-cs-prose">
              <p>
                Mango was one of Solana&apos;s flagship DeFi protocols — an on-chain exchange for spot, perpetual
                futures, lending and borrowing, all cross-margined against a single account. I built the{" "}
                <strong>Solana mobile app</strong> for it, and worked on the V3 trading interface.
              </p>
              <p>
                {arcade ? "This is the exact surface Arcade is building: a" : "A"} dense trading UI wired straight to a
                Solana program, streaming order books and prices, plus a mobile wallet where every tap moves real money
                on-chain and signing has to be bulletproof.
              </p>
            </div>
            <div className="ls-cs-lists">
              <div>
                <h3 className="ls-mono">The protocol</h3>
                <ul>
                  {MANGO_PROTOCOL.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="ls-mono">What I built on mobile</h3>
                <ul>
                  {MANGO_MOBILE.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className="ls-mono ls-cs-sub">Architecture &amp; stack</h3>
            <Chips items={MANGO_STACK} />
            <div className="ls-cs-links">
              <Link className="ls-cs-link ls-mono" href="/work/mango-pay" data-cursor="Open">
                The full Mango Pay project <span aria-hidden="true">→</span>
              </Link>
              <a
                className="ls-cs-link ls-mono"
                href="https://github.com/l2succes/mango-ui-v3"
                target="_blank"
                rel="noreferrer"
              >
                View the repo <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="ls-cs-visual">
            <Terminal />
            <div className="ls-cs-shots">
              <Image
                src="/images/crypto/mango-pay/mango-app-wallet-2.png"
                alt="Mango mobile — portfolio and Mango Earn"
                width={832}
                height={1700}
                data-drift="8"
              />
              <Image
                src="/images/crypto/mango-pay/mango-app-wallet-1.png"
                alt="Mango mobile — convert USDC to BTC"
                width={832}
                height={1700}
                data-drift="-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rainbow */}
      <section className="ls-cs-section ls-cs-brand ls-cs-rainbow">
        <div className="ls-cs-split ls-cs-split--center">
          <div>
            <p className="ls-mono ls-cs-eyebrow">Consumer wallet at scale</p>
            <h2 className="ls-display ls-cs-title ls-cs-title--xl">
              <Lines lines={["Rainbow"]} />
            </h2>
            <div className="ls-cs-prose">
              <p>
                Rainbow is one of the most-loved consumer crypto wallets — known for making self-custody feel warm and
                human instead of intimidating. I worked at Rainbow on the React Native app
                {arcade ? ", in the same stack Arcade listed almost line-for-line." : "."}
              </p>
              <p>
                Today Rainbow even runs <strong>perps</strong> and <strong>predictions</strong> alongside swaps and
                sends —{" "}
                {arcade
                  ? "so the trading UX Arcade wants is work I've lived inside a wallet shipping to millions."
                  : "trading UX living inside a wallet that ships to millions."}{" "}
                I left Rainbow to build my own app, Blaze.
              </p>
            </div>
            <h3 className="ls-mono ls-cs-sub">{arcade ? "Stack (≈ Arcade's list)" : "Stack"}</h3>
            <Chips items={RAINBOW_STACK} />
            <div className="ls-cs-links">
              <a className="ls-cs-link ls-mono" href="https://rainbow.me" target="_blank" rel="noreferrer">
                rainbow.me <span aria-hidden="true">↗</span>
              </a>
              <a
                className="ls-cs-link ls-mono"
                href="https://github.com/rainbow-me/rainbow"
                target="_blank"
                rel="noreferrer"
              >
                Open-source repo <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="ls-cs-visual ls-cs-visual--phone">
            <div className="ls-phone ls-phone--modern ls-cs-phone" data-drift="10">
              <div className="ls-phone__screen">
                <Image
                  src="/images/crypto/rainbow/home-screen.png"
                  alt="Rainbow wallet home screen"
                  fill
                  sizes="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blaze */}
      <section className="ls-cs-section ls-cs-brand ls-cs-blaze">
        <div className="ls-cs-split ls-cs-split--wide">
          <div>
            <p className="ls-mono ls-cs-eyebrow">Built from scratch</p>
            <h2 className="ls-display ls-cs-title ls-cs-title--xl">
              <Lines lines={["Blaze"]} />
            </h2>
            <div className="ls-cs-prose">
              <p>
                The app I left Rainbow to build, and my current company. Blaze is a stablecoin payments app I built from
                zero — send, request and spend money globally on crypto rails, with a card and a social feed, plus
                production AI agents under the hood. React Native, iOS + Android + web, shipping to real users.
              </p>
            </div>
            <h3 className="ls-mono ls-cs-sub">Stack</h3>
            <Chips items={BLAZE_STACK} />
            <div className="ls-cs-links">
              <a className="ls-cs-link ls-mono" href="https://blaze.money" target="_blank" rel="noreferrer">
                blaze.money <span aria-hidden="true">↗</span>
              </a>
              <Link className="ls-cs-link ls-mono" href="/work/blaze">
                Blaze case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="ls-cs-videos ls-cs-reveal">
            {BLAZE_VIDEOS.map((v) => (
              <figure key={v.src}>
                {/* remote host not whitelisted for next/image; raw video as on the Blaze page */}
                <video
                  src={v.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={`Blaze — ${v.label}`}
                />
                <figcaption className="ls-mono">{v.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="ls-cs-section ls-cs-ink">
        <p className="ls-mono ls-cs-eyebrow">The hard parts, already solved</p>
        <h2 className="ls-display ls-cs-title">
          <Lines
            lines={[
              "Crypto-mobile architecture",
              <>
                I&apos;ve <em className="ls-italic">shipped.</em>
              </>,
            ]}
          />
        </h2>
        <div className="ls-cs-arch ls-cs-reveal">
          {ARCHITECTURE.map((c) => (
            <div key={c.t}>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ls-cs-section ls-cs-ink ls-cs-cta">
        <h2 className="ls-display ls-cs-title ls-cs-title--xl">
          {arcade ? (
            <Lines
              lines={[
                "Let's build",
                <em key="a" className="ls-italic">
                  Arcade.
                </em>,
              ]}
            />
          ) : (
            <Lines
              lines={[
                "Building in",
                <em key="a" className="ls-italic">
                  crypto?
                </em>,
              ]}
            />
          )}
        </h2>
        <div className="ls-cs-cta__body">
          <p>
            {arcade
              ? "Founding mobile engineer is exactly the job I've been rehearsing for years — React Native, Solana, perps, wallets, payments. I'd love to be your first and only front-end hire and architect the app from day one."
              : "If you're building a trading app, a wallet, or payments on crypto rails, I'd like to hear about it — especially at the stage where the first version of the app still has to be built."}
          </p>
          <div className="ls-cs-links">
            <a className="ls-pill ls-mono" href={`mailto:${EMAIL}${arcade ? "?subject=Arcade" : ""}`}>
              Get in touch
            </a>
            <a className="ls-cs-link ls-mono" href="https://github.com/l2succes" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <Link href="/work/blaze" className="ls-cs-next" data-cursor="Next">
          <span className="ls-mono">Next project</span>
          <span className="ls-display">
            Blaze <span aria-hidden="true">→</span>
          </span>
        </Link>
      </section>
    </main>
  )
}
