import React, { useState } from "react";

// Custom Components
import SearchBar from "./SearchBar";
import RecentSearch from "./RecentSearch";

// Styles
import styles from "./styles/search.module.css";

// Search Component
const Search = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <SearchBar value={value} setValue={setValue} />
      <RecentSearch value={value} setValue={setValue} />
    </div>
  );
};

export default Search;
