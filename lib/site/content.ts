export interface Project {
  slug: string
  title: string
  years: string
  role: string
  /** One line for the home reel. */
  blurb?: string
  /** The longer story, for the portfolio page. */
  description: string
  tech?: string[]
  image?: string
  video?: string
  icon?: string
  /** "classic" screenshots are 750×1334 home-button iPhone captures; "modern" are notched-phone captures. */
  device?: "classic" | "modern"
  href?: string
  bg: string
  fg: string
}

const INK = "#0B0B0A"
const BONE = "#EDEDE9"

// Newest first. Each project's own brand color is the only color the site uses.
export const projects: Project[] = [
  {
    slug: "blaze",
    icon: "/images/blaze/icon.svg",
    title: "Blaze",
    years: "2023—Now",
    role: "Co-founder & CTO",
    blurb: "An AI-powered fintech platform moving money in 80+ currencies across 40+ countries. Y Combinator S24.",
    description:
      "An AI-powered fintech platform built from zero, now moving money in 80+ currencies across 40+ countries. I built its AI CFO agent — 73 tools across banking, payables, payroll and accounting, with guardrails on every money movement and an eval harness that gates each release — and helped raise $1.2M, including Y Combinator's S24 batch.",
    tech: ["Vercel AI SDK", "MCP", "Claude", "Next.js", "NestJS", "PostgreSQL", "Kubernetes"],
    image: "/images/blaze/feed.png",
    device: "modern",
    href: "/work/blaze",
    bg: "#FAF000",
    fg: INK,
  },
  {
    slug: "catching-feelings",
    icon: "/images/catching-feelings/icon.png",
    title: "Catching Feelings",
    years: "2024",
    role: "Co-founder & designer",
    blurb: "A compatibility game for couples and close friends, on web, iOS and Android.",
    description:
      "A compatibility game for couples and close friends. Both players get the same question at once, race a 30-second timer, and see how well they really know each other — across modes from Netflix & Chill to Love Languages. One monorepo ships the web app and the Expo mobile apps.",
    tech: ["Next.js", "Expo", "React Native", "Realtime"],
    video: "/images/catching-feelings/demo.mp4",
    device: "modern",
    href: "/work/catching-feelings",
    bg: "#3F215A",
    fg: BONE,
  },
  {
    slug: "mango-pay",
    icon: "/images/crypto/mango-markets/twitter-image.png",
    title: "Mango Pay",
    years: "2022—2023",
    role: "Product designer & mobile engineer",
    blurb: "Pay anyone with crypto using just their phone number. A payments app on the Mango protocol on Solana.",
    description:
      "A crypto payments app on the Mango protocol on Solana: pay and request by phone number or QR, a portfolio that earns through Mango's lending markets, and buy, convert and withdraw-to-bank. The Mango team built the protocol; I designed the entire experience from scratch and we built it in React Native for iOS and Android.",
    tech: ["React Native", "Solana", "Mango v3", "TypeScript"],
    image: "/images/mango-pay/payments-pending.webp",
    device: "modern",
    href: "/work/mango-pay",
    bg: "#1B1923",
    fg: BONE,
  },
  {
    slug: "seasons",
    title: "Seasons",
    years: "2019—2022",
    role: "Co-founder & CTO",
    description:
      "A fashion rental membership in New York. I built the platform from scratch — React Native apps, a Node backend and Postgres — with real-time inventory across 10,000+ items and a recommendation engine that lifted engagement 40%. Hired a team of seven engineers; we raised $4.3M.",
    tech: ["React Native", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
    bg: INK,
    fg: BONE,
  },
  {
    slug: "artsy",
    icon: "/images/artsy/icon.jpg",
    title: "Artsy",
    years: "2017—2019",
    role: "Tech lead",
    blurb: "Collector tools and live auction bidding for 2M+ monthly users.",
    description:
      "Led a team of eight building collector tools for 2M+ monthly users: live auction bidding over WebSockets processing $100M+ a year, the BMW Art Guide in React Native, and a shared React component library adopted by four product teams.",
    tech: ["React", "React Native", "GraphQL", "Node.js", "Rails"],
    image: "/images/artsy/artsy-1.png",
    device: "classic",
    bg: "#FFFFFF",
    fg: INK,
  },
  {
    slug: "sundial",
    icon: "/images/sundial/icon.png",
    title: "Sundial",
    years: "2016",
    role: "Co-creator",
    description: "A music app built around one question: what were you listening to on this day, a year ago?",
    image: "/images/sundial/sundial-1.png",
    device: "classic",
    bg: "#50E3C2",
    fg: INK,
  },
  {
    slug: "october",
    icon: "/images/october/icon.png",
    title: "October",
    years: "2016",
    role: "Co-founder",
    description: "Follow the artists you love and browse their songs line by line, with every lyric ready to share.",
    image: "/images/october/october-2.png",
    device: "classic",
    bg: "#F5A623",
    fg: INK,
  },
  {
    slug: "often",
    icon: "/images/often/icon.png",
    title: "Often",
    years: "2015—2016",
    role: "Co-founder & CTO",
    blurb: "An iOS keyboard that held #1 on the App Store for 72 hours.",
    description:
      "An iOS keyboard for trending emoji, GIFs and music content. Swift on the device, Node and MongoDB behind it handling 1M+ API requests a day. 500K+ downloads and #1 on the App Store for 72 hours.",
    tech: ["Swift", "Node.js", "MongoDB", "AWS"],
    image: "/images/often/often-1.png",
    device: "classic",
    bg: "#36DEB5",
    fg: INK,
  },
  {
    slug: "drizzy",
    icon: "/images/drizzy/icon.png",
    title: "Drizzy",
    years: "2015",
    role: "Co-founder & CTO",
    description: "A keyboard that let you text in Drake lyrics.",
    image: "/images/drizzy/screenshots/drizzy-4.png",
    device: "classic",
    bg: "#FFC029",
    fg: INK,
  },
  {
    slug: "spotify",
    icon: "/images/spotify/icon.png",
    title: "Spotify",
    years: "2013—2015",
    role: "Software engineer",
    blurb: "Features across iOS, web and desktop for 100M+ listeners.",
    description:
      "Shipped features across the iOS, web and desktop clients for 100M+ listeners — including Radio improvements that lengthened listening sessions 15% and an A/B testing framework for rolling features out across platforms.",
    tech: ["Objective-C", "JavaScript", "C++", "Python"],
    image: "/images/spotify/spotify-1.png",
    device: "classic",
    bg: "#1ED760",
    fg: INK,
  },
  {
    slug: "yieldmo",
    title: "YieldMo",
    years: "2012—2013",
    role: "Founding engineer",
    description:
      "First frontend engineer. Built the frontend framework and a JavaScript ad SDK serving millions of impressions a day, and grew the frontend team from one to five.",
    tech: ["JavaScript", "HTML/CSS", "Python"],
    bg: INK,
    fg: BONE,
  },
]

export const projectByName = (name: string) => projects.find((p) => p.title.toLowerCase() === name.toLowerCase())

/** Projects with something to show on a phone. */
export const visualProjects = projects.filter((p) => p.image || p.video)

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

/** "eleven", "Eleven" — counts in copy follow the data. */
export const countWord = (n: number, capitalize = false) => {
  const word = NUMBER_WORDS[n] ?? String(n)
  return capitalize ? word[0].toUpperCase() + word.slice(1) : word
}

export const capabilities = [
  "Product design",
  "React & Next.js",
  "React Native",
  "Swift",
  "Node & GraphQL",
  "AI agents",
  "Payments",
  "Fundraising",
  "Hiring first teams",
]

// From the original site's skills section.
export const skillGroups = [
  {
    title: "Engineering",
    items: ["Full-stack development", "React, Next.js, TypeScript", "Node.js, Python, Go", "AWS, Docker, Kubernetes", "Database design & optimization"],
  },
  {
    title: "Design & product",
    items: ["User experience design", "Product strategy & roadmap", "Figma, Adobe Creative Suite", "Design systems & prototyping", "User research & testing"],
  },
  {
    title: "Entrepreneurship",
    items: ["Startup strategy & execution", "Fundraising & investor relations", "Team building & leadership", "Product-market fit discovery", "Growth & analytics"],
  },
]

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/l2succes/" },
  { label: "X", href: "https://x.com/lucsucces" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucsucces/" },
  { label: "GitHub", href: "https://github.com/l2succes" },
]

export const EMAIL = "hello@lucsucces.com"
