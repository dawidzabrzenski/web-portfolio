import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="flex h-screen flex-col items-center justify-center gap-3 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('./public/wave-mobile.svg')`,
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-[2rem] font-medium tracking-tight text-main">
          Hi, there 👋
        </p>
        <h1 className="text-4xl font-semibold text-main">
          I’m Dawid Zabrzeński
        </h1>
        <p className="text-[2rem] font-medium tracking-tight text-main">
          a{" "}
          <span className="text-transparent inline-block bg-gradient-to-b from-[#2c553d] via-[#2BE977] via-50% to-[#063a1b] bg-clip-text font-bold">
            Front-End
          </span>{" "}
          Developer
        </p>
      </div>
      <p className="mb-3 text-lg font-light tracking-tight text-main">
        Specialized in crafting engaging web experience
      </p>
      <button className="text-dark from-green-600 via-green-300 to-green-500 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-0% via-70% to-100% px-6 py-2 font-medium">
        Contact me <img className="w-8" src="./public/arrow-hero.svg" />
      </button>
      <div className="mt-4 flex gap-4">
        <FaLinkedin
          className="transition-colors duration-300 hover:fill-main"
          color="4A4A4A"
          size="1.6rem"
        />
        <FaGithub
          className="transition-colors duration-300 hover:fill-main"
          color="4A4A4A"
          size="1.6rem"
        />
      </div>
    </section>
  );
}

export default Hero;
