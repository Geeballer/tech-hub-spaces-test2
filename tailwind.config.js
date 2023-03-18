/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      nunito: ['"Nunito"', 'sans-serif']
    },
    extend: {
      colors: {
        textColor: '#fff',
        primaryColor: '#00020d',
        secondaryColor: '#246bf6',
        tertiaryColor: '#121b23',
        bgTable: 'rgba(126, 126, 126, 0.164)'
      }
    },
  },
  plugins: [],
}
