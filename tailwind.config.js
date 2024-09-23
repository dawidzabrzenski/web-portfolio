/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Jost, monospace",
    },
    extend: {
      colors: {
        main: "#f5f5f4",
        dark: "1F1F1F",
        "light-green": "#2BE977",
      },
    },
  },
  plugins: [],
};
