import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="sticky top-0 z-40 px-4 py-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg">
          zabrzenski<span className="text-gradient-sec">.dev</span>
        </h2>
        <BurgerIcon value={active} setValue={setActive} />
      </div>

      {active && (
        <div className="flex justify-center">
          <motion.ul
            initial={{ opacity: 0, y: -80, width: "66%" }}
            animate={[{ opacity: 1, y: 0 }, { width: "100vw" }]}
            transition={{
              opacity: { duration: 0.2 },
              y: { duration: 0.2 },
              width: { duration: 0.3, delay: 0.3 },
            }}
            className="mt-4 flex justify-center gap-6 rounded-full bg-stone-800 py-3"
          >
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </motion.ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
