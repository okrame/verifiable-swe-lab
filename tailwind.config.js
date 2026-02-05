/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Academic Cipher Palette
        background: '#FAFAF8',
        'background-alt': '#F5F5F3',
        foreground: '#1a1a1a',
        'foreground-muted': '#4a4a4a',
        'foreground-subtle': '#6b6b6b',
        // Primary: Deep teal
        primary: '#0D7377',
        'primary-light': '#0F8B8F',
        'primary-dark': '#0A5C5F',
        // Accent: Warm amber
        accent: '#D4A574',
        'accent-light': '#E0B88A',
        'accent-dark': '#B8895D',
        // Secondary: Soft purple
        secondary: '#6B5B95',
        // Borders
        border: '#E5E5E3',
        'border-strong': '#D0D0CE',
      },
      fontFamily: {
        'display': ['IBM Plex Mono', 'JetBrains Mono', 'monospace'],
        'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
