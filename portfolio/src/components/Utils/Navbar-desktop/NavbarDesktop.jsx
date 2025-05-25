

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarDesktop.css";
import LogoDesktop from "../../../assets/PersonalData/image.png";
import ToggleBtn from "../../Atoms/ToggleBtn/ToggleBtn";

const NavbarDesktop = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <nav className={showNavbar ? "navbar visible" : "navbar hidden"}>
      <div className="logo">
        <img src={LogoDesktop} alt="Logo" />
      </div>
      <ul className="navLinks">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li><NavLink to="/Project" className={({ isActive }) => (isActive ? "active" : "")}>Project</NavLink></li>
        <li><NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
        <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
      </ul>
      <div className="ToggleMode">
        <ToggleBtn />
      </div>
    </nav>
  );
};

export default NavbarDesktop;


// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavbarDesktop.css";
// import ToggleBtn from "../../Atoms/ToggleBtn/ToggleBtn";

// const NavbarDesktop = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY < lastScrollY) {
//       setShowNavbar(true);
//     } else {
//       setShowNavbar(false);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
//       <div className="toggle-btn">
//         <ToggleBtn />
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//         <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//         <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//       </div>
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li>
//           <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Project" className={({ isActive }) => (isActive ? "active" : "")}>
//             Project
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavbarDesktop;



