import AboutMeTech from "../components/AboutMeTech";
import { m } from "framer-motion";

const MotionImage = ({ src, alt, className }) => (
  <m.img
    loading="lazy"
    initial={{ opacity: 0, x: 50 }}
    transition={{ delay: 0.2, duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    className={className}
    src={src}
    alt={alt}
  />
);

function AboutMe() {
  return (
    <section className="flex h-full flex-col-reverse items-center justify-center overflow-hidden bg-[#0A0A0A] py-12 pb-40 md:h-screen md:flex-row md:items-center md:justify-center md:px-12 md:py-0">
      <m.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ delay: 0.2, duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
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
          <img
            loading="lazy"
            src="dotted-2.webp"
            alt="Dotted background"
            className="absolute left-1/3 top-1/2 -z-10 hidden w-2/3 -translate-x-1/2 -translate-y-1/2 transform md:block"
          />
        </div>
      </m.div>
      <MotionImage
        src="./person-temp.webp"
        alt="Picture of me, Dawid Zabrzeński"
        className="relative z-10 w-[60%] translate-y-10 md:static md:w-[50%] xl:h-[60%] xl:w-auto"
      />
    </section>
  );
}

export default AboutMe;
