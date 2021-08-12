import React from "react";

// Styles
import styles from "./styles/movieItem.module.css";

// MovieItem Component
const MovieItem = ({ image, title }) => {
  console.log(image);
  return (
    <div className={styles.container}>
      <a className={styles.itemLink} href="/">
        <img className={styles.itemImage} src={image} alt="movie-banner" />
        <p className={styles.itemTitle}>{title}</p>
      </a>
    </div>
  );
};

export default MovieItem;
