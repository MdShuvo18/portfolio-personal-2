/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orange-gradient': 'linear-gradient(90deg, #FF8660 0%, #D5491D 100%)',
        'primary-gradient': 'linear-gradient(90deg, #FF8660 0%, #9A33FF 100%)'
      },
    },
  },
  plugins: [require('daisyui'),],
}

