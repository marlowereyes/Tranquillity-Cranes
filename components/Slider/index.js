import { useState } from "react";
import styles from "./Slider.module.css";

export default function Slider() {
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const handleFontSizeChange = (event) => {
    setFontSize(parseInt(event.target.value));
  };

  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        id="fontSizeSlider"
        min="10"
        max="30"
        value={fontSize}
        onChange={handleFontSizeChange}
        className={styles.slider}
      />
      <div style={{ fontSize: `${fontSize}px` }}>Sample Text</div>
    </div>
  );
}
