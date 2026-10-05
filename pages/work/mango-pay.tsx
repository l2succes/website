import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import { SiteShell } from "../../components/Site/SiteShell"
import { gsap, MOTION_OK } from "../../lib/site/motion"

/**
 * Mango Pay — the consumer payments app on the Mango protocol (Solana).
 * The page takes the app's own palette: night ground, violet actions, mango-yellow active states, lime gains.
 */

const FACTS = [
  { k: "Role", v: "Product design · React Native" },
  { k: "Platforms", v: "iOS · Android" },
  { k: "Chain", v: "Solana · Mango protocol" },
  { k: "Shipped", v: "Google Play · TestFlight" },
]

const SCREENS = [
  { src: "/images/mango-pay/payments-pending.webp", label: "Payments", note: "Pending requests, with notes" },
  { src: "/images/mango-pay/payments-completed.webp", label: "Payments", note: "Settled in seconds" },
  { src: "/images/mango-pay/payments-empty.webp", label: "First run", note: "Top up with USDC" },
  { src: "/images/mango-pay/portfolio.webp", label: "Portfolio", note: "Every asset, and what it earns" },
  { src: "/images/mango-pay/asset.webp", label: "Asset", note: "Receive, send, convert" },
  { src: "/images/mango-pay/convert.webp", label: "Convert", note: "USDC → BTC on a custom keypad" },
  { src: "/images/mango-pay/explore.webp", label: "Explore", note: "Earn rates and markets" },
  { src: "/images/mango-pay/profile.webp", label: "Profile", note: "Phone, username, currency" },
]

const DESIGNED = [
  "The whole experience, from a blank file: four tabs — Payments, Portfolio, Explore, Profile — around one center action",
  "A visual system for money: a night ground, violet for actions, mango yellow for where you are, lime for gains",
  "Payment threads that read like messages — notes, emoji, and a clear pending, invited, paid state on every row",
  "Balance rings, a custom number keypad, and one-tap 25 / 50 / 75 / MAX amounts for converting",
  "The launch site and download flow that sent people to Google Play and TestFlight",
]

const BUILT = [
  "A React Native app for iOS and Android on top of the protocol the Mango team built",
  "Pay and request by phone number or QR, including requests to contacts before they have the app",
  "Mango Earn: deposits from the wallet into Mango's lending markets, with yield shown per asset",
  "Buy with cash, convert between coins, and withdraw back to a bank account",
  "Animated price charts and international phone input, on Mango's forks of the open-source libraries",
]

const PALETTE = [
  { name: "Night", hex: "#1B1923", ink: "#EDEDE9" },
  { name: "Violet", hex: "#5B48AE", ink: "#FFFFFF" },
  { name: "Mango", hex: "#FECA1A", ink: "#1B1923" },
  { name: "Lime", hex: "#94B32D", ink: "#1B1923" },
  { name: "Mist", hex: "#E8E6F0", ink: "#1B1923" },
]

const REPOS = [
  {
    name: "blockworks-foundation/mango-web",
    href: "https://github.com/blockworks-foundation/mango-web",
    what: "mango.markets — I built the app page and the download flow that launched Mango Pay.",
  },
  {
    name: "blockworks-foundation/mango-ui-v3",
    href: "https://github.com/blockworks-foundation/mango-ui-v3",
    what: "Mango's V3 trading interface — referrals, error handling and Sentry.",
  },
  {
    name: "blockworks-foundation/react-native-animated-charts",
    href: "https://github.com/blockworks-foundation/react-native-animated-charts",
    what: "Mango's fork of the animated charts behind every asset screen.",
  },
  {
    name: "blockworks-foundation/react-native-phone-number-input",
    href: "https://github.com/blockworks-foundation/react-native-phone-number-input",
    what: "Mango's fork of the phone input behind pay-by-number.",
  },
]

const Lines = ({ lines }: { lines: React.ReactNode[] }) => (
  <>
    {lines.map((line, i) => (
      <span key={i} className="ls-line">
        <span>{line}</span>
      </span>
    ))}
  </>
)

// Transparent WebM where supported; the MP4 fallback is rendered on #121212, which the page matches.
const Clip = ({ name, label, className = "" }: { name: string; label: string; className?: string }) => (
  <video
    className={className}
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    poster={`/images/mango-pay/video/${name}.png`}
    aria-label={label}
  >
    <source src={`/images/mango-pay/video/${name}.webm`} type="video/webm" />
    <source src={`/images/mango-pay/video/${name}.mp4`} type="video/mp4" />
  </video>
)

const Shot = ({ src, alt }: { src: string; alt: string }) => (
  <div className="ls-phone ls-phone--modern ls-mp-shot">
    <div className="ls-phone__screen">
      <Image src={src} alt={alt} fill sizes="300px" />
    </div>
  </div>
)

const MangoPay: NextPage = () => {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(".ls-mp-hero .ls-line > span", { yPercent: 105, duration: 1.3, stagger: 0.08, ease: "expo.out", delay: 0.15 })
        gsap.from(".ls-mp-hero__tagline, .ls-mp-hero__intro, .ls-cs-facts > div", {
          autoAlpha: 0,
          y: 20,
          duration: 1,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.5,
        })
        gsap.from(".ls-mp-hero__video", { autoAlpha: 0, y: 60, rotate: 4, duration: 1.6, ease: "expo.out", delay: 0.3 })

        gsap.utils.toArray<HTMLElement>(".ls-mp .ls-cs-title").forEach((title) => {
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
            { yPercent: -amount, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }
          )
        })
      })

      // The gallery slides sideways while its section is stuck to the viewport (desktop only; phones swipe).
      gsap.matchMedia().add(`(min-width: 768px) and ${MOTION_OK}`, () => {
        const strip = track.current!
        gsap.to(strip, {
          x: () => -(strip.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".ls-mp-gallery",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <SiteShell
      title="Mango Pay — Luc Succès"
      description="Mango Pay: a crypto payments app on the Mango protocol on Solana. Pay anyone by phone number, earn on what you hold, convert and withdraw. Designed from scratch, built in React Native."
      path="/work/mango-pay"
    >
      <main ref={root} className="ls-cs ls-mp">
        {/* Hero */}
        <header className="ls-mp-hero">
          <div className="ls-mp-hero__text">
            <Link href="/work/crypto" className="ls-cs-back ls-mono">
              <span aria-hidden="true">←</span> Crypto case study
            </Link>
            <p className="ls-mono ls-cs-eyebrow">Mango Markets · 2022—2023</p>
            <h1 className="ls-display ls-mp-hero__title">
              <Lines lines={["Mango", "Pay"]} />
            </h1>
            <p className="ls-display ls-mp-hero__tagline">
              Pay with crypto, to friends &amp; family, <em className="ls-italic">worldwide.</em>
            </p>
            <p className="ls-mp-hero__intro">
              A consumer payments app on the Mango protocol on Solana. Mango&apos;s team built the protocol; we built
              everything a person touches on top of it — and I designed the entire experience from scratch.
            </p>
          </div>
          <Clip name="hero" label="Mango Pay — paying a contact" className="ls-mp-hero__video" />
          <dl className="ls-cs-facts ls-mp-hero__facts">
            {FACTS.map((f) => (
              <div key={f.k}>
                <dt className="ls-mono">{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Gallery */}
        <section className="ls-mp-gallery" aria-label="Mango Pay screens">
          <div className="ls-mp-gallery__sticky">
            <p className="ls-mono ls-cs-eyebrow ls-mp-gallery__label">The app, screen by screen</p>
            <div ref={track} className="ls-mp-gallery__track">
              {SCREENS.map((s) => (
                <figure key={s.src} className="ls-mp-gallery__item">
                  <Shot src={s.src} alt={`Mango Pay — ${s.label}: ${s.note}`} />
                  <figcaption>
                    <span className="ls-mono">{s.label}</span>
                    {s.note}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Payments */}
        <section className="ls-cs-section ls-mp-chapter">
          <div className="ls-cs-split ls-cs-split--center">
            <div>
              <p className="ls-mono ls-cs-eyebrow ls-mp-accent">Payments</p>
              <h2 className="ls-display ls-cs-title">
                <Lines lines={["Pay anyone with", <em key="a" className="ls-italic">a phone number.</em>]} />
              </h2>
              <div className="ls-cs-prose">
                <p>
                  Send and request crypto from anyone&apos;s mobile number or a QR code. Requests reach people in your
                  contacts before they even have the app, and you&apos;re told the moment they pay.
                </p>
                <p>
                  Every payment reads like a message — a note, an emoji, and a clear state: pending, invite sent, paid.
                  Transactions settle in seconds and cost a fraction of a penny.
                </p>
              </div>
            </div>
            <div className="ls-mp-clips">
              <Clip name="pay" label="Mango Pay — paying a contact by phone number" />
              <Clip name="request" label="Mango Pay — requesting a payment" />
            </div>
          </div>
        </section>

        {/* Portfolio & Earn */}
        <section className="ls-cs-section ls-mp-chapter ls-mp-chapter--violet">
          <div className="ls-cs-split ls-cs-split--center">
            <div className="ls-mp-pair">
              <Shot src="/images/mango-pay/portfolio.webp" alt="Mango Pay portfolio with total balance and earning assets" />
              <div data-drift="10">
                <Shot src="/images/mango-pay/explore.webp" alt="Mango Pay explore tab with Earn rates" />
              </div>
            </div>
            <div>
              <p className="ls-mono ls-cs-eyebrow ls-mp-accent">Portfolio &amp; Earn</p>
              <h2 className="ls-display ls-cs-title">
                <Lines lines={["A wallet that", <em key="a" className="ls-italic">earns while it sits.</em>]} />
              </h2>
              <div className="ls-cs-prose">
                <p>
                  Your total balance at a glance, and every asset with the share of it that&apos;s earning. Mango Earn
                  puts long-term holds to work in the Mango protocol&apos;s lending markets — deposit straight from the
                  wallet and watch the yield per coin.
                </p>
                <p>Explore lists the current rate for every asset next to the market, so earning is one tap away.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Convert */}
        <section className="ls-cs-section ls-mp-chapter">
          <div className="ls-cs-split ls-cs-split--center">
            <div>
              <p className="ls-mono ls-cs-eyebrow ls-mp-accent">Convert &amp; markets</p>
              <h2 className="ls-display ls-cs-title">
                <Lines lines={["Buy it, swap it,", <em key="a" className="ls-italic">cash it out.</em>]} />
              </h2>
              <div className="ls-cs-prose">
                <p>
                  Buy crypto with cash, convert between coins with one-tap amounts on a keypad built for money, and
                  follow every asset on a live chart with Receive, Send and Convert one thumb away.
                </p>
                <p>When you&apos;re done, convert back to currency and withdraw to your bank account.</p>
              </div>
            </div>
            <div className="ls-mp-pair">
              <div data-drift="-10">
                <Shot src="/images/mango-pay/asset.webp" alt="Mango Pay Bitcoin detail with price chart" />
              </div>
              <Shot src="/images/mango-pay/convert.webp" alt="Mango Pay convert screen, USDC to BTC" />
            </div>
          </div>
        </section>

        {/* What we built */}
        <section className="ls-cs-section ls-cs-bone">
          <p className="ls-mono ls-cs-eyebrow">The work</p>
          <h2 className="ls-display ls-cs-title">
            <Lines lines={["Designed from scratch.", <em key="a" className="ls-italic">Built on the protocol.</em>]} />
          </h2>
          <div className="ls-mp-work">
            <div>
              <h3 className="ls-mono">What I designed</h3>
              <ul className="ls-cs-reveal">
                {DESIGNED.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="ls-mono">What we built</h3>
              <ul className="ls-cs-reveal">
                {BUILT.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ls-mp-palette ls-cs-reveal" aria-label="Mango Pay palette">
            {PALETTE.map((c) => (
              <div key={c.hex} style={{ backgroundColor: c.hex, color: c.ink }}>
                <span className="ls-display">{c.name}</span>
                <span className="ls-mono">{c.hex}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Repos */}
        <section className="ls-cs-section ls-cs-ink">
          <p className="ls-mono ls-cs-eyebrow">Code</p>
          <h2 className="ls-display ls-cs-title">
            <Lines lines={["The repos", <em key="a" className="ls-italic">behind it.</em>]} />
          </h2>
          <ul className="ls-mp-repos ls-cs-reveal">
            {REPOS.map((r) => (
              <li key={r.name}>
                <a href={r.href} target="_blank" rel="noreferrer">
                  <span className="ls-mono">{r.name}</span>
                  <span>{r.what}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
            <li className="is-private">
              <div>
                <span className="ls-mono">blockworks-foundation · React Native app</span>
                <span>The app itself lives in a private repository.</span>
              </div>
            </li>
          </ul>

          <Link href="/work/crypto" className="ls-cs-next" data-cursor="Read">
            <span className="ls-mono">More crypto work</span>
            <span className="ls-display">
              Mango, Rainbow, Blaze <span aria-hidden="true">→</span>
            </span>
          </Link>
        </section>
      </main>
    </SiteShell>
  )
}

export default MangoPay
