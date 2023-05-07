import React from "react";
import Project from "../Project";
import { projects } from "../../utils/data";
import "../../assets/css/Projects.css";

const Projects = () => {
  return (
    <div className="portfolio-section" id="projects-section">
      <div className="flex content-center">
        <h2 className="section-header">Projects</h2>
      </div>
      <section id="projects" className="section flex column">
        {projects.map((project, index) => (
          <Project
            project={project}
            key={index}
            left={index % 2 === 0 ? true : false} // this is used to determine whether the project image appears on the left or right for a staggered effect
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
