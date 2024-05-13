import styles from "./Calander.module.css";
import Link from "next/link";

export default function Calander() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.calanderContainer}>
          <div class={styles.weekend}>Sun</div>
          <div class={styles.weekend}>Mon</div>
          <div class={styles.weekend}>Tue</div>
          <div class={styles.weekend}>Wed</div>
          <div class={styles.weekend}>Thur</div>
          <div class={styles.weekend}>Fri</div>
          <div class={styles.weekend}>Sat</div>

          <div class={styles.old}>28</div>
          <div class={styles.old}>29</div>
          <div class={styles.old}>30</div>
          <Link href="/tasks">
            <div class={styles.box}>1</div>
          </Link>
          <div class={styles.box}>2</div>
          <div class={styles.box}>3</div>
          <div class={styles.box}>4</div>
          <div class={styles.box}>5</div>
          <div class={styles.box}>6</div>
          <div class={styles.box}>7</div>
          <div class={styles.box}>8</div>
          <div class={styles.box}>9</div>
          <div class={styles.box}>10</div>
          <div class={styles.box}>11</div>
          <div class={styles.box}>12</div>
          <div class={styles.box}>13</div>
          <div class={styles.box}>14</div>
          <div class={styles.box}>15</div>
          <div class={styles.box}>16</div>
          <div class={styles.box}>17</div>
          <div class={styles.box}>18</div>
          <div class={styles.box}>19</div>
          <div class={styles.box}>20</div>
          <div class={styles.box}>21</div>
          <div class={styles.box}>22</div>
          <div class={styles.box}>22</div>
          <div class={styles.box}>23</div>
          <div class={styles.box}>24</div>
          <div class={styles.box}>25</div>
          <div class={styles.box}>26</div>
          <div class={styles.box}>27</div>
          <div class={styles.box}>28</div>
          <div class={styles.box}>29</div>
          <div class={styles.box}>30</div>
          <div class={styles.box}>31</div>
        </div>
      </div>
    </>
  );
}
