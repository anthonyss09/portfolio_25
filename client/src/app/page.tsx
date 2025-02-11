import HeaderSection from "./componets/HeaderSection";
import LinksFooter from "./componets/LinksFooter";
import BtnMenu from "./componets/BtnMenu";

export default function Home() {
  return (
    <>
      <BtnMenu />
      <HeaderSection />
      {/* <main className={`h-[400px] flex justify-center items-center`}>
        {" "}
        <Loading />
      </main> */}
      <LinksFooter />
    </>
  );
}
