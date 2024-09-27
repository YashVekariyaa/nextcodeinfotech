/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b68f6",
        "primary-hover": "#0b4caf",
        "placeholder": "#a3a5b6",
        "heading": "#1a3760",
        "lightGray": "#9c9eb1",
        "normalDark": "#333333",
        "deepDark": "#000000",
        "nav": "#727272"
      },
    },
  },
  plugins: [],
}