/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        surface: "#161B26",
        surfaceLighter: "#222B3C",
        accent: {
          cyan: "#00D2FF",
          violet: "#8B5CF6",
          purple: "#A78BFA",
          pink: "#F43F5E",
        },
        text: {
          primary: "#F3F4F6",   // Gray 100
          secondary: "#9CA3AF", // Gray 400
          muted: "#6B7280",     // Gray 500
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 210, 255, 0.15)',
        'glow-violet': '0 0 25px rgba(139, 92, 246, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
