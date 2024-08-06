/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background Color
        primary: "#FCFCFC",
        creme: "",
        navy: "",
        orange: "",
        green: "",
      },

      fontFamily: {
        primary_font: ["Jua", "sans-serif"],
      }
    },
  },
  plugins: [],
}

