/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        bgTheme: "#141620;",
        bgThemeTwo: "#000000;",
        textCol: "#596184;",
        btnBgCol: "#D5FF64",
        popUpBgCol: "#B7006E"
      }
    }
  },
  plugins: [],
}
