import React from "react";
import "../assets/css/about-me.css";
import profilePhoto from "../assets/images/photo.png";
import SkillsGridCol from "./SkillsGridCol";
import Skill from "./Skill";
import { languages, frameworks, otherTech } from "../assets/data";

const About = () => {
  return (
    <div class="portfolio-section" id="about-me-section">
      <div class="flex content-center">
        <h2 class="section-header">About Me</h2>
      </div>
      <section id="about-me">
        {/* <!-- Profile picutre --> */}
        <figure id="profile-photo">
          <img src={profilePhoto} alt="Profile picture" />
        </figure>
        {/* <!-- Bio --> */}
        <div id="about-me-text-container">
          <p>
            I am a full stack web developer based in Adelaide, South Australia, with a passion for
            creating software that improves the lives of others.
          </p>
          <p>
            For the past 10 years, I have been working as a police officer for the South Australia
            Police. I am currently Supervising Senior Prosecutor, who leads a team of police
            officers and solicitors, responsible for prosecuting offences on behalf of the State in
            the Magistrates Court.
          </p>
          <p>
            I am undertaking a full stack web development boot camp through The University of
            Adelaide, completing in early June 2023, with a view to transition to a career in web
            development later this year.
          </p>
          <p>
            I am particularly interested in creating software that enables people to spend less time
            doing the things they have to do, to allow them to do more of the things they want to
            do.
          </p>

          {/* <!-- Skill set --> */}
          <p id="skills-header">I am experienced in the following:</p>
          <div className="skills-grid">
            <SkillsGridCol headingText={"Languages"}>
              {languages.map((skill, index) => (
                <Skill skillName={skill.skillName} imageUrl={skill.imageUrl} key={index} />
              ))}
            </SkillsGridCol>
            <SkillsGridCol headingText={"Frameworks"}>
              {frameworks.map((skill, index) => (
                <Skill skillName={skill.skillName} imageUrl={skill.imageUrl} key={index} />
              ))}
            </SkillsGridCol>
            <SkillsGridCol headingText={"Other Technologies"}>
              {otherTech.map((skill, index) => (
                <Skill skillName={skill.skillName} imageUrl={skill.imageUrl} key={index} />
              ))}
            </SkillsGridCol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
