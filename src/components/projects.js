import React from "react";
import styles from "./styles/project.module.css";

export default function Project() {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.projectContent}>
        <div className={styles.projectTitle}>MY PROJECTS</div>
        <div className={styles.projectGrid}>
          <ProjectLink
            link="https://github.com/nidhitrivedi09/Human-Emotion-Detection"
            text="Human Emotion Detection Using Facial Expression"
          />
          <ProjectLink
            link="https://github.com/nidhitrivedi09/Student-ID-Card"
            text="Student ID-Card Website"
          />
          <ProjectLink
            link="https://github.com/nidhitrivedi09/Text-Editor"
            text="Text Editor"
          />
          <ProjectLink
            link="/Audible-BookReportFile.pdf"
            text="Text-Speech Converter"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectLink(props) {
  return (
    <div className={styles.myProjects}>
      <a href={props.link}>
        <p>{props.text}</p>
      </a>
    </div>
  );
}
