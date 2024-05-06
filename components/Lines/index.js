import styles from "./Lines.module.css";

export default function Lines({ helpLines, showContact, showAbout }) {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.mainHelpContainer}>
          {helpLines &&
            helpLines.map((line, index) => (
              <div key={index} className={styles.card}>
                <h2>{line.line}</h2>
                <h3>{line.description}</h3>
                {showAbout && <p>{line.about}</p>}
                <div className={styles.contacts}>
                {showContact &&
                  line.contact &&
                  line.contact.map((contact, ind) => <div key={ind}>{contact}</div>)}
                  </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
