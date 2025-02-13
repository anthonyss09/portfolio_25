import HeaderSection from "./componets/HeaderSection";
import LinksFooter from "./componets/LinksFooter";
import BtnMenu from "./componets/BtnMenu";
import DevSection from "./componets/DevSection";

export default function Home() {
  return (
    <>
      <BtnMenu />
      <HeaderSection />
      <main className={`pt-16`}>
        {" "}
        <DevSection />
      </main>
      <LinksFooter />
    </>
  );
}
