/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#070913',
          900: '#0D1224',
          850: '#111730',
          800: '#161F42',
          700: '#222F61',
        },
        roseGold: {
          DEFAULT: '#F5A9A0',
          light: '#FCD5D0',
          dark: '#E08075',
        },
        aurora: {
          pink: '#FF4D82',
          purple: '#9333EA',
          blue: '#38BDF8',
          lavender: '#C084FC',
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at top, #161F42 0%, #0D1224 50%, #070913 100%)',
        'glow-radial': 'radial-gradient(circle at 50% 50%, rgba(245, 169, 160, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
