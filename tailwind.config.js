module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,md,njk}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"Barlow Condensed"', 'sans-serif'],
        serif: ['"PT Serif"', 'serif'], 
        mono: ['"JetBrains Mono"', 'monospace'],
        },
    },
  variants: {
    extend: {
      },
    },
  },
  plugins: [],
}
