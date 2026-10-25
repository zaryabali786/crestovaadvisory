import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06142E",
        blue: {
          50: "#F4F8FF", 100: "#E4EEFF", 200: "#C7DBFF", 300: "#9CC2FF", 400: "#5E9BFF",
          500: "#2F74F2", 600: "#1456D6", 700: "#0D3F99", 800: "#0A2C6B", 900: "#071D4A", 950: "#04122E",
        },
        cyan: { glow: "#35D4F5" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,29,74,.05), 0 12px 32px -12px rgba(7,29,74,.18)",
        glow: "0 10px 40px -10px rgba(20,86,214,.55)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        wave: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: { marquee: "marquee 38s linear infinite", wave: "wave 18s linear infinite", floaty: "floaty 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
