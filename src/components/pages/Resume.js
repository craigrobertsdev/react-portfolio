import React from "react";
import "../../assets/css/Resume.css";

const Resume = () => {
  // Function will execute on click of button
  const handleDownload = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div id="contact" className="portfolio-section section">
      <div className="flex content-center">
        <h2 className="section-header">Projects</h2>
      </div>
      <div id="" className="flex content-center resume-skills">
        <div>
          <p>Front-end proficiencies</p>
          <ul>
            <li>React</li>
            <li>jQuery</li>
            <li>ASP.Net Blazor</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <p>Back-end proficiencies</p>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>C#</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div className="flex content-center column resume-download">
        <p>Download a copy of my resume here:</p>
        <button className="button" onClick={handleDownload}>
          Click to download
        </button>
      </div>
    </div>
  );
};

export default Resume;
