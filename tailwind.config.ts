import type { Config } from "tailwindcss";
import plugin from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
    fontFamily: {
      cursive: ["var(--font-cursive)"],
      mono: ["var(--font-pt-mono)"]
    },
    dropShadow: {
      'title': ['1px 1px 0 #000', '-1px -1px 0 #000', '0 3px 0 #fff'],
      'sub-title': ['0.5px 0.5px 0 #000', '-0.5px -0.5px 0 #000'],
      'input-title': ['0.2px 0.2px 0 #000', '-0.2px -0.2px 0 #000']
    }
  },
  plugins: [],
};
export default config;
