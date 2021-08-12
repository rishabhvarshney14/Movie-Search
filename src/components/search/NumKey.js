import React from "react";
import { Link } from "react-router-dom";
import { getURLfriendlyQuery } from "../../API/URLs";

// Custom Component
import KeyButton from "./KeyButton";

// Icons
import clearIcon from "../../images/icons/clear-icon.png";

// Styles
import styles from "./styles/numKey.module.css";

// NumKey Component (Renders the keyboard with numerical values)
const NumKey = ({ value, setValue, setIsAlpha }) => {
  // Add value to the search bar
  const clickHandle = (keyValue) => {
    const newValue = value + keyValue;
    setValue(newValue);
  };

  // Clear the search bar
  const clearHandle = () => {
    setValue("");
  };

  // Remove the last value in search bar
  const clearOneHandle = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };

  return (
    <div>
      <div className={styles.row}>
        <KeyButton onClick={() => clickHandle("1")} value="1" />
        <KeyButton onClick={() => clickHandle("2")} value="2" />
        <KeyButton onClick={() => clickHandle("3")} value="3" />
        <KeyButton onClick={() => clickHandle("&")} value="&" />
        <KeyButton onClick={() => clickHandle("#")} value="#" />
        <KeyButton onClick={() => clickHandle("(")} value="(" />
        <KeyButton onClick={() => clickHandle("(")} value=")" />
        <KeyButton
          onClick={clearOneHandle}
          special
          value={
            <img className={styles.keyImage} src={clearIcon} alt="clear-icon" />
          }
        />
      </div>
      <div className={styles.row}>
        <KeyButton onClick={() => clickHandle("4")} value="4" />
        <KeyButton onClick={() => clickHandle("5")} value="5" />
        <KeyButton onClick={() => clickHandle("6")} value="6" />
        <KeyButton onClick={() => clickHandle("@")} value="@" />
        <KeyButton onClick={() => clickHandle("!")} value="!" />
        <KeyButton onClick={() => clickHandle("?")} value="?" />
        <KeyButton onClick={() => clickHandle(":")} value=":" />
        <KeyButton onClick={() => setIsAlpha(true)} value="ABC" special />
      </div>

      <div className={styles.row}>
        <KeyButton onClick={() => clickHandle("7")} value="7" />
        <KeyButton onClick={() => clickHandle("8")} value="8" />
        <KeyButton onClick={() => clickHandle("9")} value="9" />
        <KeyButton onClick={() => clickHandle("0")} value="0" />
        <KeyButton onClick={() => clickHandle(".")} value="." />
        <KeyButton onClick={() => clickHandle("_")} value="_" />
        <KeyButton onClick={() => clickHandle('"')} value='"' />
      </div>

      <div className={styles.row}>
        <span className={styles.spaceClear}>
          <button onClick={() => clickHandle(" ")}>SPACE</button>
        </span>
        <span className={styles.spaceClear}>
          <button onClick={clearHandle}>CLEAR</button>
        </span>
        <Link to={`search/${getURLfriendlyQuery(value)}`}>
          <span className={styles.searchBtn}>
            <button>SEARCH</button>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NumKey;
