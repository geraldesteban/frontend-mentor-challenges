/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/dist/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      },
    },
    screens: {
      mobile: { max: "640px" },
      tablet: { max: "1025px" },
      laptop: { max: "1280px" },
    },
  },
  plugins: [],
};
