import React from "react"
import { Document, Page, Text } from "@react-pdf/renderer"
import { styles } from "./styles"
import { Header } from "./Header"
import { SummarySection } from "./SummarySection"
import { SkillsSection } from "./SkillsSection"
import { ExperienceSection } from "./ExperienceSection"
import { EducationSection } from "./EducationSection"
import type { ResumeData } from "../../data/resume"

interface ResumeProps {
  data: ResumeData
}

export const Resume = ({ data }: ResumeProps) => {
  // Split experience: first 3 on page 1, rest on page 2
  const page1Experience = data.experience.slice(0, 3)
  const page2Experience = data.experience.slice(3)

  return (
    <Document
      title={`${data.contact.name} - Resume`}
      author={data.contact.name}
      subject="Resume"
      keywords="software engineer, full stack, react, node.js, typescript"
    >
      <Page size="LETTER" style={styles.page}>
        <Header contact={data.contact} />
        <SummarySection summary={data.summary} />
        <SkillsSection skills={data.skills} />
        <ExperienceSection experience={page1Experience} />
        <Text style={styles.pageNumber}>1</Text>
      </Page>

      <Page size="LETTER" style={styles.page}>
        <ExperienceSection experience={page2Experience} continued />
        <EducationSection education={data.education} />
        <Text style={styles.pageNumber}>2</Text>
      </Page>
    </Document>
  )
}
