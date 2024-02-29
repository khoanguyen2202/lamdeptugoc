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
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0))' },
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
    },
  },
  plugins: [],
};
