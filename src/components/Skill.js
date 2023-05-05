import React from "react";
import blazorImage from "../assets/images/blazor.svg";

const Skill = ({ skillName, imageUrl }) => {
  return (
    <li>
      <img
        src={skillName === "ASP.NET Blazor" ? blazorImage : imageUrl}
        title={skillName}
        alt={`${skillName} icon`}
        className={skillName === "Express.js" ? "express" : ""}
      />
    </li>
  );
};

export default Skill;
