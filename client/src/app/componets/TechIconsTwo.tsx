import Image from "next/image";

export default function TechIconsTwo() {
  return (
    <div className="py-8 w-full z-[200] absolute bottom-[0px] flex items-center justify-around flex-wrap">
      <Image
        src="/assets/svgs/redis.svg"
        alt="nextJS icon"
        height={28}
        width={28}
      />

      <Image
        src="/assets/svgs/shopify.svg"
        alt="nextJS icon"
        height={32}
        width={32}
      />
      <Image
        src="/assets/svgs/mongoDB.svg"
        alt="nextJS icon"
        height={28}
        width={28}
      />

      <Image
        src="/assets/svgs/express.svg"
        alt="nextJS icon"
        height={28}
        width={28}
      />
    </div>
  );
}
