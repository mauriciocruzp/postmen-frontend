

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#222A68',
        'secondary-blue': '#574AE2',
        'primary-purple': '#654597',
        'secondary-purple': '#AB81CD'
      },
      fontFamily: {
        'sans': ['PT Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}