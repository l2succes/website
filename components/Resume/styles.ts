import { StyleSheet } from "@react-pdf/renderer"

// Using Helvetica (built-in, no network required)

export const colors = {
  primary: "#1a1a1a",
  secondary: "#555555",
  accent: "#FAF000",
  muted: "#888888",
  divider: "#e0e0e0",
  background: "#ffffff",
}

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 36,
    paddingBottom: 36,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.45,
    color: colors.primary,
    backgroundColor: colors.background,
  },

  // Header styles
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    letterSpacing: -0.5,
    marginBottom: 20,
    color: colors.primary,
  },
  title: {
    fontSize: 12,
    fontWeight: 500,
    color: colors.secondary,
    marginBottom: 10,
  },
  contactLine: {
    fontSize: 8.5,
    color: colors.secondary,
  },

  // Section styles
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
    color: colors.primary,
  },

  // Summary styles
  summary: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: colors.secondary,
  },

  // Skills styles
  skillsGrid: {
    flexDirection: "row",
    gap: 16,
  },
  skillColumn: {
    flex: 1,
  },
  skillCategory: {
    fontSize: 9,
    fontWeight: 600,
    marginBottom: 3,
    color: colors.primary,
  },
  skillList: {
    fontSize: 9,
    color: colors.secondary,
    lineHeight: 1.4,
  },

  // Experience styles
  experienceItem: {
    marginBottom: 12,
  },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  company: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.primary,
  },
  dates: {
    fontSize: 9,
    color: colors.muted,
    fontWeight: 500,
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  role: {
    fontSize: 9.5,
    fontWeight: 500,
    color: colors.secondary,
  },
  location: {
    fontSize: 9,
    color: colors.muted,
  },
  bulletList: {
    marginTop: 2,
  },
  bullet: {
    fontSize: 9,
    marginBottom: 2,
    paddingLeft: 8,
    color: colors.secondary,
    lineHeight: 1.4,
  },
  bulletPoint: {
    position: "absolute",
    left: 0,
  },

  // Education styles
  educationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  educationMain: {
    flex: 1,
  },
  institution: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.primary,
  },
  degree: {
    fontSize: 9,
    color: colors.secondary,
  },
  year: {
    fontSize: 9,
    color: colors.muted,
    fontWeight: 500,
  },

  // Page number
  pageNumber: {
    position: "absolute",
    bottom: 20,
    right: 40,
    fontSize: 8,
    color: colors.muted,
  },
})
