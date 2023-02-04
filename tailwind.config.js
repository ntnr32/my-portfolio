const debug = process.env.NODE_ENV !== "production";
const subPath = debug ? '' : '/my-portfolio';

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
      MajorMonoDisplay: ['Major Mono Display'],
      Monoton: ['Monoton'],
      KnewaveOutlineRegular: ['KnewaveOutlineRegular'],
      KnewaveRegular: ['KnewaveRegular'],
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        invert: 'var(--color-bg-invert)'
      },
      backgroundImage: {
        map: `url("${subPath}/svg/map.svg")`,
        circuit: `url("${subPath}/svg/circuit.svg")`,
        overlay: `url("${subPath}/svg/overlay_bg.svg")`,
        dots: `url("${subPath}/images/dots.png")`
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
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })
  ],
}
