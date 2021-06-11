module.exports = {
  purge: [],
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
        primary: '#FF017E',
        dark: '#121212',
      },
      animation: {
        'pulse-slow': 'pulse 5s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
