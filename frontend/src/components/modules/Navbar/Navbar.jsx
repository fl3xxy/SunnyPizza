import { NavbarContainer,
  NavbarLogoContainer,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarHamburger,
 } from "./Navbar.styles";
import navLogo from '../../../assets/logopizza.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

function Navbar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    setIsMenuOpen(prev => !prev);
  }

  if (!isMenuOpen) {
     document.body.style.overflow = "auto";
   } else {
     document.body.style.overflow = "hidden";
   }

  return(
    <>
    <NavbarContainer>
      <NavbarLogoContainer>
        <img src={navLogo} alt="Logo Pizza" />
        <NavbarLogo>
          Sunny Pizza
        </NavbarLogo>
      </NavbarLogoContainer>
      <NavbarLinks ref={navRef}>
        <NavbarLink to={'/'}>Home</NavbarLink>
        <NavbarLink to={'/pizza-menu'}>Menu</NavbarLink>
        <NavbarLink to={'/about'}>About</NavbarLink>
        <NavbarLink to={'/contact'}><span>Contact</span></NavbarLink>
      </NavbarLinks>
      <NavbarHamburger onClick={showNavbar}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </NavbarHamburger>
    </NavbarContainer>
    </>
  );
}

export default Navbar;