import React from "react";
import coffee from "/assets/Images/coffee.png";
import frontIcon from "/assets/Images/frontIcon.png";
import backendIcon from "/assets/Images/backendIcon.png";
import cursorIcon from "/assets/Images/cursorIcon.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> About Me!</h2>
      <div className={styles.content}>
        <img src={coffee} alt="coffeeAboutMe" className={styles.coffee} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={frontIcon}
              alt="frontendicon"
              className={styles.frontIcon}
            />
            <div className={styles.aboutItemText}>
              <h3> Frontend developer </h3>
              <p>
                I am a frontend developer with hands-on experience gained
                through the Quickstart bootcamp and personal projects, where
                I've built and optimized reactive websites for a seamless user
                experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={backendIcon}
              alt="backicon"
              className={styles.backendIcon}
            />
            <div className={styles.aboutItemText}>
              <h3> Backend Developer </h3>
              <p>
                
                I have experience developing high-performance, optimized backend
                systems and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={cursorIcon}
              alt="cursoricon"
              className={styles.cursorIcon}
            />
            <div className={styles.aboutItemText}>
              <h3> UI / UX designer </h3>
              <p>
                I have designed multiple pages, focusing on the overall
                aesthetic of apps and websites. This includes selecting color
                schemes, typography, icons, and buttons. My design process
                prioritizes the user experience UX ensuring interfaces are
                both visually appealing and functional, with an emphasis on ease
                of navigation and user-centric design.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
