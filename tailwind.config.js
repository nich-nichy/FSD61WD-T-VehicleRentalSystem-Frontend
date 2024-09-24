/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fly: 'flyLeftRight 2s ease-in-out infinite',
      },
      keyframes: {
        flyLeftRight: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-40px)' },
          '50%': { transform: 'translateX(30px)' },
          '75%': { transform: 'translateX(-30px)' },
          '100%': { transform: 'translateX(0)' },
        },

      },
    },
  },
  plugins: [],
}