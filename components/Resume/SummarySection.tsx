import React from "react"
import { View, Text } from "@react-pdf/renderer"
import { styles } from "./styles"

interface SummarySectionProps {
  summary: string
}

export const SummarySection = ({ summary }: SummarySectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.summary}>{summary}</Text>
    </View>
  )
}
