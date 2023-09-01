/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#21293c",
          200: "#262121",
          300: "#1e1e1e",
        },
        lightgray: {
          100: "#cfcfcf",
          200: "rgba(207, 207, 207, 0.25)",
        },
        darkslategray: "#474747",
        lightslategray: "#84859e",
        steelblue: "#4b587c",
        blueviolet: "#9747ff",
        limegreen: "#71ff5a",
        darkturquoise: "#5aebff",
        thistle: "rgba(170, 159, 199, 0.2)",
        turquoise: "#68ffed",
        background: "#fff",
        darkgray: "#9f9f9f",
        "mid-gray-mid-gray-4": "#9aa6ac",
        black: "#000",
        dodgerblue: "#4094f7",
        "theme-primary-default": "#4c6fff",
        "theme-secondary-default": "#e4ecf7",
        "text-heading-dark": "#27272e",
        "text-body-light": "#425466",
        "theme-dark-default": "#16192c",
      },
      fontFamily: {
        "footer-regular": "Inter",
        "footer-logo": "GRIFTER",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "liberation-sans": "'Liberation Sans'",
      },
    },
  },
  plugins: [],
};
