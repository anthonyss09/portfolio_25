import Image from "next/image";

export default function LinksFooter() {
  return (
    <div
      className={`fixed bottom-2 right-2 z-30 flex  items-end gap-4  px-4 rounded-xl`}
    >
      <div className={`bg-white/60 p-2`}>
        {" "}
        <div className={`h-[28px] w-[28px] relative`}>
          {" "}
          <Image src="/assets/svgs/github.svg" alt="github icon" fill />
        </div>
      </div>
      <div className={`bg-white/60 p-2`}>
        <div className={`h-[28px] w-[28px] relative`}>
          {" "}
          <Image src="/assets/svgs/linkedin.svg" alt="github icon" fill />
        </div>
      </div>
    </div>
  );
}
