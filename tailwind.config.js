/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-white': '#FFFFFF',
        'app-black': '#000000',
        'app-orange':'#B88E2F',
        'app-dark':'#333333',
        'app-gray':'#666666',
        'app-light-orange':'#FFF3E3',
        'app-light-gray':'#F4F5F7',
        'app-cream':'#F9F1E7',
        'app-gray-9F':'#9F9F9F',
        

      },
    },
  },
  plugins: [],
}

