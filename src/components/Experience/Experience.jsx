import React from "react";
import htmlIcon from "/assets/Images/htmlIcon.svg";
import cssIcon from "/assets/Images/cssIcon.svg";
import nodejsIcon from "/assets/Images/nodejsIcon.svg";
import reactIcon from "/assets/Images/reactIcon.svg";
import styles from "./Experience.module.css";
import skills from "../data/skills.json";
import history from "../data/history.json";

import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p> {`${historyItem.startDate}, - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div>
        <ul className={styles.container}>
          <li className={styles.icons}>
            <img
              src={htmlIcon}
              alt="HTML5_Icon"
              className={styles.htmlIcon}
            />
            <img
              src={nodejsIcon}
              alt="Node.js_Icon"
              className={styles.nodejsIcon}
            />
            <img
              src={cssIcon}
              alt="CSS_Icon"
              className={styles.cssIcon}
            />
            <img
              src={reactIcon}
              alt="React_Icon"
              className={styles.reactIcon}
            />
            <img
              src={sqlIcon}
              alt="sql_Icon"
              className={styles.reactIcon}
            />
          </li>
        </ul>
      </div> */}
    </section>
  );
};
