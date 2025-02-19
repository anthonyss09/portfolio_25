export default function DevSection() {
  return (
    <section className="mb-12">
      <h3 className="h-32px mb-12 text-[20px] font-bold ml-8 relative sm:text-[24px] sm:mb-20">
        <p className="relative z-10">Development at a glance.</p>
        <div className="h-[48px] w-2/3 bg-greyLight/20 absolute right-12 top-0 z-0 sm:h-[64px] sm:bg-greyLight/30"></div>
      </h3>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
        <div className="">
          <h6 className="h-10 w-[128px] bg-purplePrimary ml-8 mb-4 p-4 font-[530] text-[20px] flex justify-start items-center sm:ml-0">
            Design
          </h6>
          <div className="h-[80px] max-w-[300px] ml-10 bg-greyLight/30 xs:p-2 xs:ml-8 sm:h-[180px] sm:m-0 sm:p-4">
            <p className="w-full h-full bg-white/80 p-2 flex items-center text-[16px] sm:p-4 sm:text-[14px]">
              {" "}
              Keep up with design trends & strive to move them forward.
            </p>
          </div>
        </div>
        <div className="">
          <h6 className="h-10 w-[160px] bg-blueStripeRich ml-8  mb-4 p-4 font-[530] text-[20px] flex justify-start items-center sm:ml-0">
            Architecture
          </h6>
          <div className="h-[100px] max-w-[300px] ml-10 bg-greyLight/30 sm:h-[180px] sm:m-0">
            <p className="w-full h-full p-2 bg-white/80 flex items-center text-[16px] sm:p-4 sm:text-[14px]">
              Think small to think big. Sleek component based architecture with
              scalability in mind.
            </p>
          </div>
        </div>
        <div className="">
          <h6 className="h-10 w-[144px] bg-greenPrimary ml-8 mb-4 p-4 font-[530] text-[20px] flex justify-start items-center sm:ml-0">
            Engineering
          </h6>
          <div className="h-[100px] max-w-[300px] ml-8 bg-greyLight/30  xs:p-2 sm:h-[180px] sm:m-0 sm:p-4">
            <p className="w-full h-full p-2 bg-white/80 flex items-center text-[16px] sm:p-4 sm:text-[14px]">
              Research based approach. Custom solutions meant to perform in
              perpetually evolving ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
