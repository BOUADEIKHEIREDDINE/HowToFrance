/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens (shadcn-style) – values are defined in CSS variables in globals.css
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        cardForeground: 'hsl(var(--card-foreground))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
        mutedForeground: 'hsl(var(--muted-foreground))',
        primary: 'hsl(var(--primary))',
        primaryForeground: 'hsl(var(--primary-foreground))',
        accent: 'hsl(var(--accent))',
        accentForeground: 'hsl(var(--accent-foreground))',
      },
      fontFamily: {
        sans: ['sans-serif'], // System font is fine
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
    },
  },
  plugins: [],
};
