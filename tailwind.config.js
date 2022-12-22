/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
   daisyui: {
    themes: [
      {
        mytheme: {
        
primary: "#0FCFEC",
        
secondary: "#19D3AE",
        
accent: "#D59B6C",
        
neutral: "#3A4256",
        
"base-100": "#F2F2F2",
        
info: "#42AEBD",
        
success: "#489380",
        
warning: "#EB8014",
        
  error: "#E01A2E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
