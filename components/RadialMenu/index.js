import { useState, useEffect } from "react";
import styles from "./RadialMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import Relax from "../Icons/Relax";
import Calendar from "../Icons/Calendar";

export default function RadialMenu() {
  const [showSubButtons, setShowSubButtons] = useState(false);

  useEffect(() => {
    console.log("showSubButtons:", showSubButtons);
  }, []);

  return (
    <div className={styles.circularButtonContainer}>
      <button
        className={`${styles.mainBtn} ${
          showSubButtons ? styles.mainBtnActive : ""
        }`}
        onClick={() => setShowSubButtons(!showSubButtons)}
      >
        <Image src="/images/Logo 2.svg" width={90} height={90}/>
      </button>
      {showSubButtons && (
        <div className={styles.subButtons}>
          <Link className={styles.link} href="/liveSupport">
            <button className={styles.subBtn}>
              <Image src="../images/Chat.svg" width={30} height={30} />
            </button>
          </Link>
          <Link className={styles.link} href="/relax">
            <button className={styles.subBtn}>
              <Relax />
            </button>
          </Link>
          <Link className={styles.link} href="/activities">
            <button className={styles.subBtn}>
              <Calendar />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
