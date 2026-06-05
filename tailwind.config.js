/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'auri-bg':     'rgb(var(--auri-bg) / <alpha-value>)',
        'auri-card':   'rgb(var(--auri-card) / <alpha-value>)',
        'auri-offset': 'rgb(var(--auri-offset) / <alpha-value>)',
        'auri-blue':   'rgb(var(--auri-blue) / <alpha-value>)',
        'auri-text':   'rgb(var(--auri-text) / <alpha-value>)',
        'auri-muted':  'rgb(var(--auri-muted) / <alpha-value>)',
        'auri-border': 'rgb(var(--auri-border) / <alpha-value>)',
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
