import Link from "next/link";
import { useState } from "react";
import styles from "./NavBar.module.css";
import RadialMenu from "../RadialMenu";
import Egg from "../Icons/Egg";
import Home from "../Icons/Home";

export default function NavBar() {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <Link className={styles.link} href="/home">
            <button>
              <Home />
            </button>
          </Link>
          <h3>Home</h3>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.radialMenu}>
            <RadialMenu />
          </div>
          <h3>Menu</h3>
        </div>
        <div className={styles.innerContainer}>
          <Link className={styles.link} href="/profile">
            <button>
              <Egg />
            </button>
          </Link>
          <h3>Profile</h3>
        </div>
      </div>
    </>
  );
}
