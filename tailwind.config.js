/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#004697',
        headcol:'#00ff00',
        headtwo:'#003b00'
        // primary:'stone-200'
      }
    },
  },
  // plugins: [require("daisyui")],
}
