import React from "react"
import ReactPDF from "@react-pdf/renderer"
import { Resume } from "../components/Resume"
import { resumeData } from "../data/resume"
import path from "path"
import fs from "fs"

async function generateResume() {
  const outputDir = path.join(process.cwd(), "public")
  const outputPath = path.join(outputDir, "luc-succes-resume.pdf")

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  console.log("Generating resume PDF...")

  await ReactPDF.render(<Resume data={resumeData} />, outputPath)

  console.log(`✓ Resume generated: ${outputPath}`)
}

generateResume().catch((error) => {
  console.error("Failed to generate resume:", error)
  process.exit(1)
})
