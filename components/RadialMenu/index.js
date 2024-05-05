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
        <img src='../images/Logo 2.svg'></img>
      </button>
      {showSubButtons && (
        <div className={styles.subButtons}>
          <Link className={styles.link} href="/liveSupport"><button className={styles.subBtn}><img src='../images/Chat.svg'></img></button></Link>
          <Link className={styles.link} href="/relax"><button className={styles.subBtn}><img src='../images/Sleep.svg'></img></button></Link>
          <Link className={styles.link} href="/activities"><button className={styles.subBtn}><img src='../images/Activities.svg'></img></button></Link>
        </div>
      )}
    </div>
  );
}
