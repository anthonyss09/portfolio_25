"use client";
import { useEffect } from "react";

export default function BackStripes() {
  useEffect(() => {
    const headerStripeLt = document.getElementById("header-stripe-lt");
    const headerStripeMd = document.getElementById("header-stripe-md");
    const headerStripeRich = document.getElementById("header-stripe-rich");

    if (headerStripeLt && headerStripeMd && headerStripeRich) {
      setTimeout(() => {
        headerStripeLt.style.bottom = "0";
      }, 0);
      setTimeout(() => {
        headerStripeMd.style.bottom = "0";
      }, 100);
      setTimeout(() => {
        headerStripeRich.style.bottom = "0";
      }, 200);
    }
  });

  return (
    <div
      className={`h-[1400px] w-full absolute rotate-45 top-[36px] xs:top-[112px] sm:top-[100px] md:top-[300px] lg:top-[400px] z-0 `}
    >
      <div
        id="header-stripe-lt"
        className={`h-[1500px] w-[60px] bg-blueStripeLt absolute bottom-[-1500px] sm:h-[2000px] xs:w-[120px]  duration-1000 ease-in-out`}
      ></div>
      <div
        id="header-stripe-md"
        className={`h-[1500px] w-[60px] bg-blueStripeMd absolute left-[68px] bottom-[-1500px] sm:h-[2000px] xs:w-[120px] xs:left-[128px] duration-1000 ease-in-out`}
      ></div>
      <div
        id="header-stripe-rich"
        className={`h-[1500px] w-[60px] bg-blueStripeRich absolute  left-[136px] bottom-[-1500px] sm:h-[2000px] xs:w-[120px] xs:left-[256px] duration-1000 ease-in-out`}
      ></div>
    </div>
  );
}
