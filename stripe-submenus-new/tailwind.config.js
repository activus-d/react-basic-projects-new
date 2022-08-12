/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'h1': '#102a42',
        'pText': '#617d98',
      },
    },
    fontFamily: {
      'mainFont': ['"Open Sans"', 'sans-serif']
    },
    lineHeight: {
        '60': '60px',
    },
    backgroundImage: {
      'mainBg': "url('./images/hero.svg')",
      'phoneBg': "url('./images/phone.svg')"
    },
    backgroundSize: {
      '175%': '175%',
      '200px': '250px',
      '150px': '150px',
      '100%': '100%'
    }
  },
  plugins: [],
}
