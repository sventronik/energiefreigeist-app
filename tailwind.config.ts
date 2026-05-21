import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0f1e",
          mid: "#0d1a2e",
          accent: "#00d4ff",
          gold: "#f5a623",
          green: "#00e676",
        }
      }
    },
  },
  plugins: [],
};
export default config;