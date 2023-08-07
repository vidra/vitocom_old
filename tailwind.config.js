/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
extend: {
      gridTemplateColumns: {
        '5': '10% 20% 40% 20% 10%',
      },
    },

  },
  plugins: [],
}

