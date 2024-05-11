import React, { useState, useEffect } from "react";
import styles from "@/styles/Settings.module.css";
import Switch from "@/components/Switch";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LanguageSelector from "@/components/Radio";
import Slider from "@/components/Slider";
import Arrow from "@/components/Icons/Arrow";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false); // Initial state is false (light mode)

  const handleDarkModeToggle = (isChecked) => {
    setDarkMode(isChecked); // Update dark mode state
  };

  return (
    <>
    <HeadArea title="Tranquillity Cranes | Settings" description="Edit the apps settings to benefit your preferences" />
    <div className={`${styles.main}`}>
      <div
        className={`${styles.settingContainer} ${
          darkMode ? styles.appDark : styles.appLight
        }`}
      >
        <Header />
        <div className={styles.settingContent}>
          <Link href="/profile">
            <Arrow className={styles.backArrow} />
          </Link>
          <div className={styles.settingSection}>
            <h3>Theme</h3>
            <div className={styles.setting}>
              <p>Light / Dark</p>
              <Switch onDarkModeToggle={handleDarkModeToggle} />
            </div>
          </div>
          <div className={styles.settingSection}>
            <h3>Language</h3>
            <div className={styles.setting}>
              <LanguageSelector />
            </div>
          </div>
          <div className={styles.settingSection}>
            <h3>Font Size</h3>
            <div className={styles.settingText}>
              <p>aA</p>
              <Slider />
              <p className={styles.largeText}>aA</p>
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    </div>
    </>
  );
}
