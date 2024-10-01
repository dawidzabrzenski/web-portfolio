import { motion, MotionConfig } from "framer-motion";

function BurgerIcon({ value, setValue }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        easy: "easyInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setValue((cur) => !cur)}
        className="relative h-12 w-12 rounded-full transition-colors"
        animate={value ? "open" : "close"}
      >
        <motion.span
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          className="absolute h-0.5 w-5 bg-light-green"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          className="absolute h-0.5 w-5 bg-light-green"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{
            left: "calc(50% + 10px",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-0.5 w-2.5 bg-light-green"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 5px",
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

export default BurgerIcon;
