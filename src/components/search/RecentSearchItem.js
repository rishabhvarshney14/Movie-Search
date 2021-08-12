import React from "react";

// Icons
import reloadIcon from "../../images/icons/reload-icon.png";

// Styles
import styles from "./styles/recentSearchItem.module.css";

// RecentSearchItem Component
const RecentSearchItem = ({ name }) => {
  return (
    <div className={styles.container}>
      <span className={styles.searchItem}>
        <img className={styles.imageIcon} src={reloadIcon} alt="reload-icon" />
        {name}
      </span>
    </div>
  );
};

export default RecentSearchItem;
