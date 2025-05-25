// import React, { useState, useEffect } from "react";
// import "./Intro.css"; // Import styles

// const languages = ["Hello", "Hola", "Bonjour", "नमस्ते", "你好", "こんにちは"];

// const Intro = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % languages.length);
//     }, 300); // Change language every 500ms

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="intro-container">
//       <h1 className="intro-text">{languages[index]}</h1>
//     </div>
//   );
// };

// export default Intro;


// import React, { useState, useEffect } from "react";
// import "./Intro.css"; // Import styles

// const languages = [
//   "Hello", "Hola", "Bonjour", "नमस्ते", "你好", "こんにちは", "Ciao", "안녕하세요", 
//   "Здравствуйте", "مرحبا", "Guten Tag", "Sawubona", "שלום", "हॅलो", "Γειά σας", 
//   "ہیلو", "வணக்கம்", "Xin chào", "Selamat", "Aloha", "Salam", "Sveiki", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", 
//   "Բարեւ", "Dzień dobry", "Mabuhay"
// ];

// const colors = [
//   "#FF5733", "#33FF57", "#5733FF", "#FF33A8", "#33FFF3", "#F3FF33", "#A833FF",
//   "#FF8C33", "#33FF8C", "#8C33FF", "#FF3333", "#33A1FF", "#FF5733", "#FF3366",
//   "#33FFA5", "#FFD633", "#9933FF", "#FF3399", "#33FFC1", "#3399FF", "#FF7733"
// ];

// const Intro = () => {
//   const [index, setIndex] = useState(0);
//   const [bgColor, setBgColor] = useState(colors[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % languages.length);
//       setBgColor(colors[Math.floor(Math.random() * colors.length)]);
//     }, 300); // Change every 500ms

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="intro-container" style={{ backgroundColor: bgColor }}>
//       <h1 className="intro-text">{languages[index]}</h1>
//     </div>
//   );
// };

// export default Intro;


import React, { useState, useEffect } from "react";
import "./Intro.css";

const languages = [
  "Hello", "Hola", "Bonjour", "नमस्ते", "你好", "こんにちは", "Ciao", "안녕하세요",
  "Здравствуйте", "مرحبا", "Guten Tag", "Sawubona", "שלום", "हॅलो", "Γειά σας",
  "ہیلو", "வணக்கம்", "Xin chào", "Selamat", "Aloha", "Salam", "Sveiki", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "Բարեւ", "Dzień dobry", "Mabuhay", "Kia Ora", "Bula", "Kamusta", "Jambo"
];

const Intro = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [exit, setExit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Listen for theme changes from ToggleBtn component
  useEffect(() => {
    const syncTheme = () => setIsDarkMode(localStorage.getItem("theme") === "dark");
    window.addEventListener("themeChange", syncTheme);
    return () => window.removeEventListener("themeChange", syncTheme);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 170);

    setTimeout(() => {
      setExit(true);
      setTimeout(onFinish, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`intro-container ${exit ? "slide-up" : ""}`}
      style={{
        backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#000000",
      }}
    >
      <h1 className="intro-text">{languages[index]}</h1>
    </div>
  );
};

export default Intro;

