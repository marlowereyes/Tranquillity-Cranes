import NavBar from "@/components/NavBar";
import styles from "@/styles/About.module.css";
import Link from "next/link";
import Head from "next/head";
import GraphBar from "@/components/GraphBar";
import HeadArea from "@/components/HeadArea";

export default function Profile() {
    return( 
        <>
            <HeadArea title="Profile" description="Learn about our app"/>
            <main className={`${styles.main}`}>
                <Link className={styles.link} href="/about"><button>About</button></Link>
                <NavBar/>
            </main>
        </>
    )
}