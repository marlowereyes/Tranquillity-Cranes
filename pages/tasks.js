import styles from "@/styles/Activities.module.css";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function task() {
    return (
        <>
        <HeadArea title="Tranquillity Cranes | Tasks" description = "Tasks for the day" /> 
        <div className={styles.mainTasksContainer}>
            <div className={styles.taskContainer}>
                <Header/>
                <div className={styles.taskInfo}>
                    <p className={styles.taskTitle}>Task for the day:</p>
                    <p className={styles.time}>Time: </p>
                    <p className={styles.ttd}>1PM for a walk</p>
                    <p className={styles.duration}>Duration:</p>
                    <p className={styles.minutes}>30 Minutes</p>
                </div>
                <NavBar/>
            </div>
        </div>
        </>
    )
}