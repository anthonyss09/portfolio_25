import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue25: "rgb(var(--blue-25))",
        blueBtnMd: "rgb(var(--blue-btn-md))",
        blueMenuMd: "rgb(var(--blue-menu-md))",
        blueDk: "rgb(var(--blue-dk))",
        blueStripeLt: "rgb(var(--blue-stripe-lt))",
        blueStripeMd: "rgb(var(--blue-stripe-md))",
        blueStripeRich: "rgb(var(--blue-stripe-rich))",
        greenPrimary: "rgb(var(--green-primary))",
        greyLight: "rgb(var(--grey-light))",
        purplePrimary: "rgb(var(--purple-primary))",
        redPrimary: "rgb(var(--red-primary))",
      },
      fontFamily: {
        sans: ["var(--neue-montreal)"],
        lato: ["var(--lato))"],
      },
    },
    screens: {
      xs: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
} satisfies Config;
