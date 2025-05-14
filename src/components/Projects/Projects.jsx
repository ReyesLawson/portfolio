import React, { useState } from "react";
import projects from "../data/projects.json";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <>
      <section className={styles.banner} id="projects">
        <div className={styles.protitle}>My Projects</div>
        <div className={styles.topLtBlur}></div>
        <div className={styles.btmRtBlur}></div>
        <div className={styles.slider}>
          {projects.map((project, index) => {
            const quantity = projects.length;
            const position = index + 1;

            return (
              <div
                key={index}
                className={styles.project}
                style={{
                  "--position": position,
                  "--quantity": quantity,
                }}>
                <div className={styles.projectImageContainer}>
                  <a
                    href="https://github.com/ReyesLawson?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={getImageUrl(project.imageSrc)}
                      alt={project.title}
                      className={styles.projectImage}
                    />
                  </a>
                </div>

                <p>{project.title}</p>
              </div>
            );
          })}
        </div>
      </section>
      <div></div>
    </>
  );
};
