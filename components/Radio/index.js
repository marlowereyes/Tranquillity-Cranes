import { useState } from "react";
import styles from "./Radio.module.css";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className={styles.radioContainer}>
      <label className={styles.radioLabel}>
        <input
          type="radio"
          value="English"
          checked={selectedLanguage === "English"}
          onChange={handleLanguageChange}
          className={styles.radioInput}
        />
        English
      </label>
      <br />
      <label className={styles.radioLabel}>
        <input
          type="radio"
          value="French"
          checked={selectedLanguage === "French"}
          onChange={handleLanguageChange}
          className={styles.radioInput}
        />
        French
      </label>
      <br />
      <label className={styles.radioLabel}>
        <input
          type="radio"
          value="한국인"
          checked={selectedLanguage === "한국인"}
          onChange={handleLanguageChange}
          className={styles.radioInput}
        />
        한국인
      </label>
      <br />
      <label className={styles.radioLabel}>
        <input
          type="radio"
          value="日本語"
          checked={selectedLanguage === "日本語"}
          onChange={handleLanguageChange}
          className={styles.radioInput}
        />
        日本語
      </label>
      <br />
      <label className={styles.radioLabel}>
        <input
          type="radio"
          value="Española"
          checked={selectedLanguage === "Española"}
          onChange={handleLanguageChange}
          className={styles.radioInput}
        />
        Española
      </label>
    </div>
  );
}
