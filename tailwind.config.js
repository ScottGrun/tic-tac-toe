/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#31C3BD",
          dark: '#118C87',
          light: '#65E9E4',
        },
        secondary: {
          DEFAULT: "#F2B137",
          dark :'#CC8B13',
          light: '#FFC860',
        },
        tertiary: {
          DEFAULT: "#A8BFC9",
          dark: '#6B8997',
          light: '##DBE8ED',
        },
        dark: {
          DEFAULT: "#1A2A33",
          light: '#1F3641',
        }
      }
    },
  },
  plugins: [],
}