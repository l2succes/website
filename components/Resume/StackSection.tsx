import React from "react"
import { View, Text } from "@react-pdf/renderer"
import { styles } from "./styles"
import type { Skill } from "../../data/resume"

interface StackSectionProps {
  stack: Skill[]
}

export const StackSection = ({ stack }: StackSectionProps) => {
  return (
    <View style={styles.section}>
      {/* title + rows share one non-wrapping block so the heading never orphans */}
      <View wrap={false}>
        <Text style={styles.sectionTitle}>Tech Stack</Text>
        {stack.map((group, index) => (
          <View key={index} style={styles.stackRow}>
            <Text style={styles.stackLabel}>{group.category}</Text>
            <View style={styles.stackChips}>
              {group.items.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.chip}>
                  <Text style={styles.chipText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
