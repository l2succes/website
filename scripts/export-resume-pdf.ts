// Prints the /resume page to PDF with headless Chrome, one file per variant, into public/.
//
//   yarn generate:resume                                  # starts its own dev server
//   RESUME_URL=http://localhost:3000 yarn generate:resume # reuse a server that's already running
//
// Uses the installed Google Chrome; set CHROME_PATH to point at another Chromium build.
import { spawn, type ChildProcess } from "child_process"
import path from "path"
import { chromium } from "playwright-core"
import { resumeData } from "../data/resume"
import { resumeDataCTO } from "../data/resume-cto"

const VARIANTS = [
  { query: "", title: resumeData.contact.title, file: "luc-succes-resume.pdf" },
  { query: "?v=cto", title: resumeDataCTO.contact.title, file: "luc-succes-resume-cto.pdf" },
]
const OWN_PORT = 4317

async function isUp(url: string) {
  try {
    return (await fetch(url)).ok
  } catch {
    return false
  }
}

async function waitFor(url: string, timeoutMs = 180_000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    if (await isUp(url)) return
    await new Promise((r) => setTimeout(r, 1000))
  }
  throw new Error(`Server at ${url} did not come up within ${timeoutMs / 1000}s`)
}

async function main() {
  let base = process.env.RESUME_URL
  let server: ChildProcess | null = null

  if (!base) {
    base = `http://localhost:${OWN_PORT}`
    console.log(`Starting a dev server on :${OWN_PORT}…`)
    // A separate build dir so this never collides with a dev server you already have running.
    server = spawn("npx", ["next", "dev", "-p", String(OWN_PORT)], {
      env: { ...process.env, NEXT_DIST_DIR: ".next-resume" },
      stdio: "ignore",
    })
  }

  try {
    await waitFor(`${base}/resume`)
    const browser = await chromium.launch(
      process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" }
    )
    const page = await browser.newPage({ reducedMotion: "reduce" })

    for (const variant of VARIANTS) {
      await page.goto(`${base}/resume${variant.query}`, { waitUntil: "networkidle" })
      await page.waitForFunction(
        (title) => document.querySelector(".ls-sheet__title")?.textContent === title,
        variant.title
      )
      await page.evaluate(() => document.fonts.ready)
      await page.emulateMedia({ media: "print" })
      const out = path.join(process.cwd(), "public", variant.file)
      await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true })
      await page.emulateMedia({ media: "screen" })
      console.log(`✓ ${out}`)
    }

    await browser.close()
  } finally {
    server?.kill()
  }
}

main().catch((error) => {
  console.error("Failed to export résumé PDFs:", error)
  process.exit(1)
})
