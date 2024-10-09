import { scrollToSection } from "../utilities/scroll";

function NavbarElement({ children, href, setNavbar }) {
  return (
    <div
      onClick={() => {
        scrollToSection(href);
        setNavbar(false);
      }}
      className="relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:bg-light-green after:transition-all after:duration-300 hover:cursor-pointer hover:text-light-green hover:after:w-full"
    >
      {children}
    </div>
  );
}

export default NavbarElement;
