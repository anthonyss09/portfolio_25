import Image from "next/image";

export default function BtnContMain() {
  return (
    <div className="mx-auto w-min xs:ml-14 md:m-0  md:w-full">
      {" "}
      <button
        className={`h-[36px] w-[128px] flex justify-center items-end  gap-4  md:w-full `}
      >
        {/* <p className="font-[530] text-[16px]"> Contact</p> */}
        <Image
          src="/assets/svgs/arrowRW.svg"
          alt="arrow right"
          height={24}
          width={24}
          className="self-center"
        />
      </button>
    </div>
  );
}
