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
      <li className="relative rounded-lg bg-light-green px-2 font-medium text-dark transition-colors duration-300 md:hidden">
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
