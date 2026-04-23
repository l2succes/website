import React from "react"
import ReactPDF, { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer"
import path from "path"
import fs from "fs"

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 72,
    paddingRight: 72,
    lineHeight: 1.6,
    color: "#1a1a1a",
  },
  header: {
    marginBottom: 32,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  contact: {
    fontSize: 10,
    color: "#555",
  },
  date: {
    marginBottom: 24,
    color: "#555",
    fontSize: 10,
  },
  salutation: {
    marginBottom: 16,
  },
  paragraph: {
    marginBottom: 14,
  },
  closing: {
    marginTop: 24,
    marginBottom: 4,
  },
  signature: {
    fontFamily: "Helvetica-Bold",
  },
})

function CoverLetter() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>Luc Succes</Text>
          <Text style={styles.contact}>luc@lucsucces.com  •  San Francisco, USA  •  lucsucces.com</Text>
        </View>

        <Text style={styles.date}>March 25, 2026</Text>

        <Text style={styles.salutation}>Dear R Squared AI Team,</Text>

        <Text style={styles.paragraph}>
          I came across the AI Technical Facilitator role and wanted to reach out. I've spent the past year
          building production AI systems: agents, tool use pipelines, and full stack applications on top of
          Anthropic and OpenAI APIs. This is the work I'm doing right now, so the role felt like a natural fit.
        </Text>

        <Text style={styles.paragraph}>
          My background is as a serial founder and full stack engineer. I co-founded Blaze, a YC S24
          stablecoin payments platform for digital nomads, where I architected the entire system using
          Next.js, NestJS, Prisma, PostgreSQL, and Redis. Before that I built Seasons (raised $4.3M,
          hired a team of 7 engineers from scratch) and Often (500K downloads, number one in the App Store
          for 72 hours). I was also the founding engineer at YieldMo, where I grew the frontend team from
          1 to 5, and spent two years at Artsy as a Tech Lead building real time auction systems at scale.
        </Text>

        <Text style={styles.paragraph}>
          On the AI side, I have real opinions about agent architecture: when tool calling makes sense versus
          chaining, how to structure memory and context, and the tradeoffs between model providers. Day to
          day I work heavily with Claude Code and have used Codex as well. I've also experimented with a
          range of other tools and models as the space has been moving fast. I'm comfortable across
          the full stack you described: React and Next.js on the front end, Python and FastAPI on the
          back end, and the AI layer in between. I treat prompt engineering as a core part of the work,
          not an afterthought, and have shipped agentic workflows that connect to external services and
          actually run in production.
        </Text>

        <Text style={styles.paragraph}>
          What stands out to me about R Squared AI is the forward deployed model. As a founder, I operated
          the same way: embedded with users, owning outcomes, not advising from a distance. The emphasis on
          shipping working systems over pilots is exactly how I think about building. The right answer was
          always to get something real in front of people quickly and then improve from there.
        </Text>

        <Text style={styles.paragraph}>
          I'd love to chat more. Happy to share GitHub, working examples, or anything else that would be useful.
        </Text>

        <Text style={styles.closing}>Best,</Text>
        <Text style={styles.signature}>Luc Succes</Text>
      </Page>
    </Document>
  )
}

async function generate() {
  const outputDir = path.join(process.cwd(), "public")
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  const outputPath = path.join(outputDir, "luc-succes-cover-letter-rsquared.pdf")
  console.log("Generating cover letter...")
  await ReactPDF.render(<CoverLetter />, outputPath)
  console.log(`✓ Generated: ${outputPath}`)
}

generate().catch((error) => {
  console.error("Failed to generate cover letter:", error)
  process.exit(1)
})
