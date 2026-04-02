import React from "react"
import ReactPDF from "@react-pdf/renderer"
import { Resume } from "../components/Resume"
import { resumeData } from "../data/resume"
import { resumeDataCTO } from "../data/resume-cto"
import path from "path"
import fs from "fs"

async function generateResumes() {
  const outputDir = path.join(process.cwd(), "public")

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const resumes = [
    { data: resumeData, filename: "luc-succes-resume.pdf" },
    { data: resumeDataCTO, filename: "luc-succes-resume-cto.pdf" },
  ]

  for (const resume of resumes) {
    const outputPath = path.join(outputDir, resume.filename)
    console.log(`Generating ${resume.filename}...`)
    await ReactPDF.render(<Resume data={resume.data} />, outputPath)
    console.log(`✓ Generated: ${outputPath}`)
  }
}

generateResumes().catch((error) => {
  console.error("Failed to generate resumes:", error)
  process.exit(1)
})
