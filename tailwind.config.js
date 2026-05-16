/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fa',
        card: '#ffffff',
        text: '#212529',
        muted: '#6c757d',
        primary: '#e63946',
        secondary: '#457b9d',
        accent: '#f1faee',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
