export default function ContactForm() {
  return (
    <form className="w-full bg-white z-[20] mb-4 md:col-start-2 md:row-start-1 md:row-end-3 md:mb-0">
      <h3 className="mt-4 mb-2">To: Anthony@atoffettidev.com</h3>
      <div className="flex gap-2 mb-2">
        {" "}
        <label htmlFor="sender">From:</label>
        <input
          id="sender"
          placeholder="your.email@address.com"
          className="w-full"
        />
      </div>
      <div className="flex flex-col">
        {" "}
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          rows={10}
          placeholder="Send me a message."
          className="w-full"
        />
      </div>

      <button className="h-[40px] w-full bg-black text-white">Send</button>
    </form>
  );
}
