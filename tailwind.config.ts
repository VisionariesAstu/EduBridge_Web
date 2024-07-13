import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#3B346C",
          50: "#534b90",
          20: "#251d48",
        },
        secondary: {
          100: "#385EC0",
          50: "#577ed3",
          20: "#273f85",
        },
        error: {
          100: "#FF0000",
          50: "#ff3333",
          20: "#cc0000",
        },
        success: {
          100: "#1FD103",
          50: "#4ff335",
          20: "#148201",
        },
        "primary-background-1": {
          100: "#2B7878",
          50: "#4ba0a0",
          20: "#1c5050",
        },
        "primary-text-1": {
          100: "#000000",
          50: "#333333",
          20: "#00000040",
        },
        "primary-text-2": {
          100: "#FFFFFF",
          50: "#ffffff80",
          20: "#cccccc",
        },
        "secondary-text-1": {
          100: "#2B2B2B",
          50: "#4d4d4d",
          20: "#1c1c1c",
        },
        "secondary-text-2": {
          100: "#EAEAEA",
          50: "#ffffff",
          20: "#b0b0b0",
        },
        "surface-BG": {
          100: "#CEE5E6",
          50: "#e2f4f5",
          20: "#9fb5b5",
        },
        disabled: {
          100: "#D9D9D9",
          50: "#eaeaea",
          20: "#b3b3b3",
        },
        "Neutrals-primary": {
          100: "#cbcbf5",
          50: "#dbdbff",
          20: "#a3a3c7",
        },
        "Neutrals-20": {
          100: "#D6DDEB",
          50: "#e8ecf3",
          20: "#a8afb7",
        },
        "Neutrals-60": {
          100: "#7c8493",
          50: "#979ca8",
          20: "#5a6071",
        },
        "Neutrals-80": {
          100: "#515b6f",
          50: "#6f778d",
          20: "#3a4252",
        },
        "Neutrals-100": {
          100: "#25324b",
          50: "#39445f",
          20: "#192039",
        },
        "Accents-blue": {
          100: "#308fff",
          50: "#57a7ff",
          20: "#1a6ccc",
        },
        "Accents-green": {
          100: "#4fff40",
          50: "#73ff6d",
          20: "#36b32e",
        },
        "Accents-purple": {
          100: "#b338ff",
          50: "#c561ff",
          20: "#8a2cc6",
        },
        "Accents-orange-2": {
          100: "#ffb800",
          50: "#ffc94d",
          20: "#cc8e00",
        },
        "Accents-Orange": {
          100: "#ff621f",
          50: "#ff8c55",
          20: "#cc4e19",
        },
      },
    },
  },
  plugins: [],
};
export default config;
