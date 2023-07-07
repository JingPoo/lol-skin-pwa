/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#272d5b',
        secondary: '#7860D2',
        complementary: '#D4BB9D'
      }
    },
  },
  plugins: [],
}

