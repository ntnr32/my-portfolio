
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      KnewaveOutlineRegular: ['KnewaveOutlineRegular'],
      KnewaveRegular: ['KnewaveRegular']
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        invert: 'var(--color-bg-invert)'
      },
      backgroundImage: {
        map: 'url("/svg/map.svg")',
        circuit: 'url("/svg/circuit.svg")'
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        invert: 'var(--color-text-invert)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    },
  },
  plugins: [],
}
