import type { NextPage } from "next"
import React, { useEffect, useRef, useState } from "react"
import { SiteShell } from "../components/Site/SiteShell"
import { gsap, MOTION_OK } from "../lib/site/motion"
import { LS_PATH } from "../lib/site/ls-path"
import { projectByName } from "../lib/site/content"
import { resumeData, ResumeData } from "../data/resume"
import { resumeDataCTO } from "../data/resume-cto"

const VARIANTS = [
  { id: "engineer", label: "Engineer", data: resumeData, file: "luc-succes-resume.pdf" },
  { id: "cto", label: "CTO", data: resumeDataCTO, file: "luc-succes-resume-cto.pdf" },
] as const
type VariantId = (typeof VARIANTS)[number]["id"]
type Status = "idle" | "building" | "error"

// Builds the PDF in the browser from the same data this page renders, so the two never drift apart.
async function downloadPdf(data: ResumeData, filename: string) {
  const [{ pdf }, { Resume }] = await Promise.all([import("@react-pdf/renderer"), import("../components/Resume")])
  const blob = await pdf(<Resume data={data} />).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const href = (value: string) => (value.startsWith("http") ? value : `https://${value}`)

const Sheet = ({ data }: { data: ResumeData }) => {
  const { contact } = data
  return (
    <article className="ls-sheet" aria-label={`${contact.name} résumé`}>
      <header className="ls-sheet__head">
        <svg className="ls-sheet__mark" viewBox="290 190 462 670" aria-hidden="true">
          <path d={LS_PATH} pathLength={1} strokeDasharray="1" strokeDashoffset="0" />
        </svg>
        <h1 className="ls-display">Luc Succès</h1>
        <p className="ls-sheet__title">{contact.title}</p>
        <ul className="ls-sheet__contact ls-mono">
          <li>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>{contact.location}</li>
          <li>
            <a href={href(contact.linkedin)} target="_blank" rel="noopener noreferrer">
              {contact.linkedin}
            </a>
          </li>
          {contact.github && (
            <li>
              <a href={href(contact.github)} target="_blank" rel="noopener noreferrer">
                {contact.github}
              </a>
            </li>
          )}
          <li>
            <a href={href(contact.website)}>{contact.website}</a>
          </li>
        </ul>
      </header>

      <p className="ls-sheet__summary">{data.summary}</p>

      <div className="ls-sheet__cols">
        <aside className="ls-sheet__side">
          <section>
            <h2 className="ls-mono">Skills</h2>
            {data.skills.map((group) => (
              <div key={group.category} className="ls-sheet__skill">
                <h3>{group.category}</h3>
                <p>{group.items.join(", ")}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="ls-mono">Education</h2>
            {data.education.map((ed) => (
              <div key={ed.institution} className="ls-sheet__skill">
                <h3>{ed.institution}</h3>
                <p>
                  {ed.degree}
                  {ed.field ? `, ${ed.field}` : ""} · {ed.year}
                </p>
              </div>
            ))}
          </section>
          {data.stack && (
            <section>
              <h2 className="ls-mono">Tech stack</h2>
              {data.stack.map((group) => (
                <div key={group.category} className="ls-sheet__skill">
                  <h3>{group.category}</h3>
                  <ul className="ls-chips">
                    {group.items.map((item) => (
                      <li key={item} className="ls-mono">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
        </aside>

        <section className="ls-sheet__main">
          <h2 className="ls-mono">Experience</h2>
          <ol className="ls-jobs">
            {data.experience.map((job) => {
              const project = projectByName(job.company)
              const brand = { "--brand": project?.bg ?? "#0B0B0A" } as React.CSSProperties
              return (
                <li key={job.company} className="ls-job" style={brand}>
                  <span className="ls-job__year ls-mono" aria-hidden="true">
                    {job.startDate.slice(-4)}
                  </span>
                  <span className="ls-job__dot" aria-hidden="true" />
                  <header className="ls-job__head">
                    <span className="ls-job__icon" aria-hidden="true">
                      {project?.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={project.icon} alt="" />
                      ) : (
                        <span className="ls-display">{job.company[0]}</span>
                      )}
                    </span>
                    <h3 className="ls-display">{job.company}</h3>
                    <span className="ls-job__dates ls-mono">
                      {job.startDate} — {job.endDate}
                    </span>
                  </header>
                  <p className="ls-job__role">
                    {job.roles.map((r) => r.title).join(" · ")} <span>· {job.location}</span>
                  </p>
                  <ul className="ls-job__points">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  {job.technologies && <p className="ls-job__tech ls-mono">{job.technologies.join(" · ")}</p>}
                </li>
              )
            })}
          </ol>
        </section>
      </div>
    </article>
  )
}

const ResumePage: NextPage = () => {
  const root = useRef<HTMLElement>(null)
  const [variantId, setVariantId] = useState<VariantId>("engineer")
  const [status, setStatus] = useState<Status>("idle")
  const variant = VARIANTS.find((v) => v.id === variantId)!

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(".ls-resumeBar > *", { y: 16, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" })
        gsap.from(".ls-sheet", { y: 80, autoAlpha: 0, duration: 1.3, ease: "expo.out", delay: 0.15 })
        gsap.from(".ls-sheet__mark path", { attr: { "stroke-dashoffset": 1 }, fillOpacity: 0, duration: 1.8, ease: "power2.inOut", delay: 0.4 })

        // The rail draws down the experience column as you read it.
        gsap.fromTo(
          ".ls-jobs",
          { "--rail": 0 },
          { "--rail": 1, ease: "none", scrollTrigger: { trigger: ".ls-jobs", start: "top 70%", end: "bottom 70%", scrub: true } }
        )
        gsap.utils.toArray<HTMLElement>(".ls-job").forEach((job) => {
          gsap
            .timeline({ scrollTrigger: { trigger: job, start: "top 82%" } })
            .from(job.querySelector(".ls-job__dot"), { scale: 0, duration: 0.6, ease: "back.out(3)" })
            .from(job.querySelectorAll(".ls-job__head, .ls-job__role"), { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.06, ease: "expo.out" }, 0)
            .from(job.querySelectorAll(".ls-job__points li, .ls-job__tech"), { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.04, ease: "power3.out" }, 0.15)
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  // Fade the sheet's contents between variants.
  useEffect(() => {
    if (!root.current) return
    gsap.fromTo(
      root.current.querySelectorAll(".ls-sheet__summary, .ls-sheet__title, .ls-sheet__cols"),
      { autoAlpha: 0.15, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" }
    )
  }, [variantId])

  const onDownload = async () => {
    setStatus("building")
    try {
      await downloadPdf(variant.data, variant.file)
      setStatus("idle")
    } catch (error) {
      console.error("Resume PDF build failed", error)
      setStatus("error")
    }
  }

  return (
    <SiteShell
      title="Résumé — Luc Succès"
      description="Luc Succès's résumé: co-founder & CTO at Blaze (YC S24), previously Seasons, Artsy, Often and Spotify."
      path="/resume"
    >
      <main ref={root} className="ls-resumePage">
        <div className="ls-resumeBar">
          <p className="ls-mono">Résumé</p>
          <div className="ls-segment" role="group" aria-label="Résumé version">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                className="ls-mono"
                aria-pressed={variantId === v.id}
                onClick={() => {
                  setVariantId(v.id)
                  setStatus("idle")
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
          <div className="ls-resumeBar__actions">
            <button className="ls-pill ls-mono" onClick={onDownload} disabled={status === "building"} aria-live="polite">
              {status === "building" ? "Building PDF…" : "Download PDF"}
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 2v9m0 0L4 7m4 4 4-4M3 14h10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          {status === "error" && (
            <p className="ls-resumeBar__error" role="alert">
              The PDF didn&apos;t build in this browser.{" "}
              <a href={`/${variant.file}`} download>
                Download the saved copy
              </a>{" "}
              instead.
            </p>
          )}
        </div>

        <Sheet data={variant.data} />
      </main>
    </SiteShell>
  )
}

export default ResumePage
