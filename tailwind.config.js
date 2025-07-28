const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#971dab',
          600: '#86198f',
          700: '#701a75',
          800: '#581c87',
          900: '#4c1d95',
        },
        brand: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          black: 'rgba(0, 0, 0, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'blur-in': 'blurIn 1s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0', filter: 'blur(4px)' },
          '100%': { transform: 'translateY(0)', opacity: '1', filter: 'blur(0px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-60px)', opacity: '0', filter: 'blur(4px)' },
          '100%': { transform: 'translateY(0)', opacity: '1', filter: 'blur(0px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)', filter: 'blur(2px)' },
          '100%': { opacity: '1', transform: 'scale(1)', filter: 'blur(0px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-0.5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(215, 119, 6, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(215, 119, 6, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          background: '#020617',
          foreground: '#fafafa',
          primary: {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#971dab',
            600: '#86198f',
            700: '#701a75',
            800: '#581c87',
            900: '#4c1d95',
            DEFAULT: '#971dab',
            foreground: '#ffffff'
          },
          secondary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            DEFAULT: '#64748b',
            foreground: '#ffffff'
          },
          success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            DEFAULT: '#22c55e',
            foreground: '#ffffff'
          },
          warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            DEFAULT: '#f59e0b',
            foreground: '#000000'
          },
          danger: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            DEFAULT: '#ef4444',
            foreground: '#ffffff'
          }
        }
      }
    },
    defaultTheme: 'dark',
    defaultExtendTheme: 'dark'
  })],
}