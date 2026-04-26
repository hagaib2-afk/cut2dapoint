import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAFAFA',
        'gray-custom': {
          '100': '#F3F4F6',
          '300': '#D1D5DB',
          '500': '#9CA3AF',
          '800': '#58585A',
        },
        'brand-blue': '#25A7E2',
        'brand-blue-dark': '#1E8BC0',
        'brand-blue-light': '#E8F5FB',
        'brand-gold': '#D4AF37',
      },
      boxShadow: {
        'sm-subtle': '0 1px 2px rgba(0,0,0,0.04)',
        'product': '0 20px 40px rgba(0,0,0,0.06)',
        'card': '0 2px 8px rgba(0,0,0,0.04)',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          lg: '48px',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1440px',
          xl: '1440px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}

export default config
