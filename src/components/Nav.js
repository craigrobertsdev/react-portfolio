import React, { useState, useEffect } from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [current, setCurrent] = useState("");

  // on page load, highlight the appropriate header link. Done this way to ensure correct highlighting when page is refreshed while on a page other than home.
  useEffect(() => {
    const currentSection = window.location.pathname.split("/")[1];
    setCurrent(() => (currentSection === "" ? "about" : currentSection));
  }, []);

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
