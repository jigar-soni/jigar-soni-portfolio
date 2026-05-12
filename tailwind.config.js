/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        muted: '#6d7278',
        subtle: '#e5e0d5',
        warm: '#b5a090',
        cream: '#f7f5f0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 2px 40px rgba(17,17,17,0.05)',
        card: '0 1px 3px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.06)',
        lift: '0 4px 60px rgba(17,17,17,0.1)',
      },
      letterSpacing: {
        label: '0.2em',
      },
      lineHeight: {
        loose: '1.85',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
