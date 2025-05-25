import React from "react";
import ProfileImg from "../../../assets/HomePage/ProfileImg.png";
import SkillTag from "../SkillTag/SkillTag";
// skill svg import 
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
import quoteIcon from "../../../assets/HomePage/quoteIcon.svg";
import linkIcon from "../../../assets/HomePage/linkIcon.svg"
import pdf from "../../../assets/PersonalData/OnlineResume.pdf"

const SkillsData = [
  { id: 1, icon: htmlIcon, text: "HTML" },
  { id: 2, icon: cssIcon, text: "CSS" },
  { id: 3, icon: jsIcon, text: "JAVASCRIPT" },
  { id: 4, icon: reactIcon, text: "REACT" },
  { id: 5, icon: bootstrapIcon, text: "BOOTSTRAP" },
  { id: 6, icon: figmaIcon, text: "FIGMA" },
  { id: 7, icon: githubIcon, text: "GITHUB" },
  { id: 8, icon: pythonIcon, text: "PYTHON" },
  { id: 9, icon: photoshopIcon, text: "PHOTOSHOP" },
  { id: 10, icon: premiereProIcon, text: "PREMIERE PRO" },
];
const AboutProfile = () => {

  const openPDF = () => {
    if (pdf) {
      window.open(pdf, "_blank");
    } else {
      console.error("PDF file not found!");
    }
  };
  


  return (
    <div className="HomePage1Container HomePage1Container1 container">
      <div className="HomePage1Left HomePage1Left1">
        <div className="HomePage1Title HomePage1Title1">
          <h1>Prashant Kumar Sinha</h1>
        </div>
        <div className="HomePage1Username HomePage1Username1">
          <p>@Prasxor</p>
        </div>
        <div className="HomePage1Bio HomePage1Bio1">
          <p>
          I am a self-driven, career-oriented software engineer specializing in front-end development and open-source, currently pursuing a bachelors degree in computer science. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, TypeScript and Python.
          </p>
          <p>I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.</p>
        </div>
        <div className="AboutProfileContainer AboutProfileContainer1">
            <img src={quoteIcon} alt={quoteIcon} />
            <p>The best time to plant a tree was 20 years ago. The second best time is right now.</p>
        </div>
      </div>
      <div className="HomePage1Right">
        <div className="ProfileImgContainer profileImgContainer1">
          <img className="ProfileImg" src={ProfileImg} alt={ProfileImg} />
        </div>
          <SkillTag icon={linkIcon} Text={"My CV"} onClick={openPDF}/>
      </div>
    </div>
  );
};

export default AboutProfile;
