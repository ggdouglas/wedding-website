/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      aspectRatio: {
        '21/9': '21 / 9',
      },
      grayscale: {
        50: '50%',
      },
      colors: {
        'off-white': '#fbf6f0',
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
      scale: {
        '200': '2',
      },
      spacing: {
        4.5: '1.125rem',
        13: '3.25rem',
        18: '4.5rem',
      },
      transformOrigin: {
        'center-top': 'center top',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      );
    }),
  ],
};
