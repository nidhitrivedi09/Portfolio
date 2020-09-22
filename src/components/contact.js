import React from "react";
import styles from "./styles/contact.module.css";
import mailIcon from "../assets/mailicon.svg";
import Insta from "../assets/insta.svg";
import Facebook from "../assets/facebook.svg";
import Github from "../assets/github-image.svg";
import LinkedIn from "../assets/linkedin.svg";
import Behance from "../assets/behance.svg";
import Pinterest from "../assets/pinterest.svg";

export default function ContactMe() {
  return (
    <div id="contactme" className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.contactMe}>CONTACT ME</h3>
        <p className={styles.contactMeText}>
          Let's make something new, different and more meaningful or make thing
          more visual or conceptual?
        </p>
        <a href="mailto:tnidhi518@gmail.com" className={styles.mailmeButton}>
          <img src={mailIcon} alt="mail-icon" />
          Mail Me
        </a>
      </div>
      <div className={styles.socialContainer}>
        <a
          href="https://instagram.com/nidhitrivedi_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Insta} alt="Insta" />
        </a>

        <a
          className={styles.fb}
          href="https://facebook.com/nidhitrivedi09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>

        <a
          href="https://linkedin.com/in/nidhi-trivedi09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/nidhitrivedi09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="Github" />
        </a>

        <a
          href="https://behance.net/nidhitrivedi09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Behance} alt="Behance" />
        </a>

        <a
          href="https://in.pinterest.com/tnidhi518"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Pinterest} alt="Pinterest" />
        </a>
      </div>
    </div>
  );
}
