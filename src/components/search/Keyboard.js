import React, { useState } from "react";

// Custom Component
import AlphaKey from "./AlphaKey";
import NumKey from "./NumKey";

// Styles
import styles from "./styles/keyboard.module.css";

// Keyboard Component
const Keyboard = ({ value, setValue }) => {
  const [isAlpha, setIsAlpha] = useState(true);
  return (
    <div className={styles.keyboard}>
      {isAlpha ? (
        <AlphaKey value={value} setValue={setValue} setIsAlpha={setIsAlpha} />
      ) : (
        <NumKey value={value} setValue={setValue} setIsAlpha={setIsAlpha} />
      )}
    </div>
  );
};

export default Keyboard;
