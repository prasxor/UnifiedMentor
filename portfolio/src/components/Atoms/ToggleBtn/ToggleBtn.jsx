
import { useState, useEffect } from "react";
import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg";
import DarkModeIcon from "../../../assets/Navbar-Img/MoonIcon.svg";
import "./ToggleBtn.css";

const ToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Apply theme when component mounts
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Dispatch a custom event to notify other ToggleBtn components
    window.dispatchEvent(new Event("themeChange"));
  }, [isDarkMode]);

  // Listen for theme changes (when another toggle button is clicked)
  useEffect(() => {
    const syncTheme = () => setIsDarkMode(localStorage.getItem("theme") === "dark");

    window.addEventListener("themeChange", syncTheme);
    return () => window.removeEventListener("themeChange", syncTheme);
  }, []);

  return (
    <div className="ToggleMode" onClick={() => setIsDarkMode(!isDarkMode)}>
      <img
        src={isDarkMode ? LightModeIcon : DarkModeIcon}
        alt="Theme Toggle"
        className="toggle-icon"
      />
    </div>
  );
};

export default ToggleBtn;

