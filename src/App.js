import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import background from "./assets/images/background-image.jpg";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <div>
      <img src={background} id="background-image" />
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
    </div>
  );
}

export default App;
