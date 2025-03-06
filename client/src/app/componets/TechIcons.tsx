import Image from "next/image";

export default function TechIcons() {
  return (
    <div className="w-full z-[200] absolute top-[80px] flex items-center justify-around flex-wrap">
      <Image
        src="/assets/svgs/JS.svg"
        alt="nextJS icon"
        height={48}
        width={48}
      />
      <Image
        src="/assets/svgs/TS.svg"
        alt="nextJS icon"
        height={26}
        width={26}
      />
      <Image
        src="/assets/svgs/nextJS.svg"
        alt="nextJS icon"
        height={48}
        width={48}
      />
      <Image
        src="/assets/svgs/react.svg"
        alt="nextJS icon"
        height={28}
        width={28}
      />
    </div>
  );
}
