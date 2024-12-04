/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors: {
        primary: "#1182c5",
        secondary: "#8B5CF6",
        headerbg: "#F55A5A"
      },
      container:{
        center: "true",
        padding:{
          default:"1removeEventListener",
          sm:"2rem",
       },
      },
    },
  },
  plugins: [],
}

