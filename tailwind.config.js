/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        kala:'#262626',
        ash:'#767676'
      }
    },
  },
  plugins: [],
}

