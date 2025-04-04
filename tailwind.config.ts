
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "light-background": "rgb(var(--light-background) / <alpha-value>)",
        "dark-text": "rgb(var(--dark-text) / <alpha-value>)",
        "medium-gray": "rgb(var(--medium-gray) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary-blue) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary-blue) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-yellow) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Extended premium color palette
        "primary-blue": {
          900: "#0A2A41", // Darkest blue for depth
          800: "#0B3C5D", // Deep blue (primary-blue)
          700: "#174F76", // Rich blue
          600: "#20638F", // Medium blue
          500: "#2878A8", // Main blue
          400: "#328CC1", // Vibrant blue (secondary-blue)
          300: "#5CA6D3", // Light blue
          200: "#86C0E5", // Pale blue
          100: "#C0DEF2", // Soft blue
          50: "#E8F4FB",  // Lightest blue
        },
        "yellow": {
          600: "#E6A00A", // Deep yellow
          500: "#FFC857", // Main accent yellow
          400: "#FFD57A", // Bright yellow
          300: "#FFE29D", // Light yellow
          200: "#FFEFC0", // Pale yellow
          100: "#FFF8E2", // Softest yellow
        },
        "neutral": {
          900: "#1D2731", // Almost black
          800: "#2C3E50", // Very dark blue-gray
          700: "#384B5E", // Dark gray-blue
          600: "#4A606E", // Medium dark gray
          500: "#6C7A89", // Medium gray
          400: "#8C9BAB", // Medium light gray
          300: "#B2BDC8", // Light gray
          200: "#D5DCE3", // Very light gray
          100: "#EEF1F4", // Off-white
          50: "#F8F9FA",  // Barely off-white
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 5px 15px rgba(0,0,0,0.05)",
        elevated: "0 10px 20px rgba(0,0,0,0.1)",
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
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "subtle-parallax": {
          "0%": { transform: "scale(1.05) translateY(0)" },
          "100%": { transform: "scale(1.05) translateY(-10px)" },
        },
        "button-glow": {
          from: { boxShadow: "0 4px 0 #E6A00A, 0 4px 10px rgba(230, 160, 10, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)" },
          to: { boxShadow: "0 4px 0 #E6A00A, 0 4px 20px rgba(230, 160, 10, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        "exit": "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
        "subtle-parallax": "subtle-parallax 15s infinite alternate ease-in-out",
        "button-glow": "button-glow 2s infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
