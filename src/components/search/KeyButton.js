import React from "react";

// Styles
import styles from "./styles/keyButton.module.css";

// KeyButton Component
const KeyButton = (props) => {
  return (
    <span className={styles.key}>
      <button
        onClick={props.onClick}
        className={props.special ? styles.bigBtn : styles.keyButton}
      >
        {props.value}
      </button>
    </span>
  );
};

export default KeyButton;
