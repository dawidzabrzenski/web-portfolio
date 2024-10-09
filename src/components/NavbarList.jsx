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
    </>
  );
}

export default NavbarList;
