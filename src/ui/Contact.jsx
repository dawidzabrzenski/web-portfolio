import ContactBtn from "../components/ContactBtn";

function Contact() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-[#090909]">
      <div className="relative z-20 flex flex-col items-center justify-center">
        <h3 className="text-2xl text-main">Are you interested?</h3>
        <h2 className="text-gradient-sec mb-4 text-5xl font-semibold">
          Contact me
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <ContactBtn name="Email" />
          <ContactBtn name="GitHub" />
          <ContactBtn name="Linkedin" />
        </div>
      </div>
      <img src="./dotted.svg" className="absolute z-10" />
    </section>
  );
}

export default Contact;
