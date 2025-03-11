import Image from "next/image";

export default function BtnMenu() {
  return (
    <button className={` z-30 bg-white p-2`}>
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
