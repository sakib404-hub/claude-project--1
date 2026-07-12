/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        putty: '#EDE7DC',
        'putty-dark': '#E2DACB',
        ink: '#242019',
        'ink-soft': '#5B5347',
        sage: '#75816A',
        'sage-deep': '#4E5A46',
        mustard: '#C9A227',
        line: '#C9C0AE',
        cream: '#FBF9F4',
        card: '#F6F2E9',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [],
}
