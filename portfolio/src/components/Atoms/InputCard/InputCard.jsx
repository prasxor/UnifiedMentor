
import React from "react";
import "./InputCard.css";

const InputCard = ({ title, value, onChange }) => {
  return (
    <div className="InputCardContainer">
      <div className="InputCardTitle">
        <p>{title}</p>
      </div>
      <div className="InputCardInput">
        <input
          type="text"
          placeholder="Type here"
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default InputCard;
