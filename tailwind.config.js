/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    /**
     * * Add custom screens here
     */
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      /**
       * * Add custom colors here
       */
      colors: {
        primary: '#A9F927',
        black: '#1D1D1F',
        white: '#F5F5F7',
      },
      boxShadow: {
        custom: '8px 8px 0 0',
      },
      animation: {
        movex: 'movex 3s infinite',
        movey: 'movey 3s infinite',
        torch: 'torch 5s infinite',
      },
      keyframes: {
        movex: {
          from: {
            left: '0',
            opacity: '0',
          },
          '25%': {
            opacity: '1',
          },
          '50%': {
            left: '100%',
            opacity: '0',
          },
          to: {
            left: '100%',
            opacity: '0',
          },
        },
        movey: {
          from: {
            top: '0',
            opacity: '0',
          },
          '25%': {
            opacity: '1',
          },
          '50%': {
            top: '100%',
            opacity: '0',
          },
          to: {
            top: '100%',
            opacity: '0',
          },
        },
        torch: {
          from: {
            backgroundPosition: '-100% 0',
          },
          to: {
            backgroundPosition: '200% 0',
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        }
      )
    }),
  ],
}
