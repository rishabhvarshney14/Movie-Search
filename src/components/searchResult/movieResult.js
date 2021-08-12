import React from "react";
import { getURL } from "../../API/URLs";

// Custom Component
import MovieItem from "./movieItem";

// Styles
import styles from "./styles/movieResults.module.css";

// MovieResult Component
const MovieResult = ({ list }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Search Results</h1>
      {list.map((item) => (
        <MovieItem
          title={item.title}
          image={getURL.imageURL(item.poster_path)}
        />
      ))}
    </div>
  );
};

export default MovieResult;
