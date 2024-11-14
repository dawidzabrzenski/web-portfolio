import { FaGithub, FaLinkedin } from "react-icons/fa";
import { m } from "framer-motion";
import { scrollToSection } from "../utilities/scroll";
import toast from "react-hot-toast";

const AnimatedText = ({ children, className, delay }) => (
  <m.p
    className={className}
    initial={{ opacity: 0, x: -15 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay }}
  >
    {children}
  </m.p>
);

function Hero() {
  return (
    <section
      className="flex h-screen flex-col items-center justify-center gap-3 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('./wave-opt.svg')` }}
    >
      <div className="flex flex-col items-center justify-center">
        <AnimatedText
          className="text-[2rem] font-medium tracking-tight text-main md:text-[2.5rem]"
          delay={0.5}
        >
          Hi, there
          <m.span
            initial={{ rotate: -15 }}
            animate={{ rotate: [15, -15, 15, -15, 15, -15, 15, -15, 15] }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            style={{
              display: "inline-block",
              paddingLeft: "6px",
              y: -10,
              transformOrigin: "bottom",
            }}
          >
            👋
          </m.span>
        </AnimatedText>

        <AnimatedText
          className="text-center text-4xl font-semibold text-main md:text-5xl"
          delay={1}
        >
          I’m Dawid Zabrzeński
        </AnimatedText>

        <AnimatedText
          className="text-center text-[2rem] font-medium tracking-tight text-main md:text-[2.5rem]"
          delay={1.5}
        >
          a <span className="text-gradient">Front-End</span> Developer
        </AnimatedText>
      </div>

      <AnimatedText
        className="mb-3 text-center text-lg font-light tracking-tight text-main md:text-xl"
        delay={2}
      >
        Specialized in crafting engaging web experience
      </AnimatedText>

      <m.button
        id="contactButton"
        onClick={() => scrollToSection("contact")}
        className="flex items-center justify-center gap-2 rounded-lg px-6 py-2 font-medium text-dark"
        initial={{ opacity: 0, x: 15 }}
        animate={{
          opacity: 1,
          x: 0,
          background:
            "linear-gradient(to top right, #16a34a 0%, #86efac 70%, #22c55e 100%)",
        }}
        transition={{ duration: 1, delay: 2.5 }}
        whileHover="animate"
      >
        <p className="text-dark md:text-lg">Contact me</p>
        <m.img
          className="w-8"
          src="./arrow-hero.svg"
          alt="Icon of an arrow pointing right"
          variants={{ initial: { x: 0 }, animate: { x: 5 } }}
        />
      </m.button>

      <m.div
        className="mt-4 flex gap-4"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <FaLinkedin
          className="size-6 transition-colors duration-300 hover:cursor-pointer hover:fill-main md:size-7"
          color="#4A4A4A"
          onClick={() => toast("Still working on it!", { icon: "😉" })}
        />
        <a
          href="https://www.github.com/dawidzabrzenski"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore more projects on my GitHub profile"
        >
          <FaGithub
            className="size-6 transition-colors duration-300 hover:cursor-pointer hover:fill-main md:size-7"
            color="#4A4A4A"
          />
        </a>
      </m.div>
    </section>
  );
}

export default Hero;
