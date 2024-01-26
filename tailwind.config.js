/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fbfbfe",
        text: "#050315",
        primary: "#2f27ce",
        secondary: "#dedcff",
        accent: "#433bff",
      }
    },
  },
  plugins: [],
}

