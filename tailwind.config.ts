import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-btn": "#3B71FE",
        "primary-gray": "#777E90",
        "main-black": "#23262F",
        "second-gray": "#E6E8EC",
        "primary-blue": "#58C27D",
        "main-gary": "#23262F",
        "advanture-gay": "#353945",
        "white-fc": "#FCFCFD",
        "travel-01": "#8BC5E5",
        "travel-02": "#92A5EF",
        "travel-03": "#58C27D",
        somewhere: "#F4F5F6",
        "somewhere-bg": "#353945",
        "somewhere-price": "#B1B5C3",
        "somewhere-main": "#141416",
        "somewhere-second": "#353945",
      },
      backgroundImage: {
        "hero-banner": "url('../public/images/banner-hero.svg')",
        "desktop-around":
          "url('../public/images/around-the-world/bg-around.svg')",
        "mobile-around":
          "url('../public/images/around-the-world/bg-around-mobile.svg')",
      },
      boxShadow: {
        hero: "0px 40px 64px -32px #0F0F0F1A",
      },
    },
  },
  plugins: [],
};
export default config;
