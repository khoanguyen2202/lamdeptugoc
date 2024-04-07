/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Roboto:['Roboto','sans-serif'],
        Merienda:['Merienda','sans-serif'],
        
      },
      colors:{
        'dark-blue':'#102c6b',
        'tieu-de':'#000'
        
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
      screens:{
        'ct-screen-header':'1336px',
        'iphone-400px':"400px"
      },
    },
    
  },
  plugins: [],
};
