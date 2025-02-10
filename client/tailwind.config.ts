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
    },
  },
  plugins: [],
} satisfies Config;
