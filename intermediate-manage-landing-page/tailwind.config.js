/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
      },
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      },
    },
    screens: {
      sm: { max: "640px" },
      md: { max: "768" },
      lg: { max: "963px" },
      xl: { max: "1280px" },
      twoXl: { max: "1660px" },
      laptopMin: { min: "964px" },
    },
    boxShadow: {
      custom: "0px 25px 17px -14px rgba(234, 88, 12, 0.51)",
    },
    width: {
      "36.3rem": "36.3rem",
      "26.1rem": "26.1rem",
      "24rem": "24rem",
    },
  },
  plugins: [],
};
