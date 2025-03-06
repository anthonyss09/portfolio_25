import BackStripes from "./BackStripes";
import Header from "./Header";
import TechIcons from "./TechIcons";
import TechIconsTwo from "./TechIconsTwo";

export default function HeaderSection() {
  return (
    <section
      className={`h-[860px] w-full overflow-hidden relative pt-[172px] z-10 border-white border-[8px] xs:h-[1020px] md:h-[1400px] lg:h-[1420px]`}
    >
      <TechIcons />
      <BackStripes />
      <Header />
      <TechIconsTwo />
    </section>
  );
}
