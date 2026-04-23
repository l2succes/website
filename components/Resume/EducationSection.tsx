import React from "react"
import { View, Text } from "@react-pdf/renderer"
import { styles } from "./styles"
import type { Education } from "../../data/resume"

interface EducationSectionProps {
  education: Education[]
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Education</Text>
      {education.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <View style={styles.educationMain}>
            <Text style={styles.institution}>{edu.institution}</Text>
            <Text style={styles.degree}>
              {edu.degree}
              {edu.field && `, ${edu.field}`}
            </Text>
          </View>
          <Text style={styles.year}>{edu.year}</Text>
        </View>
      ))}
    </View>
  )
}
