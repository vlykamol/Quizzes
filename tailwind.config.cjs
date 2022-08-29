/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1c3879',
        'secondary': '#607eaa',
        'Con_primary': '#eae3d2',
        'Con_secondary': '#f9f5eb'
      }
    }
  },
  plugins: [],
}
