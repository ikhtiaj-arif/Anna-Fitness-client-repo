/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        fitness:{
          primary: "#4bc87f",
          secondary: "#3994d6",
          accent: "#40a798",
          neutral: "#191D24",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          error: '#eb2632'
        } 

      },
 
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  
}
