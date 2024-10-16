import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import { motion } from "framer-motion";
import { scrollToSection } from "../utilities/scroll";
import NavbarList from "./NavbarList";
import ButtonRotating from "./ButtonRotating";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full overflow-hidden bg-gradient-to-b from-black via-black/70 px-4 py-4 md:pt-8">
      <div className="grid w-full grid-cols-8 items-center px-4 md:grid-cols-12 md:px-12">
        <h2 className="col-span-7 text-start text-lg md:col-span-4 md:text-2xl">
          <p
            className="font-kumbh font-medium hover:cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            dzabrzenski
            <span className="text-gradient-sec font-bold">.pl</span>
          </p>
        </h2>

        <ul className="col-span-4 hidden justify-center gap-x-12 text-lg md:block md:flex">
          <NavbarList setNavbar={setActive} />
        </ul>

        <div className="col-span-4 hidden px-12 text-end text-xl font-medium md:block">
          <ButtonRotating />
        </div>

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
            className="mt-4 flex justify-center gap-6 rounded-full bg-stone-800 py-3 drop-shadow-md"
          >
            <NavbarList setNavbar={setActive} />
          </motion.ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
