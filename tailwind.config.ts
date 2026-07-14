import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#EFEBE3",
        fog: "#DDD8CE",
        khaki: "#B9A683",
        charcoal: "#4A4643",
        ink: "#141312",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        wideplus: "0.18em",
        rail: "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
