import React from "react";
import styles from "./Unrelated.module.css";
import rad from "/assets/Images/rad.png";
export const Unrelated = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> Unrelated Work Experience </h2>
      <div className={styles.content}>
          <img src={rad} alt="radiation" className={styles.rad} />
        <div className={styles.aboutItemText}>
            <h3> Computed Tomography Technologist</h3>
          <p className={styles.unrelatedItem}>
        
            I have over 12 years working experince in healthcare. I have a
            bachelor's degree in Science with a concentration in Radiography. I
            currently hold accreditations in x-ray and Computed Tomography. The job responisiblities are but not limited to as followed.
            </p>
            <ul className={styles.descriptions}>
              <li className={ styles.description}>
                Operate advanced CT imaging equipment to produce high-quality
                diagnostic images for physicians and medical professionals.
                </li>
                <li className={ styles.description}>
                Perform diagnostic imaging procedures, including brain, chest,
                abdominal, and musculoskeletal scans, ensuring accurate and
                clear results.
                </li>
                <li className={ styles.description}>
                Collaborate with physicians to prepare imaging plans based on
                patient conditions and clinical needs.
                </li>
                <li className={ styles.description}>
                Provide excellent patient care, explaining procedures to
                patients, ensuring comfort, and alleviating any concerns before,
                during, and after scans.
                </li>
                <li className={ styles.description}>
                Maintain strict adherence to radiation safety protocols and
                standards to minimize exposure to patients and staff.
                </li>
                <li className={ styles.description}>
                Review images for quality and completeness, ensuring they meet
                the required diagnostic standards.
                </li>
                <li className={ styles.description}>
                Document patient information, exam details, and any relevant
                observations in accordance with hospital policies and HIPAA
                regulations.
                </li>
                <li className={ styles.description}>
                Stay current with advancements in CT technology and imaging
                techniques, ensuring optimal patient care and operational
                efficiency.
                </li>
                <li className={ styles.description}>
                Train and mentor new staff and students on CT imaging techniques
                and protocols.
              </li>
            </ul>
          
        </div>
      </div>
    </section>
  );
};
