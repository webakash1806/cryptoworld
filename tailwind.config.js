/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'darkBg': '#0D1217',
      'grey': '#9EA0A2',
      'green': '#32BC34',
      'red': '#FF281D'

    },
    extend: {
      keyframes: {
        load: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)', color: '#fff' },
        }
      }
    },
  },
  plugins: [],
}