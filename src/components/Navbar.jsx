import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full overflow-hidden bg-gradient-to-b from-black px-4 py-4">
      <div className="grid w-full grid-cols-8 items-center px-4 md:grid-cols-12 md:px-12">
        <h2 className="col-span-7 text-start text-lg md:col-span-4 md:text-2xl">
          <a href="#home">
            zabrzenski<span className="text-gradient-sec">.dev</span>
          </a>
        </h2>

        <ul className="col-span-4 hidden justify-center gap-x-12 text-lg md:block md:flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="text-gradient-sec col-span-4 hidden text-end text-xl font-medium md:block">
          Resume
        </button>

        <div className="grid-row col-span-1 md:hidden">
          <BurgerIcon value={active} setValue={setActive} />
        </div>
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
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </motion.ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
