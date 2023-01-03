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
        popUpBgCol: "#B7006E",
        borderDividerCol: "#e5e7eb17",
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '.5px',
     '3': '1px',
      '4': '2px',
     '6': '4px',
     '8': '6px',
    }
  },
  plugins: [],
}
