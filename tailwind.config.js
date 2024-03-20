/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pokemon: ["Pokemon Solid", "cursive"],
        Roboto: ["Roboto Slab", "Arial"],
        Poppins: ["Poppins", "Arial"]
      },
    },
  },
  plugins: [require("daisyui")],
}

