/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class" ,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   container : {
    center : true ,
    padding: {
      DEFAULT: '2rem' ,
      sm: '2rem' ,
      lg: '3rem' ,
      xl: '6rem' ,
      '2xl': '7rem'
    }
   }
    },
  },
  plugins: [],
};
