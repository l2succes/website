import React from "react"
import { View, Text } from "@react-pdf/renderer"
import { styles } from "./styles"
import type { Skill } from "../../data/resume"

interface SkillsSectionProps {
  skills: Skill[]
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Skills</Text>
      {skills.map((skill, index) => (
        <View key={index} style={styles.skillRow}>
          <Text style={styles.skillRowLabel}>{skill.category}</Text>
          <Text style={styles.skillRowItems}>{skill.items.join(", ")}</Text>
        </View>
      ))}
    </View>
  )
}
