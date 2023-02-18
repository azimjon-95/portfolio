import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils/particles";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Resume from "./containers/resume/Resume";
import Portfolio from "./containers/portfolio/Portfolio";
import Contact from "./containers/contact/Contact";
import Skills from "./containers/skills/Skills";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";

const App = () => {
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();

  const renderPartticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {renderPartticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      <Navbar />

      <div className="App_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
