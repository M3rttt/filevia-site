import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#07111A",
        panel: "#0D1B29",
        panelSoft: "#112437",
        line: "rgba(143, 188, 255, 0.14)",
        accent: "#6EE7C8",
        accentWarm: "#FFB86B",
        text: "#F3F7FB",
        muted: "#9FB4C9"
      },
      boxShadow: {
        glow: "0 30px 80px rgba(8, 20, 34, 0.45)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
