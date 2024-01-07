/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        huge: '2000px',
      },
    },
  },
  plugins: [],
}

