/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06131d",
        dimWhite: "rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'eternity' : 'url("./src/assets/eternity.jpg")',
        'fade' : 'url("./src/assets/fade.jpg")',
        'orbitals' : 'url("./src/assets/orbitals.jpg")',
        'portal' : 'url("./src/assets/portal.jpg")'
      }
    },
  },
  plugins: [],
}