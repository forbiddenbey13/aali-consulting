import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '96rem', // approx 1536px
      },
      colors: {
        primary: '#3B82F6',
        secondary: '#D1D5DB',
        accent: '#10B981',
        textDark: '#1F2937',
        textMedium: '#4B5563',
        textLight: '#6B7280',
        backgroundLight: '#F9FAFB',
        backgroundWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;