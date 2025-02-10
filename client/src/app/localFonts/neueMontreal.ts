import localFont from "next/font/local";

export const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/PPNeueMontreal/PPNeueMontreal-Thin.otf",
      weight: "200",
    },
    {
      path: "./fonts/PPNeueMontreal/NeueMontreal-Light.otf",
      weight: "300",
    },
    {
      path: "./fonts/PPNeueMontreal/PPNeueMontreal-Medium.otf",
      weight: "400",
    },
    {
      path: "./fonts/PPNeueMontreal/PPNeueMontreal-Medium.otf",
      weight: "530",
    },
    {
      path: "./fonts/PPNeueMontreal/PPNeueMontreal-Bold.otf",
      weight: "800",
    },
  ],
  variable: "--neue-montreal",
});
