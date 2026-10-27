import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { SiteShell } from "../../components/Site/SiteShell"
import { gsap, MOTION_OK, ScrollTrigger, scrollToTarget } from "../../lib/site/motion"
import { getAllPosts, getPost, Post, PostMeta } from "../../lib/blog"
import { formatDay, pad } from "../../lib/site/format"

interface Props {
  post: Post
  index: number
  total: number
  next: PostMeta | null
}

const BlogPost: NextPage<Props> = ({ post, index, total, next }) => {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reading progress, pinned to the top edge.
      gsap.fromTo(
        ".ls-post-progress",
        { scaleX: 0 },
        { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".ls-post-body", start: "top 60%", end: "bottom bottom", scrub: true } }
      )

      // The margin index follows whichever section is under the reading line.
      gsap.utils.toArray<HTMLElement>(".ls-prose h2").forEach((h, i, all) => {
        ScrollTrigger.create({
          trigger: h,
          start: "top 40%",
          endTrigger: all[i + 1] ?? ".ls-prose",
          end: all[i + 1] ? "top 40%" : "bottom 40%",
          onToggle: (self) => self.isActive && setActive(i),
          onLeaveBack: () => i === 0 && setActive(-1),
        })
      })

      gsap.matchMedia().add(MOTION_OK, () => {
        gsap
          .timeline({ delay: 0.1 })
          .from(".ls-post-hero__title .ls-word > span", { yPercent: 110, duration: 1.2, stagger: 0.035, ease: "expo.out" })
          .from(".ls-post-hero__top, .ls-post-hero__lede, .ls-post-meta > div", { autoAlpha: 0, y: 24, duration: 1, stagger: 0.06, ease: "power3.out" }, 0.4)

        gsap.to(".ls-post-hero__title", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: ".ls-post-hero", start: "top top", end: "bottom top", scrub: true },
        })

        gsap.utils.toArray<HTMLElement>(".ls-prose > h2, .ls-prose > pre, .ls-prose > blockquote, .ls-prose > .ls-post-embed").forEach((el) => {
          gsap.from(el, { y: 40, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } })
        })

        if (next) {
          gsap.fromTo(
            ".ls-study-next__panel",
            { clipPath: "inset(14% 8% 14% 8% round 24px)" },
            { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: ".ls-study-next", start: "top bottom", end: "top 20%", scrub: true } }
          )
        }
      })
    }, root)
    return () => ctx.revert()
  }, [post.slug, next])

  return (
    <SiteShell title={`${post.title} — Luc Succès`} description={post.excerpt} path={`/blog/${post.slug}`} noindex={post.draft}>
      <main ref={root} className="ls-postPage" key={post.slug}>
        <span className="ls-post-progress" aria-hidden="true" />

        <header className="ls-post-hero">
          <div className="ls-post-hero__top ls-mono">
            <Link href="/blog" className="ls-study-back">
              <span aria-hidden="true">←</span> All writing
            </Link>
            <span>
              {post.draft ? "Draft" : "Note"} {pad(index)} / {pad(total)}
            </span>
          </div>

          <h1 className="ls-post-hero__title ls-display">
            {post.title.split(" ").map((word, i) => (
              <span key={i} className="ls-word">
                <span>{word}</span>{" "}
              </span>
            ))}
          </h1>

          <div className="ls-post-hero__foot">
            {post.excerpt && <p className="ls-post-hero__lede">{post.excerpt}</p>}
            <dl className="ls-post-meta">
              <div>
                <dt className="ls-mono">Published</dt>
                <dd>
                  <time dateTime={post.date}>{formatDay(post.date)}</time>
                </dd>
              </div>
              <div>
                <dt className="ls-mono">Reading</dt>
                <dd>{post.readingMinutes} min</dd>
              </div>
              <div>
                <dt className="ls-mono">By</dt>
                <dd>Luc Succès</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="ls-post-body">
          {post.headings.length > 1 && (
            <aside className="ls-post-index" aria-label="In this note">
              <p className="ls-mono">In this note</p>
              <ol>
                {post.headings.map((h, i) => (
                  <li key={h.id} className={i === active ? "is-active" : ""}>
                    <a
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToTarget(h.id)
                      }}
                    >
                      <span className="ls-mono">{pad(i + 1)}</span>
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          )}
          <article className="ls-prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        {next ? (
          <nav className="ls-study-next" aria-label="Next note">
            <Link href={`/blog/${next.slug}`} className="ls-study-next__panel ls-post-next" data-cursor="Next">
              <span className="ls-mono">Next note</span>
              <span className="ls-post-next__title ls-display">{next.title}</span>
              <span className="ls-study-next__meta ls-mono">
                {formatDay(next.date)} · {next.readingMinutes} min <span aria-hidden="true">→</span>
              </span>
            </Link>
          </nav>
        ) : (
          <nav className="ls-post-end" aria-label="More writing">
            <Link href="/blog" className="ls-card__cta ls-mono">
              <span aria-hidden="true">←</span> All writing
            </Link>
          </nav>
        )}
      </main>
    </SiteShell>
  )
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: getAllPosts().map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const slug = params!.slug as string
  const post = getPost(slug)
  if (!post) return { notFound: true }
  const posts = getAllPosts()
  const i = posts.findIndex((p) => p.slug === slug)
  // Newest first, so "next" walks back in time and wraps to the latest.
  const next = posts.length > 1 ? posts[(i + 1) % posts.length] : null
  return { props: { post, index: posts.length - i, total: posts.length, next } }
}

export default BlogPost
