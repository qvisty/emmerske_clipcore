/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro', './src/**/*.html', './src/**/*.js', './src/**/*.ts'],
  theme: {
    extend: {
      fontSize: {
        base: ['18px', { lineHeight: '1.7' }],
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f9f0',
          100: '#d8f0d8',
          200: '#b3e0b3',
          300: '#7ec87e',
          400: '#4dab4d',
          500: '#2d8c2d',
          600: '#1e6e1e',
          700: '#175517',
          800: '#134213',
          900: '#0e330e',
        },
      },
    },
  },
  plugins: [],
};
