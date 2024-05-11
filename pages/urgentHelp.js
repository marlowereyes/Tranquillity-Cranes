import styles from "@/styles/Urgent.module.css";
import { useState } from "react";
import Lines from "@/components/Lines";
import { helpLines } from "@/data/lines";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export default function Home() {
  const [aboutActive, setAboutActive] = useState(true);
  const [contactActive, setContactActive] = useState(true);

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.mainHelpContainer}>
          <Header />
          <h1>Urgent Help Lines</h1>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${
                aboutActive ? styles.activeButton : ""
              }`}
              onClick={() => setAboutActive(!aboutActive)}
            >
              About<span className={styles.check}> ✓</span>
            </button>
            <button
              className={`${styles.button} ${
                contactActive ? styles.activeButton : ""
              }`}
              onClick={() => setContactActive(!contactActive)}
            >
              Contact<span className={styles.check}> ✓</span>
            </button>
          </div>
          <Lines
            helpLines={helpLines}
            showAbout={aboutActive}
            showContact={contactActive}
            className={styles.lines}
          />
          <NavBar />
        </div>
      </main>
    </>
  );
}
