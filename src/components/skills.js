import React from "react";
import styles from "./styles/skills.module.css";
import skillsgirl from "../assets/skillsGirl.svg";
import Python from "../assets/python.svg";
const mySkills = [
  { text: "HTML", per: 80 },
  { text: "CSS", per: 75 },
  { text: "JAVASCRIPT", per: 60 },
  { text: "PHP", per: 55 },
  { text: "PYTHON", per: 70 },
  { text: "JAVA", per: 75 },
  { text: "REACTJS", per: 50 },
  { text: "C/C++", per: 95 },
  { text: "ADOBE XD", per: 90 },
];
export default function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h3 className={styles.title}>READ ABOUT MY SKILLS!</h3>
        <p className={styles.description}>
          I am curious about anything around me, asking questions and
          comprehending concepts is one of the most enjoyable thing I do. I love
          to be on situations which challenge my assumptions and push me to
          redefine myself.
        </p>
      </div>
      <div className={styles.skillsContent}>
        <div className={styles.girl}>
          <img src={skillsgirl} />
        </div>
        <div className={styles.mapSkills}>
          {mySkills.map((s, i) => {
            return <Skill text={s.text} per={s.per} key={i}></Skill>;
          })}
        </div>
      </div>
      <div className={styles.python}>
        <img src={Python} alt="python" />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className={styles.skillsName}>
      <p className={styles.skillsTitle}>{props.text}</p>
      <div className={styles.emptyBar}>
        <div
          className={styles.filledBar}
          style={{ width: `${props.per}%` }}
        ></div>
      </div>
    </div>
  );
}
