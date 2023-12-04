/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bg': '#0c0614',
      'bgLight': '#431784',
      'bgDark': '#1C0B35',
      'text': '#fafefd',
      'textHard': '#e0e0e0',
      'primary': '#b391e6',
      'accent': '#742ae4',
      'transparent': 'transparent'
    },
    extend: {}
  },
  plugins: [],
}
