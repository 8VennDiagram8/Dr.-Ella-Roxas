import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#09090b",
        surface: {
          50: "#f8fcff",
          100: "#ecfeff",
          200: "#cffafe",
          300: "#a5f3fc",
          card: "#ffffff",
          muted: "#f8fafc",
          dark: "#0a0a0c",
        },
        cyan: {
          50: "#ecfeff",
          100: "#a5f3fc",
          200: "#67e8f9",
          300: "#22d3ee",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          glow: "#22d3ee",
          vibrant: "#0891b2",
        },
        chic: {
          black: "#09090b",
          charcoal: "#18181b",
          slate: "#334155",
          subtle: "#64748b",
          border: "#e2e8f0",
          cream: "#fbfcfd",
        }
      },
      boxShadow: {
        'chic-sm': '0 2px 10px -2px rgba(6, 182, 212, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'chic': '0 10px 30px -5px rgba(6, 182, 212, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'chic-lg': '0 20px 45px -10px rgba(6, 182, 212, 0.18), 0 8px 20px -4px rgba(0, 0, 0, 0.04)',
        'glow-cyan': '0 0 25px -3px rgba(6, 182, 212, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
export default config;
