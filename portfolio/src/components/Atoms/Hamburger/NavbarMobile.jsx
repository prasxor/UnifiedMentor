// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavbarMobile.css";
// import ToggleBtn from "../ToggleBtn/ToggleBtn";

// const NavbarMobile = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const [showNavbar, setShowNavbar] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         if (window.scrollY < lastScrollY) {
//           setShowNavbar(true); // Show navbar when scrolling up
//         } else {
//           setShowNavbar(false); // Hide navbar when scrolling down
//         }
//         setLastScrollY(window.scrollY);
//       };
  
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, [lastScrollY]);

//   return (
//     <nav className={showNavbar ? "navbar visible navbar-mobile" : "navbar hidden navbar-mobile"}>
//       <div className="menu-header">
//         <div className="toggle-btn">
//           <ToggleBtn />
//         </div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//         </div>
//       </div>
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
//         <li><NavLink to="/Project" activeClassName="active">Project</NavLink></li>
//         <li><NavLink to="/About" activeClassName="active">About</NavLink></li>
//         <li><NavLink to="/Contact" activeClassName="active">Contact</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavbarMobile;


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarMobile.css";
import ToggleBtn from "../ToggleBtn/ToggleBtn";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // Show navbar when scrolling up
      } else {
        setShowNavbar(false); // Hide navbar when scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar navbar-mobile ${showNavbar ? "visible" : "hidden"}`}>
      <div className="menu-header">
        <div className="toggle-btn">
          <ToggleBtn />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="close-icon">✖</span> 
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/Project" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Project</NavLink></li>
        <li><NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
