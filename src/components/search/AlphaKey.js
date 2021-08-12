import React from "react";

// Custom Component
import KeyButton from "./KeyButton";

// Icons
import clearIcon from "../../images/icons/clear-icon.png";

// Styles
import styles from "./styles/alphaKey.module.css";
import { Link } from "react-router-dom";
import { getURLfriendlyQuery } from "../../API/URLs";

// AlphaKey Component (Renders Keyboard with Alphabets)
const AlphaKey = ({ value, setValue, setIsAlpha }) => {
  // Function to add value in search bar
  const clickHandle = (keyValue) => {
    const newValue = value + keyValue;
    setValue(newValue);
  };

  // Clear the search bar
  const clearHandle = () => {
    setValue("");
  };

  // Clear the last value in search bar
  const clearOneHandle = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };

  return (
    <div>
      <div className={styles.row}>
        <KeyButton onClick={() => clickHandle("A")} value="A" />
        <KeyButton onClick={() => clickHandle("B")} value="B" />
        <KeyButton onClick={() => clickHandle("C")} value="C" />
        <KeyButton onClick={() => clickHandle("D")} value="D" />
        <KeyButton onClick={() => clickHandle("E")} value="E" />
        <KeyButton onClick={() => clickHandle("F")} value="F" />
        <KeyButton onClick={() => clickHandle("G")} value="G" />
        <KeyButton
          onClick={clearOneHandle}
          special
          value={
            <img className={styles.keyImage} src={clearIcon} alt="clear-icon" />
          }
        />
      </div>
      <div className={styles.row}>
        <KeyButton onClick={() => clickHandle("H")} value="H" />
        <KeyButton onClick={() => clickHandle("I")} value="I" />
        <KeyButton onClick={() => clickHandle("J")} value="J" />
        <KeyButton onClick={() => clickHandle("K")} value="K" />
        <KeyButton onClick={() => clickHandle("L")} value="L" />
        <KeyButton onClick={() => clickHandle("M")} value="M" />
        <KeyButton onClick={() => clickHandle("N")} value="N" />
        <KeyButton onClick={() => setIsAlpha(false)} value="123" special />
      </div>

      <div className={styles.row}>
        <KeyButton onClick={() => clickHandle("O")} value="o" />
        <KeyButton onClick={() => clickHandle("P")} value="P" />
        <KeyButton onClick={() => clickHandle("Q")} value="Q" />
        <KeyButton onClick={() => clickHandle("R")} value="R" />
        <KeyButton onClick={() => clickHandle("S")} value="S" />
        <KeyButton onClick={() => clickHandle("T")} value="T" />
        <KeyButton onClick={() => clickHandle("U")} value="U" />
      </div>
      <div className={styles.row}>
        <KeyButton onClick={() => clickHandle("V")} value="V" />
        <KeyButton onClick={() => clickHandle("W")} value="W" />
        <KeyButton onClick={() => clickHandle("X")} value="X" />
        <KeyButton onClick={() => clickHandle("Y")} value="Y" />
        <KeyButton onClick={() => clickHandle("Z")} value="Z" />
        <KeyButton onClick={() => clickHandle("-")} value="-" />
        <KeyButton onClick={() => clickHandle("'")} value="'" />
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

export default AlphaKey;
