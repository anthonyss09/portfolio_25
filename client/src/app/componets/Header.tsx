import ProfilePic from "./ProfilePic";
import BtnContMain from "./BtnContMain";

export default function Header() {
  return (
    <header className="w-[352px] z-10 relative flex flex-col mt-[64px] mx-auto py-8 xs:mt-[120px]  xs:w-[440px] md:border-[1px] md:bg-white/60 md:border-greyLight/10 md:shadow-lg md:flex-row md:items-center md:justify-center md:gap-6 md:w-[768px] md:h-[560px] md:mt-24 md:py-[120px] md:border-0 lg:w-[90%]">
      <div className="md:h-full md:flex md:flex-col md:justify-start md:gap-4">
        {" "}
        <div className="flex justify-start items-end gap-4 text-[32px] xs:ml-12 md:ml-0">
          {" "}
          <ProfilePic /> <p>Hi.</p>
        </div>
        <h1
          className={`my-4 mt-4 ml-4 font-[400] text-[32px] leading-[34px] xs:ml-16 md:m-0 md:leading-[48px]`}
        >
          <p>I&apos;m Anthony Toffetti.</p>
          <p>A Web Developer.</p>
        </h1>
      </div>

      <div className="md:h-full md:flex md:flex-col md:justify-end md:gap-8 md:w-[336px]">
        {" "}
        <div
          className={`w-[298px] my-4 mb-8 ml-4 py-4  text-[20px] font-[400] bg-white/60 leading-[26px] md:w-[336px] xs:ml-16 md:m-0  md:py-8 md:px-4 md:shadow-md`}
        >
          <p>I write clean, developer friendly</p>
          <p></p>
          <p>code, tested & optimized for</p>
          <p></p>
          <p>the internet.</p>
        </div>
        <BtnContMain />
      </div>
    </header>
  );
}
