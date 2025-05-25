
import React, { useState } from "react";
import "./ToggleExpandCard.css";
import plus from "../../../assets/HomePage/Plus.svg";

const ToggleExpandCard = ({questions, answers}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const OnClickHandle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ToggleExpandCardContainer">
      <div className="ToggleExpandCardUpper" onClick={OnClickHandle}>
        <div className="ToggleExpandCardLeft">
          <p>{questions}</p>
        </div>
        <div className="ToggleExpandCardRight">
          <img
            src={plus}
            alt="toggle icon"
            className={isExpanded ? "rotated" : ""}
          />
        </div>
      </div>
      <div className={`ToggleExpandCardLower ${isExpanded ? "open" : ""}`}>
        <p>
          {answers}
        </p>
      </div>
    </div>
  );
};

export default ToggleExpandCard;

