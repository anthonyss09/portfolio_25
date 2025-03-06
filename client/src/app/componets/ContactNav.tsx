export default function ContactNav() {
  return (
    <nav className="h-[80px] mb-8 grid grid-cols-2 grid-rows-2 gap-2 font-[530] tracking-wide md:flex md:flex-col md:row-start-2 md:h-full">
      <button className="bg-blueStripeRich grow">About</button>
      <button className="bg-purplePrimary grow text-white ">Developmnt</button>
      <button className="bg-greenPrimary/60 grow">Cases</button>
      <button className="bg-black text-white grow">Home</button>
    </nav>
  );
}
