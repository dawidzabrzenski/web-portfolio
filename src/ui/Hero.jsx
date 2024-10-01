import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="flex h-screen flex-col items-center justify-center gap-3 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('./wave.svg')`,
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-[2rem] font-medium tracking-tight text-main md:text-[2.5rem]">
          Hi, there 👋
        </p>
        <h1 className="text-4xl font-semibold text-main md:text-5xl">
          I’m Dawid Zabrzeński
        </h1>
        <p className="text-[2rem] font-medium tracking-tight text-main md:text-[2.5rem]">
          a <span className="text-gradient">Front-End</span> Developer
        </p>
      </div>
      <p className="mb-3 text-lg font-light tracking-tight text-main md:text-xl">
        Specialized in crafting engaging web experience
      </p>
      <button className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-green-600 from-0% via-green-300 via-70% to-green-500 to-100% px-6 py-2 font-medium text-dark">
        <p className="text-dark md:text-lg">Contact me </p>
        <img
          className="w-8"
          src="./arrow-hero.svg"
          alt="Icon of an arrow pointing right"
        />
      </button>
      <div className="mt-4 flex gap-4">
        <FaLinkedin
          className="size-6 transition-colors duration-300 hover:fill-main md:size-7"
          color="4A4A4A"
        />
        <FaGithub
          className="size-6 transition-colors duration-300 hover:fill-main md:size-7"
          color="4A4A4A"
        />
      </div>
    </section>
  );
}

export default Hero;
