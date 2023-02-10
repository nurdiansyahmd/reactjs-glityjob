
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero' : "url('/src/assets/hero.jpg')",
        'hire' : "url('/src/assets/hire.jpg')"
      }
    },
    fontFamily:{
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
