import Image from "next/image";

export default function BlissSection() {
  return (
    <section className="w-full px-4 py-8 mb-20 pb-8 relative xs:w-min xs:flex xs:flex-col xs:justify-center  sm:flex-row md:mx-auto bg-[rgb(250,250,250)] md:p-20">
      <div className="mb-2 ">
        <h3 className="flex items-center gap-4">
          <p className="text-[32px]">Bliss+</p>
          <button className="w-[56px] h-[32px] text-center bg-purplePrimary text-white font-[530]">
            Visit
          </button>
        </h3>
        <p className="text-[24px] text-black/40">E-Commerce</p>
        <p className="w-[276px] mb-2">
          NextJS + RTK + Redis + Shopify + TypeScript
        </p>
        {/* <div className="h-0 bg-greyLight/20 mr-4 sm:h-[258px]"></div> */}
      </div>

      <div className="xs:grid xs:gap-2">
        {" "}
        <div className="h-[276px] w-[full] max-w-[360px] mb-2 relative border-[3px] border-blueDk xs:h-full xs:w-[336px] xs:col-start-2">
          {" "}
          <Image src="/assets/images/bliss1.png" alt="bliss website" fill />
        </div>
        <div className="flex gap-[1px] xs:h-full xs:justify-around xs:flex-col xs:col-start-1 xs:row-start-1">
          {" "}
          <div className="relative h-[109px] w-[120px] w-1/3 border-[2px] border-blueDk">
            {" "}
            <Image
              src="/assets/images/bliss1.png"
              alt="bliss website small one"
              fill
            />
          </div>
          <div className="relative h-[109px] w-[120px] w-1/3 border-[2px] border-blueDk">
            {" "}
            <Image
              src="/assets/images/bliss1.png"
              alt="bliss website small two"
              fill
            />
          </div>
          <div className="relative h-[109px] w-[120px] w-1/3 border-[2px] border-blueDk">
            {" "}
            <Image
              src="/assets/images/bliss1.png"
              alt="bliss website small three"
              fill
            />
          </div>
        </div>
        <button className="h-[40px] w-full mt-4 bg-black text-white font-[530] xs:w-full xs:mx-auto xs:col-start-1 xs:col-end-3 ">
          View Case
        </button>
      </div>
    </section>
  );
}
