/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        clinic: {
          green: {
            900: '#003d2b',
            800: '#004d35',
            700: '#006644',
            600: '#007a52',
            100: '#e6f4ef',
            50: '#f0faf6',
          },
          gold: {
            600: '#b5922a',
            500: '#c9a84c',
            400: '#d4b96e',
            300: '#e0cc96',
            100: '#faf5e4',
          },
        },
      },
    },
  },
  plugins: [],
};
