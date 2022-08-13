/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#293b51',
        'off-white': '#f8f7f6',
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        widest: '0.15em',
      },
    },
  },
  plugins: [],
};
