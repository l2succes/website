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
  return (
    <Document
      title={`${data.contact.name} - Resume`}
      author={data.contact.name}
      subject="Resume"
      keywords="software engineer, full stack, react, node.js, typescript"
    >
      <Page size="LETTER" style={styles.page} wrap>
        <Header contact={data.contact} />
        <SummarySection summary={data.summary} />
        <SkillsSection skills={data.skills} />
        <ExperienceSection experience={data.experience} />
        <EducationSection education={data.education} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  )
}
