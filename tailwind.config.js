/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        bg: '#05060a',
        surface: '#0b0d13',
        ink: '#f5f7fb',
        'ink-2': '#a3a9b8',
        'ink-3': '#6b7285',
        accent: '#5e8cff',
        glow: '#7dd3fc',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        radar: { '0%': { transform: 'scale(.15)', opacity: '.9' }, '100%': { transform: 'scale(1)', opacity: '0' } },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        radar: 'radar 3.6s cubic-bezier(.2,.6,.3,1) infinite',
      },
    },
  },
  plugins: [],
}
