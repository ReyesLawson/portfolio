
import React from "react";
import ProfilePic from "/assets/Images/ProfilePic.png"; 
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hello! I'm Reyes!</h1>
        <p className={styles.description}>
          I'm a full-stack developer, proficient in React, CSS, and JS. 
          If you would like to learn more, my contact info is below.    
        </p>
        <a href="mailto:ReyesLawson89@gmail.com" className={styles.contactBtn}>Contact Me!</a>
      </div>
      <img src={ProfilePic} alt="heroImageOfMe" className={styles.heroImg}/>
      <div className={styles.topLtBlur}></div>
      <div className={styles.btmRtBlur}></div>
    </section>
  );
};


