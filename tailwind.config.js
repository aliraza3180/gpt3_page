/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xxs: "340px",
        xs: "480px",
        xs1: "500px",
        ss: "620px",
        sm: "768px",
        sm1: "890px",
        sm2: "920px",
        md: "1060px",

        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
