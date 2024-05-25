/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1024px",
  },
  fontFamily: {
    roboto: ["Roboto", "sans-serif"],
    quicksand: ["Quicksand", "sans-serif"]
  },
    extend: {
      colors: {
        ["pure-grey"]: "#eae5dc",
        ["pure-green"]: "#274c46",
        ["pure-yellow"]: "#f2a900",
        ["pure-purple"]: "#713170"
      }
    },
  },
  plugins: [],
}

