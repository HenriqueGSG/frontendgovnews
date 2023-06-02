/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        gold: "#CCA000",
        yellow: "#FFD60A",
        blueLight: "#003566",
        blueMiddle: "#001D3D",
        blueDarker: "#000814",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
