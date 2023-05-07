import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import background from "./assets/images/background-image.jpg";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import githubIcon from "./assets/images/github.svg";
import stackOverflowIcon from "./assets/images/stack-overflow.svg";

const App = () => {
  return (
    <div id="app">
      <img src={background} id="background-image" alt="Dark wavy lines" />
      <header>
        {/* <!-- Header and title --> */}
        <h1 className="flex items-center content-center">Craig Roberts</h1>
        <h2 className="flex items-center content-center">Full Stack Web Developer</h2>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer>
        <div className="portfolio-section">
          <ul className="flex">
            <li>
              <div className="image-container">
                <a href="https://github.com/craigrobertsdev" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Icon" />
                </a>
              </div>
            </li>
            <li>
              <div className="image-container">
                <a
                  href="https://www.linkedin.com/in/craig-roberts-9ba409243/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn Icon"
                  />
                </a>
              </div>
            </li>
            <li>
              <div className="image-container">
                <a
                  href="https://stackoverflow.com/users/19259279/cr-dev"
                  target="_blank"
                  rel="noreferrer">
                  <img src={stackOverflowIcon} alt="Stack Overflow Icon" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
