module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "45%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      colors: {
        primary: "#FF017E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
