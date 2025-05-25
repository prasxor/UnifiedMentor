import React, { useState, useEffect } from "react";
import NavbarDesktop from "../Navbar-desktop/NavbarDesktop";
import NavbarMobile from "../../Atoms/Hamburger/NavbarMobile";

const NavbarMain = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default NavbarMain;
