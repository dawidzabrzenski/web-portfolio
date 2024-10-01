import { useState } from "react";
import { motion } from "framer-motion";

function BurgerIcon() {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      onClick={() => setActive((cur) => !cur)}
      className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      animate={active ? "open" : "close"}
    >
      <motion.span
        style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
        className="absolute h-1 w-10 bg-white"
        variants={{
          open: {
            rotate: "45deg",
          },
          close: {
            rotate: "0deg",
          },
        }}
      />
      <motion.span
        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        className="absolute h-1 w-10 bg-white"
      />
      <motion.span
        style={{ left: "calc(50% + 10px", bottom: "35%", x: "-50%", y: "50%" }}
        className="absolute h-1 w-5 bg-white"
      />
    </motion.button>
  );
}

export default BurgerIcon;
