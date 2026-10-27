import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Marked, Tokens } from "marked"

const POSTS_DIR = path.join(process.cwd(), "content/blog")

// Drafts render in `next dev` so they can be previewed, and never ship.
const SHOW_DRAFTS = process.env.NODE_ENV !== "production"

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  draft: boolean
  readingMinutes: number
}

export interface Heading {
  id: string
  text: string
}

export interface Post extends PostMeta {
  html: string
  headings: Heading[]
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

// gray-matter turns an unquoted `date: 2026-01-16` into a Date; keep everything as YYYY-MM-DD.
const toDay = (value: unknown) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? "").slice(0, 10)

const readFile = (slug: string) => {
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8"))
  const words = content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length
  const meta: PostMeta = {
    slug,
    title: data.title,
    date: toDay(data.date),
    excerpt: data.excerpt ?? "",
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(words / 230)),
  }
  return { meta, content }
}

const slugs = () =>
  fs.existsSync(POSTS_DIR)
    ? fs
        .readdirSync(POSTS_DIR)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""))
    : []

export function getAllPosts(): PostMeta[] {
  return slugs()
    .map((slug) => readFile(slug).meta)
    .filter((post) => SHOW_DRAFTS || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | null {
  if (!slugs().includes(slug)) return null
  const { meta, content } = readFile(slug)
  if (meta.draft && !SHOW_DRAFTS) return null

  // Section headings get anchors so the margin index can jump to them.
  const headings: Heading[] = []
  const seen = new Map<string, number>()
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth, text }: Tokens.Heading) {
        const inner = this.parser.parseInline(tokens)
        const base = slugify(text) || "section"
        const n = seen.get(base) ?? 0
        seen.set(base, n + 1)
        const id = n ? `${base}-${n}` : base
        // `text` is the raw markdown, so the index gets plain text without HTML entities.
        if (depth === 2) headings.push({ id, text: text.replace(/[*_`]/g, "") })
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`
      },
      link({ href, title, tokens }: Tokens.Link) {
        const inner = this.parser.parseInline(tokens)
        const external = /^https?:\/\//.test(href)
        const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ""
        return `<a href="${href}"${title ? ` title="${title}"` : ""}${attrs}>${inner}</a>`
      },
    },
  })

  const html = marked.parse(content, { async: false }) as string
  return { ...meta, html, headings }
}
