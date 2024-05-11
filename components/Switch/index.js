import React, { useState } from "react";
import styles from "./Switch.module.css"; // Import CSS for styling

const Switch = ({ onDarkModeToggle }) => {
  // Receive onDarkModeToggle as a prop
  const [isChecked, setIsChecked] = useState(false); // Initial state is false (switch off)

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    onDarkModeToggle(!isChecked); // Toggle the state
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
