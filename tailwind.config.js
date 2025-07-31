/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-charcoal': '#222831',
        'medium-charcoal': '#393E46',
        'accent-brown': '#948979',
        'light-beige': '#DFD0B8',
      },
    },
  },
  plugins: [],
}
