/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from 'fluid-tailwind';
const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

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
        "kalam": ["Kalam", defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#D20700",
        domu: {
          'DEFAULT': '#030712',
          ...colors.gray
        },
        skola: {
          'DEFAULT': '#2563EB',
          ...colors.blue
        },
        koralek: {
          'DEFAULT': '#EC4899',
          ...colors.pink
        },
        kamarad: {
          'DEFAULT': '#A855F7',
          ...colors.purple
        },
        druzina: {
          'DEFAULT': "#F97316",
          ...colors.orange
        },
        jidelna: {
          'DEFAULT': "#16A34A",
          ...colors.green
        },
        spolecne: {
          'DEFAULT': "#374151",
          ...colors.gray
        }
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