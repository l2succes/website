export interface Media {
  src: string
  kind: "image" | "video"
  /**
   * "phone": a bare screen capture, dropped into the site's own phone frame.
   * "poster": an already-composed tall image or film, shown as is.
   * "desktop": a wide capture in a plain window frame.
   */
  frame: "phone" | "poster" | "desktop"
  alt: string
  caption?: string
  /** Intrinsic size, so the tile keeps its shape before the media loads. */
  width: number
  height: number
  /** Backdrop for posters whose edges should melt into a surface. */
  surface?: string
  /** Films with sound get controls and a poster instead of a silent loop. */
  controls?: boolean
  poster?: string
}

/** One beat of the product walkthrough: a screen and the words that go with it. */
export interface StoryStep {
  kicker: string
  title: string
  body: string
  screen: { src: string; kind: "image" | "video"; alt: string }
}

export interface CaseStudy {
  slug: string
  /** The big sentence under the title. */
  tagline: string
  platform: string
  status: string
  links: { label: string; href: string }[]
  /** The first paragraph is the lede; it reads in on scroll. */
  intro: string[]
  stats: { value: string; label: string }[]
  features: { title: string; body: string }[]
  /** A scroll-driven walkthrough: the phone stays put while its screen changes. */
  story?: { title: string; steps: StoryStep[] }
  gallery: Media[]
  engineering: { title: string; body: string; note?: string }[]
  stack: string[]
  /** One honest takeaway to close on. */
  takeaway: string
}

const BLAZE_CDN = "https://blaze.money"

// Order here is the order of the "next case study" loop.
export const caseStudies: CaseStudy[] = [
  {
    slug: "blaze",
    tagline: "Agentic finance. Payments in 80+ currencies, and an AI CFO that runs the back office with a person on every send.",
    platform: "iOS, Android, web, MCP",
    status: "Live · Y Combinator S24",
    links: [{ label: "blaze.money", href: "https://blaze.money" }],
    intro: [
      "Blaze started as a better way to send money across borders. It settles over stablecoin rails and pays out on local ones like ACH, SEPA, SPEI and PIX, in more than 80 currencies.",
      "Then we pointed AI at the boring half of running a business. The AI CFO reads a company's bank, accounting and invoice data and does the work: pays bills, drafts invoices, creates payment links, pays contractors. It lives in the Blaze Business dashboard, and it plugs into ChatGPT and Claude as a remote MCP connector.",
      "I co-founded Blaze and run engineering. I wrote the first commit of the current monorepo and I'm still its top committer.",
    ],
    stats: [
      { value: "80+", label: "Currencies" },
      { value: "86", label: "Agent tools" },
      { value: "26", label: "MCP tools" },
      { value: "$1.2M", label: "Raised" },
    ],
    story: {
      title: "A day with Blaze",
      steps: [
        {
          kicker: "Welcome",
          title: "Live in a world without borders",
          body: "Blaze is for people whose money lives in more than one country. Paid in dollars, rent in pesos, a client in Europe. The first screen says it plainly.",
          screen: { src: "/images/blaze/story/intro.jpg", kind: "image", alt: "Blaze welcome screen: Live in a world without borders" },
        },
        {
          kicker: "Home",
          title: "One balance, in your currency",
          body: "Your balance shows in the currency you live in, with USDC underneath. Everything starts from four shortcuts: receive, manage your accounts, make a payment link, send to a contact.",
          screen: { src: "/images/blaze/story/home.jpg", kind: "image", alt: "Blaze home with account balance in pesos and USDC" },
        },
        {
          kicker: "Get paid",
          title: "Local account details, three countries",
          body: "A US account for ACH and wire, a Mexican CLABE and a European IBAN for SEPA. Share the details and get paid like a local, wherever the money comes from.",
          screen: { src: "/images/blaze/story/accounts.jpg", kind: "image", alt: "USD, MXN and EUR virtual accounts in Blaze" },
        },
        {
          kicker: "Or skip the banks",
          title: "Stablecoins on any network",
          body: "Receive USDC on Stellar, Ethereum or Solana. Copy an address or show a QR code, and it lands in the same balance.",
          screen: { src: "/images/blaze/story/stablecoins.jpg", kind: "image", alt: "Receiving USDC on Stellar, Ethereum or Solana" },
        },
        {
          kicker: "Send",
          title: "Your payment is on the move",
          body: "Money settles over stablecoin rails and pays out on local ones like ACH, SEPA, SPEI and PIX. Every step shows up in your transaction history.",
          screen: { src: "/images/blaze/story/sent.jpg", kind: "image", alt: "Blaze payment sent confirmation" },
        },
        {
          kicker: "Insights",
          title: "Know where it went",
          body: "Monthly spend against your budget, a heads-up when a category jumps, and spending broken down by country.",
          screen: { src: "/images/blaze/story/insights.jpg", kind: "image", alt: "Blaze insights with monthly spend and spending by country" },
        },
        {
          kicker: "Widget",
          title: "Rates on your home screen",
          body: "A home screen widget with live exchange rates, so you know what a dollar is worth in pesos before you open the app.",
          screen: { src: "/images/blaze/story/widget.jpg", kind: "image", alt: "Blaze currency rates widget, USD to MXN" },
        },
      ],
    },
    features: [
      {
        title: "Blaze Business",
        body: "A dashboard for bills, invoices, customers, products, coupons and accounting, with owner statements and insights on top.",
      },
      {
        title: "The AI CFO",
        body: "86 tools across balances, bills, receivables, forecasting and runway, reconciliation, payroll, accounting reports, FX and payouts. Ask it what you can afford this month and it answers from your own books.",
      },
      {
        title: "Bring your own agent",
        body: "The same agent ships as a remote MCP server with OAuth scopes. 20 tools read, 4 propose, 2 execute, and every proposal hands back a link for a person to confirm. There's a CLI too, @blaze-money/cli.",
      },
      {
        title: "Websites for small businesses",
        body: "Websites as a service for the same customers who get paid through Blaze: restaurants, barbers, studios, auto spas.",
      },
    ],
    gallery: [
      {
        src: "/images/blaze/card-clouds.jpg",
        kind: "image",
        frame: "poster",
        alt: "A hand reaching up to a yellow Blaze Card against the sky",
        caption: "The Blaze Card",
        width: 1080,
        height: 1440,
      },
      {
        src: "/images/blaze/dashboard.jpg",
        kind: "image",
        frame: "desktop",
        alt: "Blaze Business dashboard with incoming payments and balances",
        caption: "Blaze Business",
        width: 2000,
        height: 1326,
      },
      {
        src: `${BLAZE_CDN}/ai-agents/blaze-business-demo.mp4`,
        kind: "video",
        frame: "desktop",
        alt: "Blaze Business and the AI CFO demo",
        caption: "Agentic finance, end to end",
        width: 1920,
        height: 1080,
      },
    ],
    engineering: [
      {
        title: "The agent can't move money on its own",
        body: "Confirm methods are never registered as agent tools. The model proposes a payment, a person confirms it in the UI, and only then does the server execute it. Every payment the agent starts is tagged as agent-initiated.",
      },
      {
        title: "Auto-pay with a ceiling the model can't see",
        body: "Owners can let the agent pay small bills. The limit is the smaller of 1% of available balance or $500, computed per payment on the server, along with a 24-hour cool-off for new payees, a duplicate check and the bill policy engine. Fail any gate and it falls back to asking.",
      },
      {
        title: "Evals on every agent change",
        body: "The harness runs the real agent against seeded staging data and scores tool routing, arguments and numeric grounding: any dollar figure that can't be traced back to tool data gets flagged. CI runs only the scenarios a pull request touches, comments the result, and drafts new scenarios for tools nothing covers yet. The MCP suite hard-fails if the model ever says a proposal was paid.",
      },
      {
        title: "Many models, one agent",
        body: "The Vercel AI SDK routes across Bedrock, Vertex, Azure and OpenAI, with a direct Claude driver alongside. The business always comes from server context, never from model input, and MCP output is projected and redacted per entity.",
      },
    ],
    stack: ["NestJS", "GraphQL", "Prisma", "PostgreSQL", "BullMQ", "Stellar", "Next.js", "React Native", "Expo", "Vercel AI SDK", "MCP", "Claude", "Gemini", "Kubernetes"],
    takeaway: "The model is the easy part of an AI CFO. Most of the work is deciding exactly where it has to stop and ask a person.",
  },
  {
    slug: "claire",
    tagline: "All your chats. One AI. WhatsApp, Telegram and Instagram in one inbox that keeps track of what you promised.",
    platform: "iOS, web, desktop",
    status: "Private beta · Open source",
    links: [
      { label: "useclaire.co", href: "https://useclaire.co" },
      { label: "GitHub", href: "https://github.com/l2succes/claire" },
    ],
    intro: [
      `People get hundreds of messages a day across too many apps. The big things get handled. The small promises don't: "I'll send the deck tomorrow." Claire started as a WhatsApp assistant built around that problem.`,
      "It grew into a full client. WhatsApp, Telegram and Instagram land in one inbox on iOS, web and desktop, and an AI layer sits on top. You can ask questions across every chat, draft replies that fit who you're talking to, and let Open Loops catch commitments before they go stale.",
      "I'm building it on my own and in public. The server is AGPL and the clients are Apache 2.0.",
    ],
    stats: [
      { value: "3", label: "Networks live" },
      { value: "3", label: "Apps, one client" },
      { value: "438", label: "Commits" },
    ],
    features: [
      {
        title: "One inbox",
        body: "Matrix bridges bring WhatsApp, Telegram and Instagram into one message format. You sign in with a QR or pairing code, an SMS code, or Instagram's own flow, and everything shows up in one list.",
      },
      {
        title: "Open Loops",
        body: `Claire catches "I'll…" and "can you…", tracks who owes what, reminds you before it's late, and closes the loop when the message that settles it arrives.`,
      },
      {
        title: "Ask Claire",
        body: "Ask anything across all your conversations. Answers come from hybrid keyword and vector search, and every citation is checked against the messages that were actually retrieved before you see it.",
      },
      {
        title: "People and memory",
        body: "One identity per person across networks, a memory of how you talk to them, and a voice profile so suggested replies sound like you.",
      },
      {
        title: "Rules and plugins",
        body: "Auto-replies for keywords, birthdays and thank-yous with rate caps, and a plugin SDK with typed triggers, actions and permissions.",
      },
    ],
    gallery: [
      { src: "/images/claire/inbox.jpg", kind: "image", frame: "phone", alt: "Claire unified inbox", caption: "One inbox", width: 750, height: 1624 },
      { src: "/images/claire/loops.jpg", kind: "image", frame: "phone", alt: "Claire Open Loops", caption: "Open Loops", width: 750, height: 1624 },
      { src: "/images/claire/ask.jpg", kind: "image", frame: "phone", alt: "Ask Claire answering with sources", caption: "Ask Claire", width: 750, height: 1624 },
      {
        src: "/images/claire/workspace.jpg",
        kind: "image",
        frame: "desktop",
        alt: "Claire desktop workspace with a promise found in a WhatsApp chat",
        caption: "Desktop, with a promise caught mid-chat",
        width: 1800,
        height: 1013,
      },
      { src: "/images/claire/chat.jpg", kind: "image", frame: "phone", alt: "A WhatsApp chat in Claire", caption: "Any network, same chat", width: 750, height: 1624 },
      {
        src: "/images/claire/workspace-ask.jpg",
        kind: "image",
        frame: "desktop",
        alt: "Ask Claire on desktop",
        caption: "Ask Claire on desktop",
        width: 1800,
        height: 1013,
      },
    ],
    engineering: [
      {
        title: "Sends that survive a dropped connection",
        body: "Each outgoing message gets a transaction ID hashed from the user, network, chat, kind and the client's request ID, so retries and server restarts never send twice. On the phone, an outbox holds messages and reactions through a lost connection and replays them on reconnect.",
      },
      {
        title: "Cheap before smart",
        body: "A free, deterministic gate reads every message first, looking for commitment, request, time and resolution language. Only messages that pass reach one combined extract-and-reconcile model call. Whether a loop involves you is decided in plain code, not by the model.",
      },
      {
        title: "Bridges that come back",
        body: "Only the metadata needed to restore a bridge session is saved. Pairing codes and cookies stay in encrypted Redis and never touch Postgres. An operations console shows the health of every bridge.",
      },
      {
        title: "A desktop app that remembers you",
        body: "The Electron app serves its bundle from a custom secure claire-app:// scheme. Under file:// the page gets an opaque origin, local storage isn't reliable, and people would be signed out on every launch.",
      },
    ],
    stack: ["Expo", "React Native", "React Native Web", "Electron", "Bun", "Express", "Supabase", "Matrix", "Redis", "Vercel AI SDK", "Railway"],
    takeaway: "A messaging app lives or dies on the boring parts: the send that goes through on bad signal, the bridge that reconnects. The AI only matters once those work.",
  },
  {
    slug: "vibed",
    tagline: "Your app idea. Made real. A product studio that takes founders from an idea to an interactive prototype in 30 days.",
    platform: "Web",
    status: "Live · Studio in prototype",
    links: [{ label: "tryvibed.ai", href: "https://tryvibed.ai" }],
    intro: [
      "AI tools can get a founder most of the way to an app. The last stretch is where they stall: a vibe-coded build that can't ship, or an idea that never got scoped. Vibed is a studio for that gap.",
      "There are two ways in. Founders with only an idea get four weeks from idea to prototype. Founders with a half-built app get help making it launchable. Both start in the same place, with a clear brief.",
      "I co-founded Vibed and built the site, the funnels and the Studio prototype. The rule at the top of the README: strategy helps, it never blocks building.",
    ],
    stats: [
      { value: "30", label: "Days, idea to prototype" },
      { value: "14", label: "Questions to a brief" },
      { value: "7", label: "Tools in the coder loop" },
    ],
    features: [
      {
        title: "Strategy",
        body: "A guided interview that builds a typed business brief and product brief as you answer, filling in a live sidebar: stage, problem, audience, revenue, core journey, platform.",
      },
      {
        title: "Builder",
        body: `A chat that edits a running app. "Make it purple" or "use stack navigation" patches the preview, and the phone on the right updates.`,
      },
      {
        title: "A real Expo preview",
        body: "The phone is a real React Native Web app in an iframe, driven over postMessage with origin and schema checks on every message. Phone, tablet and desktop viewports.",
      },
      {
        title: "Pricing without a sales call",
        body: "A 15-step cost calculator and a prototype estimator that qualify a project without quoting a price, then book straight onto the calendar. If the CRM webhook is down, leads fall back to Calendly instead of disappearing.",
      },
      {
        title: "Studio tooling",
        body: "A design system page, a browser-based Instagram ad editor that exports 1080×1350, and scripts that generate creative and logo explorations.",
      },
    ],
    gallery: [
      {
        src: "/images/vibed/builder.jpg",
        kind: "image",
        frame: "desktop",
        alt: "Vibed Studio Builder with a chat and a live app preview",
        caption: "Builder: chat on the left, a live Expo app on the right",
        width: 1800,
        height: 1125,
      },
      { src: "/images/vibed/phone.jpg", kind: "image", frame: "phone", alt: "Vibed on a phone", caption: "tryvibed.ai", width: 750, height: 1623 },
      {
        src: "/images/vibed/strategy.jpg",
        kind: "image",
        frame: "desktop",
        alt: "Vibed Studio Strategy interview with a live brief",
        caption: "Strategy: every answer fills in the brief",
        width: 1800,
        height: 1125,
      },
      {
        src: "/images/vibed/landing.jpg",
        kind: "image",
        frame: "desktop",
        alt: "The Vibed landing page",
        caption: "The front door",
        width: 1800,
        height: 1125,
      },
    ],
    engineering: [
      {
        title: "A boring agent, on purpose",
        note: "Designed",
        body: "Not an open-ended agent but a fixed loop. A planner returns a typed change plan. The coder gets seven tools and no shell. Two automatic repair attempts at most, a reviewer model only for risky changes like auth, payments or deleting data, and a snapshot after every build so a failed check keeps the last good preview.",
      },
      {
        title: "Generated code never sits next to secrets",
        note: "Designed",
        body: "Generated apps run in sandboxes with no model credentials and no access to cloud metadata or private networks. Previews are signed per build and served from their own origin.",
      },
      {
        title: "Realtime without Redis",
        note: "Designed",
        body: "Events are written to Postgres before they're broadcast, so a client that reconnects can catch up. Advisory locks and idempotency records stand in for Redis until the numbers say otherwise.",
      },
      {
        title: "What runs today",
        note: "Shipped",
        body: "A Next.js app compiled through Vinext and Vite 8 and deployed on Vercel, a validated preview bridge between the Studio and the Expo app, and a test suite on Node's built-in runner.",
      },
    ],
    stack: ["Next.js", "React 19", "Vite", "Expo", "React Native Web", "Tailwind", "GSAP", "Vercel"],
    takeaway: "Founders don't need more code generated faster. They need someone to help them decide what's worth building, then show it to them working.",
  },
  {
    slug: "catching-feelings",
    tagline: "A game for two phones. Same question, same 30 seconds, then both answers flip at once.",
    platform: "iOS, Android, web",
    status: "TestFlight beta",
    links: [{ label: "catchinfeelings.co", href: "https://www.catchinfeelings.co/" }],
    intro: [
      "Two people answer the same question about themselves at the same moment, each on their own phone. Then both answers flip over together. Same answer is a heart. A different answer is a talking point: something to talk about, never a fail.",
      `It started as a game for couples. Then we pointed it at dating: instead of sending "hey," you send someone a game. So now there's a Discover feed, invites and chat built around the core round.`,
      "I co-founded it and designed it, and built the Expo apps, the Next.js site and the Firebase backend in one monorepo.",
    ],
    stats: [
      { value: "10", label: "Questions a round" },
      { value: "30", label: "Seconds each" },
      { value: "20+", label: "Decks" },
      { value: "4", label: "Languages" },
    ],
    story: {
      title: "One round",
      steps: [
        {
          kicker: "Welcome",
          title: "How well do you know your crush?",
          body: "Meet Maya and Jordan. The whole game is one idea: answer the same questions about yourselves, and every match fills a heart.",
          screen: { src: "/images/catching-feelings/welcome.mp4", kind: "video", alt: "Maya and Jordan on the 3D welcome screen" },
        },
        {
          kicker: "Play",
          title: "Start a game, or join one",
          body: "Create a game and send the code, or join with someone else's. Not online together? Play when you're both free, and the game waits up to 48 hours.",
          screen: { src: "/images/catching-feelings/story/home.jpg", kind: "image", alt: "Play tab with create game, join game and categories" },
        },
        {
          kicker: "Ten questions",
          title: "Answer for yourself",
          body: "Same question, same moment, each on your own phone. You have 30 seconds. No peeking at theirs.",
          screen: { src: "/images/catching-feelings/story/question.jpg", kind: "image", alt: "A question with four answers and a progress bar" },
        },
        {
          kicker: "The reveal",
          title: "See how in sync you are",
          body: "Both answers flip at once. Same answer is a heart. At the end you get your hearts, your talking points and the XP you earned together.",
          screen: { src: "/images/catching-feelings/story/results.jpg", kind: "image", alt: "Results: 7 hearts and 3 talking points" },
        },
        {
          kicker: "Talking points",
          title: "A miss is the good part",
          body: "Different answers aren't a fail. They're the thing to talk about. React to theirs, or take it straight to chat.",
          screen: { src: "/images/catching-feelings/story/talking-point.jpg", kind: "image", alt: "A talking point with both answers and reactions" },
        },
        {
          kicker: "Chat",
          title: "Keep it going",
          body: "Talking points follow you into chat, and you can send the next round from there.",
          screen: { src: "/images/catching-feelings/story/chat.jpg", kind: "image", alt: "Chat with talking points and a round invite" },
        },
        {
          kicker: "Your bond",
          title: "Watch it grow",
          body: "Games together, streaks, where you click and where you differ. A running score of how in sync the two of you are.",
          screen: { src: "/images/catching-feelings/story/bond.jpg", kind: "image", alt: "Bond screen with compatibility and streak" },
        },
      ],
    },
    features: [
      {
        title: "Voice answers",
        body: "Say your answer instead of tapping one. It's recorded, uploaded and transcribed with Gemini 2.5 Flash, and the timer pauses while you talk.",
      },
      {
        title: "Decks for every mood",
        body: "Netflix & Chill, Spicy Takes, Love Languages, Green Flags, First Date, Food Fights and more, plus a You + Me deck written by AI.",
      },
      {
        title: "Play later",
        body: "Not online at the same time? Each player locks in their answers on their own, and the game waits up to 48 hours for the other.",
      },
      {
        title: "Streaks, XP and bonds",
        body: "Progress is computed on the server: levels, badges, a personal streak and a streak for each pair, Duolingo-style.",
      },
      {
        title: "Answers that still match across languages",
        body: "English, French, Spanish and Portuguese. Answers are stored as keys, not text, so two people playing in different languages still match.",
      },
    ],
    gallery: [
      {
        src: "/images/catching-feelings/launch.mp4",
        kind: "video",
        frame: "poster",
        alt: "Catchin' Feelings launch film",
        caption: "The launch film, with sound",
        width: 540,
        height: 960,
        controls: true,
        poster: "/images/catching-feelings/launch-poster.jpg",
      },
      {
        src: "/images/catching-feelings/preview.mp4",
        kind: "video",
        frame: "poster",
        alt: "Catchin' Feelings App Store preview film",
        caption: "App Store preview",
        width: 600,
        height: 1300,
      },
      { src: "/images/catching-feelings/story/badges.jpg", kind: "image", frame: "phone", alt: "Badges earned together", caption: "Badges", width: 750, height: 1630 },
    ],
    engineering: [
      {
        title: "Two phones, one answer",
        body: "The first version wrote an answer and then read the room. Each phone only ever saw its own answer and games got stuck. Scoring moved into a database transaction, so whichever transaction sees both answers moves the round to the reveal.",
      },
      {
        title: "Don't skip questions",
        body: "Both phones ask for the next question after the reveal, and both requests used to land. The transaction now only advances from the reveal state, so the second call does nothing. A shared state machine lists every allowed move: lobby, question, reveal, complete.",
      },
      {
        title: "Results, exactly once",
        body: "The finish time is written once inside the transaction and a database rule stops it from ever changing. A Cloud Function fires on that write and records the match, XP and streaks for both players. That replaced the host's phone saving results.",
      },
      {
        title: "One rulebook for app and server",
        body: "Scoring is a set of pure functions in a shared package, used by the app and the functions alike. Two timeouts are never a heart, and typed or voice answers always count as talking points.",
      },
    ],
    stack: ["Expo", "React Native", "Expo Router", "Reanimated", "Next.js", "Firebase", "Cloud Functions", "Gemini", "EAS"],
    takeaway: "Realtime multiplayer is mostly about the moment two phones do the same thing at once. Get that right and the game feels like magic.",
  },
]

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug)
