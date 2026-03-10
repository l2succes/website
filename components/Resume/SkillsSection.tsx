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
      <Text style={styles.sectionTitle}>Technical Skills</Text>
      <View style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillColumn}>
            <Text style={styles.skillCategory}>{skill.category}</Text>
            <Text style={styles.skillList}>{skill.items.join(", ")}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
