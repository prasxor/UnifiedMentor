import React from "react";
import "./FooterDesktop.css";
import byeicon from "../../../assets/HomePage/byeimg.svg";
import LogoDesktop from "../../../assets/PersonalData/image.png";
import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg";
import githubicon from "../../../assets/HomePage/github.svg";
import instagramicon from "../../../assets/HomePage/instagram.svg";
import linkedinicon from "../../../assets/HomePage/linkedin.svg";
import threadsicon from "../../../assets/HomePage/threads.svg";
import xicon from "../../../assets/HomePage/xTwitter.svg";
import yticon from "../../../assets/HomePage/youtube.svg";
import ToggleBtn from "../../Atoms/ToggleBtn/ToggleBtn";

const FooterDesktop = () => {
  const socailLinks = [
    {
      icon: githubicon,
      link: "https://github.com/prasxor",
    },
    {
      icon: instagramicon,
      link: "https://www.instagram.com/pras_kumar_sinha/",
    },
    {
      icon: linkedinicon,
      link: "https://www.linkedin.com/in/prasxor",
    },
    {
      icon: threadsicon,
      link: "https://www.threads.net/@pras_kumar_sinha",
    },
    {
      icon: xicon,
      link: "https://x.com/prasxorkumar",
    },
    {
      icon: yticon,
      link: "https://www.youtube.com/@prasxorkumar",
    },
  ];

  return (
    <div className="FooterDesktop">
      <div className="footerDesktopupper">
        <img className="waving-hand" src={byeicon} alt={byeicon} />
        <h2>Thanks for checking my website</h2>
        <p>prasxor@gmail.com</p>
      </div>
      <div className="footerDesktoplower">
        <div className="footerdesktoplowerleft">
          <img src={LogoDesktop} alt="logo" />
        </div>
        <div className="footerdesktoplowermiddle">
          <ul>
            {socailLinks.map((social, index) => (
              <li key={index}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img className="footericon" src={social.icon} alt={`Social ${index + 1}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footerdesktoplowerright">
          <ToggleBtn/>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
