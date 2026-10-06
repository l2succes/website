export const pad = (n: number) => String(n).padStart(2, "0")

// "2025-09-29" → "Sep 29, 2025", read as a calendar day so the timezone can't shift it.
export const formatDay = (day: string) =>
  new Date(`${day}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
