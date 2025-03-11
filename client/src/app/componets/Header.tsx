import ProfilePic from "./ProfilePic";
import Contacts from "./Contacts";
import Stamp from "./Stamp";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center z-[110] relative pt-12 pb-0 bg-white border-[rgb(248,248,248)] xs:border-[8px] sm:mx-auto sm:w-[568px]  md:border-[rgb(240,240,240)] md:gap-6 ">
      <ProfilePic />
      <div className={`font-[400] leading-[34px]`}>
        <h1 className="w-[256px] text-[24px]">
          {" "}
          <p className="">Hi.</p>
          <p>I&apos;m Anthony Toffetti.</p>
          <p className="">A Web Developer.</p>
        </h1>

        <p className={`w-[256px] text-[18px] font-[400] leading-[26px]`}>
          I write clean, developer friendly code, tested & optimized for the
          internet.
        </p>

        <Contacts />
        <Stamp />
      </div>
    </header>
  );
}
