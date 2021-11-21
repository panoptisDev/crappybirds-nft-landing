/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        //primary: ['Inter var', ...defaultTheme.fontFamily.sans],
        primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          400: '#21222A',
          500: '#101117',
          900: '#030104',
        },
        brand: {
          //500: '#FF0090',
          //500: '#FFD707',
          300: '#FFDA00',
          400: '#eb96f3',
          500: '#E682F0',
          600: '#C901EE',
          700: '#652498',
          800: '#1D3D5A',
          900: '#720E7B',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
