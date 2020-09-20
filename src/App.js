import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";
import directionLogo from "./assets/directionButton.svg";
import dashedLine from "./assets/dashedLine.svg";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <div
        style={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={directionLogo} alt="Scroll" />
      </div>
      <Skills />
      <div
        style={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={dashedLine} alt="Dashed Line" />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
