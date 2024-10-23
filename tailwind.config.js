/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      custom: ["MyCustomFont", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
