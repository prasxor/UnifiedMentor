import React from 'react'
import './SkillTag.css'

const SkillTag = ({icon, Text, link, onClick}) => {
  return (
    <div className="skillTagContainer " onClick={onClick}>
        <div className="SkillTagLeftIcon">
            <img src={icon} alt={icon} />
        </div>
        <div className="SkillTagRightText">
            <p><a target='_blank' href={link}>{Text}</a></p>
        </div>
    </div>
  )
}

export default SkillTag