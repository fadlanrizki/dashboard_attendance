// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary_text: "#6781A1",
        primary_text_strong: "#344767",
        primary_text_red: "#F53939",
        primary_text_light: "#ffffff",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}