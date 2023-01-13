/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka-one': ['"Fredoka One"', 'cursive'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
}
