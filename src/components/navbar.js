import React from "react";
import styles from "./styles/navbar.module.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <div className={styles.links}>
        <a href="#aboutme">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="/NidhiResume.pdf">Resume</a>
        <a href="#contactme">Contact</a>
      </div>
    </div>
  );
}
