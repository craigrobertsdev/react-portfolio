import React from "react";

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
      <p>Front-end proficiencies</p>
      <ul className="resume-skills">
        <li>React</li>
        <li>jQuery</li>
        <li>ASP.Net Blazor</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
      </ul>
      <p>Back-end proficiencies</p>
      <ul className="resume-skills">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>C#</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
      <p>Download a copy of my resume here:</p>
      <button className="button" onClick={handleDownload}>
        Click to download
      </button>
    </div>
  );
};

export default Resume;
