import { useState } from "react";
import BurgerIcon from "./BurgerIcon";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="sticky top-0 z-40 p-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg">
          zabrzenski<span className="text-gradient-sec">.dev</span>
        </h2>
        <BurgerIcon value={active} setValue={setActive} />
      </div>
      {/* <ul className="mt-4 flex justify-center gap-4 rounded-full bg-stone-800 py-3">
        <li>Home</li>
        <li>Test</li>
        <li>Test3</li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
