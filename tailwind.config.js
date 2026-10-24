/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 165, 233, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 12px 30px -4px rgba(14, 165, 233, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'btn-sky': '0 8px 24px -4px rgba(14, 165, 233, 0.35)',
      }
    },
  },
  plugins: [],
}