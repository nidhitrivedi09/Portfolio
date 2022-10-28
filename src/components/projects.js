import React from "react";
import styles from "./styles/project.module.css";

export default function Project() {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.projectContent}>
        <div className={styles.projectTitle}>MY PROJECTS</div>
        <div className={styles.projectGrid}>
          <ProjectLink
            link="https://github.com/nidhitrivedi09/IntelligentSearch"
            text="Intelligent Search : AI Based Web Application"
          />
          <ProjectLink
            link="https://github.com/nidhitrivedi09/Card_Scanner"
            text="Card Scanner (Cloud Computing - AWS)"
          />
          <ProjectLink
            link=""
            text="Sentiment Analysis - Natural Language Processing"
          />
          <ProjectLink
            link="https://tickr-ims.herokuapp.com/home"
            text="Tickr : An Incident Management Application"
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
