import { useState, useEffect } from 'react';
import styles from './RadialMenu.module.css';
import Link from 'next/link';

export default function RadialMenu() {
  const [showSubButtons, setShowSubButtons] = useState(false);

  useEffect(() => {
    console.log('showSubButtons:', showSubButtons);
  }, []);

  return (
    <div className={styles.circularButtonContainer}>
      <button 
        className={`${styles.mainBtn} ${showSubButtons ? styles.mainBtnActive : ''}`} 
        onClick={() => setShowSubButtons(!showSubButtons)}
      >
        Open Up More Buttons
      </button>
      {showSubButtons && (
        <div className={styles.subButtons}>
          <Link className={styles.link} href="/liveChat"><button className={styles.subBtn}>Chat</button></Link>
          <Link className={styles.link} href="/about"><button className={styles.subBtn}>About</button></Link>
          <Link className={styles.link} href="/sleep"><button className={styles.subBtn}>Sleep</button></Link>
          <Link className={styles.link} href="/activities"><button className={styles.subBtn}>Activities</button></Link>
        </div>
      )}
    </div>
  );
}
