import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        panel2: "var(--panel-2)",
        border: "var(--border)",
        amber: "var(--amber)",
        teal: "var(--teal)",
        ink: "var(--text)",
        muted: "var(--muted)",
      },
      fontFamily: {
        display: "var(--font-rajdhani)",
        body: "var(--font-inter)",
        mono: "var(--font-mono)",
      },
      maxWidth: {
        wrap: "1180px",
      },
      borderRadius: {
        hud: "2px",
      },
      keyframes: {
        pulse2: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
        blink: { "50%": { opacity: "0" } },
        scan: { "0%": { top: "6%" }, "50%": { top: "92%" }, "100%": { top: "6%" } },
      },
      animation: {
        pulse2: "pulse2 1.8s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        scan: "scan 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
