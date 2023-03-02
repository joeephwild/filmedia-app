/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "OpenSans-ExtraBold": ["OpenSans-ExtraBold"],
        "OpenSans-Bold": ["OpenSans-Bold"]
      }
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
