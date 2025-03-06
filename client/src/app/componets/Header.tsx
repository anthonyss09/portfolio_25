import ProfilePic from "./ProfilePic";
import Contacts from "./Contacts";
import Stamp from "./Stamp";

export default function Header() {
  return (
    <header className="bg-white w-full z-[110] relative py-20 bg-[rgb(252,252,252)] border-[10px] border-white md:mx-auto md:gap-6 md:w-[768px]">
      <div className="absolute bottom-[-16px] right-6 ">
        {" "}
        <Stamp />
      </div>

      <div className="w-full flex gap-4 xs:justify-center  sm:w-[440px] sm:mx-auto md:gap-4">
        {" "}
        <ProfilePic />
        <h1 className={`font-[400] text-[24px] leading-[34px]`}>
          <p className="">Hi.</p>
          <p>I&apos;m Anthony Toffetti.</p>
          <p className="">A Web Developer.</p>
          <div
            className={`mb-4 text-[16px] font-[400] text-black leading-[26px]`}
          >
            <p>
              I write clean, developer friendly code, tested & optimized for the
              internet.
            </p>
          </div>
          <Contacts />
        </h1>
      </div>
    </header>
  );
}
