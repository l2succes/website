import React from "react"
import { View, Text } from "@react-pdf/renderer"
import { styles } from "./styles"
import type { ContactInfo } from "../../data/resume"

interface HeaderProps {
  contact: ContactInfo
}

export const Header = ({ contact }: HeaderProps) => {
  const contactItems = [
    contact.email,
    contact.location,
    contact.linkedin,
    contact.website,
    contact.github,
  ].filter(Boolean)

  const contactLine = contactItems.join("  •  ")

  return (
    <View style={styles.header}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.title}>{contact.title}</Text>
      <Text style={styles.contactLine}>{contactLine}</Text>
    </View>
  )
}
