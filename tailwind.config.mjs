/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'Archivo Fallback', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--text)',
        muted: {
          DEFAULT: 'var(--surface)',
          foreground: 'var(--text-2)',
        },
        border: 'var(--hairline)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--text)',
        },
        destructive: 'var(--destructive)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        xs: 'var(--radius-xs)',
      },
    },
  },
  plugins: [],
};
