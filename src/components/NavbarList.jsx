import ButtonRotating from "./ButtonRotating";
import NavbarElement from "./NavbarElement";

function NavbarList({ setNavbar }) {
  return (
    <>
      <li>
        <NavbarElement setNavbar={setNavbar} href="about">
          About
        </NavbarElement>
      </li>
      <li>
        <NavbarElement setNavbar={setNavbar} href="projects">
          Projects
        </NavbarElement>
      </li>
      <li>
        <NavbarElement setNavbar={setNavbar} href="contact">
          Contact
        </NavbarElement>
      </li>
      <li className="relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:bg-light-green after:transition-all after:duration-300 hover:cursor-pointer hover:text-light-green hover:after:w-full md:hidden">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/resume.pdf"
          aria-label="Link to my resume"
          onClick={() => setNavbar(false)}
        >
          Resume
        </a>
      </li>
    </>
  );
}

export default NavbarList;
