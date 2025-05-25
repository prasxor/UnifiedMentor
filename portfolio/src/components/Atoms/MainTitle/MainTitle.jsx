import React from "react";
import "./MainTitle.css";

const MainTitle = ({content, para}) => {
  return (
    <div className="githubSectionTitle">
      <h2 className="mainTitle">{content}</h2>
      <p className="maintitlePara">{para}</p>
    </div>
  );
};

export default MainTitle;
