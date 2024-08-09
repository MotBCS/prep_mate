/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background Color
        primary: "#FCFCFC",
        creme: "#F5E5DD",
        navy: "#345269",
        orange: "#BD4F00",
        green: "#71A95E",
      },

      fontFamily: {
        primary_font: ["Jua", "sans-serif"],
      }
    },
  },
  plugins: [],
}

