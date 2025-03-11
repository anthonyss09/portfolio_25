import HeaderSection from "./componets/HeaderSection";
import BtnMenu from "./componets/BtnMenu";
import DevSection from "./componets/DevSection";
import BlissSection from "./componets/BlissSection";
import AboutSection from "./componets/AboutSection";
import ContactSection from "./componets/ContactSection";
import Nav from "./componets/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <HeaderSection />
      <main className={``}>
        {" "}
        <h3 className="text-center my-32  text-[30px]">
          Development at glance.
        </h3>
        <DevSection />
        <h3 className="text-center m-32 text-[30px]">Case by case.</h3>
        <BlissSection />
        <h3 className="text-center m-32 text-[30px]">More about me.</h3>
        <AboutSection />
        <h3 className="text-center m-32 text-[30px]">Why not reach out...</h3>
        <ContactSection />
      </main>
    </>
  );
}
