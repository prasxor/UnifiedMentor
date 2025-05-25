

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Page/Home/Home";
import FooterDesktop from "./components/Utils/FooterDesktop/FooterDesktop";
import Projects from "./Page/Projects/Projects";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import NavbarMain from "./components/Utils/NavbarMain/NavbarMain";
import Intro from "./components/Atoms/Intro/Intro";
import { Helmet } from "react-helmet-async";
import Error from "./Page/Error/Error";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowIntro(false); // Dusre pages pe direct render ho
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Prasxor Portfolio - Expert Web Developer for Hire</title>
        <meta
          name="description"
          content="I am a passionate frontend developer specializing in React, JavaScript, and UI/UX design. Check out my projects!"
        />
        <meta
          name="keywords"
          content="Prasxor, Prashant kumar sinha, web developer portfolio, hire react developer, javascript developer, UI/UX design, freelance web developer, website, ecommerce website,React Developer, Frontend Developer, JavaScript, Portfolio, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Prashant kumar sinha (Prasxor)" />
        <meta
          property="og:title"
          content="Prasxor Portfolio - Web Development Excellence"
        />
        <meta
          property="og:description"
          content="Explore Prashant's (Prasxor) portfolio of cutting-edge web projects. Hire a skilled developer for your next big idea!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prasxor.me" />
        <meta
          property="og:image"
          content="https://prasxor.me/images/profile-preview.jpg"
        />
      </Helmet>

      <Router>
        <div className="container">
          {/* Sirf Home page pe Intro dikhana hai */}
          {showIntro && window.location.pathname === "/" ? <Intro /> : null}

          {/* Baaki pages direct render honge */}
          {!showIntro && (
            <>
              <NavbarMain />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Project" element={<Projects />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
              </Routes>
              <FooterDesktop />
            </>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
