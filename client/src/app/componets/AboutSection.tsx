export default function AboutSection() {
  return (
    <section className="h-[600px] px-6 relative grid grid-cols-3 grid-rows-3 gap-4">
      <div className="z-[2] row-start-1 col-start-1 col-span-2 flex flex-col justify-center p-8 bg-blueStripeLt/80">
        <h6 className="text-[14px] md:text-[28px]">I love tech!</h6>
        <p className="text-[8px] md:text-[16px]">
          More about me. This is where I&apos;m gonna talk about my
          background.I&apos;m gonna tell you about some of the tech I use & a
          little about my process & goals. I might even tell you how I plan to
          accomplish them!
        </p>
      </div>
      <div className="col-start-3 row-start-1 row-span-2 flex flex-col justify-center p-8 bg-purplePrimary/20">
        <h6 className="text-[14px] md:text-[28px]">I love tech!</h6>
        <p className="text-[8px] md:text-[16px]">
          More about me. This is where I&apos;m gonna talk about my
          background.I&apos;m gonna tell you about some of the tech I use & a
          little about my process & goals. I might even tell you how I plan to
          accomplish them!
        </p>
      </div>
      <div className="row-start-2 col-span-2 flex flex-col justify-center p-8 bg-blueStripeRich">
        <h6 className="text-[14px] md:text-[28px]">I love tech!</h6>
        <p className="text-[8px] md:text-[16px]">
          More about me. This is where I&apos;m gonna talk about my
          background.I&apos;m gonna tell you about some of the tech I use & a
          little about my process & goals. I might even tell you how I plan to
          accomplish them!
        </p>
      </div>

      <div className="row-start-3 col-start-1 col-span-3 flex flex-col justify-center p-8 bg-redPrimary text-white font-bold">
        <h6 className="text-[14px] md:text-[28px] ">I love tech!</h6>
        <p className="text-[8px] md:text-[16px] ">
          More about me. This is where I&apos;m gonna talk about my
          background.I&apos;m gonna tell you about some of the tech I use & a
          little about my process & goals. I might even tell you how I plan to
          accomplish them!
        </p>
      </div>
      <div className="h-[336px] w-[280px] shrink-0 flex flex-col justify-center p-8 bg-white absolute z-20 top-[300px] left-1/2 translate-y-[-50%] translate-x-[-50%] md:h-[300px] md:w-[400px]">
        <h6 className="text-[32px] md:text-[28px]">I love tech!</h6>
        <p className="text-[18px] md:text-[16px]">
          More about me. This is where I&apos;m gonna talk about my
          background.I&apos;m gonna tell you about some of the tech I use & a
          little about my process & goals. I might even tell you how I plan to
          accomplish them!
        </p>
      </div>
    </section>
  );
}
