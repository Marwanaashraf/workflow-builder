/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CF035F",
        start: "#22C55E",
        end: "#EF4444",
        task: "#3B82F6",
      },
    },
  },
  plugins: [],
};
