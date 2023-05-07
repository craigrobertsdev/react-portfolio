import React from "react";

const Project = ({ project, left }) => {
  const image = require(`../assets/images/${project.name.toLowerCase()}.jpg`);
  const imageSm = require(`../assets/images/${project.name.toLowerCase()}-sm.jpg`);
  return (
    <div className={`project-container ${left ? "project-even" : "project-odd"}`}>
      <h3 className="project-header">{project.name}</h3>
      <div className="project-card">
        <img
          src={image}
          alt="Mechanomicon - manage your service bookings and vehicle logbooks in one place"
          className="project-image project-image-lg"
        />
        <img
          src={imageSm}
          className="project-image project-image-sm"
          alt="Mechanomicon - manage your service bookings and vehicle logbooks in one place"
        />
        <div className="project-description">
          <p>{project.description}</p>
        </div>
        <ul className="technologies flex content-center gap-2">
          {project.technologies.map((technology, index) => (
            <li key={index}>
              <img
                className={`${
                  technology.name === "Express.js" || technology.name === "Handlebars"
                    ? "express"
                    : ""
                }`}
                src={technology.imageUrl}
                alt={`${technology.name} icon`}
                title={technology.name}
              />
            </li>
          ))}
        </ul>
        <ul className="project-access flex content-center gap-2 button-row">
          <li>
            <a href={project.github} className="button" rel="noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          {project.deployed && (
            <li>
              <a href={project.deployed} className="button" rel="noreferrer" target="_blank">
                Deployed App
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Project;
