module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        0.5: '0.15rem',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '45%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        101: '27rem',
      },
      colors: {
        secondary: '#00b4d8',
        primary: '#FF017E',
        dark: '#111827',
        black: '#030507',
      },
      animation: {
        'pulse-slow': 'pulse 5s linear infinite',
        'tracking-in-expand': 'tracking-in-expand 0.7s ease-in-out 1',
      },
      keyframes: {
        'tracking-in-expand': {
          '0%': { letterSpacing: '-0.5em', opacity: '0' },
          '40%': { opacity: '0.6' },
          '100%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus'],
      transitionTimingFunction: ['hover', 'focus'],
    },
  },
  plugins: [],
}
