/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00adb5",
        secondary: "#2CBAEC",
      },
    },
  },
  plugins: [],
};
