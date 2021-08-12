import React from "react";
import { Link } from "react-router-dom";

// Icons
import arrowBack from "../../images/icons/arrow-back.png";
import closeIcon from "../../images/icons/close-icon.png";

// Styles
import styles from "./styles/topIcons.module.css";

// TopIcons Component
const TopIcons = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.icon}>
          <img className={styles.iconImage} src={arrowBack} alt="back-arrow" />
        </div>
      </Link>
      <Link to="/">
        <div className={styles.icon}>
          <img className={styles.iconImage} src={closeIcon} alt="close-icon" />
        </div>
      </Link>
    </div>
  );
};

export default TopIcons;
