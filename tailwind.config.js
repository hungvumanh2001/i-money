/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#363863",
        primary: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
        "dark-light": "#F8FAFB",
      },
    },
  },
  plugins: [],
};
