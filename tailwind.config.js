/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#343E3D',
        headcol:'#BFEDC1',
        headtwo:'#156064'
        // primary:'stone-200'
      }
    },
  },
  // plugins: [require("daisyui")],
}
