/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "col-v" : "#6D597A" , 
        "col-p" : "#B56576" , 
        "col-o" : "#E56B6F" , 
        "col-s" : "#EAAC8B" , 
        "col-b" : "#5d4037" , 
      }
    },
  },
  plugins: [],
}