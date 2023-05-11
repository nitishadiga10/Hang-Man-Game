/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
          'keyBoard': 'repeat(auto-fit, minmax(75px, 1fr))',
        }
    },
  },
  plugins: [],
}

