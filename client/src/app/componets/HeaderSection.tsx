import BackStripes from "./BackStripes";
import Header from "./Header";

export default function HeaderSection() {
  return (
    <section
      className={`h-[800px] w-full overflow-hidden relative border-white z-10 border-[16px] border-white`}
    >
      <BackStripes />
      <Header />
    </section>
  );
}
