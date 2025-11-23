import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4C3CE7",
          foreground: "#F8FAFC",
        },
        accent: "#F59E0B",

        // ⭐ Culori NEON speciale
        neon: {
          blue: "#00Eaff",
          purple: "#8b5cf6",
          pink: "#ff1cff",
          cyan: "#20FFFF",
        },
      },

      // ⭐ Glow Effect
      boxShadow: {
        neon: "0 0 18px rgba(0, 255, 255, 0.75)",
        neonPurple: "0 0 20px rgba(139, 92, 246, 0.85)",
      },

      // ⭐ Gradient Backgrounds
      backgroundImage: {
        "gradient-neon":
          "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.25), rgba(0,0,0,0.9))",
        "gradient-hero":
          "linear-gradient(180deg, rgba(30,30,60,0.3), rgba(0,0,30,0.9))",
      },

      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
