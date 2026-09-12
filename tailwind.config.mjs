/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Extracted from the SYNVORA logo gradient (blue -> cyan -> purple)
        'synvora-blue': '#0066FF',
        'synvora-cyan': '#22D3EE',
        'synvora-purple': '#7C3AED',
        'synvora-dark': '#0A1128',
        primary: '#0066FF',
        secondary: '#7C3AED',
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
