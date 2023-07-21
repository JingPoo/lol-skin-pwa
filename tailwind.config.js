/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#272d5b',
        secondary: '#7860D2',
        complementary: '#D4BB9D'
      },
      width: {
        '1/7': '14.285714285%'
      },
      keyframes: {
        shake: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: '.8',
            transform: 'translateY(5px)',
          }
        }
      },
      animation: {
        shake: 'shake .2s linear'
      },
      transitionProperty: {
        'width': 'width',
      },
      screens: {
        'sm-h': { 'raw': '(max-height: 800px)' },
      }
    },
  },
  plugins: [],
}

