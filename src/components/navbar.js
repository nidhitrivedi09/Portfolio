import React from "react";
import styles from "./styles/navbar.module.css";
import logo from "../assets/logo.svg";
import Resume from "../assets/Resume.pdf";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.links}>
        <a href="#aboutme">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a className={styles.cvButton} target="_blank" href={Resume}>Resume</a>
        <a href="#contactme">Contact</a>
      </div>
    </div>
  );
}
