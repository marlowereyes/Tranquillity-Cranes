import NavBar from "@/components/NavBar";
import styles from "@/styles/Profile.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Header2 from "@/components/Header2";
import Setting from "@/components/Icons/Setting";
import World from "@/components/Icons/World";
import Us from "@/components/Icons/Us";
import Image from "next/image";
import Arrow from "@/components/Icons/Arrow";

export default function Profile() {
    return( 
        <>
            <HeadArea title="Profile" description="Learn about our app"/>
            <main className={`${styles.main}`}>
                <div className={styles.mainProfile}>
                    <Header2 headerName={'Profile'}/>
                    <div className={styles.userInfo}>
                        <Image src={'/images/egg3.png'} width={106} height={132} />
                        <h2>Hello, Marlowe</h2>
                    </div>
                    <div className={styles.profileOptionsContainer}>
                        <Link href="/settings" className={styles.linkContainer}>
                            <div className={styles.settingBtn}>
                                <div className={styles.btnName}>
                                    <Setting /> 
                                    <p>Settings</p>
                                </div>
                                <Arrow />
                            </div>
                        </Link>
                        <Link href="/about" className={styles.linkContainer}>
                            <div className={styles.settingBtn}>
                                <div className={styles.btnName}>
                                    <World /> 
                                    <p>About App</p>
                                </div>
                                <Arrow />
                            </div>
                        </Link>
                        <Link href="/us" className={styles.linkContainer}>
                            <div className={styles.settingBtn}>
                                <div className={styles.btnName}>
                                    <Us /> 
                                    <p>About Us</p>
                                </div>
                                <Arrow />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.logInContainer}>
                        <Link href="/logIn">Log Out</Link>
                    </div>
                    <NavBar/>
                </div>
            </main>
        </>
    )
}