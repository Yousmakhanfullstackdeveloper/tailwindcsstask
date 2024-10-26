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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#3d5c5c",
        secondary:"#202124",
        div:"#3973ac",
        origin:"#e6f0ff",
        hero:"#002966",
      },
    },
  },
  plugins: [],
};
export default config;
