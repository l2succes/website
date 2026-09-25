module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
    },
  },
  plugins: [],
  extend: {
    fontFamily: {
      italic: ["var(--font-italic)"],
      demibold: ["var(--font-demibold)"],
    },
  },
}
