/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['CustomFont', 'sans-serif'],
        'peach-brown': ['Peach Brown', 'sans-serif'],
      },
      colors: {
        'brown-sugar': '#8B4513',
      },
    },
  },
  plugins: [],
}
