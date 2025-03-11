import Image from "next/image";

export default function TechIconsTwo() {
  return (
    <div className="w-full z-[200] absolute bottom-0 flex items-center justify-center gap-16 flex-wrap">
      <Image
        src="/assets/svgs/redis.svg"
        alt="nextJS icon"
        height={32}
        width={32}
      />

      <Image
        src="/assets/svgs/shopify.svg"
        alt="nextJS icon"
        height={36}
        width={36}
      />
      <Image
        src="/assets/svgs/mongoDB.svg"
        alt="nextJS icon"
        height={32}
        width={32}
      />

      <Image
        src="/assets/svgs/express.svg"
        alt="nextJS icon"
        height={32}
        width={32}
      />
    </div>
  );
}
