/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        ink: 'hsl(var(--color-ink) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        cream: 'hsl(var(--color-cream) / <alpha-value>)',
        rose: 'hsl(var(--color-rose) / <alpha-value>)',
        blush: 'hsl(var(--color-blush) / <alpha-value>)',
        line: 'hsl(var(--color-line) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 10px 30px -14px hsl(var(--color-rose) / 0.35)',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}

