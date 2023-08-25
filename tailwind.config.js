/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': 'white',
        'gray-light': '#D6D6D6',
        'gray-normal': '#CCCCCC',
        'gray-dark': '#868686',
        'gray-medium': '#767799',
        'purple': '#7141FF',
        'pink': '#C23893',
        'b1': '#162446',
        'b2': '#13152F',
        'black': 'black'
      },
    },
   
  },
  // plugins: [],
  plugins: [require("daisyui")],
}