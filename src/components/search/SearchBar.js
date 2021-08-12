import React, { useState } from "react";
import { getURLfriendlyQuery } from "../../API/URLs";
import { Redirect } from "react-router-dom";

// Icon
import searchIcon from "../../images/icons/search-icon.png";

// Styles
import styles from "./styles/searchBar.module.css";

// SearchBar component
const SearchBar = ({ value, setValue }) => {
  const [isEnter, setIsEnter] = useState(false);

  // Handles the input value function in search bar
  const inputHandle = (event) => {
    setValue(event.target.value);
  };

  // Checks if enter button is pressed or not if it is presset it set 'isEnter' to true
  const enterHandler = (event) => {
    if (event.keyCode === 13) {
      setIsEnter(true);
    }
  };

  return (
    <div className={styles.container}>
      {isEnter ? (
        <Redirect to={`search/${getURLfriendlyQuery(value)}`} />
      ) : null}
      <div className={styles.group}>
        <span className={styles.searchIcon}>
          <img
            className={styles.imageIcon}
            src={searchIcon}
            alt="search-icon"
          />
        </span>
        <input
          type="text"
          className={styles.inputBar}
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
          style={{ float: "right" }}
          value={value}
          onChange={inputHandle}
          onKeyDown={(event) => enterHandler(event)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
