module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,md,njk}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
