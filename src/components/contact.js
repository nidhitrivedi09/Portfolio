import React from "react";
import styles from "./styles/contact.module.css";
import mailIcon from "../assets/mailicon.svg";
import Insta from "../assets/insta.svg";
import Facebook from "../assets/facebook.svg";
import Github from "../assets/github-image.svg";
import LinkedIn from "../assets/linkedin.svg";

export default function ContactMe() {
  return (
    <div id="contactme" className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.contactMe}>CONTACT ME</h3>
        <p className={styles.contactMeText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          nesciunt exercitationem dolorum qui rerum corporis cupiditate iusto.
          Provident quae rem rerum expedita illum harum praesentium. Aperiam
          reprehenderit quae cum facilis.
        </p>
        <a href="mailto:tnidhi518@gmail.com" className={styles.mailmeButton}>
          <img src={mailIcon} alt="mail-icon" />
          Mail Me
        </a>
      </div>
      <div className={styles.socialContainer}>
        <a
          href="https://instagram.com/nidhineel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Insta} alt="Insta" />
        </a>

        <a href="https://.com" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook" />
        </a>

        <a href="https://.com" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={LinkedIn} alt="LinkedIn" />
        </a>

        <a href="https://.com" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github" />
        </a>
      </div>
    </div>
  );
}
