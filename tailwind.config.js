/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Roboto:['Roboto','sans-serif']
      },
      colors:{
        'dark-blue':'#1d3654'
      }
    },
  },
  plugins: [],
};
