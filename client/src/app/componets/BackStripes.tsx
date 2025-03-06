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
      className={`h-[1400px] w-full absolute rotate-45 top-[-200px] xs:top-[112px] sm:top-[100px] sm:left-[180px] md:top-[300px] lg:top-[400px] z-0 `}
    >
      <div
        id="header-stripe-lt"
        className={`h-[1500px] w-[90px] bg-blueStripeLt absolute left-[-90px] bottom-[-1500px] xs:w-[120px] xs:left-[-270px] sm:h-[2000px]  duration-1000 ease-in-out`}
      ></div>
      <div
        id="header-stripe-md"
        className={`h-[1500px] w-[90px] bg-blueStripeMd  absolute left-[16px] bottom-[-1500px]  xs:w-[120px] xs:left-[-134px] sm:h-[2000px] duration-1000 ease-in-out`}
      ></div>
      <div
        id="header-stripe-rich"
        className={`h-[1500px] w-[90px] bg-blueStripeRich absolute  left-[122px] bottom-[-1500px] sm:h-[2000px] xs:w-[120px] xs:left-[2px] duration-1000 ease-in-out`}
      ></div>
      {/* <div
        id="header-stripe-rich"
        className={`h-[1500px] w-[90px] bg-blueDk absolute  left-[228px] bottom-[0px] sm:h-[2000px] xs:w-[120px] xs:left-[256px] duration-1000 ease-in-out`}
      ></div> */}
    </div>
  );
}
