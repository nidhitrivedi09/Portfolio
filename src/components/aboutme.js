import React from "react";
import styles from "./styles/about.module.css";
import triangle from "../assets/Polygon.svg";
import mypic from "../assets/mypic.svg";
import Code from "../assets/code.svg";
import Resume from "../assets/Resume.pdf";


export default function AboutMe() {
  return (
    <div id="aboutme" className={styles.container}>
      <div className={styles.profile}>
        <p className={styles.hello}>Hello I'am</p>
        <img src={triangle} alt="triangle" />
        <p className={styles.name}>Ms.Nidhi Trivedi</p>
        <p>Software Development|NodeJs|Python|Machine Learning</p>
       {/* <button className={styles.cvButton}>Download CV</button> */}
       {/* <a className={styles.cvButton} target="_blank" href={Resume}>Download Resume</a> */}
 
       <a href= {Resume}>
        <button className={styles.cvButton} target="_blank">
            Download Resume
        </button>
 
    </a>

      </div>
      <div className={styles.profilepic}>
        <img src={mypic} alt="myprofilepic" />
      </div>
      <img src={Code} alt="Code" className={styles.code} />
    </div>
  );
}
