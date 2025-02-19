import HeaderSection from "./componets/HeaderSection";
import LinksFooter from "./componets/LinksFooter";
import BtnMenu from "./componets/BtnMenu";
import DevSection from "./componets/DevSection";
import BlissSection from "./componets/BlissSection";

export default function Home() {
  return (
    <>
      <BtnMenu />
      <HeaderSection />
      <main className={`pt-16`}>
        {" "}
        <DevSection />
        <h3 className="text-center m-32 text-[30px]">Case by case.</h3>
        <BlissSection />
        {/* <button className="h-[40px] w-[276px] ml-8 mb-12 bg-black text-white">
          Load next case.
        </button> */}
      </main>
      <LinksFooter />
    </>
  );
}
