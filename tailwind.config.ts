import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        heritage: {
          parchment: "hsl(var(--parchment-base))",
          "parchment-dark": "hsl(var(--parchment-dark))",
          burgundy: "hsl(var(--burgundy-deep))",
          "burgundy-rich": "hsl(var(--burgundy-rich))",
          cream: "hsl(var(--cream-rich))",
          "cream-warm": "hsl(var(--cream-warm))",
          gold: "hsl(var(--gold-antique))",
          "gold-bright": "hsl(var(--gold-bright))",
          brown: "hsl(var(--brown-deep))",
          "brown-medium": "hsl(var(--brown-medium))",
          terracotta: "hsl(var(--terracotta-warm))",
          bronze: "hsl(var(--bronze-copper))",
          teal: "hsl(var(--teal-deep))",
          stone: "hsl(var(--stone-gray))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        heading: ["var(--font-heading)"],
        decorative: ["var(--font-decorative)"],
        body: ["var(--font-body)"],
        serif: ["var(--font-serif)"],
        devanagari: ["var(--font-devanagari)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "rotate-yantra": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.8))" }
        },
        "move-left-to-right": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "99%": { transform: "translateX(calc(100vw + 128px))", opacity: "1" },
          "100%": { transform: "translateX(calc(100vw + 128px))", opacity: "0" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "rotate-yantra": "rotate-yantra 60s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "move-left-to-right": "move-left-to-right 15s linear infinite",
        "move-right-to-left": "move-right-to-left 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
