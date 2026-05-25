import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primarySoft: "#EFF6FF",
        secondary: "#0F172A",
        muted: "#64748B",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E2E8F0",
        success: "#16A34A",
        error: "#DC2626",
      },
      boxShadow: {
        panel: "0 24px 80px -32px rgba(15, 23, 42, 0.35)",
      },
    },
  },
};

export default config;
