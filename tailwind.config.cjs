/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'off-white': '#f8f7f6',
        'regal-blue': '#293b51',
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
