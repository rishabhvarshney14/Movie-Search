import React from "react";

// Styles
import styles from "./styles/message.module.css";

// Message Component
const Message = ({ message, color }) => {
  let classname = styles.waiting;

  if (color === "red") {
    classname = styles.error;
  }

  return (
    <div className={classname}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
