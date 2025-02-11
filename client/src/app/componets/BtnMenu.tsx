import Image from "next/image";

export default function BtnMenu() {
  return (
    <button className={`fixed top-4 left-4 z-30 bg-white/60 p-2`}>
      {" "}
      <Image
        src="/assets/svgs/squareMenu.svg"
        alt="menu button"
        height={28}
        width={28}
      />
    </button>
  );
}
