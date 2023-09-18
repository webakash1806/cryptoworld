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
      'button': '#6C72FF',
      'darkBG': '#080F25',
      'shadowBG': '#212C7B',
      'primary': '#101935',
      'btnHover': '#6C72FF',
      'text2': "#b0c0fb",
      'primaryText': '#7F8EC5',
      'textHover': '#57ddff',
      'liveTXT': '#14CA74',
      'liveBG': '#0C5648'
    },
    extend: {},
  },
  plugins: [],
}