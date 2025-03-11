import Image from "next/image";

export default function Contacts() {
  return (
    <div className="flex gap-4  bg-white mt-4 items-start justify-center md:h-full">
      {" "}
      <div className={`h-[28px] w-[28px] relative`}>
        {" "}
        <Image src="/assets/svgs/linkedin.svg" alt="github icon" fill />
      </div>
      <div className={`h-[28px] w-[28px] relative`}>
        {" "}
        <Image src="/assets/svgs/github.svg" alt="github icon" fill />
      </div>
      <Image
        src="/assets/svgs/arrowRW.svg"
        alt="arrow right"
        height={28}
        width={28}
      />
    </div>
  );
}
