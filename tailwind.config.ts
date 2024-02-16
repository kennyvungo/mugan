import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'sm':{'max': '639px'}
    },
    fontFamily: {
      sans: ["amiko", "ui-sans-serif", "system-ui"],
    },
    height: {
      custom: "calc(100vh / 10)", // Set the custom height to 1/7 of the viewport height
    },
    margin: {
      'vh-bottom': '5vh',
      'mobile': '3vh', 
    },
  },
  plugins: [],
};
export default config;
