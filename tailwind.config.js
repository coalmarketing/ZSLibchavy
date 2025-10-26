/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "selector",
  content: {
    files: ["./src/**/*.{html,njk,js}"],
    extract,
  },
  theme: {
    fontSize: fontSize,
    screens: screens,
    extend: {
      fontFamily: {
        "sans": ["Poppins", defaultTheme.fontFamily.sans],
        "lora": ["Lora", defaultTheme.fontFamily.serif]
      },
      colors: {
        primary: "#D20700",
        domu: "#030712",
        skola: "#2563EB",
        koralek: "#EC4899",
        kamarad: "#A855F7",
        druzina: "#F97316",
        jidelna: "#16A34A",
        spolecne: "#374151"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    },
  },
  plugins: [
    fluid,
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}