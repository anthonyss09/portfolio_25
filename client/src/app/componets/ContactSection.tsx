import ProfilePic from "./ProfilePic";
import ContactNav from "./ContactNav";
import ContactForm from "./ContactForm";
import Stamp from "./Stamp";

export default function ContactSection() {
  return (
    <section className="w-full pb-4 px-4 relative  md:grid md:grid-rows-3 md:grid-cols-2 md:gap-4">
      <div className="h-[128px] flex items-center gap-4 mb-0 md:items-start md:m-0  md:col-start-1 md:row-start-1">
        <ProfilePic />
        <h6 className="md:mt-4">Let&apos;s talk about whatever.</h6>
      </div>

      <ContactNav />
      <ContactForm />
      <Stamp />

      {/* <div className="mb-4 text-[12px] md:row-start-4">
        Product of AtoffettidevLlc 2025
      </div> */}
    </section>
  );
}
