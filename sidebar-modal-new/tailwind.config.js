/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '480px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
    },
      colors: {
        'skyBlue': '#49a6e9',
        'iconColor': '#5d7994',
        'navtextColor': '#324d6b',
        'iconCloseColor': '#bb2525',
        'bg': '#f1f5f8',
        'socialHover': '#0b4a52'
      },
      width: {
        '480': '480px'
      },
    },
  },
  plugins: [],
}
