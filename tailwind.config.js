/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Jost, monospace",
      kumbh: "Kumbh Sans, monospace",
    },
    extend: {
      colors: {
        main: "#f5f5f4",
        dark: "#1F1F1F",
        "light-green": "#2BE977",
        "lighter-green": "#39F785",
      },
    },
  },
  plugins: [],
};
