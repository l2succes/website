import React from "react"
import { View, Text } from "@react-pdf/renderer"
import { styles } from "./styles"
import type { Experience } from "../../data/resume"

interface ExperienceSectionProps {
  experience: Experience[]
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experience</Text>
      {experience.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </View>
  )
}

interface ExperienceItemProps {
  experience: Experience
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const dateRange = `${experience.startDate} - ${experience.endDate}`
  const shouldBreakBefore = experience.company === "Often"

  return (
    <View style={styles.experienceItem} break={shouldBreakBefore}>
      <View style={styles.companyRow}>
        <Text style={styles.company}>{experience.company}</Text>
        <Text style={styles.dates}>{dateRange}</Text>
      </View>

      <View style={styles.roleRow}>
        <Text style={styles.role}>
          {experience.roles.map((r) => r.title).join(" → ")}
        </Text>
        <Text style={styles.location}>{experience.location}</Text>
      </View>

      <View style={styles.bulletList}>
        {experience.highlights.map((highlight, index) => (
          <Text key={index} style={styles.bullet}>
            • {highlight}
          </Text>
        ))}
      </View>
    </View>
  )
}
