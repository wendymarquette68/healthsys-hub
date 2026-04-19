/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tu: {
          gold: '#F0A500',
          navy: '#1B2A4A',
        }
      }
    },
  },
  plugins: [],
}
