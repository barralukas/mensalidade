/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "sans": "Rubik"
    },
    extend: {
      colors: {
        "vermelho": "#D9362E",
        "vermelhoHover": "#db1107",
        "branco": "#FBFFFE",
        "preto": "#1B1B1E",
        "amarelo": "#FFF500",
      }
    },
  },
  plugins: [],
}

