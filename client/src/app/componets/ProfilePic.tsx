import Image from "next/image";

export default function ProfilePic() {
  return (
    <div
      className={`h-[80px] w-[80px] shrink-0 relative border-[6px] border-blueStripeLt rounded-[80px]  md:mx-0 md:h-[96px] md:w-[96px]`}
    >
      <Image
        src="/assets/images/profilePic.jpg"
        alt="profile picture"
        fill
        className={`rounded-[80px] `}
      />
    </div>
  );
}
