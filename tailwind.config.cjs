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
      fontSize: {
        '3.5xl': '2rem',
        '4.5xl': '2.625rem',
        '5.5xl': '3.125rem',
      },
      letterSpacing: {
        xs: '0.25px',
        sm: '2px',
        md: '4px',
        lg: '6px',
        xl: '8px',
      },
      lineHeight: {
        tight: '1.3',
      },
      spacing: {
        4.5: '1.125rem',
        13: '3.25rem',
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};
