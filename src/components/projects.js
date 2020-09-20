import React from "react";
import styles from "./styles/project.module.css";

export default function Project() {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.projectContent}>
        <div className={styles.projectTitle}>MY PROJECTS</div>
        <div className={styles.projectGrid}>
          <ProjectLink
            link="/"
            text="Human Emotion Detection Using Facial Expression"
          />
          <ProjectLink link="/" text="Student ID-Card Website" />
          <ProjectLink link="/" text="Text Editor" />
          <ProjectLink link="/" text="Text-Speech Converter" />
          <ProjectLink
            link="/"
            text="Human Emotion Detection Using Facial Expression"
          />
          <ProjectLink link="/" text="Student ID-Card Website" />
          <ProjectLink link="/" text="Text Editor" />
          <ProjectLink link="/" text="Text-Speech Converter" />
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
