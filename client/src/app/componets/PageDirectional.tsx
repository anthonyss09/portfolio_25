import Image from "next/image";

export default function PageDirectional() {
  return (
    <div className="flex absolute bottom-32 left-4 items-center">
      <Image
        src="/assets/svgs/arrowD.svg"
        alt="arrow down"
        height={28}
        width={28}
      />
      <p className="">Development...</p>
    </div>
  );
}
