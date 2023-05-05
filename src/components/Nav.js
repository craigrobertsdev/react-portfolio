import React, { useState } from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [current, setCurrent] = useState("about");

  return (
    <nav>
      <Link
        className={`link ${current === "about" ? "selected" : ""}`}
        to="/"
        id="about-me-btn"
        onClick={() => setCurrent("about")}>
        About Me
      </Link>
      <Link
        className={`link ${current === "projects" ? "selected" : ""}`}
        to="/projects"
        id="projects-btn"
        onClick={() => setCurrent("projects")}>
        Projects
      </Link>
      <Link
        className={`link ${current === "contact" ? "selected" : ""}`}
        to="/contact"
        id="contact-btn"
        onClick={() => setCurrent("contact")}>
        Contact
      </Link>
      <Link
        className={`link ${current === "resume" ? "selected" : ""}`}
        to="/resume"
        id="resume-btn"
        onClick={() => setCurrent("resume")}>
        Resume
      </Link>
    </nav>
  );
};

export default Nav;
