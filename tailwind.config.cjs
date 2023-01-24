/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Nunito", defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        salita: {
          "primary": "#6b21a8",
          "secondary": "#d1d5db",
          "accent": "#9333ea",
          "neutral": "#171717",
          "base-100": "#f5f5f5",
          "info": "#f59e0b",
          "success": "#22c55e",
          "warning": "#FBBD23",
          "error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
