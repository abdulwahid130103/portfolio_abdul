/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require("@iconify/tailwind");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      jetbrains: ["jetbrains_light"], // Add JetBrains font here
      jetbrains_bold: ["jetbrains_bold"], // Add JetBrains font here
      jetbrains_italic: ["jetbrains_italic"], // Add JetBrains font here
      jetbrains_medium: ["jetbrains_medium"], // Add JetBrains font here
      jost_light: ["jost_light"], // Add JetBrains font here
      jost_bold: ["jost_bold"], // Add JetBrains font here
      jost_extra_bold: ["jost_extra_bold"], // Add JetBrains font here
      jost_medium: ["jost_medium"], // Add JetBrains font here
    },
    extend: {
      colors: {
        primary: "#0496ff",
        dark: "#343a40",
        darkblue: "#374151",
        abu: "#e6e6e6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [addIconSelectors(["mdi", "mdi-light"])],
  // plugins: [require("flowbite/plugin"), addIconSelectors(["mdi", "mdi-light"])],
};
