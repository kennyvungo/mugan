import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "960px" },
      md: "960px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ["amiko", "ui-sans-serif", "system-ui"],
    },
    height: {
      custom: "calc(100vh / 10)", // Set the custom height to 1/7 of the viewport height
      custom2: "calc(100vh/7)",
    },
    margin: {
      "vh-bottom": "5vh",
      mobile: "3vh",
    },
    inset: {
      "1/4-top": "25%",
      "3/8-top": "37.5%",
      "5/8-top": "62.5%",
    },
  },
  plugins: [],
};
export default config;
