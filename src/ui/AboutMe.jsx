import AboutMeTech from "../components/AboutMeTech";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section className="flex h-full flex-col-reverse items-center justify-center overflow-hidden bg-[#0A0A0A] py-12 pb-40 md:h-screen md:flex-row md:items-center md:justify-center md:px-12 md:py-0">
      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        transition={{ delay: 0.2 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        onViewportLeave={{ opacity: 0 }}
        className="flex flex-col items-center justify-center gap-2 px-8 md:mt-0 md:w-1/2 md:items-start md:gap-6"
      >
        <div className="relative w-full md:space-y-4">
          <h2 className="text-gradient-sec relative z-20 text-center text-4xl font-semibold md:text-start">
            About Me
          </h2>
          <p className="text-center text-lg font-light text-main md:w-4/5 md:text-start md:text-xl">
            With over 2 years of experience as a frontend developer, I
            specialize in crafting responsive and user-friendly web
            applications. I excel in creating intuitive interfaces and enjoy
            working in collaborative, agile environments.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-8 md:space-y-2 md:px-0">
          <h3 className="text-gradient-sec text-2xl font-bold">
            Technologies that I use
          </h3>
          <ul className="grid w-full grid-cols-2 gap-x-6 gap-y-4 text-main">
            <AboutMeTech name="React" />
            <AboutMeTech name="JavaScript" />
            <AboutMeTech name="Next" />
            <AboutMeTech name="TypeScript" />
            <AboutMeTech name="Redux" />
            <AboutMeTech name="Tailwind" />
            <AboutMeTech name="Supabase" />
            <AboutMeTech name="Sass" />
          </ul>
        </div>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, translateX: 50 }}
        transition={{ delay: 0.5 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        onViewportLeave={{ opacity: 0 }}
        className="relative z-10 w-[60%] translate-y-10 md:static md:h-[80%] md:w-auto"
        src="./person-1.png"
        alt="Person"
      />
    </section>
  );
}

export default AboutMe;
