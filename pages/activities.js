import Calander from '@/components/Calander';
import HeadArea from '@/components/HeadArea';
import styles from '@/styles/Activities.module.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';

export default function Activities() {
    return(
        <>
        <HeadArea title="Activities" description="Check Your Activities"/>
        <div className={styles.mainActivitesContainer}>
            <div className={styles.activitiesContainer}>
                <Header/>
                <div className={styles.monthYear}>
                        <p className={styles.month}>May</p>
                        <p className={styles.year}>2024</p>
                </div>
                <div className={styles.calanderPage}>
                    <Calander/>
                    <NavBar/>
                </div>
            </div>
        </div> 
        </>
    )
}


{/* <HeadArea title="Activities" description="Check Your Activities"/>
            <Header/>
            <Calander/>
            <NavBar/> */}