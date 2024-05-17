/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      white: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },
      "big-stone": {
        50: "#f3f7fc",
        100: "#e5eff9",
        200: "#c5def2",
        300: "#93c3e6",
        400: "#59a3d7",
        500: "#3388c4",
        600: "#246ca5",
        700: "#1e5786",
        800: "#1d4a6f",
        900: "#1d405d",
        950: "#112437",
      },
    },
    extend: {},
  },
  plugins: [],
};
