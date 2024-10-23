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
      fontFamily: {
        default: ["Rubik-Regular", "sans-serif"],
        rblack: ["Rubik-Black", "sans-serif"],
        rblackitalic: ["Rubik-BlackItalic", "sans-serif"],
        rbold: ["Rubik-Bold", "sans-serif"],
        rbolditalic: ["Rubik-BoldItalic", "sans-serif"],
        rextrabold: ["Rubik-ExtraBold", "sans-serif"],
        rextrabolditalic: ["Rubik-ExtraBoldItalic", "sans-serif"],
        ritalicvariable: ["Rubik-Italic-VariableFont_wght", "sans-serif"],
        ritalic: ["Rubik-Italic", "sans-serif"],
        rlight: ["Rubik-Light", "sans-serif"],
        rlightitalic: ["Rubik-LightItalic", "sans-serif"],
        rmedium: ["Rubik-Medium", "sans-serif"],
        rmediumitalic: ["Rubik-MediumItalic", "sans-serif"],
        rregular: ["Rubik-Regular", "sans-serif"],
        rsemibold: ["Rubik-SemiBold", "sans-serif"],
        rsemibolditalic: ["Rubik-SemiBoldItalic", "sans-serif"],
        rvariable: ["Rubik-VariableFont_wght", "sans-serif"],
      },
    },
  },
  plugins: [],
};
