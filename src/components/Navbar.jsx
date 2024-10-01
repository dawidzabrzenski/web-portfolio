import BurgerIcon from "./BurgerIcon";

function Navbar() {
  return (
    <nav className="sticky top-0 z-40 p-4">
      <div>
        <h2 className="text-lg">
          zabrzenski<span className="text-gradient-sec">.dev</span>
        </h2>
        <BurgerIcon />
      </div>
      {/* <ul className="mt-6 flex justify-center gap-4 rounded-full bg-stone-800 py-3">
        <li>Home</li>
        <li>Test</li>
        <li>Test3</li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
