import ContactBtn from "../components/ContactBtn";

function Contact() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-[#090909]">
      <div className="relative flex flex-col items-center justify-center">
        <h3 className="text-2xl text-main md:text-3xl">Are you interested?</h3>
        <h2 className="text-gradient-sec mb-4 text-5xl font-semibold md:mb-10 md:text-6xl">
          Contact me
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <ContactBtn name="Email" />
          <ContactBtn name="GitHub" />
          <ContactBtn name="Linkedin" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
