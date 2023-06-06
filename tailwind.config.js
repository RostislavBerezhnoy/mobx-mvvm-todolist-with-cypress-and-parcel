/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
    },
  },
  safelist: ['w-500'],
  plugins: [],
}
