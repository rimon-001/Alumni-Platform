/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        primaryBlue: '#155EEF',
        gold: '#D6A84F',
      }
    },
  },
  plugins: [],
}