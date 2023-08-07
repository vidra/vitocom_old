/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
extend: {
      gridTemplateColumns: {
        '5': '10% 20% 40% 20% 10%',
      },
      backgroundImage: {
         'hero-pattern': "linear-gradient(to right bottom, rgba('#ffffff',0.5), rgba('#9eb9ce',0.5)), url('img_foot.png')",
      },
    },

  },
  plugins: [],
}

