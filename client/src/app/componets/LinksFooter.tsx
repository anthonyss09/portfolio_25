import Image from "next/image";

export default function LinksFooter() {
  return (
    <div className={`h-full fixed pb-8 top-[343px] right-16 z-30 flex gap-4`}>
      <div className={``}>
        {" "}
        <div className={`h-[24px] w-[24px] relative`}>
          {" "}
          <Image src="/assets/svgs/github.svg" alt="github icon" fill />
        </div>
      </div>
      <div className={``}>
        <div className={`h-[24px] w-[24px] relative`}>
          {" "}
          <Image src="/assets/svgs/linkedin.svg" alt="github icon" fill />
        </div>
      </div>
    </div>
  );
}
