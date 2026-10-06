import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap, MOTION_OK } from "../../lib/site/motion"

// *word* renders in italic.
const STATEMENT =
  "I design and engineer products, then build the companies around them. Over fourteen years that has meant features in front of 100M+ listeners at *Spotify,* auction tools at *Artsy,* a keyboard that hit #1 on the App Store, and now *Blaze,* where I build AI agents that move money across 40+ countries."

const LEDGER = [
  { k: "Name", v: "Luc Succès" },
  { k: "Based in", v: "Mexico City" },
  { k: "Before that", v: "New York, San Francisco" },
  { k: "Now", v: "Co-founder & CTO, Blaze" },
  { k: "Backed by", v: "Y Combinator, S24" },
  { k: "Studied", v: "Computer science, NYU" },
]

export const Manifesto = () => {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          ".ls-manifesto__word",
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: { trigger: ".ls-manifesto__statement", start: "top 78%", end: "bottom 45%", scrub: true },
          }
        )

        gsap.fromTo(
          ".ls-portrait",
          { clipPath: "inset(18% 12% 18% 12%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: { trigger: ".ls-portrait", start: "top 95%", end: "top 35%", scrub: true },
          }
        )
        gsap.fromTo(
          ".ls-portrait__img",
          { yPercent: -10, scale: 1.25, filter: "grayscale(1)" },
          {
            yPercent: 10,
            scale: 1.05,
            filter: "grayscale(0)",
            ease: "none",
            scrollTrigger: { trigger: ".ls-portrait", start: "top bottom", end: "bottom top", scrub: true },
          }
        )

        gsap.from(".ls-ledger__row", {
          y: 24,
          autoAlpha: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ls-ledger", start: "top 80%" },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="about" className="ls-manifesto">
      <p className="ls-manifesto__eyebrow ls-mono">About</p>
      <p className="ls-manifesto__statement">
        {STATEMENT.split(" ").map((word, i) => {
          const italic = word.startsWith("*")
          const clean = word.replace(/\*/g, "")
          return (
            <React.Fragment key={i}>
              <span className={`ls-manifesto__word ${italic ? "ls-italic" : ""}`}>{clean}</span>{" "}
            </React.Fragment>
          )
        })}
      </p>

      <div className="ls-about">
        <figure className="ls-portrait">
          <div className="ls-portrait__img">
            <Image
              src="/images/profile-photo.jpg"
              alt="Portrait of Luc Succès"
              fill
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </div>
        </figure>

        <div className="ls-about__copy">
          <dl className="ls-ledger">
            {LEDGER.map((row) => (
              <div key={row.k} className="ls-ledger__row">
                <dt className="ls-mono">{row.k}</dt>
                <dd>{row.v}</dd>
              </div>
            ))}
          </dl>
          <p className="ls-about__bio">
            My background is in computer science, but I&apos;ve always lived where design, technology and
            entrepreneurship meet. I&apos;ve spent the last few years between Mexico City, New York and San Francisco
            building products and companies — and I&apos;m always down to connect with fellow founders and creators.
          </p>
        </div>
      </div>
    </section>
  )
}
