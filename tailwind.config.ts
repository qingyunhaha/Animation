import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050608',
        graphite: '#111820',
        paper: '#f4f7f8',
        ice: '#f1d68a',
        cyanline: '#eecd78'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        card: '8px'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      boxShadow: {
        soft: '0 34px 90px rgba(0, 0, 0, 0.28)'
      }
    }
  },
  plugins: []
};

export default config;
