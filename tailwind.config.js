/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alpha: ["Poppins"],
      },
      colors: {
        "bot-alpha": "#0A0D13",
        "bot-beta-gray": "#7C8296",
        "bot-gamma": "#0F141D",
        "bot-delta": "#290B45",
        "bot-beta-blue":"#11A9BC",
        "trust-alpha":"#00ABC2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
