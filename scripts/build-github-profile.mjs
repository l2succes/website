// Renders the GitHub profile assets (banner + selected-work tiles) into github-profile/assets
// from the same mark, palette and fonts the site uses. Run: node scripts/build-github-profile.mjs
import { chromium } from "playwright-core"
import { mkdirSync, readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const out = path.join(root, "github-profile/assets")
mkdirSync(out, { recursive: true })

const INK = "#0B0B0A"
const BONE = "#EDEDE9"
const lsPath = /LS_PATH =\s*"([^"]+)"/.exec(readFileSync(path.join(root, "lib/site/ls-path.ts"), "utf8"))[1]
const font = (file) => pathToFileURL(path.join(root, "public/fonts", file)).href
const img = (p) => pathToFileURL(path.join(root, "public/images", p)).href

const base = `
@font-face { font-family: "TT Norms"; font-weight: 600; src: url(${font("TTNormsProDemiBold.woff2")}); }
@font-face { font-family: "TT Norms"; font-weight: 400; font-style: italic; src: url(${font("TTNormsProItalic.woff2")}); }
@font-face { font-family: "TT Norms"; font-weight: 400; src: url(${font("TTNormsProRegular.woff2")}); }
* { margin: 0; box-sizing: border-box; }
body { font-family: "TT Norms", system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
.mono { font-family: ui-monospace, "SF Mono", Menlo, monospace; letter-spacing: .08em; text-transform: uppercase; }
`

// LS_PATH lives in a 1024 box; crop to its bounding box so the mark can be sized exactly.
const mark = (fill, h) =>
  `<svg viewBox="292 192 458.2 665.9" height="${h}" style="display:block"><path d="${lsPath}" fill="${fill}"/></svg>`

// The mark inside a thin rounded box, the same treatment the tiles give an app icon.
const boxedMark = (fg, box, markH, ring) =>
  `<div style="width:${box}px;height:${box}px;border:${ring}px solid ${fg};border-radius:${Math.round(box * 0.24)}px;display:flex;align-items:center;justify-content:center">${mark(fg, markH)}</div>`

const banner = (bg, fg, dim) => `<style>${base}
body { width: 1280px; height: 400px; background: ${bg}; color: ${fg}; position: relative; overflow: hidden; }
.mark { position: absolute; left: 112px; top: 50%; transform: translateY(-50%); }
.copy { position: absolute; left: 400px; top: 50%; transform: translateY(-50%); }
h1 { font-weight: 600; font-size: 92px; letter-spacing: -.035em; line-height: .95; }
p { margin-top: 22px; font-size: 30px; font-style: italic; color: ${dim}; letter-spacing: -.01em; }
.meta { position: absolute; left: 400px; bottom: 44px; font-size: 14px; color: ${dim}; }
</style>
<div class="mark">${boxedMark(fg, 216, 124, 3)}</div>
<div class="copy"><h1>Luc Succes</h1><p>Engineer and founder. I build products.</p></div>
<div class="meta mono">New York &nbsp;·&nbsp; lucsucces.com</div>`

// A tile's icon, optionally with colors swapped so it holds up on the tile's background.
const iconSrc = (icon, swap = {}) => {
  if (!Object.keys(swap).length) return img(icon)
  let svg = readFileSync(path.join(root, "public/images", icon), "utf8")
  for (const [from, to] of Object.entries(swap)) svg = svg.replaceAll(from, to)
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`
}

const tile = ({ bg, fg, icon, iconSwap, iconBorder, name, line, years }) => `<style>${base}
body { width: 600px; height: 340px; background: ${bg}; color: ${fg}; position: relative; overflow: hidden; }
.icon { position: absolute; left: 36px; top: 36px; width: 84px; height: 84px; border-radius: 20px; object-fit: cover; }
.years { position: absolute; right: 36px; top: 42px; font-size: 14px; opacity: .65; }
h2 { position: absolute; left: 36px; bottom: 100px; font-weight: 600; font-size: 56px; letter-spacing: -.035em; line-height: 1; }
p { position: absolute; left: 36px; right: 36px; bottom: 36px; font-size: 21px; line-height: 1.3; opacity: .8; letter-spacing: -.005em; }
</style>
<img class="icon" src="${iconSrc(icon, iconSwap)}" ${iconBorder ? `style="box-shadow: 0 0 0 1.5px ${iconBorder}; padding: 10px"` : ""}><div class="years mono">${years}</div>
<h2>${name}</h2><p>${line}</p>`

const ogImage = `<style>${base}
body { width: 1200px; height: 630px; background: ${INK}; display: flex; align-items: center; justify-content: center; }
</style>${boxedMark(BONE, 380, 220, 4)}`

const jobs = [
  // The site's link-preview image, at its native 1200 × 630.
  { file: "../../public/images/og-image.png", w: 1200, h: 630, dpr: 1, html: ogImage },
  { file: "banner-dark.png", w: 1280, h: 400, html: banner(INK, BONE, "rgba(237,237,233,.55)") },
  { file: "banner-light.png", w: 1280, h: 400, html: banner(BONE, INK, "rgba(11,11,10,.55)") },
  ...[
    { file: "work-blaze.png", bg: "#FAF000", fg: INK, icon: "blaze/icon.svg", name: "Blaze", years: "2023—Now", iconBorder: INK, line: "Money in 80+ currencies, run by an AI CFO. YC S24." },
    { file: "work-claire.png", bg: "#DFFF64", fg: INK, icon: "claire/icon.svg", name: "Claire", years: "2025—Now", line: "One AI inbox for WhatsApp, Telegram and Instagram." },
    { file: "work-vibed.png", bg: "#11110F", fg: "#C8FF32", icon: "vibed/icon.svg", name: "Vibed", years: "2026", iconBorder: "#C8FF32", iconSwap: { "#11110f": BONE }, line: "From app idea to working prototype in 30 days." },
    { file: "work-catching-feelings.png", bg: "#3F215A", fg: BONE, icon: "catching-feelings/icon.png", name: "Catching Feelings", years: "2024", line: "A compatibility game for couples and friends." },
  ].map((t) => ({ file: t.file, w: 600, h: 340, html: tile(t) })),
]

const browser = await chromium.launch({ channel: "chrome" })
for (const j of jobs) {
  const page = await browser.newPage({ viewport: { width: j.w, height: j.h }, deviceScaleFactor: j.dpr ?? 2 })
  // file:// origin so the local fonts and images load.
  await page.goto(pathToFileURL(path.join(root, "package.json")).href)
  await page.setContent(j.html, { waitUntil: "load" })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: path.join(out, j.file) })
  await page.close()
  console.log("wrote", path.basename(j.file))
}
await browser.close()
