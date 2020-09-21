import React from "react";
import styles from "./styles/about.module.css";
import triangle from "../assets/Polygon.svg";
import mypic from "../assets/mypic.svg";
import Code from "../assets/code.svg";

export default function AboutMe() {
  return (
    <div id="aboutme" className={styles.container}>
      <div className={styles.profile}>
        <p className={styles.hello}>Hello I'am</p>
        <img src={triangle} />
        <p className={styles.name}>Ms.Nidhi Trivedi</p>
        <p>Passionate about Web Development and UI/UX Designer</p>
        <button className={styles.cvButton}>Download CV</button>
      </div>
      <div className={styles.profilepic}>
        <img src={mypic} />
      </div>
      <img src={Code} alt="Code" className={styles.code} />
    </div>
  );
}
