import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { IoMdCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);  
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      Portfolio
      </a>
      <div className={styles.menu}>
        <button
        className={styles.menuBtn}
        onClick={toggleMenu}
        aria-label="ToggleMenu"
        >
          {isMenuVisible ? <IoMdCloseCircle /> : <RxHamburgerMenu/>}
          </button>
        <ul className={`${styles.menuItems} ${isMenuVisible ? styles.show : ""}`} onClick= {() => setMenuVisible(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};