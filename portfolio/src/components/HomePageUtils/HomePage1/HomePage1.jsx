import React from "react";
import "./HomePage1.css";
import SkillTag from "../../Atoms/SkillTag/SkillTag";
import ProfileImg from "../../../assets/HomePage/ProfileImg.png";
import htmlIcon from "../../../assets/HomePage/SkillIcon/html.svg";
import cssIcon from "../../../assets/HomePage/SkillIcon/css.svg";
import jsIcon from "../../../assets/HomePage/SkillIcon/javascript.svg";
import bootstrapIcon from "../../../assets/HomePage/SkillIcon/bootstrap.svg";
import reactIcon from "../../../assets/HomePage/SkillIcon/react.svg";
import figmaIcon from "../../../assets/HomePage/SkillIcon/figma.svg";
import githubIcon from "../../../assets/HomePage/SkillIcon/Github.svg";
import pythonIcon from "../../../assets/HomePage/SkillIcon/python.svg";
import photoshopIcon from "../../../assets/HomePage/SkillIcon/photoshop.svg";
import premiereProIcon from "../../../assets/HomePage/SkillIcon/premierePro.svg";



const SkillsData = [
  { id: 1, icon: htmlIcon, text: "HTML", link: "https://html.spec.whatwg.org/" },
  { id: 2, icon: cssIcon, text: "CSS", link: "https://www.w3.org/Style/CSS/" },
  { id: 3, icon: jsIcon, text: "JAVASCRIPT", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 4, icon: reactIcon, text: "REACT", link: "https://react.dev/" },
  { id: 5, icon: bootstrapIcon, text: "BOOTSTRAP", link: "https://getbootstrap.com/" },
  { id: 6, icon: figmaIcon, text: "FIGMA", link: "https://www.figma.com/" },
  { id: 7, icon: githubIcon, text: "GITHUB", link: "https://github.com/" },
  { id: 8, icon: pythonIcon, text: "PYTHON", link: "https://www.python.org/" },
  { id: 9, icon: photoshopIcon, text: "PHOTOSHOP", link: "https://www.adobe.com/products/photoshop.html" },
  { id: 10, icon: premiereProIcon, text: "PREMIERE PRO", link: "https://www.adobe.com/products/premiere.html" },
];


const HomePage1 = () => {
  return (
    <div className="HomePage1Container container">
      <div className="HomePage1Left">
        <div className="HomePage1Title">
          <h1>Frontend Developer, Video Editor & YouTuber</h1>
        </div>
        <div className="HomePage1Username">
          <p>@Prasxor</p>
        </div>
        <div className="HomePage1Bio">
          <p>
            I'm <span>Prashant Kumar Sinha</span>, a passionate frontend
            developer who thrives on crafting engaging web experiences. Beyond
            code, I bring stories to life as a video editor and push creative
            boundaries as a YouTuber—High energy content.
          </p>
        </div>
        <div className="HomePage1Tags">
          {SkillsData.map((skills) => (
            <SkillTag key={skills.id} icon={skills.icon} Text={skills.text} link={skills.link} />
          ))}
          <SkillTag Text={"..."} />
        </div>
      </div>

      <div className="HomePage1Right">
        <div className="ProfileImgWrapper">
          <img className="ProfileImg" src={ProfileImg} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
