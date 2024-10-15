import { useRef } from "react";
import {
  HiBriefcase,
  HiMiniUserCircle,
  HiEnvelope,
  HiPaperAirplane,
} from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import EmailFormInput from "./EmailFormInput";

const EMAIL_KEY = import.meta.env.VITE_EMAIL_KEY;
const EMAIL_SERVICE = import.meta.env.VITE_EMAIL_SERVICE;
const EMAIL_TEMPLATE = import.meta.env.VITE_EMAIL_TEMPLATE;

function EmailForm({ handleForm }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAIL_SERVICE, EMAIL_TEMPLATE, form.current, {
        publicKey: EMAIL_KEY,
      })
      .then(
        () => {
          toast.success("Email sent successfully.");
          handleForm(false);
        },
        (error) => {
          toast.error("There was an error when sending an email.", error.text);
        },
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 z-50 flex h-full w-full items-center justify-center bg-stone-700/20 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="relative flex h-full w-full flex-col gap-6 rounded-lg bg-dark p-12 lg:h-3/4 lg:w-2/4 lg:py-4"
      >
        <h3 className="text-gradient text-center text-3xl">
          Send me an E-mail
        </h3>
        <form
          className="flex h-full flex-col gap-4"
          onSubmit={sendEmail}
          ref={form}
        >
          <EmailFormInput
            name="user_email"
            type="email"
            labelText="Your contact E-mail"
          >
            <HiMiniUserCircle className="size-6 text-stone-200" />
          </EmailFormInput>

          <EmailFormInput
            name="user_company"
            type="text"
            labelText="Company Name"
          >
            <HiBriefcase className="size-6 text-stone-200" />
          </EmailFormInput>

          <EmailFormInput name="user_topic" type="text" labelText="Mail Topic">
            <HiEnvelope className="size-6 text-stone-200" />
          </EmailFormInput>

          <textarea
            name="user_message"
            required
            className="h-full w-full resize-none rounded-lg px-2 py-2 outline-none outline-1 focus:border-light-green focus:outline-light-green"
          ></textarea>
          <button className="ml-auto flex w-fit items-center gap-2 rounded-lg bg-stone-700 px-12 py-4 transition-all duration-300 hover:cursor-pointer hover:bg-[#71f4a5ff] hover:text-dark">
            Send <HiPaperAirplane />
          </button>
        </form>
        <span
          onClick={() => handleForm(false)}
          className="text-gradient absolute right-8 top-6 cursor-pointer text-xl transition-all duration-300 hover:brightness-75"
        >
          &#10005;
        </span>
      </motion.div>
    </motion.div>
  );
}

export default EmailForm;
