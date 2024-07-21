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
        primary: "#130185",
        white: "#FFFFFF",
        black: "#000000",
        dark: "#0F1320",
        "light-blue": "#171B29",
        success: "#22A75D",
        blue: "#2278D4",
        warning: "#FFD100",
        danger: "#E20613",
        "content-color": "#DDE2FF",
      },
      boxShadow: {
        success: " 0px 3px 10px 0px rgba(34, 167, 93, 0.11)",
        blue: " 0px 3px 10px 0px rgba(34, 120, 212, 0.11)",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
        "3xl": "1620px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          colors: {
            primary: "#130185",
            white: "#FFFFFF",
            black: "#000000",
            dark: "#0F1320",
            "light-blue": "#171B29",
            success: "#22A75D",
            blue: "#2278D4",
            warning: "#FFD100",
            danger: "#E20613",
            "content-color": "#DDE2FF",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
