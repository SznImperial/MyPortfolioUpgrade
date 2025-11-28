/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'deep-black': '#050505',
      },
      fontFamily: {
        'mono': ['"Fira Code"', 'monospace'], 
        'sans': ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}