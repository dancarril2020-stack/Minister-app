/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#8B5CF6",
        background: "#0F172A",
        surface: "rgba(30, 41, 59, 0.7)",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
