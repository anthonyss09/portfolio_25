import BtnMenu from "./BtnMenu";

export default function Nav() {
  return (
    <div className="w-[220px] flex gap-2 fixed top-6 left-2 z-20 flex pr-6 items-end">
      <div className="shrink-0">
        {" "}
        <BtnMenu />
      </div>

      {/* <div className="w-full border-b-[1px] border-purplePrimary "></div> */}
    </div>
  );
}
