import Header from "@/components/Header";
import styles from "@/styles/Us.module.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Icons/Arrow";
import HeadArea from "@/components/HeadArea";

export default function aboutUs() {
  return (
    <>
    <HeadArea title="Tranquillity Cranes | About Us" description="Get to know the heart behind Tranquillity Cranes"/>
      <div className={styles.main}>
        <div className={styles.mainAUs}>
          <Header />
          <div className={styles.backArrow}>
            <Link href="/profile">
              <Arrow className={styles.flip} />
            </Link>
          </div>
          <h1>About Us</h1>
          <p>
            <span className={styles.bold}>Hello!</span>
            <br />
            <br />
            Our names are
            <span className={styles.bold}>
              {" "}
              Brian Paragas, Marlowe Reyes, & Deluka LGH
            </span>
            , and we are the
            <span className={styles.colorChange}>
              {" "}
              Tranquillity Cranes
            </span>{" "}
            team! As BCIT students of the Digital Design and Development
            program, we designed, tested, and developed this app for our MDIA
            2109 & MDIA 2106 class, showcasing our unique abilities and skills
            that we learned from these classes.
            <Image
              src="/images/brimarluk.png"
              width={350}
              height={250}
              className={styles.usImg}
            />
            Tranquility Cranes is an app and companion designed towards those
            who need a helping hand to get through life’s chaos. We wanted to
            create an app that would help people through stress, anxiety and
            other mental health related issues. Many individuals experience
            stress, anxiety, and other mental health challenges, often without
            easy access to professional help. Our app has the potential to
            bridge this gap by providing users with a convenient platform to
            access resources, learn coping techniques, and connect with a
            supportive community. By creating an app dedicated to mental
            well-being, we're not only offering practical tools for managing
            mental health but also fostering a culture of openness and
            understanding around these important issues.
          </p>
          <NavBar />
        </div>
      </div>
    </>
  );
}
