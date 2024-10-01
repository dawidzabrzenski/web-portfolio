import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  const arrow = {
    initial: { x: 0 },
    animate: { x: 5 },
  };

  return (
    <section
      className="flex h-screen flex-col items-center justify-center gap-3 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('./wave.svg')`,
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Pierwsza część - tekst Hi, There oraz imię i tytuł */}
        <motion.p
          className="text-[2rem] font-medium tracking-tight text-main md:text-[2.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, there
          <motion.span
            initial={{ rotate: -15 }}
            animate={{
              rotate: [15, -15, 15, -15, 15, -15, 15, -15, 15],
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              paddingLeft: "6px",
              y: -10,
              transformOrigin: "bottom",
            }}
          >
            👋
          </motion.span>
        </motion.p>
        <motion.h1
          className="text-center text-4xl font-semibold text-main md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I’m Dawid Zabrzeński
        </motion.h1>
        <motion.p
          className="text-center text-[2rem] font-medium tracking-tight text-main md:text-[2.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          a <span className="text-gradient">Front-End</span> Developer
        </motion.p>
      </div>

      {/* Druga część - tekst Specialized in... */}
      <motion.p
        className="mb-3 text-center text-lg font-light tracking-tight text-main md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Specialized in crafting engaging web experience
      </motion.p>

      {/* Trzecia część - przyciski */}
      <motion.button
        className="flex items-center justify-center gap-2 rounded-lg px-6 py-2 font-medium text-dark"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          background:
            "linear-gradient(to top right, #16a34a 0%, #86efac 70%, #22c55e 100%)",
        }}
        transition={{ duration: 1, delay: 2.5 }}
        whileHover="animate"
      >
        <p className="text-dark md:text-lg">Contact me</p>
        <motion.img
          className="w-8"
          src="./arrow-hero.svg"
          alt="Icon of an arrow pointing right"
          variants={arrow}
        />
      </motion.button>

      <motion.div
        className="mt-4 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <FaLinkedin
          className="size-6 transition-colors duration-300 hover:fill-main md:size-7"
          color="4A4A4A"
        />
        <FaGithub
          className="size-6 transition-colors duration-300 hover:fill-main md:size-7"
          color="4A4A4A"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
