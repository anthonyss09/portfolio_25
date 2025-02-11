import Image from "next/image";

export default function BtnContMain() {
  return (
    <div className="w-min ml-2 p-2 bg-white/60 xs:ml-14 md:m-0  md:w-full">
      {" "}
      <button
        className={`h-[42px] w-[196px] bg-redPrimary text-white text-[18px]  font-[530]  flex items-center justify-around xs:w-[208px] md:w-full`}
      >
        <p> Contact</p>
        <Image
          src="/assets/svgs/arrowRW.svg"
          alt="arrow right"
          height={24}
          width={24}
        />
      </button>
    </div>
  );
}
