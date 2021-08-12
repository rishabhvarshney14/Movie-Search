import React from "react";

// Custom Component
import RecentSearchItem from "./RecentSearchItem";
import Keyboard from "./Keyboard";

// Styles
import styles from "./styles/recentSearch.module.css";

// RecentSeach Component
const RecentSearch = ({ value, setValue }) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchResult}>
        <p className={styles.heading}>Recent search items</p>

        <RecentSearchItem name="Jathi Ratnalu Movie" />
        <RecentSearchItem name="Kids English Telugu Dubbed Movies" />
        <RecentSearchItem name="3D Animation Movies" />
        <RecentSearchItem name="Action Movies in Telugu 2020" />
      </div>

      <Keyboard value={value} setValue={setValue} />
    </div>
  );
};

export default RecentSearch;
