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
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        aeonik: ["Aeonik-Pro", "sans-serif"],
        "aeonik-light": ["Aeonik-Light", "sans-serif"],
        "aeonik-trial": ["Aeonik-Trial", "sans-serif"],
      },

      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },

      screens: {
        mxs: "365px",
        xs: "430px",
        xm: "500px",
        sm: "640px",
        xsm: "680px",
        md: "768px",
        xmd: "900px",
        lg: "1024px",
        "2lg": "1150px",
        xlg: "1200px",
        xl: "1280px",
        "2xl": "1536px",
        m2xl: "1700px",
        xm2xl: "1800px",
        "3xl": "1930px",
        m3xl: "2000px",
      },

      colors: {
        primaryBtnBg: "#2A68ED",
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

  plugins: [],
};

export default config;