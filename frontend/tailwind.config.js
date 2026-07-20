/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002B49",     // Navy Blue
        accent: "#8B1C4B",      // Maroon / Burgundy
        accentLight: "#F8E9F0", // Light pink/maroon for badges/tags
        background: "#F3F2EB",  // Light beige/cream background
        surface: "#FFFFFF",     // Solid white cards
        textPrimary: "#002B49",
        textSecondary: "#595959",
        borderLight: "#E5E5E0",
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
