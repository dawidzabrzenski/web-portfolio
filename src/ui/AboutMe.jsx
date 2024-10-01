import AboutMeTech from "../components/AboutMeTech";

function AboutMe() {
  return (
    <section className="flex h-screen max-h-screen flex-col items-center justify-center gap-6 bg-[#090909]">
      <div className="mt-60 flex flex-col items-center justify-center gap-2 px-8">
        <div className="relative w-full">
          <h2 className="text-gradient-sec relative z-20 text-center text-4xl font-semibold">
            About Me
          </h2>
          <img
            className="absolute left-1/2 top-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-[80%] transform"
            src="./person-1.png"
            alt="Person"
          />
        </div>
        <p className="text-center text-lg font-light text-main">
          With over 2 years of experience as a frontend developer, I specialize
          in crafting responsive and user-friendly web applications. I excel in
          creating intuitive interfaces and enjoy working in collaborative,
          agile environments.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 px-8">
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
    </section>
  );
}

export default AboutMe;
