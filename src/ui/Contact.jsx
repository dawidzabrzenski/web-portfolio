import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import ContactBtn from "../components/ContactBtn";
import EmailForm from "../components/EmailForm";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [formStatus, setFormStatus] = useState(false);

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-[#0A0A0A]">
      <motion.div
        transition={{ duration: 1 }}
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        className="relative flex flex-col items-center justify-center"
      >
        <h3 className="z-20 text-2xl text-main md:text-3xl">
          Are you interested?
        </h3>
        <h2 className="text-gradient-sec z-20 mb-4 text-5xl font-semibold md:mb-10 md:text-6xl">
          Contact me
        </h2>

        <div className="z-20 flex flex-wrap justify-center gap-4 md:gap-8">
          <ContactBtn handleClick={setFormStatus} name="Email">
            <FaEnvelope size={22} />
          </ContactBtn>
          <ContactBtn
            name="GitHub"
            href="https://www.github.com/dawidzabrzenski"
          >
            <FaGithub size={22} />
          </ContactBtn>
          <ContactBtn name="Linkedin">
            <FaLinkedin size={22} />
          </ContactBtn>
        </div>
        <img
          src="dotted.svg"
          alt="Dotted background"
          className="absolute z-10 h-[50vh] w-full transform overflow-hidden lg:h-[75vh]"
        />
      </motion.div>
      {formStatus && <EmailForm handleForm={setFormStatus} />}
    </section>
  );
}

export default Contact;
