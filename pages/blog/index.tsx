import type { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import { SiteShell } from "../../components/Site/SiteShell"
import { gsap, MOTION_OK } from "../../lib/site/motion"
import { getAllPosts, PostMeta } from "../../lib/blog"
import { formatDay, pad } from "../../lib/site/format"

const BlogIndex: NextPage<{ posts: PostMeta[] }> = ({ posts }) => {
  const root = useRef<HTMLElement>(null)
  const years = posts.map((p) => p.date.slice(0, 4))
  const span = years.length ? `${years[years.length - 1]}—${years[0]}` : ""

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(".ls-blogHero__title .ls-line > span", { yPercent: 105, duration: 1.3, stagger: 0.09, ease: "expo.out", delay: 0.15 })
        gsap.from(".ls-blogHero__intro", { autoAlpha: 0, y: 20, duration: 1, ease: "power3.out", delay: 0.6 })

        // Each row draws its rule, then its text rises.
        gsap.utils.toArray<HTMLElement>(".ls-postRow").forEach((row) => {
          gsap
            .timeline({ scrollTrigger: { trigger: row, start: "top 90%" } })
            .from(row.querySelector(".ls-postRow__rule"), { scaleX: 0, duration: 1.2, ease: "expo.inOut" })
            .from(row.querySelectorAll(".ls-postRow__link > *"), { y: 36, autoAlpha: 0, stagger: 0.06, duration: 0.9, ease: "power3.out" }, 0.3)
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <SiteShell
      title="Writing — Luc Succès"
      description="Notes from building Blaze and other products: startups, fintech, design and working with AI agents."
      path="/blog"
    >
      <main ref={root} className="ls-blogPage">
        <header className="ls-blogHero">
          <p className="ls-mono">Writing{span && ` · ${span}`}</p>
          <h1 className="ls-blogHero__title ls-display">
            <span className="ls-line">
              <span>Notes from</span>
            </span>
            <span className="ls-line">
              <span>
                the <em className="ls-italic">build.</em>
              </span>
            </span>
          </h1>
          <div className="ls-blogHero__intro">
            <p>
              What I&apos;m learning while building Blaze and the products around it. Startups, money, design, and
              shipping with a team of founders and agents.
            </p>
          </div>
        </header>

        {posts.length ? (
          <ol className="ls-postList">
            {posts.map((post, i) => (
              <li key={post.slug} className="ls-postRow">
                <span className="ls-postRow__rule" aria-hidden="true" />
                <Link href={`/blog/${post.slug}`} className="ls-postRow__link" data-cursor="Read">
                  <span className="ls-postRow__num ls-mono">{pad(posts.length - i)}</span>
                  <time className="ls-postRow__date ls-mono" dateTime={post.date}>
                    {formatDay(post.date)}
                  </time>
                  <span className="ls-postRow__main">
                    <span className="ls-postRow__title ls-display">{post.title}</span>
                    {post.excerpt && <span className="ls-postRow__excerpt">{post.excerpt}</span>}
                  </span>
                  <span className="ls-postRow__meta ls-mono">
                    {post.draft && <span className="ls-postRow__draft">Draft</span>}
                    {post.readingMinutes} min <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="ls-postList__empty ls-mono">First post soon.</p>
        )}
      </main>
    </SiteShell>
  )
}

export const getStaticProps: GetStaticProps<{ posts: PostMeta[] }> = () => ({
  props: { posts: getAllPosts() },
})

export default BlogIndex
