import AboutMeTech from "../components/AboutMeTech";

function AboutMe() {
  return (
    <section className="flex h-screen max-h-screen flex-col-reverse items-center justify-center bg-[#090909] pb-10 md:flex-row md:items-center md:justify-center md:px-12">
      <div className="flex flex-col items-center justify-center gap-2 px-8 md:mt-0 md:w-1/2 md:items-start md:gap-6">
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
      </div>
      <img
        className="relative z-10 w-[60%] translate-y-10 md:static md:h-[80%] md:w-auto"
        src="./person-1.png"
        alt="Person"
      />
    </section>
  );
}

export default AboutMe;
