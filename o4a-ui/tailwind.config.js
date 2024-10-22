/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: {
          DEFAULT: "#2dae77",
          200: "##3ffeb9",
          400: "#dbfbed",
        },
        black: {
          200: "#292e3a",
        },
        gray: "#9da0a6",
        white: "#fefefe",
      },
    },
  },
  plugins: [],
};
