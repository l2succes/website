import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { SiteShell } from "../../components/Site/SiteShell"
import { Phone } from "../../components/Site/Phone"
import { gsap, MOTION_OK, ScrollTrigger } from "../../lib/site/motion"
import { projects, Project } from "../../lib/site/content"
import { caseStudies, caseStudyBySlug, Media, StoryStep } from "../../lib/site/case-studies"

const pad = (n: number) => String(n).padStart(2, "0")

// Splits "$1.2M" into "$", 1.2 and "M" so the number can count up.
const parseStat = (value: string) => {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/)
  if (!match) return null
  const [, prefix, num, suffix] = match
  return { prefix, num: parseFloat(num), decimals: num.split(".")[1]?.length ?? 0, suffix }
}

const MediaTile = ({ media, project }: { media: Media; project: Project }) => {
  const aspect = `${media.width} / ${media.height}`
  const visual =
    media.kind === "video" ? (
      media.controls ? (
        <video src={media.src} poster={media.poster} controls playsInline preload="none" aria-label={media.alt} />
      ) : (
        <video src={media.src} autoPlay loop muted playsInline preload="metadata" aria-label={media.alt} />
      )
    ) : (
      <Image src={media.src} alt={media.alt} fill sizes={media.frame === "desktop" ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 80vw, 30vw"} />
    )

  return (
    <figure className={`ls-study-tile ls-study-tile--${media.frame}`}>
      {media.frame === "phone" ? (
        <Phone
          project={project}
          className="ls-study-tile__phone"
          image={media.kind === "image" ? media.src : undefined}
          video={media.kind === "video" ? media.src : undefined}
          alt={media.alt}
          sizes="(max-width: 767px) 60vw, 22vw"
        />
      ) : media.frame === "desktop" ? (
        <div className="ls-study-window">
          <div className="ls-study-window__bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="ls-study-window__glass" style={{ aspectRatio: aspect }}>
            {visual}
          </div>
        </div>
      ) : (
        <div className="ls-study-poster" style={{ aspectRatio: aspect, backgroundColor: media.surface }}>
          {visual}
        </div>
      )}
      {media.caption && <figcaption className="ls-mono">{media.caption}</figcaption>}
    </figure>
  )
}

const StoryScreen = ({ screen, sizes }: { screen: StoryStep["screen"]; sizes: string }) =>
  screen.kind === "video" ? (
    <video src={screen.src} autoPlay loop muted playsInline preload="metadata" aria-label={screen.alt} />
  ) : (
    <Image src={screen.src} alt={screen.alt} fill sizes={sizes} />
  )

// The phone holds still in the project's color while the chapters scroll past and swap its screen.
const Story = ({ project, title, steps, label }: { project: Project; title: string; steps: StoryStep[]; label: string }) => {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ls-study-step").forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => self.isActive && setActive(i),
        })
      })
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>(".ls-study-step__text").forEach((text) => {
          gsap.from(text.children, {
            y: 40,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: text, start: "top 80%" },
          })
        })
      })
    }, root)
    return () => ctx.revert()
  }, [steps])

  return (
    <section ref={root} className="ls-study-story" style={{ backgroundColor: project.bg, color: project.fg }} aria-labelledby="cs-story">
      <header className="ls-study-story__head">
        <p className="ls-study-label ls-mono">{label}</p>
        <h2 id="cs-story" className="ls-display">
          {title}
        </h2>
      </header>
      <div className="ls-study-story__body">
        <div className="ls-study-story__stage" aria-hidden="true">
          <div className={`ls-phone ls-phone--${project.device ?? "modern"} ls-study-story__phone`}>
            <div className="ls-phone__screen">
              {steps.map((step, i) => (
                <div key={step.screen.src} className={`ls-study-story__screen ${i === active ? "is-active" : ""}`}>
                  <StoryScreen screen={step.screen} sizes="(max-width: 767px) 1px, 26vw" />
                </div>
              ))}
            </div>
          </div>
          <p className="ls-study-story__count ls-mono">
            {pad(active + 1)} / {pad(steps.length)}
          </p>
        </div>
        <ol className="ls-study-story__steps">
          {steps.map((step, i) => (
            <li key={step.title} className={`ls-study-step ${i === active ? "is-active" : ""}`}>
              <div className={`ls-phone ls-phone--${project.device ?? "modern"} ls-study-step__phone`}>
                <div className="ls-phone__screen">
                  <StoryScreen screen={step.screen} sizes="(max-width: 767px) 60vw, 1px" />
                </div>
              </div>
              <div className="ls-study-step__text">
                <p className="ls-mono">
                  {pad(i + 1)} · {step.kicker}
                </p>
                <h3 className="ls-display">{step.title}</h3>
                <p className="ls-study-step__body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const CaseStudyPage: NextPage<{ slug: string }> = ({ slug }) => {
  const root = useRef<HTMLElement>(null)
  const study = caseStudyBySlug(slug)!
  const project = projects.find((p) => p.slug === slug)!
  const index = caseStudies.indexOf(study)
  const nextStudy = caseStudies[(index + 1) % caseStudies.length]
  const next = projects.find((p) => p.slug === nextStudy.slug)!
  const [lede, ...rest] = study.intro
  // Section numbers follow whichever sections this study has.
  const sectionNames = ["The idea", ...(study.story ? ["The walkthrough"] : []), "What it does", "In the hand", "Under the hood", "What I took from it"]
  const label = (name: string) => `${pad(sectionNames.indexOf(name) + 1)} — ${name}`

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(MOTION_OK, () => {
        // Arrival.
        const intro = gsap.timeline({ delay: 0.1 })
        intro
          .from(".ls-study-hero__title .ls-line > span", { yPercent: 105, duration: 1.3, stagger: 0.08, ease: "expo.out" })
          .from(".ls-study-hero__phone", { y: 160, rotate: 8, autoAlpha: 0, duration: 1.6, ease: "expo.out" }, 0.15)
          .from(".ls-study-hero__tagline, .ls-study-meta > div, .ls-study-hero__top", { autoAlpha: 0, y: 24, duration: 1, stagger: 0.06, ease: "power3.out" }, 0.45)

        // The hero parts at different speeds on the way out.
        const out = { trigger: ".ls-study-hero", start: "top top", end: "bottom top", scrub: true }
        gsap.to(".ls-study-hero__phone", { yPercent: -18, rotate: -4, ease: "none", scrollTrigger: out })
        gsap.to(".ls-study-hero__title", { yPercent: 30, ease: "none", scrollTrigger: out })

        // The lede reads in word by word.
        gsap.fromTo(
          ".ls-study-lede span",
          { opacity: 0.14 },
          { opacity: 1, stagger: 0.05, ease: "none", scrollTrigger: { trigger: ".ls-study-lede", start: "top 80%", end: "bottom 45%", scrub: true } }
        )

        gsap.from(".ls-study-intro__rest p", {
          y: 30,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ls-study-intro__rest", start: "top 85%" },
        })

        // Stats count up once.
        gsap.utils.toArray<HTMLElement>(".ls-study-stat__value").forEach((el) => {
          const stat = parseStat(el.dataset.value!)
          if (!stat) return
          const counter = { n: 0 }
          gsap.to(counter, {
            n: stat.num,
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = `${stat.prefix}${counter.n.toFixed(stat.decimals)}${stat.suffix}`
            },
          })
        })

        // Feature rows draw their rule, then their text.
        gsap.utils.toArray<HTMLElement>(".ls-study-feature").forEach((row) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 85%" } })
          tl.from(row.querySelector(".ls-study-feature__rule"), { scaleX: 0, duration: 1.2, ease: "expo.inOut" }).from(
            row.querySelectorAll(".ls-study-feature__num, h3, p"),
            { y: 30, autoAlpha: 0, stagger: 0.08, duration: 0.9, ease: "power3.out" },
            0.3
          )
        })

        // Gallery tiles rise, and drift at their own speeds.
        ScrollTrigger.batch(".ls-study-tile", {
          start: "top 90%",
          once: true,
          onEnter: (els) => gsap.from(els, { y: 90, autoAlpha: 0, duration: 1.2, stagger: 0.1, ease: "expo.out" }),
        })
        gsap.utils.toArray<HTMLElement>(".ls-study-tile").forEach((tile, i) => {
          const inner = tile.firstElementChild
          if (!inner) return
          const drift = [10, -6, 14, -10][i % 4]
          gsap.fromTo(
            inner,
            { yPercent: drift },
            { yPercent: -drift, ease: "none", scrollTrigger: { trigger: tile, start: "top bottom", end: "bottom top", scrub: true } }
          )
        })
        gsap.from(".ls-study-gallery__head > *", {
          y: 40,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ls-study-gallery", start: "top 75%" },
        })

        gsap.from(".ls-study-eng__item", {
          y: 50,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ls-study-eng__grid", start: "top 80%" },
        })
        gsap.from(".ls-study-stack li", {
          y: 16,
          autoAlpha: 0,
          stagger: 0.03,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ".ls-study-stack", start: "top 90%" },
        })

        gsap.from(".ls-study-takeaway .ls-line > span", {
          yPercent: 105,
          stagger: 0.08,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ls-study-takeaway", start: "top 75%" },
        })

        // The next project opens like a door.
        gsap.fromTo(
          ".ls-study-next__panel",
          { clipPath: "inset(14% 8% 14% 8% round 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: { trigger: ".ls-study-next", start: "top bottom", end: "top 20%", scrub: true },
          }
        )
        gsap.fromTo(
          ".ls-study-next__title",
          { yPercent: 40 },
          { yPercent: 0, ease: "none", scrollTrigger: { trigger: ".ls-study-next", start: "top bottom", end: "top 20%", scrub: true } }
        )
      })
    }, root)
    return () => ctx.revert()
  }, [slug])

  return (
    <SiteShell title={`${project.title} — Luc Succès`} description={study.tagline} path={`/work/${slug}`}>
      <main ref={root} className="ls-cs" key={slug}>
        <header className="ls-study-hero" style={{ backgroundColor: project.bg, color: project.fg }}>
          <div className="ls-study-hero__top ls-mono">
            <Link href="/work" className="ls-study-back">
              <span aria-hidden="true">←</span> All work
            </Link>
            <span>
              Case study {pad(index + 1)} / {pad(caseStudies.length)}
            </span>
          </div>

          <div className="ls-study-hero__body">
            <div className="ls-study-hero__text">
              <h1 className="ls-study-hero__title ls-display">
                {project.title.split(" ").map((word) => (
                  <span key={word} className="ls-line">
                    <span>{word}</span>
                  </span>
                ))}
              </h1>
              <p className="ls-study-hero__tagline">{study.tagline}</p>
              <dl className="ls-study-meta">
                <div>
                  <dt className="ls-mono">Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt className="ls-mono">Years</dt>
                  <dd>{project.years}</dd>
                </div>
                <div>
                  <dt className="ls-mono">Platform</dt>
                  <dd>{study.platform}</dd>
                </div>
                <div>
                  <dt className="ls-mono">Status</dt>
                  <dd>{study.status}</dd>
                </div>
                <div className="ls-study-meta__links">
                  <dt className="ls-mono">Visit</dt>
                  <dd>
                    {study.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            <Phone project={project} className="ls-study-hero__phone" sizes="(max-width: 767px) 60vw, 26vw" />
          </div>
        </header>

        <section className="ls-study-intro" aria-labelledby="cs-idea">
          <p id="cs-idea" className="ls-study-label ls-mono">
            {label("The idea")}
          </p>
          <div className="ls-study-intro__body">
            <p className="ls-study-lede">
              {lede.split(" ").map((word, i) => (
                <span key={i}>{word} </span>
              ))}
            </p>
            <div className="ls-study-intro__rest">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="ls-study-stats">
            {study.stats.map((stat) => (
              <li key={stat.label} className="ls-study-stat">
                <span className="ls-study-stat__value ls-display" data-value={stat.value}>
                  {stat.value}
                </span>
                <span className="ls-mono">{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {study.story && <Story project={project} title={study.story.title} steps={study.story.steps} label={label("The walkthrough")} />}

        <section className="ls-study-features" aria-labelledby="cs-what">
          <div className="ls-study-features__aside">
            <p className="ls-study-label ls-mono">{label("What it does")}</p>
            <h2 id="cs-what" className="ls-display">
              How it <em className="ls-italic">works.</em>
            </h2>
          </div>
          <ol className="ls-study-features__list">
            {study.features.map((feature, i) => (
              <li key={feature.title} className="ls-study-feature">
                <span className="ls-study-feature__rule" aria-hidden="true" />
                <span className="ls-study-feature__num ls-mono">{pad(i + 1)}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="ls-study-gallery" style={{ backgroundColor: project.bg, color: project.fg }} aria-labelledby="cs-look">
          <div className="ls-study-gallery__head">
            <p className="ls-study-label ls-mono">{label("In the hand")}</p>
            <h2 id="cs-look" className="ls-display">
              The <em className="ls-italic">product.</em>
            </h2>
          </div>
          <div className="ls-study-gallery__grid">
            {study.gallery.map((media) => (
              <MediaTile key={media.src} media={media} project={project} />
            ))}
          </div>
        </section>

        <section className="ls-study-eng" aria-labelledby="cs-hood">
          <div className="ls-study-eng__head">
            <p className="ls-study-label ls-mono">{label("Under the hood")}</p>
            <h2 id="cs-hood" className="ls-display">
              The hard <em className="ls-italic">parts.</em>
            </h2>
          </div>
          <div className="ls-study-eng__grid">
            {study.engineering.map((item, i) => (
              <article key={item.title} className="ls-study-eng__item">
                <header>
                  <span className="ls-mono">{pad(i + 1)}</span>
                  {item.note && <span className="ls-study-eng__note ls-mono">{item.note}</span>}
                </header>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="ls-study-stack">
            <p className="ls-mono">Built with</p>
            <ul>
              {study.stack.map((tool) => (
                <li key={tool} className="ls-mono">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ls-study-takeaway" aria-label="Takeaway">
          <p className="ls-study-label ls-mono">{label("What I took from it")}</p>
          <blockquote className="ls-display">
            {study.takeaway.split(/(?<=[.:])\s+/).map((line) => (
              <span key={line} className="ls-line">
                <span>{line}</span>
              </span>
            ))}
          </blockquote>
        </section>

        <nav className="ls-study-next" aria-label="Next case study">
          <Link href={`/work/${next.slug}`} className="ls-study-next__panel" style={{ backgroundColor: next.bg, color: next.fg }} data-cursor="Next">
            <span className="ls-mono">Next case study</span>
            <span className="ls-study-next__title ls-display">{next.title}</span>
            <span className="ls-study-next__meta ls-mono">
              {next.role} · {next.years} <span aria-hidden="true">→</span>
            </span>
          </Link>
        </nav>
      </main>
    </SiteShell>
  )
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: caseStudies.map((c) => ({ params: { slug: c.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<{ slug: string }> = ({ params }) => ({
  props: { slug: params!.slug as string },
})

export default CaseStudyPage
