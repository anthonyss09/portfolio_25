import HeaderSection from "./componets/HeaderSection";
import LinksFooter from "./componets/LinksFooter";
import BtnMenu from "./componets/BtnMenu";
import DevSection from "./componets/DevSection";
import BlissSection from "./componets/BlissSection";
import AboutSection from "./componets/AboutSection";

export default function Home() {
  return (
    <>
      <BtnMenu />
      <HeaderSection />
      <main className={`pt-16`}>
        {" "}
        <h3 className="text-center m-32 text-[30px]">A look at development.</h3>
        <DevSection />
        <h3 className="text-center m-32 text-[30px]">Case by case.</h3>
        <BlissSection />
        <h3 className="text-center m-32 text-[30px]">More about me.</h3>
        <AboutSection />
      </main>
      <LinksFooter />
    </>
  );
}
