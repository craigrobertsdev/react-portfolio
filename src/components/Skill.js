import React from "react";
import blazorImage from "../assets/images/blazor.svg";

const Skill = ({ technology }) => {
  return (
    <li>
      <img
        src={technology.name === "ASP.NET Blazor" ? blazorImage : technology.imageUrl}
        title={technology.name}
        alt={`${technology.name} icon`}
        className={technology.name === "Express.js" ? "express" : ""}
      />
    </li>
  );
};

export default Skill;
