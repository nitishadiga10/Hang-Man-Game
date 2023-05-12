/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
          'small': 'repeat(auto-fit, minmax(50px, 1fr))',
          'medium': 'repeat(auto-fit, minmax(75px, 1fr))',
        }
    },
  },
  plugins: [],
}

